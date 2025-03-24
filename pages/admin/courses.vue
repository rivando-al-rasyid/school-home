<template>
  <div>
    <h1 class="text-3xl font-bold mb-2">Course Management</h1>
    <p class="text-muted-foreground mb-6">Manage academic courses, subjects, and curriculum</p>
    
    <!-- Course Management Controls -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div class="flex items-center gap-2">
        <div class="relative">
          <Icon name="lucide:search" class="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Search courses..." class="pl-9 pr-4 py-2 rounded-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none w-full sm:w-[300px]" />
        </div>
        <div class="relative">
          <select class="pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
            <option>All Departments</option>
            <option>Mathematics</option>
            <option>Science</option>
            <option>Language Arts</option>
            <option>Social Studies</option>
            <option>Arts</option>
          </select>
          <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
      <Button>
        <Icon name="lucide:plus" class="h-4 w-4 mr-2" />
        Add New Course
      </Button>
    </div>
    
    <!-- Courses Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <!-- Course Card -->
      <Card class="shadow-sm">
        <CardHeader className="pb-3">
          <div class="flex justify-between items-start">
            <div class="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
              <Icon name="lucide:calculator" class="h-5 w-5 text-primary" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Icon name="lucide:more-horizontal" class="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Icon name="lucide:pencil" class="mr-2 h-4 w-4" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon name="lucide:copy" class="mr-2 h-4 w-4" />
                  Duplicate
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem class="text-destructive">
                  <Icon name="lucide:trash-2" class="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <CardTitle class="mt-4">Mathematics 101</CardTitle>
          <div class="flex items-center mt-1">
            <Badge variant="outline">Core</Badge>
            <Badge variant="outline" class="ml-2">Grade 9</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">Introduction to algebra, geometry, and basic mathematical concepts for 9th grade students.</p>
          <div class="flex justify-between items-center mt-4">
            <div class="text-sm">
              <div class="flex items-center">
                <Icon name="lucide:users" class="h-4 w-4 mr-2 text-muted-foreground" />
                <span>120 Students</span>
              </div>
              <div class="flex items-center mt-1">
                <Icon name="lucide:clock" class="h-4 w-4 mr-2 text-muted-foreground" />
                <span>4 Credits</span>
              </div>
            </div>
            <div>
              <Button variant="outline" size="sm">View</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card class="shadow-sm">
        <CardHeader className="pb-3">
          <div class="flex justify-between items-start">
            <div class="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
              <Icon name="lucide:flask-conical" class="h-5 w-5 text-primary" />
            </div>
            <Button variant="ghost" size="icon">
              <Icon name="lucide:more-horizontal" class="h-4 w-4" />
            </Button>
          </div>
          <CardTitle class="mt-4">Biology 101</CardTitle>
          <div class="flex items-center mt-1">
            <Badge variant="outline">Core</Badge>
            <Badge variant="outline" class="ml-2">Grade 9</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">Introduction to biological concepts, cell structure, and living organisms for 9th grade students.</p>
          <div class="flex justify-between items-center mt-4">
            <div class="text-sm">
              <div class="flex items-center">
                <Icon name="lucide:users" class="h-4 w-4 mr-2 text-muted-foreground" />
                <span>115 Students</span>
              </div>
              <div class="flex items-center mt-1">
                <Icon name="lucide:clock" class="h-4 w-4 mr-2 text-muted-foreground" />
                <span>4 Credits</span>
              </div>
            </div>
            <div>
              <Button variant="outline" size="sm">View</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card class="shadow-sm">
        <CardHeader className="pb-3">
          <div class="flex justify-between items-start">
            <div class="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
              <Icon name="lucide:book" class="h-5 w-5 text-primary" />
            </div>
            <Button variant="ghost" size="icon">
              <Icon name="lucide:more-horizontal" class="h-4 w-4" />
            </Button>
          </div>
          <CardTitle class="mt-4">English Literature 101</CardTitle>
          <div class="flex items-center mt-1">
            <Badge variant="outline">Core</Badge>
            <Badge variant="outline" class="ml-2">Grade 9</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">Introduction to literary analysis, reading comprehension, and writing skills for 9th grade students.</p>
          <div class="flex justify-between items-center mt-4">
            <div class="text-sm">
              <div class="flex items-center">
                <Icon name="lucide:users" class="h-4 w-4 mr-2 text-muted-foreground" />
                <span>125 Students</span>
              </div>
              <div class="flex items-center mt-1">
                <Icon name="lucide:clock" class="h-4 w-4 mr-2 text-muted-foreground" />
                <span>4 Credits</span>
              </div>
            </div>
            <div>
              <Button variant="outline" size="sm">View</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card class="shadow-sm">
        <CardHeader className="pb-3">
          <div class="flex justify-between items-start">
            <div class="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
              <Icon name="lucide:globe" class="h-5 w-5 text-primary" />
            </div>
            <Button variant="ghost" size="icon">
              <Icon name="lucide:more-horizontal" class="h-4 w-4" />
            </Button>
          </div>
          <CardTitle class="mt-4">World History 101</CardTitle>
          <div class="flex items-center mt-1">
            <Badge variant="outline">Core</Badge>
            <Badge variant="outline" class="ml-2">Grade 9</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">Introduction to major historical events, civilizations, and global developments for 9th grade students.</p>
          <div class="flex justify-between items-center mt-4">
            <div class="text-sm">
              <div class="flex items-center">
                <Icon name="lucide:users" class="h-4 w-4 mr-2 text-muted-foreground" />
                <span>118 Students</span>
              </div>
              <div class="flex items-center mt-1">
                <Icon name="lucide:clock" class="h-4 w-4 mr-2 text-muted-foreground" />
                <span>4 Credits</span>
              </div>
            </div>
            <div>
              <Button variant="outline" size="sm">View</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card class="shadow-sm">
        <CardHeader className="pb-3">
          <div class="flex justify-between items-start">
            <div class="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
              <Icon name="lucide:flask" class="h-5 w-5 text-primary" />
            </div>
            <Button variant="ghost" size="icon">
              <Icon name="lucide:more-horizontal" class="h-4 w-4" />
            </Button>
          </div>
          <CardTitle class="mt-4">Chemistry 201</CardTitle>
          <div class="flex items-center mt-1">
            <Badge variant="outline">Core</Badge>
            <Badge variant="outline" class="ml-2">Grade 10</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">Study of matter, chemical reactions, and atomic structure for 10th grade students.</p>
          <div class="flex justify-between items-center mt-4">
            <div class="text-sm">
              <div class="flex items-center">
                <Icon name="lucide:users" class="h-4 w-4 mr-2 text-muted-foreground" />
                <span>105 Students</span>
              </div>
              <div class="flex items-center mt-1">
                <Icon name="lucide:clock" class="h-4 w-4 mr-2 text-muted-foreground" />
                <span>4 Credits</span>
              </div>
            </div>
            <div>
              <Button variant="outline" size="sm">View</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card class="shadow-sm">
        <CardHeader className="pb-3">
          <div class="flex justify-between items-start">
            <div class="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
              <Icon name="lucide:calculator" class="h-5 w-5 text-primary" />
            </div>
            <Button variant="ghost" size="icon">
              <Icon name="lucide:more-horizontal" class="h-4 w-4" />
            </Button>
          </div>
          <CardTitle class="mt-4">Algebra II</CardTitle>
          <div class="flex items-center mt-1">
            <Badge variant="outline">Core</Badge>
            <Badge variant="outline" class="ml-2">Grade 10</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">Advanced algebraic concepts, equations, and functions for 10th grade students.</p>
          <div class="flex justify-between items-center mt-4">
            <div class="text-sm">
              <div class="flex items-center">
                <Icon name="lucide:users" class="h-4 w-4 mr-2 text-muted-foreground" />
                <span>110 Students</span>
              </div>
              <div class="flex items-center mt-1">
                <Icon name="lucide:clock" class="h-4 w-4 mr-2 text-muted-foreground" />
                <span>4 Credits</span>
              </div>
            </div>
            <div>
              <Button variant="outline" size="sm">View</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    
    <!-- Pagination -->
    <div class="flex justify-between items-center">
      <div class="text-sm text-muted-foreground">
        Showing 6 of 42 courses
      </div>
      <Pagination :total="42" :items-per-page="6" :default-page="1" class="mt-2">
        <template #prev="{ onClick }">
          <PaginationPrev @click="onClick" />
        </template>
        <template #next="{ onClick }">
          <PaginationNext @click="onClick" />
        </template>
        <template #first="{ onClick }">
          <PaginationFirst @click="onClick" />
        </template>
        <template #last="{ onClick }">
          <PaginationLast @click="onClick" />
        </template>
        <template #ellipsis>
          <PaginationEllipsis />
        </template>
      </Pagination>
    </div>
  </div>
</template>
<script setup lang="ts">
import { 
  Pagination, 
  PaginationEllipsis, 
  PaginationFirst, 
  PaginationLast, 
  PaginationNext, 
  PaginationPrev 
} from '@/components/ui/pagination'

definePageMeta({
  layout: 'admin'
})
</script>