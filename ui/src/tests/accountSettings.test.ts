import { test, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import AccountSettings from '@/containers/AccountSettings.vue'
import { createTestingPinia } from '@pinia/testing'
import { useUserStore } from '@/store/useUserStore'
import CONST from '@/helpers/constants'
import * as AlecService from '@/services/AlecService'

const buildWrapper = () => {
	const wrapper = mount(AccountSettings, {
		global: {
			plugins: [
				createTestingPinia({
					createSpy: vi.fn,
					stubActions: false,
					// Pre-seed llmConfig the way production does (app shell /
					// mount-time fetch) so llmConfigLoaded starts true. Without
					// it the save path (correctly) skips the LLM POST — that
					// guard has its own dedicated test below.
					initialState: {
						userStore: {
							llmConfig: {
								enabled: false,
								autoEvaluate: true,
								baseUrl: '',
								model: '',
								defaultBaseUrl: '',
								defaultModel: '',
								systemPrompt: '',
								defaultSystemPrompt: '',
								apiKeyPresent: false
							}
						}
					}
				})
			]
		}
	} as any) as any
	const store = useUserStore()
	store.setEngineInfo = vi.fn().mockResolvedValue(true)
	store.getEngineInfo = vi.fn()
	store.setLLMConfig = vi.fn().mockResolvedValue(true)
	store.getLLMConfig = vi
		.fn()
		.mockResolvedValue({ enabled: false, autoEvaluate: true, apiKeyPresent: false })
	// Default: no usage data so the rollup panel is hidden in most existing
	// tests. The slice-5 rollup tests below seed llmUsage explicitly.
	store.getLLMUsage = vi.fn().mockResolvedValue(null)
	return { wrapper, store }
}

// Saving with the LLM integration enabled against a remote endpoint pops a
// cost-confirmation dialog (window.confirm). Default it to "accept" for the
// suite so the save-path tests exercise the save rather than the dialog; the
// dedicated cost-warning tests below override the return value per-case.
const spyOnConfirm = () => vi.spyOn(window, 'confirm')
let confirmSpy: ReturnType<typeof spyOnConfirm>
beforeEach(() => {
	confirmSpy = spyOnConfirm().mockReturnValue(true)
})
afterEach(() => {
	confirmSpy.mockRestore()
})

test('Page title is "ALEC Configuration" with Engine + LLM tabs', () => {
	const { wrapper } = buildWrapper()
	const title = wrapper.find('[data-test="page-title"]')
	expect(title.exists()).toBe(true)
	expect(title.text()).toBe('ALEC Configuration')
	// Two configuration tabs.
	expect(wrapper.find('[data-test="tab-engine"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="tab-llm"]').exists()).toBe(true)
})

test('Correlation Engine tab has a "?" help explaining engines and Hellinger', async () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="engine-help-popover"]').exists()).toBe(false)
	await wrapper.find('[data-test="engine-help"]').trigger('click')
	const help = wrapper.find('[data-test="engine-help-popover"]')
	expect(help.exists()).toBe(true)
	expect(help.text()).toContain('Clustering')
	expect(help.text()).toContain('Hellinger distance')
	// Distinguishes the LLM-based engine from the LLM Root Cause Analysis tab.
	expect(help.text()).toContain('LLM')
})

test('Deep Learning option is not rendered', () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.html()).not.toContain('Deep Learning')
})

test('LLM Based engine is selectable and gated on a valid LLM setup', async () => {
	const { wrapper, store } = buildWrapper()
	const llm = wrapper.find('[data-test="engine-llm"]')
	expect(llm.exists()).toBe(true)
	expect(llm.text()).toContain('LLM Based')

	// Select it with no LLM configured → guard shows, no clustering config.
	wrapper.vm.engineName = CONST.ENGINE_LLM
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-cluster-no-setup"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-cluster-frequency"]').exists()).toBe(false)
	// Hellinger correlation variables are not shown for the LLM engine.
	expect(wrapper.find('[data-test="variables-section"]').exists()).toBe(false)

	// With a valid LLM setup → frequency + clustering prompt appear, guard gone.
	store.llmConfig = {
		baseUrl: 'https://api.anthropic.com/v1/',
		model: 'claude-sonnet-4-6',
		apiKeyPresent: true
	} as any
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-cluster-no-setup"]').exists()).toBe(false)
	expect(wrapper.find('[data-test="llm-cluster-frequency"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-cluster-prompt"]').exists()).toBe(true)
})

test('Save is blocked for LLM Based engine without a valid LLM setup', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.engineName = CONST.ENGINE_LLM
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()
	// Neither engine nor LLM config is persisted — the user is told to set up LLM.
	expect(store.setEngineInfo).not.toHaveBeenCalled()
})

test('Save sends clustering frequency + prompt for the LLM engine', async () => {
	const { wrapper, store } = buildWrapper()
	store.llmConfig = {
		baseUrl: 'https://api.anthropic.com/v1/',
		model: 'claude-sonnet-4-6',
		apiKeyPresent: true
	} as any
	wrapper.vm.engineName = CONST.ENGINE_LLM
	wrapper.vm.clusterFrequencyOption = { label: 'Every 15 minutes', value: 900000 }
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()

	const args = (store.setEngineInfo as any).mock.calls[0]
	expect(args[0]).toBe(CONST.ENGINE_LLM)
	expect(args[2].clusterFrequencyMs).toBe(900000)
	expect(typeof args[2].clusterPrompt).toBe('string')
})

test('Hellinger checkbox defaults to checked on a fresh system (no saved config)', () => {
	const { wrapper, store } = buildWrapper()
	// Sanity: the wrapper was built with no engineInfo persisted.
	expect(store.engineInfo).toBeNull()
	expect(wrapper.vm.hellinger).toBe(true)
})

test('Correlation variables section is visible when Clustering is selected', () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="variables-section"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="variable-alpha"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="variable-beta"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="variable-epsilon"]').exists()).toBe(true)
})

test('Variables section hides when a non-Clustering engine is selected', async () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="variables-section"]').exists()).toBe(true)
	wrapper.vm.engineName = CONST.ENGINE_LLM
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="variables-section"]').exists()).toBe(false)
})

test('Save passes alpha/beta/epsilon to setEngineInfo', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.alpha = 200
	wrapper.vm.beta = 0.7
	wrapper.vm.epsilon = 500
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect(store.setEngineInfo).toHaveBeenCalledTimes(1)
	const args = (store.setEngineInfo as any).mock.calls[0]
	expect(args[0]).toBe(CONST.ENGINE_DBSCAN)
	// Hellinger is the fresh-install default, so save sends w/bias too.
	expect(args[2]).toEqual({
		alpha: 200,
		beta: 0.7,
		epsilon: 500,
		hellingerW: 4851.28,
		hellingerBias: -1986.0
	})
})

test('Save omits Hellinger params when Hellinger is unchecked', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.hellinger = false
	wrapper.vm.alpha = 200
	wrapper.vm.beta = 0.7
	wrapper.vm.epsilon = 500
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect(store.setEngineInfo).toHaveBeenCalledTimes(1)
	const args = (store.setEngineInfo as any).mock.calls[0]
	expect(args[1]).toBe(false)
	expect(args[2]).toEqual({ alpha: 200, beta: 0.7, epsilon: 500 })
})

test('Help icon is rendered next to "Correlation variables" title', () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="variables-help"]').exists()).toBe(true)
})

test('Help popover toggles on click and contains bullets + defaults', async () => {
	const { wrapper } = buildWrapper()
	const help = wrapper.find('[data-test="variables-help"]')

	expect(wrapper.find('[data-test="variables-help-popover"]').exists()).toBe(
		false
	)

	await help.trigger('click')
	const popover = wrapper.find('[data-test="variables-help-popover"]')
	expect(popover.exists()).toBe(true)
	// Hellinger is on by default, so popover lists 5 items (3 DBScan + 2 Hellinger).
	expect(popover.findAll('li').length).toBe(5)
	const html = popover.html()
	expect(html).toContain('Alpha')
	expect(html).toContain('Beta')
	expect(html).toContain('Epsilon')
	expect(html).toContain('145')
	expect(html).toContain('0.55')
	expect(html).toContain('150')
	expect(html).toContain('Hellinger w')
	expect(html).toContain('Hellinger bias')
	expect(html).toContain('4851.28')
	expect(html).toContain('-1986')

	await help.trigger('click')
	expect(wrapper.find('[data-test="variables-help-popover"]').exists()).toBe(
		false
	)
})

test('Help popover drops Hellinger entries when Hellinger is unchecked', async () => {
	const { wrapper } = buildWrapper()
	wrapper.vm.hellinger = false
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="variables-help"]').trigger('click')
	const popover = wrapper.find('[data-test="variables-help-popover"]')
	expect(popover.findAll('li').length).toBe(3)
	expect(popover.find('[data-test="help-hellinger-w"]').exists()).toBe(false)
	expect(popover.find('[data-test="help-hellinger-bias"]').exists()).toBe(false)
})

test('Hellinger w/bias inputs render only when Hellinger is checked', async () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="variable-hellinger-w"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="variable-hellinger-bias"]').exists()).toBe(
		true
	)

	wrapper.vm.hellinger = false
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="variable-hellinger-w"]').exists()).toBe(false)
	expect(wrapper.find('[data-test="variable-hellinger-bias"]').exists()).toBe(
		false
	)
})

test('Reset button restores all correlation variables to defaults', async () => {
	const { wrapper } = buildWrapper()
	wrapper.vm.alpha = 999
	wrapper.vm.beta = 0.99
	wrapper.vm.epsilon = 9999
	wrapper.vm.hellingerW = 1
	wrapper.vm.hellingerBias = 1

	await wrapper.find('[data-test="variables-reset"]').trigger('click')

	expect(wrapper.vm.alpha).toBe(145)
	expect(wrapper.vm.beta).toBe(0.55)
	expect(wrapper.vm.epsilon).toBe(150)
	expect(wrapper.vm.hellingerW).toBe(4851.28)
	expect(wrapper.vm.hellingerBias).toBe(-1986.0)
})

test('Close All Open Situations button confirms then calls service', async () => {
	const { wrapper } = buildWrapper()
	const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(true)
	const serviceSpy = vi
		.spyOn(AlecService, 'closeAllOpenSituations')
		.mockResolvedValue(true)

	await wrapper.find('[data-test="close-all-btn"]').trigger('click')

	expect(confirmSpy).toHaveBeenCalledTimes(1)
	expect(serviceSpy).toHaveBeenCalledTimes(1)
	confirmSpy.mockRestore()
	serviceSpy.mockRestore()
})

test('Close All Open Situations is a no-op when confirm is dismissed', async () => {
	const { wrapper } = buildWrapper()
	const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(false)
	const serviceSpy = vi
		.spyOn(AlecService, 'closeAllOpenSituations')
		.mockResolvedValue(true)

	await wrapper.find('[data-test="close-all-btn"]').trigger('click')

	expect(confirmSpy).toHaveBeenCalledTimes(1)
	expect(serviceSpy).not.toHaveBeenCalled()
	confirmSpy.mockRestore()
	serviceSpy.mockRestore()
})

test('Re-Evaluate All Open Alarms button confirms then calls service', async () => {
	const { wrapper } = buildWrapper()
	const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(true)
	const serviceSpy = vi
		.spyOn(AlecService, 'reEvaluateAllOpenAlarms')
		.mockResolvedValue(true)

	await wrapper.find('[data-test="reevaluate-btn"]').trigger('click')

	expect(confirmSpy).toHaveBeenCalledTimes(1)
	expect(serviceSpy).toHaveBeenCalledTimes(1)
	confirmSpy.mockRestore()
	serviceSpy.mockRestore()
})

test('Re-Evaluate All Open Alarms is a no-op when confirm is dismissed', async () => {
	const { wrapper } = buildWrapper()
	const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(false)
	const serviceSpy = vi
		.spyOn(AlecService, 'reEvaluateAllOpenAlarms')
		.mockResolvedValue(true)

	await wrapper.find('[data-test="reevaluate-btn"]').trigger('click')

	expect(confirmSpy).toHaveBeenCalledTimes(1)
	expect(serviceSpy).not.toHaveBeenCalled()
	confirmSpy.mockRestore()
	serviceSpy.mockRestore()
})

// --- LLM Root Cause Analysis (ALEC-299) ---

test('LLM section renders with checkbox + API key input', () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="llm-section"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-enabled"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-api-key"]').exists()).toBe(true)
})

test('Enable checkbox is disabled until endpoint, model and key are all set', async () => {
	const { wrapper } = buildWrapper()
	// Fresh ship: nothing configured → checkbox blocked + hint visible.
	expect(wrapper.vm.llmCannotEnable).toBe(true)
	expect(wrapper.find('[data-test="llm-no-key-hint"]').exists()).toBe(true)

	// A key alone is not enough now that there's no shipped endpoint/model.
	wrapper.vm.llmApiKey = 'sk-ant-test'
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmCannotEnable).toBe(true)

	// Endpoint + model + key together clear the guard.
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	wrapper.vm.llmModel = 'claude-sonnet-4-6'
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmCannotEnable).toBe(false)
	expect(wrapper.find('[data-test="llm-no-key-hint"]').exists()).toBe(false)

	// Clearing the model re-blocks enabling.
	wrapper.vm.llmModel = ''
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmCannotEnable).toBe(true)
})

test('"API key on file" confirmation appears only when a key is stored, and disappears on Clear', async () => {
	const { wrapper } = buildWrapper()
	// No key stored → no confirmation row, and the input label is the plain
	// "Anthropic API key" prompt.
	expect(wrapper.find('[data-test="llm-key-saved"]').exists()).toBe(false)

	wrapper.vm.llmApiKeyPresent = true
	await wrapper.vm.$nextTick()
	const saved = wrapper.find('[data-test="llm-key-saved"]')
	expect(saved.exists()).toBe(true)
	expect(saved.text()).toContain('API key on file')
	// Defense: the saved row must never echo the actual key value.
	expect(saved.html()).not.toContain('sk-')

	// Once the user clicks Clear, the saved confirmation goes away and the
	// pending-clear hint takes over — leaves no ambiguity about which state
	// the server is in after the next Save.
	wrapper.vm.llmApiKeyCleared = true
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-key-saved"]').exists()).toBe(false)
	expect(wrapper.find('[data-test="llm-cleared-hint"]').exists()).toBe(true)
})

test('"Clear Key" button is hidden until a key is stored server-side', async () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="llm-clear-key"]').exists()).toBe(false)

	wrapper.vm.llmApiKeyPresent = true
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-clear-key"]').exists()).toBe(true)
})

test('Save sends new API key + enabled flag when both provided', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.llmApiKey = 'sk-ant-new-key'
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	wrapper.vm.llmModel = 'claude-sonnet-4-6'
	wrapper.vm.llmEnabled = true
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
	expect((store.setLLMConfig as any).mock.calls[0][0]).toEqual({
		enabled: true,
		autoEvaluate: true,
		baseUrl: 'https://api.anthropic.com/v1/',
		model: 'claude-sonnet-4-6',
		defaultBaseUrl: '',
		defaultModel: '',
		dailyTokenLimit: 0,
		monthlyTokenLimit: 0,
		toolsEnabled: false,
		clearOpennmsPassword: false,
		opennmsUrl: '',
		opennmsUsername: '',
		systemPrompt: '',
		apiKey: 'sk-ant-new-key'
	})
})

test('Save omits apiKey when the input is blank so server preserves stored key', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.llmApiKeyPresent = true // simulate a previously stored key
	wrapper.vm.llmEnabled = false // user just toggled off
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
	expect((store.setLLMConfig as any).mock.calls[0][0]).toEqual({
		enabled: false,
		autoEvaluate: true,
		baseUrl: '',
		model: '',
		defaultBaseUrl: '',
		defaultModel: '',
		dailyTokenLimit: 0,
		monthlyTokenLimit: 0,
		toolsEnabled: false,
		clearOpennmsPassword: false,
		opennmsUrl: '',
		opennmsUsername: '',
		systemPrompt: ''
	})
})

test('Clear Key sends clearApiKey=true and forces enabled=false', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.llmApiKeyPresent = true
	wrapper.vm.llmEnabled = true
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="llm-clear-key"]').trigger('click')

	// UI mirrors the destructive intent immediately.
	expect(wrapper.vm.llmEnabled).toBe(false)
	expect(wrapper.vm.llmApiKeyCleared).toBe(true)
	expect(wrapper.find('[data-test="llm-cleared-hint"]').exists()).toBe(true)

	await wrapper.find('[data-test="save-btn"]').trigger('click')
	expect((store.setLLMConfig as any).mock.calls[0][0]).toEqual({
		enabled: false,
		autoEvaluate: true,
		baseUrl: '',
		model: '',
		defaultBaseUrl: '',
		defaultModel: '',
		dailyTokenLimit: 0,
		monthlyTokenLimit: 0,
		toolsEnabled: false,
		clearOpennmsPassword: false,
		opennmsUrl: '',
		opennmsUsername: '',
		systemPrompt: '',
		clearApiKey: true
	})
})

test('Auto-evaluate checkbox is exposed, defaults to true, and rides along on Save', async () => {
	const { wrapper, store } = buildWrapper()
	expect(wrapper.find('[data-test="llm-auto-evaluate"]').exists()).toBe(true)
	// Default state: checked, mirroring the server-side default.
	expect(wrapper.vm.llmAutoEvaluate).toBe(true)

	wrapper.vm.llmApiKey = 'sk-ant-fresh'
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	wrapper.vm.llmModel = 'claude-sonnet-4-6'
	wrapper.vm.llmEnabled = true
	wrapper.vm.llmAutoEvaluate = false
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect((store.setLLMConfig as any).mock.calls[0][0]).toEqual({
		enabled: true,
		autoEvaluate: false,
		baseUrl: 'https://api.anthropic.com/v1/',
		model: 'claude-sonnet-4-6',
		defaultBaseUrl: '',
		defaultModel: '',
		dailyTokenLimit: 0,
		monthlyTokenLimit: 0,
		toolsEnabled: false,
		clearOpennmsPassword: false,
		opennmsUrl: '',
		opennmsUsername: '',
		systemPrompt: '',
		apiKey: 'sk-ant-fresh'
	})
})

test('RCA help "?" describes the analysis and points to LLM Setup', async () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="llm-key-help-popover"]').exists()).toBe(false)

	await wrapper.find('[data-test="llm-key-help"]').trigger('click')
	const popover = wrapper.find('[data-test="llm-key-help-popover"]')
	expect(popover.exists()).toBe(true)
	const html = popover.html()
	// RCA-specific now: AI Suggestions, auto-evaluate, system prompt, and a
	// pointer to the LLM Setup tab for the connection.
	expect(html).toContain('AI Suggestions')
	expect(html).toContain('System prompt')
	expect(html).toContain('LLM Setup')
	expect(html.toLowerCase()).not.toContain('option a')

	await wrapper.find('[data-test="llm-key-help"]').trigger('click')
	expect(wrapper.find('[data-test="llm-key-help-popover"]').exists()).toBe(false)
})

test('LLM Setup tab exposes Daily/Monthly token limits that ride along on Save', async () => {
	const { wrapper, store } = buildWrapper()
	expect(wrapper.find('[data-test="tab-llm-setup"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-daily-limit"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-monthly-limit"]').exists()).toBe(true)

	wrapper.vm.llmApiKey = 'sk-ant-fresh'
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	wrapper.vm.llmModel = 'claude-sonnet-4-6'
	wrapper.vm.llmEnabled = true
	wrapper.vm.llmDailyTokenLimit = 100000
	wrapper.vm.llmMonthlyTokenLimit = 2000000
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	const payload = (store.setLLMConfig as any).mock.calls[0][0]
	expect(payload.dailyTokenLimit).toBe(100000)
	expect(payload.monthlyTokenLimit).toBe(2000000)
})

test('LLM Setup help "?" covers the shared connection essentials', async () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="llm-setup-help-popover"]').exists()).toBe(false)

	await wrapper.find('[data-test="llm-setup-help"]').trigger('click')
	const popover = wrapper.find('[data-test="llm-setup-help-popover"]')
	expect(popover.exists()).toBe(true)
	const html = popover.html()
	// The connection guidance lives here now: OpenAI-compatible, tool calling,
	// validate, key storage, token limits.
	expect(html).toContain('OpenAI-compatible')
	expect(html).toContain('chat/completions')
	expect(html.toLowerCase()).toContain('tool/function calling')
	expect(html).toContain('Validate key')
	expect(html).toContain('token limit')

	await wrapper.find('[data-test="llm-setup-help"]').trigger('click')
	expect(wrapper.find('[data-test="llm-setup-help-popover"]').exists()).toBe(false)
})

test('Endpoint + model inputs are exposed and custom values ride along on Save', async () => {
	const { wrapper, store } = buildWrapper()
	expect(wrapper.find('[data-test="llm-base-url"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-model"]').exists()).toBe(true)

	wrapper.vm.llmApiKey = 'sk-openai-test'
	wrapper.vm.llmEnabled = true
	wrapper.vm.llmBaseUrl = 'https://api.openai.com/v1'
	wrapper.vm.llmModel = 'openai/gpt-4o'
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect((store.setLLMConfig as any).mock.calls[0][0]).toEqual({
		enabled: true,
		autoEvaluate: true,
		baseUrl: 'https://api.openai.com/v1',
		model: 'openai/gpt-4o',
		defaultBaseUrl: '',
		defaultModel: '',
		dailyTokenLimit: 0,
		monthlyTokenLimit: 0,
		toolsEnabled: false,
		clearOpennmsPassword: false,
		opennmsUrl: '',
		opennmsUsername: '',
		systemPrompt: '',
		apiKey: 'sk-openai-test'
	})
})

test('Provider/key-match hint is shown', () => {
	const { wrapper } = buildWrapper()
	const hint = wrapper.find('[data-test="llm-key-match-hint"]')
	expect(hint.exists()).toBe(true)
	expect(hint.text()).toContain('same provider as the Endpoint')
})

test('Saving with LLM enabled (remote endpoint) warns about cost; cancelling aborts the save', async () => {
	const { wrapper, store } = buildWrapper()
	// The suite default accepts; override to simulate the user clicking Cancel.
	confirmSpy.mockReturnValue(false)
	wrapper.vm.llmApiKey = 'sk-ant-new'
	wrapper.vm.llmEnabled = true
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()

	// User declined → nothing is persisted, neither engine nor LLM config.
	expect(confirmSpy).toHaveBeenCalledTimes(1)
	expect((confirmSpy.mock.calls[0][0] as string)).toContain('may incur')
	expect(store.setLLMConfig).not.toHaveBeenCalled()
	expect(store.setEngineInfo).not.toHaveBeenCalled()
})

test('Saving with LLM enabled against a local endpoint skips the cost warning', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.llmApiKey = 'sk-local'
	wrapper.vm.llmEnabled = true
	wrapper.vm.llmBaseUrl = 'http://127.0.0.1:1234/v1'
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()

	// A local endpoint bills nothing, so no confirmation should appear and the
	// save proceeds straight through.
	expect(confirmSpy).not.toHaveBeenCalled()
	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
})

test('Saving with LLM disabled never shows the cost warning', async () => {
	const { wrapper, store } = buildWrapper()
	wrapper.vm.llmEnabled = false
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()

	expect(confirmSpy).not.toHaveBeenCalled()
	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
})

test('Endpoint/Model expose Set-as-default and Reset-to-default that round-trip', async () => {
	const { wrapper } = buildWrapper()
	await flushPromises()
	expect(wrapper.find('[data-test="llm-base-url-reset"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-base-url-set-default"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-model-reset"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-model-set-default"]').exists()).toBe(true)

	// Fresh ship: no recorded default and the fields are blank — nothing to reset
	// and nothing to record.
	expect(wrapper.vm.canResetBaseUrl).toBe(false)
	expect(wrapper.vm.canSetBaseUrlDefault).toBe(false)

	// Type a value — now it can be recorded as the default, but there's still no
	// default to reset back to.
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	wrapper.vm.llmModel = 'claude-sonnet-4-6'
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.canSetBaseUrlDefault).toBe(true)
	expect(wrapper.vm.canResetBaseUrl).toBe(false)

	// Record the current values as the per-field defaults.
	wrapper.vm.setBaseUrlDefault()
	wrapper.vm.setModelDefault()
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmDefaultBaseUrl).toBe('https://api.anthropic.com/v1/')
	expect(wrapper.vm.llmDefaultModel).toBe('claude-sonnet-4-6')
	// At the recorded default now: nothing to reset, nothing new to set.
	expect(wrapper.vm.canResetBaseUrl).toBe(false)
	expect(wrapper.vm.canSetBaseUrlDefault).toBe(false)

	// Drift away — reset becomes available again...
	wrapper.vm.llmBaseUrl = 'http://127.0.0.1:1234/v1'
	wrapper.vm.llmModel = 'google/gemma-4-e4b'
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.canResetBaseUrl).toBe(true)
	// ...and reset restores the recorded default.
	wrapper.vm.resetBaseUrlToDefault()
	wrapper.vm.resetModelToDefault()
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmBaseUrl).toBe('https://api.anthropic.com/v1/')
	expect(wrapper.vm.llmModel).toBe('claude-sonnet-4-6')
})

test('Endpoint suggestions menu lists providers; Model menu is contextual, unlabeled', async () => {
	const { wrapper } = buildWrapper()
	await flushPromises()

	// Endpoint menu lists the curated providers (free-text still allowed).
	await wrapper.find('[data-test="llm-base-url-suggest"]').trigger('click')
	const epMenu = wrapper.find('[data-test="llm-base-url-menu"]')
	expect(epMenu.exists()).toBe(true)
	expect(epMenu.text()).toContain('Anthropic')
	expect(epMenu.text()).toContain('LM Studio')

	// With an Anthropic endpoint, the model menu suggests Claude ids — listed in
	// order, with NO price/capability labels (we don't bias the recommendation).
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="llm-model-suggest"]').trigger('click')
	const modelMenu = wrapper.find('[data-test="llm-model-menu"]')
	expect(modelMenu.text()).toContain('claude-sonnet-4-6')
	expect(modelMenu.findAll('.llm-tier').length).toBe(0)
	const text = modelMenu.text()
	expect(text).not.toContain('Advanced')
	expect(text).not.toContain('Economy')

	// A local/unknown endpoint has no preset models — the "type your own" hint shows.
	wrapper.vm.llmBaseUrl = 'http://127.0.0.1:1234/v1'
	await wrapper.vm.$nextTick()
	expect(
		wrapper.find('[data-test="llm-model-menu"]').text().toLowerCase()
	).toContain('no preset models')
})

test('System prompt textarea is exposed and a custom prompt rides along on Save', async () => {
	const { wrapper, store } = buildWrapper()
	expect(wrapper.find('[data-test="llm-system-prompt"]').exists()).toBe(true)

	wrapper.vm.llmApiKey = 'sk-ant-fresh'
	wrapper.vm.llmBaseUrl = 'https://api.anthropic.com/v1/'
	wrapper.vm.llmModel = 'claude-sonnet-4-6'
	wrapper.vm.llmEnabled = true
	wrapper.vm.llmSystemPrompt = 'You are an ACME network expert.'
	await wrapper.find('[data-test="save-btn"]').trigger('click')

	expect((store.setLLMConfig as any).mock.calls[0][0]).toEqual({
		enabled: true,
		autoEvaluate: true,
		baseUrl: 'https://api.anthropic.com/v1/',
		model: 'claude-sonnet-4-6',
		defaultBaseUrl: '',
		defaultModel: '',
		dailyTokenLimit: 0,
		monthlyTokenLimit: 0,
		toolsEnabled: false,
		clearOpennmsPassword: false,
		opennmsUrl: '',
		opennmsUsername: '',
		systemPrompt: 'You are an ACME network expert.',
		apiKey: 'sk-ant-fresh'
	})
})

test('Reset-to-default repopulates the prompt and disables once at the default', async () => {
	const { wrapper } = buildWrapper()
	// Let onMounted's config fetch settle first so it doesn't overwrite the
	// values we set below.
	await flushPromises()
	// Simulate the server having handed us a default prompt and the user having
	// edited it away from that default.
	wrapper.vm.llmDefaultSystemPrompt = 'DEFAULT PROMPT TEXT'
	wrapper.vm.llmSystemPrompt = 'a custom edit'
	await wrapper.vm.$nextTick()

	expect(wrapper.find('[data-test="llm-prompt-reset"]').exists()).toBe(true)
	// "Custom" while the text differs from the default — this gates the button.
	expect(wrapper.vm.llmSystemPromptIsCustom).toBe(true)

	wrapper.vm.resetSystemPromptToDefault()
	await wrapper.vm.$nextTick()
	// Reset repopulates the textarea with the server-provided default...
	expect(wrapper.vm.llmSystemPrompt).toBe('DEFAULT PROMPT TEXT')
	// ...and there's now nothing to reset.
	expect(wrapper.vm.llmSystemPromptIsCustom).toBe(false)
})

test('Validate button calls the service with form values and shows the result', async () => {
	const { wrapper } = buildWrapper()
	const spy = vi
		.spyOn(AlecService, 'validateLLMConfig')
		.mockResolvedValue({ ok: true, message: 'Success — reachable' })

	wrapper.vm.llmApiKey = 'sk-test'
	wrapper.vm.llmBaseUrl = 'https://api.openai.com/v1'
	wrapper.vm.llmModel = 'openai/gpt-4o'
	await wrapper.vm.$nextTick()

	await wrapper.find('[data-test="llm-validate-btn"]').trigger('click')
	await flushPromises()

	expect(spy).toHaveBeenCalledTimes(1)
	expect(spy.mock.calls[0][0]).toMatchObject({
		baseUrl: 'https://api.openai.com/v1',
		model: 'openai/gpt-4o',
		apiKey: 'sk-test'
	})
	const result = wrapper.find('[data-test="llm-validate-result"]')
	expect(result.exists()).toBe(true)
	expect(result.text()).toContain('Success')
})

test('Validate omits apiKey when none typed (server uses stored key)', async () => {
	const { wrapper } = buildWrapper()
	wrapper.vm.llmApiKeyPresent = true // a key is already stored
	const spy = vi
		.spyOn(AlecService, 'validateLLMConfig')
		.mockResolvedValue({ ok: true, message: 'ok' })
	await wrapper.vm.$nextTick()

	await wrapper.find('[data-test="llm-validate-btn"]').trigger('click')
	await flushPromises()

	expect(spy).toHaveBeenCalledTimes(1)
	expect(spy.mock.calls[0][0].apiKey).toBeUndefined()
})

test('Validate is blocked with a hint when no key is typed or stored', async () => {
	const { wrapper } = buildWrapper()
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmCannotValidate).toBe(true)
	expect(wrapper.find('[data-test="llm-validate-hint"]').exists()).toBe(true)
})

// --- Usage rollup (slice 6) ---

const usageFixture = {
	daysWindow: 30,
	totalTokens: 1_234_567,
	inputTokens: 1_000_000,
	outputTokens: 100_000,
	cacheReadInputTokens: 100_000,
	cacheCreationInputTokens: 34_567,
	calls: 42,
	successfulCalls: 40,
	failedCalls: 2,
	cacheHitRatio: 0.075,
	estimatedCostUsd: 4.85,
	pricingNote: 'Approximate cost using Sonnet 4.6 ephemeral-cache list price.'
}

test('Usage rollup is hidden when no usage data is present', () => {
	const { wrapper } = buildWrapper()
	expect(wrapper.find('[data-test="llm-usage"]').exists()).toBe(false)
})

test('Usage rollup renders humanized tokens; the dollar estimate is hidden for now', async () => {
	const { wrapper, store } = buildWrapper()
	store.llmUsage = usageFixture as any
	await wrapper.vm.$nextTick()

	const tokens = wrapper.find('[data-test="llm-usage-tokens"]')
	expect(tokens.exists()).toBe(true)
	// 1,234,567 should render as "1.2M" — that's the humanizeTokens contract.
	expect(tokens.text()).toContain('1.2M')
	// Raw count goes into the title attribute for hover.
	expect(tokens.attributes('title')).toContain('1,234,567')

	// The dollar-value estimate is intentionally commented out until the cost
	// model is reworked — the cost element must not render, and no "$" leaks into
	// the summary row.
	expect(wrapper.find('[data-test="llm-usage-cost"]').exists()).toBe(false)
	expect(wrapper.find('[data-test="llm-usage"]').text()).not.toContain('$')
})

test('Usage details panel toggles open + shows breakdown', async () => {
	const { wrapper, store } = buildWrapper()
	store.llmUsage = usageFixture as any
	await wrapper.vm.$nextTick()

	expect(wrapper.find('[data-test="llm-usage-details"]').exists()).toBe(false)
	await wrapper.find('[data-test="llm-usage-toggle"]').trigger('click')

	const details = wrapper.find('[data-test="llm-usage-details"]')
	expect(details.exists()).toBe(true)
	const html = details.html()
	// Cache hit ratio 0.075 -> 8% (toFixed(0) rounds — verify the row is rendered).
	expect(html).toContain('Cache hit')
	// Success/failure split is surfaced as "40 ok / 2 failed".
	expect(html).toContain('40 ok')
	expect(html).toContain('2 failed')
})

test('Save refreshes usage rollup', async () => {
	const { wrapper, store } = buildWrapper()
	// Reset the spy so we ignore the mount-time call (which hits the Pinia
	// stub default before our vi.fn replacement) — we only care that the
	// save path triggers a refresh.
	;(store.getLLMUsage as any).mockClear()
	wrapper.vm.llmApiKey = 'sk-ant-fresh'
	wrapper.vm.llmEnabled = true
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()
	expect((store.getLLMUsage as any)).toHaveBeenCalledTimes(1)
	expect((store.getLLMUsage as any)).toHaveBeenCalledWith(30)
})

test('Input is scrubbed and cleared-flag reset after a successful save', async () => {
	const { wrapper, store } = buildWrapper()
	// Pretend the server stored the key and now reports it back.
	;(store.setLLMConfig as any).mockImplementation(async () => {
		store.llmConfig = {
			enabled: true,
			autoEvaluate: true,
			baseUrl: 'https://api.anthropic.com/v1/',
			model: 'claude-sonnet-4-6',
			defaultBaseUrl: '',
			defaultModel: '',
			dailyTokenLimit: 0,
			monthlyTokenLimit: 0,
			systemPrompt: '',
			defaultSystemPrompt: '',
			apiKeyPresent: true
		}
		return true
	})
	wrapper.vm.llmApiKey = 'sk-ant-new'
	wrapper.vm.llmEnabled = true
	await wrapper.find('[data-test="save-btn"]').trigger('click')
	// trigger('click') fires the handler but doesn't await the chained promises
	// inside saveConfiguration; flushPromises lets the post-save scrub run.
	await flushPromises()

	// The secret must not linger in the input after the round-trip.
	expect(wrapper.vm.llmApiKey).toBe('')
	expect(wrapper.vm.llmApiKeyCleared).toBe(false)
	expect(wrapper.vm.llmApiKeyPresent).toBe(true)
})

test('Save never POSTs the LLM section when the stored config failed to load', async () => {
	// Mount WITHOUT the pre-seeded llmConfig: the store starts empty and the
	// mount-time fetch fails, so the form holds blank initial values that must
	// not overwrite the server's stored endpoint/model/prompt.
	const wrapper = mount(AccountSettings, {
		global: {
			plugins: [createTestingPinia({ createSpy: vi.fn, stubActions: false })]
		}
	} as any) as any
	const store = useUserStore()
	store.setEngineInfo = vi.fn().mockResolvedValue(true)
	store.getEngineInfo = vi.fn()
	store.setLLMConfig = vi.fn().mockResolvedValue(true)
	store.getLLMConfig = vi.fn().mockResolvedValue(null) // fetch fails
	store.getLLMUsage = vi.fn().mockResolvedValue(null)
	await flushPromises()

	await wrapper.find('[data-test="save-btn"]').trigger('click')
	await flushPromises()

	// Engine settings still save; the LLM POST is skipped entirely.
	expect(store.setEngineInfo).toHaveBeenCalledTimes(1)
	expect(store.setLLMConfig).not.toHaveBeenCalled()
})

test('Enable checkbox can always be turned OFF, even when re-enabling is blocked', async () => {
	const { wrapper } = buildWrapper()
	await flushPromises()
	// Feature is on, but the endpoint has been blanked: re-enabling would be
	// blocked (llmCannotEnable), yet the checkbox must stay operable so the
	// user can switch the integration off.
	wrapper.vm.llmEnabled = true
	wrapper.vm.llmBaseUrl = ''
	wrapper.vm.llmModel = ''
	await wrapper.vm.$nextTick()

	expect(wrapper.vm.llmCannotEnable).toBe(true)
	const enabledBox = wrapper.findComponent('[data-test="llm-enabled"]') as any
	expect(enabledBox.exists()).toBe(true)
	// ON + blocked prerequisites → still operable (so the user can turn it off).
	expect(enabledBox.props('disabled')).toBe(false)

	// Once OFF with the prerequisites still missing, it locks (can't re-enable).
	wrapper.vm.llmEnabled = false
	await wrapper.vm.$nextTick()
	expect(enabledBox.props('disabled')).toBe(true)
})

// --- MCP tool access (ALEC-308) ---

const mcpStatusFixture = {
	toolsEnabled: false,
	opennmsRestConfigured: false,
	opennmsUrl: 'http://localhost:8980/opennms',
	endpointPath: '/opennms/rest/mcp',
	nativeServerInstalled: true,
	tools: [
		{ name: 'alec_status', description: 'Check ALEC', available: true },
		{ name: 'get_node', description: 'Node inventory', available: true },
		{
			name: 'list_node_events',
			description: 'Recent events',
			available: false
		}
	],
	stats: {
		sinceMs: 0,
		toolCalls: 7,
		toolErrors: 1,
		rate1m: 0,
		rate5m: 0,
		byConsumer: { rca: 4, clustering: 2, validation: 1, external: 0 },
		byTool: { get_node: 7 }
	}
}

test('MCP block renders the option, the login fields and the check button', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	const { wrapper } = buildWrapper()
	await flushPromises()
	expect(wrapper.find('[data-test="llm-tools-enabled"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-opennms-url"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-opennms-username"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-opennms-password"]').exists()).toBe(true)
	expect(wrapper.find('[data-test="llm-validate-tools-btn"]').exists()).toBe(true)
	// Counters from the status endpoint are shown.
	const stats = wrapper.find('[data-test="llm-tools-stats"]')
	expect(stats.exists()).toBe(true)
	expect(stats.text()).toContain('7')
	expect(stats.text()).toContain('4 root cause')
	expect(stats.text()).toContain('/opennms/rest/mcp')
})

test('MCP (i) toggles the verbose help with the flow diagram and tool list', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	const { wrapper } = buildWrapper()
	await flushPromises()
	expect(wrapper.find('[data-test="llm-tools-help-popover"]').exists()).toBe(false)
	await wrapper.find('[data-test="llm-tools-help"]').trigger('click')
	await wrapper.vm.$nextTick()
	const help = wrapper.find('[data-test="llm-tools-help-popover"]')
	expect(help.exists()).toBe(true)
	expect(wrapper.find('[data-test="mcp-flow-diagram"]').exists()).toBe(true)
	expect(help.text()).toContain('Model Context Protocol')
	expect(help.text()).toContain('never connects to OpenNMS')
	// Tool inventory, with unavailable tools flagged.
	const list = wrapper.find('[data-test="llm-tools-list"]')
	expect(list.text()).toContain('alec_status')
	expect(list.text()).toContain('list_node_events')
	expect(list.text()).toContain('needs the OpenNMS login')
	// The endpoint URL shown to external clients uses the server-provided path.
	expect(wrapper.find('[data-test="llm-tools-endpoint"]').text()).toContain(
		'/opennms/rest/mcp'
	)
	// Toggle closes it again.
	await wrapper.find('[data-test="llm-tools-help"]').trigger('click')
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-tools-help-popover"]').exists()).toBe(false)
})

test('Save sends toolsEnabled and the typed OpenNMS login, never a blank password', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	vi.spyOn(AlecService, 'validateLLMTools').mockResolvedValue({ ok: true, message: 'Yes — fine' })
	const { wrapper, store } = buildWrapper()
	await flushPromises()
	wrapper.vm.llmApiKey = 'sk-test'
	wrapper.vm.llmToolsEnabled = true
	wrapper.vm.llmOpennmsUrl = 'http://nms.example.com:8980/opennms'
	wrapper.vm.llmOpennmsUsername = 'alec-ro'
	wrapper.vm.llmOpennmsPassword = 's3cret'
	await wrapper.vm.$nextTick()
	// The save gate requires a passed tool-access check for these values.
	await wrapper.vm.validateLlmTools()
	await flushPromises()
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
	const posted = (store.setLLMConfig as any).mock.calls[0][0]
	expect(posted).toMatchObject({
		toolsEnabled: true,
		opennmsUrl: 'http://nms.example.com:8980/opennms',
		opennmsUsername: 'alec-ro',
		opennmsPassword: 's3cret',
		clearOpennmsPassword: false
	})
	// Second save with nothing typed omits the password entirely (server keeps
	// it). The post-save re-hydrate read the (stubbed, unchanged) store config,
	// so re-tick the option the way a user would, and re-run the check since
	// the form values changed.
	wrapper.vm.llmToolsEnabled = true
	wrapper.vm.llmOpennmsUsername = 'alec-ro'
	wrapper.vm.llmOpennmsPasswordPresent = true
	wrapper.vm.llmOpennmsPassword = ''
	await wrapper.vm.$nextTick()
	await wrapper.vm.validateLlmTools()
	await flushPromises()
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	const second = (store.setLLMConfig as any).mock.calls[1][0]
	expect(second.opennmsPassword).toBeUndefined()
	expect(second.toolsEnabled).toBe(true)
})

test('Clear password marks the stored OpenNMS password for removal on save', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	const { wrapper, store } = buildWrapper()
	await flushPromises()
	wrapper.vm.llmOpennmsPasswordPresent = true
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-opennms-clear-password"]').exists()).toBe(true)
	await wrapper.find('[data-test="llm-opennms-clear-password"]').trigger('click')
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-opennms-cleared-hint"]').exists()).toBe(true)
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	const posted = (store.setLLMConfig as any).mock.calls[0][0]
	expect(posted.clearOpennmsPassword).toBe(true)
	expect(posted.opennmsPassword).toBeUndefined()
})

test('Check tool access posts the form + login and shows the yes/no verdict', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	const spy = vi.spyOn(AlecService, 'validateLLMTools').mockResolvedValue({
		ok: true,
		message: 'Yes — alec_status listed 11 tools. OpenNMS REST login: reached OpenNMS 37.'
	})
	const { wrapper } = buildWrapper()
	await flushPromises()
	wrapper.vm.llmApiKey = 'sk-test'
	wrapper.vm.llmBaseUrl = 'http://127.0.0.1:1234/v1'
	wrapper.vm.llmModel = 'qwen3-14b'
	wrapper.vm.llmOpennmsUsername = 'admin'
	wrapper.vm.llmOpennmsPassword = 'admin'
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="llm-validate-tools-btn"]').trigger('click')
	await flushPromises()
	expect(spy).toHaveBeenCalledTimes(1)
	expect(spy.mock.calls[0][0]).toMatchObject({
		baseUrl: 'http://127.0.0.1:1234/v1',
		model: 'qwen3-14b',
		apiKey: 'sk-test',
		opennmsUsername: 'admin',
		opennmsPassword: 'admin'
	})
	const result = wrapper.find('[data-test="llm-validate-tools-result"]')
	expect(result.exists()).toBe(true)
	expect(result.classes()).toContain('is-ok')
	expect(wrapper.find('[data-test="llm-validate-tools-verdict"]').text()).toBe('Yes')
	expect(result.text()).toContain('alec_status listed 11 tools')
})

test('Check tool access shows No with the explanation when the model cannot use tools', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	vi.spyOn(AlecService, 'validateLLMTools').mockResolvedValue({
		ok: false,
		message: 'No — "tiny-model" answered without calling alec_status.'
	})
	const { wrapper } = buildWrapper()
	await flushPromises()
	wrapper.vm.llmApiKey = 'sk-test'
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="llm-validate-tools-btn"]').trigger('click')
	await flushPromises()
	const result = wrapper.find('[data-test="llm-validate-tools-result"]')
	expect(result.classes()).toContain('is-error')
	expect(wrapper.find('[data-test="llm-validate-tools-verdict"]').text()).toBe('No')
	expect(result.text()).toContain('without calling alec_status')
})

test('Check tool access is blocked with a hint when no key is available', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	const { wrapper } = buildWrapper()
	await flushPromises()
	expect(wrapper.find('[data-test="llm-validate-tools-hint"]').exists()).toBe(true)
	expect(wrapper.vm.llmCannotValidate).toBe(true)
	expect(wrapper.find('[data-test="llm-validate-tools-result"]').exists()).toBe(false)
})

test('Mount hydrates the MCP fields from the stored config', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	vi.spyOn(AlecService, 'getLLMUsage').mockResolvedValue(false)
	vi.spyOn(AlecService, 'getLLMConfig').mockResolvedValue({
		enabled: true,
		autoEvaluate: true,
		baseUrl: 'http://127.0.0.1:1234/v1',
		model: 'm',
		defaultBaseUrl: '',
		defaultModel: '',
		systemPrompt: 'p',
		defaultSystemPrompt: 'p',
		dailyTokenLimit: 0,
		monthlyTokenLimit: 0,
		apiKeyPresent: true,
		toolsEnabled: true,
		opennmsUrl: 'http://nms:8980/opennms',
		opennmsUsername: 'ro',
		opennmsPasswordPresent: true
	})
	// No pre-seeded llmConfig, so onMounted fetches it through the store.
	const wrapper = mount(AccountSettings, {
		global: {
			plugins: [createTestingPinia({ createSpy: vi.fn, stubActions: false })]
		}
	} as any) as any
	await flushPromises()
	expect(wrapper.vm.llmToolsEnabled).toBe(true)
	expect(wrapper.vm.llmOpennmsUrl).toBe('http://nms:8980/opennms')
	expect(wrapper.vm.llmOpennmsUsername).toBe('ro')
	expect(wrapper.vm.llmOpennmsPasswordPresent).toBe(true)
	expect(wrapper.find('[data-test="llm-opennms-clear-password"]').exists()).toBe(true)
	// The saved state is a line below the field, not a long label that
	// overflows the box (FeatherInput strips placeholders, so no dots inside).
	expect(wrapper.find('[data-test="llm-opennms-password-saved"]').text()).toContain(
		'OpenNMS password saved'
	)
	// Clearing removes the saved line.
	await wrapper.find('[data-test="llm-opennms-clear-password"]').trigger('click')
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-opennms-password-saved"]').exists()).toBe(false)
})

test('Usage details show the tool-call count', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	const { wrapper, store } = buildWrapper()
	store.llmUsage = { ...usageFixture, toolCalls: 12 } as any
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="llm-usage-toggle"]').trigger('click')
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-usage-tool-calls"]').text()).toBe('12')
})

// --- MCP save gate (ALEC-308) ---

test('Save is blocked with a warning when tool access is on but unchecked', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	const { wrapper, store } = buildWrapper()
	await flushPromises()
	wrapper.vm.llmApiKey = 'sk-test'
	wrapper.vm.llmToolsEnabled = true
	wrapper.vm.llmOpennmsUsername = 'ro'
	wrapper.vm.llmOpennmsPassword = 'pw'
	await wrapper.vm.$nextTick()
	const hint = wrapper.find('[data-test="llm-tools-gate-hint"]')
	expect(hint.exists()).toBe(true)
	expect(hint.text()).toContain('Run Check tool access')
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(store.setLLMConfig).not.toHaveBeenCalled()
	expect(store.setEngineInfo).not.toHaveBeenCalled()
	expect(wrapper.vm.isError).toBe(true)
	expect(wrapper.vm.message).toContain('Check tool access')
})

test('Save is blocked when tool access is on but the OpenNMS login is missing', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	const { wrapper, store } = buildWrapper()
	await flushPromises()
	wrapper.vm.llmApiKey = 'sk-test'
	wrapper.vm.llmToolsEnabled = true
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-tools-gate-hint"]').text()).toContain('needs an OpenNMS login')
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(store.setLLMConfig).not.toHaveBeenCalled()
})

test('A passed check is invalidated when a checked field changes', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	vi.spyOn(AlecService, 'validateLLMTools').mockResolvedValue({ ok: true, message: 'Yes — fine' })
	const { wrapper } = buildWrapper()
	await flushPromises()
	wrapper.vm.llmApiKey = 'sk-test'
	wrapper.vm.llmToolsEnabled = true
	wrapper.vm.llmOpennmsUsername = 'ro'
	wrapper.vm.llmOpennmsPassword = 'pw'
	await wrapper.vm.$nextTick()
	await wrapper.vm.validateLlmTools()
	await flushPromises()
	expect(wrapper.vm.llmToolsValidated).toBe(true)
	expect(wrapper.find('[data-test="llm-tools-gate-hint"]').exists()).toBe(false)
	wrapper.vm.llmModel = 'another-model'
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmToolsValidated).toBe(false)
	expect(wrapper.find('[data-test="llm-tools-gate-hint"]').exists()).toBe(true)
})

test('A failed check (No) does not satisfy the save gate', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	vi.spyOn(AlecService, 'validateLLMTools').mockResolvedValue({ ok: false, message: 'No — nope' })
	const { wrapper, store } = buildWrapper()
	await flushPromises()
	wrapper.vm.llmApiKey = 'sk-test'
	wrapper.vm.llmToolsEnabled = true
	wrapper.vm.llmOpennmsUsername = 'ro'
	wrapper.vm.llmOpennmsPassword = 'pw'
	await wrapper.vm.$nextTick()
	await wrapper.vm.validateLlmTools()
	await flushPromises()
	expect(wrapper.vm.llmToolsValidated).toBe(false)
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(store.setLLMConfig).not.toHaveBeenCalled()
})

test('Typing a password after Clear password replaces it instead of clearing', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	const { wrapper, store } = buildWrapper()
	await flushPromises()
	wrapper.vm.llmOpennmsPasswordPresent = true
	await wrapper.vm.$nextTick()
	await wrapper.find('[data-test="llm-opennms-clear-password"]').trigger('click')
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmOpennmsPasswordCleared).toBe(true)
	wrapper.vm.llmOpennmsPassword = 'new-pw'
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmOpennmsPasswordCleared).toBe(false)
	// Erasing the typed text lands back on the stored state, not on "no password".
	wrapper.vm.llmOpennmsPassword = ''
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmOpennmsPasswordPresent).toBe(true)
	expect(wrapper.find('[data-test="llm-opennms-password-saved"]').exists()).toBe(true)
	wrapper.vm.llmOpennmsPassword = 'new-pw'
	await wrapper.vm.$nextTick()
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	const posted = (store.setLLMConfig as any).mock.calls[0][0]
	expect(posted.opennmsPassword).toBe('new-pw')
	expect(posted.clearOpennmsPassword).toBe(false)
})

test('Save always sends the OpenNMS URL and username so blanks clear the stored values', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	const { wrapper, store } = buildWrapper()
	await flushPromises()
	wrapper.vm.llmOpennmsUrl = ''
	wrapper.vm.llmOpennmsUsername = ''
	await wrapper.vm.$nextTick()
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	const posted = (store.setLLMConfig as any).mock.calls[0][0]
	expect(posted.opennmsUrl).toBe('')
	expect(posted.opennmsUsername).toBe('')
	expect(posted.opennmsPassword).toBeUndefined()
})

test('A changed OpenNMS URL with a stored password demands the password again', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	const { wrapper, store } = buildWrapper()
	store.llmConfig = {
		...(store.llmConfig as any),
		toolsEnabled: true,
		opennmsUrl: '',
		opennmsUsername: 'ro',
		opennmsPasswordPresent: true
	}
	wrapper.vm.llmApiKeyPresent = true
	wrapper.vm.llmToolsEnabled = true
	wrapper.vm.llmOpennmsUsername = 'ro'
	wrapper.vm.llmOpennmsPasswordPresent = true
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-tools-gate-hint"]').exists()).toBe(false)
	wrapper.vm.llmOpennmsUrl = 'http://other:8980/opennms'
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-tools-gate-hint"]').text()).toContain('re-enter the OpenNMS password')
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(store.setLLMConfig).not.toHaveBeenCalled()
	// Typing the password lifts that reason (the check is then required as usual).
	wrapper.vm.llmOpennmsPassword = 'pw'
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-tools-gate-hint"]').text()).toContain('Run Check tool access')
})

test('Clearing the API key with tool access on is not blocked by the tool check', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	const { wrapper, store } = buildWrapper()
	await flushPromises()
	wrapper.vm.llmApiKeyPresent = true
	wrapper.vm.llmToolsEnabled = true
	await wrapper.vm.$nextTick()
	wrapper.vm.clearLLMApiKey()
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-tools-gate-hint"]').exists()).toBe(false)
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
	expect((store.setLLMConfig as any).mock.calls[0][0].clearApiKey).toBe(true)
})

test('A rejected LLM save shows the server reason in the toast', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	vi.spyOn(AlecService, 'getLastLlmConfigError').mockReturnValue(
		'Cannot enable MCP tool access: the OpenNMS login does not work (OpenNMS rejected the login (HTTP 401))'
	)
	const { wrapper, store } = buildWrapper()
	store.setLLMConfig = vi.fn().mockResolvedValue(false)
	await flushPromises()
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(wrapper.vm.isError).toBe(true)
	expect(wrapper.vm.message).toContain('HTTP 401')
})

test('Save is not gated when tool access is off', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	const { wrapper, store } = buildWrapper()
	await flushPromises()
	wrapper.vm.llmToolsEnabled = false
	await wrapper.vm.$nextTick()
	expect(wrapper.find('[data-test="llm-tools-gate-hint"]').exists()).toBe(false)
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
})

test('Save is not gated when tool access is already saved and nothing it depends on changed', async () => {
	vi.spyOn(AlecService, 'getMCPStatus').mockResolvedValue(mcpStatusFixture as any)
	const validateSpy = vi.spyOn(AlecService, 'validateLLMTools')
	const { wrapper, store } = buildWrapper()
	// Simulate a stored, previously validated configuration.
	store.llmConfig = {
		...(store.llmConfig as any),
		baseUrl: 'http://127.0.0.1:1234/v1',
		model: 'm',
		apiKeyPresent: true,
		toolsEnabled: true,
		opennmsUrl: '',
		opennmsUsername: 'ro',
		opennmsPasswordPresent: true
	}
	wrapper.vm.llmApiKeyPresent = true
	wrapper.vm.llmBaseUrl = 'http://127.0.0.1:1234/v1'
	wrapper.vm.llmModel = 'm'
	wrapper.vm.llmToolsEnabled = true
	wrapper.vm.llmOpennmsUsername = 'ro'
	wrapper.vm.llmOpennmsPasswordPresent = true
	await flushPromises()
	expect(wrapper.vm.llmToolsDirty).toBe(false)
	expect(wrapper.find('[data-test="llm-tools-gate-hint"]').exists()).toBe(false)
	// Changing an unrelated setting and saving goes straight through.
	wrapper.vm.llmDailyTokenLimit = 5000
	await wrapper.vm.$nextTick()
	await wrapper.vm.saveConfiguration()
	await flushPromises()
	expect(validateSpy).not.toHaveBeenCalled()
	expect(store.setLLMConfig).toHaveBeenCalledTimes(1)
	expect((store.setLLMConfig as any).mock.calls[0][0].toolsEnabled).toBe(true)
	// Touching a field the check depends on brings the gate back.
	wrapper.vm.llmModel = 'other'
	await wrapper.vm.$nextTick()
	expect(wrapper.vm.llmToolsDirty).toBe(true)
	expect(wrapper.find('[data-test="llm-tools-gate-hint"]').exists()).toBe(true)
})
