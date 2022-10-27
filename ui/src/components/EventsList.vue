<script setup lang="ts">
import { TEvent } from '@/types/TSituation'
import { formatDate } from '@/helpers/utils'

const props = defineProps<{
	events: TEvent[]
}>()
</script>

<template>
	<strong>Events:</strong>
	<div class="event-description" v-for="event in props.events" :key="event.id">
		<div
			class="mark"
			:class="[`${event.severity.toLowerCase()}-bg dark`]"
		></div>
		<div>{{ formatDate(event.createTime) }} - {{ event.source }}</div>
	</div>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.event-description {
	margin-left: 30px;
	display: flex;
	flex-direction: row;
	align-items: center;
}

.mark {
	width: 14px;
	height: 3px;
	margin-right: 8px;
}
</style>
