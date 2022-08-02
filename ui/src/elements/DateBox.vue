<script setup lang="ts">
const props = defineProps<{
	label: string
	date: string
}>()
const simplifyDate = (value: string) => {
	const date = new Date(value)
	return `${
		date.getMonth() + 1
	}/${date.getDate()} ${date.getUTCHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
</script>

<template>
	<div class="box">
		<div class="label">{{ props.label }}</div>
		<div class="date">{{ simplifyDate(props.date) }}</div>
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
