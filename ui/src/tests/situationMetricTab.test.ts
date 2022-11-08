import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SituationMetricTab from '@/components/SituationMetricsTab.vue'
import { createTestingPinia } from '@pinia/testing'
import { situationsMock } from './Mock/situationsMock'
const situation = situationsMock[0]
const width = 1200
const wrapper = mount(SituationMetricTab, {
	global: {
		plugins: [createTestingPinia()]
	},
	props: { situation, width }
} as any) as any

test('Should sort by Severity', async () => {
	wrapper.vm.sortChanged({ id: 2, name: 'Severity' })
	expect(wrapper.vm.relatedAlarms[0].id).toEqual(605)
})

test('Should sort by Duration', async () => {
	wrapper.vm.sortChanged({ id: 3, name: 'Duration' })
	expect(wrapper.vm.relatedAlarms[0].id).toEqual(607)
})

test('Should sort by Creation Date', async () => {
	wrapper.vm.sortChanged({ id: 1, name: 'Creation Time' })
	expect(wrapper.vm.relatedAlarms[0].id).toEqual(606)
})
