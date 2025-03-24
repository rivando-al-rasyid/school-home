<template>
  <div class="container mx-auto py-8 px-4">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Administrator Portal</h1>
      <p class="text-muted-foreground">Manage school operations, staff, students, and system settings</p>
    </div>

    <div class="grid md:grid-cols-12 gap-8">
      <!-- Sidebar -->
      <div class="md:col-span-3">
        <div class="bg-card rounded-lg border shadow-sm mb-4">
          <div class="p-4 border-b">
            <div class="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                <AvatarFallback>RM</AvatarFallback>
              </Avatar>
              <div>
                <h3 class="font-medium">Robert Mitchell</h3>
                <p class="text-sm text-muted-foreground">School Administrator</p>
              </div>
            </div>
          </div>
          <div class="p-4">
            <nav class="space-y-1">
              <NuxtLink to="/admin-portal" class="flex items-center px-3 py-2 text-sm rounded-md bg-primary/10 text-primary font-medium">
                <Icon name="lucide:layout-dashboard" class="mr-2 h-4 w-4" />
                Dashboard
              </NuxtLink>
              <NuxtLink to="/admin-portal/users" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:users" class="mr-2 h-4 w-4" />
                User Management
              </NuxtLink>
              <NuxtLink to="/admin-portal/courses" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:book" class="mr-2 h-4 w-4" />
                Courses
              </NuxtLink>
              <NuxtLink to="/admin-portal/classes" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:layout-grid" class="mr-2 h-4 w-4" />
                Classes
              </NuxtLink>
              <NuxtLink to="/admin-portal/schedule" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:calendar" class="mr-2 h-4 w-4" />
                Schedule
              </NuxtLink>
              <NuxtLink to="/admin-portal/reports" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:bar-chart-2" class="mr-2 h-4 w-4" />
                Reports
              </NuxtLink>
              <NuxtLink to="/admin-portal/finance" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:dollar-sign" class="mr-2 h-4 w-4" />
                Finance
              </NuxtLink>
              <NuxtLink to="/admin-portal/settings" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:settings" class="mr-2 h-4 w-4" />
                Settings
              </NuxtLink>
            </nav>
          </div>
        </div>
        
        <Card class="shadow-sm">
          <CardHeader>
            <CardTitle class="text-sm">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-sm">Server Status:</span>
                <Badge variant="success">Online</Badge>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm">Database:</span>
                <Badge variant="success">Connected</Badge>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm">Last Backup:</span>
                <span class="text-sm text-muted-foreground">Today, 3:00 AM</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm">System Version:</span>
                <span class="text-sm text-muted-foreground">v2.4.1</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <!-- Main Content -->
      <div class="md:col-span-9">
        <div class="grid sm:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-sm font-medium">Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">1,245</div>
              <p class="text-xs text-muted-foreground">+32 from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-sm font-medium">Teachers</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">87</div>
              <p class="text-xs text-muted-foreground">+3 from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-sm font-medium">Active Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">120</div>
              <p class="text-xs text-muted-foreground">Spring semester</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-sm font-medium">Attendance Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">95.7%</div>
              <p class="text-xs text-muted-foreground">+1.2% from last month</p>
            </CardContent>
          </Card>
        </div>
        
        <!-- Recent Users & Activity Row -->
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <!-- Recent User Registrations -->
          <Card class="shadow-sm">
            <CardHeader>
              <CardTitle>Recent User Registrations</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <Avatar class="h-9 w-9">
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 class="font-medium">Jason Smith</h3>
                      <p class="text-sm text-muted-foreground">Student (Grade 9)</p>
                    </div>
                  </div>
                  <span class="text-sm text-muted-foreground">Today</span>
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <Avatar class="h-9 w-9">
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 class="font-medium">Amy Miller</h3>
                      <p class="text-sm text-muted-foreground">Teacher (Science)</p>
                    </div>
                  </div>
                  <span class="text-sm text-muted-foreground">Yesterday</span>
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <Avatar class="h-9 w-9">
                      <AvatarFallback>KL</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 class="font-medium">Karen Lee</h3>
                      <p class="text-sm text-muted-foreground">Parent</p>
                    </div>
                  </div>
                  <span class="text-sm text-muted-foreground">Yesterday</span>
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <Avatar class="h-9 w-9">
                      <AvatarFallback>DW</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 class="font-medium">David Wilson</h3>
                      <p class="text-sm text-muted-foreground">Student (Grade 11)</p>
                    </div>
                  </div>
                  <span class="text-sm text-muted-foreground">2 days ago</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" class="w-full">View All Users</Button>
            </CardFooter>
          </Card>
          
          <!-- Recent Activity -->
          <Card class="shadow-sm">
            <CardHeader>
              <CardTitle>System Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-4">
                <div class="flex gap-3">
                  <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="lucide:user-plus" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">New Enrollment</h3>
                    <p class="text-xs text-muted-foreground">15 new students enrolled for Fall 2025</p>
                    <p class="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                
                <div class="flex gap-3">
                  <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="lucide:file-text" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">Grade Reports Generated</h3>
                    <p class="text-xs text-muted-foreground">Mid-term reports for all classes</p>
                    <p class="text-xs text-muted-foreground">5 hours ago</p>
                  </div>
                </div>
                
                <div class="flex gap-3">
                  <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="lucide:calendar" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">Schedule Updated</h3>
                    <p class="text-xs text-muted-foreground">Spring semester exam schedule published</p>
                    <p class="text-xs text-muted-foreground">Yesterday</p>
                  </div>
                </div>
                
                <div class="flex gap-3">
                  <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="lucide:database" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">System Backup</h3>
                    <p class="text-xs text-muted-foreground">Automatic system backup completed</p>
                    <p class="text-xs text-muted-foreground">Yesterday</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" class="w-full">View All Activity</Button>
            </CardFooter>
          </Card>
        </div>
        
        <!-- Quick Links and Notifications Row -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Quick Links -->
          <Card class="shadow-sm">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="grid grid-cols-2 gap-4">
                <Button variant="outline" class="h-auto flex flex-col items-center justify-center p-4 gap-2">
                  <Icon name="lucide:user-plus" class="h-6 w-6" />
                  <span class="text-xs">Add User</span>
                </Button>
                <Button variant="outline" class="h-auto flex flex-col items-center justify-center p-4 gap-2">
                  <Icon name="lucide:book-plus" class="h-6 w-6" />
                  <span class="text-xs">Create Course</span>
                </Button>
                <Button variant="outline" class="h-auto flex flex-col items-center justify-center p-4 gap-2">
                  <Icon name="lucide:calendar" class="h-6 w-6" />
                  <span class="text-xs">Manage Schedule</span>
                </Button>
                <Button variant="outline" class="h-auto flex flex-col items-center justify-center p-4 gap-2">
                  <Icon name="lucide:file-text" class="h-6 w-6" />
                  <span class="text-xs">Generate Reports</span>
                </Button>
                <Button variant="outline" class="h-auto flex flex-col items-center justify-center p-4 gap-2">
                  <Icon name="lucide:mail" class="h-6 w-6" />
                  <span class="text-xs">Send Announcements</span>
                </Button>
                <Button variant="outline" class="h-auto flex flex-col items-center justify-center p-4 gap-2">
                  <Icon name="lucide:database" class="h-6 w-6" />
                  <span class="text-xs">Backup System</span>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <!-- System Notifications -->
          <Card class="shadow-sm">
            <CardHeader>
              <CardTitle>System Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-4">
                <div class="flex items-start gap-3 pb-3 border-b">
                  <div class="h-9 w-9 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Icon name="lucide:alert-triangle" class="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">Storage Warning</h3>
                    <p class="text-xs text-muted-foreground">File storage at 75% capacity. Consider cleanup.</p>
                    <p class="text-xs text-muted-foreground mt-1">1 hour ago</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3 pb-3 border-b">
                  <div class="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon name="lucide:check-circle" class="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">Update Successful</h3>
                    <p class="text-xs text-muted-foreground">System updated to version 2.4.1</p>
                    <p class="text-xs text-muted-foreground mt-1">Yesterday</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3 pb-3 border-b">
                  <div class="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon name="lucide:info" class="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">Maintenance Schedule</h3>
                    <p class="text-xs text-muted-foreground">System maintenance planned for March 28th, 2AM-4AM</p>
                    <p class="text-xs text-muted-foreground mt-1">2 days ago</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <div class="h-9 w-9 rounded-full bg-red-100 flex items-center justify-center">
                    <Icon name="lucide:alert-circle" class="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">Security Alert</h3>
                    <p class="text-xs text-muted-foreground">Multiple failed login attempts detected for admin account</p>
                    <p class="text-xs text-muted-foreground mt-1">3 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" class="w-full">View All Notifications</Button>
            </CardFooter>
          </Card>
        </div>
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
