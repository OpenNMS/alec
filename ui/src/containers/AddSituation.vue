<script setup lang="ts">
import { FeatherTextarea } from '@featherds/textarea'
import Add from '@featherds/icon/action/Add'
import Cancel from '@featherds/icon/navigation/Cancel'

import { FeatherButton } from '@featherds/button'
import useRouter from '@/composables/useRouter'

import ChipListByProperty from '@/components/ChipListByProperty.vue'
import CommonFilters from '@/components/CommonFilters.vue'

import { TNewSituation, TAlarm } from '@/types/TSituation'
import { FeatherSnackbar } from '@featherds/snackbar'
import { FeatherIcon } from '@featherds/icon'
import { useSituationsStore } from '@/store/useSituationsStore'
import UnassignedAlarmCard from '@/components/UnassignedAlarmCard.vue'
import ArrowBack from '@featherds/icon/navigation/ArrowBack'
import { remove, includes } from 'lodash'
import { createSituations } from '@/services/AlecService'
import type { Ref } from 'vue'
import { ref, watch } from 'vue'
import NoResults from '@/elements/NoResults.vue'

const router = useRouter()
const situationStore = useSituationsStore()

const descriptionText = ref()
const descriptionError = ref('')

const diagnosticText = ref()
const diagnosticError = ref('')

const alarmIds = ref([]) as Ref<number[]>
const errorAlarmList = ref(false)
const errorSave = ref()

const alarms = ref(situationStore.unassignedAlarms)

if (!alarms.value.length) {
	situationStore.getUnassignedAlarms()
}

watch(
	() => situationStore.unassignedAlarms,
	() => {
		alarms.value = situationStore.unassignedAlarms
	}
)

const showSituationList = () => {
	router.push({
		name: 'situations'
	})
}

const addAlarm = (alarmId: number) => {
	errorAlarmList.value = false
	if (!includes(alarmIds.value, alarmId)) {
		alarmIds.value.push(alarmId)
	} else {
		remove(alarmIds.value, (a) => a === alarmId)
	}
}

const validateForm = () => {
	const errorMsg = 'This field should not be empty'
	let isValid = true
	if (!descriptionText.value) {
		descriptionError.value = errorMsg
		isValid = false
	}
	if (!diagnosticText.value) {
		diagnosticError.value = errorMsg
		isValid = false
	}
	if (alarmIds.value.length < 2) {
		errorAlarmList.value = true
		isValid = false
	}
	return isValid
}

const createSituation = async () => {
	if (validateForm()) {
		const situationInfo: TNewSituation = {
			alarmIdList: alarmIds.value,
			diagnosticText: diagnosticText.value,
			description: descriptionText.value
		}
		const result = await createSituations(situationInfo)
		if (!result) {
			errorSave.value = true
		} else {
			router.push({
				name: 'situations'
			})
		}
	}
}

const cleanFields = () => {
	descriptionText.value = ''
	diagnosticText.value = ''
	alarmIds.value = []
	alarms.value = situationStore.unassignedAlarms
}

const filterList = (list: TAlarm[]) => {
	alarms.value = list
}
</script>

<template>
	<div class="container">
		<FeatherButton primary @click="() => showSituationList()" class="back-btn">
			<FeatherIcon :icon="ArrowBack" aria-hidden="true" class="icon" />
			<span>Situation List</span>
		</FeatherButton>
		<h2>New Situation</h2>
		<div class="form">
			<div class="fields">
				<FeatherTextarea
					v-model="descriptionText"
					label="Description"
					rows="5"
					:error="descriptionError"
				></FeatherTextarea>
				<FeatherTextarea
					v-model="diagnosticText"
					label="Diagnostic Text"
					rows="5"
					:error="diagnosticError"
				></FeatherTextarea>
				<div v-if="errorAlarmList" class="errorList">
					You must add at least 2 alarms.
				</div>
				<div class="footer">
					<FeatherButton class="btn" @click="cleanFields">
						<FeatherIcon :icon="Cancel" aria-hidden="true" class="icon" />
						<span>Clear</span>
					</FeatherButton>
					<FeatherButton class="btn-add" @click="createSituation">
						<FeatherIcon :icon="Add" aria-hidden="true" class="icon" />
						<span>Add Situation</span>
					</FeatherButton>
				</div>
			</div>
			<div class="alarm-column">
				<div class="header-alarms">
					<h3>Add Unassociated Alarms</h3>
					<div>
						<div class="totalAlarms" :class="{ errorList: errorAlarmList }">
							Total Alarms Added:
							<span class="total">{{ alarmIds.length }}</span>
						</div>
					</div>
				</div>
				<div class="list">
					<div class="filters">
						<CommonFilters
							:list="situationStore.unassignedAlarms"
							@filtered-list="filterList"
							isOpen
						/>
					</div>
					<div v-if="alarms.length" class="alarms">
						<div v-for="alarm in alarms" :key="alarm.id" class="alarm-card">
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
		<FeatherSnackbar v-model="errorSave" right error :timeout="6000">
			Error on creating new situation :(
			<template v-slot:button>
				<FeatherButton @click="errorSave = false" text>dismiss</FeatherButton>
			</template>
		</FeatherSnackbar>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.back-btn {
	margin-bottom: 20px;
}

.form {
	display: flex;
	background-color: white;
	border: 1px solid $border-grey;
	padding: 20px;
	margin-top: 20px;
	min-height: 750px;
}

.alarm-column {
	width: 100%;
	margin-left: 20px;
	border: 1px solid gray;
	padding: 10px 15px;
	border-radius: 5px;
}

.alarms {
	height: 650px;
	overflow-y: auto;
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	width: 100%;
	flex-wrap: wrap;
	align-content: flex-start;
}
.alarm-card {
	width: 49%;
}

.fields {
	display: flex;
	flex-direction: column;
	width: 600px;
	> div {
		margin-bottom: 20px;
	}
}

.btn {
	display: flex;
	align-items: center;
}

.btn-add {
	height: 36px !important;
	background-color: #46ae46 !important;
	color: white !important;
}

.icon {
	font-size: 19px;
	margin-right: 5px;
}

.totalAlarms {
	font-size: 16px;
}

.total {
	font-size: 18px;
}

.errorList {
	color: #d43d45;
}

.layout-container {
	margin: 0;
}

.footer {
	flex-grow: 1;
	display: flex;
	align-items: end;
}

.list {
	display: flex;
}

.filters {
	min-width: 30%;
	margin-right: 15px;
	margin-top: 9px;
}

.header-alarms {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
}
</style>
