<script setup lang="ts">
import { FeatherDrawer } from '@featherds/drawer'
import { useSituationsStore } from '@/store/useSituationsStore'
import SituationCard from '@/components/SituationCard.vue'
import { ref, watch } from 'vue'

const emit = defineEmits(['situation-selected', 'drawer-closed'])

const props = defineProps<{
	visible: boolean
}>()
const situationStore = useSituationsStore()
const visible = ref(props.visible)

watch(props, () => {
	visible.value = props.visible
})
</script>

<template>
	<FeatherDrawer
		v-model="visible"
		:labels="{ close: 'close', title: 'Situations' }"
		@update:modelValue="emit('drawer-closed')"
	>
		<div class="content">
			<h3>Situations:</h3>
			<div class="situation-list">
				<div
					class="card"
					v-for="situationInfo in situationStore.situations"
					:key="situationInfo.id"
				>
					<SituationCard
						@click="emit('situation-selected', situationInfo.id)"
						:situation-info="situationInfo"
						small
					/>
				</div>
			</div>
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
	overflow-y: auto;
	height: 800px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.card {
	margin-bottom: 10px;
	width: 328px;
}
</style>
