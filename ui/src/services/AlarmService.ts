import { v2 } from './axiosInstances'
import { TAlarm, TNode } from '@/types/TSituation'
import { pick } from 'lodash'
const situationListEndpoint = '/alarms?_s='

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
