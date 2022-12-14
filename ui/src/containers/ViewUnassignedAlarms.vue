<script setup lang="ts">
import UnassignedAlarmCard from '@/components/UnassignedAlarmCard.vue'
import { useSituationsStore } from '@/store/useSituationsStore'
import type { Ref } from 'vue'
import { ref, watch, markRaw } from 'vue'
import { remove, includes } from 'lodash'
import ExitToApp from '@featherds/icon/action/ExitToApp'
import { FeatherCheckbox } from '@featherds/checkbox'
import { FeatherButton } from '@featherds/button'
import { FeatherIcon } from '@featherds/icon'
import DrawerSituations from '@/components/DrawerSituations.vue'
import { assignAlarmsToSituation } from '@/services/AlecService'
import ArrowBack from '@featherds/icon/navigation/ArrowBack'
import NewSituationBtn from '@/elements/NewSituationBtn.vue'
import { FeatherSnackbar } from '@featherds/snackbar'
import { TAlarm } from '@/types/TSituation'
import useRouter from '@/composables/useRouter'
import CommonFilters from '@/components/CommonFilters.vue'
import NoResults from '@/elements/NoResults.vue'
import { FeatherSpinner } from '@featherds/progress'

const Icons = markRaw({
	ArrowBack,
	ExitToApp
})
const router = useRouter()
const situationStore = useSituationsStore()
situationStore.getUnassignedAlarms()
situationStore.getSituations()
if (!situationStore.nodes.length) {
	situationStore.getNodes()
}

const alarms = ref([]) as Ref<TAlarm[]>
const alarmIds = ref([]) as Ref<number[]>
const selectAll = ref(false)
const showSituations = ref(false)
const showErrorMsg = ref('')
const showError = ref(false)
const isError = ref(false)
const loading = ref(true)

watch(
	() => situationStore.unassignedAlarms,
	() => {
		alarms.value = situationStore.unassignedAlarms
		loading.value = false
	}
)

const addAlarm = (alarmId: number) => {
	if (!includes(alarmIds.value, alarmId)) {
		alarmIds.value.push(alarmId)
	} else {
		remove(alarmIds.value, (a) => a === alarmId)
	}
}

const handleSelect = () => {
	if (selectAll.value) {
		alarmIds.value = alarms.value.map((a: TAlarm) => a.id)
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
const filterList = (alarmsFiltered: TAlarm[]) => {
	alarms.value = alarmsFiltered
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
		<h2>List Unassociated Alarms</h2>
		<div class="content">
			<div class="filters">
				<CommonFilters
					:list="situationStore.unassignedAlarms"
					@filtered-list="filterList"
					isOpen
				/>
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
				<FeatherSpinner class="spinner" v-if="loading" />
				<div v-else>
					<div v-if="alarms.length" class="alarms">
						<div v-for="alarm in alarms" :key="alarm.id" class="card">
							<UnassignedAlarmCard
								:selected="includes(alarmIds, alarm.id)"
								:alarm="alarm"
								@selected-alarm="addAlarm"
							/>
						</div>
					</div>
					<NoResults v-else />
				</div>
			</div>
		</div>
		<DrawerSituations
			:situationId="0"
			:visible="showSituations"
			@situation-selected="handleMoveToSituation"
			@drawer-closed="() => (showSituations = false)"
		/>
		<FeatherSnackbar v-model="showError" right :error="isError">
			{{ showErrorMsg }}
			<template v-slot:button>
				<FeatherButton @click="showError = false" text>dismiss</FeatherButton>
			</template>
		</FeatherSnackbar>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.content {
	display: flex;
	margin-top: var($spacing-m);
}

.filters {
	width: 330px;
	min-width: 20%;
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
	height: 800px;
	overflow-y: auto;
	display: flex;
	flex-wrap: nowrap;
	width: 100%;
	flex-wrap: wrap;
	align-content: flex-start;
	margin-top: var($spacing-m);
	> div {
		margin-right: 1%;
	}
	> div:nth-child(3n) {
		margin-right: 0;
	}
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

.filters {
	min-width: 20%;
	background-color: white;
	margin-right: 15px;
	border: 1px solid $border-grey;
}

.layout-container {
	margin-bottom: 0 !important;
}
.spinner {
	margin: 100px auto;
}
</style>
