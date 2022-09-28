<script setup lang="ts">
import { TAlarm } from '@/types/TSituation'
import { FeatherChipList, FeatherChip } from '@featherds/chips'
import { ref, watch, computed } from 'vue'
import { groupBy, keys } from 'lodash'
import AlarmDetail from '@/components/AlarmDetail.vue'
import StatusColor from '@/elements/StatusColor.vue'
const props = defineProps<{
	alarms: TAlarm[]
}>()
const alarmFilters = computed(() => keys(groupBy(props.alarms, 'severity')))
const selectedFilters = ref(['all'])
const alarms = ref<TAlarm[]>(props.alarms)
const handleAlarmFilters = (selected: string) => {
	selectedFilters.value = selectedFilters.value.filter((f) => f !== 'all')
	if (selectedFilters.value.includes(selected)) {
		selectedFilters.value = selectedFilters.value.filter((f) => f !== selected)
	} else {
		selectedFilters.value.push(selected)
	}
	if (selected === 'all' || selectedFilters.value.length === 0) {
		selectedFilters.value = ['all']
		alarms.value = props.alarms
	} else {
		alarms.value = props.alarms.filter((a) =>
			selectedFilters.value.includes(a.severity)
		)
	}
}
watch(props, () => {
	selectedFilters.value = ['all']
	alarms.value = props.alarms
})
</script>

<template>
	<div class="container">
		<div class="title">Alarms</div>
		<FeatherChipList
			:key="selectedFilters.toString()"
			v-if="alarmFilters.length > 1"
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
					<AlarmDetail :alarm="alarmInfo" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';
@import '@featherds/table/scss/table';
.container {
	border: 1px solid $border-grey;
	padding: 15px;
	background-color: #ffffff;
}

.title {
	font-size: 21px;
	font-weight: 600;
	padding: 5px;
	padding-bottom: 10px;
}

.clicked {
	border: 2px solid $dark-blue !important;
	background-color: rgb(212, 212, 212) !important;
}
.alarm-list {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	> div {
		margin-top: 20px;
		width: 100%;
	}
}
</style>
