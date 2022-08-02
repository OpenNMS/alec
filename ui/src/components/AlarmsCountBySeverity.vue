<script setup lang="ts">
import { groupBy } from 'lodash'
import { TRelatedAlarm } from '@/types/TSituation'
const props = defineProps<{
	relatedAlarms: TRelatedAlarm[]
	size: 'normal' | 'large'
}>()
</script>

<template>
	<div class="alarms-list">
		<div
			class="alarm-count"
			:class="[`${key.toString().toLowerCase()}-color`, props.size]"
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
	> div {
		margin-right: 15px;
	}
	> div:last-child {
		margin-right: 0;
	}
}
.alarm-count {
	padding: 0px 10px;
	border: 1px solid;
	border-radius: 50px;
	&.normal {
		font-size: 16px;
		line-height: 30px;
	}
	&.large {
		font-size: 20px;
		line-height: 70px;
		min-width: 70px;
		text-align: center;
	}
}
</style>
