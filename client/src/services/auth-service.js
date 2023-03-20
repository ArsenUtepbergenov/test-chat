import api from '../http/api.js'

export default class AuthService {
  static async registration(email, password) {
    return api.post('/registration', { email, password })
  }

  static async login(email, password) {
    return api.post('/login', { email, password })
  }

  static async logout() {
    return api.post('/logout')
  }
}