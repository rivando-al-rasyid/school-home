<template>
  <div class="container mx-auto py-8 px-4">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Student Portal</h1>
      <p class="text-muted-foreground">Access your courses, assignments, and grades</p>
    </div>

    <div class="grid md:grid-cols-12 gap-8">
      <!-- Sidebar -->
      <div class="md:col-span-3">
        <div class="bg-card rounded-lg border shadow-sm mb-4">
          <div class="p-4 border-b">
            <div class="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=32" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div>
                <h3 class="font-medium">John Smith</h3>
                <p class="text-sm text-muted-foreground">Grade 10</p>
              </div>
            </div>
          </div>
          <div class="p-4">
            <nav class="space-y-1">
              <NuxtLink to="/student-portal" class="flex items-center px-3 py-2 text-sm rounded-md bg-primary/10 text-primary font-medium">
                <Icon name="lucide:layout-dashboard" class="mr-2 h-4 w-4" />
                Dashboard
              </NuxtLink>
              <NuxtLink to="/student-portal/courses" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:book-open" class="mr-2 h-4 w-4" />
                Courses
              </NuxtLink>
              <NuxtLink to="/student-portal/assignments" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:file-text" class="mr-2 h-4 w-4" />
                Assignments
              </NuxtLink>
              <NuxtLink to="/student-portal/grades" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:bar-chart-2" class="mr-2 h-4 w-4" />
                Grades
              </NuxtLink>
              <NuxtLink to="/student-portal/calendar" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:calendar" class="mr-2 h-4 w-4" />
                Calendar
              </NuxtLink>
              <NuxtLink to="/student-portal/messages" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:mail" class="mr-2 h-4 w-4" />
                Messages
                <Badge class="ml-auto" variant="secondary">3</Badge>
              </NuxtLink>
            </nav>
          </div>
        </div>
        
        <Card class="shadow-sm">
          <CardHeader>
            <CardTitle class="text-sm">Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="flex justify-between items-start">
                <div>
                  <h4 class="font-medium text-sm">Math Assignment</h4>
                  <p class="text-xs text-muted-foreground">Due in 2 days</p>
                </div>
                <Badge variant="destructive">Urgent</Badge>
              </div>
              <div class="flex justify-between items-start">
                <div>
                  <h4 class="font-medium text-sm">Science Project</h4>
                  <p class="text-xs text-muted-foreground">Due in 5 days</p>
                </div>
                <Badge variant="warning">Important</Badge>
              </div>
              <div class="flex justify-between items-start">
                <div>
                  <h4 class="font-medium text-sm">English Essay</h4>
                  <p class="text-xs text-muted-foreground">Due in 7 days</p>
                </div>
                <Badge>Normal</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <!-- Main Content -->
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
                    <Icon name="lucide:message-circle" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">New Comment</h3>
                    <p class="text-xs text-muted-foreground">Mrs. Davis commented on your English essay</p>
                    <p class="text-xs text-muted-foreground">3 hours ago</p>
                  </div>
                </div>
                
                <div class="flex gap-3">
                  <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="lucide:upload" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">Assignment Submitted</h3>
                    <p class="text-xs text-muted-foreground">Science Lab Report #5</p>
                    <p class="text-xs text-muted-foreground">Yesterday at 3:45 PM</p>
                  </div>
                </div>
                
                <div class="flex gap-3">
                  <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="lucide:calendar-plus" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">New Assignment</h3>
                    <p class="text-xs text-muted-foreground">History Research Paper assigned</p>
                    <p class="text-xs text-muted-foreground">Yesterday at 10:30 AM</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" class="w-full">View All Activity</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
</script>
