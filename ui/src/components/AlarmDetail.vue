<script setup lang="ts">
import SeverityStatus from '@/elements/SeverityStatus.vue'
import { useSituationsStore } from '@/store/useSituationsStore'
import { format } from 'date-fns'
const situationStore = useSituationsStore()
const props = defineProps<{
	id: number
}>()
const alarm = ref(situationStore.alarms[props.id])
watch(props, () => {
	alarm.value = situationStore.alarms[props.id]
})
</script>

<template>
	<div class="card" v-if="alarm">
		<div class="row">
			<div class="title">[{{ alarm.id }}]</div>
			<SeverityStatus :severity="alarm?.severity" />
		</div>

		<div v-html="alarm.description"></div>
		<div>
			<strong>First Event</strong>
			- {{ format(new Date(alarm.firstEventTime), 'd/M HH:mm:ss') }}
		</div>
		<div>
			<strong>Last Event</strong>
			- {{ format(new Date(alarm.lastEvent.createTime), 'd/M HH:mm:ss') }}
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
</style>
