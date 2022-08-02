<script setup lang="ts">
import SeverityStatus from '@/elements/SeverityStatus.vue'
import DateBox from '@/elements/DateBox.vue'
import {
	FeatherTab,
	FeatherTabContainer,
	FeatherTabPanel
} from '@featherds/tabs'
import { TSituation } from '@/types/TSituation'
import { FeatherIcon } from '@featherds/icon'
import CheckCircle from '@featherds/icon/action/CheckCircle'
import Cancel from '@featherds/icon/action/Cancel'
import { sendFeedbackAcceptSituation } from '@/services/AlecService'
import AlarmsCountBySeverity from '@/components/AlarmsCountBySeverity.vue'
import AlarmFilters from '@/components/AlarmFilters.vue'
import AlarmDetail from '@/components/AlarmDetail.vue'
import { FeatherButton } from '@featherds/button'
import { FeatherChipList, FeatherChip } from '@featherds/chips'
import { reactive, onUpdated } from 'vue'
import { groupBy, keys } from 'lodash'
/*const state = reactive({
	alarmFilters: [],
	selectedFilters: ['all']
})*/
const props = defineProps<{
	alarmInfo: TSituation
}>()
const status = ref('')
const handleFeedbackSituation = (action: string) => {
	sendFeedbackAcceptSituation(props.alarmInfo?.id, action)
	status.value = action
}
/*
const handleAlarmFilters = (selected: string) => {
	if (state.selectedFilters.includes(selected)) {
		state.selectedFilters = state.selectedFilters.filter((f) => f !== selected)
		if (state.selectedFilters.length == 0) {
			state.selectedFilters.push('all')
		}
	} else {
		state.selectedFilters = state.selectedFilters.filter((f) => f !== 'all')
		state.selectedFilters.push(selected)
	}
	console.log(state.selectedFilters)
}
*/
onUpdated(() => {
	//	state.alarmFilters = keys(groupBy(props.alarmInfo?.relatedAlarms, 'severity'))
})
</script>

<template>
	<div v-if="props.alarmInfo" class="detail">
		<FeatherTabContainer>
			<template v-slot:tabs>
				<FeatherTab>Details</FeatherTab>
				<!-- <FeatherTab>Topology</FeatherTab>
				<FeatherTab>Metrics</FeatherTab> -->
			</template>
			<FeatherTabPanel class="panel">
				<div class="section">
					<div class="btn-row">
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
					<!--<div class="alarm-list">
						<div
							v-for="alarmInfo in props.alarmInfo.relatedAlarms"
							:key="alarmInfo.id"
						>
							<AlarmDetail :id="alarmInfo.id" />
						</div>
					</div>-->
				</div>
			</FeatherTabPanel>
			<!-- <FeatherTabPanel class="panel">Topology</FeatherTabPanel>
			<FeatherTabPanel class="panel">Metrics</FeatherTabPanel> -->
		</FeatherTabContainer>
	</div>
</template>
<style scoped lang="scss">
@import '@/styles/variables.scss';
@import '@featherds/table/scss/table';
.detail {
	width: 100%;
	background-color: #ffffff;
	margin-left: 20px;
}
.panel {
}
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
	width: 18%;
	align-self: center;
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
	> div {
		margin-bottom: 15px;
	}
	border-left: 1px solid $border-grey;
}
table {
	width: 100%;
	@include table();
	@include row-select();
	&.hover {
		@include row-hover();
	}
	&.condensed {
		@include table-condensed();
	}
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
