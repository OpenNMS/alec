export interface IWhoAmIResponse {
	fullName: string
	id: string
	internal: boolean
	roles: string[]
}

export type TEngine = {
	engineName: string
	distanceMeasureName: string
	alpha: number
	beta: number
	epsilon: number
	hellingerW?: number | null
	hellingerBias?: number | null
	// LLM-based clustering engine ("llm"): how often to re-cluster, and the
	// operator-editable clustering prompt.
	clusterFrequencyMs?: number | null
	clusterPrompt?: string | null
}

// Server-returned shape of the LLM integration config (GET /alec/llm/configuration).
// The API key itself is never returned — only whether one is currently stored.
// autoEvaluate gates the auto-fire-on-new-situation behavior; the Re-evaluate
// button works regardless.
export type TLLMConfigStatus = {
	enabled: boolean
	autoEvaluate: boolean
	// OpenAI-compatible API base URL and model id. ALEC ships with NO default,
	// so these are blank on a fresh install until the operator configures them.
	baseUrl: string
	model: string
	// Operator-recorded per-field defaults (set via "Set as default"); blank
	// until recorded. The endpoint/model "Reset to default" controls target
	// these and stay disabled while blank.
	defaultBaseUrl: string
	defaultModel: string
	// systemPrompt is the effective prompt (the stored custom prompt, or the
	// default when none is stored). defaultSystemPrompt is always the built-in
	// default — the UI uses it to power the "Reset to default" button without
	// hard-coding the (long) prompt text in the frontend.
	systemPrompt: string
	defaultSystemPrompt: string
	// The engine's built-in default clustering prompt, served so the UI's
	// "Reset to default" for the LLM engine uses the same text the engine
	// enforces (no hard-coded copy that could drift).
	defaultClusterPrompt?: string
	// Shared "LLM Setup" token budgets (0 = unlimited).
	dailyTokenLimit: number
	monthlyTokenLimit: number
	apiKeyPresent: boolean
	// ALEC-308: MCP tool access for ALEC's own model calls, plus the OpenNMS
	// REST login the events/metrics/device-config tools use. The password is
	// write-only like the API key — only its presence is reported.
	toolsEnabled?: boolean
	opennmsUrl?: string
	opennmsUsername?: string
	opennmsPasswordPresent?: boolean
}

// Wire shape for POST /alec/llm/configuration.
// Send apiKey only when the user actually typed a new one; omitting it lets
// the server keep the existing stored key while still flipping `enabled`.
// Set clearApiKey: true to wipe the stored key (also forces enabled=false server-side).
// baseUrl/model are sent on every save and persisted as-is (no server default).
// defaultBaseUrl/defaultModel carry the operator's recorded per-field defaults.
export type TLLMConfigRequest = {
	enabled: boolean
	autoEvaluate: boolean
	baseUrl?: string
	model?: string
	defaultBaseUrl?: string
	defaultModel?: string
	// Custom system prompt. Blank falls back to the server default.
	systemPrompt?: string
	// Shared "LLM Setup" token budgets (0 = unlimited).
	dailyTokenLimit?: number
	monthlyTokenLimit?: number
	apiKey?: string
	clearApiKey?: boolean
	// ALEC-308 (see TLLMConfigStatus). opennmsPassword is sent only when typed;
	// clearOpennmsPassword: true wipes the stored one.
	toolsEnabled?: boolean
	opennmsUrl?: string
	opennmsUsername?: string
	opennmsPassword?: string
	clearOpennmsPassword?: boolean
}

// POST /alec/llm/validate — probe the endpoint/model/key. Blank fields fall
// back to the stored config server-side, so an already-saved key validates
// without re-sending it. `ok=false` carries a human-readable reason in message.
export type TLLMValidationResult = {
	ok: boolean
	message: string
}

// GET /alec/llm/budget — shared token-budget status. `blocked` means the daily
// or monthly cap is reached and ALEC has paused LLM requests; `reason` explains.
export type TLLMBudget = {
	dailyLimit: number
	dailyUsed: number
	monthlyLimit: number
	monthlyUsed: number
	blocked: boolean
	reason: string | null
}

// GET /alec/llm/suggestions/{situationId}.
// status one of "pending" | "ready" | "failed". Server returns 204 when no
// record exists yet — the service layer maps that to null below.
export type TLLMSuggestion = {
	situationId: string
	status: 'pending' | 'ready' | 'failed'
	rootCauses: string[]
	resolutions: string[]
	requestedAt: number
	completedAt: number | null
	error: string | null
	model: string
}

// GET /alec/llm/usage?days=N — aggregated rollup for the config-page meter.
export type TLLMUsage = {
	daysWindow: number
	totalTokens: number
	inputTokens: number
	outputTokens: number
	cacheReadInputTokens: number
	cacheCreationInputTokens: number
	calls: number
	successfulCalls: number
	failedCalls: number
	// ALEC-308: MCP data-tool calls made by ALEC's own LLM requests in the window.
	toolCalls?: number
	cacheHitRatio: number
	estimatedCostUsd: number
	pricingNote: string
}

// GET /alec/mcp/status — the MCP tool inventory and usage counters (ALEC-308).
// `available` is false for tools that need an OpenNMS REST login that isn't
// configured; such tools are hidden from the model and from MCP clients.
export type TMCPTool = {
	name: string
	description: string
	available: boolean
	// True for tools that change state (never offered to the model).
	writeAccess?: boolean
	// "alec" for ALEC's own tools, else the contributing bundle.
	source?: string
}

export type TMCPStatus = {
	toolsEnabled: boolean
	opennmsRestConfigured: boolean
	opennmsUrl: string
	// Path of the OpenNMS MCP server that serves the tools to external clients.
	endpointPath: string
	// Whether that server (the opennms-mcp-server feature) is active.
	nativeServerInstalled?: boolean
	tools: TMCPTool[]
	stats: {
		sinceMs: number
		toolCalls: number
		toolErrors: number
		rate1m: number
		rate5m: number
		byConsumer: Record<string, number>
		byTool: Record<string, number>
	}
}
