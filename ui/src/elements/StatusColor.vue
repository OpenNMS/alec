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
		class="circle"
		:class="[`${props.severity.toLowerCase()}-bg dark`]"
	></span>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.circle {
	width: 12px;
	height: 12px;
	border-radius: 20px;
	display: inline-flex;
	margin-right: 4px;
}
</style>
