<script setup lang="ts">
import { TSituation } from '@/types/TSituation'
import { minBy } from 'lodash'

const props = defineProps<{
	situation: TSituation
}>()
</script>

<template>
	<div class="metrics">
		<div class="id">Situation - [ {{ props.situation.id }} ]</div>
		<div>
			First - {{ new Date(props.situation.firstEventTime).toUTCString() }}
		</div>
		<div>
			Last - {{ new Date(props.situation.lastEventTime).toUTCString() }}
		</div>

		<h4>Alarms</h4>
		<div v-for="alarm in props?.situation?.relatedAlarms" :key="alarm.id">
			<p>
				First - {{ new Date(props.situation.firstEventTime).toUTCString() }}
			</p>
			<p>Last - {{ new Date(props.situation.lastEventTime).toUTCString() }}</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.id {
	font-weight: 600;
	font-size: 22px;
	margin-bottom: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
</style>
