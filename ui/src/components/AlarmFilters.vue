<script setup lang="ts">
import { TRelatedAlarm } from '@/types/TSituation'
import { FeatherChipList, FeatherChip } from '@featherds/chips'
import { ref } from 'vue'
import { groupBy, keys } from 'lodash'
import AlarmDetail from '@/components/AlarmDetail.vue'
import StatusColor from '@/elements/StatusColor.vue'
const props = defineProps<{
	relatedAlarms: TRelatedAlarm[]
}>()
const alarmFilters = computed(() =>
	keys(groupBy(props.relatedAlarms, 'severity'))
)
const selectedFilters = ref(['all'])
const alarms = ref<TRelatedAlarm[]>(props.relatedAlarms)
const handleAlarmFilters = (selected: string) => {
	selectedFilters.value = selectedFilters.value.filter((f) => f !== 'all')
	if (selectedFilters.value.includes(selected)) {
		selectedFilters.value = selectedFilters.value.filter((f) => f !== selected)
	} else {
		selectedFilters.value.push(selected)
	}
	if (selected === 'all' || selectedFilters.value.length === 0) {
		selectedFilters.value = ['all']
		alarms.value = props.relatedAlarms
	} else {
		alarms.value = props.relatedAlarms.filter((a) =>
			selectedFilters.value.includes(a.severity)
		)
	}
}
</script>

<template>
	<div class="title">Alarms</div>
	<div class="alarm-filters-container">
		<FeatherChipList
			:key="selectedFilters.toString()"
			condensed
			class="alarm-filters"
			label="Random list for condensed visual testing"
		>
			<FeatherChip
				:class="{ clicked: selectedFilters.includes('all') }"
				@click="handleAlarmFilters('all')"
			>
				ALL
			</FeatherChip>
			<FeatherChip
				:class="{ clicked: selectedFilters.includes(severity) }"
				v-for="severity in alarmFilters"
				:key="severity"
				@click="handleAlarmFilters(severity)"
			>
				<StatusColor :severity="severity" />{{ severity }}
			</FeatherChip>
		</FeatherChipList>
		<div class="section">
			<div class="alarm-list">
				<div v-for="alarmInfo in alarms" :key="alarmInfo.id">
					<AlarmDetail :id="alarmInfo.id" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';
@import '@featherds/table/scss/table';

.section {
	padding-top: 20px;
}

.title {
	color: #ffffff;
	font-size: 24px;
	font-weight: 600;
	padding: 5px;
	padding-bottom: 15px;
}

.alarm-filters-container {
	background-color: #ffffff;
	padding: 20px;
}

.clicked {
	border: 2px solid $dark-blue;
	background-color: rgb(239, 239, 239);
}
.alarm-list {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	> div {
		width: 100%;
		margin-bottom: 20px;
	}
	> div:last-child {
		margin-bottom: 0;
	}
}
</style>
