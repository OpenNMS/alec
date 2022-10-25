<script setup lang="ts">
import { TSituation } from '@/types/TSituation'
import { formatDistanceStrict } from 'date-fns'
import { minBy, groupBy, sortBy, reverse } from 'lodash'
import { FeatherSelect, ISelectItemType } from '@featherds/select'
import { FeatherIcon } from '@featherds/icon'
import AddCircleAlt from '@featherds/icon/action/AddCircleAlt'
import TimeLine from '@/components/Timeline.vue'
import Remove from '@featherds/icon/action/Remove'
import Refresh from '@featherds/icon/navigation/Refresh'
import ChevronRight from '@featherds/icon/navigation/ChevronRight'
import ExpandMore from '@featherds/icon/navigation/ExpandMore'
import { formatDate } from '@/helpers/utils'
import { ref, watch } from 'vue'
import EventsList from '@/components/EventsList.vue'

import { useSituationsStore } from '@/store/useSituationsStore'
const situationStore = useSituationsStore()
const DEFAULT_MAX_WIDTH = 1250

let maxWidth = ref(DEFAULT_MAX_WIDTH)
const panelShow = ref(0)
const options = [
	{ id: 1, name: 'Creation Time' },
	{ id: 2, name: 'Severity' },
	{ id: 3, name: 'Duration' }
]
const sortedOption = ref(options[0])
const props = defineProps<{
	situation: TSituation
}>()
const nowDate = new Date().getTime()
const getEvents = () => {
	if (!props.situation.events) {
		const ids = props.situation?.alarms?.map((a) => a.id)
		situationStore.getEvents(props.situation.id, ids)
	}
}
getEvents()

const getProportion = () => {
	return maxWidth.value / (Number(nowDate) - Number(minStart.value))
}

const relatedAlarms = ref(props.situation.alarms)
const minStart = ref(
	minBy(props.situation?.alarms, 'firstEventTime')?.firstEventTime ||
		new Date().getTime()
)

const proportion = ref(getProportion())

watch(props, () => {
	minStart.value =
		minBy(props.situation?.alarms, 'firstEventTime')?.firstEventTime ||
		new Date().getTime()
	getEvents()
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
			...(alarmGrouped['WARNING'] || []),
			...(alarmGrouped['NORMAL'] || []),
			...(alarmGrouped['CLEARED'] || []),
			...(alarmGrouped['INDETERMINATE'] || [])
		]
		relatedAlarms.value = alarms.filter((a) => a)
	}
	//by duration
	if (sortObj?.id === 3) {
		const sorted = reverse(
			sortBy(
				props.situation.alarms,
				(a) => Number(a.lastEventTime) - Number(a.firstEventTime)
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

const handleClickZoomReset = () => {
	maxWidth.value = DEFAULT_MAX_WIDTH
	proportion.value = getProportion()
}

const expandPanel = (alarmToShow: number) => {
	panelShow.value = alarmToShow
}

const closePanel = () => {
	panelShow.value = 0
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
				{{ formatDistanceStrict(nowDate, new Date(minStart)) }}
			</div>
		</div>
	</div>
	<div v-if="relatedAlarms && relatedAlarms.length > 0" class="section">
		<div class="id">Alarms</div>
		<div class="action-btns">
			<FeatherSelect
				class="select"
				label="Sort by:"
				:options="options"
				v-model="sortedOption"
				text-prop="name"
				data-test="select-sort"
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
						:icon="Refresh"
						class="zoom-icon"
						@click="handleClickZoomReset"
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
					{{ formatDate(nowDate) }}
				</div>
			</div>
			<div class="timeline-container" v-if="situation.events">
				<div class="timeline" v-for="alarm in relatedAlarms" :key="alarm.id">
					<div class="alarm-id">
						{{ alarm.nodeLabel }} - {{ alarm.id }}
						<FeatherIcon
							v-if="panelShow === alarm.id"
							:icon="ExpandMore"
							class="zoom-icon expand"
							@click="closePanel"
						/>
						<FeatherIcon
							v-else
							:icon="ChevronRight"
							class="zoom-icon expand"
							@click="() => expandPanel(alarm.id)"
						/>
					</div>
					<TimeLine
						:alarm="alarm"
						:proportion="proportion"
						:min-start="minStart"
						:max-end="nowDate"
						:events="props.situation.events[alarm.id]"
					/>
					<div class="panel" v-if="panelShow === alarm.id">
						<EventsList :events="props.situation.events[alarm.id]" />
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
	margin-bottom: 15px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.alarms {
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	max-width: 1300px;
}
.alarm-id {
	font-size: 14px;
	font-weight: 600;
	display: flex;
	align-items: center;
	color: #686868;
	margin-bottom: 5px;
}
.container {
	display: flex;
	flex-direction: row;
	max-height: 600px;
	overflow-y: auto;
}

.ids {
	display: flex;
	flex-direction: column;
	width: 18%;
}
.timeline-container {
	flex-direction: column;
	display: flex;
	overflow-x: auto;
	padding-left: 10px;
	flex: 1;
	display: flex;
	overflow: auto;
}

.timeline {
	align-items: center;
	margin-bottom: 17px;
	padding-top: 5px;
	min-width: max-content;
}

.times {
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid #b7b7b7;
	margin-bottom: 15px;
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
	min-width: 160px;
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

.panel {
	padding: 10px;
	margin: 5px;
}
.expand {
	font-size: 20px;
	border: 1px solid #1b1b1b;
	border-radius: 50px;
	color: #1b1b1b;
	background-color: #e8e8e8;
}
</style>
