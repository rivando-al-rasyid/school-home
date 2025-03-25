<template>
  <div class="container mx-auto py-8 px-4">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Teacher Portal</h1>
      <p class="text-muted-foreground">Manage your classes, assignments, and student grades</p>
    </div>

    <div class="grid md:grid-cols-12 gap-8">
      <!-- Sidebar -->
      <div class="md:col-span-3">
        <div class="bg-card rounded-lg border shadow-sm mb-4">
          <div class="p-4 border-b">
            <div class="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=60" />
                <AvatarFallback>SW</AvatarFallback>
              </Avatar>
              <div>
                <h3 class="font-medium">Sarah Wilson</h3>
                <p class="text-sm text-muted-foreground">Mathematics Teacher</p>
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
            <CardTitle class="text-sm">Upcoming Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div v-for="(schedule, index) in upcomingSchedule" :key="index">
                <h4 class="font-medium text-sm">{{ schedule.title }}</h4>
                <p class="text-xs text-muted-foreground">{{ schedule.time }}</p>
                <p class="text-xs text-muted-foreground">{{ schedule.location }}</p>
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

<script setup>
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const navigationItems = [
  { path: '/teacher', icon: 'lucide:layout-dashboard', label: 'Dashboard' },
  { path: '/teacher/classes', icon: 'lucide:users', label: 'My Classes' },
  { path: '/teacher/assignments', icon: 'lucide:file-text', label: 'Assignments' },
  { path: '/teacher/grades', icon: 'lucide:bar-chart-2', label: 'Grades' },
  { path: '/teacher/attendance', icon: 'lucide:check-square', label: 'Attendance' },
  { path: '/teacher/messages', icon: 'lucide:mail', label: 'Messages', badge: '5' },
  { path: '/teacher/resources', icon: 'lucide:folder', label: 'Resources' }
];

const upcomingSchedule = [
  {
    title: 'Math 101 - Class 10A',
    time: 'Today, 9:00 AM - 10:30 AM',
    location: 'Room 205'
  },
  {
    title: 'Math 202 - Class 11B',
    time: 'Today, 11:00 AM - 12:30 PM',
    location: 'Room 302'
  },
  {
    title: 'Math Department Meeting',
    time: 'Today, 2:00 PM - 3:00 PM',
    location: 'Conference Room'
  }
];
</script>