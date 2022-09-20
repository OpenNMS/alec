<script setup lang="ts">
import SeverityStatus from '@/elements/SeverityStatus.vue'
import { formatDate } from '@/helpers/utils'
import { TAlarm } from '@/types/TSituation'
import { FeatherButton } from '@featherds/button'
import CheckCircle from '@featherds/icon/action/CheckCircle'
import { FeatherIcon } from '@featherds/icon'

const props = defineProps<{
	alarm: TAlarm
}>()
</script>

<template>
	<div class="card" v-if="props.alarm">
		<div>
			<div class="row">
				<SeverityStatus :severity="alarm?.severity" />
				<div class="title">{{ alarm.nodeLabel }} [{{ alarm.id }}]</div>
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
		<div class="action-btn">
			<FeatherButton
				class="btn"
				@click="() => handleFeedbackSituation(ACCEPTED)"
			>
				<FeatherIcon :icon="CheckCircle" aria-hidden="true" class="icon" />
				<span>ACKNOWLEDGE</span>
			</FeatherButton>
			<FeatherButton
				class="btn"
				@click="() => handleFeedbackSituation(ACCEPTED)"
			>
				<FeatherIcon :icon="CheckCircle" aria-hidden="true" class="icon" />
				<span>Escalate</span>
			</FeatherButton>
			<FeatherButton
				class="btn"
				@click="() => handleFeedbackSituation(ACCEPTED)"
			>
				<FeatherIcon :icon="CheckCircle" aria-hidden="true" class="icon" />
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
	margin-right: 5px;
}

.description {
	word-break: break-word;
}

.action-btn {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	> button {
		margin-bottom: 10px;
		width: 160px;
	}
	> button:last-child {
		width: 160px;

		margin-bottom: 0;
	}
}
</style>
