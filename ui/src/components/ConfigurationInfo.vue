<script setup lang="ts">
import { useUserStore } from '@/store/useUserStore'
import CONST from '@/helpers/constants'
import useRouter from '@/composables/useRouter'

import DeepLearning from '@/assets/option1.svg'
import Cluster from '@/assets/option2.svg'
const router = useRouter()
const userStore = useUserStore()

const showSettings = () => {
	router.push({
		name: 'settings'
	})
}
</script>

<template>
	<div class="info-engine">
		<img
			:src="
				userStore.engineInfo?.engineName == CONST.ENGINE_DBSCAN
					? Cluster
					: DeepLearning
			"
			class="icon-type"
		/>

		<div class="engine" @click="showSettings">
			ENGINE
			<div
				v-if="userStore.engineInfo?.engineName == CONST.ENGINE_DBSCAN"
				class="type"
			>
				CLUSTERING
			</div>
			<div v-else class="type">DEEP LEARNING</div>
		</div>
	</div>
	<div class="optin" @click="showSettings">
		OPT-IN
		<div v-if="userStore.allowSave" class="optin-on">ON</div>
		<div v-else class="optin-off">OFF</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.box-info {
	display: flex;
	flex-direction: column;
	font-size: 10px;
	align-items: center;
	font-weight: 600;
	line-height: 20px;
	margin-left: 8px;
	color: #636363;
}

.info-engine {
	display: flex;
	border: 1px solid $border-grey;
	border-radius: 5px;
	padding: 1px 7px;
	cursor: pointer;
	margin-left: 8px;

	.icon-type {
		width: 28px;
		filter: invert(12%) sepia(72%) saturate(8824%) hue-rotate(236deg)
			brightness(100%) contrast(46%);
	}
}
.engine {
	@extend .box-info;
	.type {
		color: #065eca;
	}
}

.optin {
	border: 1px solid $border-grey;
	border-radius: 5px;
	padding: 1px 7px;
	cursor: pointer;

	@extend .box-info;
	.optin-on {
		font-size: 18px;
		color: green;
	}
	.optin-off {
		font-size: 18px;
		color: red;
	}
}
</style>
