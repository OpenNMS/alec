<script setup lang="ts">
import { FeatherButton } from '@featherds/button'

const handleClickContinue = () => {
	console.log('clicked')
}
</script>

<template>
	<div class="container">
		<div class="title">ALEC</div>
		<div class="description">
			Complex networks will produce a significant, and potentially overwhelming,
			amount of events and alarms. Without a process to correlate these alarms
			we run the risk of making it difficult for the IT Operator to tackle these
			issues in a timely manner, and that puts into risk the Mean Time to Repair
			(MTTR) the network issues.
		</div>
		<div>
			<h3>Key Benefits:</h3>
			<div class="list">
				<li>
					<strong>Group </strong> related alarms into actionable situations.
				</li>
				<li>
					Quickly identify the <strong>Root Cause</strong>, facilitate fixing
					it, and as a result, clear a number of related alarms.
				</li>
				<li>
					Reduce Time to Value by reducing the amount of configuration needed to
					reduce the <strong>Mean Time to Repair.</strong>
				</li>
				<li>
					<strong>Avoid Missed Situations</strong>. By reducing and simplifying
					the configuration needed, or the need to think ahead of time.
				</li>
				<li>
					<strong>Not Exclusive</strong>. The system allows you to create your
					own situations by REST API. In the future, it will also allow them to
					be created through the GUI. You can also combine the power of ALEC
					with drools or any other method available through OpenNMS.
				</li>
				<li>
					<strong>Continuously Improving.</strong> By analyzing voluntarily
					provided anonymized data, we continuously improve our engine.
					Resulting in benefits that take into account the knowledge of OpenNMS
					users across the world.
				</li>
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
	padding: 30px;
	padding-bottom: 40px;
	flex-direction: column;
	border: #dfdfdf 1px solid;
	background-color: #ffffff;
}

.title {
	color: #4b5ad6;
	font-size: 60px;
	text-align: center;
	padding-top: 20px;
	padding-bottom: 30px;
}

.description {
	padding-bottom: 25px;
}

.list {
	padding-left: 20px;
}

.btn {
	margin-top: 20px;
	width: fit-content;
	margin-left: auto;
}
</style>
