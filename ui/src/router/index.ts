import { createRouter, createWebHistory, Router } from 'vue-router'
import SituationList from '@/containers/SituationList.vue'
import WelcomePage from '@/components/WelcomePage.vue'
import ConfigurationPage from '@/components/ConfigurationPage.vue'
import { useUserStore } from '@/store/useUserStore'

const checkUser = async () => {
	const r = (window as any).VRouter || router
	const userStore = useUserStore()
	if (!userStore.userId) {
		await userStore.getUserRole()
		await userStore.getAlecInfo()
		r.push({ name: 'home' })
	}
}

const routes = [
	{
		path: '/',
		name: 'home',
		beforeEnter: async (to: any) => {
			const r = (window as any).VRouter || router
			const userStore = useUserStore()
			await userStore.getUserRole()
			await userStore.getAlecInfo()
			if (userStore.firstTime) {
				r.push({ name: 'welcome', params: to.params })
			} else {
				r.push({ name: 'situations', params: to.params })
			}
		},
		component: {}
	},
	{
		path: '/welcome',
		name: 'welcome',
		beforeEnter: () => checkUser(),
		component: WelcomePage
	},
	{
		path: '/setup',
		name: 'configuration',
		beforeEnter: () => checkUser(),
		component: ConfigurationPage
	},
	{
		path: '/situations',
		name: 'situations',
		beforeEnter: () => checkUser(),
		component: SituationList
	}
]

const VRouter: Router = (window as any).VRouter

if (VRouter) {
	for (const route of routes) {
		const { path, name, component, beforeEnter } = route
		VRouter.addRoute('Plugin', {
			path: path.slice(1),
			name,
			component,
			beforeEnter
		})
	}
}

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
