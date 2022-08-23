<script setup lang="ts">
import { format } from 'date-fns'
const props = defineProps<{
	label: string
	date: string | number | Date
}>()
</script>

<template>
	<div class="box">
		<div class="label">{{ props.label }}</div>
		<div class="date">{{ format(new Date(props.date), 'd/M HH:mm:ss') }}</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.box {
	border: 1px solid $border-grey;
	padding: 5px 20px;
	width: fit-content;
	margin: 10px 0;
	text-align: center;
}
.label {
	font-weight: 600;
	font-size: 15px;
}
.date {
	font-size: 12px;
}
</style>
