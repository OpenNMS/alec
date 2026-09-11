<script setup lang="ts">
import { FeatherRadioGroup, FeatherRadio } from '@featherds/radio'
import SituationListBtn from '@/elements/SituationListBtn.vue'
import { FeatherCheckbox } from '@featherds/checkbox'
import { FeatherInput } from '@featherds/input'
import { FeatherTextarea } from '@featherds/textarea'
import MarkComplete from '@featherds/icon/action/MarkComplete'
import Help from '@featherds/icon/action/Help'
import Info from '@featherds/icon/action/Info'
import Restore from '@featherds/icon/action/Restore'
import ExpandMore from '@featherds/icon/navigation/ExpandMore'
import { FeatherIcon } from '@featherds/icon'
import CONST from '@/helpers/constants'
import { useUserStore } from '@/store/useUserStore'
import { computed, markRaw, onMounted, onUnmounted, ref, watch } from 'vue'
import { FeatherButton } from '@featherds/button'
import { FeatherSnackbar } from '@featherds/snackbar'
import {
	FeatherTab,
	FeatherTabContainer,
	FeatherTabPanel
} from '@featherds/tabs'
import { FeatherSelect } from '@featherds/select'
import {
	closeAllOpenSituations,
	reEvaluateAllOpenAlarms,
	validateLLMConfig,
	validateLLMTools,
	getMCPStatus,
	getLastLlmConfigError
} from '@/services/AlecService'
import McpToolsHelp from '@/components/McpToolsHelp.vue'
import {
	TLLMConfigRequest,
	TLLMValidationResult,
	TMCPStatus
} from '@/types/TUser'
import {
	endpointSuggestions,
	modelSuggestionsForUrl,
	providerForUrl
} from '@/helpers/llmSuggestions'

// Humanize a token count for display: 1234567 -> "1.2M", 4800 -> "4.8K".
// Raw count goes into the title attribute for hover.
const humanizeTokens = (n: number): string => {
	if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
	if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K'
	return String(n)
}

// Dollar-value estimation is intentionally disabled for now — the cost model is
// being reworked separately. Keep this helper (and its callsite, commented out
// in the template) so it can be restored once the new estimation lands.
// const formatUsd = (n: number): string => {
// 	if (n < 0.01) return '~$0.00'
// 	return '~$' + n.toFixed(2)
// }

const Icons = markRaw({
	MarkComplete,
	Help,
	Info,
	Restore,
	ExpandMore
})

const ENGINE_DEFAULTS = {
	alpha: 145,
	beta: 0.55,
	epsilon: 150,
	hellingerW: 4851.28,
	hellingerBias: -1986.00
}

const userStore = useUserStore()
const engineName = ref(userStore.engineInfo?.engineName || CONST.ENGINE_DBSCAN)
// Hellinger is the system default on a fresh install (no saved config).
// If a saved config exists, honour what's persisted.
const hellinger = ref(
	userStore.engineInfo
		? userStore.engineInfo.distanceMeasureName === CONST.HELLINGER_OPTION
		: true
)
const alpha = ref(userStore.engineInfo?.alpha ?? ENGINE_DEFAULTS.alpha)
const beta = ref(userStore.engineInfo?.beta ?? ENGINE_DEFAULTS.beta)
const epsilon = ref(userStore.engineInfo?.epsilon ?? ENGINE_DEFAULTS.epsilon)
const hellingerW = ref(
	userStore.engineInfo?.hellingerW ?? ENGINE_DEFAULTS.hellingerW
)
const hellingerBias = ref(
	userStore.engineInfo?.hellingerBias ?? ENGINE_DEFAULTS.hellingerBias
)

const isClustering = computed(() => engineName.value === CONST.ENGINE_DBSCAN)
const showHellingerVars = computed(() => isClustering.value && hellinger.value)

// --- LLM-based clustering engine (ALEC-301) ---
const isLlmEngine = computed(() => engineName.value === CONST.ENGINE_LLM)
// A "valid LLM setup" = endpoint + model + a stored API key (configured on the
// LLM Setup tab). Read from the persisted config, not the unsaved form.
const llmSetupValid = computed(
	() =>
		!!userStore.llmConfig?.baseUrl &&
		!!userStore.llmConfig?.model &&
		!!userStore.llmConfig?.apiKeyPresent
)
// How often ALEC asks the LLM to re-cluster. Stored in ms; chosen in minutes.
const CLUSTER_FREQUENCY_OPTIONS = [
	{ label: 'Every minute', value: 60000 },
	{ label: 'Every 5 minutes', value: 300000 },
	{ label: 'Every 15 minutes', value: 900000 },
	{ label: 'Every 30 minutes', value: 1800000 },
	{ label: 'Every hour', value: 3600000 }
]
// FeatherSelect binds the selected option object; we read .value (ms) on save.
const clusterFrequencyOption = ref(
	CLUSTER_FREQUENCY_OPTIONS.find(
		(o) => o.value === (userStore.engineInfo?.clusterFrequencyMs ?? 300000)
	) ?? CLUSTER_FREQUENCY_OPTIONS[1]
)
// Default clustering prompt. The operator can edit it (mirrors the RCA system
// prompt). Keep in sync with the engine's built-in default (ALEC-301 phase 3b).
// The default clustering prompt is served by the server (llmConfig
// .defaultClusterPrompt = the engine's built-in constant), exactly like the RCA
// defaultSystemPrompt — the UI never hardcodes it, so the UI and engine defaults
// cannot drift. Blank until the config loads; onMounted hydrates it, and a blank
// clusterPrompt on save makes the engine fall back to its own default anyway.
const llmDefaultClusterPrompt = ref(userStore.llmConfig?.defaultClusterPrompt ?? '')
const clusterPrompt = ref(
	userStore.engineInfo?.clusterPrompt || llmDefaultClusterPrompt.value
)
const clusterPromptIsCustom = computed(
	() =>
		!!llmDefaultClusterPrompt.value &&
		clusterPrompt.value.trim() !== llmDefaultClusterPrompt.value.trim()
)
const resetClusterPromptToDefault = () => {
	clusterPrompt.value = llmDefaultClusterPrompt.value
}

// LLM integration (ALEC-299). API key is write-only from the UI; the
// server returns only `apiKeyPresent` so a stored key is never echoed back.
//
// llmConfigLoaded guards the save: until the stored config has actually been
// fetched into the form, saving unrelated (engine) settings must NOT post the
// LLM section — the blank initial form values would overwrite the stored
// endpoint/model/prompt.
const llmConfigLoaded = ref(userStore.llmConfig !== null)
const llmEnabled = ref(userStore.llmConfig?.enabled ?? false)
// Auto-evaluate default true matches server-side (preserves existing automatic
// behavior). When false, new situations get no LLM call until the user clicks
// Re-evaluate on the AI Suggestions tab.
const llmAutoEvaluate = ref(userStore.llmConfig?.autoEvaluate ?? true)
// OpenAI-compatible endpoint + model. ALEC ships with NO default: both start
// blank and the operator chooses a provider/model (the comboboxes below offer
// curated suggestions but don't pre-fill). Each field also carries an
// operator-recorded "default" (set via "Set as default") used by "Reset to
// default" — both blank until recorded.
const llmBaseUrl = ref(userStore.llmConfig?.baseUrl ?? '')
const llmModel = ref(userStore.llmConfig?.model ?? '')
const llmDefaultBaseUrl = ref(userStore.llmConfig?.defaultBaseUrl ?? '')
const llmDefaultModel = ref(userStore.llmConfig?.defaultModel ?? '')
// Shared "LLM Setup" token budgets (0 = unlimited). Stored as numbers; the
// number inputs bind to these.
const llmDailyTokenLimit = ref(userStore.llmConfig?.dailyTokenLimit ?? 0)
const llmMonthlyTokenLimit = ref(userStore.llmConfig?.monthlyTokenLimit ?? 0)
// The system prompt is editable. The server hands us both the effective prompt
// (stored or default) and the canonical default — we hold the default so the
// Reset button doesn't need the long text hard-coded here. Until the config
// loads we fall back to empty strings; onMounted hydrates both.
const llmSystemPrompt = ref(userStore.llmConfig?.systemPrompt ?? '')
const llmDefaultSystemPrompt = ref(userStore.llmConfig?.defaultSystemPrompt ?? '')
// True once we know the default and the textarea has been edited away from it —
// drives the enabled state of the Reset button.
const llmSystemPromptIsCustom = computed(
	() =>
		llmDefaultSystemPrompt.value.length > 0 &&
		llmSystemPrompt.value.trim() !== llmDefaultSystemPrompt.value.trim()
)
const resetSystemPromptToDefault = () => {
	llmSystemPrompt.value = llmDefaultSystemPrompt.value
}

// --- Endpoint / Model: reset-to-default + set-as-default ---
// "Reset to default" restores the recorded default; enabled only once a default
// exists and the field has drifted from it. "Set as default" records the current
// value as that field's default; enabled when the field is non-blank and differs
// from the recorded default. Both persist on Save.
const canResetBaseUrl = computed(
	() =>
		llmDefaultBaseUrl.value.trim().length > 0 &&
		llmBaseUrl.value.trim() !== llmDefaultBaseUrl.value.trim()
)
const canResetModel = computed(
	() =>
		llmDefaultModel.value.trim().length > 0 &&
		llmModel.value.trim() !== llmDefaultModel.value.trim()
)
const canSetBaseUrlDefault = computed(
	() =>
		llmBaseUrl.value.trim().length > 0 &&
		llmBaseUrl.value.trim() !== llmDefaultBaseUrl.value.trim()
)
const canSetModelDefault = computed(
	() =>
		llmModel.value.trim().length > 0 &&
		llmModel.value.trim() !== llmDefaultModel.value.trim()
)
const resetBaseUrlToDefault = () => {
	llmBaseUrl.value = llmDefaultBaseUrl.value
}
const resetModelToDefault = () => {
	llmModel.value = llmDefaultModel.value
}
const setBaseUrlDefault = () => {
	llmDefaultBaseUrl.value = llmBaseUrl.value.trim()
}
const setModelDefault = () => {
	llmDefaultModel.value = llmModel.value.trim()
}

// --- Endpoint / Model suggestion comboboxes ---
// The fields stay free-text (type any URL/model — essential for local servers);
// these dropdowns just offer curated suggestions. Model suggestions are
// contextual to the entered endpoint. See helpers/llmSuggestions.ts.
const endpointOptions = endpointSuggestions()
const showEndpointMenu = ref(false)
const showModelMenu = ref(false)
const modelOptions = computed(() => modelSuggestionsForUrl(llmBaseUrl.value))
const matchedProvider = computed(() => providerForUrl(llmBaseUrl.value))
const pickEndpoint = (url: string) => {
	llmBaseUrl.value = url
	showEndpointMenu.value = false
}
const pickModel = (id: string) => {
	llmModel.value = id
	showModelMenu.value = false
}
// Close any open suggestion menu when clicking outside the combobox.
const closeMenusOnOutside = (e: MouseEvent) => {
	const target = e.target as HTMLElement | null
	if (!target || !target.closest('.llm-combo')) {
		showEndpointMenu.value = false
		showModelMenu.value = false
	}
}
const llmApiKey = ref('')
const llmApiKeyPresent = ref(userStore.llmConfig?.apiKeyPresent ?? false)
const llmApiKeyCleared = ref(false)

// Validate (test) the endpoint/model/key without saving.
const llmValidating = ref(false)
const llmValidationResult = ref<TLLMValidationResult | null>(null)

// True when there's no key the server could test — none typed and none stored.
const llmCannotValidate = computed(
	() =>
		llmApiKey.value.trim().length === 0 &&
		(!llmApiKeyPresent.value || llmApiKeyCleared.value)
)

const validateLlm = async () => {
	llmValidationResult.value = null
	llmValidating.value = true
	try {
		// Send the current form values. Send the typed key if present; otherwise
		// omit it so the server validates the already-stored key.
		const req: TLLMConfigRequest = {
			enabled: llmEnabled.value,
			autoEvaluate: llmAutoEvaluate.value,
			baseUrl: llmBaseUrl.value.trim(),
			model: llmModel.value.trim()
		}
		const typedKey = llmApiKey.value.trim()
		if (typedKey.length > 0) {
			req.apiKey = typedKey
		}
		llmValidationResult.value = await validateLLMConfig(req)
	} finally {
		llmValidating.value = false
	}
}

// --- MCP tool access (ALEC-308) ---
// When on, ALEC's own model calls (root cause analysis + LLM clustering) offer
// the model the read-only MCP tools and execute its tool calls. The OpenNMS
// REST login is optional: it unlocks the events/metrics/device-config tools.
// The password is write-only, like the API key.
const llmToolsEnabled = ref(userStore.llmConfig?.toolsEnabled ?? false)
const llmOpennmsUrl = ref(userStore.llmConfig?.opennmsUrl ?? '')
const llmOpennmsUsername = ref(userStore.llmConfig?.opennmsUsername ?? '')
const llmOpennmsPassword = ref('')
const llmOpennmsPasswordPresent = ref(
	userStore.llmConfig?.opennmsPasswordPresent ?? false
)
const llmOpennmsPasswordCleared = ref(false)
const showToolsHelp = ref(false)
const mcpStatus = ref<TMCPStatus | null>(null)
const llmValidatingTools = ref(false)
const llmToolsValidationResult = ref<TLLMValidationResult | null>(null)
// Absolute URL external MCP clients connect to; the path comes from the
// server when known so the two can't drift.
const mcpEndpointUrl = computed(() => {
	const path = mcpStatus.value?.endpointPath || '/opennms/rest/mcp'
	const origin =
		typeof window !== 'undefined' && window.location ? window.location.origin : ''
	return origin + path
})
const refreshMcpStatus = async () => {
	const result = await getMCPStatus()
	mcpStatus.value = result || null
}
const clearOpennmsPassword = () => {
	llmOpennmsPassword.value = ''
	llmOpennmsPasswordCleared.value = true
	llmOpennmsPasswordPresent.value = false
}
// Typing a new password after "Clear password" replaces the stored one; the
// pending clear must not win over it on save.
watch(llmOpennmsPassword, (value) => {
	if (value.trim().length > 0 && llmOpennmsPasswordCleared.value) {
		llmOpennmsPasswordCleared.value = false
	}
})
// Adds the OpenNMS login fields as shown in the form. URL and username are
// always sent — an explicit blank clears the stored value, an omitted field
// would keep it — while the password goes only when typed (never a stored
// secret).
const withOpennmsLogin = (req: TLLMConfigRequest): TLLMConfigRequest => {
	req.opennmsUrl = llmOpennmsUrl.value.trim()
	req.opennmsUsername = llmOpennmsUsername.value.trim()
	const pass = llmOpennmsPassword.value.trim()
	if (pass.length > 0) req.opennmsPassword = pass
	return req
}
// The stored OpenNMS password is only ever sent to the URL it was saved with
// (same rule as the API key): a different URL needs the password typed again.
const normalizeOpennmsUrl = (u: string | undefined) =>
	(u && u.trim() ? u.trim() : 'http://localhost:8980/opennms')
		.replace(/\/+$/, '')
		.toLowerCase()
const llmOpennmsUrlNeedsPassword = computed(
	() =>
		llmOpennmsPasswordPresent.value &&
		!llmOpennmsPasswordCleared.value &&
		llmOpennmsPassword.value.trim().length === 0 &&
		normalizeOpennmsUrl(llmOpennmsUrl.value) !==
			normalizeOpennmsUrl(userStore.llmConfig?.opennmsUrl)
)
// Save gate: with the checkbox set, the form may only be saved after "Check
// tool access" passed for the values currently in the form. The check's
// fingerprint covers every field the probe depends on, so editing any of them
// (endpoint, model, key, OpenNMS login) invalidates the check until it is run
// again. The server enforces the login part too (presence + /rest/info probe).
const llmToolsFingerprint = computed(() =>
	JSON.stringify([
		llmBaseUrl.value.trim(),
		llmModel.value.trim(),
		llmApiKey.value.trim(),
		llmApiKeyCleared.value,
		llmOpennmsUrl.value.trim(),
		llmOpennmsUsername.value.trim(),
		llmOpennmsPassword.value.trim(),
		llmOpennmsPasswordCleared.value
	])
)
const llmToolsCheckedFingerprint = ref<string | null>(null)
const llmToolsValidated = computed(
	() =>
		llmToolsValidationResult.value?.ok === true &&
		llmToolsCheckedFingerprint.value === llmToolsFingerprint.value
)
// True when tool access is on and the login is incomplete: no username, or no
// password either typed or stored.
const llmToolsLoginMissing = computed(
	() =>
		llmOpennmsUsername.value.trim().length === 0 ||
		(llmOpennmsPassword.value.trim().length === 0 &&
			(!llmOpennmsPasswordPresent.value || llmOpennmsPasswordCleared.value))
)
// True when the values the tool check depends on differ from what is saved.
// A stored configuration with tool access on was checked (UI) and its login
// verified (server) when it was saved, so it needs no re-check until the
// endpoint, model, key or OpenNMS login changes — or tool access is being
// turned on now.
const llmToolsDirty = computed(() => {
	const stored = userStore.llmConfig
	if (!stored || !stored.toolsEnabled) return true
	return (
		llmBaseUrl.value.trim() !== (stored.baseUrl ?? '') ||
		llmModel.value.trim() !== (stored.model ?? '') ||
		llmApiKey.value.trim().length > 0 ||
		llmApiKeyCleared.value ||
		llmOpennmsUrl.value.trim() !== (stored.opennmsUrl ?? '') ||
		llmOpennmsUsername.value.trim() !== (stored.opennmsUsername ?? '') ||
		llmOpennmsPassword.value.trim().length > 0 ||
		llmOpennmsPasswordCleared.value
	)
})
// The reason a save is blocked by the MCP block, or '' when it may proceed.
const llmToolsSaveBlockedReason = computed(() => {
	if (!llmToolsEnabled.value) return ''
	// Clearing the API key disables the LLM integration on save (the server
	// forces enabled=false), so no tool check is possible or needed.
	if (llmApiKeyCleared.value) return ''
	if (llmOpennmsUrlNeedsPassword.value) {
		return 'The OpenNMS URL changed — re-enter the OpenNMS password for the new URL, then run Check tool access.'
	}
	if (llmToolsLoginMissing.value) {
		return 'MCP tool access needs an OpenNMS login (a read-only account). Enter it, then run Check tool access.'
	}
	if (llmToolsDirty.value && !llmToolsValidated.value) {
		return 'Run Check tool access (and get a Yes) before saving with MCP tool access enabled.'
	}
	return ''
})

// Ask the model, through the tools, whether it can read ALEC's MCP server.
// The server answers with the model's own yes/no + one-line explanation.
const validateLlmTools = async () => {
	llmToolsValidationResult.value = null
	llmToolsCheckedFingerprint.value = null
	llmValidatingTools.value = true
	const fingerprint = llmToolsFingerprint.value
	try {
		const req: TLLMConfigRequest = withOpennmsLogin({
			enabled: llmEnabled.value,
			autoEvaluate: llmAutoEvaluate.value,
			baseUrl: llmBaseUrl.value.trim(),
			model: llmModel.value.trim()
		})
		const typedKey = llmApiKey.value.trim()
		if (typedKey.length > 0) {
			req.apiKey = typedKey
		}
		llmToolsValidationResult.value = await validateLLMTools(req)
		llmToolsCheckedFingerprint.value = fingerprint
		refreshMcpStatus()
	} finally {
		llmValidatingTools.value = false
	}
}

// True when there's nothing the server could persist as a key — neither one
// already stored nor one freshly typed.
const llmNoKeyAvailable = computed(
	() =>
		(!llmApiKeyPresent.value || llmApiKeyCleared.value) &&
		llmApiKey.value.trim().length === 0
)
// The Enable checkbox guards on this: enabling requires an endpoint, a model AND
// a key. Since ALEC ships no endpoint/model default, a fresh install must be
// configured before the integration can be turned on (the server would reject an
// enabled-but-incomplete config anyway).
const llmCannotEnable = computed(
	() =>
		llmNoKeyAvailable.value ||
		llmBaseUrl.value.trim().length === 0 ||
		llmModel.value.trim().length === 0
)

const clearLLMApiKey = () => {
	llmApiKey.value = ''
	llmApiKeyCleared.value = true
	llmApiKeyPresent.value = false
	llmEnabled.value = false
}

const showHelp = ref(false)
const showEngineHelp = ref(false)
const showLLMKeyHelp = ref(false)
const showSetupHelp = ref(false)
const showNotification = ref(false)
const isError = ref(false)
const message = ref('')

const showUsageDetails = ref(false)

onMounted(async () => {
	document.addEventListener('mousedown', closeMenusOnOutside)
	// engineInfo is usually pre-populated by the app shell; the LLM config
	// has no such pre-load, so fetch it here on first render.
	if (userStore.llmConfig === null) {
		const result = await userStore.getLLMConfig()
		if (result) {
			llmConfigLoaded.value = true
			llmEnabled.value = result.enabled
			llmAutoEvaluate.value = result.autoEvaluate
			llmBaseUrl.value = result.baseUrl || ''
			llmModel.value = result.model || ''
			llmDefaultBaseUrl.value = result.defaultBaseUrl || ''
			llmDefaultModel.value = result.defaultModel || ''
			llmDailyTokenLimit.value = result.dailyTokenLimit ?? 0
			llmMonthlyTokenLimit.value = result.monthlyTokenLimit ?? 0
			llmDefaultSystemPrompt.value = result.defaultSystemPrompt || ''
			llmSystemPrompt.value =
				result.systemPrompt || result.defaultSystemPrompt || ''
			// Server-served clustering-prompt default (see llmDefaultClusterPrompt).
			llmDefaultClusterPrompt.value = result.defaultClusterPrompt || ''
			if (!clusterPrompt.value) {
				clusterPrompt.value = llmDefaultClusterPrompt.value
			}
			llmApiKeyPresent.value = result.apiKeyPresent
			llmToolsEnabled.value = result.toolsEnabled ?? false
			llmOpennmsUrl.value = result.opennmsUrl || ''
			llmOpennmsUsername.value = result.opennmsUsername || ''
			llmOpennmsPasswordPresent.value = result.opennmsPasswordPresent ?? false
		}
	}
	// Tool inventory + counters for the MCP block (null when the bundle is
	// absent). Not awaited: it must not wait behind the usage fetch.
	refreshMcpStatus()
	// Fetch the usage rollup once on mount; refreshed after every successful save.
	await userStore.getLLMUsage(30)
})

onUnmounted(() => {
	document.removeEventListener('mousedown', closeMenusOnOutside)
})

const resetVariablesToDefaults = () => {
	alpha.value = ENGINE_DEFAULTS.alpha
	beta.value = ENGINE_DEFAULTS.beta
	epsilon.value = ENGINE_DEFAULTS.epsilon
	hellingerW.value = ENGINE_DEFAULTS.hellingerW
	hellingerBias.value = ENGINE_DEFAULTS.hellingerBias
}

const notify = (msg: string, error: boolean) => {
	message.value = msg
	isError.value = error
	showNotification.value = true
}

const buildLLMRequest = (): TLLMConfigRequest => {
	if (llmApiKeyCleared.value) {
		// Clearing wins regardless of any text in the input — server forces enabled=false.
		// Carry the user's autoEvaluate / endpoint / model preferences through so
		// re-enabling later doesn't surprise them with different defaults.
		return withOpennmsLogin({
			enabled: false,
			autoEvaluate: llmAutoEvaluate.value,
			baseUrl: llmBaseUrl.value.trim(),
			model: llmModel.value.trim(),
			defaultBaseUrl: llmDefaultBaseUrl.value.trim(),
			defaultModel: llmDefaultModel.value.trim(),
			systemPrompt: llmSystemPrompt.value,
			dailyTokenLimit: Math.max(0, Number(llmDailyTokenLimit.value) || 0),
			monthlyTokenLimit: Math.max(0, Number(llmMonthlyTokenLimit.value) || 0),
			clearApiKey: true,
			toolsEnabled: llmToolsEnabled.value,
			clearOpennmsPassword:
				llmOpennmsPasswordCleared.value && llmOpennmsPassword.value.trim().length === 0
		})
	}
	const trimmedKey = llmApiKey.value.trim()
	const request: TLLMConfigRequest = {
		enabled: llmEnabled.value,
		autoEvaluate: llmAutoEvaluate.value,
		baseUrl: llmBaseUrl.value.trim(),
		model: llmModel.value.trim(),
		defaultBaseUrl: llmDefaultBaseUrl.value.trim(),
		defaultModel: llmDefaultModel.value.trim(),
		systemPrompt: llmSystemPrompt.value,
		dailyTokenLimit: Math.max(0, Number(llmDailyTokenLimit.value) || 0),
		monthlyTokenLimit: Math.max(0, Number(llmMonthlyTokenLimit.value) || 0),
		toolsEnabled: llmToolsEnabled.value,
		clearOpennmsPassword:
			llmOpennmsPasswordCleared.value && llmOpennmsPassword.value.trim().length === 0
	}
	if (trimmedKey.length > 0) {
		request.apiKey = trimmedKey
	}
	return withOpennmsLogin(request)
}

const saveConfiguration = async () => {
	// LLM-based clustering requires a configured LLM (LLM Setup tab). Block the
	// save and point the user there if they picked it without one.
	if (isLlmEngine.value && !llmSetupValid.value) {
		notify(
			'LLM-based clustering needs a configured LLM. Set the endpoint, model and API key on the LLM Setup tab first.',
			true
		)
		return
	}
	// MCP tool access (ALEC-308): never save the option without a verified
	// OpenNMS login and a passed tool-access check for the current form values.
	if (llmConfigLoaded.value && llmToolsSaveBlockedReason.value) {
		notify(llmToolsSaveBlockedReason.value, true)
		return
	}
	// Saving with the integration enabled means ALEC will start sending alarm
	// data to the configured LLM endpoint and billing against the stored key.
	// Warn before that first request can fire. Skipped when the key is being
	// cleared (the server forces enabled=false in that case) or when local —
	// a local endpoint (e.g. LM Studio at 127.0.0.1 / localhost) bills nothing.
	const willEnableLlm = llmEnabled.value && !llmApiKeyCleared.value
	const isLocalEndpoint = /\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])/i.test(
		llmBaseUrl.value
	)
	if (willEnableLlm && !isLocalEndpoint) {
		if (
			!window.confirm(
				'LLM Root Cause Analysis is enabled.\n\n' +
					'ALEC will send each new situation to the configured LLM endpoint ' +
					`(${llmBaseUrl.value.trim()}, model ${llmModel.value.trim()}). ` +
					'This calls a third-party provider with your API key and may incur ' +
					'usage charges billed by that provider. You are responsible for any ' +
					'costs on the associated account.\n\n' +
					(llmToolsEnabled.value
						? 'MCP tool access is on: each analysis may make several requests, ' +
							'and the model can read node inventory, alarms, topology, events, ' +
							'metrics and device configuration (secrets redacted) through the ' +
							'tools.\n\n'
						: '') +
					'Continue and save?'
			)
		) {
			return
		}
	}
	const overrides: {
		alpha: number
		beta: number
		epsilon: number
		hellingerW?: number
		hellingerBias?: number
		clusterFrequencyMs?: number
		clusterPrompt?: string
	} = {
		alpha: Number(alpha.value),
		beta: Number(beta.value),
		epsilon: Number(epsilon.value)
	}
	if (hellinger.value) {
		overrides.hellingerW = Number(hellingerW.value)
		overrides.hellingerBias = Number(hellingerBias.value)
	}
	// LLM-based clustering carries its own settings (frequency + prompt).
	if (isLlmEngine.value) {
		overrides.clusterFrequencyMs = Number(
			clusterFrequencyOption.value?.value ?? 300000
		)
		overrides.clusterPrompt = clusterPrompt.value
	}
	const savedEngine = await userStore.setEngineInfo(
		engineName.value,
		hellinger.value,
		overrides
	)
	// Never post the LLM section unless the stored config actually made it into
	// the form — posting the blank initial values would wipe the stored
	// endpoint/model/prompt when only engine settings were being saved.
	const savedLLM = llmConfigLoaded.value
		? await userStore.setLLMConfig(buildLLMRequest())
		: true

	// After a successful LLM save the typed key is now stored server-side;
	// scrub the input + cleared flag so the next save is a no-op rather than
	// re-sending the same secret over the wire.
	if (llmConfigLoaded.value && savedLLM) {
		llmApiKey.value = ''
		llmApiKeyCleared.value = false
		llmApiKeyPresent.value = userStore.llmConfig?.apiKeyPresent ?? false
		llmEnabled.value = userStore.llmConfig?.enabled ?? false
		llmAutoEvaluate.value = userStore.llmConfig?.autoEvaluate ?? true
		llmBaseUrl.value = userStore.llmConfig?.baseUrl ?? ''
		llmModel.value = userStore.llmConfig?.model ?? ''
		llmDefaultBaseUrl.value = userStore.llmConfig?.defaultBaseUrl ?? ''
		llmDefaultModel.value = userStore.llmConfig?.defaultModel ?? ''
		llmDailyTokenLimit.value = userStore.llmConfig?.dailyTokenLimit ?? 0
		llmMonthlyTokenLimit.value = userStore.llmConfig?.monthlyTokenLimit ?? 0
		if (userStore.llmConfig?.defaultSystemPrompt) {
			llmDefaultSystemPrompt.value = userStore.llmConfig.defaultSystemPrompt
		}
		llmSystemPrompt.value =
			userStore.llmConfig?.systemPrompt ?? llmSystemPrompt.value
		llmToolsEnabled.value = userStore.llmConfig?.toolsEnabled ?? false
		llmOpennmsUrl.value = userStore.llmConfig?.opennmsUrl ?? ''
		llmOpennmsUsername.value = userStore.llmConfig?.opennmsUsername ?? ''
		llmOpennmsPassword.value = ''
		llmOpennmsPasswordCleared.value = false
		llmOpennmsPasswordPresent.value =
			userStore.llmConfig?.opennmsPasswordPresent ?? false
		// Refresh the usage rollup — enabling/disabling doesn't generate calls
		// immediately, but the next render should reflect any usage that
		// arrived since the page loaded.
		userStore.getLLMUsage(30)
		refreshMcpStatus()
	}

	if (savedEngine && savedLLM) {
		userStore.getEngineInfo()
		notify('The settings were saved!', false)
	} else if (savedEngine && !savedLLM) {
		const reason = getLastLlmConfigError()
		notify(
			reason
				? `Engine settings saved, but the LLM configuration was rejected: ${reason}`
				: 'Engine settings saved, but the LLM configuration was rejected — enabling the integration requires an endpoint URL, a model and an API key.',
			true
		)
	} else {
		notify('Error on saving the settings', true)
	}
}

const handleCloseAllSituations = async () => {
	if (
		!window.confirm(
			'Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone.'
		)
	) {
		return
	}
	const ok = await closeAllOpenSituations()
	notify(
		ok ? 'All open situations were closed.' : 'Failed to close situations.',
		!ok
	)
}

const handleReEvaluate = async () => {
	if (
		!window.confirm(
			'Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms.'
		)
	) {
		return
	}
	const ok = await reEvaluateAllOpenAlarms()
	notify(
		ok
			? 'Engine re-initialized. Alarms are being re-evaluated.'
			: 'Failed to re-evaluate alarms.',
		!ok
	)
}
</script>
<template>
	<SituationListBtn />
	<div class="container">
		<h3 data-test="page-title">ALEC Configuration</h3>

		<FeatherTabContainer data-test="config-tabs">
			<template v-slot:tabs>
				<FeatherTab data-test="tab-engine">Correlation Engine</FeatherTab>
				<FeatherTab data-test="tab-llm">LLM Root Cause Analysis</FeatherTab>
				<FeatherTab data-test="tab-llm-setup">LLM Setup</FeatherTab>
			</template>

			<!-- Tab 1 — Correlation Engine -->
			<FeatherTabPanel class="config-panel">
			<div class="section">
				<div class="title-row">
					<div class="title">
						Choose the correlation engine that ALEC will use (see
						<a target="_blank" :href="CONST.URL_DOCUMENTATION"
							>Correlation Engines documentation</a
						>
						for more information):
					</div>
					<button
						type="button"
						class="icon-btn help-icon"
						:aria-expanded="showEngineHelp"
						aria-label="About the correlation engines and Hellinger distance"
						data-test="engine-help"
						@click="showEngineHelp = !showEngineHelp"
					>
						<FeatherIcon :icon="Icons.Help" />
					</button>
				</div>
				<div
					v-if="showEngineHelp"
					class="help-popover"
					data-test="engine-help-popover"
				>
					<ul>
						<li>
							<strong>Clustering</strong> — the default engine. It runs the
							DBSCAN algorithm over recent alarms and groups them into a
							situation when they are close in both time and network topology.
							Tune how aggressively it groups with the Correlation variables
							below.
						</li>
						<li>
							<strong>Hellinger distance</strong> — an optional, more refined way
							for the Clustering engine to measure how far apart two alarms are.
							Rather than a plain time/topology distance, it compares the
							statistical distribution of each alarm's surroundings, which helps
							separate unrelated alarms that merely happen to occur close
							together. Enable it with the checkbox; it adds two extra tuning
							variables (Hellinger w and bias). Only the Clustering engine
							supports it.
						</li>
						<li>
							<strong>LLM Based (Experimental)</strong> — instead of DBSCAN, a large language
							model groups active alarms into situations using the topology and
							alarm data. Requires a configured LLM (LLM Setup tab) and replaces
							the Correlation variables with a re-clustering frequency and an
							editable prompt. Separate from <em>LLM Root Cause Analysis</em> on
							the other tab, which explains situations an engine already built.
							Only one engine runs at a time.
						</li>
					</ul>
				</div>
			<FeatherRadioGroup vertical v-model="engineName" label="" hideLabel>
				<FeatherRadio class="radio-item" :value="CONST.ENGINE_DBSCAN"
					>Clustering</FeatherRadio
				>
				<FeatherCheckbox
					v-model="hellinger"
					:disabled="!isClustering"
					class="checkbox"
				>
					<div class="hellinger">
						<strong>Hellinger distance</strong>
					</div>
				</FeatherCheckbox>
				<FeatherRadio
					class="radio-item"
					:value="CONST.ENGINE_LLM"
					data-test="engine-llm"
				>
					LLM Based (Experimental)
				</FeatherRadio>
			</FeatherRadioGroup>
			</div>

			<!-- LLM-based clustering settings (only when that engine is selected) -->
			<div
				v-if="isLlmEngine"
				class="section"
				data-test="llm-cluster-section"
			>
				<div class="title">LLM-based clustering</div>
				<div
					v-if="!llmSetupValid"
					class="caption"
					data-test="llm-cluster-no-setup"
				>
					No valid LLM is configured. Set the endpoint, model and API key on the
					<strong>LLM Setup</strong> tab first, then choose LLM Based here.
				</div>
				<template v-else>
					<div class="llm-help">
						Instead of DBSCAN, ALEC asks the configured LLM to group active
						alarms into situations using the network topology and the alarms
						themselves. Only the topology graph and alarms are sent. Existing
						situations are not modified.
					</div>
					<div class="llm-field-block">
						<FeatherSelect
							label="How often to re-cluster"
							:options="CLUSTER_FREQUENCY_OPTIONS"
							v-model="clusterFrequencyOption"
							text-prop="label"
							class="llm-frequency-select"
							data-test="llm-cluster-frequency"
						/>
						<div class="llm-prompt-help">
							Each cycle sends the current alarms + topology to the LLM. More
							frequent means fresher situations but more token usage (counts
							against your LLM Setup budget).
						</div>
					</div>
					<div class="llm-prompt-block" data-test="llm-cluster-prompt-block">
						<div class="llm-prompt-header">
							<span class="llm-prompt-label">Clustering prompt</span>
							<button
								type="button"
								class="llm-prompt-reset"
								:disabled="!clusterPromptIsCustom"
								data-test="llm-cluster-prompt-reset"
								@click="resetClusterPromptToDefault"
							>
								<FeatherIcon :icon="Icons.Restore" class="reset-inline-icon" />
								Reset to default
							</button>
						</div>
						<div class="llm-prompt-help">
							Instructions sent to the model for clustering. Customize it to add
							site-specific context, or clear it to fall back to the default.
						</div>
						<FeatherTextarea
							v-model="clusterPrompt"
							label="Clustering prompt"
							hideLabel
							rows="10"
							data-test="llm-cluster-prompt"
							class="llm-prompt-textarea"
						/>
					</div>
				</template>
			</div>

			<!-- Correlation variables (Clustering only) -->
			<div v-if="isClustering" class="section" data-test="variables-section">
				<div class="title-row">
					<div class="title">Correlation variables</div>
					<button
						type="button"
						class="icon-btn help-icon"
						:aria-expanded="showHelp"
						aria-label="Show help for correlation variables"
						data-test="variables-help"
						@click="showHelp = !showHelp"
					>
						<FeatherIcon :icon="Icons.Help" />
					</button>
					<button
						type="button"
						class="icon-btn reset-icon"
						aria-label="Reset correlation variables to defaults"
						data-test="variables-reset"
						@click="resetVariablesToDefaults"
					>
						<FeatherIcon :icon="Icons.Restore" />
					</button>
				</div>
				<div
					v-if="showHelp"
					class="help-popover"
					data-test="variables-help-popover"
				>
					<ul>
						<li>
							<strong>Alpha (α)</strong> — overall scaling of inter-alarm
							distance. Higher α &rarr; more conservative clustering (fewer
							clusters). <em>Default: {{ ENGINE_DEFAULTS.alpha }}</em>
						</li>
						<li>
							<strong>Beta (β)</strong> — weight between time (β) and topology
							(1−β), in <code>[0, 1]</code>. Higher β emphasises time proximity;
							lower β emphasises topology. <em>Default: {{ ENGINE_DEFAULTS.beta }}</em>
						</li>
						<li>
							<strong>Epsilon (ε)</strong> — DBScan radius. Higher ε clusters more
							aggressively; lower ε produces smaller, tighter clusters.
							<em>Default: {{ ENGINE_DEFAULTS.epsilon }}</em>
						</li>
						<template v-if="showHellingerVars">
							<li data-test="help-hellinger-w">
								<strong>Hellinger w</strong> — variance scaling coefficient used
								by the Hellinger distance measure. Larger values flatten the
								distribution comparison. <em>Default: {{ ENGINE_DEFAULTS.hellingerW }}</em>
							</li>
							<li data-test="help-hellinger-bias">
								<strong>Hellinger bias</strong> — additive offset applied inside
								the Hellinger distance. Tunes the baseline separation between
								alarms. <em>Default: {{ ENGINE_DEFAULTS.hellingerBias }}</em>
							</li>
						</template>
					</ul>
				</div>
				<div class="variables">
					<FeatherInput
						v-model="alpha"
						type="number"
						label="Alpha"
						data-test="variable-alpha"
					/>
					<FeatherInput
						v-model="beta"
						type="number"
						label="Beta"
						data-test="variable-beta"
					/>
					<FeatherInput
						v-model="epsilon"
						type="number"
						label="Epsilon"
						data-test="variable-epsilon"
					/>
					<FeatherInput
						v-if="showHellingerVars"
						v-model="hellingerW"
						type="number"
						label="Hellinger w"
						data-test="variable-hellinger-w"
					/>
					<FeatherInput
						v-if="showHellingerVars"
						v-model="hellingerBias"
						type="number"
						label="Hellinger bias"
						data-test="variable-hellinger-bias"
					/>
				</div>
			</div>
			</FeatherTabPanel>

			<!-- Tab 2 — LLM Root Cause Analysis -->
			<FeatherTabPanel class="config-panel">
		<div class="section" data-test="llm-section">
			<div class="title-row">
				<div class="title">LLM Root Cause Analysis</div>
				<button
					type="button"
					class="icon-btn help-icon"
					:aria-expanded="showLLMKeyHelp"
					aria-label="How to get an API key"
					data-test="llm-key-help"
					@click="showLLMKeyHelp = !showLLMKeyHelp"
				>
					<FeatherIcon :icon="Icons.Help" />
				</button>
			</div>
			<div class="llm-help">
				ALEC can automatically or manually request root cause analysis and a
				suggested resolution strategy from a large language model (LLM), shown on
				each situation's <em>AI Suggestions</em> tab. It uses the LLM configured
				on the <em>LLM Setup</em> tab.
			</div>
			<div
				v-if="showLLMKeyHelp"
				class="help-popover"
				data-test="llm-key-help-popover"
			>
				<p class="help-intro">
					When enabled, ALEC sends each new situation's alarms to the configured
					LLM and shows up to three probable root causes and resolutions on the
					situation's <em>AI Suggestions</em> tab.
				</p>
				<ul>
					<li>
						<em>Automatically AI Evaluate new situations</em>: when on, every new
						situation is analyzed as it is created; when off, analysis runs only
						when you click <em>Re-evaluate</em> on a situation's AI Suggestions tab.
					</li>
					<li>
						Customize the <em>System prompt</em> below to add site-specific
						context (topology, naming conventions, escalation policy).
					</li>
					<li>
						Requires a configured LLM — set the endpoint, model and API key on
						the <em>LLM Setup</em> tab first.
					</li>
				</ul>
			</div>
			<!-- Disable only when OFF: turning the integration off must always be
			     possible, even after the endpoint/model/key that once allowed
			     enabling it have been blanked or cleared. -->
			<FeatherCheckbox
				v-model="llmEnabled"
				:disabled="llmCannotEnable && !llmEnabled"
				class="checkbox"
				data-test="llm-enabled"
			>
				<strong>LLM Enabled Root Cause Analysis</strong>
			</FeatherCheckbox>
			<FeatherCheckbox
				v-model="llmAutoEvaluate"
				:disabled="!llmEnabled"
				class="checkbox sub-checkbox"
				data-test="llm-auto-evaluate"
			>
				Automatically AI Evaluate new situations
			</FeatherCheckbox>
			<div
				v-if="llmCannotEnable"
				class="caption"
				data-test="llm-no-key-hint"
			>
				No valid LLM is configured. Go to the <strong>LLM Setup</strong> tab and
				set an endpoint, model and API key first.
			</div>
			<div class="llm-prompt-block" data-test="llm-prompt-block">
				<div class="llm-prompt-header">
					<span class="llm-prompt-label">System prompt</span>
					<button
						type="button"
						class="llm-prompt-reset"
						:disabled="!llmSystemPromptIsCustom"
						data-test="llm-prompt-reset"
						@click="resetSystemPromptToDefault"
					>
						<FeatherIcon :icon="Icons.Restore" class="reset-inline-icon" />
						Reset to default
					</button>
				</div>
				<div class="llm-prompt-help">
					Instructions sent to the model for every analysis. Customize it to add
					site-specific context (your topology, naming conventions, escalation
					policy, vendors in use). Leave it as the default, or clear it to fall
					back to the default.
				</div>
				<FeatherTextarea
					v-model="llmSystemPrompt"
					label="System prompt"
					hideLabel
					rows="12"
					data-test="llm-system-prompt"
					class="llm-prompt-textarea"
				/>
			</div>
		</div>
			</FeatherTabPanel>

			<!-- Tab 3 — LLM Setup (shared connection, used by all LLM features) -->
			<FeatherTabPanel class="config-panel">
		<div class="section" data-test="llm-setup-section">
			<div class="title-row">
				<div class="title">LLM Setup</div>
				<button
					type="button"
					class="icon-btn help-icon"
					:aria-expanded="showSetupHelp"
					aria-label="About the shared LLM connection"
					data-test="llm-setup-help"
					@click="showSetupHelp = !showSetupHelp"
				>
					<FeatherIcon :icon="Icons.Help" />
				</button>
			</div>
			<div class="llm-help">
				Configure the LLM connection shared by ALEC's LLM features (root cause
				analysis and, later, LLM-based clustering). ALEC works with any
				OpenAI-compatible, API-enabled LLM — commercial or locally hosted — and
				does not endorse any particular model. The endpoint, model and API key
				are stored on the OpenNMS server and apply to all users of this plugin.
			</div>
			<div
				v-if="showSetupHelp"
				class="help-popover"
				data-test="llm-setup-help-popover"
			>
				<ul>
					<li>
						Point ALEC at any service exposing an OpenAI-compatible
						<code>/chat/completions</code> API — a hosted provider (OpenAI,
						Anthropic, OpenRouter, …) or a local server (LM Studio, Ollama, …).
						The Endpoint and Model <em>▾</em> menus list common choices, but you
						can type any value.
					</li>
					<li>
						The model must support <em>tool/function calling</em>. Click
						<em>Validate key</em> to confirm the endpoint, model and key work
						before saving.
					</li>
					<li>
						The API key is stored on the OpenNMS server and never shown again.
					</li>
					<li>
						Set an optional <em>Daily</em> or <em>Monthly token limit</em> to cap
						spend — when usage reaches a limit ALEC stops sending LLM requests
						until the period resets. 0 means no limit.
					</li>
				</ul>
			</div>

			<!-- Endpoint: free-text + curated provider suggestions -->
			<div class="llm-field-block">
				<div class="llm-field-header">
					<span class="llm-field-label">Endpoint (OpenAI-compatible base URL)</span>
					<div class="llm-field-actions">
						<button
							type="button"
							class="llm-prompt-reset"
							:disabled="!canResetBaseUrl"
							data-test="llm-base-url-reset"
							@click="resetBaseUrlToDefault"
						>
							<FeatherIcon :icon="Icons.Restore" class="reset-inline-icon" />
							Reset to default
						</button>
						<button
							type="button"
							class="llm-prompt-reset"
							:disabled="!canSetBaseUrlDefault"
							data-test="llm-base-url-set-default"
							@click="setBaseUrlDefault"
						>
							<FeatherIcon :icon="Icons.MarkComplete" class="reset-inline-icon" />
							Set as default
						</button>
					</div>
				</div>
				<div class="llm-combo">
					<FeatherInput
						v-model="llmBaseUrl"
						label="Endpoint (OpenAI-compatible base URL)"
						hideLabel
						data-test="llm-base-url"
						class="llm-combo-input"
					/>
					<button
						type="button"
						class="llm-combo-toggle"
						:aria-expanded="showEndpointMenu"
						aria-label="Show endpoint suggestions"
						data-test="llm-base-url-suggest"
						@click="showEndpointMenu = !showEndpointMenu"
					>
						<FeatherIcon :icon="Icons.ExpandMore" />
					</button>
					<ul
						v-if="showEndpointMenu"
						class="llm-combo-menu"
						data-test="llm-base-url-menu"
					>
						<li class="llm-combo-hint">Common providers — or type your own</li>
						<li
							v-for="p in endpointOptions"
							:key="p.baseUrl"
							class="llm-combo-item"
							@click="pickEndpoint(p.baseUrl)"
						>
							<span class="llm-combo-item-main">{{ p.name }}</span>
							<span class="llm-combo-item-sub">
								<code>{{ p.baseUrl }}</code> · {{ p.keyHint }}
							</span>
						</li>
					</ul>
				</div>
			</div>

			<!-- Model: free-text + suggestions contextual to the endpoint -->
			<div class="llm-field-block">
				<div class="llm-field-header">
					<span class="llm-field-label">Model</span>
					<div class="llm-field-actions">
						<button
							type="button"
							class="llm-prompt-reset"
							:disabled="!canResetModel"
							data-test="llm-model-reset"
							@click="resetModelToDefault"
						>
							<FeatherIcon :icon="Icons.Restore" class="reset-inline-icon" />
							Reset to default
						</button>
						<button
							type="button"
							class="llm-prompt-reset"
							:disabled="!canSetModelDefault"
							data-test="llm-model-set-default"
							@click="setModelDefault"
						>
							<FeatherIcon :icon="Icons.MarkComplete" class="reset-inline-icon" />
							Set as default
						</button>
					</div>
				</div>
				<div class="llm-combo">
					<FeatherInput
						v-model="llmModel"
						label="Model"
						hideLabel
						data-test="llm-model"
						class="llm-combo-input"
					/>
					<button
						type="button"
						class="llm-combo-toggle"
						:aria-expanded="showModelMenu"
						aria-label="Show model suggestions"
						data-test="llm-model-suggest"
						@click="showModelMenu = !showModelMenu"
					>
						<FeatherIcon :icon="Icons.ExpandMore" />
					</button>
					<ul
						v-if="showModelMenu"
						class="llm-combo-menu"
						data-test="llm-model-menu"
					>
						<template v-if="modelOptions.length">
							<li class="llm-combo-hint">
								Suggested for {{ matchedProvider?.name }} — or type your own
							</li>
							<li
								v-for="m in modelOptions"
								:key="m.id"
								class="llm-combo-item"
								@click="pickModel(m.id)"
							>
								<span class="llm-combo-item-main"><code>{{ m.id }}</code></span>
							</li>
						</template>
						<li v-else class="llm-combo-hint">
							No preset models for this endpoint — type your model id. For a
							local server (LM Studio, Ollama) copy it from the server's loaded-model list.
						</li>
					</ul>
				</div>
			</div>
			<div class="llm-key-match-hint" data-test="llm-key-match-hint">
				Your API key must come from the same provider as the Endpoint above —
				an Anthropic key (<code>sk-ant-…</code>) for
				<code>api.anthropic.com</code> (the default), an OpenRouter key
				(<code>sk-or-…</code>) for <code>openrouter.ai</code>, or an OpenAI
				key for <code>api.openai.com</code>.
			</div>
			<div class="llm-key-row">
				<FeatherInput
					v-model="llmApiKey"
					type="password"
					autocomplete="new-password"
					:label="
						llmApiKeyPresent && !llmApiKeyCleared
							? 'API key — saved (paste a new key to replace)'
							: 'API key'
					"
					data-test="llm-api-key"
					class="llm-key-input"
				/>
				<FeatherButton
					v-if="llmApiKeyPresent && !llmApiKeyCleared"
					secondary
					data-test="llm-clear-key"
					@click="clearLLMApiKey"
				>
					Clear Key
				</FeatherButton>
			</div>
			<div class="llm-validate-row">
				<FeatherButton
					secondary
					:disabled="llmValidating || llmCannotValidate"
					data-test="llm-validate-btn"
					@click="validateLlm"
				>
					{{ llmValidating ? 'Validating…' : 'Validate key' }}
				</FeatherButton>
				<span
					v-if="llmCannotValidate"
					class="caption"
					data-test="llm-validate-hint"
				>
					Enter an API key to validate.
				</span>
				<span
					v-else-if="llmValidationResult"
					class="llm-validate-result"
					:class="llmValidationResult.ok ? 'is-ok' : 'is-error'"
					data-test="llm-validate-result"
				>
					<FeatherIcon
						:icon="llmValidationResult.ok ? Icons.MarkComplete : Icons.Help"
						class="result-icon"
					/>
					{{ llmValidationResult.message }}
				</span>
			</div>
			<div
				v-if="llmApiKeyPresent && !llmApiKeyCleared"
				class="llm-key-saved"
				data-test="llm-key-saved"
			>
				<FeatherIcon :icon="Icons.MarkComplete" class="saved-icon" />
				<span>
					API key on file. The stored key is never sent back to the browser —
					leave the field blank to keep it, or paste a new one to replace it.
				</span>
			</div>
			<div
				v-if="llmApiKeyCleared"
				class="caption"
				data-test="llm-cleared-hint"
			>
				Stored API key will be removed on save.
			</div>

			<!-- MCP tool access (ALEC-308) -->
			<hr class="llm-section-divider" />
			<div class="llm-field-block llm-tools" data-test="llm-tools">
				<span class="llm-field-label">MCP tool access</span>
				<div class="llm-tools-row">
					<FeatherCheckbox
						v-model="llmToolsEnabled"
						class="checkbox"
						data-test="llm-tools-enabled"
					>
						<strong>Give the model access to ALEC's MCP tools</strong>
					</FeatherCheckbox>
					<button
						type="button"
						class="icon-btn help-icon"
						:aria-expanded="showToolsHelp"
						aria-label="About the MCP server and tool access"
						data-test="llm-tools-help"
						@click="showToolsHelp = !showToolsHelp"
					>
						<FeatherIcon :icon="Icons.Info" />
					</button>
				</div>
				<div class="llm-prompt-help" data-test="llm-tools-summary">
					When on, every root cause analysis and LLM clustering request offers
					the model read-only tools over OpenNMS — situations, node inventory,
					alarms, topology neighbours, recent events, collected metrics and
					device configuration backups — and ALEC executes the model's tool
					calls itself. The LLM server does <strong>not</strong> need network
					access to OpenNMS, but the model must support tool calling and each
					analysis may take several rounds and more tokens. Click
					<FeatherIcon :icon="Icons.Info" class="inline-icon" /> for the full
					explanation and a diagram.
				</div>
				<McpToolsHelp
					v-if="showToolsHelp"
					:status="mcpStatus"
					:endpoint-url="mcpEndpointUrl"
				/>
				<div class="llm-prompt-help" data-test="llm-tools-login-help">
					Tool access needs an OpenNMS login: events, metrics and device
					configuration are read through the OpenNMS REST API with it, and the
					login is verified when you check tool access and again on save.
					<strong>Use a dedicated read-only account, not an administrator</strong>
					— a user with only the <code>ROLE_USER</code> and
					<code>ROLE_READONLY</code> roles is enough (add
					<code>ROLE_DEVICE_CONFIG_BACKUP</code> if the model should read
					device configuration backups; avoid <code>ROLE_REST</code>, which
					allows writes). Leave the URL blank for this server
					(<code>http://localhost:8980/opennms</code>).
				</div>
				<div class="variables">
					<FeatherInput
						v-model="llmOpennmsUrl"
						label="OpenNMS URL"
						placeholder="http://localhost:8980/opennms"
						data-test="llm-opennms-url"
						class="llm-opennms-input"
					/>
					<FeatherInput
						v-model="llmOpennmsUsername"
						label="OpenNMS username"
						autocomplete="off"
						data-test="llm-opennms-username"
					/>
					<FeatherInput
						v-model="llmOpennmsPassword"
						type="password"
						autocomplete="new-password"
						label="OpenNMS password"
						data-test="llm-opennms-password"
					/>
					<FeatherButton
						v-if="llmOpennmsPasswordPresent && !llmOpennmsPasswordCleared"
						secondary
						data-test="llm-opennms-clear-password"
						@click="clearOpennmsPassword"
					>
						Clear password
					</FeatherButton>
				</div>
				<div
					v-if="llmOpennmsPasswordPresent && !llmOpennmsPasswordCleared"
					class="llm-key-saved"
					data-test="llm-opennms-password-saved"
				>
					<FeatherIcon :icon="Icons.MarkComplete" class="saved-icon" />
					<span>
						OpenNMS password saved. Leave the field blank to keep it, or type a
						new one to replace it.
					</span>
				</div>
				<div
					v-if="llmOpennmsPasswordCleared"
					class="caption"
					data-test="llm-opennms-cleared-hint"
				>
					Stored OpenNMS password will be removed on save.
				</div>
				<div class="llm-validate-row">
					<FeatherButton
						secondary
						:disabled="llmValidatingTools || llmCannotValidate"
						data-test="llm-validate-tools-btn"
						@click="validateLlmTools"
					>
						{{ llmValidatingTools ? 'Checking…' : 'Check tool access' }}
					</FeatherButton>
					<span
						v-if="llmCannotValidate"
						class="caption"
						data-test="llm-validate-tools-hint"
					>
						Enter an API key to check.
					</span>
					<span
						v-else-if="llmToolsValidationResult"
						class="llm-validate-result"
						:class="llmToolsValidationResult.ok ? 'is-ok' : 'is-error'"
						data-test="llm-validate-tools-result"
					>
						<FeatherIcon
							:icon="llmToolsValidationResult.ok ? Icons.MarkComplete : Icons.Help"
							class="result-icon"
						/>
						<strong data-test="llm-validate-tools-verdict">{{
							llmToolsValidationResult.ok ? 'Yes' : 'No'
						}}</strong>
						{{ llmToolsValidationResult.message }}
					</span>
				</div>
				<div
					v-if="llmToolsSaveBlockedReason"
					class="caption llm-tools-gate"
					data-test="llm-tools-gate-hint"
				>
					{{ llmToolsSaveBlockedReason }}
				</div>
				<div
					v-if="mcpStatus"
					class="caption llm-tools-stats"
					data-test="llm-tools-stats"
				>
					Tool calls since ALEC started: {{ mcpStatus.stats.toolCalls }}
					({{ mcpStatus.stats.byConsumer.rca ?? 0 }} root cause,
					{{ mcpStatus.stats.byConsumer.clustering ?? 0 }} clustering,
					{{ mcpStatus.stats.byConsumer.external ?? 0 }} external MCP clients,
					{{ mcpStatus.stats.byConsumer.validation ?? 0 }} checks);
					{{ mcpStatus.stats.toolErrors }} errors. OpenNMS MCP server for external
					clients:
					<code data-test="llm-tools-endpoint-inline">{{ mcpEndpointUrl }}</code>
					<span
						v-if="mcpStatus.nativeServerInstalled === false"
						data-test="llm-tools-native-missing-inline"
					>
						(not active — install the <code>opennms-mcp-server</code> feature)
					</span>
				</div>
			</div>

			<!-- Token budget (shared across all LLM features) -->
			<hr class="llm-section-divider" />
			<div class="llm-field-block llm-limits" data-test="llm-token-limits">
				<span class="llm-field-label">Token budget (0 = no limit)</span>
				<div class="llm-prompt-help">
					Caps total LLM tokens ALEC may consume. When a limit is reached, ALEC
					stops sending LLM requests until the day/month resets and warns on the
					main page.
				</div>
				<div class="variables">
					<FeatherInput
						v-model="llmDailyTokenLimit"
						type="number"
						label="Daily token limit"
						data-test="llm-daily-limit"
					/>
					<FeatherInput
						v-model="llmMonthlyTokenLimit"
						type="number"
						label="Monthly token limit"
						data-test="llm-monthly-limit"
					/>
				</div>
			</div>

			<div
				v-if="userStore.llmUsage"
				class="llm-usage"
				data-test="llm-usage"
			>
				<div class="usage-summary">
					<span class="usage-label">Last {{ userStore.llmUsage.daysWindow }} days:</span>
					<span
						class="usage-tokens"
						:title="`${userStore.llmUsage.totalTokens.toLocaleString()} tokens`"
						data-test="llm-usage-tokens"
					>
						{{ humanizeTokens(userStore.llmUsage.totalTokens) }} tokens
					</span>
					<!--
						Cost estimate intentionally hidden for now — dollar-value
						estimation is being reworked separately. Keep the markup so it
						can be restored once the new cost model lands.
					<span
						class="usage-cost"
						:title="userStore.llmUsage.pricingNote"
						data-test="llm-usage-cost"
					>
						({{ formatUsd(userStore.llmUsage.estimatedCostUsd) }})
					</span>
					-->

					<button
						type="button"
						class="usage-toggle"
						@click="showUsageDetails = !showUsageDetails"
						data-test="llm-usage-toggle"
					>
						{{ showUsageDetails ? 'hide details' : 'show details' }}
					</button>
				</div>
				<dl
					v-if="showUsageDetails"
					class="usage-details"
					data-test="llm-usage-details"
				>
					<div>
						<dt>Input</dt>
						<dd>{{ humanizeTokens(userStore.llmUsage.inputTokens) }}</dd>
					</div>
					<div>
						<dt>Output</dt>
						<dd>{{ humanizeTokens(userStore.llmUsage.outputTokens) }}</dd>
					</div>
					<div>
						<dt>Cache read</dt>
						<dd>{{ humanizeTokens(userStore.llmUsage.cacheReadInputTokens) }}</dd>
					</div>
					<div>
						<dt>Cache create</dt>
						<dd>{{ humanizeTokens(userStore.llmUsage.cacheCreationInputTokens) }}</dd>
					</div>
					<div>
						<dt>Calls</dt>
						<dd>
							{{ userStore.llmUsage.calls }}
							<span class="muted"
								>({{ userStore.llmUsage.successfulCalls }} ok /
								{{ userStore.llmUsage.failedCalls }} failed)</span
							>
						</dd>
					</div>
					<div>
						<dt>Cache hit</dt>
						<dd>{{ (userStore.llmUsage.cacheHitRatio * 100).toFixed(0) }}%</dd>
					</div>
					<div>
						<dt>Tool calls</dt>
						<dd data-test="llm-usage-tool-calls">
							{{ userStore.llmUsage.toolCalls ?? 0 }}
						</dd>
					</div>
					<!--
						Pricing note hidden alongside the dollar estimate above — see note
						on the usage-cost span. Restore with the new cost model.
					<div class="pricing-note">
						{{ userStore.llmUsage.pricingNote }}
					</div>
					-->

				</dl>
			</div>
		</div>
			</FeatherTabPanel>
		</FeatherTabContainer>

		<div class="action-row">
			<FeatherButton
				secondary
				data-test="close-all-btn"
				@click="handleCloseAllSituations"
			>
				Close All Open Situations
			</FeatherButton>
			<FeatherButton
				secondary
				data-test="reevaluate-btn"
				@click="handleReEvaluate"
			>
				Re-Evaluate All Open Alarms
			</FeatherButton>
			<FeatherButton
				primary
				class="save-btn"
				data-test="save-btn"
				@click="saveConfiguration"
			>
				<FeatherIcon :icon="Icons.MarkComplete" class="icon" />
				<span>Save Changes</span>
			</FeatherButton>
		</div>
		<FeatherSnackbar
			v-model="showNotification"
			right
			:error="isError"
			:timeout="6000"
		>
			{{ message }}
			<template v-slot:button>
				<FeatherButton @click="showNotification = false" text
					>dismiss</FeatherButton
				>
			</template>
		</FeatherSnackbar>
	</div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss';

.container {
	display: flex;
	padding-top: 20px;
	flex-direction: column;
	border: 1px solid variables.$border-grey;
	background-color: var(--feather-surface);
	min-height: 650px;
	padding: 20px;
	// Wider box so the form uses the horizontal space and the user scrolls less.
	// Responsive: capped at 1100px but shrinks on narrow viewports.
	width: min(1100px, 94vw);
	margin: 20px auto;
}

.section {
	margin-top: 30px;
	border: 1px solid variables.$border-grey;
	padding: 10px 15px;
}

.title {
	font-size: 16px;
	font-weight: 600;
}

.radio-item {
	margin-bottom: 0 !important;
}

.checkbox {
	margin-left: var(--feather-spacing-l);
	margin-bottom: var(--feather-spacing-l) !important;
}

.sub-checkbox {
	margin-left: calc(var(--feather-spacing-l) * 2);
	margin-top: 4px;
	margin-bottom: 8px !important;
}

.caption {
	margin-left: var(--feather-spacing-xl);
	margin-top: -8px;
	font-size: 12px;
	color: var(--feather-secondary-text-on-surface);
	font-style: italic;
}

.title-row {
	display: flex;
	align-items: center;
	gap: 6px;
}

.icon-btn {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	border: none;
	padding: 2px;
	color: var(--feather-secondary-text-on-surface);
	font-size: 18px;
	cursor: pointer;
	border-radius: 50%;

	&:hover {
		color: var(--feather-primary-text-on-surface);
		background: var(--feather-shade-3);
	}

	&:focus-visible {
		outline: 2px solid var(--feather-secondary);
		outline-offset: 1px;
	}
}

.help-icon {
	cursor: help;
}

.help-popover {
	margin-top: 8px;
	padding: 10px 14px;
	background: var(--feather-elevation-background-1);
	border: 1px solid variables.$border-grey;
	border-radius: 4px;
	font-size: 13px;
	line-height: 1.45;

	ul,
	ol {
		margin: 0;
		padding-left: 18px;
	}

	li + li {
		margin-top: 6px;
	}

	a {
		color: var(--feather-secondary);
		text-decoration: underline;
	}

	.pricing-hint {
		margin: 10px 0 0;
		font-size: 12px;
		color: var(--feather-secondary-text-on-surface);
		font-style: italic;
	}

	.help-intro {
		margin: 0 0 12px;
	}

	code {
		font-family: monospace;
		font-size: 12px;
		background: var(--feather-elevation-background-2);
		padding: 0 4px;
		border-radius: 2px;
	}

	em {
		color: var(--feather-secondary-text-on-surface);
	}
}

.variables {
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	margin-top: 12px;
}

.variables > * {
	min-width: 180px;
}

.action-row {
	display: flex;
	gap: 12px;
	justify-content: flex-end;
	margin-top: var(--feather-spacing-xxl);
	flex-wrap: wrap;
}

.llm-help {
	font-size: 13px;
	color: var(--feather-secondary-text-on-surface);
	line-height: 1.45;
	margin: 8px 0 12px;
}

.llm-key-row {
	display: flex;
	align-items: flex-end;
	gap: 12px;
	margin-top: 8px;
}

.llm-key-input {
	flex: 1;
	min-width: 240px;
}

.llm-text-input {
	margin-top: 8px;
	max-width: 720px;
}

.llm-field-block {
	margin-top: 12px;
	max-width: 720px;
}

.llm-field-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
}

.llm-field-label {
	font-size: 14px;
	font-weight: 600;
	color: var(--feather-primary-text-on-surface);
}

.llm-field-actions {
	display: flex;
	align-items: center;
	gap: 14px;
	flex-wrap: wrap;
}

.llm-frequency-select {
	max-width: 280px;
}

// Editable combobox: free-text input + a suggestions dropdown toggle.
.llm-combo {
	position: relative;
	max-width: 720px;
	margin-top: 8px;
}

.llm-combo-input {
	width: 100%;

	:deep(input) {
		padding-right: 36px; // room for the toggle
	}
}

.llm-combo-toggle {
	position: absolute;
	top: 0;
	right: 0;
	height: 38px;
	width: 34px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	border: none;
	cursor: pointer;
	color: var(--feather-secondary-text-on-surface);
	font-size: 20px;

	&:hover {
		color: var(--feather-primary-text-on-surface);
	}
}

.llm-combo-menu {
	position: absolute;
	z-index: 20;
	top: 42px;
	left: 0;
	right: 0;
	margin: 0;
	padding: 4px 0;
	list-style: none;
	max-height: 320px;
	overflow-y: auto;
	background: var(--feather-surface);
	border: 1px solid var(--feather-border-on-surface);
	border-radius: 4px;
	box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
}

.llm-combo-hint {
	padding: 6px 12px;
	font-size: 11px;
	font-style: italic;
	color: var(--feather-secondary-text-on-surface);
}

.llm-combo-item {
	display: flex;
	flex-direction: column;
	gap: 2px;
	padding: 7px 12px;
	cursor: pointer;

	&:hover {
		background: var(--feather-shade-4);
	}

	code {
		font-family: monospace;
		font-size: 12px;
	}
}

.llm-combo-item-main {
	font-size: 13px;
	color: var(--feather-primary-text-on-surface);
}

.llm-combo-item-sub {
	font-size: 11px;
	color: var(--feather-secondary-text-on-surface);
}

.config-panel {
	padding-top: 8px;
}

.llm-prompt-block {
	margin-top: 16px;
	max-width: 860px;
}

.llm-prompt-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
}

.llm-prompt-label {
	font-size: 14px;
	font-weight: 600;
	color: var(--feather-primary-text-on-surface);
}

.llm-prompt-reset {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	background: none;
	border: none;
	color: var(--feather-secondary);
	font-size: 12px;
	cursor: pointer;
	padding: 0;

	.reset-inline-icon {
		font-size: 16px;
	}

	&:hover:not(:disabled) {
		text-decoration: underline;
	}

	&:disabled {
		color: var(--feather-disabled-text-on-surface);
		cursor: default;
	}
}

.llm-prompt-help {
	font-size: 12px;
	color: var(--feather-secondary-text-on-surface);
	line-height: 1.4;
	margin: 4px 0 8px;
}

.llm-prompt-textarea {
	width: 100%;

	:deep(textarea) {
		font-family: monospace;
		font-size: 12px;
		line-height: 1.45;
	}
}

.llm-key-match-hint {
	font-size: 12px;
	color: var(--feather-secondary-text-on-surface);
	line-height: 1.4;
	margin: 4px 0 8px;

	code {
		background: var(--feather-elevation-background-2);
		padding: 0 3px;
		border-radius: 3px;
	}
}

.llm-validate-row {
	display: flex;
	align-items: center;
	gap: 12px;
	margin-top: 8px;
	flex-wrap: wrap;
}

.llm-tools {
	max-width: 1000px;
}

.llm-section-divider {
	border: 0;
	border-top: 1px solid var(--feather-border-on-surface);
	margin: 20px 0 12px;
	max-width: 1000px;
}

.llm-tools-gate {
	margin-top: 8px;
	color: var(--feather-warning);
}

.llm-tools-row {
	display: flex;
	align-items: center;
	gap: 4px;
}

.llm-tools-stats {
	margin-top: 8px;

	code {
		background: var(--feather-elevation-background-2);
		padding: 0 3px;
		border-radius: 3px;
	}
}

.llm-opennms-input {
	min-width: 320px;
	flex: 1;
}

.inline-icon {
	font-size: 14px;
	vertical-align: -2px;
}

.llm-validate-result {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	font-size: 13px;

	.result-icon {
		font-size: 18px;
	}

	&.is-ok {
		color: var(--feather-success); // green-800
		.result-icon {
			color: var(--feather-success); // green-600
		}
	}

	&.is-error {
		color: var(--feather-error); // red-700
		.result-icon {
			color: var(--feather-error); // red-600
		}
	}
}

.llm-key-saved {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-top: 8px;
	font-size: 13px;
	color: var(--feather-success); // green-800

	.saved-icon {
		font-size: 18px;
		color: var(--feather-success); // green-600
	}
}

.llm-usage {
	margin-top: 14px;
	padding-top: 12px;
	border-top: 1px dashed var(--feather-border-on-surface);
}

.usage-summary {
	display: flex;
	align-items: baseline;
	gap: 8px;
	flex-wrap: wrap;
	font-size: 13px;
}

.usage-label {
	color: var(--feather-secondary-text-on-surface);
	font-weight: 600;
}

.usage-tokens {
	color: var(--feather-primary-text-on-surface);
	font-weight: 700;
}

.usage-cost {
	color: var(--feather-secondary-text-on-surface);
}

.usage-toggle {
	margin-left: auto;
	background: none;
	border: none;
	color: var(--feather-secondary);
	font-size: 12px;
	cursor: pointer;
	padding: 0;

	&:hover {
		text-decoration: underline;
	}
}

.usage-details {
	margin: 10px 0 0;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 6px 24px;
	font-size: 13px;

	> div {
		display: flex;
		justify-content: space-between;
	}

	dt {
		color: var(--feather-secondary-text-on-surface);
		margin: 0;
	}

	dd {
		margin: 0;
		font-weight: 600;
	}

	.muted {
		font-weight: 400;
		color: var(--feather-disabled-text-on-surface);
		margin-left: 4px;
	}

	.pricing-note {
		grid-column: 1 / -1;
		display: block;
		font-size: 11px;
		color: var(--feather-disabled-text-on-surface);
		font-style: italic;
		margin-top: 4px;
	}
}

.icon {
	font-size: 19px;
	margin-right: 8px;
}
</style>
