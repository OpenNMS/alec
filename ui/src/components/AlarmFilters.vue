<script setup lang="ts">
import { TAlarm } from '@/types/TSituation'
import { FeatherChipList, FeatherChip } from '@featherds/chips'
import { ref, watch, computed, reactive } from 'vue'
import { groupBy, keys, remove } from 'lodash'
import AlarmDetail from '@/components/AlarmDetail.vue'
import StatusColor from '@/elements/StatusColor.vue'
import { FeatherButton } from '@featherds/button'
import MarkComplete from '@featherds/icon/action/MarkComplete'
import { FeatherIcon } from '@featherds/icon'
import { useSituationsStore } from '@/store/useSituationsStore'
import { sendClearAlarms } from '@/services/AlarmService'
import { FeatherCheckbox } from '@featherds/checkbox'

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

const alarmFilters = computed(() => keys(groupBy(props.alarms, 'severity')))
const selectedFilters = ref(['all'])

const state: TState = reactive({
	selectedAlarms: [],
	alarms: props.alarms
})

const handleAlarmFilters = (selected: string) => {
	selectedFilters.value = selectedFilters.value.filter((f) => f !== 'all')
	if (selectedFilters.value.includes(selected)) {
		selectedFilters.value = selectedFilters.value.filter((f) => f !== selected)
	} else {
		selectedFilters.value.push(selected)
	}
	if (selected === 'all' || selectedFilters.value.length === 0) {
		selectedFilters.value = ['all']
		state.alarms = props.alarms
	} else {
		state.alarms = props.alarms.filter((a) =>
			selectedFilters.value.includes(a.severity)
		)
	}
}
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

const handleClearAction = async () => {
	await sendClearAlarms(state.selectedAlarms)
	situationStore.getSituation(props.situationId)
	state.selectedAlarms = []
	selectAll.value = false
}
</script>

<template>
	<div class="container">
		<div class="row">
			<div class="title">Alarms</div>
			<FeatherChipList
				:key="selectedFilters.toString()"
				v-if="alarmFilters.length > 1"
				condensed
				class="alarm-filters"
				label="Random list for condensed visual testing"
			>
				<FeatherChip
					:class="{ clicked: selectedFilters.includes('all') }"
					@click="handleAlarmFilters('all')"
				>
					ALL
				</FeatherChip>
				<FeatherChip
					:class="{ clicked: selectedFilters.includes(severity) }"
					v-for="severity in alarmFilters"
					:key="severity"
					@click="handleAlarmFilters(severity)"
				>
					<StatusColor :severity="severity" />{{ severity }}
				</FeatherChip>
			</FeatherChipList>
		</div>
		<div class="row actions">
			<FeatherCheckbox v-model="selectAll" label="selected" />
			<FeatherButton class="acction-btn" @click="() => handleClearAction()">
				<FeatherIcon
					:icon="MarkComplete"
					aria-hidden="true"
					class="icon clear"
				/>
				<span>Clear</span>
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
	background-color: rgb(212, 212, 212) !important;
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
}
</style>
