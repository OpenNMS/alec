import { createRouter, createWebHistory, Router } from 'vue-router'
import SituationList from '@/containers/SituationList.vue'
import WelcomePage from '@/components/WelcomePage.vue'
import ConfigurationPage from '@/components/ConfigurationPage.vue'

const routes = [
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

const VRouter: Router = (window as any).VRouter
if ((VRouter)) {
	for (const route of routes) {
		const { path, name, component } = route
		VRouter.addRoute('Plugin', { path: path.slice(1), name, component })
	}
}

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
