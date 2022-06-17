<script setup lang="ts">
import SeverityStatus from '@/elements/SeverityStatus.vue'
import AlarmsCountBySeverity from '@/components/AlarmsCountBySeverity.vue'

const props = defineProps({
	alarmInfo: {
		required: false,
		type: Object
	}
})
console.log(props.alarmInfo)
</script>

<template>
	<div v-if="props.alarmInfo" class="detail">
		<div>
			<div class="id">Situation - {{ props.alarmInfo?.id }}</div>
		</div>
		<SeverityStatus :severity="props.alarmInfo?.severity" />
		<span v-html="props.alarmInfo.description"></span>

		<AlarmsCountBySeverity :relatedAlarms="props.alarmInfo?.relatedAlarms" />
	</div>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.detail {
	width: 100%;
	background-color: #ffffff;
	padding: 30px;
	margin-left: 20px;
	border: 1px solid $border-grey;
}

.id {
	font-weight: 600;
	font-size: 22px;
	margin-bottom: 20px;
}
</style>
