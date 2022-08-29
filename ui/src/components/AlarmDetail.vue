<script setup lang="ts">
import SeverityStatus from '@/elements/SeverityStatus.vue'
import { simplifyDate } from '@/helpers/utils'
import { TAlarm } from '@/types/TSituation'

const props = defineProps<{
	alarm: TAlarm
}>()
</script>

<template>
	<div class="card" v-if="props.alarm">
		<div class="row">
			<div class="title">[{{ props.alarm.id }}]</div>

			<div>
				<strong>First Event</strong>
				- {{ simplifyDate(props.alarm.firstTime) }}
			</div>
			<div>
				<strong>Last Event</strong>
				- {{ simplifyDate(props.alarm.time) }}
			</div>
			<div>
				<SeverityStatus :severity="props.alarm?.severity" />
			</div>
		</div>

		<div v-html="props.alarm.description"></div>
	</div>
</template>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.card {
	padding: 15px;
	border: 1px solid $border-grey;
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
</style>
