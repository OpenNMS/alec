<script setup lang="ts">
import { FeatherIcon } from '@featherds/icon'
import EditMode from '@featherds/icon/action/EditMode'
import Cancel from '@featherds/icon/navigation/Cancel'
import CheckCircle from '@featherds/icon/action/CheckCircle'
import { FeatherTextarea } from '@featherds/textarea'
import { TMemo } from '@/types/TSituation'

const props = defineProps<{
	label: string
	memo: TMemo
}>()

const isEdit = ref(false)
const memoText = ref(props.memo?.body)

console.log(props.memo)
watch(props, () => {
	memoText.value = props.memo?.body
	isEdit.value = false
})

const showEditInput = () => {
	isEdit.value = !isEdit.value
}

const removeMemo = () => {
	isEdit.value = false
	console.log('remove')
}

const saveMemo = () => {
	isEdit.value = false
	console.log('save')
}
</script>

<template>
	<div class="box">
		<div class="row">
			<div class="label">{{ label }}</div>
			<div class="action-icons">
				<div class="icon-btn">
					<FeatherIcon
						v-if="!isEdit"
						:icon="EditMode"
						aria-hidden="true"
						class="icon"
						@click="showEditInput"
					/>
				</div>
				<div class="icon-btn" v-if="isEdit">
					<FeatherIcon
						:icon="CheckCircle"
						aria-hidden="true"
						class="icon"
						@click="saveMemo"
					/>
				</div>
				<div class="icon-btn" v-if="(memoText && memoText != '') || isEdit">
					<FeatherIcon
						:icon="Cancel"
						aria-hidden="true"
						class="icon"
						@click="removeMemo"
					/>
				</div>
			</div>
		</div>
		<div class="text" v-if="!isEdit">
			{{ memoText }}
		</div>
		<FeatherTextarea
			class="text"
			v-if="isEdit"
			v-model="memoText"
			rows="3"
			label=""
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
	margin: 7px 10px;
}
.icon-btn {
	background-color: #efefef;
	border-radius: 5px;
	cursor: pointer;
	margin-left: 8px;
}
.action-icons {
	display: flex;
	flex-direction: row;
}
.text {
	margin-top: 8px;
	font-size: 14px;
}
</style>
