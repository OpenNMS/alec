<script setup lang="ts">
import { SEVERITY_COLOR } from '@/helpers/constants'

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
		:style="{
			color: SEVERITY_COLOR[props?.severity?.toLowerCase()],
			borderColor: SEVERITY_COLOR[props?.severity?.toLowerCase()]
		}"
		>{{ props.severity }}</span
	>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.severity-status {
	border: 1px solid;
	padding: 5px 10px;
	font-size: 13px;
	border-radius: 50px;
	font-weight: 600;
}
</style>
