<script setup lang="ts">
import { useSituationsStore } from '@/store/useSituationsStore'
import SituationCard from '@/components/SituationCard.vue'
import SituationDetail from '@/components/SituationDetail.vue'
import { reactive, ref } from 'vue'
import { cloneDeep, map, flatten, groupBy, mapKeys, chain } from 'lodash'
import {
	FeatherAutocomplete,
	IAutocompleteItemType
} from '@featherds/autocomplete'
const situationStore = useSituationsStore()
situationStore.getSituations()

const state = reactive({
	situations: [],
	selectedSituationIndex: 0,
	situationSelected: '',
	nodes: [],
	results: [],
	nodeSelectedValue: undefined
})
const loading = ref(false)

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
	state.situations = situationStore.situations
	state.situationSelected = storeState.situations[0]?.id
	setNodes()
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
		const filtered = state.situations
			.map((s) => {
				const alarms = s.alarms.filter(
					(a) => a.nodeLabel === state.nodeSelectedValue._text
				)
				if (alarms.length > 0) {
					return s
				}
			})
			.filter((s) => s)

		state.situations = filtered
	} else {
		state.situations = situationStore.situations
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
				<div v-for="situationInfo in state.situations" :key="situationInfo.id">
					<SituationCard
						:situation-info="situationInfo"
						@situation-selected="situationSelected"
						:selected="state.situationSelected == situationInfo.id"
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
</style>
