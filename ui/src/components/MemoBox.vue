<script setup lang="ts">
import { FeatherIcon } from '@featherds/icon'
import EditMode from '@featherds/icon/action/EditMode'
import Cancel from '@featherds/icon/navigation/Cancel'
import CheckCircle from '@featherds/icon/action/CheckCircle'
import { FeatherTextarea } from '@featherds/textarea'
import { TMemo } from '@/types/TSituation'
import { saveMemo, deleteMemo } from '@/services/AlarmService'
import { useSituationsStore } from '@/store/useSituationsStore'
import { useAppStore } from '@/store/useAppStore'

const situationStore = useSituationsStore()
const appStore = useAppStore()

const props = defineProps<{
	id: number
	label: string
	memo: TMemo
	type: 'journal' | 'memo'
	situationId: number
	boxType?: 'small' | 'normal'
}>()
const isEdit = ref(false)
const memoText = ref(props.memo?.body)

watch(props, () => {
	memoText.value = props.memo?.body
	isEdit.value = false
})

const showEditInput = () => {
	isEdit.value = !isEdit.value
}

const removeMemo = async () => {
	isEdit.value = false
	const result = await deleteMemo(props.id, props.type)
	if (result) {
		memoText.value = ''
		situationStore.selectedSituation = props.situationId
		situationStore.getSituation(props.situationId)
	} else {
		appStore.showErrorMsg('Error on removing memo :(')
	}
}

const saveMemoText = async () => {
	isEdit.value = false
	if (memoText.value && memoText.value !== '') {
		const result = await saveMemo(props.id, props.type, memoText.value)
		if (result) {
			situationStore.selectedSituation = props.situationId
			situationStore.getSituation(props.situationId)
		} else {
			appStore.showErrorMsg('Error on saving memo :(')
		}
	}
}
</script>

<template>
	<div :class="[props.boxType === 'small' ? 'box-small' : 'box']">
		<div class="row">
			<div class="label">{{ label }}</div>
			<div class="action-icons">
				<div class="icon-btn">
					<FeatherIcon
						v-if="!isEdit"
						:icon="EditMode"
						aria-hidden="true"
						class="icon edit"
						@click="showEditInput"
					/>
				</div>
				<div class="icon-btn" v-if="isEdit">
					<FeatherIcon
						:icon="CheckCircle"
						aria-hidden="true"
						class="icon save"
						@click="saveMemoText"
					/>
				</div>
				<div class="icon-btn" v-if="(memoText && memoText != '') || isEdit">
					<FeatherIcon
						:icon="Cancel"
						aria-hidden="true"
						class="icon cancel"
						@click="removeMemo"
					/>
				</div>
			</div>
		</div>
		<div>
			<div class="text" v-if="!isEdit && memoText != null">
				{{ memoText }}
			</div>
			<FeatherTextarea
				class="textarea"
				v-if="isEdit"
				v-model="memoText"
				rows="2"
				label=""
				hideLabel
			></FeatherTextarea>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.row {
	display: flex;
	flex-direction: row;
	align-items: start;
}
.box {
	border: 1px solid $border-grey;
	padding: 15px;
	width: 49%;
	margin-bottom: 20px;
	background-color: #ffffff;

	.label {
		font-weight: 600;
		font-size: 17px;
	}

	.icon {
		font-size: 22px;
	}
	.text {
		margin-top: 8px;
		font-size: 14px;
	}
}
.box-small {
	margin-top: 5px;
	> .row {
		margin-top: 6px;
	}

	.label {
		font-weight: 600;
		font-size: 14px;
	}

	.icon {
		font-size: 18px;
	}
	.text {
		width: fit-content;
		font-size: 14px;
	}
}
.icon-btn {
	//background-color: #efefef;
	border-radius: 5px;
	cursor: pointer;
	margin-left: 8px;
}
.action-icons {
	display: flex;
	flex-direction: row;
}
.textarea {
	margin-top: 3px;
	width: 100%;
}
.icon {
	&.save {
		color: green;
	}
	&.cancel {
		color: red;
	}
	&.edit {
		color: #3988d7;
	}
}
</style>
