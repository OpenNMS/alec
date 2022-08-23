<script setup lang="ts">
import { useSituationsStore } from '@/store/useSituationsStore'
import SituationCard from '@/components/SituationCard.vue'
import SituationDetail from '@/components/SituationDetail.vue'
import { reactive } from 'vue'
const situationStore = useSituationsStore()
situationStore.getSituations()
const state = reactive({
	selectedSituationIndex: 0,
	situationSelected: ''
})
const situationSelected = (id: string) => {
	state.situationSelected = id
	state.selectedSituationIndex = situationStore.situations.findIndex(
		(s) => s.id === id
	)
}

situationStore.$subscribe((mutation, storeState) => {
	state.situationSelected = storeState.situations[0]?.id
})
</script>

<template>
	<div class="list-main">
		<h2>Situation List</h2>
		<div class="container">
			<div class="situation-list">
				<div v-for="alarmInfo in situationStore.situations" :key="alarmInfo.id">
					<SituationCard
						:alarm-info="alarmInfo"
						@situation-selected="situationSelected"
						:selected="state.situationSelected == alarmInfo.id"
					/>
				</div>
			</div>
			<SituationDetail
				:alarm-info="situationStore.situations[state.selectedSituationIndex]"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.list-main {
	/*background-color: #ffffff;
	border: 1px solid $border-grey; 
	padding: 20px; */
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
