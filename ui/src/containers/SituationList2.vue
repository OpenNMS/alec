<script setup lang="ts">
import { useSituationsStore } from '@/store/useSituationsStore'
import SituationCard from '@/components/SituationCard.vue'
import SituationDetail from '@/components/SituationDetail.vue'
import SimplePagination from '@/components/SimplePagination.vue'
import FiltersSeverity from '@/components/FiltersSeverity.vue'
import { FeatherButton } from '@featherds/button'

import { reactive, ref } from 'vue'
import { cloneDeep, chunk, map, first } from 'lodash'
import { FeatherAutocomplete } from '@featherds/autocomplete'
import { TSituation } from '@/types/TSituation'
import { FeatherSnackbar } from '@featherds/snackbar'
import { useAppStore } from '@/store/useAppStore'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()

const situationStore = useSituationsStore()
const appStore = useAppStore()

situationStore.getSituations()
situationStore.getNodes()

const PAGE_SIZE = 3

type TState = {
	situations: TSituation[]
	selectedSituationIndex: number
	situationSelected: number | null
	nodes: Record<string, string | number>[]
	results: Record<string, string | number>[]
	nodeSelectedValue: Record<string, string> | undefined
	allSituations: Array<TSituation>[]
	filterSeverities: Array<string>
}
const state: TState = reactive({
	situations: [],
	selectedSituationIndex: 0,
	situationSelected: null,
	nodes: [],
	results: [],
	nodeSelectedValue: undefined,
	allSituations: [],
	filterSeverities: ['all']
})
const loading = ref(false)
const currentPage = ref(0)
const totalPages = ref(1)
const totalSituations = ref(0)
const withFilters = ref(false)
//const forceUpdate = ref(false)
const showError = ref(false)
const initPaging = (situations: Array<TSituation[]>) => {
	currentPage.value = 0
	state.situations = situations[0]
	totalPages.value = situations.length
}

/*
const situationSelected = (id: number) => {
	window.scrollTo(0, 0)
	state.situationSelected = id
	state.selectedSituationIndex = situationStore.situations.findIndex(
		(s) => s.id === id
	)
}
*/
/*
const situationStatusChanged = (status: string, id: number) => {
	const auxSituations = state.situations
	auxSituations.forEach((sit) => {
		if (sit.id === id) {
			sit.status = status
		}
	})
	state.situations = cloneDeep(auxSituations)
}
*/

const setNodes = () => {
	state.nodes = situationStore.nodes
	state.results = situationStore.nodes
}

appStore.$subscribe((mutation, storeState) => {
	showError.value = storeState.showError
})

situationStore.$subscribe((mutation, storeState) => {
	if (mutation.events.key == 'situations') {
		/*if (storeState.selectedSituation != -1) {
			const oldIndex = state.selectedSituationIndex
			state.selectedSituationIndex = situationStore.situations.findIndex(
				(s) => s.id === storeState.selectedSituation
			)
			if (situationStore.situations[state.selectedSituationIndex]) {
				state.situationSelected =
					situationStore.situations[state.selectedSituationIndex].id
			}
			if (oldIndex === state.selectedSituationIndex) {
				forceUpdate.value = !forceUpdate.value
			}
		} else {
			state.situationSelected = storeState.situations[0]?.id
		}*/
		setNodes()
		totalSituations.value = situationStore.situations.length
		state.allSituations = chunk(situationStore.situations, PAGE_SIZE)
		const ids = situationStore.situations.map((s) => s.id)
		situationStore.filteredSituations = ids
		initPaging(state.allSituations)
		checkPreviousFilters()
	}
})

const checkPreviousFilters = () => {
	if (situationStore.filters && situationStore.filters.node) {
		state.nodeSelectedValue = situationStore.filters.node
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
				const alarms = s.alarms.filter(
					(a) => a.nodeLabel === state.nodeSelectedValue?._text
				)
				if (alarms.length > 0) {
					return s
				}
			})
			.filter((s) => s) as TSituation[]
		if (filtered) {
			if (!state.filterSeverities.includes('all')) {
				filtered = filtered.filter((s) =>
					state.filterSeverities.includes(s.severity)
				)
			}
			totalSituations.value = filtered.length
			state.situations = filtered

			const ids = filtered.map((s: TSituation) => s.id)
			situationStore.filteredSituations = ids
			withFilters.value = true
		}
	} else {
		state.nodeSelectedValue = undefined
		if (!state.filterSeverities.includes('all')) {
			const filtered = situationStore.situations.filter((s) =>
				state.filterSeverities.includes(s.severity)
			)
			state.situations = filtered
			totalSituations.value = filtered.length
			const ids = filtered.map((s) => s.id)
			withFilters.value = true
			situationStore.filteredSituations = ids
		} else {
			/*totalSituations.value = situationStore.situations.length
			initPaging(state.allSituations)

			ids = situationStore.situations.map((s) => s.id)
			withFilters.value = false*/
			resetFilters()
		}
	}
}

const onGotoPage = (nextPage: number) => {
	currentPage.value = nextPage
	state.situations = state.allSituations[currentPage.value]
}

const showDetail = (id) => {
	if (state.nodeSelectedValue) {
		situationStore.filters = {
			node: state.nodeSelectedValue
		}
	}

	router.push({
		name: 'situationDetail',
		params: {
			id
		}
	})
}
const updateList = (severities: string[]) => {
	if (severities.includes('all') && !state.nodeSelectedValue) {
		resetFilters()
	} else {
		state.filterSeverities = severities
		filterByNode()
	}
}

const resetFilters = () => {
	state.filterSeveritie = ['all']
	state.situations = state.allSituations[currentPage.value]
	const ids = situationStore.situations.map((s) => s.id)
	situationStore.filteredSituations = ids
	totalSituations.value = situationStore.situations.length
	initPaging(state.allSituations)
	withFilters.value = false
}
</script>

<template>
	<div class="list-main">
		<h2>Situation List</h2>
		<div class="filters">
			<FiltersSeverity
				:alarms="situationStore.situations"
				@selected-severities="updateList"
				:reset="!withFilters"
			/>

			<div class="autocomplete">
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
		</div>
		<div
			class="container"
			v-if="state.situations && state.situations.length > 0"
		>
			<div>
				Result: {{ state.situations.length }} of
				{{ totalSituations }}
			</div>
			<div class="situation-list">
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
			<div class="footer-pager" v-if="!withFilters">
				<div>Page: {{ currentPage + 1 }} of {{ totalPages }}</div>
				<SimplePagination
					@go-to-page="onGotoPage"
					:currentPage="currentPage"
					:totalPages="totalPages"
				/>
			</div>
		</div>
		<div
			v-if="!state.situations || state.situations.length == 0"
			class="container"
		>
			No results found
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.list-main {
	min-height: 800px;
}
h2 {
	margin-top: 0;
	margin-bottom: 15px !important;
}
.reset-btn {
	font-size: 13px;
	margin-right: 15px;
	padding: 0px 12px;
}

.autocomplete {
	margin-left: auto;
}
.filters {
	padding: 15px;
	margin-bottom: 20px;
	background-color: #ffffff;
	margin-top: 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
}
.container {
	display: flex;
	flex-direction: column;
}
.situation-list {
	display: flex;
	flex-direction: row;
	background-color: #ffffff;
	padding-bottom: 20px;
	margin: auto;
	margin-top: 16px;
	flex-wrap: wrap;
	width: 100%;

	> div {
		width: 32%;
		//margin: auto;
		margin-top: 20px;
		margin-left: 1%;
	}
}

.map-search {
	z-index: 1000;
	width: 400px !important;
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
</style>
