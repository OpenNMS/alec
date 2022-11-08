import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
const envMode = import.meta.env.MODE
import '@featherds/styles'
import '@featherds/styles/themes/open-light.css'
import { createPinia } from 'pinia'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
window['alecextension'] = App

if (envMode == 'development') {
	createApp(App).use(router).use(createPinia()).mount('#app')
}
