<script setup lang="ts">
import { FeatherButton } from '@featherds/button'
import CheckCircle from '@featherds/icon/action/CheckCircle'
import KeyboardArrowUp from '@featherds/icon/hardware/KeyboardArrowUp'
import MarkComplete from '@featherds/icon/action/MarkComplete'
import { sendAcknowledge, sendAction } from '@/services/AlarmService'
import { sendFeedbackAcceptSituation } from '@/services/AlecService'

import CONST from '@/helpers/constants'
import { TAlarm, TSituation } from '@/types/TSituation'

import { FeatherIcon } from '@featherds/icon'
import { useSituationsStore } from '@/store/useSituationsStore'

const props = defineProps<{
	alarm: TAlarm | TSituation
	direction: 'horizontal' | 'vertical'
	showClear?: boolean
	isSituation?: boolean
	situationId: number
}>()
const situationStore = useSituationsStore()

const handleAcknowledgeAction = async (isAck: boolean) => {
	const result = await sendAcknowledge(props.alarm.id, isAck)
	if (result) {
		situationStore.getSituation(props.situationId)
	}
	if (props.isSituation) {
		await sendFeedbackAcceptSituation(
			props.situationId,
			CONST.ACCEPTED.toLowerCase()
		)
	}
}

const handleAction = async (action: string) => {
	const result = await sendAction(props.alarm.id, action)
	if (result) {
		situationStore.getSituation(props.situationId)
	}
}
</script>
<template>
	<div
		class="action-btns-group"
		:class="props.direction === 'horizontal' ? 'horizontal' : 'vertical'"
	>
		<FeatherButton
			v-if="!alarm.ackTime"
			class="acction-btn"
			@click="() => handleAcknowledgeAction(true)"
		>
			<FeatherIcon :icon="CheckCircle" aria-hidden="true" class="icon ack" />
			<span>Acknowledge</span>
		</FeatherButton>
		<FeatherButton
			v-if="alarm.severity != 'CRITICAL'"
			class="acction-btn"
			@click="() => handleAction(CONST.ESCALATE)"
		>
			<FeatherIcon
				:icon="KeyboardArrowUp"
				aria-hidden="true"
				class="icon escalate"
			/>
			<span>Escalate</span>
		</FeatherButton>
		<FeatherButton
			v-if="
				props.showClear &&
				alarm.severity != 'NORMAL' &&
				alarm.severity != 'CLEARED'
			"
			class="acction-btn"
			@click="() => handleAction(CONST.CLEAR)"
		>
			<FeatherIcon :icon="MarkComplete" aria-hidden="true" class="icon clear" />
			<span>Clear</span>
		</FeatherButton>
	</div>
</template>

<style lang="scss" scoped>
.action-btns-group {
	display: flex;
	> button {
		margin-left: 0 !important;
	}

	&.vertical {
		flex-direction: column;
		> button {
			min-width: 170px;
			margin-bottom: 12px;
		}
		> button:last-child {
			margin-bottom: 0;
		}
	}
	&.horizontal {
		flex-direction: row;
		> button {
			margin-right: 12px;
		}
		> button:last-child {
			margin-right: 0;
		}
	}
}

.icon {
	font-size: 18px;
	margin-right: 4px;
	vertical-align: sub;

	&.ack {
		color: green;
	}
	&.unack {
		color: red;
	}
	&.escalate {
		color: #cc0000;
		font-size: 20px;
	}
	&.clear {
		color: blue;
	}
}
</style>
