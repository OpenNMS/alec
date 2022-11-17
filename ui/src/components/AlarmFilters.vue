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
import FiltersSeverity from '@/components/FiltersSeverity.vue'
import CheckCircle from '@featherds/icon/action/CheckCircle'
import ExitToApp from '@featherds/icon/action/ExitToApp'
import DrawerSituations from '@/components/DrawerSituations.vue'
import { useAppStore } from '@/store/useAppStore'

const appStore = useAppStore()
import Delete from '@featherds/icon/action/Delete'

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

const handleRemoveAlarm = async () => {
	if (state.selectedAlarms.length) {
		const result = await removeAlarmsFromSituation(
			props.situationId,
			state.selectedAlarms
		)
		if (result) {
			situationStore.getSituation(props.situationId)
		} else {
			appStore.showErrorMsg('Error on removing alarms :(')
		}
	} else {
		appStore.showErrorMsg('You need to choose at least one alarm!')
	}
}

const updateList = (severities: string[]) => {
	if (severities.includes('all')) {
		state.alarms = props.alarms
	} else {
		state.alarms = props.alarms.filter((a) => severities.includes(a.severity))
	}
}

const handleMoveToSituation = async (situationId: number) => {
	const resultRemove = await removeAlarmsFromSituation(
		props.situationId,
		state.selectedAlarms
	)
	if (resultRemove) {
		const resultMove = await assignAlarmsToSituation(
			situationId,
			state.selectedAlarms
		)
		if (resultMove) {
			situationStore.getSituation(props.situationId)
		} else {
			appStore.showErrorMsg('Error on moving the alarms :(')
		}
	} else {
		appStore.showErrorMsg('Error on moving the alarms :(')
	}
	showSituations.value = false
}

const handleMoveClick = () => {
	if (state.selectedAlarms.length) {
		showSituations.value = true
	} else {
		appStore.showErrorMsg('You need to choose at least one alarm!')
	}
}
</script>

<template>
	<div class="container">
		<div class="row">
			<div class="title">Alarms</div>
			<FiltersSeverity
				:alarms="props.alarms"
				@selected-severities="updateList"
			/>
		</div>
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
		</div>
		<DrawerSituations
			:visible="showSituations"
			@situation-selected="handleMoveToSituation"
			@drawer-closed="() => (showSituations = false)"
		/>
	</div>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';
@import '@featherds/table/scss/table';
.container {
	border: 1px solid $border-grey;
	padding: 15px;
	background-color: #ffffff;
}

.row {
	display: flex;
	flex-direction: row;
	align-items: baseline;
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

.alarm-filters {
	margin-left: 30px;
}

.title {
	font-size: 21px;
	font-weight: 600;
	padding: 5px;
	padding-bottom: 10px;
}
.clicked {
	border: 2px solid $dark-blue !important;
	background-color: #e6e6e6 !important;
}
.alarm-list {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	> div {
		margin-top: 20px;
		width: 100%;
	}
}

.icon {
	font-size: 18px;
	margin-right: 4px;
	vertical-align: sub;

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
		vertical-align: text-bottom;
	}
}
</style>
