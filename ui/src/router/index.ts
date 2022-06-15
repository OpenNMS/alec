import { createRouter, createWebHistory } from 'vue-router'
import SituationList from '@/containers/SituationList.vue'
import WelcomePage from '@/components/WelcomePage.vue'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'welcome',
			component: WelcomePage
		},
		{
			path: '/situations',
			name: 'situations',
			component: SituationList
		}
	]
})

export default router
