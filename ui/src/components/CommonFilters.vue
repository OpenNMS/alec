<script setup lang="ts">
import ChipListByProperty from '@/components/ChipListByProperty.vue'
import { TAlarm, TSituation } from '@/types/TSituation'
import { FeatherAutocomplete } from '@featherds/autocomplete'
import { useSituationsStore } from '@/store/useSituationsStore'
import type { Ref } from 'vue'
import { ref, reactive } from 'vue'

type TState = {
	nodes: Record<string, string | number>[]
	results: Record<string, string | number>[]
	nodeSelectedValue: Record<string, string> | undefined
}

const props = defineProps<{
	list: TAlarm[]
	isSituation?: boolean
}>()
const emit = defineEmits(['filtered-list'])
const situationStore = useSituationsStore()

const severityFilters = ref(['all'])
const list = ref(props.list) as Ref<(TSituation | TAlarm)[]>
const loading = ref(false)

const state: TState = reactive({
	nodes: situationStore.nodes,
	results: situationStore.nodes,
	nodeSelectedValue: undefined
})

const updateListSeverities = (severities: string[]) => {
	severityFilters.value = severities
	filterByNode()
}

const search = (q: string) => {
	if (!q) {
		state.nodeSelectedValue = undefined
		return []
	}
	loading.value = true
	state.results = state.nodes
		.filter((x: any) => x.label.toLowerCase().indexOf(q) > -1)
		.map((x) => ({
			_text: x.label,
			id: x.id
		}))
	loading.value = false
}

const filterByNode = () => {
	let filtered = props.list as (TSituation | TAlarm)[]
	if (state.nodeSelectedValue && state.nodeSelectedValue._text) {
		if (props.isSituation) {
			filtered = filtered
				.map((s) => {
					const situation = s as TSituation
					const alarms = situation.relatedAlarms.filter(
						(a: TAlarm) => a.nodeLabel === state.nodeSelectedValue?._text
					)
					if (alarms.length > 0) {
						return s
					}
				})
				.filter((s) => s) as TSituation[]
		} else {
			filtered = filtered.filter(
				(s) => s.nodeLabel === state.nodeSelectedValue?._text
			)
		}
	}
	if (!severityFilters.value.includes('all')) {
		filtered = filtered.filter((a) =>
			severityFilters.value.includes(a.severity)
		)
	}
	list.value = filtered
	emit('filtered-list', filtered)
}
</script>

<template>
	<div>
		<FeatherAutocomplete
			class="map-search"
			label="Find by node"
			:loading="loading"
			v-model="state.nodeSelectedValue"
			:results="state.results"
			type="single"
			@search="search"
			@update:modelValue="filterByNode"
		>
		</FeatherAutocomplete>
		<ChipListByProperty
			:alarms="props.list"
			@selected-option="updateListSeverities"
			property="severity"
		/>
	</div>
</template>

<style lang="scss" scoped></style>
