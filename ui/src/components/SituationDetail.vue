<script setup lang="ts">
import {
	FeatherTab,
	FeatherTabContainer,
	FeatherTabPanel
} from '@featherds/tabs'
import SituationDetailTab from '@/components/SituationDetailTab.vue'
import SituationMetricsTab from '@/components/SituationMetricsTab.vue'
import { useSituationsStore } from '@/store/useSituationsStore'
import { ref, watch } from 'vue'

const situationStore = useSituationsStore()
const emit = defineEmits(['situation-status-changed'])
const props = defineProps<{
	index: number
	forceUpdate: boolean
}>()

const situation = ref(situationStore.situations[props.index])
let container = ref()
const situationStatusChanged = (status: string, id: string) => {
	emit('situation-status-changed', status, id)
}

watch(props, () => {
	situation.value = situationStore.situations[props.index]
})

onMounted(() => {
	const widthCont =
		document.getElementById('cont')?.getBoundingClientRect().width || 1200
	container.value = widthCont - 90
})
</script>

<template>
	<div v-if="situation" class="detail" id="cont">
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
</template>
<style scoped lang="scss">
@import '@/styles/variables.scss';
@import '@featherds/table/scss/table';
.detail {
	width: 100%;
	margin-left: 20px;
}
</style>
