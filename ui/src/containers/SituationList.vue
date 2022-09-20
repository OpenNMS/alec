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

const results = [
	{ id: 1, name: 'apple' },
	{ id: 2, name: 'orange' },
	{ id: 3, name: 'mango' },
	{ id: 4, name: 'banana' },
	{ id: 5, name: 'pineapple' },
	{ id: 6, name: 'kiwi' }
]

const state = reactive({
	selectedSituationIndex: 0,
	situationSelected: '',
	nodes: [],
	results: results,
	value: undefined
})
const loading = ref(false)
const situations = ref(situationStore.situations)

const situationSelected = (id: string) => {
	window.scrollTo(0, 0)
	state.situationSelected = id
	state.selectedSituationIndex = situationStore.situations.findIndex(
		(s) => s.id === id
	)
}

const situationStatusChanged = (status: string, id: string) => {
	const auxSituations = situations.value
	auxSituations.forEach((sit) => {
		if (sit.id === id) {
			sit.status = status
		}
	})
	situations.value = cloneDeep(auxSituations)
}

/*
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
}
*/
situationStore.$subscribe((mutation, storeState) => {
	situations.value = situationStore.situations
	state.situationSelected = storeState.situations[0]?.id
	//setNodes()
})

const search = (q: string) => {
	loading.value = true
	state.results = results.map((x) => ({
		_text: x
	}))
	loading.value = false
	//state.results = state.results
	//this.loading = false;
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
				v-model="state.value"
				:results="results"
				type="single"
				text-prop="name"
				@search="search"
			></FeatherAutocomplete>
		</div>
		<div class="container">
			<div class="situation-list">
				<div v-for="situationInfo in situations" :key="situationInfo.id">
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
	:deep(.feather-input-border) {
		background: var($surface);
	}
}
</style>
