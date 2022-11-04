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
import { FeatherCheckbox } from '@featherds/checkbox'
import FiltersSeverity from '@/components/FiltersSeverity.vue'
import CheckCircle from '@featherds/icon/action/CheckCircle'

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
	}
}

const updateList = (severities: string[]) => {
	if (severities.includes('all')) {
		state.alarms = props.alarms
	} else {
		state.alarms = props.alarms.filter((a) => severities.includes(a.severity))
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
			<FeatherButton
				class="acction-btn"
				@click="() => handleActionMultiplyAlarms('clear')"
			>
				<FeatherIcon
					:icon="MarkComplete"
					aria-hidden="true"
					class="icon clear"
				/>
				<span>Clear</span>
			</FeatherButton>
			<FeatherButton
				class="acction-btn"
				@click="() => handleActionMultiplyAlarms('ack')"
			>
				<FeatherIcon :icon="CheckCircle" aria-hidden="true" class="icon ack" />
				<span>Acknowledge</span>
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
}
</style>
