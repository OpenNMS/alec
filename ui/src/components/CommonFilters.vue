<script setup lang="ts">
import ChipListByProperty from '@/components/ChipListByProperty.vue'
import { TAlarm, TSituation } from '@/types/TSituation'
import { FeatherAutocomplete } from '@featherds/autocomplete'
import { useSituationsStore } from '@/store/useSituationsStore'
import type { Ref } from 'vue'
import { ref, reactive } from 'vue'
import FilterByDate from '@/components/FilterByDate.vue'
import { filterListByDate } from '@/helpers/utils'

type TState = {
	nodes: Record<string, string | number>[]
	results: Record<string, string | number>[]
	nodeSelectedValue: Record<string, string> | undefined
}

const props = defineProps<{
	list: TAlarm[]
	isSituation?: boolean
}>()
const emit = defineEmits(['filtered-list', 'filters-count'])
const situationStore = useSituationsStore()

const severityFilters = ref(['all'])
const selectedTimePeriod = ref(1)
const list = ref(props.list) as Ref<(TSituation | TAlarm)[]>
const loading = ref(false)
const filtersCount = ref(0)

const state: TState = reactive({
	nodes: situationStore.nodes,
	results: situationStore.nodes,
	nodeSelectedValue: undefined
})

const updateListSeverities = (severities: string[]) => {
	severityFilters.value = severities
	filterByNode()
}

const timePeriodChanged = (value) => {
	selectedTimePeriod.value = value
	filterByNode()
}

const search = (q: string) => {
	if (!q) {
		state.nodeSelectedValue = undefined
		return []
	}
	loading.value = true
	state.results = state.nodes
		.filter((x: any) => x.label.toLowerCase().indexOf(q) > -1)
		.map((x) => ({
			_text: x.label,
			id: x.id
		}))
	loading.value = false
}

const filterByNode = () => {
	let filtered = props.list as (TSituation | TAlarm)[]
	filtersCount.value = 0
	if (state.nodeSelectedValue && state.nodeSelectedValue._text) {
		filtersCount.value++
		if (props.isSituation) {
			filtered = filtered
				.map((s) => {
					const situation = s as TSituation
					const alarms = situation.relatedAlarms.filter(
						(a: TAlarm) => a.nodeLabel === state.nodeSelectedValue?._text
					)
					if (alarms.length > 0) {
						return s
					}
				})
				.filter((s) => s) as TSituation[]
		} else {
			filtered = filtered.filter(
				(s) => s.nodeLabel === state.nodeSelectedValue?._text
			)
		}
	}
	if (!severityFilters.value.includes('all')) {
		filtersCount.value++

		filtered = filtered.filter((a) =>
			severityFilters.value.includes(a.severity)
		)
	}
	//filter by date
	if (selectedTimePeriod.value !== 1) {
		filtersCount.value++

		filtered = filterListByDate(
			selectedTimePeriod.value,
			filtered
		) as TSituation[]
	}
	list.value = filtered

	emit('filtered-list', filtered)
	emit('filters-count', filtersCount.value)
}
</script>

<template>
	<div>
		<FeatherAutocomplete
			label="Find by node"
			:loading="loading"
			v-model="state.nodeSelectedValue"
			:results="state.results"
			type="single"
			@search="search"
			@update:modelValue="filterByNode"
		>
		</FeatherAutocomplete>
		<div class="title">By Severities:</div>
		<ChipListByProperty
			:alarms="props.list"
			@selected-option="updateListSeverities"
			property="severity"
			:pre-selected="severityFilters"
		/>
		<div>
			<div class="title">By Start Date:</div>
			<FilterByDate
				@filter-date-selected="timePeriodChanged"
				:pre-selected="selectedTimePeriod"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.title {
	margin-top: 20px;
	font-weight: 600;
}
</style>
