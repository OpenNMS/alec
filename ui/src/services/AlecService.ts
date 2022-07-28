import { rest } from './axiosInstances'
import CONST from '@/helpers/constants'
const engineEndpoint = '/alec/engine/configuration'
const endpoint = '/alec/agreement/configuration'

export const savePermission = async (allowSaveValue: boolean) => {
	try {
		const resp = await rest.post(`${endpoint}`, {
			agreed: allowSaveValue
		})
		if (resp.status === 201) {
			return true
		}
		return false
	} catch (err) {
		return false
	}
}

export const getUserInfo = async () => {
	try {
		const resp = await rest.get(`${endpoint}`)
		if (resp.status === 200) {
			return resp.data
		}
		return false
	} catch (err) {
		return false
	}
}

export const saveEngineParameter = async (
	engineName: string,
	hellinger: boolean
) => {
	try {
		/**
		 * @TODO move default values to backend
		 **/
		const resp = await rest.post(engineEndpoint, {
			distanceMeasureName: hellinger
				? CONST.HELLINGER_OPTION
				: CONST.SPACE_DISTANCE_OPTION,
			engineName,
			alpha: 144.47117699,
			beta: 0.55257784,
			epsilon: 100
		})
		if (resp.status === 200) {
			return true
		}
		return false
	} catch (err) {
		return false
	}
}
