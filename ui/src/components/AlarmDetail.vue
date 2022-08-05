<script setup lang="ts">
import SeverityStatus from '@/elements/SeverityStatus.vue'
import { simplifyDate } from '@/helpers/utils'
import { useSituationsStore } from '@/store/useSituationsStore'

const situationStore = useSituationsStore()
const props = defineProps<{
	id: number
}>()
const alarm = situationStore.alarms[props.id]
</script>

<template>
	<div class="card" v-if="alarm">
		<div class="row">
			<div class="title">[{{ alarm.id }}]</div>

			<div>
				<strong>First Event</strong>
				- {{ simplifyDate(alarm.firstEventTime) }}
			</div>
			<div>
				<strong>Last Event</strong>
				- {{ simplifyDate(alarm.lastEvent.createTime) }}
			</div>
			<div>
				<SeverityStatus :severity="alarm?.severity" />
			</div>
		</div>

		<div v-html="alarm.description"></div>
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
