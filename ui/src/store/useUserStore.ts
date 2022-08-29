import { defineStore } from 'pinia'
import { getUserRole } from '@/services/UserService'
import { getUserInfo, savePermission } from '@/services/AlecService'

type TState = {
	isAdmin: boolean
	userId: string | null
	firstTime: boolean
	allowSave: boolean
}

export const useUserStore = defineStore('userStore', {
	state: (): TState => ({
		isAdmin: false,
		userId: null,
		firstTime: true,
		allowSave: true
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
		async savePermission(allowSaveValue: boolean) {
			this.allowSave = allowSaveValue
			if (!allowSaveValue) {
				//for true option will be saved on configuration page
				const result = await savePermission(allowSaveValue)
				this.allowSave = result
			}
		}
	}
})
