<template>
  <div>
    <h1 class="text-3xl font-bold mb-2">Class Management</h1>
    <p class="text-muted-foreground mb-6">Manage class sections, schedules, and enrollments</p>
    
    <!-- Class Management Controls -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div class="flex items-center gap-2">
        <div class="relative">
          <Icon name="lucide:search" class="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Search classes..." class="pl-9 pr-4 py-2 rounded-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none w-full sm:w-[300px]" />
        </div>
        <div class="relative">
          <select class="pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
            <option>All Grades</option>
            <option>Grade 9</option>
            <option>Grade 10</option>
            <option>Grade 11</option>
            <option>Grade 12</option>
          </select>
          <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
      <Button>
        <Icon name="lucide:plus" class="h-4 w-4 mr-2" />
        Create New Class
      </Button>
    </div>
    
    <!-- Classes Table -->
    <Card class="shadow-sm mb-8">
      <CardContent class="p-0">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b">
                <th class="text-left p-4 font-medium text-sm">Class</th>
                <th class="text-left p-4 font-medium text-sm">Teacher</th>
                <th class="text-left p-4 font-medium text-sm">Room</th>
                <th class="text-left p-4 font-medium text-sm">Schedule</th>
                <th class="text-left p-4 font-medium text-sm">Students</th>
                <th class="text-right p-4 font-medium text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              <!-- Class Row -->
              <tr class="border-b hover:bg-accent/5">
                <td class="p-4">
                  <div class="flex items-center gap-3">
                    <div class="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon name="lucide:calculator" class="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p class="font-medium">Math 101 - Section A</p>
                      <p class="text-xs text-muted-foreground">Grade 9</p>
                    </div>
                  </div>
                </td>
                <td class="p-4 text-sm">Ms. Sarah Wilson</td>
                <td class="p-4 text-sm">Room 205</td>
                <td class="p-4 text-sm">MWF 9:00 AM - 10:30 AM</td>
                <td class="p-4 text-sm">28/30</td>
                <td class="p-4 text-right">
                  <div class="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:users" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:pencil" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:trash-2" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-accent/5">
                <td class="p-4">
                  <div class="flex items-center gap-3">
                    <div class="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon name="lucide:calculator" class="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p class="font-medium">Math 101 - Section B</p>
                      <p class="text-xs text-muted-foreground">Grade 9</p>
                    </div>
                  </div>
                </td>
                <td class="p-4 text-sm">Ms. Sarah Wilson</td>
                <td class="p-4 text-sm">Room 205</td>
                <td class="p-4 text-sm">TTh 9:00 AM - 10:30 AM</td>
                <td class="p-4 text-sm">25/30</td>
                <td class="p-4 text-right">
                  <div class="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:users" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:pencil" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:trash-2" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-accent/5">
                <td class="p-4">
                  <div class="flex items-center gap-3">
                    <div class="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon name="lucide:flask-conical" class="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p class="font-medium">Biology 101 - Section A</p>
                      <p class="text-xs text-muted-foreground">Grade 9</p>
                    </div>
                  </div>
                </td>
                <td class="p-4 text-sm">Mr. John Davis</td>
                <td class="p-4 text-sm">Science Lab 1</td>
                <td class="p-4 text-sm">MWF 11:00 AM - 12:30 PM</td>
                <td class="p-4 text-sm">26/28</td>
                <td class="p-4 text-right">
                  <div class="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:users" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:pencil" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:trash-2" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-accent/5">
                <td class="p-4">
                  <div class="flex items-center gap-3">
                    <div class="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon name="lucide:book" class="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p class="font-medium">English 101 - Section A</p>
                      <p class="text-xs text-muted-foreground">Grade 9</p>
                    </div>
                  </div>
                </td>
                <td class="p-4 text-sm">Mrs. Emily Brown</td>
                <td class="p-4 text-sm">Room 105</td>
                <td class="p-4 text-sm">MWF 1:00 PM - 2:30 PM</td>
                <td class="p-4 text-sm">27/30</td>
                <td class="p-4 text-right">
                  <div class="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:users" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:pencil" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:trash-2" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-accent/5">
                <td class="p-4">
                  <div class="flex items-center gap-3">
                    <div class="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon name="lucide:globe" class="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p class="font-medium">History 101 - Section A</p>
                      <p class="text-xs text-muted-foreground">Grade 9</p>
                    </div>
                  </div>
                </td>
                <td class="p-4 text-sm">Mr. Robert Johnson</td>
                <td class="p-4 text-sm">Room 301</td>
                <td class="p-4 text-sm">TTh 1:00 PM - 2:30 PM</td>
                <td class="p-4 text-sm">24/30</td>
                <td class="p-4 text-right">
                  <div class="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:users" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:pencil" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:trash-2" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
    
    <!-- Add New Class Form -->
    <Card class="shadow-sm">
      <CardHeader>
        <CardTitle>Quick Class Creation</CardTitle>
        <CardDescription>Create a new class section with basic information</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1">Course</label>
            <div class="relative">
              <select class="w-full pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
                <option>Select Course</option>
                <option>Math 101</option>
                <option>English 101</option>
                <option>Science 101</option>
                <option>History 101</option>
              </select>
              <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Section</label>
            <input type="text" placeholder="Section name (e.g., 'A', 'B')" class="w-full px-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none" />
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Teacher</label>
            <div class="relative">
              <select class="w-full pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
                <option>Select Teacher</option>
                <option>Ms. Sarah Wilson</option>
                <option>Mr. John Davis</option>
                <option>Mrs. Emily Brown</option>
                <option>Mr. Robert Johnson</option>
              </select>
              <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Room</label>
            <div class="relative">
              <select class="w-full pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
                <option>Select Room</option>
                <option>Room 101</option>
                <option>Room 102</option>
                <option>Room 205</option>
                <option>Science Lab 1</option>
                <option>Room 301</option>
              </select>
              <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Days</label>
            <div class="flex gap-2">
              <label class="flex items-center">
                <input type="checkbox" class="mr-1" />
                <span class="text-sm">M</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="mr-1" />
                <span class="text-sm">T</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="mr-1" />
                <span class="text-sm">W</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="mr-1" />
                <span class="text-sm">Th</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="mr-1" />
                <span class="text-sm">F</span>
              </label>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Time</label>
            <div class="flex gap-2">
              <div class="relative flex-1">
                <select class="w-full pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
                  <option>Start Time</option>
                  <option>8:00 AM</option>
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                </select>
                <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <div class="relative flex-1">
                <select class="w-full pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
                  <option>End Time</option>
                  <option>9:30 AM</option>
                  <option>10:30 AM</option>
                  <option>11:30 AM</option>
                  <option>12:30 PM</option>
                  <option>1:30 PM</option>
                  <option>2:30 PM</option>
                  <option>3:30 PM</option>
                </select>
                <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Maximum Students</label>
            <input type="number" placeholder="30" class="w-full px-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none" />
          </div>
        </div>
      </CardContent>
      <CardFooter class="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Create Class</Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})
</script>