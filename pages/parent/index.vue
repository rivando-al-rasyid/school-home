<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">Parent Dashboard</h1>


    <div class="md:col-span-9">
        <!-- Child selector -->
        <div class="mb-6">
          <Card class="shadow-sm">
            <CardContent class="p-4">
              <div class="flex items-center gap-4">
                <div class="text-sm font-medium">Viewing:</div>
                <div class="relative">
                  <select 
                    v-model="selectedStudent.id" 
                    class="pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none"
                  >
                    <option v-for="student in students" :key="student.id" :value="student.id">
                      {{ student.name }} (Grade {{ student.grade }})
                    </option>
                  </select>
                  <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div class="grid sm:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-sm font-medium">Current GPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">{{ academicData.gpa }}</div>
              <p class="text-xs text-muted-foreground">Top 10% of class</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-sm font-medium">Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">{{ academicData.attendance }}</div>
              <p class="text-xs text-muted-foreground">1 absence this semester</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-sm font-medium">Behavior</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">{{ academicData.behavior }}</div>
              <p class="text-xs text-muted-foreground">No disciplinary actions</p>
            </CardContent>
          </Card>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Current Classes and Grades -->
          <Card class="shadow-sm">
            <CardHeader>
              <CardTitle>Current Classes and Grades</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-4">
                <div v-for="(subject, index) in academicData.classes" :key="index" class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon :name="subject.icon" class="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 class="font-medium">{{ subject.subject }}</h3>
                      <p class="text-sm text-muted-foreground">{{ subject.teacher }}</p>
                    </div>
                  </div>
                  <Badge variant="outline">{{ subject.grade }}</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" class="w-full">View Detailed Report</Button>
            </CardFooter>
          </Card>
          
          <!-- Recent Activity -->
          <Card class="shadow-sm">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-4">
                <div v-for="(activity, index) in academicData.recentActivity" :key="index" class="flex gap-3">
                  <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon :name="activity.icon" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">{{ activity.type }}</h3>
                    <p class="text-xs text-muted-foreground">{{ activity.details }}</p>
                    <p class="text-xs text-muted-foreground">{{ activity.time }}</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" class="w-full">View All Activity</Button>
            </CardFooter>
          </Card>
        </div>
        
        <!-- Payment Summary -->
        <Card class="shadow-sm mt-8">
          <CardHeader>
            <CardTitle>Payment Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div v-for="(payment, index) in academicData.payments" :key="index" class="flex justify-between">
                <div>
                  <h4 class="font-medium">{{ payment.name }}</h4>
                  <p class="text-sm text-muted-foreground">Due: {{ payment.dueDate }}</p>
                </div>
                <div class="text-right">
                  <Badge :variant="payment.variant">{{ payment.status }}</Badge>
                  <p class="text-sm font-semibold mt-1">{{ payment.amount }}</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button class="w-full">Make a Payment</Button>
          </CardFooter>
        </Card>
      </div>
</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const students = [
  { id: 1, name: 'Emily Davis', grade: 10 },
  { id: 2, name: 'Michael Davis', grade: 7 }
]

const selectedStudent = ref(students[0])

const academicData = reactive({
  gpa: '3.8',
  attendance: '98%',
  behavior: 'Excellent',
  classes: [
    { subject: 'Mathematics', teacher: 'Mr. Johnson', grade: 'A-', icon: 'lucide:calculator' },
    { subject: 'Science', teacher: 'Ms. Williams', grade: 'B+', icon: 'lucide:flask-conical' },
    { subject: 'English', teacher: 'Mrs. Davis', grade: 'A', icon: 'lucide:book' },
    { subject: 'History', teacher: 'Mr. Brown', grade: 'B', icon: 'lucide:globe' },
    { subject: 'Spanish', teacher: 'Ms. Rodriguez', grade: 'A-', icon: 'lucide:languages' }
  ],
  recentActivity: [
    { type: 'Assignment Graded', details: 'Math Homework #12 - Emily received 95%', time: 'Today at 1:35 PM', icon: 'lucide:file-check' },
    { type: 'Attendance Recorded', details: 'Emily was present in all classes', time: 'Today at 9:15 AM', icon: 'lucide:check-circle' },
    { type: 'New Assignment', details: 'Science Lab Report assigned', time: 'Yesterday at 2:30 PM', icon: 'lucide:calendar-plus' },
    { type: 'Achievement', details: 'Emily was selected for Science Olympiad Team', time: 'Yesterday at 10:15 AM', icon: 'lucide:award' }
  ],
  payments: [
    { name: 'Tuition Fee (March 2025)', dueDate: 'March 31, 2025', status: 'Paid', amount: '$650.00', variant: 'success' },
    { name: 'Science Lab Materials', dueDate: 'April 5, 2025', status: 'Due', amount: '$75.00', variant: 'destructive' },
    { name: 'Spring Field Trip', dueDate: 'April 15, 2025', status: 'Upcoming', amount: '$120.00', variant: 'outline' }
  ]
})

definePageMeta({
  layout: 'parent'
})
</script>