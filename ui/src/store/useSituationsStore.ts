import { defineStore } from 'pinia'
import {
	getAllAlarms,
	getSituations,
	getAllNodes,
	getAlarmsByIds,
	getAlarmById,
	getEventsByAlarmId
} from '@/services/AlarmService'
import { getSituationsStatus } from '@/services/AlecService'

import {
	TAlarm,
	TEvent,
	TNode,
	TSituation,
	TSituationSaved
} from '@/types/TSituation'
import { groupBy, mapKeys, cloneDeep, reverse, sortBy } from 'lodash'

type TFilters = {
	node: Record<string, string>
}
type TState = {
	situations: TSituation[]
	selectedSituation: number
	situationDetail: TSituation | null
	nodes: TNode[]
	filteredSituations: number[]
	filters: TFilters | null
}

export const useSituationsStore = defineStore('situationsStore', {
	state: (): TState => ({
		situations: [],
		selectedSituation: -1,
		situationDetail: null,
		filteredSituations: [],
		nodes: [],
		filters: null
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
			console.log('-----get situations-----')
			this.situations = []
			const result = await getSituations()
			//const resultAlarms = await getAllAlarms()
			//let allAlarms: Record<number, TAlarm> = []
			//if (resultAlarms) {
			//	allAlarms = mapKeys(resultAlarms, (a) => a.id)
			//}

			const resultStatus = await getSituationsStatus()
			if (result) {
				const situations = result.alarm.map((s: TSituation) => {
					//const alarms = s.relatedAlarms.map((a: TAlarm) => allAlarms[a.id])
					const sitStatus = resultStatus.filter(
						(rs: TSituationSaved) => parseInt(rs.id) === s.id
					)
					s.alarms = s.relatedAlarms //sortBy(alarms, ['id'])
					s.status = sitStatus && sitStatus[0] ? sitStatus[0].status : 'CREATED'
					return s
				})
				this.filteredSituations = situations.map((s: TSituation) => s.id)

				const groupByStatus = groupBy(situations, 'status')
				const situationOrdered = [
					...(groupByStatus['CREATED'] || []),
					...(groupByStatus['ACCEPTED'] || []),
					...(groupByStatus['REJECTED'] || [])
				]
				this.situations = situationOrdered
			}
		},
		async getSituation(id: number) {
			console.log('-----get Situation-----')

			const resultSituation = (await getAlarmById(id)) as TSituation
			if (resultSituation) {
				const alarmIds = resultSituation.relatedAlarms.map((a) => a.id)
				const resultAlarms = await getAlarmsByIds(alarmIds)
				const alarms = resultAlarms as TAlarm[]
				resultSituation.alarms = sortBy(alarms, ['id'])
				//const situations = cloneDeep(this.situations)
				//const index = this.situations.findIndex((s) => s.id == id)
				//situations[index] = resultSituation
				this.situationDetail = resultSituation
				//this.situations = situations
			}
		},
		async getEvents(situationId: number, alarmIds: number[]) {
			const eventsById = {} as Record<number, TEvent[]>
			await Promise.all(
				alarmIds.map(async (id: number) => {
					const events = await getEventsByAlarmId(id)
					if (events) {
						eventsById[id] = reverse(events)
					}
				})
			)
			const index = this.situations.findIndex((s) => s.id == situationId)
			//this.situations[index].events = eventsById
			if (this.situationDetail) {
				this.situationDetail.events = eventsById
			}
		}
	}
})
