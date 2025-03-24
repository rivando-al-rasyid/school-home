<template>
    <div class="container mx-auto py-16 px-4">
      <div class="max-w-md mx-auto">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-primary">School Management System</h1>
          <p class="text-muted-foreground mt-2">Education simplified, success amplified</p>
        </div>
        
        <div class="shadow-lg border-t-4 border-t-primary bg-white rounded-lg">
          <div class="space-y-1 p-6 border-b">
            <h2 class="text-2xl font-bold text-center">Login</h2>
            <p class="text-center text-gray-500">Sign in to access your dashboard</p>
          </div>
          <div class="p-6">
            <form @submit.prevent="handleLogin" class="space-y-4">
              <!-- Error message display -->
              <div v-if="errorMessage" class="p-3 text-sm bg-red-50 text-red-600 rounded border border-red-200">
                {{ errorMessage }}
              </div>
              
              <!-- Role Selection -->
              <div class="space-y-2">
                <label for="role" class="text-sm font-medium">Login As</label>
                <select
                  id="role"
                  v-model="formData.role"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select your role</option>
                  <option value="admin">Administrator</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                  <option value="parent">Parent</option>
                </select>
              </div>
              
              <!-- Email -->
              <div class="space-y-2">
                <label for="email" class="text-sm font-medium">Email</label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  :placeholder="getEmailPlaceholder()"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <!-- Password -->
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <label for="password" class="text-sm font-medium">Password</label>
                  <a href="/forgot-password" class="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div class="relative">
                  <input
                    id="password"
                    v-model="formData.password"
                    :type="showPassword ? 'text' : 'password'"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button 
                    type="button" 
                    @click="showPassword = !showPassword" 
                    class="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500">
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                      <line x1="2" x2="22" y1="2" y2="22"></line>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              
              <!-- Remember Me -->
              <div class="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="remember" 
                  v-model="formData.rememberMe"
                  class="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label for="remember" class="text-sm text-gray-600">
                  Remember me for 30 days
                </label>
              </div>
              
              <!-- Login Button -->
              <button 
                type="submit" 
                class="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                :disabled="isSubmitting || !formData.role"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
                <span v-else>Sign in</span>
              </button>
            </form>
          </div>
          
          <div class="p-6 border-t flex flex-col space-y-4">
            <p class="text-center text-sm text-gray-600">
              Don't have an account?
              <NuxtLink to="/register" class="text-primary hover:underline">Register here</NuxtLink>
            </p>
          </div>
        </div>
  
        <div class="text-center mt-8 text-sm text-gray-500">
          <p>By signing in, you agree to our 
            <NuxtLink to="/terms" class="text-primary hover:underline">Terms of Service</NuxtLink> and
            <NuxtLink to="/privacy" class="text-primary hover:underline">Privacy Policy</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const router = useRouter();
  const api = useApi();
  
  const formData = ref({
    email: '',
    password: '',
    rememberMe: false,
    role: ''
  });
  
  const isSubmitting = ref(false);
  const showPassword = ref(false);
  const errorMessage = ref('');
  
  const getEmailPlaceholder = () => {
    switch (formData.value.role) {
      case 'admin':
        return 'admin@school.com';
      case 'teacher':
        return 'teacher@school.com';
      case 'student':
        return 'student@school.com';
      case 'parent':
        return 'parent@school.com';
      default:
        return 'email@example.com';
    }
  };

  const getRoleEndpoint = () => {
    switch (formData.value.role) {
      case 'admin':
        return '/api/admin/login';
      case 'teacher':
        return '/api/teacher/login';
      case 'student':
        return '/api/student/login';
      case 'parent':
        return '/api/parent/login';
      default:
        return '/api/login';
    }
  };

  const getDashboardRoute = () => {
    switch (formData.value.role) {
      case 'admin':
        return '/admin/dashboard';
      case 'teacher':
        return '/teacher/dashboard';
      case 'student':
        return '/student/dashboard';
      case 'parent':
        return '/parent/dashboard';
      default:
        return '/dashboard';
    }
  };
  
  const handleLogin = async () => {
    if (!formData.value.role) {
      errorMessage.value = 'Please select your role';
      return;
    }
    
    isSubmitting.value = true;
    errorMessage.value = '';
    
    try {
      // Using the API composable for login
      const response = await api.post(getRoleEndpoint(), {
        email: formData.value.email,
        password: formData.value.password,
        remember: formData.value.rememberMe
      });
      
      // Redirect to role-specific dashboard on success
      router.push(getDashboardRoute());
      
    } catch (error) {
      console.error('Login error:', error);
      errorMessage.value = error.message || 'Authentication failed. Please check your credentials and try again.';
    } finally {
      isSubmitting.value = false;
    }
  };
  </script>