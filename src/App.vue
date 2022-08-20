<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
onMounted(() => {
  router.push('/home')
})
</script>

<template>
  <div class="h-screen w-screen">
    <router-view />
  </div>
</template>

<style scoped>
</style>
