<script setup lang="ts">
import {
	FeatherTab,
	FeatherTabContainer,
	FeatherTabPanel
} from '@featherds/tabs'
import SituationDetailTab from '@/components/SituationDetailTab.vue'
import SituationMetricsTab from '@/components/SituationMetricsTab.vue'
import { useSituationsStore } from '@/store/useSituationsStore'
import { ref, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { FeatherIcon } from '@featherds/icon'
import { TSituation } from '@/types/TSituation'
import { FeatherButton } from '@featherds/button'
import ArrowBack from '@featherds/icon/navigation/ArrowBack'
import { FeatherSnackbar } from '@featherds/snackbar'
import { useAppStore } from '@/store/useAppStore'
import { FeatherSpinner } from '@featherds/progress'
const router = useRouter()
const route = useRoute()
const paramId = parseInt(route.params.id as string)
const situationId = ref(paramId)
const situationStore = useSituationsStore()
const appStore = useAppStore()

situationStore.getSituation(situationId.value)

if (!situationStore.situations.length) {
	situationStore.getSituations()
}

const situation = ref()
const container = ref()
const loading = ref(true)

const filteredSituationsCurrentIndex = ref(
	situationStore.filteredSituations.findIndex((id) => id === situationId.value)
)
const showError = ref(false)

watch(
	() => situationStore.situationDetail,
	() => {
		situation.value = situationStore.situationDetail as TSituation
		loading.value = false
	}
)

onMounted(() => {
	const widthCont =
		document.getElementById('cont')?.getBoundingClientRect().width || 1200
	container.value = widthCont - 90
})

const showSituationList = () => {
	router.push({
		name: 'situations'
	})
}
const showNextSituation = (step: number) => {
	const index = filteredSituationsCurrentIndex.value
	const id = situationStore.filteredSituations[index + step]
	router.push({
		name: 'situationDetail',
		params: {
			id
		}
	})
}

watch(route, () => {
	situationId.value = parseInt(route.params.id as string)
	situationStore.getSituation(situationId.value)
	filteredSituationsCurrentIndex.value =
		situationStore.filteredSituations.findIndex((id) => id == situationId.value)
})
appStore.$subscribe((mutation, storeState) => {
	showError.value = storeState.showError
})
</script>

<template>
	<div id="cont">
		<div class="btns-navigation">
			<FeatherButton primary @click="() => showSituationList()">
				<FeatherIcon :icon="ArrowBack" aria-hidden="true" class="icon" />
				<span>Situation List</span>
			</FeatherButton>
			<div>
				<FeatherButton
					:disabled="
						!situationStore.filteredSituations[
							filteredSituationsCurrentIndex - 1
						]
					"
					primary
					@click="() => showNextSituation(-1)"
					><FeatherIcon :icon="ArrowBack" aria-hidden="true" class="icon" />
					<span>Show Previous Situation </span>
				</FeatherButton>
				<FeatherButton
					:disabled="
						!situationStore.filteredSituations[
							filteredSituationsCurrentIndex + 1
						]
					"
					primary
					@click="() => showNextSituation(1)"
				>
					<span>Show Next Situation</span>
					<FeatherIcon :icon="ArrowBack" aria-hidden="true" class="icon next" />
				</FeatherButton>
			</div>
		</div>
		<FeatherSpinner class="spinner" v-if="loading" />
		<div v-else>
			<div v-if="situation" class="detail">
				<FeatherTabContainer>
					<template v-slot:tabs>
						<FeatherTab>Details</FeatherTab>
						<FeatherTab>Metrics</FeatherTab>
					</template>
					<FeatherTabPanel class="panel">
						<SituationDetailTab :situation-info="situation" />
					</FeatherTabPanel>
					<FeatherTabPanel class="panel"
						><SituationMetricsTab
							v-if="container"
							:situation="situation"
							:width="container"
						/>
					</FeatherTabPanel>
				</FeatherTabContainer>
			</div>
			<div v-else class="noSituation">
				Error. The situation {{ paramId }} does not exist.
			</div>
		</div>
		<FeatherSnackbar v-model="showError" center error>
			{{ appStore.errorMessage }}
			<template v-slot:button>
				<FeatherButton @click="showError = false" text>dismiss</FeatherButton>
			</template>
		</FeatherSnackbar>
	</div>
</template>
<style scoped lang="scss">
@import '@/styles/variables.scss';
@import '@featherds/table/scss/table';
.btns-navigation {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.spinner {
	margin: 100px auto;
}
.detail {
	width: 100%;
	margin-top: 30px;
}
.icon {
	font-size: 20px;
	vertical-align: text-top;
	margin-right: 8px;
}

.next {
	margin-right: 0;
	margin-left: 8px;
	transform: rotateZ(180deg);
}

.link {
	padding: 12px;
	cursor: pointer;
	font-size: 22px;
	border: 1px solid black;
	background-color: #cacaca;
	width: fit-content;
	margin-bottom: 20px;
}

.noSituation {
	padding: 30px;
	border: 1px solid #dfdfdf;
	background-color: #ffffff;
	width: 600px;
	text-align: center;
	margin: 80px auto;
	font-size: 17px;
}
</style>
