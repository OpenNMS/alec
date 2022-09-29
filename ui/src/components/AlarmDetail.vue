<script setup lang="ts">
import SeverityStatus from '@/elements/SeverityStatus.vue'
import { formatDate } from '@/helpers/utils'
import { TAlarm } from '@/types/TSituation'
import { FeatherButton } from '@featherds/button'
import CheckCircle from '@featherds/icon/action/CheckCircle'
import Remove from '@featherds/icon/action/Remove'
import KeyboardArrowUp from '@featherds/icon/hardware/KeyboardArrowUp'
import MarkComplete from '@featherds/icon/action/MarkComplete'
import { sendAcknowledge, sendAction } from '@/services/AlarmService'
import CONST from '@/helpers/constants'

import { FeatherIcon } from '@featherds/icon'
import { useSituationsStore } from '@/store/useSituationsStore'

const situationStore = useSituationsStore()

const props = defineProps<{
	alarm: TAlarm
}>()

const handleAcknowledgeAction = (isAck: boolean) => {
	sendAcknowledge(props.alarm.id, isAck)
}

const handleAction = async (action: string) => {
	const result = await sendAction(props.alarm.id, action)
	if (result) {
		console.log(result)
		situationStore.getSituations()
	}
}
</script>

<template>
	<div class="card" v-if="props.alarm">
		<div>
			<div class="row">
				<div class="title">{{ alarm.nodeLabel }} - {{ alarm.id }}</div>
				<SeverityStatus :severity="alarm?.severity" />
			</div>

			<div class="description" v-html="alarm.description"></div>
			<div>
				<strong>First Event</strong>
				- {{ formatDate(alarm.firstTime) }}
			</div>

			<div>
				<strong>Last Event</strong>
				- {{ formatDate(alarm.time) }}
			</div>
		</div>
		<div class="action-btns-group">
			<FeatherButton
				v-if="!alarm.ackTime"
				secondary
				class="acction-btn"
				@click="() => handleAcknowledgeAction(true)"
			>
				<FeatherIcon :icon="CheckCircle" aria-hidden="true" class="icon" />
				<span>Acknowledge</span>
			</FeatherButton>
			<FeatherButton
				v-if="alarm.ackTime"
				secondary
				class="acction-btn"
				@click="() => handleAcknowledgeAction(false)"
			>
				<FeatherIcon :icon="Remove" aria-hidden="true" class="icon" />
				<span>Unacknowledge</span>
			</FeatherButton>
			<FeatherButton
				v-if="alarm.severity != 'CRITICAL'"
				secondary
				class="acction-btn"
				@click="() => handleAction(CONST.ESCALATE)"
			>
				<FeatherIcon :icon="KeyboardArrowUp" aria-hidden="true" class="icon" />
				<span>Escalate</span>
			</FeatherButton>
			<FeatherButton
				secondary
				v-if="alarm.severity != 'NORMAL'"
				class="acction-btn"
				@click="() => handleAction(CONST.CLEAR)"
			>
				<FeatherIcon :icon="MarkComplete" aria-hidden="true" class="icon" />
				<span>Clear</span>
			</FeatherButton>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.card {
	padding: 15px;
	border: 1px solid $border-grey;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.row {
	display: flex;
	flex-direction: row;
	padding: 5px 0;
}
.title {
	font-size: 18px;
	font-weight: 600;
	word-break: break-all;
	margin-right: 10px;
}

.description {
	word-break: break-word;
}

.action-btns-group {
	display: flex;
	flex-direction: column;
	> button {
		margin-bottom: 12px;
		min-width: 180px;
		margin-left: 0 !important;
	}
	> button:last-child {
		width: 160px;

		margin-bottom: 0;
	}
}

.icon {
	font-size: 20px;
	margin-right: 4px;
	vertical-align: sub;
}
</style>
