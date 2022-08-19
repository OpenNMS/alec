<script setup lang="ts">
import { TSituation } from '@/types/TSituation'
import { formatDistanceStrict } from 'date-fns'
import { minBy, maxBy, groupBy, sortBy, reverse } from 'lodash'
import { format } from 'date-fns'
import { FeatherTooltip } from '@featherds/tooltip'
import { FeatherSelect } from '@featherds/select'
import { FeatherIcon } from '@featherds/icon'
import AddCircleAlt from '@featherds/icon/action/AddCircleAlt'

import Remove from '@featherds/icon/action/Remove'
const DEFAULT_MAX_WIDTH = 1000
let maxWidth = ref(DEFAULT_MAX_WIDTH)
const options = [
	{ id: 1, name: 'Creation Time' },
	{ id: 2, name: 'Severity' },
	{ id: 3, name: 'Duration' }
]
const sortedOption = ref(options[0])
const props = defineProps<{
	situation: TSituation
}>()

const relatedAlarms = ref(props.situation.relatedAlarms)
const minStart = ref(
	minBy(props.situation.relatedAlarms, 'firstEventTime').firstEventTime
)
const maxEnd = ref(
	maxBy(props.situation.relatedAlarms, 'lastEventTime').lastEventTime
)
const proportion = ref(maxWidth.value / (maxEnd.value - minStart.value))

watch(props, () => {
	minStart.value = minBy(
		props.situation.relatedAlarms,
		'firstEventTime'
	).firstEventTime
	maxEnd.value = maxBy(
		props.situation.relatedAlarms,
		'lastEventTime'
	).lastEventTime
	maxWidth.value = DEFAULT_MAX_WIDTH
	proportion.value = maxWidth.value / (maxEnd.value - minStart.value)
	relatedAlarms.value = props.situation.relatedAlarms
	sortedOption.value = options[0]
})

const getWidth = (alarmStart, alarmEnd) => {
	return (alarmEnd - alarmStart) * proportion.value
}

const getOffset = (alarmStart) => {
	return (alarmStart - minStart.value) * proportion.value
}

const sortChanged = (sortObj) => {
	if (sortObj.id === 1) {
		relatedAlarms.value = props.situation.relatedAlarms
	}
	if (sortObj.id === 2) {
		const alarmGrouped = groupBy(relatedAlarms.value, 'severity')
		const alarms = []
			.concat(alarmGrouped['CRITICAL'])
			.concat(alarmGrouped['MAJOR'])
			.concat(alarmGrouped['MINOR'])
			.concat(alarmGrouped['WARNING'])
		relatedAlarms.value = alarms.filter((a) => a)
	}
	if (sortObj.id === 3) {
		const sorted = reverse(
			sortBy(
				props.situation.relatedAlarms,
				(a) => a.lastEventTime - a.firstEventTime
			)
		)

		relatedAlarms.value = sorted
	}
}

const handleClickZoomIn = () => {
	maxWidth.value += 100
	proportion.value = maxWidth.value / (maxEnd.value - minStart.value)
}

const handleClickZoomOut = () => {
	maxWidth.value -= 100
	proportion.value = maxWidth.value / (maxEnd.value - minStart.value)
}
</script>

<template>
	<div class="metrics">
		<div class="section">
			<div class="id">Situation - [ {{ props.situation.id }} ]</div>

			<div>
				Duration:
				{{ formatDistanceStrict(new Date(maxEnd), new Date(minStart)) }}
			</div>
		</div>
		<div class="alarm-list">
			<h4>Alarms</h4>
			<div class="action-btns">
				<FeatherSelect
					class="select"
					label="Sort by:"
					:options="options"
					v-model="sortedOption"
					text-prop="name"
					@update:modelValue="sortChanged"
				/>
				<div class="zoom">
					Zoom
					<div>
						<FeatherIcon
							:icon="AddCircleAlt"
							class="zoom-icon"
							@click="handleClickZoomIn"
						/>
						<FeatherIcon
							:icon="Remove"
							class="zoom-icon"
							@click="handleClickZoomOut"
						/>
					</div>
				</div>
			</div>
			<div class="alarms">
				<div class="times">
					<div>
						{{ format(new Date(minStart), 'd/M HH:mm:ss') }}
					</div>
					<div>
						{{ format(new Date(maxEnd), 'd/M HH:mm:ss') }}
					</div>
				</div>
				<div class="container">
					<div class="ids">
						<div
							class="alarm-id"
							v-for="alarm in relatedAlarms"
							:key="alarm.id"
						>
							[ {{ alarm.id }} ]
						</div>
					</div>
					<div class="timeline-container">
						<div
							class="timeline"
							v-for="alarm in relatedAlarms"
							:key="alarm.id"
						>
							<FeatherTooltip
								:title="format(new Date(alarm.firstEventTime), 'd/M HH:mm:ss')"
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
									width:
										getWidth(alarm.firstEventTime, alarm.lastEventTime) + 'px'
								}"
							></div>
							<FeatherTooltip
								:title="format(new Date(alarm.lastEventTime), 'd/M HH:mm:ss')"
								v-slot="{ attrs, on }"
							>
								<div
									class="circle"
									v-bind="attrs"
									v-on="on"
									:class="[`${alarm.severity.toLowerCase()}-bg dark`]"
								></div>
							</FeatherTooltip>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';

::-webkit-scrollbar {
	height: 5px;
	width: 5px;
	background-color: #e7e7e7;
}

::-webkit-scrollbar-thumb {
	background: #909090;
}
.metrics {
	background-color: #ffffff;
	padding: 20px;
	border: 1px solid $border-grey;
	margin-top: 10px;
}

.section {
	background-color: #ffffff;
	border-bottom: 1px solid $border-grey;
	margin-bottom: 20px;
	padding-bottom: 20px;
}

.id {
	font-weight: 600;
	font-size: 22px;
	margin-bottom: 5px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.alarms {
	margin-top: 10px;
	display: flex;
	flex-direction: column;
}
.alarm-id {
	font-size: 17px;
	margin-bottom: 9px;
}
.container {
	display: flex;
	flex-direction: row;
	max-height: 600px;
	overflow-y: auto;
	flex-wrap: wrap;
}

.ids {
	display: flex;
	flex-direction: column;
	width: 10%;
}
.timeline-container {
	flex-direction: column;
	display: flex;
	overflow-x: auto;
	width: 1100px;
	flex-wrap: wrap;
}

.timeline {
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 15px;
	padding-top: 5px;
}

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

.times {
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid #b7b7b7;
	margin-bottom: 15px;
	margin-left: 10%;
	justify-content: space-between;
}

.select {
	width: 15%;
}

.action-btns {
	display: flex;
	flex-direction: row;
	> div {
		margin-right: 20px;
	}
}

.zoom {
	border: 1px solid #57575ce6;
	padding: 6px 15px;
	border-radius: 5px;
	width: 140px;
	display: flex;
	justify-content: space-between;
	max-height: 40px;
}

.zoom-icon {
	font-size: 24px;
	margin-left: 5px;
	color: rgb(21, 26, 69);
	cursor: pointer;
}
</style>
