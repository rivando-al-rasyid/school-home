<template>
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center" data-aos="fade-down">Platform Features</h1>
    
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <Card class="shadow-md" data-aos="fade-up" data-aos-delay="100">
          <CardHeader>
            <CardTitle>For Students</CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="list-disc pl-5 space-y-2">
              <li>Access to assignments and grades</li>
              <li>Course materials and resources</li>
              <li>Communication with teachers</li>
              <li>Calendar with important dates</li>
              <li>Personal progress tracking</li>
              <li>Digital learning resources</li>
            </ul>
          </CardContent>
          <CardFooter>
            <NuxtLink to="/students">
              <Button variant="outline" class="w-full">Learn More</Button>
            </NuxtLink>
          </CardFooter>
        </Card>
        
        <Card class="shadow-md" data-aos="fade-up" data-aos-delay="200">
          <CardHeader>
            <CardTitle>For Teachers</CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="list-disc pl-5 space-y-2">
              <li>Class management tools</li>
              <li>Grade submission system</li>
              <li>Attendance tracking</li>
              <li>Parent communication portal</li>
              <li>Curriculum planning tools</li>
              <li>Performance analytics</li>
            </ul>
          </CardContent>
          <CardFooter>
            <NuxtLink to="/teachers">
              <Button variant="outline" class="w-full">Learn More</Button>
            </NuxtLink>
          </CardFooter>
        </Card>
        
        <Card class="shadow-md" data-aos="fade-up" data-aos-delay="300">
          <CardHeader>
            <CardTitle>For Parents</CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="list-disc pl-5 space-y-2">
              <li>Student progress monitoring</li>
              <li>Teacher conference scheduling</li>
              <li>Absence reporting</li>
              <li>School announcements</li>
              <li>Fee payment portal</li>
              <li>Direct messaging with staff</li>
            </ul>
          </CardContent>
          <CardFooter>
            <NuxtLink to="/parents">
              <Button variant="outline" class="w-full">Learn More</Button>
            </NuxtLink>
          </CardFooter>
        </Card>
      </div>
      
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-6 text-center" data-aos="fade-up">Advanced Platform Capabilities</h2>
        <Accordion type="single" collapsible class="w-full" data-aos="fade-up" data-aos-delay="100">
          <AccordionItem value="item-1">
            <AccordionTrigger>Real-time Data Synchronization</AccordionTrigger>
            <AccordionContent>
              Our platform uses advanced cloud technology to ensure that all information is updated in real-time across devices. When teachers post grades or announcements, they're immediately available to students and parents without delay.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger>Comprehensive Analytics</AccordionTrigger>
            <AccordionContent>
              Track student performance, attendance patterns, and engagement metrics with our detailed analytics dashboard. Administrators and teachers can identify trends, spot areas for improvement, and make data-driven decisions to enhance educational outcomes.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger>Secure Communication Channels</AccordionTrigger>
            <AccordionContent>
              Our platform provides encrypted, FERPA-compliant messaging between all stakeholders. Teachers can communicate with parents, students can reach out to teachers, and administrators can broadcast announcements—all within a secure environment.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger>Resource Management</AccordionTrigger>
            <AccordionContent>
              Organize, distribute, and track digital learning materials effortlessly. Teachers can upload resources, create digital libraries, and monitor student interaction with materials to better understand engagement and identify knowledge gaps.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger>Customizable Workflows</AccordionTrigger>
            <AccordionContent>
              Every school operates differently. That's why our platform allows administrators to customize approval processes, notification settings, and user permissions to match your institution's specific requirements and organizational structure.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div>
        <h2 class="text-3xl font-bold mb-6 text-center" data-aos="fade-up">Integration Ecosystem</h2>
        <p class="text-center text-muted-foreground mb-8" data-aos="fade-up" data-aos-delay="100">
          Our platform seamlessly connects with popular educational tools and services
        </p>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div class="p-4 border rounded bg-card" data-aos="zoom-in" data-aos-delay="100">
            <h3 class="font-semibold">Google Classroom</h3>
          </div>
          <div class="p-4 border rounded bg-card" data-aos="zoom-in" data-aos-delay="150">
            <h3 class="font-semibold">Microsoft Teams</h3>
          </div>
          <div class="p-4 border rounded bg-card" data-aos="zoom-in" data-aos-delay="200">
            <h3 class="font-semibold">Canvas LMS</h3>
          </div>
          <div class="p-4 border rounded bg-card" data-aos="zoom-in" data-aos-delay="250">
            <h3 class="font-semibold">Moodle</h3>
          </div>
          <div class="p-4 border rounded bg-card" data-aos="zoom-in" data-aos-delay="300">
            <h3 class="font-semibold">Zoom</h3>
          </div>
          <div class="p-4 border rounded bg-card" data-aos="zoom-in" data-aos-delay="350">
            <h3 class="font-semibold">Clever</h3>
          </div>
          <div class="p-4 border rounded bg-card" data-aos="zoom-in" data-aos-delay="400">
            <h3 class="font-semibold">Khan Academy</h3>
          </div>
          <div class="p-4 border rounded bg-card" data-aos="zoom-in" data-aos-delay="450">
            <h3 class="font-semibold">Blackboard</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
</script>
