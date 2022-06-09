import App from './App.vue'
import { createApp } from 'vue'
const envMode = import.meta.env.MODE

//@ts-ignore
window['uiextension'] = App

if (envMode == 'development') {
	createApp(App).mount('#app')
}
