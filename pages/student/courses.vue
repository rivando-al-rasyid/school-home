<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">My Courses</h1>
    
    <!-- Current Semester Courses -->
    <Card class="shadow-sm mb-8">
      <CardHeader>
        <CardTitle>Current Semester Courses</CardTitle>
        <CardDescription>Spring 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-6">
          <div v-for="(course, index) in currentCourses" :key="index" class="border rounded-lg p-4">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center space-x-3">
                <div class="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Icon :name="course.icon" class="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 class="font-medium text-lg">{{ course.name }}</h3>
                  <p class="text-sm text-muted-foreground">{{ course.teacher }}</p>
                </div>
              </div>
              <Badge variant="outline">{{ course.grade }}</Badge>
            </div>
            
            <div class="grid sm:grid-cols-3 gap-4 mb-3">
              <div>
                <p class="text-xs text-muted-foreground">Schedule</p>
                <p class="text-sm">{{ course.schedule }}</p>
              </div>
              <div>
                <p class="text-xs text-muted-foreground">Room</p>
                <p class="text-sm">{{ course.room }}</p>
              </div>
              <div>
                <p class="text-xs text-muted-foreground">Credits</p>
                <p class="text-sm">{{ course.credits }}</p>
              </div>
            </div>
            
            <div class="flex justify-end gap-2">
              <Button variant="outline" size="sm">
                <Icon name="lucide:file-text" class="h-4 w-4 mr-1" />
                Syllabus
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="lucide:book-open" class="h-4 w-4 mr-1" />
                Materials
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <!-- Course Registration -->
    <Card class="shadow-sm">
      <CardHeader>
        <CardTitle>Course Registration</CardTitle>
        <CardDescription>Fall 2025 registration opens in 45 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="mb-4">
          <div class="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <Icon name="lucide:info" class="h-4 w-4" />
            <p>Meet with your academic advisor before registering for courses.</p>
          </div>
          
          <div class="grid sm:grid-cols-2 gap-4">
            <div class="border rounded-lg p-4">
              <h3 class="font-medium mb-2">Required Courses</h3>
              <ul class="space-y-2 text-sm">
                <li class="flex items-center">
                  <Icon name="lucide:check" class="h-4 w-4 mr-2 text-green-500" />
                  Advanced Mathematics
                </li>
                <li class="flex items-center">
                  <Icon name="lucide:check" class="h-4 w-4 mr-2 text-green-500" />
                  Physics
                </li>
                <li class="flex items-center">
                  <Icon name="lucide:circle" class="h-4 w-4 mr-2" />
                  American Literature
                </li>
              </ul>
            </div>
            
            <div class="border rounded-lg p-4">
              <h3 class="font-medium mb-2">Elective Options</h3>
              <ul class="space-y-2 text-sm">
                <li class="flex items-center">
                  <Icon name="lucide:circle" class="h-4 w-4 mr-2" />
                  Computer Science
                </li>
                <li class="flex items-center">
                  <Icon name="lucide:circle" class="h-4 w-4 mr-2" />
                  Art History
                </li>
                <li class="flex items-center">
                  <Icon name="lucide:circle" class="h-4 w-4 mr-2" />
                  Foreign Language
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <Button disabled>
          <Icon name="lucide:calendar" class="h-4 w-4 mr-2" />
          Registration not yet open
        </Button>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

definePageMeta({
  layout: 'student'
})

const currentCourses = [
  {
    name: 'Mathematics',
    teacher: 'Mr. Johnson',
    grade: 'A-',
    schedule: 'Mon, Wed, Fri 9:00 AM',
    room: 'Room 101',
    credits: '4',
    icon: 'lucide:calculator'
  },
  {
    name: 'Science',
    teacher: 'Ms. Williams',
    grade: 'B+',
    schedule: 'Tue, Thu 10:30 AM',
    room: 'Room 203',
    credits: '4',
    icon: 'lucide:flask-conical'
  },
  {
    name: 'English',
    teacher: 'Mrs. Davis',
    grade: 'A',
    schedule: 'Mon, Wed, Fri 11:00 AM',
    room: 'Room 145',
    credits: '3',
    icon: 'lucide:book'
  },
  {
    name: 'History',
    teacher: 'Mr. Brown',
    grade: 'B',
    schedule: 'Tue, Thu 1:15 PM',
    room: 'Room 115',
    credits: '3',
    icon: 'lucide:globe'
  }
];
</script>
