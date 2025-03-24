<template>
  <div class="container mx-auto py-8 px-4">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Parent Portal</h1>
      <p class="text-muted-foreground">Monitor your child's academic progress and school activities</p>
    </div>

    <div class="grid md:grid-cols-12 gap-8">
      <!-- Sidebar -->
      <div class="md:col-span-3">
        <div class="bg-card rounded-lg border shadow-sm mb-4">
          <div class="p-4 border-b">
            <div class="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=23" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 class="font-medium">Jennifer Davis</h3>
                <p class="text-sm text-muted-foreground">Parent of Emily Davis</p>
              </div>
            </div>
          </div>
          <div class="p-4">
            <nav class="space-y-1">
              <NuxtLink to="/parent-portal" class="flex items-center px-3 py-2 text-sm rounded-md bg-primary/10 text-primary font-medium">
                <Icon name="lucide:layout-dashboard" class="mr-2 h-4 w-4" />
                Dashboard
              </NuxtLink>
              <NuxtLink to="/parent-portal/children" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:users" class="mr-2 h-4 w-4" />
                My Children
              </NuxtLink>
              <NuxtLink to="/parent-portal/grades" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:bar-chart-2" class="mr-2 h-4 w-4" />
                Grades & Progress
              </NuxtLink>
              <NuxtLink to="/parent-portal/attendance" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:calendar" class="mr-2 h-4 w-4" />
                Attendance
              </NuxtLink>
              <NuxtLink to="/parent-portal/behavior" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:clipboard-check" class="mr-2 h-4 w-4" />
                Behavior
              </NuxtLink>
              <NuxtLink to="/parent-portal/messages" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:mail" class="mr-2 h-4 w-4" />
                Messages
                <Badge class="ml-auto" variant="secondary">2</Badge>
              </NuxtLink>
              <NuxtLink to="/parent-portal/payments" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:credit-card" class="mr-2 h-4 w-4" />
                Payments
              </NuxtLink>
              <NuxtLink to="/parent-portal/calendar" class="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent">
                <Icon name="lucide:calendar" class="mr-2 h-4 w-4" />
                School Calendar
              </NuxtLink>
            </nav>
          </div>
        </div>
        
        <Card class="shadow-sm">
          <CardHeader>
            <CardTitle class="text-sm">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div>
                <h4 class="font-medium text-sm">Parent-Teacher Conference</h4>
                <p class="text-xs text-muted-foreground">March 28, 2025 - 4:00 PM</p>
              </div>
              <div>
                <h4 class="font-medium text-sm">Science Fair</h4>
                <p class="text-xs text-muted-foreground">April 5, 2025 - 10:00 AM</p>
              </div>
              <div>
                <h4 class="font-medium text-sm">Spring Break</h4>
                <p class="text-xs text-muted-foreground">April 10-18, 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <!-- Main Content -->
      <div class="md:col-span-9">
        <!-- Child selector -->
        <div class="mb-6">
          <Card class="shadow-sm">
            <CardContent class="p-4">
              <div class="flex items-center gap-4">
                <div class="text-sm font-medium">Viewing:</div>
                <div class="relative">
                  <select class="pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
                    <option>Emily Davis (Grade 10)</option>
                    <option>Michael Davis (Grade 7)</option>
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
              <div class="text-2xl font-bold">3.8</div>
              <p class="text-xs text-muted-foreground">Top 10% of class</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-sm font-medium">Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">98%</div>
              <p class="text-xs text-muted-foreground">1 absence this semester</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-sm font-medium">Behavior</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">Excellent</div>
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
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon name="lucide:languages" class="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 class="font-medium">Spanish</h3>
                      <p class="text-sm text-muted-foreground">Ms. Rodriguez</p>
                    </div>
                  </div>
                  <Badge variant="outline">A-</Badge>
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
                <div class="flex gap-3">
                  <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="lucide:file-check" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">Assignment Graded</h3>
                    <p class="text-xs text-muted-foreground">Math Homework #12 - Emily received 95%</p>
                    <p class="text-xs text-muted-foreground">Today at 1:35 PM</p>
                  </div>
                </div>
                
                <div class="flex gap-3">
                  <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="lucide:check-circle" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">Attendance Recorded</h3>
                    <p class="text-xs text-muted-foreground">Emily was present in all classes</p>
                    <p class="text-xs text-muted-foreground">Today at 9:15 AM</p>
                  </div>
                </div>
                
                <div class="flex gap-3">
                  <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="lucide:calendar-plus" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">New Assignment</h3>
                    <p class="text-xs text-muted-foreground">Science Lab Report assigned</p>
                    <p class="text-xs text-muted-foreground">Yesterday at 2:30 PM</p>
                  </div>
                </div>
                
                <div class="flex gap-3">
                  <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="lucide:award" class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium">Achievement</h3>
                    <p class="text-xs text-muted-foreground">Emily was selected for Science Olympiad Team</p>
                    <p class="text-xs text-muted-foreground">Yesterday at 10:15 AM</p>
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
              <div class="flex justify-between">
                <div>
                  <h4 class="font-medium">Tuition Fee (March 2025)</h4>
                  <p class="text-sm text-muted-foreground">Due: March 31, 2025</p>
                </div>
                <div class="text-right">
                  <Badge variant="success">Paid</Badge>
                  <p class="text-sm font-semibold mt-1">$650.00</p>
                </div>
              </div>
              
              <div class="flex justify-between">
                <div>
                  <h4 class="font-medium">Science Lab Materials</h4>
                  <p class="text-sm text-muted-foreground">Due: April 5, 2025</p>
                </div>
                <div class="text-right">
                  <Badge variant="destructive">Due</Badge>
                  <p class="text-sm font-semibold mt-1">$75.00</p>
                </div>
              </div>
              
              <div class="flex justify-between">
                <div>
                  <h4 class="font-medium">Spring Field Trip</h4>
                  <p class="text-sm text-muted-foreground">Due: April 15, 2025</p>
                </div>
                <div class="text-right">
                  <Badge variant="outline">Upcoming</Badge>
                  <p class="text-sm font-semibold mt-1">$120.00</p>
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
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
</script>
