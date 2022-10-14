import { rest, v2 } from './axiosInstances'
import { pick } from 'lodash'
import { TAlarm, TNode, TSituation } from '@/types/TSituation'
import CONST from '@/helpers/constants'

const situationListEndpoint = '/alarms?_s='

export const sendAcknowledge = async (
	alarmId: number | string,
	isAck: boolean
): Promise<boolean> => {
	try {
		const resp = await rest.put(
			`/alarms/${alarmId}?ack=${isAck}`,
			{
				body: `alarm=${alarmId}`
			},
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}
		)
		if (resp.status === 204) {
			return true
		}
		return false
	} catch (err) {
		return false
	}
}

export const sendAction = async (alarmId: number | string, action: string) => {
	try {
		const resp = await rest.put(
			`/alarms/${alarmId}?${action}=true`,
			{
				body: `alarm=${alarmId}`
			},
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}
		)
		if (resp.status === 204) {
			return true
		}
	} catch (err) {
		return false
	}
}

export const sendClearAlarms = async (ids: number[]) => {
	try {
		/*await Promise.all(
			alarmIds.map(async (id) => {
				await sendAction(id, CONST.CLEAR)
			})
		)
		*/

		const alarmIds = ids.join(',alarm.id==')
		const result = await v2.put(
			`alarms?_s=alarm.id==${alarmIds}&clear=true`,
			null,
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}
		)
		if (result.status == 204) {
			return true
		}
		return false
	} catch (err) {
		return false
	}
}

export const getSituations = async (): Promise<any | false> => {
	try {
		const url = `${situationListEndpoint}isSituation==true&limit=0`
		const resp = await v2(url)
		if (resp.status === 200) {
			return resp.data
		}
		return false
	} catch (err) {
		return false
	}
}

export const getAllAlarms = async (): Promise<TAlarm[] | false> => {
	try {
		const resp = await v2('/alarms?limit=0')
		if (resp.status === 200) {
			return resp.data.alarm
		}
		return false
	} catch (err) {
		return false
	}
}

export const getAlarmsByIds = async (
	ids: number[]
): Promise<TAlarm[] | false> => {
	try {
		const alarmIds = ids.join(',id==')
		const resp = await v2(`/alarms?_s=id==${alarmIds}`)
		if (resp.status === 200) {
			return resp.data.alarm
		}
		return false
	} catch (err) {
		return false
	}
}

export const getAlarmById = async (
	id: number
): Promise<TAlarm | TSituation | false> => {
	try {
		const resp = await v2(`/alarms/${id}`)
		if (resp.status === 200) {
			return resp.data
		}
		return false
	} catch (err) {
		return false
	}
}

export const getAllNodes = async (): Promise<TNode[] | false> => {
	try {
		const resp = await v2('nodes?limit=0')
		if (resp.status === 200) {
			const resultNodes = resp.data.node
			const nodes = resultNodes.map((rn: any) => pick(rn, ['id', 'label']))
			return nodes
		}
		return false
	} catch (err) {
		return false
	}
}
