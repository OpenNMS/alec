import { defineStore } from 'pinia'
import {
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
import { groupBy, reverse, sortBy } from 'lodash'

type TFilters = {
	node: Record<string, string> | undefined
	severities: string[]
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
			this.situations = []
			const result = await getSituations()

			const resultStatus = await getSituationsStatus()
			if (result) {
				const situations = result.alarm.map((s: TSituation) => {
					const sitStatus = resultStatus.filter(
						(rs: TSituationSaved) => parseInt(rs.id) === s.id
					)
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
			if (id) {
				const resultSituation = (await getAlarmById(id)) as TSituation
				if (resultSituation) {
					const alarmIds = resultSituation.relatedAlarms.map((a) => a.id)
					const resultAlarms = await getAlarmsByIds(alarmIds)
					const alarms = resultAlarms as TAlarm[]
					resultSituation.alarms = sortBy(alarms, ['id'])
					this.situationDetail = resultSituation
				}
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
			if (this.situationDetail) {
				this.situationDetail.events = eventsById
			}
		}
	}
})
