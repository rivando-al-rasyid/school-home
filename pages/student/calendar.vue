<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Calendar</h1>
    
    <!-- Calendar Header -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center space-x-2">
        <Button variant="outline">
          <Icon name="lucide:chevron-left" class="h-4 w-4" />
        </Button>
        <h2 class="text-xl font-semibold">March 2025</h2>
        <Button variant="outline">
          <Icon name="lucide:chevron-right" class="h-4 w-4" />
        </Button>
      </div>
      <div class="flex items-center space-x-2">
        <Button variant="outline" size="sm" class="hidden sm:flex">Today</Button>
        <Select defaultValue="month">
          <SelectTrigger class="w-[130px]">
            <SelectValue placeholder="View" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Day</SelectItem>
            <SelectItem value="week">Week</SelectItem>
            <SelectItem value="month">Month</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    
    <!-- Calendar Grid -->
    <Card class="shadow-sm mb-8">
      <CardContent class="p-0">
        <!-- Days of week header -->
        <div class="grid grid-cols-7 border-b">
          <div 
            v-for="day in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']" 
            :key="day" 
            class="py-2 text-center font-medium text-sm border-r last:border-r-0"
          >
            {{ day }}
          </div>
        </div>
        
        <!-- Calendar grid -->
        <div class="grid grid-cols-7 auto-rows-fr">
          <div 
            v-for="date in calendarDates" 
            :key="date.day"
            :class="[
              'min-h-24 p-1 border-r border-b last:border-r-0 relative',
              date.isCurrentMonth ? '' : 'bg-muted/20 text-muted-foreground',
              date.isToday ? 'bg-primary/5' : '',
            ]"
          >
            <div class="flex justify-between items-start">
              <span 
                :class="[
                  'inline-flex h-6 w-6 items-center justify-center text-sm',
                  date.isToday ? 'bg-primary text-primary-foreground rounded-full' : ''
                ]"
              >
                {{ date.day }}
              </span>
              <Badge v-if="date.events.length > 0" variant="secondary" class="text-xs">{{ date.events.length }}</Badge>
            </div>
            
            <div class="mt-1 space-y-1 text-xs">
              <div 
                v-for="(event, idx) in date.events.slice(0, 2)" 
                :key="idx"
                :class="[
                  'truncate rounded px-1 py-0.5',
                  `bg-${event.color}-100 text-${event.color}-800`,
                ]"
              >
                {{ event.time }} {{ event.title }}
              </div>
              <div v-if="date.events.length > 2" class="text-xs text-muted-foreground p-0.5">
                + {{ date.events.length - 2 }} more
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <!-- Upcoming Events -->
    <Card class="shadow-sm">
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="space-y-6">
          <div v-for="(day, index) in upcomingDays" :key="index">
            <div class="flex items-center space-x-2 mb-2">
              <div class="h-2 w-2 rounded-full bg-primary"></div>
              <h3 class="font-medium">{{ day.date }}</h3>
            </div>
            
            <div class="space-y-2 ml-4">
              <div 
                v-for="(event, idx) in day.events" 
                :key="idx"
                class="flex items-start border rounded-lg p-3"
              >
                <div :class="[`text-${event.color}-600 mr-3`]">
                  <div class="bg-primary/10 h-10 w-10 rounded-md flex items-center justify-center">
                    <Icon :name="event.icon" class="h-5 w-5" />
                  </div>
                </div>
                
                <div class="flex-1">
                  <div class="flex items-start justify-between">
                    <div>
                      <h4 class="font-medium">{{ event.title }}</h4>
                      <p class="text-sm text-muted-foreground">{{ event.time }}</p>
                    </div>
                    <Badge :variant="event.badgeVariant">{{ event.type }}</Badge>
                  </div>
                  
                  <p v-if="event.description" class="text-sm mt-1">{{ event.description }}</p>
                  
                  <div v-if="event.course || event.location" class="flex items-center space-x-4 mt-2 text-sm">
                    <div v-if="event.course" class="flex items-center">
                      <Icon name="lucide:book" class="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                      <span>{{ event.course }}</span>
                    </div>
                    <div v-if="event.location" class="flex items-center">
                      <Icon name="lucide:map-pin" class="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                      <span>{{ event.location }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

definePageMeta({
  layout: 'student'
})

// Generate calendar grid data for March 2025
// In a real app, this would be generated dynamically
const calendarDates = [
  // Week 1 (showing a few days from February)
  { day: 23, isCurrentMonth: false, isToday: false, events: [] },
  { day: 24, isCurrentMonth: false, isToday: false, events: [] },
  { day: 25, isCurrentMonth: false, isToday: false, events: [] },
  { day: 26, isCurrentMonth: false, isToday: false, events: [] },
  { day: 27, isCurrentMonth: false, isToday: false, events: [] },
  { day: 28, isCurrentMonth: false, isToday: false, events: [] },
  { day: 1, isCurrentMonth: true, isToday: false, events: [
    { time: '9:00 AM', title: 'Math Quiz', color: 'blue' }
  ] },
  
  // Week 2
  { day: 2, isCurrentMonth: true, isToday: false, events: [] },
  { day: 3, isCurrentMonth: true, isToday: false, events: [
    { time: '11:00 AM', title: 'English Class', color: 'green' },
    { time: '1:15 PM', title: 'Science Lab', color: 'purple' }
  ] },
  { day: 4, isCurrentMonth: true, isToday: false, events: [] },
  { day: 5, isCurrentMonth: true, isToday: false, events: [
    { time: '10:30 AM', title: 'Midterm Exam', color: 'red' }
  ] },
  { day: 6, isCurrentMonth: true, isToday: false, events: [] },
  { day: 7, isCurrentMonth: true, isToday: false, events: [
    { time: '3:00 PM', title: 'Club Meeting', color: 'amber' }
  ] },
  { day: 8, isCurrentMonth: true, isToday: false, events: [] },
  
  // Week 3
  { day: 9, isCurrentMonth: true, isToday: false, events: [] },
  { day: 10, isCurrentMonth: true, isToday: false, events: [
    { time: '9:00 AM', title: 'Math Class', color: 'blue' },
    { time: '1:15 PM', title: 'History Report', color: 'indigo' }
  ] },
  { day: 11, isCurrentMonth: true, isToday: false, events: [] },
  { day: 12, isCurrentMonth: true, isToday: false, events: [
    { time: '11:00 AM', title: 'English Class', color: 'green' }
  ] },
  { day: 13, isCurrentMonth: true, isToday: false, events: [] },
  { day: 14, isCurrentMonth: true, isToday: false, events: [
    { time: '9:00 AM', title: 'Math Quiz', color: 'blue' }
  ] },
  { day: 15, isCurrentMonth: true, isToday: false, events: [] },
  
  // Week 4
  { day: 16, isCurrentMonth: true, isToday: false, events: [] },
  { day: 17, isCurrentMonth: true, isToday: false, events: [
    { time: '9:00 AM', title: 'Math Class', color: 'blue' }
  ] },
  { day: 18, isCurrentMonth: true, isToday: false, events: [] },
  { day: 19, isCurrentMonth: true, isToday: false, events: [
    { time: '11:00 AM', title: 'English Class', color: 'green' },
    { time: '1:15 PM', title: 'Science Lab', color: 'purple' },
    { time: '3:00 PM', title: 'Study Group', color: 'amber' }
  ] },
  { day: 20, isCurrentMonth: true, isToday: false, events: [] },
  { day: 21, isCurrentMonth: true, isToday: false, events: [
    { time: '2:00 PM', title: 'Assignment Due', color: 'red' }
  ] },
  { day: 22, isCurrentMonth: true, isToday: false, events: [] },
  
  // Week 5
  { day: 23, isCurrentMonth: true, isToday: false, events: [] },
  { day: 24, isCurrentMonth: true, isToday: false, events: [
    { time: '9:00 AM', title: 'Math Class', color: 'blue' }
  ] },
  { day: 25, isCurrentMonth: true, isToday: true, events: [
    { time: '12:00 PM', title: 'Science Lab', color: 'purple' },
    { time: '3:00 PM', title: 'Club Meeting', color: 'amber' }
  ] },
  { day: 26, isCurrentMonth: true, isToday: false, events: [
    { time: '11:00 AM', title: 'English Class', color: 'green' }
  ] },
  { day: 27, isCurrentMonth: true, isToday: false, events: [
    { time: '10:00 AM', title: 'Math Assignment Due', color: 'red' }
  ] },
  { day: 28, isCurrentMonth: true, isToday: false, events: [] },
  { day: 29, isCurrentMonth: true, isToday: false, events: [] },
  
  // Week 6 (April starts)
  { day: 30, isCurrentMonth: true, isToday: false, events: [] },
  { day: 31, isCurrentMonth: true, isToday: false, events: [
    { time: '9:00 AM', title: 'Math Class', color: 'blue' }
  ] },
  { day: 1, isCurrentMonth: false, isToday: false, events: [] },
  { day: 2, isCurrentMonth: false, isToday: false, events: [] },
  { day: 3, isCurrentMonth: false, isToday: false, events: [] },
  { day: 4, isCurrentMonth: false, isToday: false, events: [] },
  { day: 5, isCurrentMonth: false, isToday: false, events: [] },
];

const upcomingDays = [
  {
    date: 'Today (March 25, 2025)',
    events: [
      {
        title: 'Science Lab #7',
        time: '12:00 PM - 1:30 PM',
        type: 'Class',
        badgeVariant: 'secondary',
        description: 'Chemical Reactions and Energy',
        course: 'Science',
        location: 'Lab 203',
        icon: 'lucide:flask-conical',
        color: 'primary'
      },
      {
        title: 'Computer Club Meeting',
        time: '3:00 PM - 4:30 PM',
        type: 'Extracurricular',
        badgeVariant: 'outline',
        description: 'Web Development Workshop',
        location: 'Room 145',
        icon: 'lucide:users',
        color: 'amber'
      }
    ]
  },
  {
    date: 'Tomorrow (March 26, 2025)',
    events: [
      {
        title: 'English Literature Class',
        time: '11:00 AM - 12:30 PM',
        type: 'Class',
        badgeVariant: 'secondary',
        course: 'English',
        location: 'Room 145',
        icon: 'lucide:book',
        color: 'green'
      }
    ]
  },
  {
    date: 'Friday (March 27, 2025)',
    events: [
      {
        title: 'Math Assignment #13 Due',
        time: '11:59 PM',
        type: 'Deadline',
        badgeVariant: 'destructive',
        course: 'Mathematics',
        icon: 'lucide:calendar-clock',
        color: 'red'
      }
    ]
  }
];
</script>

<style scoped>
/* Add these styles to handle calendar coloring better in a real implementation */
.bg-blue-100 { background-color: #dbeafe; }
.bg-green-100 { background-color: #dcfce7; }
.bg-purple-100 { background-color: #f3e8ff; }
.bg-red-100 { background-color: #fee2e2; }
.bg-amber-100 { background-color: #fef3c7; }
.bg-indigo-100 { background-color: #e0e7ff; }

.text-blue-800 { color: #1e40af; }
.text-green-800 { color: #166534; }
.text-purple-800 { color: #6b21a8; }
.text-red-800 { color: #991b1b; }
.text-amber-800 { color: #92400e; }
.text-indigo-800 { color: #3730a3; }

.text-primary-600 { color: hsl(var(--primary) / 0.8); }
.text-green-600 { color: #16a34a; }
.text-red-600 { color: #dc2626; }
.text-amber-600 { color: #d97706; }
</style>
