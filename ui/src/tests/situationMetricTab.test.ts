import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SituationMetricTab from '@/components/SituationMetricsTab.vue'
import { createTestingPinia } from '@pinia/testing'
import { situationsMock } from './Mock/situationsMock'
const situation = situationsMock[0]

const wrapper = mount(SituationMetricTab, {
	global: {
		plugins: [createTestingPinia()],
		props: { situation }
	}
} as any) as any

test('Should sort by Severity', async () => {
	wrapper.vm.sortChanged({ id: 2, name: 'Severity' })
	expect(wrapper.vm.relatedAlarms[0].id).toEqual('265')
})

test('Should sort by Duration', async () => {
	wrapper.vm.sortChanged({ id: 3, name: 'Duration' })
	expect(wrapper.vm.relatedAlarms[0].id).toEqual('334')
})

test('Should sort by Creation Date', async () => {
	wrapper.vm.sortChanged({ id: 1, name: 'Creation Time' })
	expect(wrapper.vm.relatedAlarms[0].id).toEqual('335')
})
