import { defineStore } from 'pinia'
import {
	getAllAlarms,
	getSituations,
	getAllNodes
} from '@/services/AlarmService'
import { getSituationsStatus } from '@/services/AlecService'

import { TAlarm, TNode, TSituation, TSituationSaved } from '@/types/TSituation'
import { groupBy, mapKeys } from 'lodash'

type TState = {
	situations: TSituation[]
	totalSituations: number
	nodes: TNode[]
}

export const useSituationsStore = defineStore('situationsStore', {
	state: (): TState => ({
		situations: [],
		totalSituations: 0,
		nodes: []
	}),
	actions: {
		async getNodes() {
			this.nodes = []
			const result = await getAllNodes()
			if (result) {
				this.nodes = result
			}
		},
		async getSituations() {
			this.situations = []
			const result = await getSituations()
			const resultAlarms = await getAllAlarms()
			let allAlarms: Record<number, TAlarm> = []
			if (resultAlarms) {
				allAlarms = mapKeys(resultAlarms, (a) => a.id)
			}

			const resultStatus = await getSituationsStatus()
			this.totalSituations = result.totalCount
			if (result) {
				const situations = result.alarm.map((s: TSituation) => {
					const alarms = s.relatedAlarms.map((a: TAlarm) => allAlarms[a.id])
					const sitStatus = resultStatus.filter(
						(rs: TSituationSaved) => rs.id == s.id
					)
					s.alarms = alarms
					s.status = sitStatus ? sitStatus[0].status : 'CREATED'
					return s
				})

				const groupByStatus = groupBy(situations, 'status')

				const situationOrdered = [
					...(groupByStatus['CREATED'] || []),
					...(groupByStatus['ACCEPTED'] || []),
					...(groupByStatus['REJECTED'] || [])
				]
				this.situations = situationOrdered
			}
		}
	}
})
