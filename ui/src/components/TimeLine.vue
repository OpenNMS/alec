<script setup lang="ts">
import {TAlarm} from '@/types/TSituation'
import {FeatherTooltip} from '@featherds/tooltip'
import {formatDate} from '@/helpers/utils'

const props = defineProps<{
	alarm: TAlarm
	proportion: number
	minStart: number | Date
	maxEnd: number | Date
}>()

const getWidth = (
	alarmStart: Date | undefined,
	alarmEnd: Date | undefined
): number => {
	return alarmStart && alarmEnd
		? (Number(alarmEnd) - Number(alarmStart)) * props.proportion
		: 0
}

const getOffset = (alarmStart: Date | undefined): number => {
	return alarmStart
		? (Number(alarmStart) - Number(props.minStart)) * props.proportion
		: 0
}
</script>

<template>
	<FeatherTooltip :title="formatDate(alarm.firstTime)" v-slot="{ attrs, on }">
		<div
			class="circle"
			v-bind="attrs"
			v-on="on"
			:class="[`${alarm.severity.toLowerCase()}-bg dark`]"
			:style="{
				marginLeft: getOffset(alarm.firstTime) + 'px'
			}"
		></div>
	</FeatherTooltip>

	<div
		v-if="alarm.time !== alarm.firstTime"
		class="line"
		:class="[`${alarm.severity.toLowerCase()}-bg dark`]"
		:style="{
			width: getWidth(alarm.firstTime, alarm.time) + 'px'
		}"
	></div>
	<FeatherTooltip
		v-if="alarm.time !== alarm.firstTime"
		:title="formatDate(alarm.time)"
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
