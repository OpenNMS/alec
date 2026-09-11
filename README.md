#  Architecture for Learning Enabled Correlation (ALEC) [![CircleCI](https://circleci.com/gh/OpenNMS-Plugins/alec.svg?style=svg)](https://circleci.com/gh/OpenNMS-Plugins/alec)

The OpenNMS Architecture for Learning Enabled Correlation (ALEC) provides a framework for performing correlation of alarms (i.e. faults) into higher level situations.

Installation instructions and additional documentation is available at: https://docs.opennms.com/alec/latest/index.html

## Architecture

ALEC runs inside OpenNMS (or Sentinel) as a set of OSGi bundles installed from a KAR:

| Layer | Bundles | Role |
|---|---|---|
| Datasources | `datasource/*` | Feed alarms, inventory and feedback into the engine; the *direct* datasource reads the OpenNMS Integration API in-process, the *Kafka* datasource streams them to Sentinel. |
| Engines | `engine/dbscan`, `engine/llm`, `engine/cluster` | Group alarms into situations — density-based clustering over a time/topology graph, or an LLM asked to group the alarms. |
| Driver | `driver/main` | Owns the engine lifecycle and tick loop, forwards situations, and reports engine metrics over JMX. |
| Features | `features/llm-suggestions` | LLM root cause analysis for each situation (up to three causes and resolutions). |
| | `features/mcp` | ALEC's tools for the OpenNMS MCP server: read-only tools over OpenNMS data published as Integration API tool providers, the shared OpenAI-style tool loop used by root cause analysis and LLM clustering, and tool-call and token-usage metrics. |
| | `features/ui` | The Vue plugin UI and the configuration REST endpoints. |

### LLM tool access (MCP)

When tool access is enabled on the *LLM Setup* tab, ALEC's own model calls are no longer single-shot. The model is offered ALEC's tools and may call them before it reports; ALEC executes every call itself and feeds the result back, so the LLM server never needs to reach OpenNMS:

```
 OpenNMS server                                                   LLM server
 +-----------------------------------------------------------+   +--------------------+
 | ALEC                                                      |   | LM Studio, Ollama, |
 |  RCA / clustering --> chat tool loop --(1) alarms+tools-->|-->| vLLM, hosted API   |
 |                          ^     |   <--(2) tool_call ------|<--|                    |
 |                     (4)  |     | (3)                      |   +--------------------+
 |                          |     v                          |
 |                   MCP tool registry  <-- OpenNMS MCP server |<-- external MCP client
 |                    /              \      (/rest/mcp)       |    (LM Studio chat,
 |   Integration API tools      REST-backed tools            |     Claude Desktop, ...)
 |   situations, nodes,         events, metrics,             |
 |   alarms, topology           device configuration         |
 +-----------------------------------------------------------+
```

1. ALEC sends the situation (or the alarms to cluster) plus the tool list, forcing a tool call.
2. The model calls a tool, e.g. `get_node_neighbors(nodeId: 17)`.
3. ALEC's registry dispatches it. Every ALEC tool is an OpenNMS Integration API `McpToolProvider` service, so the OpenNMS MCP server (`opennms-mcp-server`, installed by the ALEC KAR) advertises the same tools to external clients. In-process tools read the Integration API; events, metrics and device configuration go through the OpenNMS REST API with the configured login.
4. The result is appended to the conversation; steps 2–4 repeat up to a round cap, then the model must call the report tool (`report_suggestions` / `group_alarms`).

External clients reach the tools through the OpenNMS MCP server at `POST /opennms/rest/mcp` (Streamable HTTP, stateless), behind the regular OpenNMS REST login. Tool-call counts and LLM token usage (total, per bucket, per consumer, and as per-second rates) are Dropwizard gauges the driver publishes over JMX next to the engine's own, so OpenNMS charts them as "ALEC Graph Stats" with no extra configuration.

### Usage

1. Open **Plugins > ALEC**, click the gear, and configure the LLM endpoint, model and API key on the **LLM Setup** tab (any OpenAI-compatible server; the model must support tool calling).
2. Tick **Give the model access to ALEC's MCP tools**. The **(i)** next to it explains the flow and lists the tools installed on this system.
3. Enter an OpenNMS REST login for the events, metrics and device-configuration tools. Use a dedicated read-only account (`ROLE_USER` + `ROLE_READONLY`; add `ROLE_DEVICE_CONFIG_BACKUP` for configuration backups), never an administrator. Leave the URL blank for the local server.
4. Click **Check tool access**. ALEC verifies the login, then asks the model to call `alec_status` and report back; you get the model's own *Yes*/*No* with a one-line explanation.
5. **Save Changes**. When turning tool access on, or after changing the endpoint, model, key or login, the page will not save until the check returned *Yes* for those values; a configuration already saved with tool access on needs no re-check for unrelated edits. The server rejects a save that enables tool access without a working login. From then on each root cause analysis (and each LLM clustering request, if that engine is selected) may make several tool-assisted rounds; the count of tool calls appears in the usage summary and in the JMX metrics.

To use the tools from an MCP client instead, point it at the OpenNMS MCP server, `http://<host>:8980/opennms/rest/mcp`, with HTTP Basic credentials of an OpenNMS user holding `ROLE_REST` or `ROLE_ADMIN`, for example in LM Studio's `mcp.json`:

```json
{ "mcpServers": { "opennms": {
    "url": "http://localhost:8980/opennms/rest/mcp",
    "headers": { "Authorization": "Basic YWRtaW46YWRtaW4=" } } } }
```

Full reference: `docs/modules/reference/pages/mcp-server.adoc`.

## Building & developing ALEC

See the [development guide](DEVEL.md) for details.
