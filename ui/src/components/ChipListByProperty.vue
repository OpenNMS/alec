<script setup lang="ts">
import { TAlarm, TSituation } from '@/types/TSituation'
import { FeatherChipList, FeatherChip } from '@featherds/chips'
import { ref, watch, computed, reactive } from 'vue'
import { groupBy, keys } from 'lodash'
import StatusColor from '@/elements/StatusColor.vue'

const emit = defineEmits(['selected-option'])

type TState = {
	alarms: (TAlarm | TSituation)[]
}
const props = defineProps<{
	alarms: (TAlarm | TSituation)[]
	property: string
	preSelected?: string[]
	isVertical?: boolean
}>()
const selectAll = ref(false)

const alarmFilters = computed(() => keys(groupBy(props.alarms, props.property)))
const selectedFilters = ref(
	props.preSelected?.length ? props.preSelected : ['all']
)
const state: TState = reactive({
	alarms: props.alarms
})

const handleAlarmFilters = (selected: string) => {
	selectedFilters.value = selectedFilters.value.filter((f) => f !== 'all')
	if (selectedFilters.value.includes(selected)) {
		selectedFilters.value = selectedFilters.value.filter((f) => f !== selected)
	} else {
		selectedFilters.value.push(selected)
	}
	if (selected === 'all' || selectedFilters.value.length === 0) {
		selectedFilters.value = ['all']
	}
	emit('selected-option', selectedFilters.value)
}

watch(props, () => {
	selectedFilters.value = props.preSelected?.length
		? props.preSelected
		: ['all']
	state.alarms = props.alarms
	selectAll.value = false
})
</script>

<template>
	<FeatherChipList
		:key="selectedFilters.toString()"
		v-if="alarmFilters.length > 0"
		condensed
		label=""
		:class="{ vertical: props.isVertical }"
	>
		<FeatherChip
			:class="{ clicked: selectedFilters.includes('all') }"
			@click="handleAlarmFilters('all')"
		>
			ALL
		</FeatherChip>
		<FeatherChip
			:class="[
				{ clicked: selectedFilters.includes(option) },
				`${option?.toLowerCase()}-bg`
			]"
			v-for="option in alarmFilters"
			:key="option"
			@click="handleAlarmFilters(option)"
		>
			<StatusColor v-if="property == 'severity'" :severity="option" />{{
				option
			}}
		</FeatherChip>
	</FeatherChipList>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';
@import '@featherds/table/scss/table';

.vertical {
	display: flex;
	flex-direction: column;
	align-items: start;
	margin-right: 20px;
	> * {
		margin-bottom: 15px;
	}
}
.clicked {
	border: 2px solid $dark-blue !important;
	background-color: #e6e6e6 !important;
}
</style>
