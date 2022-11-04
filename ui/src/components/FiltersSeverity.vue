<script setup lang="ts">
import { TAlarm, TSituation } from '@/types/TSituation'
import { FeatherChipList, FeatherChip } from '@featherds/chips'
import { ref, watch, computed, reactive } from 'vue'
import { groupBy, keys } from 'lodash'
import StatusColor from '@/elements/StatusColor.vue'

const emit = defineEmits(['selected-severities'])

type TState = {
	alarms: TAlarm[] | TSituation[]
}
const props = defineProps<{
	alarms: TAlarm[] | TSituation[]
	situationId?: number
	preSelected?: string[]
}>()
const selectAll = ref(false)

const alarmFilters = computed(() => keys(groupBy(props.alarms, 'severity')))

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
	emit('selected-severities', selectedFilters.value)
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
	>
		<FeatherChip
			:class="{ clicked: selectedFilters.includes('all') }"
			@click="handleAlarmFilters('all')"
		>
			ALL
		</FeatherChip>
		<FeatherChip
			:class="[
				{ clicked: selectedFilters.includes(severity) },
				`${severity?.toLowerCase()}-bg`
			]"
			v-for="severity in alarmFilters"
			:key="severity"
			@click="handleAlarmFilters(severity)"
		>
			<StatusColor :severity="severity" />{{ severity }}
		</FeatherChip>
	</FeatherChipList>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';
@import '@featherds/table/scss/table';

.clicked {
	border: 2px solid $dark-blue !important;
	background-color: #e6e6e6 !important;
}
</style>
