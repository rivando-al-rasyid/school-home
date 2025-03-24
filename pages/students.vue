<template>
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center">Student Portal</h1>
    
    <div class="max-w-6xl mx-auto">
      <!-- Hero section -->
      <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 class="text-3xl font-bold mb-4">Empowering Student Success</h2>
          <p class="text-muted-foreground mb-6">
            Our platform provides everything students need to excel in their educational journey. From accessing assignments and tracking grades to communicating with teachers and exploring digital resources, we've designed our system with students at the center.
          </p>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="mt-1 p-1.5 rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <div>
                <h3 class="font-semibold">Personalized Learning</h3>
                <p class="text-sm text-muted-foreground">Tailored content based on your unique learning style and pace</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="mt-1 p-1.5 rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <div>
                <h3 class="font-semibold">Real-time Tracking</h3>
                <p class="text-sm text-muted-foreground">Monitor your progress and grades as they're updated</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="mt-1 p-1.5 rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <div>
                <h3 class="font-semibold">Seamless Collaboration</h3>
                <p class="text-sm text-muted-foreground">Connect with teachers and peers on assignments and projects</p>
              </div>
            </div>
          </div>
          <div class="mt-8">
            <NuxtLink to="/register">
              <Button>Get Started</Button>
            </NuxtLink>
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" alt="Students studying" class="rounded-lg shadow-lg w-full h-auto" />
        </div>
      </div>
      
      <!-- Dashboard Preview -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center">Your Student Dashboard</h2>
        <div class="relative rounded-xl overflow-hidden shadow-xl">
          <img src="https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&q=80" alt="Student dashboard" class="w-full h-auto" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div class="p-6 text-white">
              <h3 class="text-xl font-bold mb-2">Everything at Your Fingertips</h3>
              <p class="mb-4">Access all your courses, assignments, grades, and resources in one central location</p>
              <NuxtLink to="/register">
                <Button variant="secondary">Explore Dashboard</Button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Features grid -->
      <h2 class="text-3xl font-bold mb-8 text-center">Key Features for Students</h2>
      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <Card class="shadow-sm">
          <CardHeader>
            <div class="w-12 h-12 mb-4 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <CardTitle>Course Materials</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              Access all your textbooks, lecture notes, and supplementary materials in one place. Download for offline use or study online with our interactive reader.
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm">
          <CardHeader>
            <div class="w-12 h-12 mb-4 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
            </div>
            <CardTitle>Assignment Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              Track all your assignments, deadlines, and submission statuses. Receive notifications for upcoming due dates and submit work directly through the platform.
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm">
          <CardHeader>
            <div class="w-12 h-12 mb-4 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-3"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
            </div>
            <CardTitle>Grade Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              View your grades as soon as they're posted. Track performance over time with visual analytics and identify areas for improvement.
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm">
          <CardHeader>
            <div class="w-12 h-12 mb-4 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
            </div>
            <CardTitle>Calendar Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              Keep track of classes, exams, and extracurricular activities in our integrated calendar. Sync with your personal calendar apps for convenience.
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm">
          <CardHeader>
            <div class="w-12 h-12 mb-4 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <CardTitle>Communication Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              Message teachers directly, participate in class discussions, and collaborate with classmates through our secure communication channels.
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm">
          <CardHeader>
            <div class="w-12 h-12 mb-4 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
            </div>
            <CardTitle>Mobile Access</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              Access all features on the go with our mobile app. Get notifications for important updates and stay connected to your academic life.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <!-- Testimonials -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center">What Students Say</h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <Card class="shadow-sm">
            <CardContent class="pt-6">
              <div class="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/150?img=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p class="font-medium">Jason Doe</p>
                  <p class="text-sm text-muted-foreground">10th Grade</p>
                </div>
              </div>
              <p class="italic text-muted-foreground">
                "This platform has completely changed how I manage my schoolwork. I'm more organized, and my grades have improved significantly since I started using it."
              </p>
            </CardContent>
          </Card>
          
          <Card class="shadow-sm">
            <CardContent class="pt-6">
              <div class="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/150?img=44" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <p class="font-medium">Sarah Miller</p>
                  <p class="text-sm text-muted-foreground">12th Grade</p>
                </div>
              </div>
              <p class="italic text-muted-foreground">
                "I love having all my course materials in one place. The calendar feature helps me stay on top of assignments, and I never miss an important deadline now."
              </p>
            </CardContent>
          </Card>
          
          <Card class="shadow-sm">
            <CardContent class="pt-6">
              <div class="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/150?img=59" />
                  <AvatarFallback>TC</AvatarFallback>
                </Avatar>
                <div>
                  <p class="font-medium">Tyler Chen</p>
                  <p class="text-sm text-muted-foreground">9th Grade</p>
                </div>
              </div>
              <p class="italic text-muted-foreground">
                "As a new high school student, this system made my transition so much easier. I can communicate with my teachers whenever I need help, and everything is so easy to find."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <!-- Resources Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center">Student Resources</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-muted rounded-lg p-6">
            <h3 class="text-xl font-bold mb-4">Study Guides & Tools</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-primary">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Interactive flashcards for all subjects</span>
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-primary">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Citation generators and bibliography tools</span>
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-primary">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Note-taking templates and strategies</span>
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-primary">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Test preparation guides and practice exams</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-muted rounded-lg p-6">
            <h3 class="text-xl font-bold mb-4">Academic Support</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-primary">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Virtual tutoring sessions with subject experts</span>
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-primary">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Writing center for essay review and feedback</span>
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-primary">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Math lab for problem-solving assistance</span>
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-primary">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Study skills workshops and time management training</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Call to Action Section -->
      <div class="bg-primary/5 rounded-lg p-8 my-16 text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Enhance Your Learning Experience?</h2>
        <p class="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join thousands of students who are already benefiting from our comprehensive educational tools and support system.
        </p>
        <div class="flex justify-center gap-4">
          <NuxtLink to="/register">
            <Button size="lg">Get Started Today</Button>
          </NuxtLink>
          <NuxtLink to="/login">
            <Button variant="outline" size="lg">login</Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
</script>
