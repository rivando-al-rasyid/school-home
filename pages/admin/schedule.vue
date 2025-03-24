<template>
  <div>
    <h1 class="text-3xl font-bold mb-2">School Schedule</h1>
    <p class="text-muted-foreground mb-6">Manage class schedules, periods, and academic calendar</p>
    
    <!-- Schedule Controls -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div class="flex items-center gap-2">
        <div class="relative">
          <select class="pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
            <option>Spring 2025</option>
            <option>Fall 2025</option>
            <option>Winter 2026</option>
          </select>
          <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
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
      <div class="flex gap-2">
        <Button variant="outline">
          <Icon name="lucide:calendar-plus" class="h-4 w-4 mr-2" />
          Add Event
        </Button>
        <Button>
          <Icon name="lucide:save" class="h-4 w-4 mr-2" />
          Publish Schedule
        </Button>
      </div>
    </div>
    
    <!-- Calendar View Tabs -->
    <div class="flex border-b mb-6">
      <button class="px-4 py-2 font-medium text-sm border-b-2 border-primary text-primary">Weekly View</button>
      <button class="px-4 py-2 font-medium text-sm border-b-2 border-transparent hover:text-primary/80">Monthly View</button>
      <button class="px-4 py-2 font-medium text-sm border-b-2 border-transparent hover:text-primary/80">Academic Calendar</button>
      <button class="px-4 py-2 font-medium text-sm border-b-2 border-transparent hover:text-primary/80">Exam Schedule</button>
    </div>
    
    <!-- Weekly Schedule -->
    <Card class="shadow-sm mb-8">
      <CardContent class="p-0">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b bg-muted/20">
                <th class="p-4 text-left font-medium text-sm w-[100px]">Time</th>
                <th class="p-4 text-left font-medium text-sm">Monday</th>
                <th class="p-4 text-left font-medium text-sm">Tuesday</th>
                <th class="p-4 text-left font-medium text-sm">Wednesday</th>
                <th class="p-4 text-left font-medium text-sm">Thursday</th>
                <th class="p-4 text-left font-medium text-sm">Friday</th>
              </tr>
            </thead>
            <tbody>
              <!-- Schedule Row -->
              <tr class="border-b hover:bg-accent/5">
                <td class="p-4 text-sm font-medium">8:00 - 9:30</td>
                <td class="p-2">
                  <div class="bg-blue-100 p-2 rounded border border-blue-200 text-xs">
                    <div class="font-medium">Math 101 - A</div>
                    <div class="text-muted-foreground">Room 205</div>
                    <div class="text-muted-foreground">Ms. Wilson</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-green-100 p-2 rounded border border-green-200 text-xs">
                    <div class="font-medium">English 101 - A</div>
                    <div class="text-muted-foreground">Room 105</div>
                    <div class="text-muted-foreground">Mrs. Brown</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-blue-100 p-2 rounded border border-blue-200 text-xs">
                    <div class="font-medium">Math 101 - A</div>
                    <div class="text-muted-foreground">Room 205</div>
                    <div class="text-muted-foreground">Ms. Wilson</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-green-100 p-2 rounded border border-green-200 text-xs">
                    <div class="font-medium">English 101 - A</div>
                    <div class="text-muted-foreground">Room 105</div>
                    <div class="text-muted-foreground">Mrs. Brown</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-blue-100 p-2 rounded border border-blue-200 text-xs">
                    <div class="font-medium">Math 101 - A</div>
                    <div class="text-muted-foreground">Room 205</div>
                    <div class="text-muted-foreground">Ms. Wilson</div>
                  </div>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-accent/5">
                <td class="p-4 text-sm font-medium">9:45 - 11:15</td>
                <td class="p-2">
                  <div class="bg-purple-100 p-2 rounded border border-purple-200 text-xs">
                    <div class="font-medium">History 101 - A</div>
                    <div class="text-muted-foreground">Room 301</div>
                    <div class="text-muted-foreground">Mr. Johnson</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-yellow-100 p-2 rounded border border-yellow-200 text-xs">
                    <div class="font-medium">Spanish 101 - A</div>
                    <div class="text-muted-foreground">Room 203</div>
                    <div class="text-muted-foreground">Ms. Rodriguez</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-purple-100 p-2 rounded border border-purple-200 text-xs">
                    <div class="font-medium">History 101 - A</div>
                    <div class="text-muted-foreground">Room 301</div>
                    <div class="text-muted-foreground">Mr. Johnson</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-yellow-100 p-2 rounded border border-yellow-200 text-xs">
                    <div class="font-medium">Spanish 101 - A</div>
                    <div class="text-muted-foreground">Room 203</div>
                    <div class="text-muted-foreground">Ms. Rodriguez</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-purple-100 p-2 rounded border border-purple-200 text-xs">
                    <div class="font-medium">History 101 - A</div>
                    <div class="text-muted-foreground">Room 301</div>
                    <div class="text-muted-foreground">Mr. Johnson</div>
                  </div>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-accent/5">
                <td class="p-4 text-sm font-medium">11:15 - 12:00</td>
                <td class="p-2 text-center text-sm text-muted-foreground" colspan="5">
                  Lunch Break
                </td>
              </tr>
              
              <tr class="border-b hover:bg-accent/5">
                <td class="p-4 text-sm font-medium">12:00 - 1:30</td>
                <td class="p-2">
                  <div class="bg-red-100 p-2 rounded border border-red-200 text-xs">
                    <div class="font-medium">Biology 101 - A</div>
                    <div class="text-muted-foreground">Science Lab 1</div>
                    <div class="text-muted-foreground">Mr. Davis</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-indigo-100 p-2 rounded border border-indigo-200 text-xs">
                    <div class="font-medium">Art 101 - A</div>
                    <div class="text-muted-foreground">Art Studio</div>
                    <div class="text-muted-foreground">Ms. Chen</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-red-100 p-2 rounded border border-red-200 text-xs">
                    <div class="font-medium">Biology 101 - A</div>
                    <div class="text-muted-foreground">Science Lab 1</div>
                    <div class="text-muted-foreground">Mr. Davis</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-indigo-100 p-2 rounded border border-indigo-200 text-xs">
                    <div class="font-medium">Art 101 - A</div>
                    <div class="text-muted-foreground">Art Studio</div>
                    <div class="text-muted-foreground">Ms. Chen</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-red-100 p-2 rounded border border-red-200 text-xs">
                    <div class="font-medium">Biology 101 - A</div>
                    <div class="text-muted-foreground">Science Lab 1</div>
                    <div class="text-muted-foreground">Mr. Davis</div>
                  </div>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-accent/5">
                <td class="p-4 text-sm font-medium">1:45 - 3:15</td>
                <td class="p-2">
                  <div class="bg-orange-100 p-2 rounded border border-orange-200 text-xs">
                    <div class="font-medium">Physical Ed - A</div>
                    <div class="text-muted-foreground">Gymnasium</div>
                    <div class="text-muted-foreground">Mr. Taylor</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-teal-100 p-2 rounded border border-teal-200 text-xs">
                    <div class="font-medium">Computer Science - A</div>
                    <div class="text-muted-foreground">Computer Lab</div>
                    <div class="text-muted-foreground">Mr. Park</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-orange-100 p-2 rounded border border-orange-200 text-xs">
                    <div class="font-medium">Physical Ed - A</div>
                    <div class="text-muted-foreground">Gymnasium</div>
                    <div class="text-muted-foreground">Mr. Taylor</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-teal-100 p-2 rounded border border-teal-200 text-xs">
                    <div class="font-medium">Computer Science - A</div>
                    <div class="text-muted-foreground">Computer Lab</div>
                    <div class="text-muted-foreground">Mr. Park</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-orange-100 p-2 rounded border border-orange-200 text-xs">
                    <div class="font-medium">Physical Ed - A</div>
                    <div class="text-muted-foreground">Gymnasium</div>
                    <div class="text-muted-foreground">Mr. Taylor</div>
                  </div>
                </td>
              </tr>
              
              <tr class="hover:bg-accent/5">
                <td class="p-4 text-sm font-medium">3:30 - 5:00</td>
                <td class="p-2">
                  <div class="bg-slate-100 p-2 rounded border border-slate-200 text-xs">
                    <div class="font-medium">Study Hall</div>
                    <div class="text-muted-foreground">Library</div>
                    <div class="text-muted-foreground">Various Staff</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-pink-100 p-2 rounded border border-pink-200 text-xs">
                    <div class="font-medium">Music - A</div>
                    <div class="text-muted-foreground">Music Room</div>
                    <div class="text-muted-foreground">Ms. Adams</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-slate-100 p-2 rounded border border-slate-200 text-xs">
                    <div class="font-medium">Study Hall</div>
                    <div class="text-muted-foreground">Library</div>
                    <div class="text-muted-foreground">Various Staff</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-pink-100 p-2 rounded border border-pink-200 text-xs">
                    <div class="font-medium">Music - A</div>
                    <div class="text-muted-foreground">Music Room</div>
                    <div class="text-muted-foreground">Ms. Adams</div>
                  </div>
                </td>
                <td class="p-2">
                  <div class="bg-slate-100 p-2 rounded border border-slate-200 text-xs">
                    <div class="font-medium">Study Hall</div>
                    <div class="text-muted-foreground">Library</div>
                    <div class="text-muted-foreground">Various Staff</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
    
    <!-- Important Dates -->
    <Card class="shadow-sm mb-8">
      <CardHeader>
        <CardTitle>Important Dates</CardTitle>
        <CardDescription>Key academic events and holidays for Spring 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-3">
          <div class="flex items-center justify-between border-b pb-3">
            <div class="flex items-center gap-3">
              <div class="h-10 w-10 rounded-md bg-blue-100 flex items-center justify-center">
                <Icon name="lucide:calendar" class="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 class="font-medium">First Day of Classes</h3>
                <p class="text-sm text-muted-foreground">January 15, 2025</p>
              </div>
            </div>
            <Badge>Upcoming</Badge>
          </div>
          
          <div class="flex items-center justify-between border-b pb-3">
            <div class="flex items-center gap-3">
              <div class="h-10 w-10 rounded-md bg-purple-100 flex items-center justify-center">
                <Icon name="lucide:calendar" class="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 class="font-medium">Parent-Teacher Conferences</h3>
                <p class="text-sm text-muted-foreground">March 28, 2025</p>
              </div>
            </div>
            <Badge>Upcoming</Badge>
          </div>
          
          <div class="flex items-center justify-between border-b pb-3">
            <div class="flex items-center gap-3">
              <div class="h-10 w-10 rounded-md bg-green-100 flex items-center justify-center">
                <Icon name="lucide:calendar" class="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 class="font-medium">Science Fair</h3>
                <p class="text-sm text-muted-foreground">April 5, 2025</p>
              </div>
            </div>
            <Badge>Upcoming</Badge>
          </div>
          
          <div class="flex items-center justify-between border-b pb-3">
            <div class="flex items-center gap-3">
              <div class="h-10 w-10 rounded-md bg-orange-100 flex items-center justify-center">
                <Icon name="lucide:calendar" class="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 class="font-medium">Spring Break</h3>
                <p class="text-sm text-muted-foreground">April 10-18, 2025</p>
              </div>
            </div>
            <Badge>Upcoming</Badge>
          </div>
          
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="h-10 w-10 rounded-md bg-red-100 flex items-center justify-center">
                <Icon name="lucide:calendar" class="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h3 class="font-medium">Final Exams</h3>
                <p class="text-sm text-muted-foreground">May 15-20, 2025</p>
              </div>
            </div>
            <Badge>Upcoming</Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" class="w-full">
          <Icon name="lucide:calendar-plus" class="h-4 w-4 mr-2" />
          Add Important Date
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})
</script>