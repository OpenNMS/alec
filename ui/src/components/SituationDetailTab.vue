<script setup lang="ts">
import SeverityStatus from '@/elements/SeverityStatus.vue'
import InformationBox from '@/elements/InformationBox.vue'
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
import { formatDate } from '@/helpers/utils'
import CONST from '@/helpers/constants'
import { groupBy, size } from 'lodash'

const ACCEPTED = CONST.ACCEPTED
const REJECTED = CONST.REJECTED

const userStore = useUserStore()
const emit = defineEmits(['situation-status-changed'])

const props = defineProps<{
	situationInfo: TSituation
}>()
const status = ref(props.situationInfo.status)

const handleFeedbackSituation = (action: string) => {
	sendFeedbackAcceptSituation(props.situationInfo?.id, action.toLowerCase())
	status.value = action
	emit('situation-status-changed', action, props.situationInfo?.id)
}
watch(props, () => {
	status.value = props.situationInfo.status || ''
})
</script>

<template>
	<div class="section">
		<div v-if="userStore.allowSave" class="btn-row">
			<FeatherButton
				v-if="status !== REJECTED"
				class="btn"
				data-test="btn-accept"
				:class="{ accepted: status == ACCEPTED }"
				@click="() => handleFeedbackSituation(ACCEPTED)"
			>
				<FeatherIcon
					:icon="CheckCircle"
					aria-hidden="true"
					class="icon accept"
					:class="{ accepted: status == ACCEPTED }"
				/>
				<span v-if="status == ACCEPTED"> {{ ACCEPTED }}</span>
				<span v-else> ACCEPT</span>
			</FeatherButton>
			<FeatherButton
				class="btn"
				:class="{ rejected: status == REJECTED }"
				@click="() => handleFeedbackSituation(REJECTED)"
			>
				<FeatherIcon
					:icon="Cancel"
					aria-hidden="true"
					class="icon reject"
					:class="{ rejected: status == REJECTED }"
				/>
				<span v-if="status == REJECTED"> {{ REJECTED }}</span>
				<span v-else> REJECT</span>
			</FeatherButton>
		</div>
		<div v-if="props.situationInfo" class="situation-detail">
			<div
				class="severity-line"
				:class="[`${props.situationInfo?.severity?.toLowerCase()}-bg dark`]"
			></div>
			<div class="situation-info">
				<div class="id">
					<div>
						Situation - {{ props.situationInfo?.id }} - affecting
						{{ size(groupBy(props.situationInfo?.alarms, 'nodeId')) }} node
						<span v-if="props.situationInfo.alarms"
							>having {{ props.situationInfo.alarms.length }} alarms
						</span>
					</div>
					<SeverityStatus :severity="props.situationInfo?.severity" />
				</div>

				<span v-html="props.situationInfo.description"></span>
				<p></p>
				<div class="boxes">
					<InformationBox
						label="First Event"
						:info="formatDate(props.situationInfo.firstEventTime)"
					/>
					<InformationBox
						label="Last Event"
						:info="formatDate(props.situationInfo.lastEventTime)"
					/>
					<InformationBox
						label="Reduction Key"
						:info="props.situationInfo.reductionKey"
					/>
				</div>
			</div>
			<div class="parameters">
				<AlarmsCountBySeverity
					:alarms="props.situationInfo?.alarms"
					size="large"
				/>
			</div>
		</div>
	</div>
	<div
		v-if="props.situationInfo.alarms && props.situationInfo.alarms.length > 0"
	>
		<AlarmFilters :alarms="props.situationInfo.alarms" />
	</div>
</template>
<style scoped lang="scss">
@import '@/styles/variables.scss';
@import '@featherds/table/scss/table';

.btn-row {
	padding: 15px;
	border: 1px solid $border-grey;
	margin-bottom: 20px;
	background-color: #ffffff;
	margin-top: 10px;
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
	font-size: 19px;
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
	margin-right: 3px;
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
	border: 1px solid $border-grey;
	margin-bottom: 20px;
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
	margin-right: 3px;

	color: #ffffff !important;
}
</style>
