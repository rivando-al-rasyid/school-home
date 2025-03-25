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
                <Icon name="lucide:check" size="18" />
              </div>
              <div>
                <h3 class="font-semibold">Personalized Learning</h3>
                <p class="text-sm text-muted-foreground">Tailored content based on your unique learning style and pace</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="mt-1 p-1.5 rounded-full bg-primary/10 text-primary">
                <Icon name="lucide:check" size="18" />
              </div>
              <div>
                <h3 class="font-semibold">Real-time Tracking</h3>
                <p class="text-sm text-muted-foreground">Monitor your progress and grades as they're updated</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="mt-1 p-1.5 rounded-full bg-primary/10 text-primary">
                <Icon name="lucide:check" size="18" />
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
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" alt="Students studying" class="rounded-lg shadow-lg w-full h-auto">
        </div>
      </div>
      
      <!-- Dashboard Preview -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center">Your Student Dashboard</h2>
        <div class="relative rounded-xl overflow-hidden shadow-xl">
          <img src="https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&q=80" alt="Student dashboard" class="w-full h-auto">
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
              <Icon name="lucide:book-open" size="24" />
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
              <Icon name="lucide:clipboard-list" size="24" />
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
              <Icon name="lucide:bar-chart-3" size="24" />
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
              <Icon name="lucide:calendar-days" size="24" />
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
              <Icon name="lucide:message-square" size="24" />
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
              <Icon name="lucide:smartphone" size="24" />
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
                <Icon name="lucide:check" size="16" class="mr-2 text-primary" />
                <span>Interactive flashcards for all subjects</span>
              </li>
              <li class="flex items-center">
                <Icon name="lucide:check" size="16" class="mr-2 text-primary" />
                <span>Citation generators and bibliography tools</span>
              </li>
              <li class="flex items-center">
                <Icon name="lucide:check" size="16" class="mr-2 text-primary" />
                <span>Note-taking templates and strategies</span>
              </li>
              <li class="flex items-center">
                <Icon name="lucide:check" size="16" class="mr-2 text-primary" />
                <span>Test preparation guides and practice exams</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-muted rounded-lg p-6">
            <h3 class="text-xl font-bold mb-4">Academic Support</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <Icon name="lucide:check" size="16" class="mr-2 text-primary" />
                <span>Virtual tutoring sessions with subject experts</span>
              </li>
              <li class="flex items-center">
                <Icon name="lucide:check" size="16" class="mr-2 text-primary" />
                <span>Writing center for essay review and feedback</span>
              </li>
              <li class="flex items-center">
                <Icon name="lucide:check" size="16" class="mr-2 text-primary" />
                <span>Math lab for problem-solving assistance</span>
              </li>
              <li class="flex items-center">
                <Icon name="lucide:check" size="16" class="mr-2 text-primary" />
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

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
</script>
