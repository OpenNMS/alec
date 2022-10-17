<script setup lang="ts">
import useRouter from '@/composables/useRouter'
import { FeatherButton } from '@featherds/button'

const router = useRouter()

const reload = () => {
	router.push({ name: 'situations' })
}
</script>

<template>
	<div class="main">Something bad is happening...</div>
	<FeatherButton primary @click="reload"> Reload </FeatherButton>
</template>

<style scoped>
.main {
	margin-top: 20px;
	font-size: 18px;
	margin-bottom: 50px;
}

.link {
	cursor: pointer;
}
</style>
