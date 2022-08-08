<script setup lang="ts">
import { TSituation } from '@/types/TSituation'
import { formatDistanceStrict } from 'date-fns'
import { minBy, maxBy } from 'lodash'
const props = defineProps<{
	situation: TSituation
}>()

const minStart = minBy(
	props.situation.relatedAlarms,
	'firstEventTime'
).firstEventTime
const maxEnd = maxBy(
	props.situation.relatedAlarms,
	'lastEventTime'
).lastEventTime

const getWidth = (alarmStart, alarmEnd) => {
	return (
		((new Date(alarmEnd) - new Date(alarmStart)) * 1200) / (maxEnd - minStart)
	)
}
</script>

<template>
	<div class="metrics">
		<div class="id">Situation - [ {{ props.situation.id }} ]</div>
		<div>
			First - {{ new Date(props.situation.firstEventTime).toUTCString() }}
		</div>
		<div>
			Last - {{ new Date(props.situation.lastEventTime).toUTCString() }}
		</div>
		<div>
			Duration -
			{{
				formatDistanceStrict(
					new Date(props.situation.lastEventTime),
					new Date(props.situation.firstEventTime)
				)
			}}
		</div>

		<h4>Alarms</h4>
		<div v-for="alarm in props?.situation?.relatedAlarms" :key="alarm.id">
			<div>{{ alarm.id }}</div>
			<div>First - {{ new Date(alarm.firstEventTime).toUTCString() }}</div>
			<div>Last - {{ new Date(alarm.lastEventTime).toUTCString() }}</div>
			<div
				class="line"
				:style="{
					width: getWidth(alarm.firstEventTime, alarm.lastEventTime) + 'px'
				}"
			></div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.id {
	font-weight: 600;
	font-size: 22px;
	margin-bottom: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.line {
	height: 5px;
	background-color: red;
}
</style>
