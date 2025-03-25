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
          <form class="space-y-4" @submit.prevent="handleLogin">
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
              >
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
                >
                <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button type="button" class="focus:outline-none" @click="showPassword = !showPassword">
                    <NuxtIcon v-if="showPassword" name="lucide:eye" class="text-gray-500" size="18px" />
                    <NuxtIcon v-else name="lucide:eye-off" class="text-gray-500" size="18px" />
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Remember Me -->
            <div class="flex items-center space-x-2">
              <input 
                id="remember"
                v-model="formData.rememberMe"
                type="checkbox"
                class="rounded border-gray-300 text-primary focus:ring-primary"
              >
              <label for="remember" class="text-sm text-gray-600">
                Remember me for 30 days
              </label>
            </div>
            
            <!-- Login Button -->
            <Button 
              type="submit" 
              class="w-full"
              :disabled="isSubmitting || !formData.role"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center">
                <NuxtIcon name="lucide:loader" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" />
                Signing in...
              </span>
              <span v-else>Sign in</span>
            </Button>
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

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';

interface LoginData {
  email: string;
  password: string;
  remember?: boolean;
}

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
  role: string;
}

const router = useRouter();
// Use a mock API or define inline since the actual API implementation isn't available
const useApi = () => ({
  post: async (endpoint: string, data: LoginData) => {
    // This is a placeholder implementation
    console.log('API call to', endpoint, 'with data', data);
    // Simulating successful API call
    return Promise.resolve({ success: true });
  }
});
const api = useApi();

const formData = ref<FormData>({
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
    await api.post(getRoleEndpoint(), {
      email: formData.value.email,
      password: formData.value.password,
      remember: formData.value.rememberMe
    });
    
    // Redirect to role-specific dashboard on success
    router.push(getDashboardRoute());
    
  } catch (error: unknown) {
    console.error('Login error:', error);
    errorMessage.value = error instanceof Error ? error.message : 'Authentication failed. Please check your credentials and try again.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>