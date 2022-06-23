<script setup lang="ts">
import { FeatherButton } from '@featherds/button'
import { FeatherIcon } from '@featherds/icon'
import Options from '@featherds/icon/action/Options'
import InformationExchange from '@featherds/icon/action/InformationExchange'
import Workflow from '@featherds/icon/action/Workflow'
import Apps from '@featherds/icon/navigation/Apps'

import Vitals from '@featherds/icon/medical/Vitals'

import useRouter from '@/composables/useRouter'
const router = useRouter()
const handleClickContinue = () => {
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
			<strong>Our goal</strong> with ALEC to aid IT Operators to tackle these
			issues effectively identifying alarm groups that are easier to manage.
		</div>
		<div>
			<h3>Key Benefits:</h3>
			<div class="list">
				<div>
					<FeatherIcon :icon="Apps" aria-hidden="true" class="icon" />
					<span
						>Alleviate alarm load by clustering them into actionable
						situations.</span
					>
				</div>
				<div>
					<FeatherIcon :icon="Workflow" aria-hidden="true" class="icon" /><span
						>Assist in root cause analysis.</span
					>
				</div>
				<div>
					<FeatherIcon :icon="Vitals" aria-hidden="true" class="icon" />
					<span
						>Avoid potential issues flagged by alarms with low visibility.</span
					>
				</div>
				<div>
					<FeatherIcon :icon="Options" aria-hidden="true" class="icon" /><span
						>Easy configuration.</span
					>
				</div>
				<div>
					<FeatherIcon
						:icon="InformationExchange"
						aria-hidden="true"
						class="icon"
					/><span
						>Continuous improvement. Voluntarily provided anonymized data helps
						us improve ALEC.</span
					>
				</div>
			</div>
		</div>

		<FeatherButton primary class="btn" @click="() => handleClickContinue()">
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
	font-size: 18px;
}

.list {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.list div {
	width: 20%;
	max-width: 230px;
	border: 1px solid #dfdfdf;
	padding: 20px 15px;
	text-align: center;
}

.icon {
	height: 52px !important;
	width: 52px !important;
	display: block !important;
	margin: auto;
	color: #4b5ad6 !important;
	margin-bottom: 20px;
	border: 1px solid #4b5ad6;
	border-radius: 50px;
	padding: 10px;
}

.btn {
	margin-top: 60px;
	width: fit-content;
	margin-left: auto;
}
h3 {
	color: #555555;
}
</style>
