<script setup lang="ts">
import { FeatherButton } from '@featherds/button'
import { FeatherIcon } from '@featherds/icon'
import Options from '@featherds/icon/action/Options'
import InformationExchange from '@featherds/icon/action/InformationExchange'
import Workflow from '@featherds/icon/action/Workflow'
import Apps from '@featherds/icon/navigation/Apps'

import Vitals from '@featherds/icon/medical/Vitals'

import { useRouter } from 'vue-router'
const router = useRouter()
const handleClickContinue = () => {
	router.push({ path: '/situations' })
}
</script>

<template>
	<div class="container">
		<div class="title">ALEC</div>
		<div class="description">
			The Architecture for Learning Enabled Correlation, or ALEC, provides a
			machine learning powered solution for alarm correlation. Complex networks
			produce significant, and potentially overwhelming, amount of events and
			alarms. Our goal with ALEC, is to aid IT Operators to tackle these issues
			effectively identifying alarm groups that are easier to manage.
		</div>
		<div>
			<h2>Key Benefits:</h2>
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
	padding: 30px 140px;
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
	padding-bottom: 50px;
}

.description {
	padding-bottom: 25px;
	font-size: 18px;
}

.list {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.list div {
	width: 200px;
	border: 1px solid #dfdfdf;
	padding: 20px;
	text-align: center;
}

.icon {
	height: 40px;
	width: 40px;
	display: block;
	margin: auto;
	color: #4b5ad6;
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
h2 {
	color: #555555;
}
</style>
