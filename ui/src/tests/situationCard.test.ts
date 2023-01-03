import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SituationCard from '@/components/SituationCard.vue'
import { createTestingPinia } from '@pinia/testing'
import { situationsMock } from './Mock/situationsMock'

test('Should emit situation Id on click', async () => {
	const situation = situationsMock[0]
	const wrapper = mount(SituationCard, {
		global: { plugins: [createTestingPinia()] },
		props: { situationInfo: situation, selected: true }
	} as any) as any
	const card = wrapper.find('.card')
	await card.trigger('click')
	expect(wrapper.emitted()['situation-selected'][0]).toEqual([situation.id])
})
