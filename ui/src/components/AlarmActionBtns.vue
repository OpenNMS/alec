<script setup lang="ts">
import { FeatherButton } from '@featherds/button'
import CheckCircle from '@featherds/icon/action/CheckCircle'
import Remove from '@featherds/icon/action/Remove'
import KeyboardArrowUp from '@featherds/icon/hardware/KeyboardArrowUp'
import MarkComplete from '@featherds/icon/action/MarkComplete'
import { sendAcknowledge, sendAction } from '@/services/AlarmService'
import CONST from '@/helpers/constants'
import { TAlarm, TSituation } from '@/types/TSituation'

import { FeatherIcon } from '@featherds/icon'
import { useSituationsStore } from '@/store/useSituationsStore'

const props = defineProps<{
	alarm: TAlarm | TSituation
	direction: 'horizontal' | 'vertical'
}>()
const situationStore = useSituationsStore()
const handleAcknowledgeAction = (isAck: boolean) => {
	sendAcknowledge(props.alarm.id, isAck)
}

const handleAction = async (action: string) => {
	const result = await sendAction(props.alarm.id, action)
	if (result) {
		situationStore.getSituations()
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
			class="acction-btn"
			@click="() => handleAction(CONST.ESCALATE)"
		>
			<FeatherIcon :icon="KeyboardArrowUp" aria-hidden="true" class="icon" />
			<span>Escalate</span>
		</FeatherButton>
		<FeatherButton
			v-if="alarm.severity != 'NORMAL' && alarm.severity != 'CLEARED'"
			class="acction-btn"
			@click="() => handleAction(CONST.CLEAR)"
		>
			<FeatherIcon :icon="MarkComplete" aria-hidden="true" class="icon" />
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
			min-width: 180px;
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
	font-size: 20px;
	margin-right: 4px;
	vertical-align: sub;
}
</style>
