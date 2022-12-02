<script setup lang="ts">
import Add from '@featherds/icon/action/Add'
import { useRouter } from 'vue-router'
import { FeatherButton } from '@featherds/button'
import { FeatherIcon } from '@featherds/icon'
import { markRaw } from 'vue'

const router = useRouter()

const Icons = markRaw({
	Add
})
const addNewSituation = () => {
	router.push({
		name: 'addSituation'
	})
}
</script>

<template>
	<FeatherButton class="new-situation-btn" @click="() => addNewSituation()">
		<FeatherIcon :icon="Icons.Add" aria-hidden="true" class="icon" />
		<span>New Situation</span>
	</FeatherButton>
</template>

<style lang="scss" scoped>
.new-situation-btn {
	height: 44px !important;
	background-color: #46ae46 !important;
	color: white !important;
}

.icon {
	font-size: 22px;
	margin-right: 5px;
	vertical-align: text-bottom;
}
</style>
