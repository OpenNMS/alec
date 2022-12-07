import { defineStore } from 'pinia'
import { getUserRole } from '@/services/UserService'
import {
	getUserInfo,
	savePermission,
	getEngineInfo
} from '@/services/AlecService'
import { TEngine } from '@/types/TUser'

type TState = {
	isAdmin: boolean
	userId: string | null
	firstTime: boolean
	allowSave: boolean
	engineInfo: TEngine | null
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
		async savePermission(allowSaveValue: boolean) {
			const result = await savePermission(allowSaveValue)
			if (result) {
				this.allowSave = allowSaveValue
			}
		}
	}
})
