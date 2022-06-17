<script setup lang="ts">
import { SEVERITY_COLOR } from '@/helpers/constants'

const props = defineProps({
	severity: {
		required: false,
		type: String
	}
})
const severity = props?.severity
	? SEVERITY_COLOR[props?.severity?.toLowerCase()]
	: null
</script>

<template>
	<span class="severity-status">{{ props.severity }}</span>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.severity-status {
	border: 1px solid v-bind('severity');
	padding: 5px 10px;
	color: v-bind('severity');
	font-size: 13px;
	border-radius: 50px;
	font-weight: 600;
}
</style>
