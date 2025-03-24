<template>
  <div>
    <!-- Main Content -->
    <div class="flex flex-col md:flex-row justify-between gap-4 items-center mb-6">
      <div class="flex items-center w-full md:w-auto">
        <div class="relative flex-grow md:w-72">
          <input type="text" placeholder="Search resources..." class="pl-8 pr-4 py-2 text-sm rounded-md border focus:ring-2 focus:ring-primary focus:border-primary w-full">
          <Icon name="lucide:search" class="h-4 w-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
        </div>
        <select class="ml-2 pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
          <option>All Categories</option>
          <option>Lesson Plans</option>
          <option>Worksheets</option>
          <option>Presentations</option>
          <option>Videos</option>
          <option>Reference Material</option>
        </select>
      </div>
      
      <div class="flex space-x-2 w-full md:w-auto justify-end">
        <Button variant="outline">
          <Icon name="lucide:folder-plus" class="mr-2 h-4 w-4" />
          New Folder
        </Button>
        <Button>
          <Icon name="lucide:upload" class="mr-2 h-4 w-4" />
          Upload
        </Button>
      </div>
    </div>
    
    <Card class="shadow-sm mb-6">
      <CardHeader>
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <Button variant="ghost" size="icon" class="h-8 w-8">
              <Icon name="lucide:arrow-left" class="h-4 w-4" />
            </Button>
            <CardTitle>My Resources</CardTitle>
          </div>
          <Button variant="ghost" size="sm">
            <Icon name="lucide:list" class="mr-2 h-4 w-4" />
            List View
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div class="border rounded-md overflow-hidden hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
            <div class="p-4 bg-blue-500/10 flex items-center justify-center h-36">
              <Icon name="lucide:folder" class="h-16 w-16 text-blue-500" />
            </div>
            <div class="p-3 border-t">
              <h3 class="font-medium text-sm mb-1">Lesson Plans</h3>
              <p class="text-xs text-muted-foreground">18 items</p>
            </div>
          </div>
          
          <div class="border rounded-md overflow-hidden hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
            <div class="p-4 bg-indigo-500/10 flex items-center justify-center h-36">
              <Icon name="lucide:folder" class="h-16 w-16 text-indigo-500" />
            </div>
            <div class="p-3 border-t">
              <h3 class="font-medium text-sm mb-1">Worksheets</h3>
              <p class="text-xs text-muted-foreground">32 items</p>
            </div>
          </div>
          
          <div class="border rounded-md overflow-hidden hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
            <div class="p-4 bg-purple-500/10 flex items-center justify-center h-36">
              <Icon name="lucide:folder" class="h-16 w-16 text-purple-500" />
            </div>
            <div class="p-3 border-t">
              <h3 class="font-medium text-sm mb-1">Presentations</h3>
              <p class="text-xs text-muted-foreground">11 items</p>
            </div>
          </div>
          
          <div class="border rounded-md overflow-hidden hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
            <div class="p-4 bg-emerald-500/10 flex items-center justify-center h-36">
              <Icon name="lucide:folder" class="h-16 w-16 text-emerald-500" />
            </div>
            <div class="p-3 border-t">
              <h3 class="font-medium text-sm mb-1">Student Projects</h3>
              <p class="text-xs text-muted-foreground">9 items</p>
            </div>
          </div>
          
          <div class="border rounded-md overflow-hidden hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
            <div class="p-4 bg-amber-500/10 flex items-center justify-center h-36">
              <Icon name="lucide:folder" class="h-16 w-16 text-amber-500" />
            </div>
            <div class="p-3 border-t">
              <h3 class="font-medium text-sm mb-1">Assessment Tools</h3>
              <p class="text-xs text-muted-foreground">14 items</p>
            </div>
          </div>
          
          <div class="border rounded-md overflow-hidden hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
            <div class="p-4 bg-muted flex items-center justify-center h-36">
              <div class="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="lucide:file-text" class="h-10 w-10 text-primary" />
              </div>
            </div>
            <div class="p-3 border-t">
              <h3 class="font-medium text-sm mb-1 truncate">Algebra2_Lesson_Week10.docx</h3>
              <p class="text-xs text-muted-foreground">Updated 2 days ago</p>
            </div>
          </div>
          
          <div class="border rounded-md overflow-hidden hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
            <div class="p-4 bg-muted flex items-center justify-center h-36">
              <div class="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="lucide:file-spreadsheet" class="h-10 w-10 text-primary" />
              </div>
            </div>
            <div class="p-3 border-t">
              <h3 class="font-medium text-sm mb-1 truncate">Class10A_GradeCalculator.xlsx</h3>
              <p class="text-xs text-muted-foreground">Updated 3 days ago</p>
            </div>
          </div>
          
          <div class="border rounded-md overflow-hidden hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
            <div class="p-4 bg-muted flex items-center justify-center h-36">
              <div class="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="lucide:file-presentation" class="h-10 w-10 text-primary" />
              </div>
            </div>
            <div class="p-3 border-t">
              <h3 class="font-medium text-sm mb-1 truncate">Trigonometry_Introduction.pptx</h3>
              <p class="text-xs text-muted-foreground">Updated 1 week ago</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <div class="grid md:grid-cols-2 gap-6">
      <Card class="shadow-sm">
        <CardHeader>
          <CardTitle>Recent Files</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <div class="h-10 w-10 rounded bg-amber-500/10 flex items-center justify-center">
                <Icon name="lucide:file-text" class="h-5 w-5 text-amber-500" />
              </div>
              <div class="flex-grow">
                <h4 class="text-sm font-medium">Quadratic_Equations_Worksheet.pdf</h4>
                <p class="text-xs text-muted-foreground">Opened today at 10:35 AM</p>
              </div>
              <Button variant="ghost" size="icon" class="h-8 w-8">
                <Icon name="lucide:more-horizontal" class="h-4 w-4" />
              </Button>
            </div>
            
            <div class="flex items-center space-x-3">
              <div class="h-10 w-10 rounded bg-green-500/10 flex items-center justify-center">
                <Icon name="lucide:file-spreadsheet" class="h-5 w-5 text-green-500" />
              </div>
              <div class="flex-grow">
                <h4 class="text-sm font-medium">Class11A_AttendanceRecord.xlsx</h4>
                <p class="text-xs text-muted-foreground">Opened yesterday at 2:15 PM</p>
              </div>
              <Button variant="ghost" size="icon" class="h-8 w-8">
                <Icon name="lucide:more-horizontal" class="h-4 w-4" />
              </Button>
            </div>
            
            <div class="flex items-center space-x-3">
              <div class="h-10 w-10 rounded bg-blue-500/10 flex items-center justify-center">
                <Icon name="lucide:file-presentation" class="h-5 w-5 text-blue-500" />
              </div>
              <div class="flex-grow">
                <h4 class="text-sm font-medium">Statistics_Intro_Presentation.pptx</h4>
                <p class="text-xs text-muted-foreground">Opened 2 days ago</p>
              </div>
              <Button variant="ghost" size="icon" class="h-8 w-8">
                <Icon name="lucide:more-horizontal" class="h-4 w-4" />
              </Button>
            </div>
            
            <div class="flex items-center space-x-3">
              <div class="h-10 w-10 rounded bg-purple-500/10 flex items-center justify-center">
                <Icon name="lucide:file-text" class="h-5 w-5 text-purple-500" />
              </div>
              <div class="flex-grow">
                <h4 class="text-sm font-medium">End_Of_Term_Review_Guide.docx</h4>
                <p class="text-xs text-muted-foreground">Opened 3 days ago</p>
              </div>
              <Button variant="ghost" size="icon" class="h-8 w-8">
                <Icon name="lucide:more-horizontal" class="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div class="mt-4 flex justify-end">
            <Button variant="ghost" size="sm">View All Recent Files</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card class="shadow-sm">
        <CardHeader>
          <CardTitle>Shared Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div class="flex items-center space-x-3">
                <Avatar class="h-8 w-8">
                  <AvatarImage src="https://i.pravatar.cc/150?img=36" />
                  <AvatarFallback>JM</AvatarFallback>
                </Avatar>
                <div>
                  <p class="text-sm font-medium">Math Department Resources</p>
                  <p class="text-xs text-muted-foreground">Shared by John Martinez</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Access
              </Button>
            </div>
            
            <div class="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div class="flex items-center space-x-3">
                <Avatar class="h-8 w-8">
                  <AvatarImage src="https://i.pravatar.cc/150?img=32" />
                  <AvatarFallback>LP</AvatarFallback>
                </Avatar>
                <div>
                  <p class="text-sm font-medium">Professional Development Materials</p>
                  <p class="text-xs text-muted-foreground">Shared by Linda Parker</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Access
              </Button>
            </div>
            
            <div class="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div class="flex items-center space-x-3">
                <Avatar class="h-8 w-8">
                  <AvatarImage src="https://i.pravatar.cc/150?img=4" />
                  <AvatarFallback>PA</AvatarFallback>
                </Avatar>
                <div>
                  <p class="text-sm font-medium">School Curriculum Standards</p>
                  <p class="text-xs text-muted-foreground">Shared by Principal Anderson</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Access
              </Button>
            </div>
          </div>
          
          <div class="h-px bg-border my-4" />
          
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v-1b70fb18="">
            <div class="flex flex-col space-y-1.5 p-4">
              <h3 class="text-sm font-medium leading-none">Storage Usage</h3>
            </div>
            <div class="p-4 pt-0">
              <div class="mb-1 flex justify-between text-xs">
                <span>4.2 GB used</span>
                <span>10 GB total</span>
              </div>
              <div class="h-2 w-full rounded-full bg-muted">
                <div class="h-full rounded-full bg-primary" style="width: 42%;" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

definePageMeta({
  layout: 'teacher'
});
</script>
