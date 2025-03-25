<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">School Calendar</h1>
    
    <div class="mb-6 flex items-center justify-between flex-wrap gap-4">
      <div class="flex items-center gap-2">
        <Button variant="outline" size="sm">
          <Icon name="lucide:chevron-left" class="h-4 w-4 mr-1" />
          Previous
        </Button>
        <h2 class="text-lg font-medium">March 2025</h2>
        <Button variant="outline" size="sm">
          Next
          <Icon name="lucide:chevron-right" class="h-4 w-4 ml-1" />
        </Button>
      </div>
      
      <div class="flex items-center gap-2">
        <Button variant="outline" size="sm" class="gap-1">
          <Icon name="lucide:calendar-days" class="h-4 w-4" />
          Month
        </Button>
        <Button variant="outline" size="sm" class="gap-1">
          <Icon name="lucide:calendar-range" class="h-4 w-4" />
          Week
        </Button>
        <Button variant="outline" size="sm" class="gap-1">
          <Icon name="lucide:calendar" class="h-4 w-4" />
          Day
        </Button>
        <Button variant="outline" size="sm" class="gap-1">
          <Icon name="lucide:list" class="h-4 w-4" />
          List
        </Button>
      </div>
      
      <div class="flex items-center gap-2">
        <Button variant="outline" size="sm" class="gap-1">
          <Icon name="lucide:filter" class="h-4 w-4" />
          Filter
        </Button>
        <Button variant="outline" size="sm" class="gap-1">
          <Icon name="lucide:download" class="h-4 w-4" />
          Export
        </Button>
      </div>
    </div>
    
    <!-- Calendar View -->
    <div class="border rounded-lg overflow-hidden bg-card">
      <!-- Calendar Header -->
      <div class="grid grid-cols-7 gap-px bg-accent">
        <div
v-for="day in ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']" :key="day" 
             class="bg-card p-2 text-center font-medium">
          {{ day }}
        </div>
      </div>
      
      <!-- Calendar Grid -->
      <div class="grid grid-cols-7 grid-rows-5 gap-px bg-accent">
        <!-- First week with some days from previous month -->
        <div v-for="i in 2" :key="`prev-${i}`" class="min-h-28 bg-card/50 p-2">
          <div class="text-muted-foreground text-sm">{{ 28 + i }}</div>
        </div>
        
        <div
v-for="day in 31" :key="`day-${day}`" 
             :class="[
               'min-h-28 bg-card p-2 relative hover:bg-accent/10',
               isToday(day) ? 'bg-accent/20' : '',
             ]">
          <div class="flex justify-between">
            <span
:class="[
              'text-sm font-medium',
              isToday(day) ? 'bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center' : ''
            ]">{{ day }}</span>
            <div v-if="hasEvents(day)" class="flex gap-1">
              <div 
                v-for="(eventType, index) in getEventTypes(day)" 
                :key="index" 
                class="w-2 h-2 rounded-full" 
                :class="getEventDotClass(eventType)"
              />
            </div>
          </div>
          
          <div class="mt-1 space-y-1">
            <div
v-for="(event, index) in getEventsForDay(day)" :key="index"
                 :class="[
                   'text-xs p-1 rounded truncate border-l-2',
                   getEventClass(event.type)
                 ]"
                 :title="event.title">
              {{ event.time ? `${event.time} - ` : '' }}{{ event.title }}
            </div>
          </div>
        </div>
        
        <!-- Days from the next month -->
        <div v-for="i in 2" :key="`next-${i}`" class="min-h-28 bg-card/50 p-2">
          <div class="text-muted-foreground text-sm">{{ i }}</div>
        </div>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <Card class="md:col-span-2">
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>The next 10 school events</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div v-for="(event, index) in upcomingEvents" :key="index" class="flex items-start pb-4 last:pb-0 last:border-0 border-b">
              <div class="min-w-10 mr-4 text-center">
                <div class="font-medium">{{ event.month }}</div>
                <div class="text-2xl font-bold">{{ event.day }}</div>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-1">
                  <h4 class="font-medium">{{ event.title }}</h4>
                  <Badge :variant="getEventBadgeVariant(event.type)">{{ event.type }}</Badge>
                </div>
                <p class="text-sm text-muted-foreground mb-1">{{ event.time }} {{ event.location ? `• ${event.location}` : '' }}</p>
                <p class="text-sm">{{ event.description }}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div class="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Calendar Filters</CardTitle>
            <CardDescription>Customize your calendar view</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div v-for="(filter, index) in eventFilters" :key="index" class="flex items-center space-x-2">
                <Checkbox :id="`filter-${index}`" />
                <div class="flex items-center">
                  <div class="w-3 h-3 rounded-full mr-2" :class="getEventDotClass(filter.type)"/>
                  <Label :for="`filter-${index}`">{{ filter.label }}</Label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Important Dates</CardTitle>
            <CardDescription>Key dates for the school year</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div v-for="(date, index) in importantDates" :key="index" class="flex items-center py-2">
                <div 
                  class="h-10 w-10 rounded-full flex items-center justify-center text-white font-medium"
                  :class="getEventBgClass(date.type)"
                />
                <div class="flex-1 ml-4">
                  <h4 class="font-medium text-sm">{{ date.title }}</h4>
                  <p class="text-xs text-muted-foreground">{{ date.type }}</p>
                </div>
                <Badge variant="outline">{{ date.date }}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    
    <Alert variant="default" class="mt-6 bg-blue-50 border-blue-200">
      <Icon name="lucide:info" class="h-4 w-4 text-blue-600" />
      <AlertTitle>About the School Calendar</AlertTitle>
      <AlertDescription>
        This calendar shows all school-related events, including holidays, parent-teacher conferences, and
        special activities. You can subscribe to the school calendar using the "Export" button to stay
        updated with all events. For specific questions about dates, please contact the school office.
      </AlertDescription>
    </Alert>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

// Calendar event data for March 2025
const calendarEvents = {
  5: [
    { type: 'academic', title: 'Math Quiz - Algebra', time: '10:00 AM' }
  ],
  8: [
    { type: 'sports', title: 'Basketball Game vs. Lincoln High', time: '3:30 PM', location: 'School Gym' }
  ],
  10: [
    { type: 'academic', title: 'Science Project Due', time: '9:00 AM' }
  ],
  14: [
    { type: 'event', title: 'Pi Day Celebration', time: '1:00 PM', location: 'Cafeteria' }
  ],
  15: [
    { type: 'general', title: 'Teacher Professional Development', description: 'No School for Students' }
  ],
  17: [
    { type: 'holiday', title: 'St. Patrick\'s Day', description: 'Regular School Day' }
  ],
  18: [
    { type: 'academic', title: 'English Essay Due', time: '2:00 PM' }
  ],
  20: [
    { type: 'meeting', title: 'Student Council Meeting', time: '3:00 PM', location: 'Room 203' }
  ],
  22: [
    { type: 'event', title: 'Spring Concert', time: '6:00 PM', location: 'Auditorium' }
  ],
  25: [
    { type: 'meeting', title: 'PTA Meeting', time: '7:00 PM', location: 'Library' }
  ],
  28: [
    { type: 'meeting', title: 'Parent-Teacher Conferences', time: '2:00 PM - 8:00 PM', location: 'Various Classrooms' }
  ],
  31: [
    { type: 'academic', title: 'End of Quarter Assessments Begin' }
  ]
};

// Upcoming events list
const upcomingEvents = [
  { 
    month: 'Mar', 
    day: 28, 
    title: 'Parent-Teacher Conferences',
    type: 'Meeting',
    time: '2:00 PM - 8:00 PM',
    location: 'Various Classrooms',
    description: 'Spring semester parent-teacher conferences. Book your slot online or call the school office.'
  },
  { 
    month: 'Mar', 
    day: 31, 
    title: 'End of Quarter Assessments Begin',
    type: 'Academic',
    time: 'All Day',
    description: 'Quarter 3 final assessments begin this week. Test schedule available on the student portal.'
  },
  { 
    month: 'Apr', 
    day: 3, 
    title: 'Spring Break Begins',
    type: 'Holiday',
    time: 'After School',
    description: 'No school from April 3-10. Classes resume Monday, April 11.'
  },
  { 
    month: 'Apr', 
    day: 11, 
    title: 'Classes Resume',
    type: 'General',
    time: '8:00 AM',
    description: 'Regular schedule resumes after Spring Break.'
  },
  { 
    month: 'Apr', 
    day: 15, 
    title: 'Science Fair Registration Deadline',
    type: 'Academic',
    time: '4:00 PM',
    description: 'Last day to register for the annual science fair.'
  },
  { 
    month: 'Apr', 
    day: 15, 
    title: 'Field Trip - Science Museum',
    type: 'Event',
    time: '9:00 AM - 3:00 PM',
    location: 'City Science Museum',
    description: 'Grade 8 field trip to the Science Museum. Permission slips due April 1.'
  },
  { 
    month: 'Apr', 
    day: 22, 
    title: 'Earth Day Celebration',
    type: 'Event',
    time: 'All Day',
    description: 'School-wide activities focused on environmental awareness and sustainability.'
  },
  { 
    month: 'Apr', 
    day: 25, 
    title: 'Book Fair',
    type: 'Event',
    time: '9:00 AM - 4:00 PM',
    location: 'School Library',
    description: 'Annual book fair with special events and author readings.'
  },
  { 
    month: 'May', 
    day: 5, 
    title: 'Science Fair',
    type: 'Academic',
    time: '3:00 PM - 7:00 PM',
    location: 'School Gymnasium',
    description: 'Annual science fair showcasing student projects from all grades.'
  },
  { 
    month: 'May', 
    day: 12, 
    title: 'Spring Sports Day',
    type: 'Sports',
    time: 'All Day',
    location: 'School Grounds',
    description: 'Annual athletics competition with various sports and activities.'
  }
];

// Calendar filters
const eventFilters = [
  { type: 'academic', label: 'Academic' },
  { type: 'sports', label: 'Sports & Athletics' },
  { type: 'event', label: 'Events & Activities' },
  { type: 'meeting', label: 'Meetings' },
  { type: 'holiday', label: 'Holidays & Breaks' },
  { type: 'general', label: 'General' }
];

// Important dates for the academic year
const importantDates = [
  { title: 'Spring Break', type: 'Holiday', date: 'Apr 3-10' },
  { title: 'Quarter 3 Ends', type: 'Academic', date: 'Apr 1' },
  { title: 'Quarter 4 Begins', type: 'Academic', date: 'Apr 11' },
  { title: 'State Testing Week', type: 'Academic', date: 'May 15-19' },
  { title: 'Memorial Day', type: 'Holiday', date: 'May 29' },
  { title: 'Last Day of School', type: 'Academic', date: 'Jun 15' },
  { title: 'Summer Break Begins', type: 'Holiday', date: 'Jun 16' }
];

// Helper functions for the calendar
const isToday = (day) => {
  // Pretend today is March 25, 2025
  return day === 25;
};

const hasEvents = (day) => {
  return calendarEvents[day] && calendarEvents[day].length > 0;
};

const getEventsForDay = (day) => {
  return calendarEvents[day] || [];
};

const getEventTypes = (day) => {
  if (!calendarEvents[day]) return [];
  return [...new Set(calendarEvents[day].map(event => event.type))];
};

const getEventClass = (type) => {
  switch (type) {
    case 'academic':
      return 'border-blue-500 bg-blue-50';
    case 'sports':
      return 'border-emerald-500 bg-emerald-50';
    case 'event':
      return 'border-purple-500 bg-purple-50';
    case 'meeting':
      return 'border-amber-500 bg-amber-50';
    case 'holiday':
      return 'border-red-500 bg-red-50';
    default:
      return 'border-gray-500 bg-gray-50';
  }
};

const getEventDotClass = (type) => {
  switch (type) {
    case 'academic':
      return 'bg-blue-500';
    case 'sports':
      return 'bg-emerald-500';
    case 'event':
      return 'bg-purple-500';
    case 'meeting':
      return 'bg-amber-500';
    case 'holiday':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

const getEventBadgeVariant = (type) => {
  switch (type.toLowerCase()) {
    case 'academic':
      return 'default';
    case 'sports':
      return 'success';
    case 'event':
      return 'secondary';
    case 'meeting':
      return 'warning';
    case 'holiday':
      return 'destructive';
    default:
      return 'outline';
  }
};

const getEventBgClass = (type) => {
  switch (type) {
    case 'academic':
      return 'bg-blue-500';
    case 'sports':
      return 'bg-emerald-500';
    case 'event':
      return 'bg-purple-500';
    case 'meeting':
      return 'bg-amber-500';
    case 'holiday':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};
definePageMeta({
  layout: 'parent'
})

</script>
