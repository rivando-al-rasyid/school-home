<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Grades</h1>
    
    <!-- GPA Summary -->
    <Card class="shadow-sm mb-8">
      <CardContent class="pt-6">
        <div class="grid sm:grid-cols-2 gap-6">
          <div class="flex flex-col items-center">
            <div class="relative w-36 h-36">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-4xl font-bold">3.8</div>
              </div>
              <!-- This would be a circular progress indicator in a real implementation -->
              <div class="w-full h-full rounded-full border-8 border-primary/20">
                <div class="w-full h-full rounded-full border-8 border-t-primary border-r-primary border-b-primary border-l-primary/20 transform -rotate-45"></div>
              </div>
            </div>
            <h3 class="font-medium mt-2">Current GPA</h3>
            <p class="text-sm text-muted-foreground">A- Average</p>
          </div>
          
          <div class="flex flex-col justify-center">
            <div class="space-y-4">
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-sm font-medium">Current Semester</span>
                  <span class="text-sm font-medium">3.8</span>
                </div>
                <div class="w-full bg-primary/10 rounded-full h-2.5">
                  <div class="bg-primary h-2.5 rounded-full" style="width: 95%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-sm font-medium">Previous Semester</span>
                  <span class="text-sm font-medium">3.6</span>
                </div>
                <div class="w-full bg-primary/10 rounded-full h-2.5">
                  <div class="bg-primary h-2.5 rounded-full" style="width: 90%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-sm font-medium">Cumulative</span>
                  <span class="text-sm font-medium">3.7</span>
                </div>
                <div class="w-full bg-primary/10 rounded-full h-2.5">
                  <div class="bg-primary h-2.5 rounded-full" style="width: 92%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <!-- Current Grades -->
    <Card class="shadow-sm mb-8">
      <CardHeader>
        <CardTitle>Current Semester Grades</CardTitle>
        <CardDescription>Spring 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead>
              <TableHead>Teacher</TableHead>
              <TableHead>Current Grade</TableHead>
              <TableHead>Grade Trend</TableHead>
              <TableHead class="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(course, index) in currentCourses" :key="index">
              <TableCell class="font-medium">
                <div class="flex items-center space-x-2">
                  <div class="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <Icon :name="course.icon" class="h-4 w-4 text-primary" />
                  </div>
                  <span>{{ course.name }}</span>
                </div>
              </TableCell>
              <TableCell>{{ course.teacher }}</TableCell>
              <TableCell>
                <Badge :variant="getBadgeVariant(course.grade)">{{ course.grade }}</Badge>
              </TableCell>
              <TableCell>
                <div class="flex items-center">
                  <Icon :name="course.trendIcon" :class="['h-4 w-4 mr-1', course.trendColor]" />
                  <span class="text-sm">{{ course.trend }}</span>
                </div>
              </TableCell>
              <TableCell class="text-right">
                <Button variant="outline" size="sm" @click="showDetails(course)">
                  <Icon name="lucide:pie-chart" class="h-4 w-4 mr-1" />
                  Details
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
    
    <!-- Grade Breakdown -->
    <Card class="shadow-sm">
      <CardHeader>
        <div class="flex items-center justify-between">
          <div>
            <CardTitle>Grade Breakdown</CardTitle>
            <CardDescription>Mathematics</CardDescription>
          </div>
          <Select defaultValue="math">
            <SelectTrigger class="w-[180px]">
              <SelectValue placeholder="Select course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="math">Mathematics</SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="history">History</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div class="space-y-6">
          <div class="grid sm:grid-cols-4 gap-4">
            <Card>
              <CardContent class="pt-4">
                <div class="text-sm text-muted-foreground">Assignments</div>
                <div class="text-2xl font-bold">92%</div>
                <p class="text-xs text-muted-foreground">40% of total</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent class="pt-4">
                <div class="text-sm text-muted-foreground">Quizzes</div>
                <div class="text-2xl font-bold">88%</div>
                <p class="text-xs text-muted-foreground">20% of total</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent class="pt-4">
                <div class="text-sm text-muted-foreground">Midterm</div>
                <div class="text-2xl font-bold">91%</div>
                <p class="text-xs text-muted-foreground">20% of total</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent class="pt-4">
                <div class="text-sm text-muted-foreground">Final</div>
                <div class="text-2xl font-bold">--</div>
                <p class="text-xs text-muted-foreground">20% of total</p>
              </CardContent>
            </Card>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Class Average</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="(item, index) in gradeItems" :key="index">
                <TableCell class="font-medium">{{ item.name }}</TableCell>
                <TableCell>{{ item.date }}</TableCell>
                <TableCell>{{ item.category }}</TableCell>
                <TableCell>{{ item.score }}/{{ item.total }}</TableCell>
                <TableCell>{{ item.average }}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

definePageMeta({
  layout: 'student'
})

const currentCourses = [
  {
    name: 'Mathematics',
    teacher: 'Mr. Johnson',
    grade: 'A-',
    trend: 'Improved',
    trendIcon: 'lucide:trend-up',
    trendColor: 'text-green-500',
    icon: 'lucide:calculator'
  },
  {
    name: 'Science',
    teacher: 'Ms. Williams',
    grade: 'B+',
    trend: 'Stable',
    trendIcon: 'lucide:minus',
    trendColor: 'text-amber-500',
    icon: 'lucide:flask-conical'
  },
  {
    name: 'English',
    teacher: 'Mrs. Davis',
    grade: 'A',
    trend: 'Improved',
    trendIcon: 'lucide:trend-up',
    trendColor: 'text-green-500',
    icon: 'lucide:book'
  },
  {
    name: 'History',
    teacher: 'Mr. Brown',
    grade: 'B',
    trend: 'Declining',
    trendIcon: 'lucide:trend-down',
    trendColor: 'text-red-500',
    icon: 'lucide:globe'
  }
];

const gradeItems = [
  {
    name: 'Assignment #12',
    date: 'Mar 23, 2025',
    category: 'Assignment',
    score: 19,
    total: 20,
    average: '85%'
  },
  {
    name: 'Quiz #4',
    date: 'Mar 18, 2025',
    category: 'Quiz',
    score: 17,
    total: 20,
    average: '82%'
  },
  {
    name: 'Assignment #11',
    date: 'Mar 15, 2025',
    category: 'Assignment',
    score: 18,
    total: 20,
    average: '80%'
  },
  {
    name: 'Midterm Exam',
    date: 'Mar 5, 2025',
    category: 'Midterm',
    score: 91,
    total: 100,
    average: '78%'
  },
  {
    name: 'Assignment #10',
    date: 'Feb 28, 2025',
    category: 'Assignment',
    score: 19,
    total: 20,
    average: '83%'
  }
];

const getBadgeVariant = (grade) => {
  if (grade.startsWith('A')) return 'default';
  if (grade.startsWith('B')) return 'secondary';
  if (grade.startsWith('C')) return 'outline';
  return 'destructive';
};

const showDetails = (course) => {
  // In a real app, this would show a detailed modal
  console.log('Showing details for', course.name);
};
</script>
