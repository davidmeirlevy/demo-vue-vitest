<script setup lang="ts">
import {computed, ref} from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

const color = computed(() => count.value % 2 ? 'green' : 'yellow')
</script>

<template>
	<h1>{{ msg }}</h1>
	<button type="button" @click="count++">count is: {{ count }}</button>
</template>

<style scoped>
button {
	padding: 10px;
	background-color: v-bind(color);
}
</style>
