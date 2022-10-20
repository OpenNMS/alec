<script setup lang="ts">
import SeverityStatus from '@/elements/SeverityStatus.vue'
import { formatDate } from '@/helpers/utils'
import { TAlarm } from '@/types/TSituation'
import AlarmActionBtns from '@/components/AlarmActionBtns.vue'
import { FeatherCheckbox } from '@featherds/checkbox'
import { getAlarmById } from '@/services/AlarmService'
import MemoBox from '@/components/MemoBox.vue'
import { ref, watch } from 'vue'

const props = defineProps<{
	alarm: TAlarm
	selectAll: boolean
	situationId: number
}>()

const selected = ref(false)
const emit = defineEmits(['alarm-selected'])
const alarm = ref(props.alarm)

watch(props, () => {
	alarm.value = props.alarm
	selected.value = props.selectAll
	emit('alarm-selected', props.alarm.id)
})

const updatedSelect = () => {
	emit('alarm-selected', props.alarm.id)
}

const actionClicked = async (id: number) => {
	const alarmResult = await getAlarmById(id)
	if (alarmResult) {
		alarm.value = alarmResult as TAlarm
	}
}
</script>

<template>
	<div class="card" v-if="alarm">
		<div>
			<div class="row">
				<FeatherCheckbox
					v-model="selected"
					label="selected"
					@update:modelValue="updatedSelect"
				/>
				<div class="title">{{ alarm.nodeLabel }} - {{ alarm.id }}</div>
				<SeverityStatus :severity="alarm?.severity" />
			</div>
			<div class="description" v-html="alarm.description"></div>
			<div>
				<strong>First Event</strong>
				- {{ formatDate(alarm.firstEventTime) }}
			</div>
			<div>
				<strong>Last Event</strong>
				- {{ formatDate(alarm.lastEventTime) }}
			</div>
			<div class="section memo-boxes">
				<MemoBox
					:id="alarm?.id"
					boxType="small"
					:situationId="props.situationId"
					label="Sticky Memo"
					type="memo"
					:memo="alarm?.stickyMemo"
				/>
				<MemoBox
					:id="alarm?.id"
					boxType="small"
					:situationId="props.situationId"
					label="Journal Memo"
					type="journal"
					:memo="alarm?.reductionKeyMemo"
				/>
			</div>
		</div>

		<AlarmActionBtns
			:alarm="alarm"
			:direction="'vertical'"
			:situation-id="props.situationId"
			@action-clicked="actionClicked"
		/>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.card {
	padding: 15px;
	border: 1px solid $border-grey;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.checkbox {
	> label {
		display: none !important;
	}
}
.row {
	display: flex;
	flex-direction: row;
	padding: 5px 0;
	align-items: baseline;
	> label {
		display: none !important;
	}
}
.title {
	font-size: 18px;
	font-weight: 600;
	word-break: break-all;
	margin-right: 10px;
}

.description {
	word-break: break-word;
}
</style>
