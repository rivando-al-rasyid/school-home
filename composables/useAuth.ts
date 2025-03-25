import { ref } from 'vue'

// This would be replaced with a proper auth store in a production app
const isAuthenticated = ref(false)
const userRole = ref<string | null>(null)

export const useAuth = () => {
  const login = (email: string, password: string, role: string) => {
    // In a real application, this would make an API call
    // and store tokens in cookies/localStorage
    isAuthenticated.value = true
    userRole.value = role
    return Promise.resolve({ success: true })
  }

  const logout = () => {
    isAuthenticated.value = false
    userRole.value = null
    return navigateTo('/')
  }

  const checkAuth = () => {
    // In development mode, bypass auth checks
    if (import.meta.env.DEV) {
      return true
    }
    return isAuthenticated.value
  }

  const checkRole = (requiredRole: string) => {
    // In development mode, bypass role checks
    if (import.meta.env.DEV) {
      return true
    }
    return userRole.value === requiredRole
  }

  return {
    isAuthenticated,
    userRole,
    login,
    logout,
    checkAuth,
    checkRole
  }
}
