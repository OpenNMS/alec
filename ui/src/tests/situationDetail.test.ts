import { test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SituationDetailTab from '@/components/SituationDetailTab.vue'
import { createTestingPinia } from '@pinia/testing'
import { situationsMock } from './Mock/situationsMock'
import { useSituationsStore } from '@/store/useSituationsStore'

const situation = situationsMock[0]

vi.mock('@/services/AlecService', () => {
	return {
		sendFeedbackAcceptSituation: async () => true
	}
})

const wrapper = mount(SituationDetailTab, {
	global: {
		plugins: [createTestingPinia()]
	},
	props: { situationInfo: situation }
} as any) as any

test('Should change situation status on click', async () => {
	const store = useSituationsStore()
	const btnAccept = wrapper.find('[data-test="btn-reject"]')
	await btnAccept.trigger('click')
	expect(wrapper.vm.status).toEqual('REJECTED')
	expect(store.getSituation).toBeCalled()
})
