<script setup lang="ts">
import { FeatherDrawer } from '@featherds/drawer'
import { useSituationsStore } from '@/store/useSituationsStore'
import { ref, watch } from 'vue'
import UnassignedAlarmCard from '@/components/UnassignedAlarmCard.vue'
import { includes, remove } from 'lodash'
import { FeatherButton } from '@featherds/button'
import CommonFilters from '@/components/CommonFilters.vue'
import { TAlarm } from '@/types/TSituation'
import type { Ref } from 'vue'

const emit = defineEmits(['alarms-selected', 'drawer-alarms-closed'])

const props = defineProps<{
	visible: boolean
}>()
const situationStore = useSituationsStore()
const visible = ref(props.visible)
const alarmIds = ref([]) as Ref<number[]>
const severityFilters = ref(['all'])
const alarms = ref(situationStore.unassignedAlarms)

watch(props, () => {
	visible.value = props.visible
	alarmIds.value = []
	alarms.value = situationStore.unassignedAlarms
})

watch(
	() => situationStore.unassignedAlarms,
	() => {
		updateList()
	}
)

const addAlarm = (alarmId: number) => {
	if (!includes(alarmIds.value, alarmId)) {
		alarmIds.value.push(alarmId)
	} else {
		remove(alarmIds.value, (a) => a === alarmId)
	}
}

const addSelectedAlarms = () => {
	emit('alarms-selected', alarmIds.value)
}

const updateList = () => {
	let filtered = situationStore.unassignedAlarms
	if (!severityFilters.value.includes('all')) {
		filtered = filtered.filter((a) =>
			severityFilters.value.includes(a.severity)
		)
	}
	alarms.value = filtered
}

const filterList = (alarmsFiltered: TAlarm[]) => {
	alarms.value = alarmsFiltered
}
</script>

<template>
	<FeatherDrawer
		v-model="visible"
		:labels="{ title: 'Alarms' }"
		@update:modelValue="emit('drawer-alarms-closed')"
	>
		<div class="content">
			<div class="header">
				<h4>ADD ALARMS</h4>
				<FeatherButton class="add-alarms-btn" @click="addSelectedAlarms">
					<span>Add {{ alarmIds.length }} Alarms</span>
				</FeatherButton>
			</div>
			<CommonFilters
				:list="situationStore.unassignedAlarms"
				@filtered-list="filterList"
			/>
			<div class="alarms-list" v-if="alarms.length">
				<div class="card" v-for="alarm in alarms" :key="alarm.id">
					<UnassignedAlarmCard
						:selected="includes(alarmIds, alarm.id)"
						:alarm="alarm"
						@selected-alarm="addAlarm"
					/>
				</div>
			</div>
			<div v-else class="empty">Results not found</div>
		</div>
	</FeatherDrawer>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss';

.content {
	padding: 10px;
	width: 700px;
}

.alarms-list {
	margin-top: 10px;
	overflow-y: scroll;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	height: 750px;
	align-content: flex-start;
	padding-right: 5px;
}
.header {
	display: flex;
	justify-content: space-between;
	width: 94%;
	margin-bottom: 15px;
}
.card {
	width: 325px;
}
.empty {
	padding: var(variables.$spacing-xl);
}

.add-alarms-btn {
	height: 44px !important;
	background-color: #46ae46 !important;
	color: white !important;
}
</style>
