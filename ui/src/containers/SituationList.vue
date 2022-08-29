<script setup lang="ts">
import { useSituationsStore } from '@/store/useSituationsStore'
import SituationCard from '@/components/SituationCard.vue'
import SituationDetail from '@/components/SituationDetail.vue'
import { reactive, ref } from 'vue'
import { cloneDeep } from 'lodash'

const situationStore = useSituationsStore()
situationStore.getSituations()
const state = reactive({
	selectedSituationIndex: 0,
	situationSelected: ''
})
const situations = ref(situationStore.situations)
const situationSelected = (id: string) => {
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

situationStore.$subscribe((mutation, storeState) => {
	situations.value = situationStore.situations
	state.situationSelected = storeState.situations[0]?.id
})
</script>

<template>
	<div class="list-main">
		<h2>Situation List</h2>
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
</style>
