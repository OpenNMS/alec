<script setup lang="ts">
import SeverityStatus from '@/elements/SeverityStatus.vue'
import { formatDate } from '@/helpers/utils'
import { TAlarm } from '@/types/TSituation'

const props = defineProps<{
	alarm: TAlarm
}>()
</script>

<template>
	<div class="card" v-if="props.alarm">
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
</template>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.card {
	padding: 15px;
	border: 1px solid $border-grey;
	display: flex;
	flex-direction: column;
}
.row {
	display: flex;
	flex-direction: row;
	padding: 5px 0;
	justify-content: space-between;
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
</style>
