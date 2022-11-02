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

import { FeatherButton } from '@featherds/button'
import ArrowBack from '@featherds/icon/navigation/ArrowBack'
const router = useRouter()
const route = useRoute()

const situationId = ref(route.params.id)
const situationStore = useSituationsStore()
situationStore.getSituation(situationId.value)

if (!situationStore.situations.length) {
	situationStore.getSituations()
}
const emit = defineEmits(['situation-status-changed'])

const situation = ref(null)
const container = ref()
const filteredSituationsCurrentIndex = ref(
	situationStore.filteredSituations.findIndex((id) => id == situationId.value)
)

const situationStatusChanged = (status: string, id: string) => {
	emit('situation-status-changed', status, id)
}

/*
watch(props, () => {
	situation.value = situationStore.situations[index]
})
*/

situationStore.$subscribe((mutation, storeState) => {
	situation.value = storeState.situationDetail
})

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
const showNextSituation = (step) => {
	console.log(situationStore.filteredSituations)
	const index = filteredSituationsCurrentIndex.value
	const id = situationStore.filteredSituations[index + step]
	console.log(id)
	router.push({
		name: 'situationDetail',
		params: {
			id
		}
	})
}

watch(route, () => {
	situationId.value = route.params.id
	situationStore.getSituation(situationId.value)
	filteredSituationsCurrentIndex.value =
		situationStore.filteredSituations.findIndex((id) => id == situationId.value)
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
		<div v-if="situation" class="detail">
			<FeatherTabContainer>
				<template v-slot:tabs>
					<FeatherTab>Details</FeatherTab>
					<FeatherTab>Metrics</FeatherTab>
				</template>
				<FeatherTabPanel class="panel">
					<SituationDetailTab
						:situation-info="situation"
						@situation-status-changed="situationStatusChanged"
					/>
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
</style>
