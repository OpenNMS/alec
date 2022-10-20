import { defineStore } from 'pinia'

type TState = {
	showError: boolean
}

export const useAppStore = defineStore('appStore', {
	state: (): TState => ({
		showError: false
	}),
	actions: {
		showErrorMsg() {
			this.showError = true
			setTimeout(() => {
				this.showError = false
			}, 1800)
		}
	}
})
