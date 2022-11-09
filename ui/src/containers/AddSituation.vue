<script setup lang="ts">
import { FeatherTextarea } from '@featherds/textarea'
import Add from '@featherds/icon/action/Add'
import { FeatherButton } from '@featherds/button'
import { useRouter } from 'vue-router'
import FiltersSeverity from '@/components/FiltersSeverity.vue'

import { FeatherIcon } from '@featherds/icon'
import { useSituationsStore } from '@/store/useSituationsStore'
import { FeatherCheckbox } from '@featherds/checkbox'
import { truncateText } from '@/helpers/utils'
import ArrowBack from '@featherds/icon/navigation/ArrowBack'
import { remove } from 'lodash'

const router = useRouter()
const situationStore = useSituationsStore()

const descriptionText = ref()
const diagnosticText = ref()
const alarmIds = ref([])
const alarms = ref(situationStore.unassignedAlarms)
if (!alarms.value.length) {
	situationStore.getUnassignedAlarms()
}

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

const updatedSelect = (alarmId: number) => {
	if (!alarmIds.value.includes(alarmId)) {
		alarmIds.value.push(alarmId)
	} else {
		remove(alarmIds.value, (a) => a === alarmId)
	}
}

const createSituation = () => {
	console.log(alarmIds)
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
					label="Diagnostic Text"
					rows="4"
				></FeatherTextarea>
				<FeatherTextarea
					v-model="diagnosticText"
					label="Description"
					rows="4"
				></FeatherTextarea>
				<FeatherButton primary @click="createSituation">
					<FeatherIcon :icon="Add" aria-hidden="true" class="icon" />
					<span>Add Situation</span>
				</FeatherButton>
			</div>
			<div class="alarm-column">
				<h4>ALARMS TO ADD</h4>
				<FiltersSeverity :alarms="alarms" @selected-severities="updateList" />
				<div class="alarms">
					<div
						v-for="alarm in alarms"
						:key="alarm.id"
						:class="[`${alarm.severity.toLowerCase()}-bg`]"
						class="alarm"
					>
						<div class="alarmInfo">
							<FeatherCheckbox
								:modelValue="alarmIds.includes(alarm.id)"
								label="selected"
								@update:modelValue="() => updatedSelect(alarm.id)"
							/>

							<div class="alarm-title">
								{{ alarm.nodeLabel }} - {{ alarm.id }}
							</div>
							<div
								class="severity-status"
								:class="[`${alarm.severity.toLowerCase()}-bg dark`]"
							></div>
						</div>
						<div class="description">
							{{ truncateText(alarm.description, 380) }}
						</div>
					</div>
				</div>
			</div>
		</div>
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
}

.alarm-column {
	padding: 20px;
	border: 1px solid $border-grey;
	width: 100%;
	margin-left: 20px;
}

.alarms {
	height: 600px;
	overflow-y: auto;
	margin-top: 15px;
}

.alarm {
	margin-top: 15px;
}

.fields {
	width: 700px;
	> div {
		margin-bottom: 20px;
	}
}

.icon {
	font-size: 17px;
	margin-right: 5px;
}
.alarmInfo {
	display: flex;
	align-items: center;
	padding: 0 20px;
}

.alarm-title {
	font-size: 16px;
	font-weight: 600;
}
.severity-status {
	width: 15px;
	height: 15px;
	border-radius: 50px;
	margin-left: 10px;
}
.description {
	padding-left: 30px;
	font-size: 13px;
}

.layout-container {
	margin: 0;
}
</style>
