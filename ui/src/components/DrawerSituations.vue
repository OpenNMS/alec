<script setup lang="ts">
import { FeatherDrawer } from '@featherds/drawer'
import { useSituationsStore } from '@/store/useSituationsStore'
import SituationCard from '@/components/SituationCard.vue'
import { ref, watch, markRaw } from 'vue'
import CommonFilters from '@/components/CommonFilters.vue'
import { TSituation } from '@/types/TSituation'

const emit = defineEmits(['situation-selected', 'drawer-closed'])

const props = defineProps<{
	situationId: number
	visible: boolean
}>()
const situationStore = useSituationsStore()
const visible = ref(props.visible)

const filterById = () => {
	return situationStore.situations.filter((s) => s.id != props.situationId)
}
const sitStore = ref(filterById)
const situations = ref(filterById)

watch(props, () => {
	visible.value = props.visible
})

watch(
	() => situationStore.situations,
	() => {
		const filtered = filterById()
		sitStore.value = filtered
		situations.value = filtered
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
			<h4 class="title">CHOOSE THE SITUATION:</h4>

			<CommonFilters :list="sitStore" isSituation @filtered-list="filterList" />
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

.content {
	padding: 10px;
	width: 700px;
}
.title {
	color: #494949e6;
}
.situation-list {
	margin-top: 20px;
	overflow-y: scroll;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	height: 750px;
	align-content: flex-start;
	padding-right: 7px;
}
.card {
	width: 325px;
	margin-bottom: 10px;
}

.empty {
	padding-top: 40px;
	margin: auto;
}
</style>
