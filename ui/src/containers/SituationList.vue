<script setup lang="ts">
import { useSituationsStore } from '@/store/useSituationsStore'
import SituationCard from '@/components/SituationCard.vue'
import SimplePagination from '@/components/SimplePagination.vue'
import ChipListByProperty from '@/components/ChipListByProperty.vue'
import CommonFilters from '@/components/CommonFilters.vue'

import { FeatherButton } from '@featherds/button'
import { FeatherIcon } from '@featherds/icon'
import Refresh from '@featherds/icon/navigation/Refresh'
import Add from '@featherds/icon/action/Add'
import View from '@featherds/icon/action/View'
import Settings from '@featherds/icon/action/Settings'
import { reactive, ref, watch, markRaw } from 'vue'
import { chunk } from 'lodash'
import { FeatherAutocomplete } from '@featherds/autocomplete'
import { TSituation } from '@/types/TSituation'
import useRouter from '@/composables/useRouter'
import { FeatherSpinner } from '@featherds/progress'

import NewSituationBtn from '@/elements/NewSituationBtn.vue'
import FilterByDate from '@/components/FilterByDate.vue'
import { FeatherExpansionPanel } from '@featherds/expansion'
import { filterListByDate } from '@/helpers/utils'
import { useUserStore } from '@/store/useUserStore'
import DeepLearning from '@/assets/option1.svg'
import Cluster from '@/assets/option2.svg'

import CONST from '@/helpers/constants'

const Icons = markRaw({
	Add,
	View,
	Settings
})

const router = useRouter()
const situationStore = useSituationsStore()
const userStore = useUserStore()

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
const loading = ref(true)
const currentPage = ref(0)
const totalPages = ref(1)
const totalSituations = ref(0)
const withFilters = ref(false)
const selectedSeverity = ref(['all'])
const selectedTimeStart = ref(1)
//const showPanel = ref(true)

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
		loading.value = false
		setNodes()
		totalSituations.value = situationStore.situations.length
		state.allSituations = chunk(situationStore.situations, PAGE_SIZE)
		const ids = situationStore.situations.map((s) => s.id)
		situationStore.filteredSituations = ids
		initPaging(state.allSituations)
		//checkPreviousFilters()
	}
)

//when come back to situation list, it has to mantain same filters
/*const checkPreviousFilters = () => {
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
*/
/*
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
*/
/*
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
*/
/*
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
*/

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
		/*situationStore.filters = {
			node: state.nodeSelectedValue,
			severities: selectedSeverity.value,
			timeStart: selectedTimeStart.value
		}*/
	}

	router.push({
		name: 'situationDetail',
		params: {
			id
		}
	})
}

// const timePeriodChanged = (value: number) => {
// 	selectedTimeStart.value = value
// 	updateList()
// }

// const severityChanged = (severities: string[]) => {
// 	selectedSeverity.value = severities
// 	updateList()
// }

// const updateList = () => {
// 	console.log('-----3----')

// 	if (
// 		selectedSeverity.value.includes('all') &&
// 		selectedTimeStart.value === 1 &&
// 		!state.nodeSelectedValue
// 	) {
// 		resetFilters()
// 	} else {
// 		filterByNode()
// 	}
// }

const viewUnassignedAlarms = () => {
	router.push({
		name: 'viewUnassignedAlarms'
	})
}

const showSettings = () => {
	router.push({
		name: 'settings'
	})
}

// const resetFilters = () => {
// 	selectedSeverity.value = ['all']
// 	selectedTimeStart.value = 1
// 	state.nodeSelectedValue = undefined
// 	const ids = situationStore.situations.map((s) => s.id)
// 	situationStore.filteredSituations = ids
// 	totalSituations.value = situationStore.situations.length
// 	initPaging(state.allSituations)
// 	withFilters.value = false
// }

const filterList = (list: TSituation[]) => {
	//state.situations = list
	//totalSituations.value = list.length
	if (list.length) {
		totalSituations.value = list.length
		state.allSituations = chunk(list, PAGE_SIZE)
		const ids = list.map((s) => s.id)
		situationStore.filteredSituations = ids
		currentPage.value = 0
		state.situations = state.allSituations[0]
		totalPages.value = state.allSituations.length
	} else {
		state.situations = []
	}

	//console.log(list)
	//withFilters.value = true
}
</script>

<template>
	<div class="list-main">
		<div class="header">
			<h2>Situation List</h2>
			<div class="link-btns">
				<FeatherButton
					class="view-situation-btn"
					@click="() => viewUnassignedAlarms()"
				>
					<FeatherIcon :icon="Icons.View" aria-hidden="true" class="icon" />
					<span>View Unassociated Alarms</span>
				</FeatherButton>
				<NewSituationBtn />

				<div class="info-engine">
					<img
						:src="
							userStore.engineInfo?.engineName == CONST.CLUSTERING
								? Cluster
								: DeepLearning
						"
						class="icon-type"
					/>

					<div class="engine" @click="showSettings">
						ENGINE
						<div
							v-if="userStore.engineInfo?.engineName == CONST.CLUSTERING"
							class="type"
						>
							CLUSTERING
						</div>
						<div v-else class="type">DEEP LEARNING</div>
					</div>
				</div>
				<div class="optin" @click="showSettings">
					OPT-IN
					<div v-if="userStore.allowSave" class="optin-on">ON</div>
					<div v-else class="optin-off">OFF</div>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="left-filters">
				<CommonFilters
					:list="situationStore.situations"
					@filtered-list="filterList"
					isOpen
					isSituation
					saveFilters
				/>
			</div>
			<!--<div class="filters">
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
			</div> -->

			<div class="container">
				<div class="autocomplete">
					<div>
						Result: {{ state.situations.length }} of
						{{ totalSituations }}
					</div>
					<!--<FeatherAutocomplete
						class="map-search"
						label="Find by node"
						:loading="loading"
						v-model="state.nodeSelectedValue"
						:results="state.results"
						type="single"
						@search="search"
						@update:modelValue="filterByNode"
					>
					</FeatherAutocomplete>-->
				</div>
				<FeatherSpinner class="spinner" v-if="loading" />
				<div v-else>
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
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.header {
	display: flex;
	justify-content: space-between;
}

.link-btns {
	display: flex;
	align-items: center;
}

.view-situation-btn {
	background-color: #465cae !important;
	color: white !important;
	height: 44px !important;
}

.box-info {
	display: flex;
	flex-direction: column;
	font-size: 10px;
	align-items: center;
	font-weight: 600;
	line-height: 20px;
	margin-left: 8px;
	color: #636363;
}

.info-engine {
	display: flex;
	border: 1px solid $border-grey;
	border-radius: 5px;
	padding: 1px 7px;
	cursor: pointer;
	margin-left: 8px;

	.icon-type {
		width: 28px;
		filter: invert(12%) sepia(72%) saturate(8824%) hue-rotate(236deg)
			brightness(100%) contrast(46%);
	}
}
.engine {
	@extend .box-info;
	.type {
		color: #065eca;
	}
}

.optin {
	border: 1px solid $border-grey;
	border-radius: 5px;
	padding: 1px 7px;
	cursor: pointer;

	@extend .box-info;
	.optin-on {
		font-size: 18px;
		color: green;
	}
	.optin-off {
		font-size: 18px;
		color: red;
	}
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

.left-filters {
	width: 25%;
	background-color: white;
	margin-right: 15px;
	border: 1px solid $border-grey;
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
	min-height: 750px;
}

.situation-list {
	display: flex;
	margin: 0px auto;
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
	margin-top: auto;
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

.settings {
	width: 44px !important;
	height: 44px !important;
	padding: 8px;
	margin-left: 10px;
	background-color: #d1d1d1;
	border-radius: 5px;
	cursor: pointer;
}
.spinner {
	margin: 100px auto;
}
</style>
