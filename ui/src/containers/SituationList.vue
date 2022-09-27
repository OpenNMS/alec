<script setup lang="ts">
import { useSituationsStore } from '@/store/useSituationsStore'
import SituationCard from '@/components/SituationCard.vue'
import SituationDetail from '@/components/SituationDetail.vue'
import { reactive, ref } from 'vue'
import { cloneDeep, map, chain, chunk } from 'lodash'
import { FeatherAutocomplete } from '@featherds/autocomplete'
import { FeatherIcon } from '@featherds/icon'

import FirstPage from '@featherds/icon/navigation/FirstPage'
import LastPage from '@featherds/icon/navigation/LastPage'
import ChevronLeft from '@featherds/icon/navigation/ChevronLeft'
import ChevronRight from '@featherds/icon/navigation/ChevronRight'

const situationStore = useSituationsStore()
situationStore.getSituations()
const PAGE_SIZE = 10

const state = reactive({
	situations: [],
	selectedSituationIndex: 0,
	situationSelected: '',
	nodes: [],
	results: [],
	nodeSelectedValue: undefined,
	allSituations: []
})
const loading = ref(false)
const currentPage = ref(0)
const totalPages = ref(1)
const totalSituations = ref(0)

const initPaging = (situations) => {
	currentPage.value = 0
	state.situations = situations[0]
	totalPages.value = situations.length
}

const situationSelected = (id: string) => {
	window.scrollTo(0, 0)
	state.situationSelected = id
	state.selectedSituationIndex = situationStore.situations.findIndex(
		(s) => s.id === id
	)
}

const situationStatusChanged = (status: string, id: string) => {
	const auxSituations = state.situations
	auxSituations.forEach((sit) => {
		if (sit.id === id) {
			sit.status = status
		}
	})

	state.situations = cloneDeep(auxSituations)
}

const setNodes = () => {
	const nodesLabels = chain(situationStore.situations)
		.map((s) => s.alarms)
		.flatten()
		.groupBy('nodeLabel')
		.keys()
		.value()
	const nodes = map(nodesLabels, (n, i) => {
		return {
			id: i,
			name: n
		}
	})
	state.nodes = nodes
	state.results = nodes
}

situationStore.$subscribe((mutation, storeState) => {
	state.situationSelected = storeState.situations[0]?.id
	setNodes()
	//TODO - replace with pagination from backend
	totalSituations.value = situationStore.situations.length
	state.allSituations = chunk(situationStore.situations, PAGE_SIZE)
	initPaging(state.allSituations)
})

const search = (q: string) => {
	if (!q) {
		state.nodeSelectedValue = undefined
		return []
	}
	loading.value = true
	state.results = state.nodes
		.filter((x: any) => x.name.toLowerCase().indexOf(q) > -1)
		.map((x) => ({
			_text: x.name,
			id: x.id
		}))
	loading.value = false
}

const filterByNode = () => {
	if (state.nodeSelectedValue && state.nodeSelectedValue._text) {
		const filtered = situationStore.situations
			.map((s) => {
				const alarms = s.alarms.filter(
					(a) => a.nodeLabel === state.nodeSelectedValue._text
				)
				if (alarms.length > 0) {
					return s
				}
			})
			.filter((s) => s)

		totalSituations.value = filtered.length
		state.situations = filtered
	} else {
		totalSituations.value = situationStore.situations.length
		initPaging(state.allSituations)
	}
}

const onGotoPage = (nextPage: number) => {
	if (nextPage >= 0 && nextPage <= totalPages.value - 1) {
		currentPage.value = nextPage
		state.situations = state.allSituations[currentPage.value]
	}
}
</script>

<template>
	<div class="list-main">
		<h2>Situation List</h2>
		<div class="situation-filters">
			<FeatherAutocomplete
				class="map-search"
				label="Find by node"
				:loading="loading"
				v-model="state.nodeSelectedValue"
				:results="state.results"
				type="single"
				@search="search"
				@update:modelValue="filterByNode"
			></FeatherAutocomplete>
		</div>
		<div class="container">
			<div class="situation-list">
				<div>
					Result: {{ state.situations.length }} of
					{{ totalSituations }}
				</div>
				<div v-for="situationInfo in state.situations" :key="situationInfo.id">
					<SituationCard
						:situation-info="situationInfo"
						@situation-selected="situationSelected"
						:selected="state.situationSelected == situationInfo.id"
					/>
				</div>
				<div class="paginator" v-if="!state.nodeSelectedValue">
					<FeatherIcon
						:icon="FirstPage"
						aria-hidden="true"
						class="icon nav"
						:class="{ disable: currentPage == 0 }"
						@click="onGotoPage(0)"
					/>
					<FeatherIcon
						:icon="ChevronLeft"
						aria-hidden="true"
						class="icon nav"
						:class="{ disable: currentPage == 0 }"
						@click="onGotoPage(currentPage - 1)"
					/>
					<FeatherIcon
						:icon="ChevronRight"
						aria-hidden="true"
						class="icon nav"
						:class="{ disable: currentPage == totalPages - 1 }"
						@click="onGotoPage(currentPage + 1)"
					/>
					<FeatherIcon
						:icon="LastPage"
						aria-hidden="true"
						class="icon nav"
						:class="{ disable: currentPage == totalPages - 1 }"
						@click="onGotoPage(totalPages - 1)"
					/>
				</div>
			</div>
			<SituationDetail
				:alarm-info="situationStore.situations[state.selectedSituationIndex]"
				@situation-status-changed="situationStatusChanged"
			/>
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
.situation-filters {
	padding: 15px;
	border: 1px solid #dfdfdf;
	margin-bottom: 20px;
	background-color: #ffffff;
	margin-top: 10px;
}
.container {
	display: flex;
	flex-direction: row;
}
.situation-list {
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	padding: 15px;
	border: 1px solid $border-grey;
	> div {
		margin-bottom: 20px;
	}
	> div:last-child {
		margin-bottom: 0 !important;
	}
}

.map-search {
	z-index: 1000;
	width: 400px !important;
}

.paginator {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.nav {
	font-size: 28px;
	color: #0659a6;
	cursor: pointer;
	&:hover {
		border: 1px solid #dfdfdf;
		border-radius: 25px;
		background-color: #dfdfdf;
	}
	&.disable {
		color: #c6c6c6;
	}
}
</style>
