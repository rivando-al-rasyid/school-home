<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Grades & Progress</h1>
    
    <div class="mb-6 flex items-center space-x-2">
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
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">GPA</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">3.7</div>
          <p class="text-xs text-muted-foreground">
            <span class="text-emerald-500">↑ 0.2</span> from last quarter
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Class Rank</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">12<span class="text-lg">/124</span></div>
          <p class="text-xs text-muted-foreground">
            Top 10% of class
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Assignments</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">96%</div>
          <p class="text-xs text-muted-foreground">
            Completed 48/50 assignments
          </p>
        </CardContent>
      </Card>
    </div>
    
    <Tabs default-value="current">
      <TabsList class="grid w-full grid-cols-2">
        <TabsTrigger value="current">Current Grades</TabsTrigger>
        <TabsTrigger value="history">Grade History</TabsTrigger>
      </TabsList>
      
      <TabsContent value="current">
        <Card>
          <CardHeader>
            <CardTitle>Current Grades</CardTitle>
            <CardDescription>3rd Quarter - 2024-2025 Academic Year</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-6">
              <div v-for="(subject, index) in subjects" :key="index">
                <div class="flex justify-between items-center mb-2">
                  <div>
                    <h3 class="font-medium">{{ subject.name }}</h3>
                    <p class="text-sm text-muted-foreground">{{ subject.teacher }}</p>
                  </div>
                  <div class="text-right">
                    <span :class="['text-lg font-bold', getGradeTextColor(subject.grade)]">{{ subject.grade }}</span>
                    <p class="text-sm text-muted-foreground">{{ subject.percentage }}%</p>
                  </div>
                </div>
                
                <div class="w-full bg-accent h-2 rounded-full">
                  <div class="h-2 rounded-full" :style="`width: ${subject.percentage}%; background-color: ${getGradeColor(subject.grade)}`"/>
                </div>
                
                <div class="mt-3 space-y-2">
                  <div v-for="(assignment, aIndex) in subject.assignments" :key="aIndex" class="flex justify-between items-center p-2 rounded hover:bg-accent/50">
                    <div>
                      <h4 class="text-sm font-medium">{{ assignment.name }}</h4>
                      <p class="text-xs text-muted-foreground">{{ assignment.date }} | {{ assignment.category }}</p>
                    </div>
                    <Badge :class="getScoreBadgeClass(assignment.score, assignment.max)">
                      {{ assignment.score }}/{{ assignment.max }}
                    </Badge>
                  </div>
                </div>
                <Separator v-if="index < subjects.length - 1" class="my-4" />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="history">
        <Card>
          <CardHeader>
            <CardTitle>Grade History</CardTitle>
            <CardDescription>Tracking progress over academic quarters</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Q1</TableHead>
                    <TableHead>Q2</TableHead>
                    <TableHead>Q3</TableHead>
                    <TableHead>Q4</TableHead>
                    <TableHead>Final</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow v-for="(subject, index) in gradeHistory" :key="index">
                    <TableCell><div class="font-medium">{{ subject.name }}</div></TableCell>
                    <TableCell :class="getGradeTextColor(subject.q1)">{{ subject.q1 }}</TableCell>
                    <TableCell :class="getGradeTextColor(subject.q2)">{{ subject.q2 }}</TableCell>
                    <TableCell :class="getGradeTextColor(subject.q3)">{{ subject.q3 }}</TableCell>
                    <TableCell>{{ subject.q4 || '-' }}</TableCell>
                    <TableCell>{{ subject.final || '-' }}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              
              <div class="pt-4">
                <h3 class="text-lg font-medium mb-2">GPA Trend</h3>
                <div class="flex items-end h-40 space-x-2">
                  <div v-for="(quarter, index) in gpaHistory" :key="index" class="flex flex-col items-center">
                    <div class="text-sm font-medium">{{ quarter.gpa }}</div>
                    <div :style="`height: ${quarter.gpa * 10}px; width: 30px;`" class="bg-primary rounded-t"/>
                    <div class="mt-2 text-xs">{{ quarter.label }}</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';

const selectedChild = ref('emma');
const selectedPeriod = ref('q3');

const children = [
  { id: 'emma', name: 'Emma Davis' },
  { id: 'ethan', name: 'Ethan Davis' }
];

const periods = [
  { value: 'q1', label: 'Quarter 1' },
  { value: 'q2', label: 'Quarter 2' },
  { value: 'q3', label: 'Quarter 3 (Current)' },
  { value: 'q4', label: 'Quarter 4' },
  { value: 'final', label: 'Final Grades' }
];

const subjects = [
  {
    name: 'Mathematics (Algebra I)',
    teacher: 'Mr. Johnson',
    grade: 'A',
    percentage: 95,
    assignments: [
      { name: 'Linear Equations Quiz', date: 'Mar 15, 2025', category: 'Quiz', score: 48, max: 50 },
      { name: 'Polynomials Test', date: 'Mar 8, 2025', category: 'Test', score: 92, max: 100 },
      { name: 'Homework Set 12', date: 'Mar 5, 2025', category: 'Homework', score: 20, max: 20 },
      { name: 'Graphing Project', date: 'Feb 25, 2025', category: 'Project', score: 97, max: 100 }
    ]
  },
  {
    name: 'Science (Biology)',
    teacher: 'Ms. Thompson',
    grade: 'A-',
    percentage: 91,
    assignments: [
      { name: 'Cell Structure Quiz', date: 'Mar 18, 2025', category: 'Quiz', score: 28, max: 30 },
      { name: 'Genetics Test', date: 'Mar 10, 2025', category: 'Test', score: 88, max: 100 },
      { name: 'Lab Report: Mitosis', date: 'Mar 3, 2025', category: 'Lab', score: 45, max: 50 },
      { name: 'Ecosystem Project', date: 'Feb 20, 2025', category: 'Project', score: 94, max: 100 }
    ]
  },
  {
    name: 'English Literature',
    teacher: 'Mr. Davis',
    grade: 'A',
    percentage: 94,
    assignments: [
      { name: 'Essay: To Kill a Mockingbird', date: 'Mar 14, 2025', category: 'Essay', score: 47, max: 50 },
      { name: 'Vocabulary Quiz', date: 'Mar 7, 2025', category: 'Quiz', score: 19, max: 20 },
      { name: 'Poetry Analysis', date: 'Mar 1, 2025', category: 'Assignment', score: 29, max: 30 },
      { name: 'Class Participation', date: 'Feb 28, 2025', category: 'Participation', score: 20, max: 20 }
    ]
  },
  {
    name: 'History (World History)',
    teacher: 'Mrs. Wilson',
    grade: 'B+',
    percentage: 88,
    assignments: [
      { name: 'Renaissance Test', date: 'Mar 16, 2025', category: 'Test', score: 85, max: 100 },
      { name: 'Historical Figure Research', date: 'Mar 9, 2025', category: 'Project', score: 43, max: 50 },
      { name: 'Map Quiz', date: 'Mar 2, 2025', category: 'Quiz', score: 28, max: 30 },
      { name: 'Timeline Assignment', date: 'Feb 23, 2025', category: 'Assignment', score: 18, max: 20 }
    ]
  }
];

const gradeHistory = [
  { name: 'Mathematics', q1: 'A-', q2: 'A-', q3: 'A', q4: '', final: '' },
  { name: 'Science', q1: 'B+', q2: 'A', q3: 'A-', q4: '', final: '' },
  { name: 'English Literature', q1: 'A', q2: 'A', q3: 'A', q4: '', final: '' },
  { name: 'History', q1: 'B', q2: 'B+', q3: 'B+', q4: '', final: '' },
  { name: 'Physical Education', q1: 'A+', q2: 'A', q3: 'A+', q4: '', final: '' },
  { name: 'Art', q1: 'A', q2: 'A-', q3: 'A', q4: '', final: '' }
];

const gpaHistory = [
  { label: 'Q1', gpa: 3.5 },
  { label: 'Q2', gpa: 3.6 },
  { label: 'Q3', gpa: 3.7 },
  { label: 'Q4', gpa: 0 },
  { label: 'Final', gpa: 0 }
];

const getGradeColor = (grade) => {
  if (grade.startsWith('A')) return '#10b981';
  if (grade.startsWith('B')) return '#3b82f6';
  if (grade.startsWith('C')) return '#f59e0b';
  if (grade.startsWith('D')) return '#f97316';
  return '#ef4444';
};

const getGradeTextColor = (grade) => {
  if (grade.startsWith('A')) return 'text-emerald-600';
  if (grade.startsWith('B')) return 'text-blue-600';
  if (grade.startsWith('C')) return 'text-amber-600';
  if (grade.startsWith('D')) return 'text-orange-600';
  return 'text-red-600';
};

const getScoreBadgeClass = (score, max) => {
  const percentage = (score / max) * 100;
  if (percentage >= 90) return 'bg-emerald-100 text-emerald-800';
  if (percentage >= 80) return 'bg-blue-100 text-blue-800';
  if (percentage >= 70) return 'bg-yellow-100 text-yellow-800';
  if (percentage >= 60) return 'bg-orange-100 text-orange-800';
  return 'bg-red-100 text-red-800';
};
definePageMeta({
  layout: 'parent'
})

</script>
