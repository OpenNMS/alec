<script setup lang="ts">
const props = defineProps({
	severity: {
		required: false,
		type: String
	}
})
</script>

<template>
	<span
		v-if="props?.severity"
		class="severity-status"
		:class="[`${props.severity.toLowerCase()}-color`]"
		>{{ props.severity }}</span
	>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.severity-status {
	border: 1px solid;
	padding: 0px 10px;
	font-size: 13px;
	border-radius: 50px;
	font-weight: 600;
	width: fit-content;
	max-height: 27px;
}
</style>
