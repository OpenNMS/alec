<script setup lang="ts">
import AlarmsCountBySeverity from '@/components/AlarmsCountBySeverity.vue'
import CheckCircle from '@featherds/icon/action/CheckCircle'
import { FeatherIcon } from '@featherds/icon'
import Cancel from '@featherds/icon/action/Cancel'
import { TSituation } from '@/types/TSituation'
import CONST from '@/helpers/constants'
const ACCEPTED = CONST.ACCEPTED
const REJECTED = CONST.REJECTED

const props = defineProps<{
	alarmInfo: TSituation
	selected: boolean
}>()
const emit = defineEmits(['situation-selected'])
const handleSituationSelected = () => {
	emit('situation-selected', props.alarmInfo?.id)
}
</script>

<template>
	<div
		v-on:click="handleSituationSelected"
		class="card"
		:class="{
			selected: props.selected,
			rejected: props.alarmInfo.status == REJECTED
		}"
	>
		<div
			class="severity-line"
			:class="[`${props.alarmInfo?.severity?.toLowerCase()}-bg dark`]"
		></div>
		<div class="content">
			<div class="title-row">
				<div class="title">[ {{ props.alarmInfo?.id }} ]</div>
				<div v-if="props.alarmInfo.status == ACCEPTED" class="accepted">
					<FeatherIcon
						:icon="CheckCircle"
						aria-hidden="true"
						class="icon accepted"
					/>
				</div>
				<div v-if="props.alarmInfo.status == REJECTED" class="rejected">
					<FeatherIcon
						:icon="Cancel"
						aria-hidden="true"
						class="icon rejected"
					/>
				</div>
			</div>
			<AlarmsCountBySeverity :alarms="props.alarmInfo?.alarms" size="normal" />
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.card {
	width: 250px;
	height: auto;
	display: flex;
	flex-direction: row;
	background-color: #ffffff;
	cursor: pointer;
	border: 1px solid $border-grey;
	&:hover {
		border: 1px solid $dark-blue;
	}
	&.selected {
		border: 1px solid $dark-blue;
	}

	&.rejected {
		background-color: #f3f3f3;
		opacity: 0.4;
	}
}
.title-row {
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;
}
.title {
	font-size: 18px;
	font-weight: 600;
	word-break: break-all;
	margin-right: 5px;
}
.severity-line {
	width: 4px;
}
.content {
	padding: 10px;
	display: flex;
	flex-direction: column;
	width: 100%;
}

.accepted {
	font-size: 25px;
	color: green;
}

.rejected {
	font-size: 25px;
	color: red;
}
</style>
