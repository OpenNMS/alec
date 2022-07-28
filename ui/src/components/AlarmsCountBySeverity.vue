<script setup lang="ts">
import { groupBy } from 'lodash'
import { TRelatedAlarm } from '@/types/TSituation'

const props = defineProps<{
	relatedAlarms: TRelatedAlarm[]
}>()
</script>

<template>
	<div class="alarms-list">
		<div
			class="alarm-count"
			:class="[`${key.toString().toLowerCase()}-color`]"
			v-for="(list, key) in groupBy(props?.relatedAlarms, 'severity')"
			:key="key"
		>
			{{ list.length }}
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.alarms-list {
	display: flex;
	flex-direction: row;
}
.alarm-count {
	padding: 2px 10px;
	border: 1px solid;
	border-radius: 50px;
	margin-right: 10px;
	margin-top: 10px;
}
</style>
