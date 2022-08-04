<script setup lang="ts">
import SeverityStatus from '@/elements/SeverityStatus.vue'
import DateBox from '@/elements/DateBox.vue'
import { TSituation } from '@/types/TSituation'
import { FeatherIcon } from '@featherds/icon'
import CheckCircle from '@featherds/icon/action/CheckCircle'
import Cancel from '@featherds/icon/action/Cancel'
import { sendFeedbackAcceptSituation } from '@/services/AlecService'
import AlarmsCountBySeverity from '@/components/AlarmsCountBySeverity.vue'
import AlarmFilters from '@/components/AlarmFilters.vue'
import { FeatherButton } from '@featherds/button'
import { ref, watch } from 'vue'
import { useUserStore } from '@/store/useUserStore'

const userStore = useUserStore()

const props = defineProps<{
	alarmInfo: TSituation
}>()
const status = ref('')
const handleFeedbackSituation = (action: string) => {
	sendFeedbackAcceptSituation(props.alarmInfo?.id, action)
	status.value = action
}
watch(props, () => {
	status.value = ''
})
</script>

<template>
	<div class="section">
		<div v-if="userStore.allowSave" class="btn-row">
			<FeatherButton
				class="btn"
				:class="{ accepted: status == 'accepted' }"
				@click="() => handleFeedbackSituation('accepted')"
			>
				<FeatherIcon
					:icon="CheckCircle"
					aria-hidden="true"
					class="icon accept"
					:class="{ accepted: status == 'accepted' }"
				/>
				<span v-if="status == 'accepted'"> ACCEPTED</span>
				<span v-else> ACCEPT</span>
			</FeatherButton>
			<FeatherButton
				class="btn"
				:class="{ rejected: status == 'refused' }"
				@click="() => handleFeedbackSituation('refused')"
			>
				<FeatherIcon
					:icon="Cancel"
					aria-hidden="true"
					class="icon reject"
					:class="{ rejected: status == 'refused' }"
				/>
				<span v-if="status == 'refused'"> REJECTED</span>
				<span v-else> REJECT</span>
			</FeatherButton>
		</div>
		<div class="situation-detail">
			<div
				class="severity-line"
				:class="[`${props.alarmInfo?.severity?.toLowerCase()}-bg dark`]"
			></div>
			<div class="situation-info">
				<div class="id">
					<div>Situation {{ props.alarmInfo?.id }}</div>
					<SeverityStatus :severity="props.alarmInfo?.severity" />
				</div>
				<span v-html="props.alarmInfo.description"></span>
				<p>
					<strong>Reduction key:</strong>
					{{ props.alarmInfo.reductionKey }}
				</p>
				<div class="boxes">
					<DateBox
						label="First Event"
						:date="new Date(props.alarmInfo.firstEventTime).toUTCString()"
					/>
					<DateBox
						label="Last Event"
						:date="new Date(props.alarmInfo.lastEvent.time).toUTCString()"
					/>
				</div>
			</div>
			<div class="parameters">
				<AlarmsCountBySeverity
					:relatedAlarms="props.alarmInfo?.relatedAlarms"
					size="large"
				/>
			</div>
		</div>
	</div>
	<div class="section">
		<AlarmFilters :related-alarms="props.alarmInfo.relatedAlarms" />
	</div>
</template>
<style scoped lang="scss">
@import '@/styles/variables.scss';
@import '@featherds/table/scss/table';

.section {
	padding: 10px;
	background-color: $dark-blue;
	margin-bottom: 20px;
}
.btn-row {
	padding-bottom: 15px;
}
.severity-line {
	width: 4px;
	margin-right: 10px;
}
.situation-info {
	flex-grow: 1;
	margin-right: 50px;
}
.id {
	font-weight: 600;
	font-size: 20px;
	margin-bottom: 14px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.boxes {
	display: flex;
	flex-direction: row;
	> div {
		margin-right: 10px;
	}
}
.parameters {
	width: 20%;
	display: flex;
	padding-left: 20px;
	border-left: 1px solid $border-grey;
}
.accept {
	font-size: 16px;
	color: green !important;
}
.reject {
	font-size: 16px;
	color: red !important;
}
.situation-detail {
	display: flex;
	flex-direction: row;
	background-color: #ffffff;
	padding: 15px;
}
.alarm-list {
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	> div {
		width: 49%;
		margin-bottom: 20px;
	}
}
.clicked {
	border: 2px solid #4b5ad6;
}

.accepted {
	background-color: green !important;
	color: #ffffff !important;
}
.rejected {
	background-color: red !important;
	color: #ffffff !important;
}
</style>