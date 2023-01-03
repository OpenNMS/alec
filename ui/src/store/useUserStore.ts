import { defineStore } from 'pinia'
import { getUserRole } from '@/services/UserService'
import {
	getUserInfo,
	savePermission,
	getEngineInfo,
	saveEngineParameter
} from '@/services/AlecService'
import CONST from '@/helpers/constants'

import { TEngine } from '@/types/TUser'

type TState = {
	isAdmin: boolean
	userId: string | null
	firstTime: boolean
	allowSave: boolean
	engineInfo: TEngine | null
}

const engineDefaultValues = {
	alpha: 144.47117699,
	beta: 0.55257784,
	epsilon: 100
}

export const useUserStore = defineStore('userStore', {
	state: (): TState => ({
		isAdmin: false,
		userId: null,
		firstTime: true,
		allowSave: true,
		engineInfo: null
	}),
	actions: {
		async getUserRole() {
			const result = await getUserRole()
			if (result) {
				this.isAdmin = result.roles.includes('ROLE_ADMIN')
				this.userId = result.id
			}
			return result
		},
		async getAlecInfo() {
			const result = await getUserInfo()
			if (result) {
				this.firstTime = false
				this.allowSave = result.agreed
			}
		},
		async getEngineInfo() {
			const result = await getEngineInfo()
			if (result) {
				this.engineInfo = result
			}
		},
		async setEngineInfo(engine: string, isHellinger: boolean) {
			const engineData: TEngine = {
				...engineDefaultValues,
				...{
					distanceMeasureName: isHellinger
						? CONST.HELLINGER_OPTION
						: CONST.SPACE_DISTANCE_OPTION,
					engineName: engine
				}
			}
			const result = await saveEngineParameter(engineData)
			if (result) {
				this.engineInfo = engineData
				return true
			}
			return false
		},
		async savePermission(allowSaveValue: boolean) {
			const result = await savePermission(allowSaveValue)
			if (result) {
				this.allowSave = allowSaveValue
			}
		}
	}
})
