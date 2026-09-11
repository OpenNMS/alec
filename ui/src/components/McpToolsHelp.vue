<script setup lang="ts">
// The verbose "(i)" explanation for the MCP tool-access option on the LLM Setup
// tab (ALEC-308): what the MCP server is, how a tool-assisted analysis flows,
// what the tools expose, and what it costs. Kept out of AccountSettings.vue so
// the settings page stays readable.
import McpFlowDiagram from '@/components/McpFlowDiagram.vue'
import { TMCPStatus } from '@/types/TUser'

defineProps<{
	// Live tool inventory from GET /alec/mcp/status; null while loading or
	// when the MCP bundle is not installed.
	status: TMCPStatus | null
	// Absolute URL of the MCP endpoint for external clients.
	endpointUrl: string
}>()
</script>

<template>
	<div class="mcp-help" data-test="llm-tools-help-popover">
		<h4>What the MCP server is</h4>
		<p>
			OpenNMS ships a <strong>Model Context Protocol (MCP) server</strong>
			(the <code>opennms-mcp-server</code> feature of the Integration API)
			that exposes tools over OpenNMS data to MCP clients. ALEC extends it:
			every ALEC tool is an Integration API <em>tool provider</em>, so the
			OpenNMS server advertises ALEC's tools next to its own — situations,
			node inventory, current alarms, discovered topology neighbours, recent
			events, collected metrics, device configuration backups and ALEC's
			past analyses. A tool is a small function with a name, a description
			and a JSON argument schema; the model reads those descriptions and
			decides for itself which tools to call and with which arguments.
		</p>

		<h4>How a tool-assisted analysis flows</h4>
		<McpFlowDiagram :endpoint-path="status?.endpointPath" />
		<ol>
			<li>
				<strong>ALEC → LLM.</strong> For a new situation (root cause analysis) or
				a cluster interval (LLM clustering), ALEC sends the alarms to the LLM
				server together with the list of tools and forces a tool call
				(<code>tool_choice: required</code>), so the model can never answer in
				free text.
			</li>
			<li>
				<strong>LLM → ALEC.</strong> The model replies with a tool call — for
				example <code>get_node_neighbors(nodeId: 17)</code>.
			</li>
			<li>
				<strong>ALEC executes it.</strong> The call is dispatched through the MCP
				tool registry inside the OpenNMS JVM: in-process tools read the
				OpenNMS Integration API directly; events, metrics and device
				configuration are read through the OpenNMS REST API with the login
				below.
			</li>
			<li>
				<strong>ALEC → LLM.</strong> The result is appended to the conversation
				and the exchange continues. Results are size-capped so one tool cannot
				flood the model's context.
			</li>
			<li>
				<strong>Loop.</strong> Steps 2–4 repeat for as many rounds as the model
				needs, up to a cap (6 rounds for root cause analysis, 4 for clustering).
				On the final round only the report tool is offered, so an exploring
				model is still made to conclude.
			</li>
			<li>
				<strong>Report.</strong> The model calls <code>report_suggestions</code>
				(or <code>group_alarms</code> for clustering); the arguments are
				schema-checked and stored exactly as before.
			</li>
		</ol>
		<p>
			The LLM server never connects to OpenNMS — every tool call is executed
			by ALEC on the model's behalf — so nothing changes in your network
			topology or firewall rules. What the LLM server <em>does</em> need is a
			model that supports tool/function calling reliably; small models
			often call tools with wrong arguments or never report, and the check
			button below will tell you.
		</p>

		<h4>External MCP clients</h4>
		<p>
			ALEC's tools are served by the OpenNMS MCP server at
			<code data-test="llm-tools-endpoint">{{ endpointUrl }}</code>
			(Streamable HTTP, stateless) for interactive use from an MCP-capable
			client such as LM Studio's chat, Claude Desktop, Claude Code or an
			agent framework. The client authenticates with an OpenNMS login
			(HTTP Basic) holding the <code>ROLE_REST</code> or
			<code>ROLE_ADMIN</code> role; OpenNMS's own write tools are offered
			to administrators only, and ALEC's tools are all read-only. That
			endpoint is always available while the server feature is installed;
			the checkbox only controls whether ALEC's own analyses use the tools.
		</p>
		<p
			v-if="status && status.nativeServerInstalled === false"
			class="mcp-help-warning"
			data-test="llm-tools-native-missing"
		>
			The OpenNMS MCP server bundle is not active on this system, so external
			clients cannot reach the tools yet. ALEC's own analyses are unaffected.
			Install it from the Karaf shell with
			<code>feature:install opennms-mcp-server</code>.
		</p>

		<h4>Which OpenNMS account to use</h4>
		<p>
			The REST-backed tools run with the OpenNMS login entered below, so give
			them a <strong>dedicated read-only account</strong> rather than an
			administrator: a user with only <code>ROLE_USER</code> and
			<code>ROLE_READONLY</code> can read events, resources and metrics; add
			<code>ROLE_DEVICE_CONFIG_BACKUP</code> only if the model should read
			device configuration backups. Do not grant <code>ROLE_REST</code> or
			<code>ROLE_ADMIN</code> — they allow writes, and nothing here needs
			them. The login is verified against <code>/rest/info</code> both by
			<em>Check tool access</em> and on every save that enables the option.
		</p>

		<h4>What the model can see</h4>
		<p>
			With tools enabled, the model can read more than the situation's alarms:
			node labels, IP and SNMP interfaces, categories and asset data, other
			alarms on those nodes, topology links, the last events, metric
			summaries and — if you ask for it — device configuration text with
			password, secret and community lines redacted. For a hosted provider
			this data leaves your network; for a locally hosted model it does not.
			Everything is read-only: no tool acknowledges, clears or changes
			anything.
		</p>

		<h4>Cost and load</h4>
		<p>
			Each tool round is a full chat request, so a tool-assisted analysis
			uses several times the tokens of a single-shot one and takes longer. The
			token budgets above apply to the whole exchange. The number of tool
			calls is recorded per analysis (see <em>Tool calls</em> in the usage
			summary) and exposed as ALEC metrics over JMX, where OpenNMS charts
			them alongside the engine's graph statistics.
		</p>

		<h4 v-if="status">ALEC and plugin tools on this system</h4>
		<p v-if="status" class="mcp-tool-list-note">
			OpenNMS's own built-in tools (node search, alarm updates, events) are
			served by the same server but are not listed here; ask the server's
			<code>tools/list</code> for the complete catalogue.
		</p>
		<ul v-if="status" class="mcp-tool-list" data-test="llm-tools-list">
			<li v-for="tool in status.tools" :key="tool.name">
				<code>{{ tool.name }}</code>
				<span v-if="tool.writeAccess" class="mcp-tool-unavailable">
					(writes — never offered to the model)
				</span>
				<span v-else-if="!tool.available" class="mcp-tool-unavailable">
					(needs the OpenNMS login)
				</span>
				<span
					v-if="tool.source && tool.source !== 'alec'"
					class="mcp-tool-source"
				>
					[{{ tool.source }}]
				</span>
				<span class="mcp-tool-desc"> — {{ tool.description }}</span>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.mcp-help {
	margin: 8px 0 12px;
	padding: 12px 16px;
	border: 1px solid var(--feather-border-on-surface);
	border-radius: 6px;
	background: var(--feather-surface);
	font-size: 13px;
	line-height: 1.5;
	color: var(--feather-primary-text-on-surface);
	max-width: 960px;

	h4 {
		margin: 12px 0 4px;
		font-size: 13px;
		font-weight: 600;

		&:first-child {
			margin-top: 0;
		}
	}

	p {
		margin: 4px 0 8px;
	}

	ol,
	ul {
		margin: 4px 0 8px;
		padding-left: 22px;
	}

	li {
		margin: 3px 0;
	}

	code {
		background: var(--feather-elevation-background-2);
		padding: 0 3px;
		border-radius: 3px;
		font-size: 12px;
	}
}

.mcp-tool-list {
	.mcp-tool-desc {
		color: var(--feather-secondary-text-on-surface);
	}

	.mcp-tool-unavailable {
		color: var(--feather-warning);
		font-size: 12px;
	}

	.mcp-tool-source {
		color: var(--feather-secondary-text-on-surface);
		font-size: 12px;
	}
}

.mcp-help-warning {
	color: var(--feather-warning);
}
</style>
