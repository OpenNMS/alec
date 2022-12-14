<script setup lang="ts">
import { FeatherRadioGroup, FeatherRadio } from '@featherds/radio'
import { watch, ref } from 'vue'

const props = defineProps<{
	preSelected?: number
}>()

const emit = defineEmits(['filter-date-selected'])

const timePeriods = [
	{ id: 1, name: 'No filter' },
	{ id: 2, name: 'Today' },
	{ id: 3, name: 'Yesterday' },
	{ id: 4, name: 'This week' }
]
const selectedTimePeriod = ref(props.preSelected || timePeriods[0].id)

watch(props, () => {
	if (props.preSelected) {
		selectedTimePeriod.value = props.preSelected
	}
})
</script>

<template>
	<FeatherRadioGroup
		:label="''"
		v-model="selectedTimePeriod"
		vertical
		hodeLabel
		class="radio-dates"
		@update:modelValue="emit('filter-date-selected', selectedTimePeriod)"
	>
		<FeatherRadio v-for="item in timePeriods" :value="item.id" :key="item.id">{{
			item.name
		}}</FeatherRadio>
	</FeatherRadioGroup>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.layout-container {
	margin-bottom: 0 !important;
}

.radio-dates {
	> :first-child {
		margin-bottom: 8px !important;
	}
}
</style>
