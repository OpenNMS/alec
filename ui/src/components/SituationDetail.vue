<script setup lang="ts">
import {
	FeatherTab,
	FeatherTabContainer,
	FeatherTabPanel
} from '@featherds/tabs'
import { TSituation } from '@/types/TSituation'
import SituationDetailTab from '@/components/SituationDetailTab.vue'
import SituationMetricsTab from '@/components/SituationMetricsTab.vue'
const emit = defineEmits(['situation-status-changed'])
const props = defineProps<{
	alarmInfo: TSituation
}>()

const situationStatusChanged = (status: string, id: string) => {
	emit('situation-status-changed', status, id)
}
</script>

<template>
	<div v-if="props.alarmInfo" class="detail">
		<FeatherTabContainer>
			<template v-slot:tabs>
				<FeatherTab>Details</FeatherTab>
				<FeatherTab>Metrics</FeatherTab>
			</template>
			<FeatherTabPanel class="panel">
				<SituationDetailTab
					:situation-info="props.alarmInfo"
					@situation-status-changed="situationStatusChanged"
				/>
			</FeatherTabPanel>
			<FeatherTabPanel class="panel"
				><SituationMetricsTab :situation="props?.alarmInfo" />
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
