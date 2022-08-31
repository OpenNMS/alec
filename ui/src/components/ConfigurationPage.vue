<script setup lang="ts">
import {FeatherRadio, FeatherRadioGroup} from '@featherds/radio'
import {FeatherButton} from '@featherds/button'
import {FeatherCheckbox} from '@featherds/checkbox'
import {ref} from 'vue'
import useRouter from '@/composables/useRouter'
import {saveEngineParameter, savePermission} from '@/services/AlecService'
import CONST from '@/helpers/constants'
import {useUserStore} from '@/store/useUserStore'

const userStore = useUserStore()
const router = useRouter()
const hellinger = ref(false)
const engine = ref(CONST.ENGINE_DBSCAN)
const handleClickContinue = () => {
	savePermission(userStore.allowSave)
	saveEngineParameter(engine.value, hellinger.value)
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
			<br />
			For detail information about proposed engines you can read
			<strong>
				<a
					target="_blank"
					href="https://docs.opennms.com/alec/2.1.0/engines/cluster.html"
				>
					here
				</a>
			</strong>
		</p>
		<div>
			<FeatherRadioGroup
				class="radio-group"
				:label="'Currently, ALEC provides two clustering based engines, please, select one (can be changed later):'"
				v-model="engine"
			>
				<FeatherRadio class="radio" :value="CONST.ENGINE_DBSCAN">
					<div class="radio-content">
						<strong class="title">Clustering</strong>
						<div>
							Groups data points (alarms) based on a distance measure. We
							calculate alarms difference in time and add it to their distance
							within their network topology
						</div>
						<img class="img" src="/src/assets/clustering.png" />
						<FeatherCheckbox
							v-model="hellinger"
							:disabled="engine !== CONST.ENGINE_DBSCAN"
							class="checkbox"
						>
							<div class="hellinger">
								<strong>With hellinger distance</strong>
								<br />
								<span class="description">
									(Uses the Hellinger Distance between alarms as a scaling
									variable. It pushes alarms further apart if its value is high
									and vice versa.)
								</span>
							</div>
						</FeatherCheckbox>
					</div>
				</FeatherRadio>
				<FeatherRadio class="radio" :value="CONST.ENGINE_DEEP_LEARNING">
					<div class="radio-content">
						<strong class="title">Deep Learning</strong>
						<div>
							A Neural Network network is consulted to assess if alarms are
							related. Based on its evaluation, situations are built by
							association.
						</div>
						<img class="img img2" src="/src/assets/deeplearning.png" />
					</div>
				</FeatherRadio>
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
	min-height: 560px;
	max-width: 450px;
}
.title {
	font-size: 18px;
	padding-bottom: 5px;
}
.img {
	margin-top: 10px;
	height: auto;
	width: 310px;
	margin: 40px 0px;
}
.img2 {
	margin-top: 50px;
	width: 430px;
}
.checkbox {
	margin-top: 25px;
}
.btn {
	margin-top: 10px;
	width: fit-content;
	margin-left: auto;
}
.description {
	font-size: 13px;
}
.hellinger {
	height: 30px;
}
</style>
