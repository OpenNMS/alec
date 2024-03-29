<script setup lang="ts">
import SeverityStatus from '@/elements/SeverityStatus.vue'
import InformationBox from '@/elements/InformationBox.vue'
import { TSituation } from '@/types/TSituation'
import { FeatherIcon } from '@featherds/icon'
import Cancel from '@featherds/icon/action/Cancel'
import { sendFeedbackAcceptSituation } from '@/services/AlecService'
import AlarmsCountBySeverity from '@/components/AlarmsCountBySeverity.vue'
import AlarmsListContainer from '@/components/AlarmsListContainer.vue'
import MemoBox from '@/components/MemoBox.vue'

import { FeatherButton } from '@featherds/button'
import { ref, watch } from 'vue'
import { useUserStore } from '@/store/useUserStore'
import { formatDate } from '@/helpers/utils'
import CONST from '@/helpers/constants'
import { groupBy, size } from 'lodash'
import AlarmActionBtns from '@/components/AlarmActionBtns.vue'
import { useSituationsStore } from '@/store/useSituationsStore'
import { useAppStore } from '@/store/useAppStore'

const appStore = useAppStore()
const situationStore = useSituationsStore()

const REJECTED = CONST.REJECTED

const userStore = useUserStore()

const props = defineProps<{
	situationInfo: TSituation
}>()
const status = ref(props.situationInfo.status)
const situationInfo = ref(props.situationInfo)

watch(props, () => {
	status.value = props.situationInfo.status || ''
	situationInfo.value = props.situationInfo
})

const handleFeedbackSituation = async (action: string) => {
	const result = await sendFeedbackAcceptSituation(
		props.situationInfo?.id,
		action.toLowerCase()
	)
	if (result) {
		status.value = action
		situationStore.getSituation(props.situationInfo.id)
	} else {
		appStore.showErrorMsg('Error on rejecting the situation')
	}
}
</script>

<template>
	<div class="section">
		<div class="action-section">
			<AlarmActionBtns
				:alarm="situationInfo"
				:direction="'horizontal'"
				showClear
				isSituation
				:situation-id="props.situationInfo.id"
			/>

			<div v-if="userStore.allowSave" class="btn-row">
				<FeatherButton
					class="btn"
					data-test="btn-reject"
					:class="{ rejected: status == REJECTED }"
					@click="handleFeedbackSituation(REJECTED)"
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
		</div>
		<div v-if="situationInfo" class="situation-detail">
			<div
				class="severity-line"
				:class="[`${situationInfo?.severity?.toLowerCase()}-bg dark`]"
			></div>
			<div class="situation-info">
				<div class="id">
					<div>
						Situation - {{ situationInfo?.id }} -
						{{ situationInfo.alarms.length }} alarm(s) affects
						{{ size(groupBy(situationInfo?.alarms, 'nodeId')) }} node(s)
					</div>
					<SeverityStatus :severity="situationInfo?.severity" />
				</div>
				<span v-html="situationInfo.description"></span>
				<p></p>
				<div class="boxes">
					<InformationBox
						label="First Event"
						:info="formatDate(situationInfo.firstEventTime)"
					/>
					<InformationBox
						label="Last Event"
						:info="formatDate(situationInfo.lastEventTime)"
					/>
					<InformationBox
						label="Reduction Key"
						:info="situationInfo.reductionKey"
					/>
				</div>
			</div>
			<div class="parameters">
				<AlarmsCountBySeverity :alarms="situationInfo?.alarms" size="large" />
			</div>
		</div>
		<div class="section memo-boxes">
			<MemoBox
				:id="situationInfo?.id"
				:situationId="situationInfo?.id"
				label="Sticky Memo"
				type="memo"
				:memo="situationInfo?.stickyMemo"
			/>
			<MemoBox
				:id="situationInfo?.id"
				:situationId="situationInfo?.id"
				label="Journal Memo"
				type="journal"
				:memo="situationInfo?.reductionKeyMemo"
			/>
		</div>
	</div>
	<div v-if="situationInfo.alarms && situationInfo.alarms.length">
		<AlarmsListContainer
			:alarms="situationInfo.alarms"
			:situation-id="situationInfo.id"
		/>
	</div>
</template>
<style scoped lang="scss">
@import '@/styles/variables.scss';

.action-section {
	padding: 15px;
	border: 1px solid $border-grey;
	margin-bottom: 20px;
	background-color: #ffffff;
	margin-top: 10px;
	display: flex;
	flex-direction: row;
	> div {
		margin-right: 15px;
	}
}

.severity-line {
	width: 5px;
	min-width: 5px;
	margin-right: 10px;
}
.situation-info {
	flex-grow: 1;
	margin-right: 20px;
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

.memo-boxes {
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	> div {
		width: 49%;
	}
}
.memo2 {
	display: flex;
	flex-direction: column;
}

.parameters {
	width: 20%;
	min-width: 180px;
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
