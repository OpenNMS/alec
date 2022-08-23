import { ApiResponse, TSituation } from '@/types/TSituation'
import { v2 } from './axiosInstances'
import { flattenDeep } from 'lodash'
const alarmsEndpoint = '/alarms'
const situationEndpoint = '/alarms?_s=isSituation==true'

export const getSituations = async (): Promise<ApiResponse | false> => {
	try {
		const resp = await v2.get(situationEndpoint)
		if (resp.status === 204) {
			return { alarm: [], totalCount: 0, count: 0, offset: 0 }
		}
		return resp.data
	} catch (err) {
		return false
	}
}

export const getAlarms = async (): Promise<TSituation[] | false> => {
	try {
		const resultTotal = await v2.get(`${alarmsEndpoint}/count`)
		const total = resultTotal.data
		const promises = []
		//will be replaced by new endpoint
		for (let i = 0; i < total; i += 10) {
			const result = await v2.get(`${alarmsEndpoint}?offset=${i}`)
			promises.push(result)
		}
		const results = await Promise.all(promises)
		const actualDatas = results.map((result) => result.data.alarm)
		return flattenDeep(actualDatas)
	} catch (err) {
		return false
	}
}
