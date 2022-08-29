<script setup lang="ts">
import {
	FeatherTab,
	FeatherTabContainer,
	FeatherTabPanel
} from '@featherds/tabs'
import { TSituation } from '@/types/TSituation'
import SituationDetailTab from '@/components/SituationDetailTab.vue'
import SituationMetricsTab from '@/components/SituationMetricsTab.vue'

const props = defineProps<{
	alarmInfo: TSituation
}>()
</script>

<template>
	<div v-if="props.alarmInfo" class="detail">
		<FeatherTabContainer>
			<template v-slot:tabs>
				<FeatherTab>Details</FeatherTab>
				<FeatherTab>Metrics</FeatherTab>
			</template>
			<FeatherTabPanel class="panel">
				<SituationDetailTab :situation-info="props.alarmInfo" />
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
	/*background-color: #ffffff;*/
	margin-left: 20px;
}
</style>
