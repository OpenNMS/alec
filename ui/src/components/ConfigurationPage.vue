<script setup lang="ts">
import { FeatherRadioGroup, FeatherRadio } from '@featherds/radio'
import { FeatherButton } from '@featherds/button'
import { FeatherCheckbox } from '@featherds/checkbox'
import { ref } from 'vue'
import useRouter from '@/composables/useRouter'
import { saveEngineParameter } from '@/services/AlecService'
import CONST from '@/helpers/constants'
import { useUserStore } from '@/store/useUserStore'

const router = useRouter()
const hellinger = ref(false)
const engine = ref(CONST.ENGINE_DBSCAN)
const userStore = useUserStore()

const handleClickContinue = () => {
	userStore.setEngineInfo(engine.value, hellinger.value)
	router.push({ name: 'situations' })
}
</script>

<template>
	<div class="container">
		<h2>Configuration</h2>
		<p>
			ALEC relies on correlation engines to group related alarms into
			situations. These engines are powered by machine learning techniques that
			leverage alarm metadata to make informed decisions. For more information
			about the correlation engines, see the
			<strong>
				<a target="_blank" :href="CONST.URL_DOCUMENTATION"> documentation </a>.
			</strong>
		</p>
		<div>
			<FeatherRadioGroup
				class="radio-group"
				label="You can choose from two correlation engines. We recommend that you use the clustering engine, as it is easier to implement.Select one (you can change it later):"
				v-model="engine"
			>
				<FeatherRadio class="radio" :value="CONST.ENGINE_DBSCAN">
					<div class="radio-content">
						<strong class="title">Clustering</strong>
						<div>
							The clustering engine uses the DBSCAN algorithm to build alarm
							clusters. It draws information from the locally persisted network
							inventory graph.
						</div>
						<img class="img2" src="@/assets/engine2.png" />
						<FeatherCheckbox
							v-model="hellinger"
							:disabled="engine !== CONST.ENGINE_DBSCAN"
							class="checkbox"
						>
							<div class="hellinger">
								<strong>With hellinger distance</strong>
								<br />
								<span class="description">
									(Uses the Hellinger distance between alarms as a scaling
									variable. This pushes alarms further apart if the value is
									high, and vice versa.)
								</span>
							</div>
						</FeatherCheckbox>
					</div>
				</FeatherRadio>
				<FeatherRadio class="radio" :value="CONST.ENGINE_DEEP_LEARNING">
					<div class="radio-content">
						<strong class="title">Deep Learning</strong>
						<div>
							The deep learning engine uses a TensorFlow model to build alarm
							clusters. It draws information from the locally persisted network
							inventory graph.
						</div>
						<img class="img2" src="@/assets/engine1.png" />
					</div>
				</FeatherRadio>
			</FeatherRadioGroup>
		</div>
		<FeatherButton primary class="btn" @click="() => handleClickContinue()">
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
	font-size: 16px;
	> h2 {
		padding-bottom: 12px;
	}
}
.radio-group {
	margin-top: 20px;
}
.radio {
	border: 1px solid #bfbfbf;
	padding: 10px 20px;
	background-color: #f4f7fc;
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
