import { createRouter, createWebHistory } from 'vue-router'
import SituationList from '@/containers/SituationList.vue'
import WelcomePage from '@/components/WelcomePage.vue'
import ConfigurationPage from '@/components/ConfigurationPage.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'welcome',
			component: WelcomePage
		},
		{
			path: '/setup',
			name: 'configuration',
			component: ConfigurationPage
		},
		{
			path: '/situations',
			name: 'situations',
			component: SituationList
		}
	]
})

export default router
