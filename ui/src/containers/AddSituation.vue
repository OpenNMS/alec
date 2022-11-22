<script setup lang="ts">
import { FeatherTextarea } from '@featherds/textarea'
import Add from '@featherds/icon/action/Add'
import Cancel from '@featherds/icon/navigation/Cancel'

import { FeatherButton } from '@featherds/button'
import { useRouter } from 'vue-router'
import FiltersSeverity from '@/components/FiltersSeverity.vue'
import { TNewSituation } from '@/types/TSituation'
import { FeatherSnackbar } from '@featherds/snackbar'
import { FeatherIcon } from '@featherds/icon'
import { useSituationsStore } from '@/store/useSituationsStore'
import UnassignedAlarmCard from '@/components/UnassignedAlarmCard.vue'
import ArrowBack from '@featherds/icon/navigation/ArrowBack'
import { remove, includes } from 'lodash'
import { createSituations } from '@/services/AlecService'
import type { Ref } from 'vue'
import { ref, watch } from 'vue'

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

const updateList = (severities: string[]) => {
	if (severities.includes('all')) {
		alarms.value = situationStore.unassignedAlarms
	} else {
		alarms.value = situationStore.unassignedAlarms.filter((a) =>
			severities.includes(a.severity)
		)
	}
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
					rows="4"
					:error="descriptionError"
				></FeatherTextarea>
				<FeatherTextarea
					v-model="diagnosticText"
					label="Diagnostic Text"
					rows="4"
					:error="diagnosticError"
				></FeatherTextarea>
				<div>
					<div class="totalAlarms" :class="{ errorList: errorAlarmList }">
						Total alarms added:
						<span class="total">{{ alarmIds.length }}</span>
					</div>
					<div v-if="errorAlarmList" class="errorList">
						It is required to add at least 2 alarms
					</div>
				</div>
				<div class="footer">
					<FeatherButton class="btn" primary @click="cleanFields">
						<FeatherIcon :icon="Cancel" aria-hidden="true" class="icon" />
						<span>Clear</span>
					</FeatherButton>
					<FeatherButton class="btn" primary @click="createSituation">
						<FeatherIcon :icon="Add" aria-hidden="true" class="icon" />
						<span>Add Situation</span>
					</FeatherButton>
				</div>
			</div>
			<div class="alarm-column">
				<h4>Add Unassociated Alarms</h4>
				<FiltersSeverity
					:alarms="situationStore.unassignedAlarms"
					@selected-severities="updateList"
				/>
				<div v-if="alarms.length" class="alarms">
					<div
						v-for="alarm in alarms"
						:key="alarm.id"
						class="alarm-card"
						:class="{ selected: includes(alarmIds, alarm.id) }"
					>
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
		<FeatherSnackbar v-model="errorSave" center error>
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
	min-height: 650px;
}

.alarm-column {
	width: 100%;
	margin-left: 20px;
}

.alarms {
	height: 600px;
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
	&.selected {
		border: 1px solid #273180;
	}
}

.fields {
	display: flex;
	flex-direction: column;
	width: 700px;
	> div {
		margin-bottom: 0px;
	}
}

.btn {
	display: flex;
	align-items: center;
}

.icon {
	font-size: 19px;
	margin-right: 5px;
}
.severity-status {
	width: 15px;
	height: 15px;
	border-radius: 50px;
	margin-right: 10px;
}

.add-btn {
	justify-content: end;
	display: flex;
}

.totalAlarms {
	font-size: 14px;
	padding: 10px;
	border: 1px solid rgba(10, 12, 27, 0.9);
	width: 100%;
	border-radius: 4px;
	justify-content: space-between;
	display: flex;
}

.total {
	font-size: 18px;
}

.errorList {
	font-size: 12px;
	color: #d43d45;
	padding-left: 20px;
}

.layout-container {
	margin: 0;
}

.footer {
	flex-grow: 1;
	display: flex;
	align-items: end;
}
</style>
