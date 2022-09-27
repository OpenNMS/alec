import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SituationDetailTab from '@/components/SituationDetailTab.vue'
import { createTestingPinia } from '@pinia/testing'
import { situationsMock } from './Mock/situationsMock'
const situation = situationsMock[0]

const wrapper = mount(SituationDetailTab, {
	global: {
		plugins: [createTestingPinia()]
	},
	props: { situationInfo: situation }
} as any) as any

test('Should emit status and situation Id on click', async () => {
	const btnAccept = wrapper.find('[data-test="btn-accept"]')
	await btnAccept.trigger('click')
	expect(wrapper.emitted()['situation-status-changed'][0]).toEqual([
		'ACCEPTED',
		situation.id
	])
})

test('Should change situation status on click', async () => {
	const btnAccept = wrapper.find('[data-test="btn-accept"]')
	await btnAccept.trigger('click')
	expect(wrapper.vm.status).toEqual('ACCEPTED')
})
