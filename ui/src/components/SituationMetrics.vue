<script setup lang="ts">
import { TSituation } from '@/types/TSituation'
import { minBy } from 'lodash'

const props = defineProps<{
	situation: TSituation
}>()

console.log(props)
</script>

<template>
	<div class="metrics">
		<div class="id">Situation - [ {{ props.situation.id }} ]</div>
	</div>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.id {
	font-weight: 600;
	font-size: 22px;
	margin-bottom: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
</style>
