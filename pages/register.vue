<template>
  <div class="container mx-auto py-16 px-4">
    <div class="max-w-md mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-primary">School Management System</h1>
        <p class="text-muted-foreground mt-2">Education simplified, success amplified</p>
      </div>
      
      <Card class="shadow-lg border-t-4 border-t-primary">
        <CardHeader class="space-y-1">
          <CardTitle class="text-2xl font-bold text-center">Create an Account</CardTitle>
          <CardDescription class="text-center">Enter your information to register for our school portal</CardDescription>
        </CardHeader>
        <CardContent>
          <form @submit.prevent="handleRegister" class="space-y-4">
            <!-- Full Name -->
            <div class="space-y-2">
              <Label for="fullName">Full Name</Label>
              <Input
                id="fullName"
                v-model="formData.fullName"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
            
            <!-- Email -->
            <div class="space-y-2">
              <Label for="email">Email</Label>
              <Input
                id="email"
                v-model="formData.email"
                type="email"
                placeholder="john.doe@example.com"
                required
              />
              <p v-if="errors.email" class="text-sm text-destructive mt-1">{{ errors.email }}</p>
            </div>
            
            <!-- Password -->
            <div class="space-y-2">
              <Label for="password">Password</Label>
              <div class="relative">
                <Input
                  id="password"
                  v-model="formData.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                />
                <button 
                  type="button" 
                  @click="showPassword = !showPassword" 
                  class="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <EyeOff v-if="showPassword" class="text-gray-500" size="18" />
                  <Eye v-else class="text-gray-500" size="18" />
                </button>
              </div>
              <p v-if="errors.password" class="text-sm text-destructive mt-1">{{ errors.password }}</p>
            </div>
            
            <!-- Confirm Password -->
            <div class="space-y-2">
              <Label for="confirmPassword">Confirm Password</Label>
              <div class="relative">
                <Input
                  id="confirmPassword"
                  v-model="formData.confirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  required
                />
                <button 
                  type="button" 
                  @click="showConfirmPassword = !showConfirmPassword" 
                  class="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <EyeOff v-if="showConfirmPassword" class="text-gray-500" size="18" />
                  <Eye v-else class="text-gray-500" size="18" />
                </button>
              </div>
              <p v-if="errors.confirmPassword" class="text-sm text-destructive mt-1">{{ errors.confirmPassword }}</p>
            </div>
            
            <!-- User Role -->
            <div class="space-y-2">
              <Label for="role">Register as</Label>
              <Select v-model="formData.role">
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="parent">Parent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <!-- Grade/Class (Student Only) -->
            <div v-if="formData.role === 'student'" class="space-y-2">
              <Label for="grade">Grade/Class Level</Label>
              <Select v-model="formData.grade">
                <SelectTrigger>
                  <SelectValue placeholder="Select your grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Elementary</SelectLabel>
                    <SelectItem v-for="grade in [1, 2, 3, 4, 5]" :key="grade" :value="'elementary-' + grade">
                      Grade {{ grade }}
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Middle School</SelectLabel>
                    <SelectItem v-for="grade in [6, 7, 8]" :key="grade" :value="'middle-' + grade">
                      Grade {{ grade }}
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>High School</SelectLabel>
                    <SelectItem v-for="grade in [9, 10, 11, 12]" :key="grade" :value="'high-' + grade">
                      Grade {{ grade }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            <!-- Subject (Teacher Only) -->
            <div v-if="formData.role === 'teacher'" class="space-y-2">
              <Label for="subject">Primary Subject</Label>
              <Input
                id="subject"
                v-model="formData.subject"
                type="text"
                placeholder="e.g. Mathematics, Science, English"
              />
            </div>
            
            <!-- Child Information (Parent Only) -->
            <div v-if="formData.role === 'parent'" class="space-y-2">
              <Label for="childName">Child's Name</Label>
              <Input
                id="childName"
                v-model="formData.childName"
                type="text"
                placeholder="Enter your child's full name"
              />
            </div>
            
            <!-- Terms Agreement -->
            <div class="flex items-center space-x-2">
              <Checkbox id="terms" v-model="formData.termsAgreed" />
              <label for="terms" class="text-sm text-gray-600">
                I agree to the 
                <NuxtLink to="/terms" class="text-primary hover:underline">Terms of Service</NuxtLink> and 
                <NuxtLink to="/privacy" class="text-primary hover:underline">Privacy Policy</NuxtLink>
              </label>
            </div>
            
            <!-- Submit Button -->
            <Button 
              type="submit" 
              variant="default" 
              class="w-full"
              :disabled="isSubmitting || !formData.termsAgreed"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center">
                <Loader2 class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" />
                Creating account...
              </span>
              <span v-else>Create Account</span>
            </Button>
          </form>
        </CardContent>
        
        <CardFooter class="flex flex-col space-y-4">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <span class="w-full border-t"></span>
            </div>
            <div class="relative flex justify-center text-xs uppercase">
              <span class="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <Button variant="outline">
              <Github class="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button variant="outline">
              <Linkedin class="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
          </div>
          <p class="text-center text-sm text-gray-600 mt-4">
            Already have an account?
            <NuxtLink to="/login" class="text-primary hover:underline">Sign in</NuxtLink>
          </p>
        </CardFooter>
      </Card>

      <div class="text-center mt-8 text-sm text-gray-500">
        <p>By signing up, you agree to our 
          <NuxtLink to="/terms" class="text-primary hover:underline">Terms of Service</NuxtLink> and
          <NuxtLink to="/privacy" class="text-primary hover:underline">Privacy Policy</NuxtLink>
        </p>
        <p class="mt-2">Need help? <NuxtLink to="/help" class="text-primary hover:underline">Visit our Help Center</NuxtLink></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const formData = ref({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: '',
  grade: '',
  subject: '',
  childName: '',
  termsAgreed: false
});

const isSubmitting = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const errors = ref({});

// Validate form before submission
const validateForm = () => {
  // Reset errors
  errors.value = {};
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.value.email)) {
    errors.value.email = 'Please enter a valid email address';
  }
  
  // Password validation (at least 8 characters, 1 uppercase, 1 lowercase, 1 number)
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(formData.value.password)) {
    errors.value.password = 'Password must be at least 8 characters with at least one uppercase letter, one lowercase letter, and one number';
  }
  
  // Password confirmation
  if (formData.value.password !== formData.value.confirmPassword) {
    errors.value.confirmPassword = 'Passwords do not match';
  }
  
  return Object.keys(errors.value).length === 0;
};

const getRoleEndpoint = () => {
  switch (formData.value.role) {
    case 'student':
      return '/api/student/register';
    case 'teacher':
      return '/api/teacher/register';
    case 'parent':
      return '/api/parent/register';
    default:
      return '/api/register';
  }
};

const handleRegister = async () => {
  if (!validateForm()) {
    return;
  }
  
  isSubmitting.value = true;
  
  try {
    // Prepare payload based on user role
    const payload = {
      name: formData.value.fullName,
      email: formData.value.email,
      password: formData.value.password,
      password_confirmation: formData.value.confirmPassword,
    };
    
    // Add role-specific data
    if (formData.value.role === 'student') {
      payload.grade = formData.value.grade;
    } else if (formData.value.role === 'teacher') {
      payload.subject = formData.value.subject;
    } else if (formData.value.role === 'parent') {
      payload.child_name = formData.value.childName;
    }
    
    // Register using API composable
    const response = await api.post(getRoleEndpoint(), payload);
    
    // Redirect to login page after successful registration
    router.push({
      path: '/login',
      query: { 
        role: formData.value.role,
        registered: 'success'
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    // Handle specific errors from API response if needed
    if (error.response?.data?.errors) {
      // Map backend validation errors to form errors
      const backendErrors = error.response.data.errors;
      
      if (backendErrors.email) {
        errors.value.email = backendErrors.email[0];
      }
      if (backendErrors.password) {
        errors.value.password = backendErrors.password[0];
      }
    }
  } finally {
    isSubmitting.value = false;
  }
};
</script>
