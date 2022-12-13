<script setup lang="ts">
import ChipListByProperty from '@/components/ChipListByProperty.vue'
import { TAlarm, TSituation } from '@/types/TSituation'
import { FeatherAutocomplete } from '@featherds/autocomplete'
import { useSituationsStore } from '@/store/useSituationsStore'
import type { Ref } from 'vue'
import { ref, reactive, markRaw, watch, onMounted } from 'vue'
import FilterByDate from '@/components/FilterByDate.vue'
import { filterListByDate } from '@/helpers/utils'
import { FeatherButton } from '@featherds/button'
import { FeatherIcon } from '@featherds/icon'
import FilterAlt from '@featherds/icon/action/FilterAlt'
import ExpandLess from '@featherds/icon/navigation/ExpandLess'
import ExpandMore from '@featherds/icon/navigation/ExpandMore'
import Refresh from '@featherds/icon/navigation/Refresh'

const Icons = markRaw({
	FilterAlt,
	ExpandLess,
	ExpandMore,
	Refresh
})
type TState = {
	nodes: Record<string, string | number>[]
	results: Record<string, string | number>[]
	nodeSelectedValue: Record<string, string> | undefined
}

const props = defineProps<{
	list: (TAlarm | TSituation)[]
	isSituation?: boolean // for situation it checks related alarms nodeLabel
	isOpen?: boolean //for drawers is closed with button
	saveFilters?: boolean // for situation list needs to save filters in store
}>()

const emit = defineEmits(['filtered-list'])

const situationStore = useSituationsStore()
const showFilters = ref(props.isOpen)

const severityFilters = ref(['all'])
const selectedTimePeriod = ref(1)
const list = ref(props.list) as Ref<(TSituation | TAlarm)[]>
const loading = ref(false)
const filtersCount = ref(0)
const autocomplete = ref(null)
const state: TState = reactive({
	nodes: situationStore.nodes,
	results: situationStore.nodes,
	nodeSelectedValue: undefined
})

const applyStoreFilters = () => {
	if (props.saveFilters) {
		if (situationStore.filters) {
			if (situationStore.filters.node) {
				state.nodeSelectedValue = situationStore.filters.node
			}

			if (!situationStore.filters.severities.includes('all')) {
				severityFilters.value = situationStore.filters.severities
			}
			selectedTimePeriod.value = situationStore.filters.timeStart

			situationStore.filters = null
			updateList()
		}
	}
}

const setNodes = () => {
	state.nodes = situationStore.nodes
	state.results = situationStore.nodes
}

watch(
	() => situationStore.nodes,
	() => {
		setNodes()
	}
)

watch(props, () => {
	list.value = props.list
	applyStoreFilters()
})

const updateListSeverities = (severities: string[]) => {
	severityFilters.value = severities
	updateList()
}

const timePeriodChanged = (value) => {
	selectedTimePeriod.value = value
	updateList()
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

const resetFilters = () => {
	severityFilters.value = ['all']
	selectedTimePeriod.value = 1
	state.nodeSelectedValue = undefined
	filtersCount.value = 0
	emit('filtered-list', props.list)
	if (!props.isOpen) {
		showFilters.value = false
	}
	if (props.saveFilters) {
		situationStore.filters = null
	}
	list.value = props.list
}

const updateList = () => {
	filtersCount.value = 0
	let filtered = props.list as (TSituation | TAlarm)[]
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

	//filter by severity
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
	if (props.saveFilters) {
		saveFilters()
	}

	emit('filtered-list', filtered)
}

const saveFilters = () => {
	situationStore.filters = {
		node: state.nodeSelectedValue,
		severities: severityFilters.value,
		timeStart: selectedTimePeriod.value
	}
}

const toogleFilters = () => {
	showFilters.value = !showFilters.value
}
</script>

<template>
	<div class="btn-filter" v-if="!props.isOpen" v-on:click="toogleFilters">
		<div>
			<FeatherIcon :icon="Icons.FilterAlt" class="icon" /> Filters
			<span class="count">{{ filtersCount }}</span>
		</div>

		<FeatherIcon
			:icon="showFilters ? Icons.ExpandLess : Icons.ExpandMore"
			class="icon"
		/>
	</div>
	<div
		v-show="showFilters"
		class="filters"
		:class="{ collapsed: !props.isOpen }"
	>
		<div class="results">
			<div class="total">Results: {{ list.length }}</div>
			<FeatherButton class="btn-reset" @click="resetFilters">
				<FeatherIcon :icon="Icons.Refresh" class="icon" />
				Reset
			</FeatherButton>
		</div>
		<div>
			<FeatherAutocomplete
				ref="autocomplete"
				label="Find by node"
				:loading="loading"
				v-model="state.nodeSelectedValue"
				:results="state.results"
				type="single"
				@search="search"
				@update:modelValue="updateList"
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
	</div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss';

.title {
	margin-top: 20px;
	font-weight: 600;
}

.btn-reset {
	margin-bottom: 20px;
}

.btn-filter {
	display: flex;
	width: 100%;
	text-align: left;
	height: 42px !important;
	border-radius: 0 !important;
	margin-top: 10px;
	border: 1px solid variables.$border-grey;
	background-color: #eeeeee;
	align-items: center;
	padding: 0px 10px;
	justify-content: space-between;
	cursor: pointer;
}

.filters {
	padding: 10px;
	padding-top: 15px;

	&.collapsed {
		border: 1px solid variables.$border-grey;
		border-top: none;
	}
}

.count {
	font-size: 16px;
	font-weight: 600;
	margin-left: 5px;
	background-color: #cad4d4;
	padding: 1px 7px;
	border-radius: 20px;
}

.icon {
	font-size: 22px;
	color: #627272;
	vertical-align: text-bottom;
}

.total {
	font-weight: 600;
	font-size: 16px;
}
.results {
	display: flex;
	align-items: center;
	justify-content: space-between;
	align-items: baseline;
}
</style>
