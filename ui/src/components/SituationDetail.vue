<script setup lang="ts">
import SeverityStatus from '@/elements/SeverityStatus.vue'
import AlarmsCountBySeverity from '@/components/AlarmsCountBySeverity.vue'
import {
	FeatherTab,
	FeatherTabContainer,
	FeatherTabPanel
} from '@featherds/tabs'
const props = defineProps({
	alarmInfo: {
		required: false,
		type: Object
	}
})
</script>

<template>
	<div v-if="props.alarmInfo" class="detail">
		<FeatherTabContainer>
			<template v-slot:tabs>
				<FeatherTab>Details</FeatherTab>
				<FeatherTab>Topology</FeatherTab>
				<FeatherTab>Metrics</FeatherTab>
			</template>
			<FeatherTabPanel class="panel">
				<div class="id">
					Situation - {{ props.alarmInfo?.id }}
					<SeverityStatus :severity="props.alarmInfo?.severity" />
				</div>

				<span v-html="props.alarmInfo.description"></span>
				<p>
					<strong>Last Event: </strong
					>{{ new Date(props.alarmInfo.lastEvent.time).toGMTString() }}
				</p>
				<p>
					<strong>First Event: </strong
					>{{ new Date(props.alarmInfo.lastEvent.createTime).toGMTString() }}
				</p>
				<p>
					<strong>Reduction key: </strong>{{ props.alarmInfo.reductionKey }}
				</p>
				<AlarmsCountBySeverity
					:relatedAlarms="props.alarmInfo?.relatedAlarms"
				/>
			</FeatherTabPanel>
			<FeatherTabPanel class="panel">Topology</FeatherTabPanel>
			<FeatherTabPanel class="panel">Metrics</FeatherTabPanel>
		</FeatherTabContainer>
	</div>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.detail {
	width: 100%;
	background-color: #ffffff;
	margin-left: 20px;
	border: 1px solid $border-grey;
}
.panel {
	padding: 30px;
}

.id {
	font-weight: 600;
	font-size: 22px;
	margin-bottom: 20px;
}
</style>
