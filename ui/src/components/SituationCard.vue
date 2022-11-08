<script setup lang="ts">
import CheckCircle from '@featherds/icon/action/CheckCircle'
import { FeatherIcon } from '@featherds/icon'
import { groupBy, keys } from 'lodash'
import Cancel from '@featherds/icon/action/Cancel'
import { TSituation } from '@/types/TSituation'
import CONST from '@/helpers/constants'
import { formatDate } from '@/helpers/utils'

const ACCEPTED = CONST.ACCEPTED
const REJECTED = CONST.REJECTED

const props = defineProps<{
	situationInfo: TSituation
}>()
const emit = defineEmits(['situation-selected'])
const description =
	props.situationInfo.description
		.replace(/(<([^>]+)>)/gi, '')
		.substring(0, 230) + '...'

const handleSituationSelected = () => {
	emit('situation-selected', props.situationInfo?.id)
}
</script>

<template>
	<div
		v-on:click="handleSituationSelected"
		class="card"
		:class="{
			rejected: props.situationInfo.status == REJECTED
		}"
	>
		<div
			class="severity-line"
			:class="[`${props.situationInfo?.severity?.toLowerCase()}-bg dark`]"
		></div>
		<div class="content">
			<div class="title-row">
				<div class="title">Situation {{ props.situationInfo?.id }}</div>
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
			<div>
				<span class="info-title"> First Event: </span
				>{{ formatDate(props.situationInfo.firstEventTime) }}
			</div>
			<div class="description">{{ description }}</div>
			<hr />
			<div class="count-info" v-if="props.situationInfo.relatedAlarms">
				Alarms:
				<span class="info-title">{{
					props.situationInfo.relatedAlarms.length
				}}</span>
			</div>
			<div
				class="info-title"
				v-for="node in keys(
					groupBy(props.situationInfo.relatedAlarms, 'nodeLabel')
				)"
				:key="node"
			>
				- {{ node }}
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.card {
	display: flex;
	width: 100%;
	flex-direction: row;
	background-color: #ffffff;
	cursor: pointer;
	border: 1px solid $border-grey;
	height: 100%;
	&:hover {
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
	font-size: 20px;
	font-weight: 600;
	word-break: break-all;
	margin-right: 5px;
}
.severity-line {
	min-width: 5px;
	width: 5px;
}
.content {
	padding: 15px;
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: space-between;
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

.count {
	font-size: 18px;
	font-weight: 600;
	padding-right: 8px;
	padding-left: 3px;
	color: #323647;
}

.info-title {
	font-size: 15px;
	font-weight: 600;
}
</style>
