<script setup lang="ts">
import MainContainer from '@/containers/MainContainer.vue'
</script>

<template>
	<MainContainer />
</template>

<style>
body {
	padding: 0;
	margin: 0;
	background-color: #f4f7fc;
}

.label-border {
	display: none !important;
}

.feather-input-sub-text {
	display: none !important; /* it add a lot of space under radio group */
}
</style>
