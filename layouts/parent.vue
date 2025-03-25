<template>
  <div class="container mx-auto py-8 px-4">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Parent Portal</h1>
      <p class="text-muted-foreground">Manage your child's education, view grades, and communicate with teachers</p>
    </div>

    <div class="grid md:grid-cols-12 gap-8">
      <!-- Sidebar -->
      <div class="md:col-span-3">
        <div class="bg-card rounded-lg border shadow-sm mb-4">
          <div class="p-4 border-b">
            <div class="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=33" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 class="font-medium">Jennifer Davis</h3>
                <p class="text-sm text-muted-foreground">Parent of Emma Davis</p>
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
            <CardTitle class="text-sm">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div v-for="(event, index) in upcomingEvents" :key="index">
                <h4 class="font-medium text-sm">{{ event.title }}</h4>
                <p class="text-xs text-muted-foreground">{{ event.date }}</p>
                <p v-if="event.location" class="text-xs text-muted-foreground">{{ event.location }}</p>
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
  { path: '/parent', icon: 'lucide:layout-dashboard', label: 'Dashboard' },
  { path: '/parent/children', icon: 'lucide:users', label: 'My Children' },
  { path: '/parent/grades', icon: 'lucide:bar-chart-2', label: 'Grades & Progress' },
  { path: '/parent/attendance', icon: 'lucide:calendar', label: 'Attendance' },
  { path: '/parent/behavior', icon: 'lucide:clipboard-check', label: 'Behavior' },
  { path: '/parent/messages', icon: 'lucide:mail', label: 'Messages', badge: '2' },
  { path: '/parent/payments', icon: 'lucide:credit-card', label: 'Payments' },
  { path: '/parent/calendar', icon: 'lucide:calendar', label: 'School Calendar' }
];

const upcomingEvents = [
  {
    title: 'Parent-Teacher Conference',
    date: 'March 28, 2025 • 4:00 PM',
    location: 'Room 105'
  },
  {
    title: 'Spring Break',
    date: 'April 3-10, 2025'
  },
  {
    title: 'Field Trip - Science Museum',
    date: 'April 15, 2025'
  }
];
</script>