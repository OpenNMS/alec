<script setup lang="ts">
import { TAlarm } from '@/types/TSituation'
import { ref, watch, reactive } from 'vue'
import { remove } from 'lodash'
import AlarmDetail from '@/components/AlarmDetail.vue'
import { FeatherButton } from '@featherds/button'
import MarkComplete from '@featherds/icon/action/MarkComplete'
import { FeatherIcon } from '@featherds/icon'
import { useSituationsStore } from '@/store/useSituationsStore'
import { sendActionMultiplyAlarms } from '@/services/AlarmService'
import {
	removeAlarmsFromSituation,
	assignAlarmsToSituation
} from '@/services/AlecService'
import { FeatherCheckbox } from '@featherds/checkbox'
import ChipListByProperty from '@/components/ChipListByProperty.vue'

import CheckCircle from '@featherds/icon/action/CheckCircle'
import ExitToApp from '@featherds/icon/action/ExitToApp'
import DrawerSituations from '@/components/DrawerSituations.vue'
import DrawerAlarms from '@/components/DrawerAlarms.vue'

import { useAppStore } from '@/store/useAppStore'
import Delete from '@featherds/icon/action/Delete'
import Add from '@featherds/icon/action/Add'
import { markRaw } from 'vue'
import CommonFilters from '@/components/CommonFilters.vue'
import NoResults from '@/elements/NoResults.vue'

const Icons = markRaw({
	Add,
	Delete,
	MarkComplete,
	CheckCircle,
	ExitToApp
})
const appStore = useAppStore()

const situationStore = useSituationsStore()

type TState = {
	selectedAlarms: number[]
	alarms: TAlarm[]
}
const props = defineProps<{
	alarms: TAlarm[]
	situationId: number
}>()
const selectAll = ref(false)

const selectedFilters = ref(['all'])
const showSituations = ref(false)
const showUnassignedAlarms = ref(false)
const state: TState = reactive({
	selectedAlarms: [],
	alarms: props.alarms
})

watch(props, () => {
	selectedFilters.value = ['all']
	state.alarms = props.alarms
	state.selectedAlarms = []
	selectAll.value = false
})

const alarmSelected = (id: number) => {
	if (state.selectedAlarms.includes(id)) {
		remove(state.selectedAlarms, (a) => a == id)
	} else {
		state.selectedAlarms.push(id)
	}
}

const handleActionMultiplyAlarms = async (action: string) => {
	if (state.selectedAlarms.length) {
		await sendActionMultiplyAlarms(state.selectedAlarms, action)
		situationStore.getSituation(props.situationId)
		state.selectedAlarms = []
		selectAll.value = false
	} else {
		appStore.showErrorMsg('You need to choose at least one alarm!')
	}
}

const validateCountSelectedAlarms = () => {
	if (state.selectedAlarms.length === props.alarms.length) {
		appStore.showErrorMsg('You cannnot remove all alarms from the situation')
		return false
	}
	if (!state.selectedAlarms.length) {
		appStore.showErrorMsg('You need to choose at least one alarm!')
		return false
	}
	return true
}

const handleRemoveAlarm = async () => {
	if (validateCountSelectedAlarms()) {
		const result = await removeAlarmsFromSituation(
			props.situationId,
			state.selectedAlarms
		)
		if (result) {
			situationStore.getSituation(props.situationId)
		} else {
			appStore.showErrorMsg('Error on removing alarms :(')
		}
	}
}

const handleMoveToSituation = async (situationId: number) => {
	if (validateCountSelectedAlarms()) {
		const resultRemove = await removeAlarmsFromSituation(
			props.situationId,
			state.selectedAlarms
		)
		if (resultRemove) {
			await moveAlarms(situationId, state.selectedAlarms)
		} else {
			appStore.showErrorMsg('Error on moving the alarms :(')
		}
	}
	showSituations.value = false
}

const moveAlarms = async (situationId: number, alarmIds: number[]) => {
	if (alarmIds.length) {
		const resultMove = await assignAlarmsToSituation(situationId, alarmIds)
		if (resultMove) {
			situationStore.getSituation(situationId)
		} else {
			appStore.showErrorMsg('Error on moving the alarms :(')
		}
	} else {
		appStore.showErrorMsg('You need to select the alarms')
	}
}

const handleAddAlarmsToSituation = async (alarmIds: number[]) => {
	await moveAlarms(props.situationId, alarmIds)
	showUnassignedAlarms.value = false
}

const handleMoveClick = () => {
	if (state.selectedAlarms.length) {
		showSituations.value = true
	} else {
		appStore.showErrorMsg('You need to choose at least one alarm!')
	}
}

const filterList = (alarmsFiltered: TAlarm[]) => {
	state.alarms = alarmsFiltered
}
</script>

<template>
	<div class="container">
		<div class="header">
			<div class="title">Alarms</div>
			<FeatherButton
				class="add-alarms-btn"
				@click="showUnassignedAlarms = true"
			>
				<FeatherIcon :icon="Icons.Add" aria-hidden="true" class="icon add" />
				<span>Add Alarms</span>
			</FeatherButton>
		</div>

		<div class="alarms-container">
			<div class="filters">
				<CommonFilters
					:list="props.alarms"
					@filtered-list="filterList"
					isOpen
				/>
			</div>
			<div class="list">
				<div class="row actions">
					<FeatherCheckbox v-model="selectAll" label="selected" />
					<FeatherButton @click="() => handleActionMultiplyAlarms('clear')">
						<FeatherIcon :icon="MarkComplete" class="icon clear" />
						<span>Clear</span>
					</FeatherButton>
					<FeatherButton @click="() => handleActionMultiplyAlarms('ack')">
						<FeatherIcon :icon="CheckCircle" class="icon ack" />
						<span>Acknowledge</span>
					</FeatherButton>
					<FeatherButton @click="handleMoveClick">
						<FeatherIcon :icon="ExitToApp" class="icon move" />
						<span>Move</span>
					</FeatherButton>
					<FeatherButton @click="handleRemoveAlarm">
						<FeatherIcon :icon="Delete" class="icon remove" />
						<span>Remove</span>
					</FeatherButton>
				</div>

				<div class="section">
					<div class="alarm-list" v-if="state.alarms.length > 0">
						<div v-for="alarmInfo in state.alarms" :key="alarmInfo.id">
							<AlarmDetail
								:alarm="alarmInfo"
								:selectAll="selectAll"
								:situation-id="props.situationId"
								@alarm-selected="alarmSelected"
							/>
						</div>
					</div>
					<NoResults v-else />
				</div>
			</div>
		</div>
	</div>

	<DrawerSituations
		:situationId="props.situationId"
		:visible="showSituations"
		@situation-selected="handleMoveToSituation"
		@drawer-closed="() => (showSituations = false)"
	/>
	<DrawerAlarms
		:visible="showUnassignedAlarms"
		@alarms-selected="handleAddAlarmsToSituation"
		@drawer-alarms-closed="() => (showUnassignedAlarms = false)"
	/>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';
@import '@featherds/table/scss/table';
.container {
	border: 1px solid $border-grey;
	padding: 15px;
	background-color: #ffffff;
}
.header {
	display: flex;
}
.row {
	display: flex;
	flex-direction: row;
	align-items: baseline;
}
.list {
	width: 100%;
}
.actions {
	margin-top: 20px;
	padding-left: 15px;

	> div {
		margin-right: 10px;
	}
	> label {
		display: none !important;
	}
}

.alarms-container {
	display: flex;
}

.add-alarms-btn {
	margin-left: auto;
	height: 44px !important;
	background-color: #46ae46 !important;
	color: white !important;
}

.title {
	font-size: 21px;
	font-weight: 600;
	padding: 5px;
	padding-bottom: 10px;
}

.alarm-list {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	> div {
		margin-top: 15px;
		width: 100%;
	}
}

.icon {
	font-size: 18px;
	margin-right: 4px;
	vertical-align: text-bottom !important;

	&.clear {
		color: blue;
	}
	&.ack {
		color: green;
	}
	&.move {
		color: #7004f4;
		font-size: 20px;
	}
	&.remove {
		color: red;
		font-size: 21px;
	}
	&.add {
		font-size: 20px;
	}
}

.filters {
	min-width: 20%;
	background-color: white;
	margin-right: 15px;
	margin-top: 9px;
}
</style>
