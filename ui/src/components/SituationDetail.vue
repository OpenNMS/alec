<script setup lang="ts">
import SeverityStatus from '@/elements/SeverityStatus.vue'
import {
	FeatherTab,
	FeatherTabContainer,
	FeatherTabPanel
} from '@featherds/tabs'
import { FeatherSortHeader, SORT } from '@featherds/table'
import { TSituation } from '@/types/TSituation'
import { FeatherIcon } from '@featherds/icon'
import CheckCircle from '@featherds/icon/action/CheckCircle'
import Cancel from '@featherds/icon/action/Cancel'
import { sendFeedbackAcceptSituation } from '@/services/AlecService'
import { FeatherButton } from '@featherds/button'
import SituationMetrics from '@/components/SituationMetrics.vue'

import { useUserStore } from '@/store/useUserStore'
const userStore = useUserStore()

const props = defineProps<{
	alarmInfo: TSituation
}>()
const handleFeedbackSituation = (action: string) => {
	sendFeedbackAcceptSituation(props.alarmInfo?.id, action)
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
				<div class="id">
					<span>Situation - {{ props.alarmInfo?.id }}</span>
					<SeverityStatus :severity="props.alarmInfo?.severity" />
				</div>
				<div v-if="userStore.allowSave">
					<FeatherButton
						secondary
						class="btn"
						@click="() => handleFeedbackSituation('accepted')"
					>
						<FeatherIcon
							:icon="CheckCircle"
							aria-hidden="true"
							class="icon accept"
						/>
						Accept Situation
					</FeatherButton>
					<FeatherButton
						secondary
						class="btn"
						@click="() => handleFeedbackSituation('refused')"
					>
						<FeatherIcon
							:icon="Cancel"
							aria-hidden="true"
							class="icon reject"
						/>
						Reject Situation
					</FeatherButton>
				</div>
				<span v-html="props.alarmInfo.description"></span>
				<p>
					<strong>Last Event:</strong>
					{{ new Date(props.alarmInfo.lastEvent.time).toUTCString() }}
				</p>
				<p>
					<strong>First Event:</strong>
					{{ new Date(props.alarmInfo.lastEvent.createTime).toUTCString() }}
				</p>
				<p>
					<strong>Reduction key:</strong>
					{{ props.alarmInfo.reductionKey }}
				</p>
				<div>
					<table class="tc1 tr2 tc4 tr6" :class="{ condensed: true }">
						<thead>
							<tr>
								<FeatherSortHeader
									scope="col"
									property="Id"
									:sort="SORT.ASCENDING"
								>
									ID
								</FeatherSortHeader>
								<th scope="col">Severity</th>
								<th scope="col">Count</th>
								<th scope="col">Node</th>
								<th scope="col">Log msg</th>
							</tr>
						</thead>
						<tbody>
							<tr
								:class="[`${alarm.severity.toLowerCase()}-bg`]"
								v-for="alarm in props?.alarmInfo?.relatedAlarms"
								:key="alarm.id"
							>
								<td>{{ alarm.id }}</td>
								<td>{{ alarm.severity }}</td>
								<td>{{ alarm.count }}</td>
								<td>{{ alarm.nodeLabel }}</td>
								<td>{{ alarm.logMessage }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</FeatherTabPanel>
			<FeatherTabPanel class="panel"
				><SituationMetrics :situation="props?.alarmInfo"
			/></FeatherTabPanel>
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
	border: 1px solid $border-grey;
}
.panel {
	padding: 30px;
}

.id {
	font-weight: 600;
	font-size: 22px;
	margin-bottom: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

table {
	width: 100%;
	@include table();
	@include row-select();
	&.hover {
		@include row-hover();
	}
	&.condensed {
		@include table-condensed();
	}
}

.accept {
	font-size: 16px;
	color: green !important;
}
.reject {
	font-size: 16px;
	color: red !important;
}
</style>
