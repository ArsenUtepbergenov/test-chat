<template>
  <section class="login">
    <form class="form" @submit.prevent="login">
      <div class="input-group">
        <input
          type="email"
          class="form-control"
          placeholder="Email..."
          v-model="formState.email"
          autocomplete="on"
          required
        />
      </div>
      <div class="input-group">
        <input
          type="password"
          class="form-control"
          placeholder="Password..."
          v-model="formState.password"
          autocomplete="off"
          required
        />
      </div>
      <button type="submit" class="btn" :disabled="isDisabled">Login</button>
    </form>
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useUserStore } from '@/store/user'

const store = useUserStore()

const formState = reactive({
  email: '',
  password: '',
})

function login() {
  console.log('login')
  store.login(formState.email, formState.password)
}

const isDisabled = computed(() => formState.email === '' || formState.password === '')
</script>

<style scoped></style>
