import { defineStore } from 'pinia'
import AuthService from '../services/auth-service'
import axios from 'axios'
import { API_URL } from '../http/api'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: {},
    isAuth: false,
  }),
  actions: {
    setAuth(payload) {
      this.isAuth = payload
    },
    setUser(user) {
      this.user = user
    },
    clear() {
      this.$reset()
    },
    async login(email, password) {
      try {
        const response = await AuthService.login(email, password)
        console.log(response)
        localStorage.setItem('token', response.data.accessToken)
        this.setAuth(true)
        this.setUser(response.data.user)
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    },
    async logout() {
      try {
        const response = await AuthService.logout()
        localStorage.removeItem('token')
        this.setAuth(false)
        this.setUser({})
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    },
    async checkAuth() {
      try {
        console.log('checkAuth')

        const response = await axios.get(`${API_URL}/refresh`, {
          withCredentials: true,
        })

        console.log(response)
        localStorage.setItem('token', response.data.accessToken)
        this.setAuth(true)
        this.setUser(response.data.user)
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    },
  },
})
