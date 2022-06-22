<script setup lang="ts">
import { useSituationsStore } from '@/store/useSituationsStore'
import SituationCard from '@/components/SituationCard.vue'
import SituationDetail from '@/components/SituationDetail.vue'
import { reactive } from 'vue'
const situationStore = useSituationsStore()
situationStore.getSituations()
const state = reactive({
	selectedSituationIndex: 0
})
const situationSelected = (id: string) => {
	state.selectedSituationIndex = situationStore.$state.situations.findIndex(
		(s) => s.id === id
	)
}
</script>

<template>
	<div class="list-main">
		<h2>Situation List</h2>
		<div class="container">
			<div class="situation-list">
				<div
					v-for="alarmInfo in situationStore.$state.situations"
					:key="alarmInfo.id"
				>
					<SituationCard
						:alarm-info="alarmInfo"
						@situation-selected="situationSelected"
					/>
				</div>
			</div>
			<SituationDetail
				:alarm-info="
					situationStore.$state.situations[state.selectedSituationIndex]
				"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.list-main {
	background-color: #ffffff;
	padding: 30px;
	border: 1px solid $border-grey;
	min-height: 580px;
}
h2 {
	margin-top: 0;
}
.container {
	display: flex;
	flex-direction: row;
}

.situation-list {
	display: flex;
	flex-direction: column;
	> div {
		margin-bottom: 20px;
	}
	> div:last-child {
		margin-bottom: 0 !important;
	}
}
</style>
