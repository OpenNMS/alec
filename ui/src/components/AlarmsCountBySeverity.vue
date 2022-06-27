<script setup lang="ts">
import { groupBy } from 'lodash'
import { SEVERITY_COLOR } from '@/helpers/constants'
import { TRelatedAlarm } from '@/types/TSituation'

const props = defineProps<{
	relatedAlarms: TRelatedAlarm[]
}>()
</script>

<template>
	<div class="alarms-list">
		<div
			class="alarm-count"
			:style="{ color: SEVERITY_COLOR[key.toString().toLowerCase()] }"
			v-for="(list, key) in groupBy(props?.relatedAlarms, 'severity')"
			:key="key"
		>
			{{ list.length }}
		</div>
	</div>
</template>

<style scoped>
.alarms-list {
	display: flex;
	flex-direction: row;
}
.alarm-count {
	padding: 5px 10px;
	border: 1px solid;
	border-radius: 50px;
	margin-right: 10px;
}
</style>
