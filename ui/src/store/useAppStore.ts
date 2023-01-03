import { defineStore } from 'pinia'

type TState = {
	showError: boolean
	errorMessage: string
}

export const useAppStore = defineStore('appStore', {
	state: (): TState => ({
		showError: false,
		errorMessage: ''
	}),
	actions: {
		showErrorMsg(message: string) {
			this.showError = true
			this.errorMessage = message
			setTimeout(() => {
				this.showError = false
				this.errorMessage = ''
			}, 1800)
		}
	}
})
