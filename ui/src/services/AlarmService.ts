import { rest, v2 } from './axiosInstances'
import { pick } from 'lodash'
import { TAlarm, TEvent, TNode, TSituation } from '@/types/TSituation'

const situationListEndpoint = '/alarms?_s='
const urlencodedHeaders = {
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}
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
			urlencodedHeaders
		)
		return resp.status === 204
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
			urlencodedHeaders
		)
		return resp.status === 204
	} catch (err) {
		return false
	}
}

export const sendActionMultiplyAlarms = async (
	ids: number[],
	action: string
) => {
	try {
		const alarmIds = ids.join(',alarm.id==')
		const result = await v2.put(
			`alarms?_s=alarm.id==${alarmIds}&${action}=true`,
			null,
			urlencodedHeaders
		)
		return result.status == 204
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
): Promise<TAlarm | TSituation | null> => {
	try {
		const resp = await v2(`/alarms/${id}`)
		if (resp.status === 200) {
			return resp.data
		}
		return null
	} catch (err) {
		return null
	}
}

export const getEventsByAlarmId = async (
	id: number
): Promise<TEvent[] | null> => {
	try {
		const resp = await v2(`/events?_s=alarm.id==${id}`)
		if (resp.status === 200) {
			return resp.data.event
		}
		return null
	} catch (err) {
		return null
	}
}

export const getAllNodes = async (): Promise<TNode[] | false> => {
	try {
		const resp = await v2('/nodes?limit=0')
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

export const saveMemo = async (
	alarmId: number,
	type: string,
	memoText: string
) => {
	try {
		const result = await v2.put(
			`/alarms/${alarmId}/${type}`,
			`body=${memoText}`,
			urlencodedHeaders
		)
		return result.status == 204
	} catch (err) {
		return false
	}
}

export const deleteMemo = async (alarmId: number, type: string) => {
	try {
		const result = await v2.delete(`/alarms/${alarmId}/${type}`)
		return result.status == 204
	} catch (err) {
		return false
	}
}

export const getAlarmsUnassigned = async (): Promise<TAlarm[] | false> => {
	try {
		const resp = await v2.get(
			'alarms?_s=isInSituation==false;isSituation==false'
		)
		if (resp.status === 200) {
			return resp.data.alarm
		}
		return false
	} catch (err) {
		return false
	}
}
