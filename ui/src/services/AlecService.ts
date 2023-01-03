import { rest } from './axiosInstances'
import CONST from '@/helpers/constants'
import { TSituation, TNewSituation } from '@/types/TSituation'
import { TEngine } from '@/types/TUser'
import { sendAction } from '@/services/AlarmService'
const base = '/alec'
const engineEndpoint = '/alec/engine/configuration'
const endpointAgreement = '/alec/agreement/configuration'
const situationStatusEndpoint = '/alec/situation/statusList'
const situationEndpoint = '/alec/situation'

export const savePermission = async (allowSaveValue: boolean) => {
	try {
		const resp = await rest.post(`${endpointAgreement}`, {
			agreed: allowSaveValue
		})
		return resp.status === 200
	} catch (err) {
		return false
	}
}

export const getUserInfo = async () => {
	try {
		const resp = await rest.get(`${endpointAgreement}`)
		if (resp.status === 200) {
			return resp.data
		}
		return false
	} catch (err) {
		return false
	}
}

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
