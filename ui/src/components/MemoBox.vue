<script setup lang="ts">
import { FeatherIcon } from '@featherds/icon'
import EditMode from '@featherds/icon/action/EditMode'
import Cancel from '@featherds/icon/navigation/Cancel'

import { FeatherTextarea } from '@featherds/textarea'

const props = defineProps<{
	label: string
	text: string | number | Date
}>()

const isEdit = ref(false)
const memoText = ref(props.text)
const showEditInput = () => {
	isEdit.value = !isEdit.value
}
</script>

<template>
	<div class="box">
		<div class="row">
			<div class="label">{{ label }}</div>
			<div class="action-icons">
				<div class="icon-btn">
					<FeatherIcon
						:icon="EditMode"
						aria-hidden="true"
						class="icon"
						@click="showEditInput"
					/>
				</div>
				<div class="icon-btn" v-if="props.text && props.text != ''">
					<FeatherIcon
						:icon="Cancel"
						aria-hidden="true"
						class="icon"
						@click="showEditInput"
					/>
				</div>
			</div>
		</div>
		<div class="text" v-if="!isEdit">
			{{ props.text }}
		</div>
		<FeatherTextarea
			v-if="isEdit"
			v-model="memoText"
			rows="3"
			hideLabel
		></FeatherTextarea>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.row {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.box {
	border: 1px solid $border-grey;
	padding: 10px 20px;
	width: fit-content;
	margin-bottom: 20px;
	background-color: #ffffff;
}
.label {
	font-weight: 600;
	font-size: 17px;
}
.icon {
	font-size: 22px;
}
.icon-btn {
	background-color: #efefef;
	padding: 5px 8px;
	border-radius: 5px;
	margin-bottom: 8px;
	cursor: pointer;
	margin-left: 8px;
}
.action-icons {
	display: flex;
	flex-direction: row;
}
.text {
	font-size: 12px;
}
</style>
