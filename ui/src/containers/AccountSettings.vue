<script setup lang="ts">
import { FeatherRadioGroup, FeatherRadio } from '@featherds/radio'
import SituationListBtn from '@/elements/SituationListBtn.vue'
import { FeatherCheckbox } from '@featherds/checkbox'
import MarkComplete from '@featherds/icon/action/MarkComplete'
import { FeatherIcon } from '@featherds/icon'
import CONST from '@/helpers/constants'
import { useUserStore } from '@/store/useUserStore'
import { markRaw, ref } from 'vue'
import { FeatherButton } from '@featherds/button'
import { saveEngineParameter } from '@/services/AlecService'
import { FeatherSnackbar } from '@featherds/snackbar'

const Icons = markRaw({
	MarkComplete
})

const userStore = useUserStore()
const allowSave = ref(userStore.allowSave)
const engineName = ref(userStore.engineInfo?.engineName || CONST.ENGINE_DBSCAN)
const hellinger = ref(
	userStore.engineInfo?.distanceMeasureName === CONST.HELLINGER_OPTION
)

const showNotification = ref(false)
const isError = ref(false)
const message = ref('')

const saveConfiguration = async () => {
	const allow = Boolean(allowSave.value)
	userStore.savePermission(allow)

	const savedEngine = await saveEngineParameter(
		engineName.value,
		hellinger.value
	)
	showNotification.value = true
	if (savedEngine) {
		message.value = 'The settings were saved!'
		isError.value = false
	} else {
		message.value = 'Error on saving the settings'
		isError.value = true
	}
}
</script>
<template>
	<SituationListBtn />
	<div class="container">
		<h3>Configuration Page</h3>

		<div class="section">
			<div class="title">OpenNMS can store anonymously the information:</div>
			<FeatherRadioGroup horizontal v-model="allowSave" label="" hideLabel>
				<FeatherRadio :value="true">Yes</FeatherRadio>
				<FeatherRadio :value="false">No</FeatherRadio>
			</FeatherRadioGroup>
		</div>
		<div class="section">
			<div class="title">Engine:</div>
			<div>
				(Detail information about engines
				<a
					target="_blank"
					href="https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
					>here</a
				>)
			</div>
			<FeatherRadioGroup vertical v-model="engineName" label="" hideLabel>
				<FeatherRadio class="radio-item" :value="CONST.ENGINE_DBSCAN"
					>Clustering</FeatherRadio
				>
				<FeatherCheckbox
					v-model="hellinger"
					:disabled="engineName !== CONST.ENGINE_DBSCAN"
					class="checkbox"
				>
					<div class="hellinger">
						<strong>With Hellinger distance</strong>
					</div>
				</FeatherCheckbox>
				<FeatherRadio class="radio-item" :value="CONST.ENGINE_DEEP_LEARNING"
					>Deep Learning</FeatherRadio
				>
			</FeatherRadioGroup>
		</div>
		<FeatherButton primary class="save-btn" @click="saveConfiguration">
			<FeatherIcon :icon="Icons.MarkComplete" class="icon" />
			<span>Save Changes</span>
		</FeatherButton>
		<FeatherSnackbar v-model="showNotification" center :error="isError">
			{{ message }}
			<template v-slot:button>
				<FeatherButton @click="showNotification = false" text
					>dismiss</FeatherButton
				>
			</template>
		</FeatherSnackbar>
	</div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss';

.container {
	display: flex;
	padding-top: 20px;
	flex-direction: column;
	border: 1px solid variables.$border-grey;
	background-color: #ffffff;
	min-height: 650px;
	padding: 20px;
	width: 700px;
	margin: 20px auto;
}

.section {
	margin-top: 30px;
	border: 1px solid variables.$border-grey;
	padding: 10px 15px;
}

.title {
	font-size: 17px;
	font-weight: 600;
}

.radio-item {
	margin-bottom: 0 !important;
}

.checkbox {
	margin-left: var(--feather-spacing-l);
	margin-bottom: var(--feather-spacing-l) !important;
}

.save-btn {
	width: fit-content;
	align-self: self-end;
	margin-top: var(--feather-spacing-xxl);
}

.icon {
	font-size: 19px;
	margin-right: 8px;
}
</style>
