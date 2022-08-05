<script setup lang="ts">
import SeverityStatus from '@/elements/SeverityStatus.vue'
import AlarmsCountBySeverity from '@/components/AlarmsCountBySeverity.vue'
import { TSituation } from '@/types/TSituation'
const props = defineProps<{
	alarmInfo: TSituation
	selected: boolean
}>()
const emit = defineEmits(['situation-selected'])
const handleSituationSelected = () => {
	emit('situation-selected', props.alarmInfo?.id)
}
</script>

<template>
	<div
		v-on:click="handleSituationSelected"
		class="card"
		:class="{ selected: props.selected }"
	>
		<div
			class="severity-line"
			:class="[`${props.alarmInfo?.severity?.toLowerCase()}-bg dark`]"
		></div>
		<div class="content">
			<div class="title-row">
				<div class="title">[ {{ props.alarmInfo?.id }} ]</div>
				<SeverityStatus :severity="props.alarmInfo?.severity" />
			</div>
			<AlarmsCountBySeverity
				:relatedAlarms="props.alarmInfo?.relatedAlarms"
				size="normal"
			/>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.card {
	width: 250px;
	height: auto;
	display: flex;
	flex-direction: row;
	background-color: #ffffff;
	cursor: pointer;
	border: 1px solid $border-grey;
	&:hover {
		border: 1px solid $dark-blue;
	}
	&.selected {
		border: 1px solid $dark-blue;
	}
}
.title-row {
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;
}
.title {
	font-size: 18px;
	font-weight: 600;
	word-break: break-all;
	margin-right: 5px;
}
.severity-line {
	width: 4px;
}
.content {
	padding: 10px;
	display: flex;
	flex-direction: column;
	width: 100%;
}
</style>
