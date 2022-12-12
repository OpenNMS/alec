<script setup lang="ts">
import SeverityStatus from '@/elements/SeverityStatus.vue'
import { formatDate } from '@/helpers/utils'
import { TAlarm } from '@/types/TSituation'
import AlarmActionBtns from '@/components/AlarmActionBtns.vue'
import { FeatherCheckbox } from '@featherds/checkbox'
import { getAlarmById } from '@/services/AlarmService'
import MemoBox from '@/components/MemoBox.vue'
import { ref, watch } from 'vue'
import CheckCircle from '@featherds/icon/action/CheckCircle'
import { FeatherIcon } from '@featherds/icon'
import { formatDistanceStrict } from 'date-fns'

const props = defineProps<{
	alarm: TAlarm
	selectAll: boolean
	situationId: number
}>()

const selected = ref(false)
const emit = defineEmits(['alarm-selected'])
const alarm = ref(props.alarm)
const nowDate = new Date().getTime()
watch(props, () => {
	alarm.value = props.alarm
	selected.value = props.selectAll
	if (props.selectAll) {
		emit('alarm-selected', props.alarm.id)
	}
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
				<div
					class="title"
					v-on:click="
						() => {
							selected = !selected
							updatedSelect()
						}
					"
				>
					{{ alarm.nodeLabel }} - {{ alarm.id }}
				</div>
				<SeverityStatus :severity="alarm?.severity" />

				<div v-if="alarm.ackTime" class="ack">
					<FeatherIcon
						:icon="CheckCircle"
						aria-hidden="true"
						class="icon-ack"
					/>
				</div>
			</div>
			<div>
				<strong> Duration: </strong>
				{{ formatDistanceStrict(nowDate, new Date(alarm.firstEventTime)) }}
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
	align-items: center;
	> label {
		display: none !important;
	}
	.layout-container {
		margin: 0;
	}
}
.title {
	font-size: 18px;
	font-weight: 600;
	word-break: break-all;
	margin-right: 10px;
	cursor: pointer;
}

.description {
	word-break: break-word;
}

.ack {
	font-size: 27px;
	color: green;
	margin-left: 10px;
}
</style>
