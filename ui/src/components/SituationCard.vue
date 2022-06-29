<script setup lang="ts">
import SeverityStatus from '@/elements/SeverityStatus.vue'
import AlarmsCountBySeverity from '@/components/AlarmsCountBySeverity.vue'
import { TSituation } from '@/types/TSituation'

const props = defineProps<{
	alarmInfo: TSituation
}>()

const emit = defineEmits(['situation-selected'])
const handleSituationSelected = () => {
	emit('situation-selected', props.alarmInfo?.id)
}
</script>

<template>
	<div v-on:click="handleSituationSelected" class="card">
		<div
			class="severity-line"
			:class="[`${props.alarmInfo?.severity?.toLowerCase()}-bg dark`]"
		></div>
		<div class="content">
			<div class="title-row">
				<span class="title">Situation {{ props.alarmInfo?.id }} </span>
				<SeverityStatus :severity="props.alarmInfo?.severity" />
			</div>
			<span v-html="props.alarmInfo?.description"></span>
			<AlarmsCountBySeverity :relatedAlarms="props.alarmInfo?.relatedAlarms" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.card {
	width: 500px;
	height: auto;
	border: 1px solid $border-grey;
	display: flex;
	flex-direction: row;
	background-color: #ffffff;
	cursor: pointer;
	&:hover {
		border: 1px solid #4b5ad6;
	}
}

.title-row {
	display: flex;
	justify-content: space-between;
}

.title {
	font-size: 18px;
	font-weight: 600;
}

.severity-line {
	width: 8px;
}

.content {
	padding: 10px;
	display: flex;
	flex-direction: column;
}
</style>
