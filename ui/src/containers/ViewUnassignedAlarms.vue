<script setup lang="ts">
import UnassignedAlarmCard from '@/components/UnassignedAlarmCard.vue'
import { useSituationsStore } from '@/store/useSituationsStore'
import type { Ref } from 'vue'
import { ref, watch } from 'vue'
import { remove, includes } from 'lodash'
import FiltersSeverity from '@/components/FiltersSeverity.vue'
import ExitToApp from '@featherds/icon/action/ExitToApp'
import { FeatherCheckbox } from '@featherds/checkbox'
import { FeatherButton } from '@featherds/button'
import { FeatherIcon } from '@featherds/icon'
import DrawerSituations from '@/components/DrawerSituations.vue'
import { assignAlarmsToSituation } from '@/services/AlecService'
import { useRouter } from 'vue-router'
import ArrowBack from '@featherds/icon/navigation/ArrowBack'
import NewSituationBtn from '@/elements/NewSituationBtn.vue'
import { FeatherSnackbar } from '@featherds/snackbar'
import ChipListByProperty from '@/components/ChipListByProperty.vue'
import { FeatherExpansionPanel } from '@featherds/expansion'
import { groupBy, keys } from 'lodash'

const Icons = markRaw({
	ArrowBack,
	ExitToApp
})
const router = useRouter()
const situationStore = useSituationsStore()
situationStore.getUnassignedAlarms()
situationStore.getSituations()

const alarms = ref([])
const alarmIds = ref([]) as Ref<number[]>
const selectAll = ref(false)
const showSituations = ref(false)
const showErrorMsg = ref('')
const showError = ref(false)
const isError = ref(false)
const nodeFilters = ref(['all'])
const severityFilters = ref(['all'])
const byDateFilters = ref(['all'])

const showPanel = true
watch(
	() => situationStore.unassignedAlarms,
	() => {
		alarms.value = situationStore.unassignedAlarms
		nodeFilters.value = ['all']
		severityFilters.value = ['all']
		byDateFilters.value = ref(['all'])
	}
)

const addAlarm = (alarmId: number) => {
	if (!includes(alarmIds.value, alarmId)) {
		alarmIds.value.push(alarmId)
	} else {
		remove(alarmIds.value, (a) => a === alarmId)
	}
}

const updateListSeverities = (severities: string[]) => {
	severityFilters.value = severities
	updateList()
}

const updateListNodes = (nodes: string[]) => {
	nodeFilters.value = nodes
	updateList()
}

const updateList = () => {
	let alarmsFiltered = situationStore.unassignedAlarms
	if (!severityFilters.value.includes('all')) {
		alarmsFiltered = alarmsFiltered.filter((a) =>
			severityFilters.value.includes(a.severity)
		)
	}
	if (!nodeFilters.value.includes('all')) {
		alarmsFiltered = alarmsFiltered.filter((a) =>
			nodeFilters.value.includes(a.nodeLabel)
		)
	}
	alarms.value = alarmsFiltered
}

const handleSelect = () => {
	if (selectAll.value) {
		alarmIds.value = alarms.value.map((a) => a.id)
	} else {
		alarmIds.value = []
	}
}

const handleMoveToSituation = async (situationId: number) => {
	const resultMove = await assignAlarmsToSituation(situationId, alarmIds.value)
	if (resultMove) {
		situationStore.getUnassignedAlarms()
	} else {
		showError.value = true
		isError.value = true
		showErrorMsg.value = 'Error on moving the alarms :('
	}
	showSituations.value = false
}

const showSituationList = () => {
	router.push({
		name: 'situations'
	})
}

const handleMoveClick = () => {
	if (alarmIds.value.length) {
		showSituations.value = true
	} else {
		showError.value = true
		isError.value = false
		showErrorMsg.value = 'You need to choose at least one alarm!'
	}
}
</script>

<template>
	<div class="container">
		<div class="nav-btns">
			<FeatherButton primary @click="() => showSituationList()">
				<FeatherIcon :icon="Icons.ArrowBack" aria-hidden="true" class="icon" />
				<span>Situation List</span>
			</FeatherButton>
			<NewSituationBtn />
		</div>
		<h2>List Unassigned Alarms</h2>
		<div class="content">
			<div class="filters">
				<FeatherExpansionPanel title="By Severity" v-model="showPanel">
					<FiltersSeverity
						:alarms="situationStore.unassignedAlarms"
						@selected-severities="updateListSeverities"
						isVertical
					/>
				</FeatherExpansionPanel>
				<FeatherExpansionPanel title="By Node Label" v-model="showPanel">
					<ChipListByProperty
						:alarms="situationStore.unassignedAlarms"
						@selected-option="updateListNodes"
						property="nodeLabel"
					/>
					<ChipListByProperty
						:alarms="situationStore.unassignedAlarms"
						@selected-option="updateListNodes"
						property="firstEventTime"
						isDate
					/>
				</FeatherExpansionPanel>
			</div>
			<div class="list">
				<div class="action-btns">
					<FeatherCheckbox
						v-model="selectAll"
						label="selected"
						@update:modelValue="handleSelect"
					/>
					<FeatherButton @click="handleMoveClick">
						<FeatherIcon :icon="Icons.ExitToApp" class="icon move" />
						<span>Move</span>
					</FeatherButton>
				</div>

				<div v-if="alarms.length" class="alarms">
					<div v-for="alarm in alarms" :key="alarm.id" class="card">
						<UnassignedAlarmCard
							:selected="includes(alarmIds, alarm.id)"
							:alarm="alarm"
							@selected-alarm="addAlarm"
						/>
					</div>
				</div>
				<div v-else>There is no unassigned alarms</div>
			</div>
		</div>
		<DrawerSituations
			:situationId="0"
			:visible="showSituations"
			@situation-selected="handleMoveToSituation"
			@drawer-closed="() => (showSituations = false)"
		/>
		<FeatherSnackbar v-model="showError" center :error="isError">
			{{ showErrorMsg }}
			<template v-slot:button>
				<FeatherButton @click="showError = false" text>dismiss</FeatherButton>
			</template>
		</FeatherSnackbar>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.container {
	margin: var($spacing-m);
}

.content {
	display: flex;
	margin-top: var($spacing-m);
}

.filters {
	width: 330px;
	min-width: 20%;
	max-width: 20%;
	margin-right: 20px;
}

.list {
	width: 100%;
}
.nav-btns {
	display: flex;
	justify-content: space-between;
	margin-bottom: var($spacing-m);
}
.action-btns {
	background-color: white;
	padding: 12px 15px;
	border: 1px solid $border-grey;
	> * {
		margin-right: 10px;
	}
}

.alarms {
	height: 600px;
	overflow-y: auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	width: 100%;
	flex-wrap: wrap;
	align-content: flex-start;
}

.card {
	display: flex;
	width: 32.5%;
}

.icon {
	font-size: 18px;
	margin-right: 4px;
	vertical-align: sub;

	&.move {
		color: #7004f4;
		font-size: 20px;
	}
}

.layout-container {
	margin-bottom: 0;
}
</style>
