<script setup lang="ts">
import { useSituationsStore } from '@/store/useSituationsStore'
import SituationCard from '@/components/SituationCard.vue'
import SimplePagination from '@/components/SimplePagination.vue'
import ChipListByProperty from '@/components/ChipListByProperty.vue'

import { FeatherButton } from '@featherds/button'
import { FeatherIcon } from '@featherds/icon'
import Refresh from '@featherds/icon/navigation/Refresh'
import Add from '@featherds/icon/action/Add'
import View from '@featherds/icon/action/View'
import { reactive, ref, watch, markRaw } from 'vue'
import { chunk } from 'lodash'
import { FeatherAutocomplete } from '@featherds/autocomplete'
import { TSituation } from '@/types/TSituation'
import { useRouter } from 'vue-router'
import NewSituationBtn from '@/elements/NewSituationBtn.vue'
import FilterByDate from '@/components/FilterByDate.vue'
import { FeatherExpansionPanel } from '@featherds/expansion'
import { filterListByDate } from '@/helpers/utils'

const Icons = markRaw({
	Add,
	View
})

const router = useRouter()

const situationStore = useSituationsStore()

situationStore.getSituations()
situationStore.getNodes()
situationStore.getUnassignedAlarms()

const PAGE_SIZE = 9

type TState = {
	situations: TSituation[]
	selectedSituationIndex: number
	situationSelected: number | null
	nodes: Record<string, string | number>[]
	results: Record<string, string | number>[]
	nodeSelectedValue: Record<string, string> | undefined
	allSituations: Array<TSituation>[]
}
const state: TState = reactive({
	situations: [],
	selectedSituationIndex: 0,
	situationSelected: null,
	nodes: [],
	results: [],
	nodeSelectedValue: undefined,
	allSituations: []
})
const loading = ref(false)
const currentPage = ref(0)
const totalPages = ref(1)
const totalSituations = ref(0)
const withFilters = ref(false)
const selectedSeverity = ref(['all'])
const selectedTimeStart = ref(1)
const showPanel = ref(true)

const initPaging = (situations: Array<TSituation[]>) => {
	currentPage.value = 0
	state.situations = situations[0]
	totalPages.value = situations.length
}

const setNodes = () => {
	state.nodes = situationStore.nodes
	state.results = situationStore.nodes
}

watch(
	() => situationStore.situations,
	() => {
		setNodes()
		totalSituations.value = situationStore.situations.length
		state.allSituations = chunk(situationStore.situations, PAGE_SIZE)
		const ids = situationStore.situations.map((s) => s.id)
		situationStore.filteredSituations = ids
		initPaging(state.allSituations)
		checkPreviousFilters()
	}
)

//when come back to situation list, it has to mantain same filters
const checkPreviousFilters = () => {
	if (situationStore.filters) {
		if (situationStore.filters.node) {
			state.nodeSelectedValue = situationStore.filters.node
		}
		if (situationStore.filters.severities) {
			selectedSeverity.value = situationStore.filters.severities
		}
		selectedTimeStart.value = situationStore.filters.timeStart
		filterByNode()
		situationStore.filters = null
	}
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
	if (state.nodeSelectedValue && state.nodeSelectedValue._text) {
		let filtered = situationStore.situations
			.map((s) => {
				const alarms = s.relatedAlarms.filter(
					(a) => a.nodeLabel === state.nodeSelectedValue?._text
				)
				if (alarms.length > 0) {
					return s
				}
			})
			.filter((s) => s) as TSituation[]
		if (filtered) {
			applyFilters(filtered)
			withFilters.value = true
		}
	} else {
		state.nodeSelectedValue = undefined
		withFilters.value = true
		applyFilters(situationStore.situations)
	}
}

const applyFilters = (situations: TSituation[]) => {
	let filteredSituations = situations
	if (!selectedSeverity.value.includes('all')) {
		filteredSituations = situations.filter((s) =>
			selectedSeverity.value.includes(s.severity)
		)
	}

	if (selectedTimeStart.value !== 1) {
		filteredSituations = filterListByDate(
			selectedTimeStart.value,
			filteredSituations
		) as TSituation[]
	}
	state.situations = filteredSituations
	totalSituations.value = filteredSituations.length
	const ids = filteredSituations.map((s) => s.id)
	situationStore.filteredSituations = ids
}

const onGotoPage = (nextPage: number) => {
	currentPage.value = nextPage
	state.situations = state.allSituations[currentPage.value]
}

const showDetail = (id: number) => {
	if (
		state.nodeSelectedValue ||
		selectedSeverity.value.length ||
		selectedTimeStart.value !== 1
	) {
		situationStore.filters = {
			node: state.nodeSelectedValue,
			severities: selectedSeverity.value,
			timeStart: selectedTimeStart.value
		}
	}

	router.push({
		name: 'situationDetail',
		params: {
			id
		}
	})
}

const timePeriodChanged = (value: number) => {
	selectedTimeStart.value = value
	updateList()
}

const severityChanged = (severities: string[]) => {
	selectedSeverity.value = severities
	updateList()
}

const updateList = () => {
	if (
		selectedSeverity.value.includes('all') &&
		selectedTimeStart.value === 1 &&
		!state.nodeSelectedValue
	) {
		resetFilters()
	} else {
		filterByNode()
	}
}

const viewUnassignedAlarms = () => {
	router.push({
		name: 'viewUnassignedAlarms'
	})
}

const resetFilters = () => {
	selectedSeverity.value = ['all']
	selectedTimeStart.value = 1
	state.nodeSelectedValue = undefined
	const ids = situationStore.situations.map((s) => s.id)
	situationStore.filteredSituations = ids
	totalSituations.value = situationStore.situations.length
	initPaging(state.allSituations)
	withFilters.value = false
}
</script>

<template>
	<div class="list-main">
		<div class="header">
			<h2>Situation List</h2>
			<div>
				<FeatherButton
					class="view-situation-btn"
					@click="() => viewUnassignedAlarms()"
				>
					<FeatherIcon :icon="Icons.View" aria-hidden="true" class="icon" />
					<span>View Unassociated Alarms</span>
				</FeatherButton>
				<NewSituationBtn />
			</div>
		</div>
		<div class="content">
			<div class="filters">
				<FeatherButton class="reset-btn" @click="() => resetFilters()">
					<FeatherIcon :icon="Refresh" aria-hidden="true" class="icon" />
					<span>Reset Filters</span>
				</FeatherButton>
				<FeatherExpansionPanel title="By Severity" v-model="showPanel">
					<ChipListByProperty
						:alarms="situationStore.situations"
						:pre-selected="selectedSeverity"
						@selected-option="severityChanged"
						property="severity"
						isVertical
					/>
				</FeatherExpansionPanel>

				<FeatherExpansionPanel title="By Start Date" v-model="showPanel">
					<FilterByDate
						@filter-date-selected="timePeriodChanged"
						:pre-selected="selectedTimeStart"
					/>
				</FeatherExpansionPanel>
			</div>
			<div class="container">
				<div class="autocomplete">
					<div>
						Result: {{ state.situations.length }} of
						{{ totalSituations }}
					</div>
					<FeatherAutocomplete
						class="map-search"
						label="Find by node"
						:loading="loading"
						v-model="state.nodeSelectedValue"
						:results="state.results"
						type="single"
						@search="search"
						@update:modelValue="filterByNode"
					>
					</FeatherAutocomplete>
				</div>
				<div
					class="situation-list"
					v-if="state.situations && state.situations.length > 0"
				>
					<div
						class="card"
						v-for="situationInfo in state.situations"
						:key="situationInfo.id"
					>
						<SituationCard
							@click="() => showDetail(situationInfo.id)"
							:situation-info="situationInfo"
						/>
					</div>
				</div>
				<div
					v-if="!state.situations || state.situations.length == 0"
					class="container empty"
				>
					No results found
				</div>
				<div
					class="footer-pager"
					v-if="!withFilters && totalSituations > PAGE_SIZE"
				>
					<div>Page: {{ currentPage + 1 }} of {{ totalPages }}</div>
					<SimplePagination
						@go-to-page="onGotoPage"
						:currentPage="currentPage"
						:totalPages="totalPages"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.header {
	display: flex;
	justify-content: space-between;
}

.view-situation-btn {
	background-color: #465cae !important;
	color: white !important;
	height: 44px !important;
}

.content {
	display: flex;
	margin-top: 20px;
}

.list-main {
	min-height: 800px;
}

.reset-btn {
	font-size: 12px;
	padding: 0px 12px;
	margin-bottom: 20px;
	box-shadow: var(--feather-shadow-1);
}

.icon {
	font-size: 17px;
	margin-right: 5px;
}

h2 {
	margin-top: 0;
	margin-bottom: 15px !important;
}

.autocomplete {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 15px;
}
.filters {
	display: flex;
	min-width: 300px;
	flex-direction: column;
	margin-right: 15px;
}
.container {
	display: flex;
	padding-top: 20px;
	flex-direction: column;
	border: 1px solid $border-grey;
	background-color: #ffffff;
	width: 100%;
	min-height: 650px;
}

.situation-list {
	display: flex;
	margin: 10px auto;
	flex-wrap: wrap;
	width: 100%;
	padding-bottom: 15px;

	> div {
		width: 32%;
		margin-top: 20px;
		margin-left: 1%;
	}
}

.map-search {
	z-index: 1000;
	width: 400px !important;
	display: flex;
}

.footer-pager {
	display: flex;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 30px;
	> :first-child {
		margin-right: 15px;
	}
}

.empty {
	padding-left: var($spacing-xl);
	border: none;
	font-size: 16px;
}
</style>
