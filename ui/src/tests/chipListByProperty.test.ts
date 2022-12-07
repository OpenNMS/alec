import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChipListByProperty from '@/components/ChipListByProperty.vue'
import { createTestingPinia } from '@pinia/testing'
import { situationsMock } from './Mock/situationsMock'

test('Should remove "all" and add severities', async () => {
	const situation = situationsMock[0]
	const wrapper = mount(ChipListByProperty, {
		global: { plugins: [createTestingPinia()] },
		props: {
			alarms: situation.relatedAlarms,
			property: 'severity'
		}
	} as any)
	expect(wrapper.vm.selectedFilters).toEqual(['all'])
	wrapper.vm.handleAlarmFilters('MAYOR')
	expect(wrapper.vm.selectedFilters).toEqual(['MAYOR'])
	wrapper.vm.handleAlarmFilters('MINOR')
	expect(wrapper.vm.selectedFilters).toContain('MINOR')
})

test('Should remove severities and replace by "all"', async () => {
	const situation = situationsMock[0]
	const wrapper = mount(ChipListByProperty, {
		global: { plugins: [createTestingPinia()] },
		props: {
			alarms: situation.relatedAlarms,
			property: 'severity'
		}
	} as any)
	wrapper.vm.handleAlarmFilters('MAYOR')
	wrapper.vm.handleAlarmFilters('MINOR')
	expect(wrapper.vm.selectedFilters).toEqual(['MAYOR', 'MINOR'])
	wrapper.vm.handleAlarmFilters('all')
	expect(wrapper.vm.selectedFilters).toEqual(['all'])
})
