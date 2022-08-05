import { defineStore } from 'pinia'
import { getSituations } from '@/services/AlarmService'
import { getSituationsStatus } from '@/services/AlecService'
import { TRelatedAlarm, TSituation, TSituationSaved } from '@/types/TSituation'
import { Dictionary, mapKeys, first } from 'lodash'

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
			const statusList = await getSituationsStatus()
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
					if (statusList.find((st: TSituationSaved) => st.id == sit.id)) {
						const situationSaved: TSituationSaved | undefined = first(
							statusList.filter((st: TSituationSaved) => st.id == sit.id)
						)
						sit.status = situationSaved?.status
					}
				})
				this.situations = situations.filter((s) => s.status !== 'REJECTED')
			}
		}
	}
})
