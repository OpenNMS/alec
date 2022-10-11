import { rest, v2 } from './axiosInstances'
import { pick } from 'lodash'
import { TAlarm, TNode } from '@/types/TSituation'
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
