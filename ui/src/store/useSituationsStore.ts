import { defineStore } from 'pinia'
import {
	getSituations,
	getAllNodes,
	getAlarmsByIds,
	getAlarmById,
	getEventsByAlarmId,
	getAlarmsUnassigned
} from '@/services/AlarmService'

import { TAlarm, TEvent, TNode, TSituation } from '@/types/TSituation'
import { groupBy, reverse, sortBy } from 'lodash'

type TFilters = {
	node?: Record<string, string>
	severities?: string[]
	timeStart: number
}
type TState = {
	situations: TSituation[]
	selectedSituation: number
	situationDetail: TSituation | null
	nodes: TNode[]
	filteredSituations: number[]
	filters: TFilters | null
	unassignedAlarms: TAlarm[]
}

export const useSituationsStore = defineStore('situationsStore', {
	state: (): TState => ({
		situations: [],
		selectedSituation: -1,
		situationDetail: null,
		filteredSituations: [],
		nodes: [],
		filters: null,
		unassignedAlarms: []
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
			if (result) {
				const situations = result.alarm.map((s: TSituation) => {
					s.status = s.parameters.filter(
						(p) => p.name == 'situationStatus'
					)[0]?.value
					return s
				})
				this.filteredSituations = situations.map((s: TSituation) => s.id)

				const groupByStatus = groupBy(situations, 'status')
				const sitfiltered = situations.filter(
					(s: TSituation) => s.status !== 'REJECTED' || 'ACCEPTED'
				)

				const situationOrdered = [
					...sitfiltered,
					...(groupByStatus['ACCEPTED'] || [])
				]
				this.situations = situationOrdered
			} else {
				this.situations = []
			}
		},
		async getSituation(id: number) {
			if (id) {
				const resultSituation = (await getAlarmById(id)) as TSituation
				if (resultSituation) {
					const alarmIds = resultSituation.relatedAlarms?.map((a) => a.id)
					const resultAlarms = await getAlarmsByIds(alarmIds)
					const alarms = resultAlarms as TAlarm[]

					resultSituation.status = resultSituation.parameters.filter(
						(p) => p.name == 'situationStatus'
					)[0]?.value
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
		},
		async getUnassignedAlarms() {
			const resultAlarms = await getAlarmsUnassigned()
			if (resultAlarms) {
				this.unassignedAlarms = resultAlarms as TAlarm[]
			} else {
				this.unassignedAlarms = []
			}
		}
	}
})
