<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">My Children</h1>
    
    <div class="grid grid-cols-1 gap-6">
      <Card v-for="(child, index) in children" :key="index">
        <CardContent class="p-0">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/4 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r">
              <Avatar class="h-24 w-24 mb-3">
                <AvatarImage :src="child.avatar" />
                <AvatarFallback>{{ getInitials(child.name) }}</AvatarFallback>
              </Avatar>
              <h3 class="text-xl font-semibold text-center">{{ child.name }}</h3>
              <p class="text-sm text-muted-foreground text-center">{{ child.grade }}</p>
            </div>
            <div class="md:w-3/4 p-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <h4 class="text-sm font-medium text-muted-foreground">Student ID</h4>
                  <p>{{ child.studentId }}</p>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-muted-foreground">Date of Birth</h4>
                  <p>{{ child.dob }}</p>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-muted-foreground">Age</h4>
                  <p>{{ child.age }}</p>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-muted-foreground">Homeroom Teacher</h4>
                  <p>{{ child.homeroomTeacher }}</p>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-muted-foreground">Current GPA</h4>
                  <p>{{ child.gpa }}</p>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-muted-foreground">Attendance</h4>
                  <p>{{ child.attendance }}</p>
                </div>
              </div>
              
              <div class="border-t pt-4">
                <h4 class="font-medium mb-2">Current Classes</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div v-for="(subject, sIndex) in child.classes" :key="sIndex" class="flex justify-between items-center p-2 rounded-md bg-accent/50">
                    <span>{{ subject.name }}</span>
                    <Badge :class="gradeColorClass(subject.grade)">{{ subject.grade }}</Badge>
                  </div>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-2 mt-4">
                <Button variant="outline" size="sm" class="flex items-center">
                  <Icon name="lucide:calendar" class="h-4 w-4 mr-2" />
                  Schedule
                </Button>
                <Button variant="outline" size="sm" class="flex items-center">
                  <Icon name="lucide:bar-chart-2" class="h-4 w-4 mr-2" />
                  View Grades
                </Button>
                <Button variant="outline" size="sm" class="flex items-center">
                  <Icon name="lucide:calendar-check" class="h-4 w-4 mr-2" />
                  Attendance
                </Button>
                <Button variant="outline" size="sm" class="flex items-center">
                  <Icon name="lucide:users" class="h-4 w-4 mr-2" />
                  Teachers
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Alert variant="info" class="bg-blue-50">
        <AlertTitle>Add Another Child</AlertTitle>
        <AlertDescription>
          To add another child to your account, please visit the school office with proper identification and proof of guardianship.
        </AlertDescription>
      </Alert>
    </div>
  </div>
</template>

<script setup>
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const children = [
  {
    name: 'Emma Davis',
    avatar: 'https://i.pravatar.cc/150?img=44',
    grade: '8th Grade',
    studentId: 'S2023-1054',
    dob: 'April 12, 2011',
    age: '13',
    homeroomTeacher: 'Ms. Thompson',
    gpa: '3.7',
    attendance: '96%',
    classes: [
      { name: 'Mathematics', grade: 'A' },
      { name: 'Science', grade: 'A-' },
      { name: 'History', grade: 'B+' },
      { name: 'English', grade: 'A' },
      { name: 'Physical Education', grade: 'A+' },
      { name: 'Art', grade: 'A' }
    ]
  },
  {
    name: 'Ethan Davis',
    avatar: 'https://i.pravatar.cc/150?img=59',
    grade: '5th Grade',
    studentId: 'S2023-1055',
    dob: 'June 3, 2014',
    age: '10',
    homeroomTeacher: 'Mr. Roberts',
    gpa: '3.5',
    attendance: '98%',
    classes: [
      { name: 'Mathematics', grade: 'B+' },
      { name: 'Science', grade: 'A' },
      { name: 'History', grade: 'B' },
      { name: 'English', grade: 'A-' },
      { name: 'Physical Education', grade: 'A' },
      { name: 'Music', grade: 'A+' }
    ]
  }
];

const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('');
};

const gradeColorClass = (grade) => {
  if (grade.startsWith('A')) return 'bg-emerald-100 text-emerald-800 hover:bg-emerald-100/80';
  if (grade.startsWith('B')) return 'bg-blue-100 text-blue-800 hover:bg-blue-100/80';
  if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80';
  if (grade.startsWith('D')) return 'bg-orange-100 text-orange-800 hover:bg-orange-100/80';
  return 'bg-red-100 text-red-800 hover:bg-red-100/80';
};
definePageMeta({
  layout: 'parent'
})

</script>
