import { createRouter, createWebHistory, Router } from 'vue-router'
import SituationList from '@/containers/SituationList.vue'
import SituationDetail from '@/containers/SituationDetail.vue'
import AddSituation from '@/containers/AddSituation.vue'

import WelcomePage from '@/components/WelcomePage.vue'
import ErrorPage from '@/components/ErrorPage.vue'

import ConfigurationPage from '@/components/ConfigurationPage.vue'
import { useUserStore } from '@/store/useUserStore'

const checkUser = async () => {
	const r = (window as any).VRouter || router
	const userStore = useUserStore()
	if (!userStore.userId) {
		const resultRole = await userStore.getUserRole()
		await userStore.getAlecInfo()
		if (resultRole) {
			r.push({ name: 'home' })
		} else {
			r.push({ name: 'error' })
		}
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
	},
	{
		path: '/situations/:id',
		name: 'situationDetail',
		component: SituationDetail
	},
	{
		path: '/situations/add',
		name: 'addSituation',
		component: AddSituation
	},
	{
		path: '/error',
		name: 'error',
		component: ErrorPage
	}
]

const VRouter: Router = (window as any).VRouter

if (VRouter) {
	// Parent route should be in form 'Plugin-{extensionId}'
	// and 'extensionId' must match 'id' value in blueprint.xml
	const alecParentRoute = 'Plugin-alecUiExtension'
	const parentRoute = VRouter.hasRoute(alecParentRoute) ? alecParentRoute : 'Plugin'

	for (const route of routes) {
		const { path, name, component, beforeEnter } = route
		VRouter.addRoute(parentRoute, {
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
