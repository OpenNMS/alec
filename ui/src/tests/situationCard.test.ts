import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SituationCard from '@/components/SituationCard.vue'
import { createTestingPinia } from '@pinia/testing'
import { alarmInfo } from './Mock/alarmInfo'

test('Should emit situation Id on click', async () => {
	const wrapper = mount(SituationCard, {
		global: { plugins: [createTestingPinia()] },
		props: { alarmInfo }
	} as any)
	const card = wrapper.find('.card')
	await card.trigger('click')
	expect(wrapper.emitted()['situation-selected'][0]).toEqual([36])
})
