<script setup lang="ts">
import { TAlarm } from '@/types/TSituation'
import { FeatherTooltip } from '@featherds/tooltip'
import { formatDate } from '@/helpers/utils'

const props = defineProps<{
	alarm: TAlarm
	proportion: number
	minStart: number
	maxEnd: number
}>()

const getWidth = (alarmStart: number, alarmEnd: number): number => {
	return (alarmEnd - alarmStart) * props.proportion
}

const getOffset = (alarmStart: number): number => {
	return (alarmStart - props.minStart) * props.proportion
}
</script>

<template>
	<FeatherTooltip
		:title="formatDate(alarm.firstEventTime)"
		v-slot="{ attrs, on }"
	>
		<div
			class="circle"
			v-bind="attrs"
			v-on="on"
			:class="[`${alarm.severity.toLowerCase()}-bg dark`]"
			:style="{
				marginLeft: getOffset(alarm.firstEventTime) + 'px'
			}"
		></div>
	</FeatherTooltip>

	<div
		class="line"
		:class="[`${alarm.severity.toLowerCase()}-bg dark`]"
		:style="{
			width: getWidth(alarm.firstEventTime, alarm.lastEventTime) + 'px'
		}"
	></div>
	<FeatherTooltip
		:title="formatDate(alarm.lastEventTime)"
		v-slot="{ attrs, on }"
	>
		<div
			class="circle"
			v-bind="attrs"
			v-on="on"
			:class="[`${alarm.severity.toLowerCase()}-bg dark`]"
		></div>
	</FeatherTooltip>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.line {
	height: 2px;
	background-color: red;
}

.circle {
	width: 14px;
	height: 14px;
	border-radius: 25px;
	cursor: pointer;
}
</style>
