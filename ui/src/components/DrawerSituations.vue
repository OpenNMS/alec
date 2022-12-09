<script setup lang="ts">
import { FeatherDrawer } from '@featherds/drawer'
import { useSituationsStore } from '@/store/useSituationsStore'
import SituationCard from '@/components/SituationCard.vue'
import { ref, watch } from 'vue'
import CommonFilters from '@/components/CommonFilters.vue'
import { TSituation } from '@/types/TSituation'
import { FeatherButton } from '@featherds/button'
import { FeatherIcon } from '@featherds/icon'
import FilterAlt from '@featherds/icon/action/FilterAlt'

const emit = defineEmits(['situation-selected', 'drawer-closed'])

const props = defineProps<{
	situationId: number
	visible: boolean
}>()
const situationStore = useSituationsStore()
const visible = ref(props.visible)
const showFilters = ref(false)
const filtersCount = ref(0)
const situations = ref(situationStore.situations)

watch(props, () => {
	visible.value = props.visible
})

watch(
	() => situationStore.situations,
	() => {
		situations.value = situationStore.situations
	}
)

const filterList = (list: TSituation[]) => {
	situations.value = list
}
</script>

<template>
	<FeatherDrawer
		v-model="visible"
		:labels="{ close: 'close', title: 'Situations' }"
		@update:modelValue="emit('drawer-closed')"
	>
		<div class="content">
			<h4>Choose the situation:</h4>

			<FeatherButton
				class="btn-type"
				@click="() => (showFilters = !showFilters)"
			>
				<FeatherIcon :icon="FilterAlt" aria-hidden="true" class="icon" />
				Filters <span class="count">{{ filtersCount }}</span>
			</FeatherButton>
			<div v-show="showFilters" class="filters">
				<CommonFilters
					:list="
						situationStore.situations.filter((s) => s.id != props.situationId)
					"
					@filtered-list="filterList"
					@filters-count="(value) => (filtersCount = value)"
				/>
			</div>
			<div v-if="situations.length" class="situation-list">
				<div
					class="card"
					v-for="situationInfo in situations"
					:key="situationInfo.id"
				>
					<SituationCard
						@click="emit('situation-selected', situationInfo.id)"
						:situation-info="situationInfo"
						small
					/>
				</div>
			</div>
			<div v-else class="empty">No results found</div>
		</div>
	</FeatherDrawer>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.box {
	border: 1px solid $border-grey;
	padding: 5px 20px;
	width: fit-content;
	margin: 10px 0;
	text-align: center;
}
.label {
	font-weight: 600;
	font-size: 15px;
}
.date {
	font-size: 12px;
}

.content {
	padding: 10px;
	width: 700px;
}

.situation-list {
	margin-top: 20px;
	overflow-y: scroll;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	height: 750px;
	align-content: flex-start;
	padding-right: 15px;
}
.card {
	width: 325px;
	margin-bottom: 10px;
}

.btn-type {
	width: 100%;
	text-align: left;
	height: 42px !important;
	border-radius: 0 !important;
	margin-top: 10px;
	box-shadow: var(--feather-shadow-2);
	border: 1px solid $border-grey;
	border-bottom: none;
	background-color: #eeeeee;
}

.filters {
	padding: 10px;
	padding-top: 15px;
	border: 1px solid $border-grey;
	border-top: none;
}

.count {
	font-size: 16px;
	font-weight: 600;
	margin-left: 5px;
	background-color: #afc3c3;
	padding: 1px 7px;
	border-radius: 20px;
}

.icon {
	font-size: 22px;
	color: #627272;
	vertical-align: text-bottom;
}

.empty {
	padding-top: 40px;
	margin: auto;
}
</style>
