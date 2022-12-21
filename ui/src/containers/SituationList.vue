<script setup lang="ts">
import { useSituationsStore } from '@/store/useSituationsStore'
import SituationCard from '@/components/SituationCard.vue'
import SimplePagination from '@/components/SimplePagination.vue'
import CommonFilters from '@/components/CommonFilters.vue'

import { FeatherButton } from '@featherds/button'
import { FeatherIcon } from '@featherds/icon'
import Add from '@featherds/icon/action/Add'
import View from '@featherds/icon/action/View'
import Settings from '@featherds/icon/action/Settings'
import { reactive, ref, watch, markRaw } from 'vue'
import { chunk } from 'lodash'
import { TSituation } from '@/types/TSituation'
import useRouter from '@/composables/useRouter'
import { FeatherSpinner } from '@featherds/progress'

import NewSituationBtn from '@/elements/NewSituationBtn.vue'
import ConfigurationInfo from '@/components/ConfigurationInfo.vue'
import { useUserStore } from '@/store/useUserStore'
import NoResults from '@/elements/NoResults.vue'

const Icons = markRaw({
	Add,
	View,
	Settings
})

const router = useRouter()
const situationStore = useSituationsStore()
const userStore = useUserStore()

situationStore.getSituations()
situationStore.getNodes()
situationStore.getUnassignedAlarms()
userStore.getEngineInfo()

const PAGE_SIZE = 9

type TState = {
	situations: TSituation[]
	selectedSituationIndex: number
	situationSelected: number | null
	nodes: Record<string, string | number>[]
	results: Record<string, string | number>[]
	nodeSelectedValue: Record<string, string> | undefined
	allSituations: Array<TSituation>[]
}
const state: TState = reactive({
	situations: [],
	selectedSituationIndex: 0,
	situationSelected: null,
	nodes: [],
	results: [],
	nodeSelectedValue: undefined,
	allSituations: []
})
const loading = ref(true)
const currentPage = ref(0)
const totalPages = ref(1)
const totalSituations = ref(0)

const setNodes = () => {
	state.nodes = situationStore.nodes
	state.results = situationStore.nodes
}
watch(
	() => situationStore.situations,
	() => {
		loading.value = false
		setNodes()
		initPaging(situationStore.situations)
	}
)

const onGotoPage = (nextPage: number) => {
	currentPage.value = nextPage
	state.situations = state.allSituations[currentPage.value]
}

const showDetail = (id: number) => {
	router.push({
		name: 'situationDetail',
		params: {
			id
		}
	})
}

const viewUnassignedAlarms = () => {
	router.push({
		name: 'viewUnassignedAlarms'
	})
}

const initPaging = (list: TSituation[]) => {
	totalSituations.value = list.length
	state.allSituations = chunk(list, PAGE_SIZE)
	const ids = list.map((s) => s.id)
	situationStore.filteredSituations = ids
	currentPage.value = 0
	state.situations = state.allSituations[0]
	totalPages.value = state.allSituations.length
}

const filterList = (list: TSituation[]) => {
	if (list.length) {
		initPaging(list)
	} else {
		state.situations = []
	}
}
</script>

<template>
	<div class="list-main">
		<div class="header">
			<h2>Situation List</h2>
			<div class="link-btns">
				<FeatherButton
					class="view-situation-btn"
					@click="() => viewUnassignedAlarms()"
				>
					<FeatherIcon :icon="Icons.View" aria-hidden="true" class="icon" />
					<span>View Unassociated Alarms</span>
				</FeatherButton>
				<NewSituationBtn />
				<ConfigurationInfo />
			</div>
		</div>
		<div class="content">
			<div class="left-filters">
				<CommonFilters
					:list="situationStore.situations"
					@filtered-list="filterList"
					isOpen
					isSituation
					saveFilters
				/>
			</div>

			<div class="container">
				<div class="autocomplete">
					<div v-if="state.situations && state.situations.length">
						Result: {{ state.situations?.length }} of
						{{ totalSituations }}
					</div>
				</div>
				<FeatherSpinner class="spinner" v-if="loading" />
				<div v-else>
					<div v-if="state.situations && state.situations.length">
						<div class="situation-list">
							<div
								class="card"
								v-for="situationInfo in state.situations"
								:key="situationInfo.id"
							>
								<SituationCard
									@click="() => showDetail(situationInfo.id)"
									:situation-info="situationInfo"
								/>
							</div>
						</div>
						<div class="footer-pager" v-if="totalSituations > PAGE_SIZE">
							<div>Page: {{ currentPage + 1 }} of {{ totalPages }}</div>
							<SimplePagination
								@go-to-page="onGotoPage"
								:currentPage="currentPage"
								:totalPages="totalPages"
							/>
						</div>
					</div>
					<NoResults v-else />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.header {
	display: flex;
	justify-content: space-between;
}

.link-btns {
	display: flex;
	align-items: center;
}

.view-situation-btn {
	background-color: #465cae !important;
	color: white !important;
	height: 44px !important;
}

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

.content {
	display: flex;
	margin-top: 20px;
}

.list-main {
	min-height: 800px;
}

.icon {
	font-size: 17px;
	margin-right: 5px;
}

h2 {
	margin-top: 0;
	margin-bottom: 15px !important;
}

.autocomplete {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 15px;
}

.left-filters {
	width: 25%;
	background-color: white;
	margin-right: 15px;
	border: 1px solid $border-grey;
}
.container {
	display: flex;
	padding-top: 20px;
	flex-direction: column;
	border: 1px solid $border-grey;
	background-color: #ffffff;
	width: 100%;
	min-height: 750px;
}

.situation-list {
	display: flex;
	margin: 0px auto;
	flex-wrap: wrap;
	width: 100%;
	padding-bottom: 15px;

	> div {
		width: 32%;
		margin-top: 20px;
		margin-left: 1%;
	}
}

.footer-pager {
	display: flex;
	justify-content: center;
	margin-top: auto;
	margin-bottom: 30px;
	> :first-child {
		margin-right: 15px;
	}
}

.empty {
	padding-left: var($spacing-xl);
	border: none;
	font-size: 16px;
}
.spinner {
	margin: 100px auto;
}
</style>
