import App from './App.vue'
import { createApp } from 'vue'
const envMode = import.meta.env.MODE
import '@featherds/styles'
import '@featherds/styles/themes/open-light.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
window['uiextension'] = App

if (envMode == 'development') {
	createApp(App).mount('#app')
}
