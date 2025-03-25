<template>
  <div class="container mx-auto py-8 px-4">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Student Portal</h1>
      <p class="text-muted-foreground">Manage your education, view grades, and communicate with teachers</p>
    </div>

    <div class="grid md:grid-cols-12 gap-8">
      <!-- Sidebar -->
      <div class="md:col-span-3">
        <div class="bg-card rounded-lg border shadow-sm mb-4">
          <div class="p-4 border-b">
            <div class="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=32" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div>
                <h3 class="font-medium">John Smith</h3>
                <p class="text-sm text-muted-foreground">Grade 10</p>
              </div>
            </div>
          </div>
          <div class="p-4">
            <nav class="space-y-1">
              <template v-for="(item, index) in navigationItems" :key="index">
                <NuxtLink 
                  :to="item.path" 
                  :class="[
                    'flex items-center px-3 py-2 text-sm rounded-md',
                    $route.path === item.path ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-accent'
                  ]">
                  <Icon :name="item.icon" class="mr-2 h-4 w-4" />
                  {{ item.label }}
                  <Badge v-if="item.badge" class="ml-auto" variant="secondary">{{ item.badge }}</Badge>
                </NuxtLink>
              </template>
            </nav>
          </div>
        </div>
        
        <Card class="shadow-sm">
          <CardHeader>
            <CardTitle class="text-sm">Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div v-for="(assignment, index) in upcomingAssignments" :key="index" class="flex justify-between items-start">
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="font-medium text-sm">{{ assignment.title }}</h4>
                    <p class="text-xs text-muted-foreground">Due in {{ assignment.dueIn }}</p>
                  </div>
                  <Badge :variant="assignment.priorityType as ('default' | 'secondary' | 'destructive' | 'outline')">{{ assignment.priority }}</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <!-- Main Content -->
      <div class="md:col-span-9">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const navigationItems = [
  { path: '/student', icon: 'lucide:layout-dashboard', label: 'Dashboard' },
  { path: '/student/courses', icon: 'lucide:book', label: 'Courses' },
  { path: '/student/assignments', icon: 'lucide:clipboard-check', label: 'Assignments' },
  { path: '/student/grades', icon: 'lucide:bar-chart-2', label: 'Grades' },
  { path: '/student/calendar', icon: 'lucide:calendar', label: 'Calendar' },
  { path: '/student/messages', icon: 'lucide:mail', label: 'Messages', badge: '2' },
];

const upcomingAssignments = [
  {
    title: 'Math Assignment',
    dueIn: '2 days',
    priority: 'Urgent',
    priorityType: 'destructive'
  },
  {
    title: 'Science Project',
    dueIn: '5 days',
    priority: 'Important',
    priorityType: 'warning'
  },
  {
    title: 'English Essay',
    dueIn: '7 days',
    priority: 'Normal',
    priorityType: 'default'
  }
];
</script>