<script setup lang="ts">
import { useSituationsStore } from '@/store/useSituationsStore'
import SituationCard from '@/components/SituationCard.vue'
import SimplePagination from '@/components/SimplePagination.vue'
import FiltersSeverity from '@/components/FiltersSeverity.vue'
import { FeatherButton } from '@featherds/button'
import { FeatherIcon } from '@featherds/icon'
import Refresh from '@featherds/icon/navigation/Refresh'
import Add from '@featherds/icon/action/Add'
import { reactive, ref, watch } from 'vue'
import { chunk } from 'lodash'
import { FeatherAutocomplete } from '@featherds/autocomplete'
import { TSituation } from '@/types/TSituation'
import { useRouter } from 'vue-router'
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

const checkPreviousFilters = () => {
	if (situationStore.filters) {
		if (situationStore.filters.node) {
			state.nodeSelectedValue = situationStore.filters.node
		}
		if (situationStore.filters.severities) {
			state.filterSeverities = situationStore.filters.severities
		}
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
			resetFilters()
		}
	}
}

const onGotoPage = (nextPage: number) => {
	currentPage.value = nextPage
	state.situations = state.allSituations[currentPage.value]
}

const showDetail = (id: number) => {
	if (state.nodeSelectedValue || state.filterSeverities.length) {
		situationStore.filters = {
			node: state.nodeSelectedValue,
			severities: state.filterSeverities
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

const addNewSituation = () => {
	router.push({
		name: 'addSituation'
	})
}

const resetFilters = () => {
	state.filterSeverities = ['all']
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
			<FeatherButton class="new-situation-btn" @click="() => addNewSituation()">
				<FeatherIcon :icon="Add" aria-hidden="true" class="icon" />
				<span>New Situation</span>
			</FeatherButton>
		</div>
		<div class="filters">
			<FeatherButton class="reset-btn" @click="() => resetFilters()">
				<FeatherIcon :icon="Refresh" aria-hidden="true" class="icon" />
				<span>Reset Filters</span>
			</FeatherButton>
			<FiltersSeverity
				:alarms="situationStore.situations"
				@selected-severities="updateList"
				:pre-selected="state.filterSeverities"
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
.header {
	display: flex;
	justify-content: space-between;
}
.new-situation-btn {
	height: 44px;
	background-color: #46ae46;
	color: white;
}

.list-main {
	min-height: 800px;
}

.reset-btn {
	font-size: 12px;
	padding: 0px 12px;
	margin-right: 20px;
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
	border: 1px solid $border-grey;
}
.container {
	display: flex;
	flex-direction: column;
}
.situation-list {
	display: flex;
	background-color: #ffffff;
	padding-bottom: 20px;
	margin: auto;
	margin-top: 16px;
	flex-wrap: wrap;
	width: 100%;
	border: 1px solid $border-grey;

	> div {
		width: 32%;
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
