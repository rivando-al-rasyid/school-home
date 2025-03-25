<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Attendance</h1>
    
    <div class="mb-6 flex items-center gap-4 flex-wrap">
      <Select v-model="selectedChild">
        <SelectTrigger class="w-[200px]">
          <SelectValue placeholder="Select a child" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem v-for="(child, index) in children" :key="index" :value="child.id">
            {{ child.name }}
          </SelectItem>
        </SelectContent>
      </Select>
      
      <Select v-model="selectedPeriod">
        <SelectTrigger class="w-[200px]">
          <SelectValue placeholder="Select period" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem v-for="(period, index) in periods" :key="index" :value="period.value">
            {{ period.label }}
          </SelectItem>
        </SelectContent>
      </Select>
      
      <div class="flex items-center space-x-2 ml-auto">
        <Button variant="outline" size="sm" class="gap-1">
          <Icon name="lucide:printer" class="h-4 w-4" />
          Print
        </Button>
        <Button variant="outline" size="sm" class="gap-1">
          <Icon name="lucide:download" class="h-4 w-4" />
          Export
        </Button>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Attendance Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">96%</div>
          <p class="text-xs text-muted-foreground">Above school average of 93%</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Absences</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">3</div>
          <p class="text-xs text-muted-foreground">2 excused, 1 unexcused</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Tardies</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">2</div>
          <p class="text-xs text-muted-foreground">All excused</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Perfect Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">2</div>
          <p class="text-xs text-muted-foreground">Months this semester</p>
        </CardContent>
      </Card>
    </div>
    
    <Tabs default-value="calendar">
      <TabsList class="grid w-full grid-cols-3">
        <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        <TabsTrigger value="list">List View</TabsTrigger>
        <TabsTrigger value="report">Detailed Report</TabsTrigger>
      </TabsList>
      
      <TabsContent value="calendar">
        <Card>
          <CardHeader>
            <CardTitle>March 2025</CardTitle>
            <CardDescription>Calendar view of attendance records</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-7 gap-1">
              <div v-for="day in ['S', 'M', 'T', 'W', 'T', 'F', 'S']" :key="day" class="text-center font-medium p-2">
                {{ day }}
              </div>
              
              <div v-for="i in 7" :key="`empty-${i}`" class="h-12 p-1">
                <div class="h-full rounded-md bg-accent/30 flex items-center justify-center text-muted-foreground">
                  {{ i }}
                </div>
              </div>
              
              <template v-for="day in 31" :key="`day-${day}`">
                <div class="h-12 p-1">
                  <div
:class="[
                    'h-full rounded-md flex flex-col items-center justify-center relative cursor-pointer hover:bg-accent/50',
                    getAttendanceClass(day)
                  ]">
                    <span>{{ day + 7 }}</span>
                    <div v-if="getAttendanceStatus(day)" class="absolute bottom-1 w-2 h-2 rounded-full" :class="getStatusDotClass(day)"/>
                  </div>
                </div>
              </template>
            </div>
            
            <div class="flex items-center space-x-4 mt-6">
              <div class="flex items-center">
                <div class="w-3 h-3 rounded-full bg-emerald-500 mr-2"/>
                <span class="text-sm">Present</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 rounded-full bg-red-500 mr-2"/>
                <span class="text-sm">Absent</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 rounded-full bg-amber-500 mr-2"/>
                <span class="text-sm">Tardy</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 rounded-full bg-blue-500 mr-2"/>
                <span class="text-sm">Early Dismissal</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="list">
        <Card>
          <CardHeader>
            <CardTitle>Attendance Log</CardTitle>
            <CardDescription>Chronological record of attendance</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Reported By</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow v-for="(record, index) in attendanceRecords" :key="index">
                  <TableCell>{{ record.date }}</TableCell>
                  <TableCell>
                    <Badge :variant="getStatusVariant(record.status)">
                      {{ record.status }}
                    </Badge>
                  </TableCell>
                  <TableCell>{{ record.reason }}</TableCell>
                  <TableCell>{{ record.reportedBy }}</TableCell>
                  <TableCell>{{ record.notes }}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="report">
        <Card>
          <CardHeader>
            <CardTitle>Attendance Report</CardTitle>
            <CardDescription>Detailed breakdown of attendance patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-6">
              <div>
                <h3 class="font-medium mb-2">Attendance by Day of Week</h3>
                <div class="grid grid-cols-7 gap-2 h-40">
                  <div v-for="(day, index) in daysOfWeek" :key="index" class="flex flex-col items-center justify-end">
                    <div class="w-full bg-primary rounded-t" :style="`height: ${day.percentage}%`"/>
                    <div class="mt-2 text-xs">{{ day.name }}</div>
                    <div class="text-xs text-muted-foreground">{{ day.percentage }}%</div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 class="font-medium mb-2">Monthly Attendance Trend</h3>
                <div class="grid grid-cols-5 gap-4">
                  <div v-for="(month, index) in monthlyTrend" :key="index" class="border rounded-lg p-3 text-center">
                    <h4 class="text-sm font-medium">{{ month.name }}</h4>
                    <div class="text-2xl font-bold">{{ month.percentage }}%</div>
                    <div class="flex items-center justify-center text-xs" :class="month.change >= 0 ? 'text-emerald-500' : 'text-red-500'">
                      <Icon :name="month.change >= 0 ? 'lucide:trending-up' : 'lucide:trending-down'" class="h-3 w-3 mr-1" />
                      {{ Math.abs(month.change) }}%
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 class="font-medium mb-2">Absences by Subject</h3>
                <div class="space-y-3">
                  <div v-for="(subject, index) in subjectAbsences" :key="index" class="space-y-1">
                    <div class="flex justify-between items-center">
                      <span class="text-sm">{{ subject.name }}</span>
                      <span class="text-sm font-medium">{{ subject.count }} {{ subject.count === 1 ? 'absence' : 'absences' }}</span>
                    </div>
                    <div class="w-full bg-accent h-2 rounded-full">
                      <div class="h-2 rounded-full bg-primary" :style="`width: ${(subject.count / 3) * 100}%`"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
    
    <Card class="mt-6">
      <CardHeader>
        <CardTitle>Report an Absence</CardTitle>
        <CardDescription>Notify the school of upcoming or recent absences</CardDescription>
      </CardHeader>
      <CardContent>
        <form class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-2">
              <Label for="absence-date">Date of Absence</Label>
              <Input id="absence-date" type="date" />
            </div>
            <div class="space-y-2">
              <Label for="absence-type">Type of Absence</Label>
              <Select>
                <SelectTrigger id="absence-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sick">Sick/Medical</SelectItem>
                  <SelectItem value="appointment">Medical Appointment</SelectItem>
                  <SelectItem value="family">Family Emergency</SelectItem>
                  <SelectItem value="religious">Religious Observance</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div class="space-y-2">
            <Label for="absence-note">Explanation</Label>
            <Textarea id="absence-note" placeholder="Enter details about the absence..." rows="3" />
          </div>
          
          <div class="space-y-2">
            <Label for="doc-upload" class="block">Supporting Documentation (Optional)</Label>
            <div class="border border-dashed rounded-md p-4 text-center cursor-pointer hover:bg-accent/50">
              <Icon name="lucide:upload" class="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
              <p class="text-sm text-muted-foreground">Click to upload or drag and drop</p>
              <p class="text-xs text-muted-foreground">PDF, JPG or PNG (max. 5MB)</p>
              <Input id="doc-upload" type="file" class="hidden" />
            </div>
          </div>
          
          <Button type="submit">Submit Absence Report</Button>
        </form>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const selectedChild = ref('emma');
const selectedPeriod = ref('current');

const children = [
  { id: 'emma', name: 'Emma Davis' },
  { id: 'ethan', name: 'Ethan Davis' }
];

const periods = [
  { value: 'current', label: 'Current Semester' },
  { value: 'previous', label: 'Previous Semester' },
  { value: 'year', label: 'Full Year' }
];

// Simulated data for the attendance calendar
const getAttendanceClass = (day) => {
  // Mock data for demonstration - certain dates have different attendance status
  if (day === 5 || day === 18) return 'bg-red-100';
  if (day === 10) return 'bg-amber-100';
  if (day === 24) return 'bg-blue-100';
  if (day % 7 === 0 || day % 7 === 6) return 'bg-accent/30'; // Weekends
  return 'bg-emerald-100';
};

const getAttendanceStatus = (day) => {
  return day === 5 || day === 10 || day === 18 || day === 24;
};

const getStatusDotClass = (day) => {
  if (day === 5 || day === 18) return 'bg-red-500';
  if (day === 10) return 'bg-amber-500';
  if (day === 24) return 'bg-blue-500';
  return '';
};

const attendanceRecords = [
  {
    date: 'March 25, 2025',
    status: 'Present',
    reason: '',
    reportedBy: '',
    notes: ''
  },
  {
    date: 'March 24, 2025',
    status: 'Early Dismissal',
    reason: 'Medical Appointment',
    reportedBy: 'Parent',
    notes: 'Picked up at 1:30 PM for dentist appointment'
  },
  {
    date: 'March 23, 2025',
    status: 'Present',
    reason: '',
    reportedBy: '',
    notes: ''
  },
  {
    date: 'March 22, 2025',
    status: 'Weekend',
    reason: '',
    reportedBy: '',
    notes: ''
  },
  {
    date: 'March 21, 2025',
    status: 'Present',
    reason: '',
    reportedBy: '',
    notes: ''
  },
  {
    date: 'March 20, 2025',
    status: 'Present',
    reason: '',
    reportedBy: '',
    notes: ''
  },
  {
    date: 'March 19, 2025',
    status: 'Present',
    reason: '',
    reportedBy: '',
    notes: ''
  },
  {
    date: 'March 18, 2025',
    status: 'Absent',
    reason: 'Sick',
    reportedBy: 'Parent',
    notes: 'Fever and sore throat'
  },
  {
    date: 'March 17, 2025',
    status: 'Present',
    reason: '',
    reportedBy: '',
    notes: ''
  },
  {
    date: 'March 16, 2025',
    status: 'Present',
    reason: '',
    reportedBy: '',
    notes: ''
  },
  {
    date: 'March 15, 2025',
    status: 'Weekend',
    reason: '',
    reportedBy: '',
    notes: ''
  },
  {
    date: 'March 14, 2025',
    status: 'Present',
    reason: '',
    reportedBy: '',
    notes: ''
  },
  {
    date: 'March 13, 2025',
    status: 'Present',
    reason: '',
    reportedBy: '',
    notes: ''
  },
  {
    date: 'March 12, 2025',
    status: 'Present',
    reason: '',
    reportedBy: '',
    notes: ''
  },
  {
    date: 'March 11, 2025',
    status: 'Present',
    reason: '',
    reportedBy: '',
    notes: ''
  },
  {
    date: 'March 10, 2025',
    status: 'Tardy',
    reason: 'Traffic',
    reportedBy: 'School',
    notes: 'Arrived 15 minutes late'
  }
];

const getStatusVariant = (status) => {
  switch (status) {
    case 'Present': return 'success';
    case 'Absent': return 'destructive';
    case 'Tardy': return 'warning';
    case 'Early Dismissal': return 'info';
    case 'Weekend': return 'secondary';
    default: return 'outline';
  }
};

const daysOfWeek = [
  { name: 'Mon', percentage: 95 },
  { name: 'Tue', percentage: 100 },
  { name: 'Wed', percentage: 100 },
  { name: 'Thu', percentage: 90 },
  { name: 'Fri', percentage: 85 },
  { name: 'Sat', percentage: 0 },
  { name: 'Sun', percentage: 0 }
];

const monthlyTrend = [
  { name: 'Nov', percentage: 92, change: 0 },
  { name: 'Dec', percentage: 95, change: 3 },
  { name: 'Jan', percentage: 94, change: -1 },
  { name: 'Feb', percentage: 98, change: 4 },
  { name: 'Mar', percentage: 96, change: -2 }
];

const subjectAbsences = [
  { name: 'Mathematics', count: 0 },
  { name: 'Science', count: 1 },
  { name: 'English', count: 0 },
  { name: 'History', count: 2 },
  { name: 'Physical Education', count: 0 },
  { name: 'Art', count: 0 }
];
definePageMeta({
  layout: 'parent'
})

</script>
