<script setup lang="ts">
import { TSituation } from '@/types/TSituation'
import { formatDistanceStrict } from 'date-fns'
import { minBy, maxBy, groupBy, sortBy, reverse } from 'lodash'
import { format } from 'date-fns'
import { FeatherTooltip } from '@featherds/tooltip'
import { FeatherSelect } from '@featherds/select'
const MAX_WIDTH = 1000
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
const proportion = ref(MAX_WIDTH / (maxEnd.value - minStart.value))

watch(props, () => {
	minStart.value = minBy(
		props.situation.relatedAlarms,
		'firstEventTime'
	).firstEventTime
	maxEnd.value = maxBy(
		props.situation.relatedAlarms,
		'lastEventTime'
	).lastEventTime
	proportion.value = MAX_WIDTH / (maxEnd.value - minStart.value)

	relatedAlarms.value = props.situation.relatedAlarms
	sortedOption.value = options[0]
})

//const step = Math.ceil((maxEnd - minStart) / 1000)
/*console.log(
	Array(10)
		.fill(1)
		.map((i, index) =>
			format(
				new Date((index * Math.ceil(maxEnd - minStart)) / 10 + minStart),
				'd/M HH:mm:ss'
			)
		)
)
const steps = Array(10)
	.fill(1)
	.map((i, index) =>
		format(
			new Date((index * Math.ceil(maxEnd - minStart)) / 10 + minStart),
			'd/M HH:mm:ss'
		)
	)
*/
/*const steps = sortedUniq(
	flatten(
		props.situation.relatedAlarms
			.map((a) => pick(a, ['firstEventTime', 'lastEventTime']))
			.map((item) => values(item))
	)
)*/

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
		const alarms = alarmGrouped['CRITICAL']
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
		<div class="section">
			<h4>Alarms</h4>
			<FeatherSelect
				class="select"
				label="Sort by:"
				:options="options"
				v-model="sortedOption"
				text-prop="name"
				@update:modelValue="sortChanged"
			/>
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
	background-color: $dark-blue;
	padding: 10px;
}

.section {
	background-color: #ffffff;
	padding: 20px;
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
	justify-content: space-between;
	border-bottom: 1px solid #b7b7b7;
	margin-bottom: 15px;
}

.select {
	width: 15%;
}
</style>
