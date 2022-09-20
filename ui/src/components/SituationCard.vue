<script setup lang="ts">
import CheckCircle from '@featherds/icon/action/CheckCircle'
import {FeatherIcon} from '@featherds/icon'
import {groupBy, size} from 'lodash'
import Cancel from '@featherds/icon/action/Cancel'
import {TSituation} from '@/types/TSituation'
import CONST from '@/helpers/constants'

const ACCEPTED = CONST.ACCEPTED
const REJECTED = CONST.REJECTED

const props = defineProps<{
	situationInfo: TSituation
	selected: boolean
}>()
const emit = defineEmits(['situation-selected'])
const handleSituationSelected = () => {
	emit('situation-selected', props.situationInfo?.id)
}
</script>

<template>
	<div
		v-on:click="handleSituationSelected"
		class="card"
		:class="{
			selected: props.selected,
			rejected: props.situationInfo.status == REJECTED
		}"
	>
		<div
			class="severity-line"
			:class="[`${props.situationInfo?.severity?.toLowerCase()}-bg dark`]"
		></div>
		<div class="content">
			<div class="title-row">
				<div class="title">Situation [ {{ props.situationInfo?.id }} ]</div>
				<div v-if="props.situationInfo.status == ACCEPTED" class="accepted">
					<FeatherIcon
						:icon="CheckCircle"
						aria-hidden="true"
						class="icon accepted"
					/>
				</div>
				<div v-if="props.situationInfo.status == REJECTED" class="rejected">
					<FeatherIcon
						:icon="Cancel"
						aria-hidden="true"
						class="icon rejected"
					/>
				</div>
			</div>
			<div class="count-info">
				Alarms:
				<span class="count">{{ props.situationInfo.alarms.length }}</span>
				Nodes:<span class="count">
					{{ size(groupBy(props.situationInfo.alarms, 'nodeId')) }}</span
				>
			</div>
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
	min-width: 4px;
	width: 4px;
}
.content {
	padding: 10px;
	display: flex;
	flex-direction: column;
	width: 100%;
}
.icon {
	font-size: 24px;
}
.accepted {
	color: green;
}

.rejected {
	color: red;
}

.count-info {
	display: flex;
}

.count {
	font-size: 18px;
	font-weight: 600;
	padding-right: 8px;
	padding-left: 3px;
	color: #323647;
}
</style>
