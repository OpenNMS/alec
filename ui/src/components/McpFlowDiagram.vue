<script setup lang="ts">
// Block diagram of one tool-assisted LLM analysis (ALEC-308): how a request
// goes from ALEC to the model, how the model's tool calls come back to ALEC's
// MCP tool registry inside OpenNMS, and how the final report is stored. Pure
// SVG so it scales with the panel and follows the Feather theme colours.
defineProps<{
	// Rendered inside the MCP endpoint box so the diagram shows the real URL.
	endpointPath?: string
}>()
</script>

<template>
	<svg
		class="mcp-flow"
		viewBox="0 0 1000 480"
		role="img"
		aria-label="ALEC MCP tool loop: ALEC sends a situation and the tool list to the LLM server; the model calls tools; ALEC executes them against OpenNMS and returns results until the model reports."
		data-test="mcp-flow-diagram"
	>
		<defs>
			<marker
				id="mcp-arrow"
				viewBox="0 0 10 10"
				refX="9"
				refY="5"
				markerWidth="7"
				markerHeight="7"
				orient="auto-start-reverse"
			>
				<path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
			</marker>
		</defs>

		<!-- OpenNMS server boundary -->
		<rect x="12" y="12" width="628" height="456" rx="10" class="boundary" />
		<text x="28" y="38" class="boundary-label">OpenNMS server (Karaf)</text>

		<!-- ALEC plugin box -->
		<rect x="28" y="52" width="596" height="402" rx="8" class="plugin" />
		<text x="44" y="76" class="plugin-label">ALEC plugin</text>

		<!-- Callers -->
		<rect x="44" y="92" width="150" height="54" rx="6" class="box" />
		<text x="119" y="114" class="box-title">Root Cause Analysis</text>
		<text x="119" y="132" class="box-sub">on each new situation</text>

		<rect x="44" y="160" width="150" height="54" rx="6" class="box" />
		<text x="119" y="182" class="box-title">LLM clustering</text>
		<text x="119" y="200" class="box-sub">on each cluster interval</text>

		<!-- Tool loop (ALEC's core piece: emphasised outline, same readable fill) -->
		<rect x="222" y="92" width="200" height="122" rx="6" class="box box-core" />
		<text x="322" y="118" class="box-title">Chat tool loop</text>
		<text x="322" y="138" class="box-sub">builds the request,</text>
		<text x="322" y="154" class="box-sub">runs the model's tool calls,</text>
		<text x="322" y="170" class="box-sub">stops at the report call</text>
		<text x="322" y="196" class="box-sub">max 6 rounds (RCA), 4 (clustering)</text>

		<!-- Callers -> loop -->
		<line x1="194" y1="119" x2="220" y2="119" class="edge" marker-end="url(#mcp-arrow)" />
		<line x1="194" y1="187" x2="220" y2="187" class="edge" marker-end="url(#mcp-arrow)" />

		<!-- Registry -->
		<rect x="222" y="252" width="200" height="70" rx="6" class="box box-core" />
		<text x="322" y="278" class="box-title">MCP tool registry</text>
		<text x="322" y="296" class="box-sub">dispatch, size cap,</text>
		<text x="322" y="312" class="box-sub">tool-call metrics (JMX)</text>

		<!-- loop <-> registry -->
		<line x1="307" y1="214" x2="307" y2="250" class="edge" marker-end="url(#mcp-arrow)" />
		<line x1="337" y1="250" x2="337" y2="216" class="edge" marker-end="url(#mcp-arrow)" />
		<text x="352" y="237" class="edge-label edge-label-left">③ call / ④ result</text>

		<!-- Tools -->
		<rect x="44" y="350" width="270" height="90" rx="6" class="box" />
		<text x="179" y="372" class="box-title">In-process tools (Integration API)</text>
		<text x="179" y="392" class="box-sub">list_situations · get_situation · get_node</text>
		<text x="179" y="408" class="box-sub">list_alarms · get_node_neighbors</text>
		<text x="179" y="424" class="box-sub">get_past_analyses · alec_status</text>

		<rect x="330" y="350" width="284" height="90" rx="6" class="box" />
		<text x="472" y="372" class="box-title">REST-backed tools (OpenNMS login)</text>
		<text x="472" y="392" class="box-sub">list_node_events · list_node_resources</text>
		<text x="472" y="408" class="box-sub">get_metric_series · get_device_config</text>
		<text x="472" y="424" class="box-sub">→ GET/POST /opennms/rest/…</text>

		<!-- registry -> tools -->
		<line x1="290" y1="322" x2="200" y2="348" class="edge" marker-end="url(#mcp-arrow)" />
		<line x1="355" y1="322" x2="450" y2="348" class="edge" marker-end="url(#mcp-arrow)" />

		<!-- MCP endpoint -->
		<rect x="444" y="252" width="170" height="70" rx="6" class="box box-dashed" />
		<text x="529" y="274" class="box-title">MCP endpoint</text>
		<text x="529" y="292" class="box-sub">POST {{ endpointPath || '/opennms/rest/alec/mcp' }}</text>
		<text x="529" y="308" class="box-sub">JSON-RPC · admin login</text>
		<line x1="442" y1="287" x2="424" y2="287" class="edge" marker-end="url(#mcp-arrow)" />

		<!-- LLM server (outside) -->
		<rect x="720" y="92" width="250" height="122" rx="8" class="box box-external" />
		<text x="845" y="118" class="box-title">LLM server</text>
		<text x="845" y="138" class="box-sub">LM Studio · Ollama · vLLM · hosted API</text>
		<text x="845" y="158" class="box-sub">OpenAI-compatible /chat/completions</text>
		<text x="845" y="184" class="box-sub">Needs: tool-capable model.</text>
		<text x="845" y="200" class="box-sub">Does NOT need to reach OpenNMS.</text>

		<!-- loop <-> LLM (two arrows) -->
		<line x1="422" y1="118" x2="718" y2="118" class="edge edge-strong" marker-end="url(#mcp-arrow)" />
		<text x="570" y="108" class="edge-label">① situation + tool list (tool_choice=required)</text>
		<line x1="718" y1="160" x2="424" y2="160" class="edge edge-strong" marker-end="url(#mcp-arrow)" />
		<text x="570" y="176" class="edge-label">② tool_call … ⑤ final report_suggestions / group_alarms</text>

		<!-- External MCP client -->
		<rect x="720" y="252" width="250" height="70" rx="8" class="box box-external box-dashed" />
		<text x="845" y="276" class="box-title">External MCP client (optional)</text>
		<text x="845" y="294" class="box-sub">LM Studio chat, Claude Desktop, agents</text>
		<text x="845" y="310" class="box-sub">initialize · tools/list · tools/call</text>
		<line x1="718" y1="287" x2="616" y2="287" class="edge" marker-end="url(#mcp-arrow)" />

		<!-- Result store -->
		<rect x="720" y="366" width="250" height="60" rx="8" class="box" />
		<text x="845" y="390" class="box-title">Stored result</text>
		<text x="845" y="408" class="box-sub">AI Suggestions tab · situations · usage</text>
		<line x1="422" y1="205" x2="718" y2="396" class="edge" marker-end="url(#mcp-arrow)" />
		<text x="628" y="352" class="edge-label">⑥ report stored</text>
	</svg>
</template>

<style lang="scss" scoped>
.mcp-flow {
	width: 100%;
	max-width: 1000px;
	height: auto;
	display: block;
	color: var(--feather-primary-text-on-surface);
	font-family: var(--feather-font-family, sans-serif);
}

.boundary {
	fill: var(--feather-background);
	stroke: var(--feather-border-on-surface);
	stroke-width: 1.5;
	stroke-dasharray: 6 4;
}

.boundary-label {
	font-size: 13px;
	font-weight: 600;
	fill: var(--feather-secondary-text-on-surface);
}

.plugin {
	fill: var(--feather-surface);
	stroke: var(--feather-border-on-surface);
	stroke-width: 1;
}

.plugin-label {
	font-size: 12px;
	font-weight: 600;
	fill: var(--feather-secondary-text-on-surface);
}

// Every box keeps the surface fill so text contrast is the theme's own
// text-on-surface contrast in both light and dark mode; emphasis comes from
// the stroke, never from a darker fill.
.box {
	fill: var(--feather-surface);
	stroke: var(--feather-primary);
	stroke-width: 1.5;
}

.box-core {
	stroke-width: 3;
}

.box-external {
	stroke: var(--feather-secondary-text-on-surface);
}

.box-dashed {
	stroke-dasharray: 4 3;
}

.box-title {
	font-size: 13px;
	font-weight: 600;
	text-anchor: middle;
	fill: var(--feather-primary-text-on-surface);
}

.box-sub {
	font-size: 11px;
	text-anchor: middle;
	fill: var(--feather-primary-text-on-surface);
}

.edge {
	stroke: currentColor;
	stroke-width: 1.4;
	fill: none;
}

.edge-strong {
	stroke-width: 2;
}

.edge-label {
	font-size: 11px;
	text-anchor: middle;
	fill: var(--feather-primary-text-on-surface);
}

.edge-label-left {
	text-anchor: start;
}
</style>
