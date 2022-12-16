<script setup lang="ts">
import { FeatherButton } from '@featherds/button'
import { FeatherIcon } from '@featherds/icon'
import { FeatherRadioGroup, FeatherRadio } from '@featherds/radio'
import Workflow from '@featherds/icon/action/Workflow'
import ViewDetails from '@featherds/icon/action/ViewDetails'
import FeedbackAlt from '@featherds/icon/action/FeedbackAlt'
import { markRaw, ref } from 'vue'
import useRouter from '@/composables/useRouter'
import { useUserStore } from '@/store/useUserStore'

const Icons = markRaw({
	FeedbackAlt,
	ViewDetails,
	Workflow
})

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
			The Architecture for Learning Enabled Correlation (ALEC) provides a
			machine learning-powered framework for logically grouping related alarms
			into higher-level situations. Because networks can produce an overwhelming
			number of events and alarms, ALEC helps you to better tackle and manage
			underlying issues.
			<br />
			ALEC gives IT Operators the tools to address these issues by identifying
			alarm groups, which are easier to manage.
		</div>
		<div>
			<h3>Key Benefits</h3>
			<div class="list">
				<div>
					<FeatherIcon :icon="Icons.FeedbackAlt" class="icon" />
					<span> Reduces the number of alarm and event notifications. </span>
				</div>
				<div>
					<FeatherIcon :icon="Icons.Workflow" aria-hidden="true" class="icon" />
					<span>Streamlines root cause analysis.</span>
				</div>
				<div>
					<FeatherIcon :icon="Icons.ViewDetails" class="icon" />
					<span> Provides oversight for </span><br /><span>
						low-visibility alarms.
					</span>
				</div>
			</div>
		</div>
		<div v-if="userStore.isAdmin">
			<h3>ALEC Data Sharing</h3>
			<div class="optin">
				<div>
					Opt-in to send anonymous data to The OpenNMS Group. Your anonymized
					data helps to improve the machine learning algorithms behind the
					plugin, subject to our
					<a href="https://www.opennms.com/privacy/" target="_blank"
						>privacy policy</a
					>, so you will see more precise results.
				</div>
				<div class="choices">
					<div class="radio-text">
						By opting in, you accept that we can store this information and use
						it to improve ALEC. You can change this setting at any time in the
						settings menu.
					</div>
					<FeatherRadioGroup horizontal v-model="allowSave" label="">
						<FeatherRadio :value="true">Yes</FeatherRadio>
						<FeatherRadio :value="false">No</FeatherRadio>
					</FeatherRadioGroup>
				</div>
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

<style scoped lang="scss">
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
	padding-bottom: 25px;
	font-size: 16px;
	margin-top: 15px;
}
.list {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 10px;

	margin-bottom: 35px;
	width: 70%;
	> div {
		width: 300px;
		border: 1px solid #dfdfdf;
		padding: 30px 15px;
		text-align: center;
	}

	span {
		padding: 0 10px;
	}
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
	height: 60px !important;
	width: 60px !important;
	display: block !important;
	margin: auto;
	color: #4b5ad6 !important;
	margin-bottom: 15px;
	border: 1px solid #4b5ad6;
	border-radius: 50px;
	padding: 15px;
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
