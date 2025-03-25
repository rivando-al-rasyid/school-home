<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Assignments</h1>
    
    <!-- Assignments Stats -->
    <div class="grid sm:grid-cols-3 gap-4 mb-8">
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Pending</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">5</div>
          <p class="text-xs text-muted-foreground">2 due this week</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Completed</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">18</div>
          <p class="text-xs text-muted-foreground">90% completion rate</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Grade Average</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">92%</div>
          <p class="text-xs text-muted-foreground">A- average</p>
        </CardContent>
      </Card>
    </div>
    
    <!-- Pending Assignments -->
    <Card class="shadow-sm mb-8">
      <CardHeader>
        <div class="flex items-center justify-between">
          <CardTitle>Pending Assignments</CardTitle>
          <div class="flex items-center space-x-2">
            <Select defaultValue="all">
              <SelectTrigger class="w-[180px]">
                <SelectValue placeholder="Filter by course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                <SelectItem value="math">Mathematics</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="history">History</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div v-for="(assignment, index) in pendingAssignments" :key="index" class="border rounded-lg p-4">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center space-x-3">
                <div class="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Icon :name="assignment.icon" class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 class="font-medium">{{ assignment.title }}</h3>
                  <p class="text-sm text-muted-foreground">{{ assignment.course }}</p>
                </div>
              </div>
              <Badge :variant="assignment.priorityType">{{ assignment.priority }}</Badge>
            </div>
            
            <div class="grid sm:grid-cols-3 gap-4 text-sm mb-3">
              <div>
                <p class="text-xs text-muted-foreground">Due Date</p>
                <p>{{ assignment.dueDate }}</p>
              </div>
              <div>
                <p class="text-xs text-muted-foreground">Type</p>
                <p>{{ assignment.type }}</p>
              </div>
              <div>
                <p class="text-xs text-muted-foreground">Points</p>
                <p>{{ assignment.points }}</p>
              </div>
            </div>
            
            <div class="flex justify-end gap-2">
              <Button variant="outline" size="sm">View Details</Button>
              <Button size="sm">
                <Icon name="lucide:upload" class="h-4 w-4 mr-1" />
                Submit
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <!-- Recent Submissions -->
    <Card class="shadow-sm">
      <CardHeader>
        <CardTitle>Recent Submissions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Assignment</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Submitted</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead class="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(submission, index) in recentSubmissions" :key="index">
              <TableCell class="font-medium">{{ submission.title }}</TableCell>
              <TableCell>{{ submission.course }}</TableCell>
              <TableCell>{{ submission.submitted }}</TableCell>
              <TableCell>
                <Badge :variant="submission.statusVariant">{{ submission.status }}</Badge>
              </TableCell>
              <TableCell>{{ submission.grade }}</TableCell>
              <TableCell class="text-right">
                <Button variant="ghost" size="icon">
                  <Icon name="lucide:more-horizontal" class="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

definePageMeta({
  layout: 'student'
})

const pendingAssignments = [
  {
    title: 'Math Assignment #13',
    course: 'Mathematics',
    dueDate: 'March 27, 2025',
    type: 'Homework',
    points: '20',
    priority: 'Urgent',
    priorityType: 'destructive',
    icon: 'lucide:calculator'
  },
  {
    title: 'Science Lab Report',
    course: 'Science',
    dueDate: 'March 30, 2025',
    type: 'Lab Report',
    points: '50',
    priority: 'Important',
    priorityType: 'warning',
    icon: 'lucide:flask-conical'
  },
  {
    title: 'English Essay',
    course: 'English',
    dueDate: 'April 1, 2025',
    type: 'Essay',
    points: '100',
    priority: 'Normal',
    priorityType: 'default',
    icon: 'lucide:book'
  },
  {
    title: 'History Research Paper',
    course: 'History',
    dueDate: 'April 7, 2025',
    type: 'Research Paper',
    points: '150',
    priority: 'Normal',
    priorityType: 'default',
    icon: 'lucide:globe'
  }
];

const recentSubmissions = [
  {
    title: 'Math Assignment #12',
    course: 'Mathematics',
    submitted: 'March 23, 2025',
    status: 'Graded',
    statusVariant: 'default',
    grade: '95%'
  },
  {
    title: 'Science Lab Report #5',
    course: 'Science',
    submitted: 'March 22, 2025',
    status: 'Under Review',
    statusVariant: 'warning',
    grade: 'Pending'
  },
  {
    title: 'English Reading Response',
    course: 'English',
    submitted: 'March 20, 2025',
    status: 'Graded',
    statusVariant: 'default',
    grade: '90%'
  },
  {
    title: 'History Timeline Project',
    course: 'History',
    submitted: 'March 18, 2025',
    status: 'Graded',
    statusVariant: 'default',
    grade: '88%'
  }
];
</script>
