<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useUserStore } from '@/store/user'

const store = useUserStore()

onBeforeMount(() => {
  if (localStorage.getItem('token')) {
    store.checkAuth()
  }
})
</script>
