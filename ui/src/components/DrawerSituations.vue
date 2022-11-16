<script setup lang="ts">
import * as components from '@featherds/drawer'
const props = defineProps<{
	label: string
	info: string | number | Date
}>()

const visible = ref(true)
</script>

<template>
	<FeatherDrawer
		id="drawer"
		v-model="visible"
		:labels="{ close: 'close', title: 'Account settings' }"
	>
		<div class="fixed-width">
			<h1>Situations:</h1>
		</div>
	</FeatherDrawer>
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
