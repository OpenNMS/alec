import { ApiResponse } from '@/types/TSituation'
import { v2 } from './axiosInstances'

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

export const getAlarms = async (): Promise<ApiResponse | false> => {
	try {
		const resp = await v2.get(alarmsEndpoint)
		if (resp.status === 204) {
			return { alarm: [], totalCount: 0, count: 0, offset: 0 }
		}
		return resp.data
	} catch (err) {
		return false
	}
}
