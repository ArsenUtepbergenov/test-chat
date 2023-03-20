<template>
  <section class="home">
    <h1>{{ store.isAuth ? `User: ${store.user.email}` : '' }}</h1>
    <LoginForm />
  </section>
</template>

<script setup>
import LoginForm from '@/components/LoginForm.vue'
import { useUserStore } from '@/store/user'

const store = useUserStore()
</script>
