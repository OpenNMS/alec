import { test, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ViewUnassignedAlarms from '@/containers/ViewUnassignedAlarms.vue'
import { createTestingPinia } from '@pinia/testing'
import { alarmsMock } from './Mock/alarms'
import { useSituationsStore } from '@/store/useSituationsStore'

let wrapper: any = null
beforeEach(() => {
	wrapper = mount(ViewUnassignedAlarms, {
		global: { plugins: [createTestingPinia()] }
	} as any)
})

test('Should add alarms and remove alarms from selected alarms', async () => {
	wrapper.vm.alarms = alarmsMock
	wrapper.vm.addAlarm(alarmsMock[0].id)
	wrapper.vm.addAlarm(alarmsMock[1].id)

	expect(wrapper.vm.alarmIds).toContain(alarmsMock[0].id)
	expect(wrapper.vm.alarmIds.length).toEqual(2)

	wrapper.vm.addAlarm(alarmsMock[1].id)
	expect(wrapper.vm.alarmIds.length).toEqual(1)
})

test('Should update list of alarms by filters', async () => {
	wrapper.vm.alarms = alarmsMock
	const store = useSituationsStore()
	store.unassignedAlarms = alarmsMock as any
	expect(wrapper.vm.alarms.length).toEqual(8)

	wrapper.vm.updateListSeverities(['MAJOR'])
	expect(wrapper.vm.alarms.length).toEqual(6)

	wrapper.vm.updateListNodes(['NYC-Cisco-ASR9000-Edge-Router'])
	expect(wrapper.vm.alarms.length).toEqual(2)
})
