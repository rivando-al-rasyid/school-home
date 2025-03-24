<template>
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center">Welcome to Our School</h1>
    
    <div class="max-w-6xl mx-auto">
      <!-- Hero section -->
      <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 class="text-3xl font-bold mb-4">Your Path to Educational Excellence</h2>
          <p class="text-muted-foreground mb-6">
            Our school management system provides a comprehensive platform for students, teachers, and parents to collaborate, communicate, and excel in the educational journey.
          </p>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="mt-1 p-1.5 rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <div>
                <h3 class="font-semibold">Personalized Learning</h3>
                <p class="text-sm text-muted-foreground">Tailored educational experiences for every student</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="mt-1 p-1.5 rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <div>
                <h3 class="font-semibold">Seamless Communication</h3>
                <p class="text-sm text-muted-foreground">Connect with teachers, students, and parents effortlessly</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="mt-1 p-1.5 rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <div>
                <h3 class="font-semibold">Comprehensive Resources</h3>
                <p class="text-sm text-muted-foreground">Access to extensive educational materials and tools</p>
              </div>
            </div>
          </div>
          <div class="mt-8 flex flex-wrap gap-4">
            <NuxtLink to="/register">
              <Button size="lg">Get Started</Button>
            </NuxtLink>
            <NuxtLink to="/about">
              <Button variant="outline" size="lg">Learn More</Button>
            </NuxtLink>
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80" alt="School campus" class="rounded-lg shadow-lg w-full h-auto" />
        </div>
      </div>
      
      <!-- Latest News -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center">Latest News & Events</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <Card v-for="(item, index) in news" :key="index" class="shadow-sm">
            <CardContent class="pt-6">
              <Badge class="mb-2">{{ item.category }}</Badge>
              <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
              <p class="text-sm text-muted-foreground mb-4">{{ item.date }}</p>
              <p class="text-muted-foreground">{{ item.description }}</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" class="px-0">Read more</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <!-- Quick Links -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center">Explore Our Platform</h2>
        <div class="grid md:grid-cols-4 gap-6">
          <NuxtLink to="/students">
            <Card class="shadow-sm h-full hover:shadow-md transition-shadow">
              <CardHeader class="text-center">
                <div class="w-12 h-12 mx-auto mb-2 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                </div>
                <CardTitle>Students</CardTitle>
              </CardHeader>
              <CardContent class="text-center text-muted-foreground">
                Access your courses, assignments, and grades
              </CardContent>
            </Card>
          </NuxtLink>
          
          <NuxtLink to="/teachers">
            <Card class="shadow-sm h-full hover:shadow-md transition-shadow">
              <CardHeader class="text-center">
                <div class="w-12 h-12 mx-auto mb-2 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-presentation"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>
                </div>
                <CardTitle>Teachers</CardTitle>
              </CardHeader>
              <CardContent class="text-center text-muted-foreground">
                Manage your classes and student assessments
              </CardContent>
            </Card>
          </NuxtLink>
          
          <NuxtLink to="/parents">
            <Card class="shadow-sm h-full hover:shadow-md transition-shadow">
              <CardHeader class="text-center">
                <div class="w-12 h-12 mx-auto mb-2 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>
                </div>
                <CardTitle>Parents</CardTitle>
              </CardHeader>
              <CardContent class="text-center text-muted-foreground">
                Track your child's progress and communicate with teachers
              </CardContent>
            </Card>
          </NuxtLink>
          
          <NuxtLink to="/features">
            <Card class="shadow-sm h-full hover:shadow-md transition-shadow">
              <CardHeader class="text-center">
                <div class="w-12 h-12 mx-auto mb-2 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-grid"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                </div>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent class="text-center text-muted-foreground">
                Explore all the powerful tools our platform offers
              </CardContent>
            </Card>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Testimonials -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center">What Our Community Says</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <Card class="shadow-sm">
            <CardContent class="pt-6">
              <div class="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/150?img=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p class="font-medium">Jane Doe</p>
                  <p class="text-sm text-muted-foreground">Science Teacher</p>
                </div>
              </div>
              <p class="italic text-muted-foreground">
                "This platform has transformed how I manage my classroom. Grading is faster, communication is seamless, and my students are more engaged than ever."
              </p>
            </CardContent>
          </Card>
          
          <Card class="shadow-sm">
            <CardContent class="pt-6">
              <div class="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/150?img=44" />
                  <AvatarFallback>RS</AvatarFallback>
                </Avatar>
                <div>
                  <p class="font-medium">Robert Smith</p>
                  <p class="text-sm text-muted-foreground">Parent</p>
                </div>
              </div>
              <p class="italic text-muted-foreground">
                "As a busy parent, I appreciate being able to check my child's progress and communicate with teachers from my phone. It's made staying involved in education so much easier."
              </p>
            </CardContent>
          </Card>
          
          <Card class="shadow-sm">
            <CardContent class="pt-6">
              <div class="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/150?img=59" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div>
                  <p class="font-medium">Alex Johnson</p>
                  <p class="text-sm text-muted-foreground">11th Grade Student</p>
                </div>
              </div>
              <p class="italic text-muted-foreground">
                "I've become so much more organized since we started using this system. I can keep track of all my assignments, get reminders for deadlines, and easily message my teachers when I need help."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="text-center p-8 bg-primary text-white rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Ready to transform your educational experience?</h2>
        <p class="mb-6 max-w-2xl mx-auto">
          Join thousands of schools, teachers, students, and parents who have enhanced their educational journey with our platform.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/register">
            <Button variant="secondary" size="lg">Create Account</Button>
          </NuxtLink>
          <NuxtLink to="/contact">
            <Button variant="outline" size="lg" class="text-white border-white hover:bg-white/20">Contact Us</Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

// Sample news data
const news = ref([
  {
    category: 'Event',
    title: 'Annual Science Fair',
    date: 'April 15, 2025',
    description: 'Students will showcase their innovative science projects with prizes for the top three winners.'
  },
  {
    category: 'Announcement',
    title: 'New Learning Resources',
    date: 'March 20, 2025',
    description: 'We\'ve added 50+ new interactive learning resources to our digital library for all grade levels.'
  },
  {
    category: 'News',
    title: 'Teacher of the Year Award',
    date: 'March 10, 2025',
    description: 'Congratulations to Ms. Johnson for receiving the prestigious Teacher of the Year award!'
  }
]);
</script>
