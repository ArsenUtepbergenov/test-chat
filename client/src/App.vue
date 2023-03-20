<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/store/user'

const store = useUserStore()

onMounted(() => {
  if (localStorage.getItem('token')) {
    store.checkAuth()
  }
})
</script>
