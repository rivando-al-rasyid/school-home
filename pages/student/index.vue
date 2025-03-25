<template>
      <div>
        <h1 class="text-2xl font-bold mb-4">Student Dashboard</h1>
      <div class="md:col-span-9">
        <div class="grid sm:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-sm font-medium">Current GPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">3.8</div>
              <p class="text-xs text-muted-foreground">+0.2 from last semester</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-sm font-medium">Completed Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">18/20</div>
              <p class="text-xs text-muted-foreground">90% completion rate</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-sm font-medium">Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">98%</div>
              <p class="text-xs text-muted-foreground">Excellent record</p>
            </CardContent>
          </Card>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Current Courses -->
          <Card class="shadow-sm">
            <CardHeader>
              <CardTitle>Current Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon name="lucide:calculator" class="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 class="font-medium">Mathematics</h3>
                      <p class="text-sm text-muted-foreground">Mr. Johnson</p>
                    </div>
                  </div>
                  <Badge variant="outline">A-</Badge>
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon name="lucide:flask-conical" class="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 class="font-medium">Science</h3>
                      <p class="text-sm text-muted-foreground">Ms. Williams</p>
                    </div>
                  </div>
                  <Badge variant="outline">B+</Badge>
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon name="lucide:book" class="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 class="font-medium">English</h3>
                      <p class="text-sm text-muted-foreground">Mrs. Davis</p>
                    </div>
                  </div>
                  <Badge variant="outline">A</Badge>
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon name="lucide:globe" class="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 class="font-medium">History</h3>
                      <p class="text-sm text-muted-foreground">Mr. Brown</p>
                    </div>
                  </div>
                  <Badge variant="outline">B</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <!-- Recent Activity -->
          <Card class="shadow-sm">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-4">
                <div class="flex gap-3">
                  <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="lucide:file-check" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">Assignment Graded</h3>
                    <p class="text-xs text-muted-foreground">Math Homework #12 - You received 95%</p>
                    <p class="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                </div>
                
                <div class="flex gap-3">
                  <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="lucide:file-input" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">Assignment Submitted</h3>
                    <p class="text-xs text-muted-foreground">Science Lab Report #5</p>
                    <p class="text-xs text-muted-foreground">3 hours ago</p>
                  </div>
                </div>
                
                <div class="flex gap-3">
                  <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="lucide:mail" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">New Message</h3>
                    <p class="text-xs text-muted-foreground">From: Ms. Williams - "Lab Group Assignment"</p>
                    <p class="text-xs text-muted-foreground">Yesterday</p>
                  </div>
                </div>
                
                <div class="flex gap-3">
                  <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="lucide:calendar-plus" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">New Assignment Posted</h3>
                    <p class="text-xs text-muted-foreground">English Essay - Due in 7 days</p>
                    <p class="text-xs text-muted-foreground">Yesterday</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <!-- Study Resources -->
        <Card class="shadow-sm mt-8">
          <CardHeader>
            <CardTitle>Study Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" class="h-auto flex-col py-4 px-3 space-y-2 items-center justify-center" @click="navigateTo('/student/resources/library')">
                <Icon name="lucide:book-open" class="h-6 w-6" />
                <span class="text-xs">Digital Library</span>
              </Button>
              <Button variant="outline" class="h-auto flex-col py-4 px-3 space-y-2 items-center justify-center" @click="navigateTo('/student/resources/videos')">
                <Icon name="lucide:video" class="h-6 w-6" />
                <span class="text-xs">Video Tutorials</span>
              </Button>
              <Button variant="outline" class="h-auto flex-col py-4 px-3 space-y-2 items-center justify-center" @click="navigateTo('/student/resources/quizzes')">
                <Icon name="lucide:brain-circuit" class="h-6 w-6" />
                <span class="text-xs">Practice Quizzes</span>
              </Button>
              <Button variant="outline" class="h-auto flex-col py-4 px-3 space-y-2 items-center justify-center" @click="navigateTo('/student/resources/groups')">
                <Icon name="lucide:users" class="h-6 w-6" />
                <span class="text-xs">Study Groups</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>  
  
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateTo(route) {
  router.push(route)
}

definePageMeta({
  layout: 'student'
})

</script>
