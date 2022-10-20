<script setup lang="ts">
import { useSituationsStore } from '@/store/useSituationsStore'
import SituationCard from '@/components/SituationCard.vue'
import SituationDetail from '@/components/SituationDetail.vue'
import SimplePagination from '@/components/SimplePagination.vue'

import { reactive, ref } from 'vue'
import { cloneDeep, chunk } from 'lodash'
import { FeatherAutocomplete } from '@featherds/autocomplete'
import { TSituation } from '@/types/TSituation'
import { FeatherSnackbar } from '@featherds/snackbar'
import { useAppStore } from '@/store/useAppStore'

const situationStore = useSituationsStore()
const appStore = useAppStore()

situationStore.getSituations()
situationStore.getNodes()

const PAGE_SIZE = 10

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
const forceUpdate = ref(false)
const showError = ref(false)

const initPaging = (situations: Array<TSituation[]>) => {
	currentPage.value = 0
	state.situations = situations[0]
	totalPages.value = situations.length
}

const situationSelected = (id: number) => {
	window.scrollTo(0, 0)
	state.situationSelected = id
	state.selectedSituationIndex = situationStore.situations.findIndex(
		(s) => s.id === id
	)
}

const situationStatusChanged = (status: string, id: number) => {
	const auxSituations = state.situations
	auxSituations.forEach((sit) => {
		if (sit.id === id) {
			sit.status = status
		}
	})
	state.situations = cloneDeep(auxSituations)
}

const setNodes = () => {
	state.nodes = situationStore.nodes
	state.results = situationStore.nodes
}

appStore.$subscribe((mutation, storeState) => {
	showError.value = storeState.showError
})

situationStore.$subscribe((mutation, storeState) => {
	const oldIndex = state.selectedSituationIndex
	if (storeState.selectedSituation != -1) {
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
	}
	setNodes()
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
		.filter((x: any) => x.label.toLowerCase().indexOf(q) > -1)
		.map((x) => ({
			_text: x.label,
			id: x.id
		}))
	loading.value = false
}

const filterByNode = () => {
	if (state.nodeSelectedValue && state.nodeSelectedValue._text) {
		const filtered = situationStore.situations
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
			totalSituations.value = filtered.length
			state.situations = filtered
			if (filtered[0] && filtered[0].id) {
				situationSelected(filtered[0].id)
			}
		}
	} else {
		state.nodeSelectedValue = undefined
		totalSituations.value = situationStore.situations.length
		initPaging(state.allSituations)
		if (state.allSituations[0] && state.allSituations[0][0]) {
			situationSelected(state.allSituations[0][0].id)
		}
	}
}

const onGotoPage = (nextPage: number) => {
	currentPage.value = nextPage
	state.situations = state.allSituations[currentPage.value]
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
		<div
			class="container"
			v-if="state.situations && state.situations.length > 0"
		>
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
				<div v-if="!state.nodeSelectedValue">
					Page: {{ currentPage + 1 }} of {{ totalPages }}
				</div>
				<SimplePagination
					v-if="!state.nodeSelectedValue"
					@go-to-page="onGotoPage"
					:currentPage="currentPage"
					:totalPages="totalPages"
				/>
			</div>
			<SituationDetail
				:index="state.selectedSituationIndex"
				:forceUpdate="forceUpdate"
				@situation-status-changed="situationStatusChanged"
			/>
		</div>
		<div
			v-if="!state.situations || state.situations.length == 0"
			class="container"
		>
			No results found
		</div>
	</div>
	<FeatherSnackbar v-model="showError" center="center" error="error">
		An error has occured
	</FeatherSnackbar>
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
</style>
