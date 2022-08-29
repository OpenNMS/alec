<script setup lang="ts">
import { TSituation } from '@/types/TSituation'
import { formatDistanceStrict } from 'date-fns'
import { minBy, maxBy, groupBy, sortBy, reverse } from 'lodash'
import { FeatherSelect, ISelectItemType } from '@featherds/select'
import { FeatherIcon } from '@featherds/icon'
import AddCircleAlt from '@featherds/icon/action/AddCircleAlt'
import TimeLine from '@/components/Timeline.vue'
import Remove from '@featherds/icon/action/Remove'
import { formatDate } from '@/helpers/utils'
import { ref, watch } from 'vue'
const DEFAULT_MAX_WIDTH = 800
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

const getProportion = () => {
	return maxWidth.value / (Number(maxEnd.value) - Number(minStart.value))
}

const relatedAlarms = ref(props.situation.alarms)
const minStart = ref(
	minBy(props.situation?.alarms, 'firstTime')?.firstTime || new Date()
)
const maxEnd = ref(maxBy(props.situation?.alarms, 'time')?.time || new Date())
const proportion = ref(getProportion())

watch(props, () => {
	minStart.value =
		minBy(props.situation?.alarms, 'firstTime')?.firstTime || new Date()
	maxEnd.value = maxBy(props.situation?.alarms, 'time')?.time || new Date()
	maxWidth.value = DEFAULT_MAX_WIDTH
	proportion.value = getProportion()
	relatedAlarms.value = props.situation.alarms
	sortedOption.value = options[0]
})

const sortChanged = (sortObj: ISelectItemType | undefined) => {
	//by creationTime (comes by default)
	if (sortObj?.id === 1) {
		relatedAlarms.value = props.situation.alarms
	}
	//by severity
	if (sortObj?.id === 2) {
		const alarmGrouped = groupBy(relatedAlarms.value, 'severity')
		const alarms = [
			...(alarmGrouped['CRITICAL'] || []),
			...(alarmGrouped['MAJOR'] || []),
			...(alarmGrouped['MINOR'] || []),
			...(alarmGrouped['WARNING'] || [])
		]
		relatedAlarms.value = alarms.filter((a) => a)
	}
	//by duration
	if (sortObj?.id === 3) {
		const sorted = reverse(
			sortBy(
				props.situation.alarms,
				(a) => Number(a.time) - Number(a.firstTime)
			)
		)
		relatedAlarms.value = sorted
	}
}

const handleClickZoomIn = () => {
	maxWidth.value += 100
	proportion.value = getProportion()
}

const handleClickZoomOut = () => {
	maxWidth.value -= 100
	proportion.value = getProportion()
}
</script>

<template>
	<div class="section detail">
		<div
			class="severity-line"
			:class="[`${props.situation?.severity?.toLowerCase()}-bg dark`]"
		></div>
		<div>
			<div class="id">Situation {{ props.situation.id }}</div>

			<div>
				Duration:
				{{ formatDistanceStrict(new Date(maxEnd), new Date(minStart)) }}
			</div>
		</div>
	</div>
	<div v-if="relatedAlarms.length > 0" class="section">
		<div class="id">Alarms</div>
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
					{{ formatDate(minStart) }}
				</div>
				<div>
					{{ formatDate(maxEnd) }}
				</div>
			</div>
			<div class="container">
				<div class="ids">
					<div class="alarm-id" v-for="alarm in relatedAlarms" :key="alarm.id">
						{{ alarm.nodeLabel }} [ {{ alarm.id }} ]
					</div>
				</div>
				<div class="timeline-container">
					<div class="timeline" v-for="alarm in relatedAlarms" :key="alarm.id">
						<TimeLine
							:alarm="alarm"
							:proportion="proportion"
							:min-start="minStart"
							:max-end="maxEnd"
						/>
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

.severity-line {
	width: 4px;
	margin-right: 10px;
}
.section {
	background-color: #ffffff;
	border: 1px solid $border-grey;
	margin-top: 10px;
	padding: 15px;
}

.detail {
	@extend .section;
	margin-bottom: 20px;
	display: flex;
	flex-direction: row;
}

.id {
	font-weight: 600;
	font-size: 21px;
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
	font-size: 15px;
	margin-bottom: 12px;
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
	width: 15%;
}
.timeline-container {
	flex-direction: column;
	display: flex;
	overflow-x: auto;
	width: 900px;
	flex-wrap: wrap;
}

.timeline {
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 17px;
	padding-top: 5px;
}

.times {
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid #b7b7b7;
	margin-bottom: 15px;
	margin-left: 15%;
	justify-content: space-between;
}

.select {
	width: 15%;
}

.action-btns {
	display: flex;
	flex-direction: row;
	padding-top: 10px;
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
