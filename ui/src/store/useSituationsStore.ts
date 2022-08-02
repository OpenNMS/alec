import { defineStore } from 'pinia'
import { getSituations } from '@/services/AlarmService'
import { TRelatedAlarm, TSituation } from '@/types/TSituation'
import { Dictionary, mapKeys } from 'lodash'

type TState = {
	situations: TSituation[]
	alarms: Dictionary<TSituation>
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
						alarm.firstEventTime = this.alarms[alarm.id]?.firstEventTime
						alarm.lastEventTime = this.alarms[alarm.id]?.lastEventTime
					})
				})
				this.situations = situations
			}
		}
	}
})
