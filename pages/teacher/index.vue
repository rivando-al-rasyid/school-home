<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Teacher Portal</h1>
      <p class="text-muted-foreground">Manage your classes, assignments, and student grades</p>
    </div>
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
                <Icon name="lucide:file-check" class="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 class="text-sm font-medium">Assignment Graded</h3>
                <p class="text-xs text-muted-foreground">Math 101 - Homework #8 (28 submissions)</p>
                <p class="text-xs text-muted-foreground">20 mins ago</p>
              </div>
            </div>
            
            <div class="flex gap-3">
              <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="lucide:calendar-plus" class="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 class="text-sm font-medium">Assignment Created</h3>
                <p class="text-xs text-muted-foreground">Math 202 - Quiz #5</p>
                <p class="text-xs text-muted-foreground">1 hour ago</p>
              </div>
            </div>
            
            <div class="flex gap-3">
              <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="lucide:mail" class="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 class="text-sm font-medium">Message Received</h3>
                <p class="text-xs text-muted-foreground">From: Principal Johnson - "Staff Meeting Agenda"</p>
                <p class="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            
            <div class="flex gap-3">
              <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="lucide:file-input" class="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 class="text-sm font-medium">New Submission</h3>
                <p class="text-xs text-muted-foreground">Math 303 - Project Assignment (5 new submissions)</p>
                <p class="text-xs text-muted-foreground">3 hours ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    
    <!-- Quick Actions -->
    <Card class="shadow-sm mt-8">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" class="h-auto flex-col py-4 px-3 space-y-2 items-center justify-center">
            <Icon name="lucide:file-plus" class="h-6 w-6" />
            <span class="text-xs">New Assignment</span>
          </Button>
          <Button variant="outline" class="h-auto flex-col py-4 px-3 space-y-2 items-center justify-center">
            <Icon name="lucide:calendar-check" class="h-6 w-6" />
            <span class="text-xs">Take Attendance</span>
          </Button>
          <Button variant="outline" class="h-auto flex-col py-4 px-3 space-y-2 items-center justify-center">
            <Icon name="lucide:mail-plus" class="h-6 w-6" />
            <span class="text-xs">Send Message</span>
          </Button>
          <Button variant="outline" class="h-auto flex-col py-4 px-3 space-y-2 items-center justify-center">
            <Icon name="lucide:printer" class="h-6 w-6" />
            <span class="text-xs">Print Reports</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

definePageMeta({
  layout: 'teacher'
});
</script>
