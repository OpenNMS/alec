<script setup lang="ts">
import { FeatherRadioGroup, FeatherRadio } from '@featherds/radio'
import { FeatherButton } from '@featherds/button'
import { FeatherCheckbox } from '@featherds/checkbox'
import { ref } from 'vue'
import useRouter from '@/composables/useRouter'
const router = useRouter()

const hellinger = ref(false)
const engine = ref()

const handleClickContinue = () => {
	router.push({ name: 'situations' })
}
</script>

<template>
	<div class="container">
		<h2>Configuration</h2>
		<p>
			ALEC relies on correlation engines to identify related alarm groupings
			(situations). These engines are powered by machine learning techniques
			that leverage alarms data to make informed decisions.
		</p>
		<div>
			<FeatherRadioGroup
				class="radio-group"
				:label="'Currently, ALEC provides two clustering based engines, please, select one (can be changed later):'"
				v-model="engine"
			>
				<FeatherRadio class="radio" value="clustering"
					><div class="radio-content">
						<strong>Clustering</strong>
						<div>
							Groups data points (alarms) based on a distance measure. We
							calculate alarms difference in time and add it to their distance
							within their network topology
						</div>
						<img class="img" src="/src/assets/clustering.jpg" />
						<FeatherCheckbox v-model="hellinger" class="checkbox"
							><strong>With hellinger distance </strong><br /><span
								class="description"
								>(Uses the Hellinger Distance between alarms as a scaling
								variable. It pushes alarms further apart if its value is high
								and vice versa.)</span
							></FeatherCheckbox
						>
					</div></FeatherRadio
				>
				<FeatherRadio class="radio" value="deeplearning"
					><div class="radio-content">
						<strong>Deep Learning</strong>
						<div>
							A Neural Network network is consulted to assess if alarms are
							related. Based on its evaluation, situations are built by
							association.
						</div>
						<img class="img" src="/src/assets/deeplearning.png" /></div
				></FeatherRadio>
			</FeatherRadioGroup>
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
	font-size: 16px;
}
.radio {
	border: 1px solid grey;
	padding: 10px 20px;
}
.radio-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 440px;
	max-width: 400px;
}
.img {
	margin-top: 10px;
	width: 300px;
	height: auto;
}

.checkbox {
	margin-top: 25px;
}

.btn {
	margin-top: 60px;
	width: fit-content;
	margin-left: auto;
}

.description {
	font-size: 13px;
}
</style>
