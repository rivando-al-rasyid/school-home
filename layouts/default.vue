<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground">
    <!-- Header -->
    <header class="border-b bg-card shadow-sm">
    <div class="container mx-auto flex items-center justify-between px-4 py-4">
      <NuxtLink to="/">
        <div class="flex items-center">
          <img src="https://img.icons8.com/color/96/000000/school.png" alt="School Management System Logo" class="mr-3 h-12 w-auto" />
          <h1 class="text-2xl font-bold text-primary">School Management System</h1>
        </div>
      </NuxtLink>

      <!-- Desktop menu -->
      <nav class="hidden items-center space-x-6 md:flex">
        <NuxtLink to="/" class="text-muted-foreground transition duration-200 hover:text-primary">Home</NuxtLink>
        <NuxtLink to="/about" class="text-muted-foreground transition duration-200 hover:text-primary">About</NuxtLink>
        <NuxtLink to="/features" class="text-muted-foreground transition duration-200 hover:text-primary">Features</NuxtLink>
        <NuxtLink to="/students" class="text-muted-foreground transition duration-200 hover:text-primary">Students</NuxtLink>

        <div class="ml-4 flex gap-2">
          <template v-if="user">
            <NuxtLink to="/dashboard">
              <Button variant="default">Dashboard</Button>
            </NuxtLink>
          </template>
          <template v-else>
            <NuxtLink to="/login">
              <Button variant="outline">Log in</Button>
            </NuxtLink>
            <NuxtLink to="/register">
              <Button variant="default">Register</Button>
            </NuxtLink>
          </template>
        </div>
      </nav>

      <!-- Mobile menu button -->
      <button 
        @click="toggleMobileMenu" 
        class="md:hidden p-2"
        aria-label="Toggle menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          class="lucide lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>
    </div>
    
    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden p-4 border-t">
      <div class="flex flex-col space-y-3">
        <NuxtLink to="/" class="text-muted-foreground py-2 hover:text-primary">Home</NuxtLink>
        <NuxtLink to="/about" class="text-muted-foreground py-2 hover:text-primary">About</NuxtLink>
        <NuxtLink to="/features" class="text-muted-foreground py-2 hover:text-primary">Features</NuxtLink>
        <NuxtLink to="/students" class="text-muted-foreground py-2 hover:text-primary">Students</NuxtLink>
        
        <div class="flex gap-2 pt-2">
          <template v-if="user">
            <NuxtLink to="/dashboard" class="flex-1">
              <Button variant="default" class="w-full">Dashboard</Button>
            </NuxtLink>
          </template>
          <template v-else>
            <NuxtLink to="/login" class="flex-1">
              <Button variant="outline" class="w-full">Log in</Button>
            </NuxtLink>
            <NuxtLink to="/register" class="flex-1">
              <Button variant="default" class="w-full">Register</Button>
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </header>
    
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="bg-card py-12 border-t">
    <div class="container px-4 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center mb-4">
            <img src="https://img.icons8.com/color/96/000000/school.png" alt="School Management System Logo" class="mr-3 h-10 w-auto" />
            <h3 class="text-xl font-bold text-primary">SMS</h3>
          </div>

          <p class="text-muted-foreground">
            Empowering education through technology. Our platform connects students, teachers, and parents for better educational outcomes.
          </p>
        </div>

        <div>
          <h4 class="font-bold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-muted-foreground hover:text-primary">Home</NuxtLink></li>
            <li><NuxtLink to="#about" class="text-muted-foreground hover:text-primary">About</NuxtLink></li>
            <li><NuxtLink to="#features" class="text-muted-foreground hover:text-primary">Features</NuxtLink></li>
            <li><NuxtLink to="#contact" class="text-muted-foreground hover:text-primary">Contact</NuxtLink></li>
            <li><NuxtLink to="/privacy" class="text-muted-foreground hover:text-primary">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/terms" class="text-muted-foreground hover:text-primary">Terms of Service</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-4">Resources</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/blog" class="text-muted-foreground hover:text-primary">Blog</NuxtLink></li>
            <li><NuxtLink to="/help" class="text-muted-foreground hover:text-primary">Help Center</NuxtLink></li>
            <li><NuxtLink to="/faq" class="text-muted-foreground hover:text-primary">FAQs</NuxtLink></li>
            <li><NuxtLink to="/tutorials" class="text-muted-foreground hover:text-primary">Tutorials</NuxtLink></li>
            <li><NuxtLink to="/support" class="text-muted-foreground hover:text-primary">Support</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-4">Newsletter</h4>
          <p class="text-muted-foreground mb-4">Stay updated with our latest news and announcements</p>
          <div class="flex">
            <Input type="email" placeholder="Your email" class="rounded-r-none" />
            <Button class="rounded-l-none">Subscribe</Button>
          </div>
        </div>
      </div>

      <div class="border-t mt-12 pt-6 text-center text-muted-foreground">
        <p>&copy; {{ new Date().getFullYear() }} School Management System. All rights reserved.</p>
      </div>
    </div>
  </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Add the missing data properties and methods
const user = ref(null); // Replace with actual user auth logic when implemented
const mobileMenuOpen = ref(false);

// Toggle mobile menu function
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>
