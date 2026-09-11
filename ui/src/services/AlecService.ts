import { rest } from './axiosInstances'
import CONST from '@/helpers/constants'
import { TSituation, TNewSituation } from '@/types/TSituation'
import {
	TEngine,
	TLLMConfigRequest,
	TLLMConfigStatus,
	TLLMValidationResult,
	TLLMSuggestion,
	TLLMUsage,
	TLLMBudget,
	TMCPStatus
} from '@/types/TUser'
import { sendAction } from '@/services/AlarmService'
const base = '/alec'
const engineEndpoint = '/alec/engine/configuration'
const llmConfigEndpoint = '/alec/llm/configuration'
const llmValidateEndpoint = '/alec/llm/validate'
const llmValidateToolsEndpoint = '/alec/llm/validate-tools'
const mcpStatusEndpoint = '/alec/mcp/status'
const llmSuggestionsEndpoint = '/alec/llm/suggestions'
const llmUsageEndpoint = '/alec/llm/usage'
const llmBudgetEndpoint = '/alec/llm/budget'
const situationStatusEndpoint = '/alec/situation/statusList'
const situationEndpoint = '/alec/situation'

export const getEngineInfo = async () => {
	try {
		const resp = await rest.get(`${engineEndpoint}`)
		if (resp.status === 200) {
			return resp.data
		}
		return false
	} catch (err) {
		return false
	}
}

export const saveEngineParameter = async (engineData: TEngine) => {
	try {
		const resp = await rest.post(engineEndpoint, engineData)
		return resp.status === 200
	} catch (err) {
		return false
	}
}

export const getLLMConfig = async (): Promise<TLLMConfigStatus | false> => {
	try {
		const resp = await rest.get(llmConfigEndpoint)
		if (resp.status === 200) {
			return resp.data
		}
		return false
	} catch (err) {
		return false
	}
}

export const saveLLMConfig = async (
	config: TLLMConfigRequest
): Promise<TLLMConfigStatus | false> => {
	try {
		const resp = await rest.post(llmConfigEndpoint, config)
		if (resp.status === 200) {
			return resp.data
		}
		return false
	} catch (err) {
		return false
	}
}

// Probe the endpoint/model/key. Send the current form values; a blank apiKey
// tells the server to use the already-stored key. Returns the server's
// {ok, message}, or a generic failure result if the request itself errors.
export const validateLLMConfig = async (
	config: TLLMConfigRequest
): Promise<TLLMValidationResult> => {
	try {
		const resp = await rest.post(llmValidateEndpoint, config)
		if (resp.status === 200) {
			return resp.data as TLLMValidationResult
		}
		return { ok: false, message: `Unexpected response (HTTP ${resp.status}).` }
	} catch (err) {
		return { ok: false, message: 'Could not reach the server to validate.' }
	}
}

// ALEC-308: probe the endpoint with the MCP tools offered. The server asks the
// model to call alec_status and report back; `ok` is the model's yes/no and
// `message` its one-line explanation plus the OpenNMS REST login state.
// Unsaved OpenNMS login fields in the request are tested instead of the stored ones.
export const validateLLMTools = async (
	config: TLLMConfigRequest
): Promise<TLLMValidationResult> => {
	try {
		const resp = await rest.post(llmValidateToolsEndpoint, config)
		if (resp.status === 200) {
			return resp.data as TLLMValidationResult
		}
		return { ok: false, message: `Unexpected response (HTTP ${resp.status}).` }
	} catch (err) {
		return { ok: false, message: 'Could not reach the server to check tool access.' }
	}
}

// ALEC-308: tool inventory + usage counters for the configuration page.
export const getMCPStatus = async (): Promise<TMCPStatus | false> => {
	try {
		const resp = await rest.get(mcpStatusEndpoint)
		if (resp.status === 200) {
			return resp.data as TMCPStatus
		}
		return false
	} catch (err) {
		return false
	}
}

// 204 No Content (no record yet — feature off, or pending) maps to null so
// callers can distinguish "absent" from "failed".
export const getLLMSuggestion = async (
	situationId: number | string
): Promise<TLLMSuggestion | null | false> => {
	try {
		const resp = await rest.get(`${llmSuggestionsEndpoint}/${situationId}`)
		if (resp.status === 200) {
			return resp.data as TLLMSuggestion
		}
		if (resp.status === 204) {
			return null
		}
		return false
	} catch (err) {
		return false
	}
}

// POST /alec/llm/suggestions/{id}/reanalyze — force a fresh LLM call
// even if a ready/pending record already exists. Returns the new pending
// record (server writes it synchronously before kicking off the async LLM
// request); 400 if the integration is disabled / has no key; 404 if the
// situation doesn't exist.
export const reanalyzeLLMSuggestion = async (
	situationId: number | string
): Promise<TLLMSuggestion | false> => {
	try {
		const resp = await rest.post(
			`${llmSuggestionsEndpoint}/${situationId}/reanalyze`
		)
		if (resp.status === 202 || resp.status === 200) {
			return resp.data as TLLMSuggestion
		}
		return false
	} catch (err) {
		return false
	}
}

export const getLLMUsage = async (
	days = 30
): Promise<TLLMUsage | false> => {
	try {
		const resp = await rest.get(`${llmUsageEndpoint}?days=${days}`)
		if (resp.status === 200) {
			return resp.data as TLLMUsage
		}
		return false
	} catch (err) {
		return false
	}
}

// Current shared LLM token-budget status. Used by the main page to warn the
// user when the daily/monthly token cap has paused LLM requests.
export const getLLMBudget = async (): Promise<TLLMBudget | false> => {
	try {
		const resp = await rest.get(llmBudgetEndpoint)
		if (resp.status === 200) {
			return resp.data as TLLMBudget
		}
		return false
	} catch (err) {
		return false
	}
}

export const sendFeedbackAcceptSituation = async (
	id: number,
	action: string
) => {
	try {
		const resp = await rest.post(`${base}/situation/${action}/${id}`, {
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		})
		if (action == CONST.REJECTED.toLowerCase() && resp.status === 200) {
			//after the situation was rejected, it becomes alarm
			// so this alarm needs to be cleared
			await sendAction(id, 'clear')
		}
		return resp.status === 200
	} catch (err) {
		return false
	}
}

export const getSituationsStatus = async () => {
	try {
		const resp = await rest.get(situationStatusEndpoint)
		if (resp.status === 200) {
			return resp.data
		}
		return resp.data
	} catch (err) {
		return false
	}
}

export const getSituations = async (): Promise<TSituation[] | false> => {
	try {
		const resp = await rest.get(situationEndpoint)
		if (resp.status === 200) {
			return resp.data
		}
		return resp.data
	} catch (err) {
		return false
	}
}

export const removeAlarmsFromSituation = async (
	situationId: number,
	alarmIdList: number[]
) => {
	try {
		const resp = await rest.delete(`${base}/situation/alarm/`, {
			data: {
				situationId,
				alarmIdList
			}
		})
		return resp.status === 200
	} catch (err) {
		return false
	}
}

export const assignAlarmsToSituation = async (
	situationId: number,
	alarmIdList: number[]
) => {
	try {
		const resp = await rest.put(`${base}/situation/alarm/`, {
			situationId,
			alarmIdList
		})
		return resp.status === 200
	} catch (err) {
		return false
	}
}

export const createSituations = async (
	situationInfo: TNewSituation
): Promise<boolean> => {
	try {
		const resp = await rest.post(situationEndpoint, situationInfo)
		return resp.status === 200
	} catch (err) {
		return false
	}
}

export const closeAllOpenSituations = async (): Promise<boolean> => {
	try {
		const resp = await rest.post(`${situationEndpoint}/close-all`)
		return resp.status === 200
	} catch (err) {
		return false
	}
}

export const reEvaluateAllOpenAlarms = async (): Promise<boolean> => {
	try {
		const resp = await rest.post(`${base}/engine/reevaluate`)
		return resp.status === 200
	} catch (err) {
		return false
	}
}
