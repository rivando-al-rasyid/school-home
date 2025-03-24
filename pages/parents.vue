<template>
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center" data-aos="fade-down">For Parents</h1>
    
    <div class="max-w-6xl mx-auto">
      <!-- Hero section -->
      <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div data-aos="fade-right" data-aos-delay="100">
          <h2 class="text-3xl font-bold mb-4">Stay Connected to Your Child's Education</h2>
          <p class="text-muted-foreground mb-6">
            Our platform helps you stay involved in your child's educational journey. Monitor their progress, communicate with teachers, and stay informed about school activities all in one convenient place.
          </p>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="mt-1 p-1.5 rounded-full bg-primary/10 text-primary">
                <Check size="18" />
              </div>
              <div>
                <h3 class="font-semibold">Real-time access to grades and attendance</h3>
                <p class="text-sm text-muted-foreground">Monitor your child's academic performance and school attendance</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="mt-1 p-1.5 rounded-full bg-primary/10 text-primary">
                <Check size="18" />
              </div>
              <div>
                <h3 class="font-semibold">Direct communication with teachers</h3>
                <p class="text-sm text-muted-foreground">Message teachers and staff without playing phone tag</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="mt-1 p-1.5 rounded-full bg-primary/10 text-primary">
                <Check size="18" />
              </div>
              <div>
                <h3 class="font-semibold">School updates and notifications</h3>
                <p class="text-sm text-muted-foreground">Stay informed about school events, closures, and important announcements</p>
              </div>
            </div>
          </div>
          <NuxtLink to="/register" class="mt-8 inline-block">
            <Button>Create Parent Account</Button>
          </NuxtLink>
        </div>
        <div data-aos="fade-left" data-aos-delay="200">
          <img src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80" alt="Parent and child with computer" class="rounded-lg shadow-lg w-full h-auto" />
        </div>
      </div>
      
      <!-- Features grid -->
      <h2 class="text-3xl font-bold mb-8 text-center" data-aos="fade-up" data-aos-delay="100">Parent Portal Features</h2>
      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <Card class="shadow-sm" data-aos="fade-up" data-aos-delay="150">
          <CardHeader class="pb-2">
            <CardTitle class="text-xl">Academic Progress Monitoring</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              View your child's grades, assignments, and assessment results in real-time. Track progress throughout the academic year with detailed reports and visual analytics.
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm" data-aos="fade-up" data-aos-delay="200">
          <CardHeader class="pb-2">
            <CardTitle class="text-xl">Attendance Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              Receive notifications about your child's attendance. View detailed attendance records and be alerted immediately of any absences or tardiness.
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm" data-aos="fade-up" data-aos-delay="250">
          <CardHeader class="pb-2">
            <CardTitle class="text-xl">Teacher Communication</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              Message teachers directly through our secure platform. Schedule conferences, discuss your child's progress, and address concerns promptly.
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm" data-aos="fade-up" data-aos-delay="300">
          <CardHeader class="pb-2">
            <CardTitle class="text-xl">Calendar & Events</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              Access the school calendar with important dates, events, and deadlines. Sync with your personal calendar to stay organized and never miss important school activities.
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm" data-aos="fade-up" data-aos-delay="350">
          <CardHeader class="pb-2">
            <CardTitle class="text-xl">Fee Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              View and pay school fees online. Track payment history, receive invoices, and manage multiple children's accounts from one dashboard.
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm" data-aos="fade-up" data-aos-delay="400">
          <CardHeader class="pb-2">
            <CardTitle class="text-xl">School Announcements</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              Stay informed with school-wide and class-specific announcements. Receive notifications about weather closures, upcoming events, and important news.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <!-- Testimonials -->
      <h2 class="text-3xl font-bold mb-8 text-center" data-aos="fade-up">What Parents Say</h2>
      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <Card class="shadow-sm" data-aos="fade-up" data-aos-delay="100">
          <CardContent class="pt-6">
            <div class="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=33" />
                <AvatarFallback>RW</AvatarFallback>
              </Avatar>
              <div>
                <p class="font-medium">Robert Wilson</p>
                <p class="text-sm text-muted-foreground">Parent of 2</p>
              </div>
            </div>
            <p class="italic text-muted-foreground">
              "As a busy working parent, this platform has been a lifesaver. I can check my children's grades and assignments anytime, and the teacher messaging feature means I never miss important updates."
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm" data-aos="fade-up" data-aos-delay="200">
          <CardContent class="pt-6">
            <div class="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=48" />
                <AvatarFallback>AT</AvatarFallback>
              </Avatar>
              <div>
                <p class="font-medium">Amanda Thompson</p>
                <p class="text-sm text-muted-foreground">Parent of a Middle Schooler</p>
              </div>
            </div>
            <p class="italic text-muted-foreground">
              "The transition to middle school was challenging, but having this level of visibility into my daughter's academic life has made a world of difference. I can support her more effectively now."
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm" data-aos="fade-up" data-aos-delay="300">
          <CardContent class="pt-6">
            <div class="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=53" />
                <AvatarFallback>DJ</AvatarFallback>
              </Avatar>
              <div>
                <p class="font-medium">David Jackson</p>
                <p class="text-sm text-muted-foreground">Parent of High School Student</p>
              </div>
            </div>
            <p class="italic text-muted-foreground">
              "The fee payment system and calendar features have made managing school-related responsibilities so much easier. I appreciate being able to handle everything in one secure platform."
            </p>
          </CardContent>
        </Card>
      </div>
      
      <!-- CTA -->
      <div class="text-center p-8 bg-muted rounded-lg" data-aos="zoom-in">
        <h2 class="text-2xl font-bold mb-4">Ready to get more involved in your child's education?</h2>
        <p class="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join thousands of parents who are using our platform to stay connected and support their children's academic journey.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/register">
            <Button size="lg">Sign Up as a Parent</Button>
          </NuxtLink>
          <NuxtLink to="/contact">
            <Button variant="outline" size="lg">Ask Questions</Button>
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
import { Check } from 'lucide-vue-next';
</script>
