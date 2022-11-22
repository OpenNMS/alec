<script setup lang="ts">
import { FeatherCheckbox } from '@featherds/checkbox'
import { truncateText } from '@/helpers/utils'
import { TAlarm } from '@/types/TSituation'
const emit = defineEmits(['selected-alarm'])

const props = defineProps<{
	alarm: TAlarm
	selected: boolean
}>()
</script>

<template>
	<div class="alarm">
		<div class="alarmInfo">
			<div class="triangle" :class="[`${alarm.severity.toLowerCase()}`]"></div>
			<FeatherCheckbox
				:modelValue="props.selected"
				label="selected"
				@update:modelValue="emit('selected-alarm', alarm.id)"
			/>

			<div class="alarm-title">{{ alarm.nodeLabel }} - {{ alarm.id }}</div>
		</div>
		<div class="description">
			{{ truncateText(alarm.description, 300) }}
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.alarm {
	margin-top: 15px;
	padding: 15px;
	border: 1px solid $border-grey;
	position: relative;
	min-height: 140px;
	background-color: #ffffff;
	&.selected {
		border: 1px solid #273180;
	}
}
.alarmInfo {
	display: flex;
	align-items: center;
}

.alarm-title {
	font-size: 16px;
	font-weight: 600;
}
.description {
	font-size: 13px;
}

.triangle {
	width: 12%;
	padding-bottom: 6%;
	overflow: hidden;
	position: absolute;
	top: 0%;
	left: 88%;

	&.critical {
		&:before {
			background-color: $severity-alarm-critical-border;
		}
	}

	&.major {
		&:before {
			background-color: $severity-alarm-major-border;
		}
	}

	&.minor {
		&:before {
			background-color: $severity-alarm-minor-border;
		}
	}

	&.warning {
		&:before {
			background-color: $severity-alarm-warning-border;
		}
	}

	&.indeterminate {
		&:before {
			background-color: $severity-alarm-indeterminate-border;
		}
	}

	&.normal {
		&:before {
			background-color: $severity-alarm-normal-border;
		}
	}

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform-origin: 100% 100%;
		transform: rotate(45deg);
	}
}

.layout-container {
	margin-bottom: 0;
}
</style>
