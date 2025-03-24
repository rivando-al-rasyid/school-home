<template>
  <div class="container mx-auto py-8 px-4">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Teacher Portal</h1>
      <p class="text-muted-foreground">Manage your classes, assignments, and student grades</p>
    </div>

    <div class="grid md:grid-cols-12 gap-8">
      <!-- Sidebar -->
      <div class="md:col-span-3">
        <div class="bg-card rounded-lg border shadow-sm mb-4">
          <div class="p-4 border-b">
            <div class="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=60" />
                <AvatarFallback>SW</AvatarFallback>
              </Avatar>
              <div>
                <h3 class="font-medium">Sarah Wilson</h3>
                <p class="text-sm text-muted-foreground">Mathematics Teacher</p>
              </div>
            </div>
          </div>
          <div class="p-4">
            <nav class="space-y-1">
              <NuxtLink to="/teacher-portal" class="flex items-center px-3 py-2 text-sm rounded-md bg-primary/10 text-primary font-medium">
                <Icon name="lucide:layout-dashboard" class="mr-2 h-4 w-4" />
                Dashboard
              </NuxtLink>
              <NuxtLink to="/teacher-portal/classes" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:users" class="mr-2 h-4 w-4" />
                My Classes
              </NuxtLink>
              <NuxtLink to="/teacher-portal/assignments" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:file-text" class="mr-2 h-4 w-4" />
                Assignments
              </NuxtLink>
              <NuxtLink to="/teacher-portal/grades" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:bar-chart-2" class="mr-2 h-4 w-4" />
                Grades
              </NuxtLink>
              <NuxtLink to="/teacher-portal/attendance" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:check-square" class="mr-2 h-4 w-4" />
                Attendance
              </NuxtLink>
              <NuxtLink to="/teacher-portal/messages" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:mail" class="mr-2 h-4 w-4" />
                Messages
                <Badge class="ml-auto" variant="secondary">5</Badge>
              </NuxtLink>
              <NuxtLink to="/teacher-portal/resources" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:folder" class="mr-2 h-4 w-4" />
                Resources
              </NuxtLink>
            </nav>
          </div>
        </div>
        
        <Card class="shadow-sm">
          <CardHeader>
            <CardTitle class="text-sm">Upcoming Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div>
                <h4 class="font-medium text-sm">Math 101 - Class 10A</h4>
                <p class="text-xs text-muted-foreground">Today, 9:00 AM - 10:30 AM</p>
                <p class="text-xs text-muted-foreground">Room 205</p>
              </div>
              <div>
                <h4 class="font-medium text-sm">Math 202 - Class 11B</h4>
                <p class="text-xs text-muted-foreground">Today, 11:00 AM - 12:30 PM</p>
                <p class="text-xs text-muted-foreground">Room 302</p>
              </div>
              <div>
                <h4 class="font-medium text-sm">Math Department Meeting</h4>
                <p class="text-xs text-muted-foreground">Today, 2:00 PM - 3:00 PM</p>
                <p class="text-xs text-muted-foreground">Conference Room</p>
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
              <CardTitle class="text-sm font-medium">Active Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">5</div>
              <p class="text-xs text-muted-foreground">125 Students Total</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-sm font-medium">Pending Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">12</div>
              <p class="text-xs text-muted-foreground">28 submitted, waiting for grading</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-sm font-medium">Class Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">B+</div>
              <p class="text-xs text-muted-foreground">Average across all classes</p>
            </CardContent>
          </Card>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Current Classes -->
          <Card class="shadow-sm">
            <CardHeader>
              <CardTitle>My Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon name="lucide:users" class="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 class="font-medium">Math 101 - Class 10A</h3>
                      <p class="text-sm text-muted-foreground">28 Students</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon name="lucide:users" class="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 class="font-medium">Math 101 - Class 10B</h3>
                      <p class="text-sm text-muted-foreground">26 Students</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon name="lucide:users" class="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 class="font-medium">Math 202 - Class 11A</h3>
                      <p class="text-sm text-muted-foreground">24 Students</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon name="lucide:users" class="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 class="font-medium">Math 202 - Class 11B</h3>
                      <p class="text-sm text-muted-foreground">22 Students</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon name="lucide:users" class="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 class="font-medium">Math 303 - Class 12A</h3>
                      <p class="text-sm text-muted-foreground">25 Students</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
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
                    <Icon name="lucide:file-plus" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">Assignment Created</h3>
                    <p class="text-xs text-muted-foreground">Math 101 - Trigonometry Homework #8</p>
                    <p class="text-xs text-muted-foreground">30 minutes ago</p>
                  </div>
                </div>
                
                <div class="flex gap-3">
                  <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="lucide:check-square" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">Attendance Recorded</h3>
                    <p class="text-xs text-muted-foreground">Math 202 - Class 11B</p>
                    <p class="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                
                <div class="flex gap-3">
                  <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="lucide:file-check" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">Assignments Graded</h3>
                    <p class="text-xs text-muted-foreground">Math 101 - Algebra Quiz #3 (28 submissions)</p>
                    <p class="text-xs text-muted-foreground">Yesterday at 4:15 PM</p>
                  </div>
                </div>
                
                <div class="flex gap-3">
                  <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="lucide:message-circle" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">Parent Messages</h3>
                    <p class="text-xs text-muted-foreground">3 new messages from parents</p>
                    <p class="text-xs text-muted-foreground">Yesterday at 2:30 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" class="w-full">View All Activity</Button>
            </CardFooter>
          </Card>
        </div>
        
        <!-- Quick Actions -->
        <Card class="shadow-sm mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Button variant="outline" class="h-auto flex flex-col items-center justify-center p-4 gap-2">
                <Icon name="lucide:calendar-plus" class="h-6 w-6" />
                <span class="text-xs">Create Lesson</span>
              </Button>
              <Button variant="outline" class="h-auto flex flex-col items-center justify-center p-4 gap-2">
                <Icon name="lucide:file-plus" class="h-6 w-6" />
                <span class="text-xs">New Assignment</span>
              </Button>
              <Button variant="outline" class="h-auto flex flex-col items-center justify-center p-4 gap-2">
                <Icon name="lucide:check-square" class="h-6 w-6" />
                <span class="text-xs">Take Attendance</span>
              </Button>
              <Button variant="outline" class="h-auto flex flex-col items-center justify-center p-4 gap-2">
                <Icon name="lucide:mail" class="h-6 w-6" />
                <span class="text-xs">Send Message</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
</script>
