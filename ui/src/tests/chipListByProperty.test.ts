import { test, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ChipListByProperty from '@/components/ChipListByProperty.vue'
import { createTestingPinia } from '@pinia/testing'
import { situationsMock } from './Mock/situationsMock'
let wrapper: any = null
const situation = situationsMock[0]

beforeEach(() => {
	wrapper = mount(ChipListByProperty, {
		global: { plugins: [createTestingPinia()] },
		props: {
			alarms: situation.relatedAlarms,
			property: 'severity'
		}
	} as any) as any
})

test('Should remove "all" and add severities', async () => {
	expect(wrapper.vm.selectedFilters).toEqual(['all'])
	wrapper.vm.handleAlarmFilters('MAYOR')
	expect(wrapper.vm.selectedFilters).toEqual(['MAYOR'])
	wrapper.vm.handleAlarmFilters('MINOR')
	expect(wrapper.vm.selectedFilters).toContain('MINOR')
})

test('Should remove severities and replace by "all"', async () => {
	wrapper.vm.handleAlarmFilters('MAYOR')
	wrapper.vm.handleAlarmFilters('MINOR')
	expect(wrapper.vm.selectedFilters).toEqual(['MAYOR', 'MINOR'])
	wrapper.vm.handleAlarmFilters('all')
	expect(wrapper.vm.selectedFilters).toEqual(['all'])
})
