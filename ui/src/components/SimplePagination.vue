<script setup lang="ts">
import { FeatherIcon } from '@featherds/icon'

import FirstPage from '@featherds/icon/navigation/FirstPage'
import LastPage from '@featherds/icon/navigation/LastPage'
import ChevronLeft from '@featherds/icon/navigation/ChevronLeft'
import ChevronRight from '@featherds/icon/navigation/ChevronRight'

const props = defineProps<{
	totalPages: number
	currentPage: number
}>()
const emit = defineEmits(['go-to-page'])

const onGotoPage = (nextPage: number) => {
	if (nextPage >= 0 && nextPage <= props.totalPages - 1) {
		emit('go-to-page', nextPage)
	}
}
</script>
<template>
	<div class="paginator">
		<FeatherIcon
			:icon="FirstPage"
			aria-hidden="true"
			class="icon nav"
			:class="{ disable: props.currentPage == 0 }"
			@click="onGotoPage(0)"
		/>
		<FeatherIcon
			:icon="ChevronLeft"
			aria-hidden="true"
			class="icon nav"
			:class="{ disable: props.currentPage == 0 }"
			@click="onGotoPage(props.currentPage - 1)"
		/>
		<FeatherIcon
			:icon="ChevronRight"
			aria-hidden="true"
			class="icon nav"
			:class="{ disable: props.currentPage == props.totalPages - 1 }"
			@click="onGotoPage(props.currentPage + 1)"
		/>
		<FeatherIcon
			:icon="LastPage"
			aria-hidden="true"
			class="icon nav"
			:class="{ disable: props.currentPage == props.totalPages - 1 }"
			@click="onGotoPage(props.totalPages - 1)"
		/>
	</div>
</template>
<style lang="scss" scoped>
.paginator {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.nav {
	font-size: 28px;
	color: #0659a6;
	cursor: pointer;
	&:hover {
		border: 1px solid #dfdfdf;
		border-radius: 25px;
		background-color: #dfdfdf;
	}
	&.disable {
		color: #c6c6c6;
	}
}
</style>
