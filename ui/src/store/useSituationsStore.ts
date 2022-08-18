import { defineStore } from 'pinia'
import { getAlarms, getSituations } from '@/services/AlarmService'
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
			const situationResult = await getSituations()
			const alarmResult = await getAlarms()

			const statusList = await getSituationsStatus()
			if (situationResult && alarmResult) {
				const situations = situationResult.alarm
				const alarms = alarmResult.alarm

				this.alarms = mapKeys(alarms, (value) => {
					return value.id
				})
				situations.forEach((sit) => {
					sit.relatedAlarms.forEach((alarm: TRelatedAlarm) => {
						alarm.count = this.alarms[alarm.id]?.count
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
