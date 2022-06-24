import { defineStore } from 'pinia'
import { getSituations } from '@/services/AlarmService'
import { TSituation } from '@/types/TSituation'

type TState = {
	situations: TSituation[]
}

export const useSituationsStore = defineStore('situationsStore', {
	state: (): TState => ({
		situations: []
	}),
	actions: {
		async getSituations() {
			const result = await getSituations()
			if (result) {
				this.situations = processAlarmList(result.alarm)
			}
		}
	}
})

const processAlarmList = (alarms: TSituation[]) => {
	return alarms.filter((a) => a.relatedAlarms && a.relatedAlarms.length > 0)
}
