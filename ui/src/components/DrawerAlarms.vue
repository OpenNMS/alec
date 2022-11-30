<script setup lang="ts">
import { FeatherDrawer } from '@featherds/drawer'
import { useSituationsStore } from '@/store/useSituationsStore'
import { ref, watch } from 'vue'
import UnassignedAlarmCard from '@/components/UnassignedAlarmCard.vue'
import { includes, remove } from 'lodash'
import { FeatherButton } from '@featherds/button'

const emit = defineEmits(['alarms-selected', 'drawer-alarms-closed'])

const props = defineProps<{
	visible: boolean
}>()
const situationStore = useSituationsStore()
const visible = ref(props.visible)
const alarmIds = ref([])

watch(props, () => {
	visible.value = props.visible
	alarmIds.value = []
})

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
</script>

<template>
	<FeatherDrawer
		v-model="visible"
		:labels="{ close: 'close', title: 'Alarms' }"
		@update:modelValue="emit('drawer-alarms-closed')"
	>
		<div class="content">
			<h4>Choose the alarms to add:</h4>
			<FeatherButton primary class="add-alarms-btn" @click="addSelectedAlarms">
				<span>Add {{ alarmIds.length }} Alarms</span>
			</FeatherButton>
			<FeatherButton
				class="add-alarms-btn"
				@click="emit('drawer-alarms-closed')"
			>
				<span>Cancel</span>
			</FeatherButton>
			<div class="alarms-list" v-if="situationStore.unassignedAlarms.length">
				<div
					class="card"
					v-for="alarm in situationStore.unassignedAlarms"
					:key="alarm.id"
				>
					<UnassignedAlarmCard
						:selected="includes(alarmIds, alarm.id)"
						:alarm="alarm"
						@selected-alarm="addAlarm"
					/>
				</div>
			</div>
			<div v-else class="container empty">Unassigned alarms not found</div>
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

.content {
	padding: 10px;
	width: 700px;
}

.alarms-list {
	margin-top: 20px;
	overflow-y: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.card {
	width: 335px;
}
</style>
