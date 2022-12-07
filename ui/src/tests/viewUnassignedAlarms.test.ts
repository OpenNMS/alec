import { test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ViewUnassignedAlarms from '@/containers/ViewUnassignedAlarms.vue'
import { createTestingPinia } from '@pinia/testing'
import { alarmsMock } from './Mock/alarms'
import { useSituationsStore } from '@/store/useSituationsStore'
import { useRouter } from 'vue-router'

const wrapper = mount(ViewUnassignedAlarms, {
	global: { plugins: [createTestingPinia()] }
} as any)

test('Should add alarms and remove alarms from selected alarms', async () => {
	const router = useRouter()
	wrapper.vm.alarms = alarmsMock
	wrapper.vm.addAlarm(alarmsMock[0].id)
	wrapper.vm.addAlarm(alarmsMock[1].id)

	expect(wrapper.vm.alarmIds).toContain(alarmsMock[0].id)
	expect(wrapper.vm.alarmIds.length).toEqual(2)

	wrapper.vm.addAlarm(alarmsMock[1].id)
	expect(wrapper.vm.alarmIds.length).toEqual(1)
})
