<script setup lang="ts">
import { FeatherButton } from '@featherds/button'
import { FeatherIcon } from '@featherds/icon'
import { FeatherRadioGroup, FeatherRadio } from '@featherds/radio'
import Options from '@featherds/icon/action/Options'
import InformationExchange from '@featherds/icon/action/InformationExchange'
import Workflow from '@featherds/icon/action/Workflow'
import Apps from '@featherds/icon/navigation/Apps'
import Vitals from '@featherds/icon/medical/Vitals'
import { ref } from 'vue'
import useRouter from '@/composables/useRouter'
import { useUserStore } from '@/store/useUserStore'
const userStore = useUserStore()
const router = useRouter()
const allowSave = ref(true)
const handleClickContinue = () => {
	const allow = Boolean(allowSave.value)
	userStore.savePermission(allow)
	router.push({ name: 'configuration' })
}
</script>

<template>
	<div class="container">
		<div class="title">ALEC</div>
		<div class="description">
			The Architecture for Learning Enabled Correlation, or ALEC, provides a
			machine learning powered solution for alarm correlation. Complex networks
			produce significant, and potentially overwhelming, amount of events and
			alarms.
			<br />
			<strong>Our goal</strong>
			with ALEC to aid IT Operators to tackle these issues effectively
			identifying alarm groups that are easier to manage.
		</div>
		<div>
			<h3>Key Benefits:</h3>
			<div class="list">
				<div>
					<FeatherIcon :icon="Apps" aria-hidden="true" class="icon" />
					<span>
						Alleviate alarm load by clustering them into actionable situations.
					</span>
				</div>
				<div>
					<FeatherIcon :icon="Workflow" aria-hidden="true" class="icon" />
					<span>Assist in root cause analysis.</span>
				</div>
				<div>
					<FeatherIcon :icon="Vitals" aria-hidden="true" class="icon" />
					<span>
						Avoid potential issues flagged by alarms with low visibility.
					</span>
				</div>
				<div>
					<FeatherIcon :icon="Options" aria-hidden="true" class="icon" />
					<span>Easy configuration.</span>
				</div>
				<div>
					<FeatherIcon
						:icon="InformationExchange"
						aria-hidden="true"
						class="icon"
					/>
					<span>
						Continuous improvement. Provided anonymized data helps us improve
						ALEC.
					</span>
				</div>
			</div>
		</div>
		<div v-if="userStore.isAdmin" class="optin">
			<h3>Enable ALEC for more precise results:</h3>
			<div>
				Our goal with ALEC, is to aid IT Operators to tackle these issues
				effectively identifying alarm groups that are easier to manage. The
				information provided is anonymized and will be used for internal
				purposes only.
			</div>
			<div class="choices">
				<div class="radio-text">
					By choosing “Yes” you accept that OpenNMS can store the information
					that you provide, for educational and research purposes.
				</div>
				<FeatherRadioGroup horizontal v-model="allowSave" label="">
					<FeatherRadio :value="true">Yes</FeatherRadio>
					<FeatherRadio :value="false">No</FeatherRadio>
				</FeatherRadioGroup>
			</div>
		</div>
		<FeatherButton
			data-test="continue-btn"
			primary
			class="continue-btn"
			@click="handleClickContinue"
		>
			Continue
		</FeatherButton>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	padding: 30px 80px;
	padding-bottom: 40px;
	flex-direction: column;
	border: #dfdfdf 1px solid;
	background-color: #ffffff;
}
.title {
	color: #4b5ad6;
	font-size: 60px;
	text-align: center;
	padding-top: 30px;
	padding-bottom: 20px;
}
.description {
	padding-bottom: 15px;
	font-size: 16px;
}
.list {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 30px;
	margin-bottom: 20px;
}
.list div {
	width: 20%;
	max-width: 230px;
	border: 1px solid #dfdfdf;
	padding: 15px;
	text-align: center;
}
.optin {
	padding-top: 30px;
	border: 1px solid #dfdfdf;
	padding: 20px;
	margin-top: 8px;
	width: 70%;
}
.choices {
	background-color: rgb(249, 223, 144);
	padding: 15px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 20px;
	border-radius: 10px;
}
.radio-text {
	width: 70%;
	margin-right: 30px;
}
.icon {
	height: 45px !important;
	width: 45px !important;
	display: block !important;
	margin: auto;
	color: #4b5ad6 !important;
	margin-bottom: 8px;
	border: 1px solid #4b5ad6;
	border-radius: 50px;
	padding: 10px;
}
.continue-btn {
	margin-top: 10px;
	width: fit-content;
	margin-left: auto;
}
h3 {
	color: #555555;
}
</style>
