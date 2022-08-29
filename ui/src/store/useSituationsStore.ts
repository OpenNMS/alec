import { defineStore } from 'pinia'
import { getSituations } from '@/services/AlecService'
import { TSituation } from '@/types/TSituation'
import { groupBy } from 'lodash'

type TState = {
	situations: TSituation[]
}

export const useSituationsStore = defineStore('situationsStore', {
	state: (): TState => ({
		situations: []
	}),
	actions: {
		async getSituations() {
			this.situations = []
			const situations = await getSituations()
			if (situations) {
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
