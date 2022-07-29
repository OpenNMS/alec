import { defineStore } from 'pinia'
import { getSituations } from '@/services/AlarmService'
import { TAlarm, TRelatedAlarm, TSituation } from '@/types/TSituation'
import { mapKeys } from 'lodash'

type TState = {
	situations: TSituation[]
	alarms: Record<string, TAlarm>
}

export const useSituationsStore = defineStore('situationsStore', {
	state: (): TState => ({
		situations: [],
		alarms: {}
	}),
	actions: {
		async getSituations() {
			const result = await getSituations()
			if (result) {
				this.alarms = mapKeys(result.alarm, (value) => {
					return value.id
				})
				const situations = result.alarm.filter(
					(a) => a.relatedAlarms && a.relatedAlarms.length > 0
				)
				situations.forEach((sit) => {
					sit.relatedAlarms.forEach((alarm: TRelatedAlarm) => {
						alarm.count = this.alarms[alarm.id]?.count
					})
				})
				this.situations = situations
			}
		}
	}
})
