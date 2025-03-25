<template>
  <div class="container mx-auto py-8 px-4">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Attendance</h1>
      <p class="text-muted-foreground">Track and manage student attendance for all your classes</p>
    </div>

    <div class="grid md:grid-cols-12 gap-8">
      <!-- Main Content -->
      <div class="md:col-span-12">
        <div class="flex flex-col md:flex-row justify-between gap-4 items-center mb-6">
          <div class="flex items-center space-x-4 w-full md:w-auto">
            <select class="pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
              <option>Math 101 - Class 10A</option>
              <option>Math 101 - Class 10B</option>
              <option>Math 202 - Class 11A</option>
              <option>Math 202 - Class 11B</option>
              <option>Math 303 - Class 12A</option>
            </select>
            
            <div class="relative">
              <input 
                type="date" 
                value="2025-03-25"
                class="pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none" 
              />
            </div>
          </div>
          
          <div class="flex space-x-2 w-full md:w-auto justify-end">
            <Button variant="outline">
              <Icon name="lucide:calendar" class="mr-2 h-4 w-4" />
              Month View
            </Button>
            <Button variant="outline">
              <Icon name="lucide:download" class="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button>
              <Icon name="lucide:save" class="mr-2 h-4 w-4" />
              Save
            </Button>
          </div>
        </div>
        
        <Card class="shadow-sm mb-6">
          <CardHeader>
            <div class="flex justify-between items-center">
              <CardTitle>Today's Attendance (March 25, 2025)</CardTitle>
              <div class="text-sm text-muted-foreground">Class 10A | 28 Students</div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <Card>
                <CardContent class="p-4 flex flex-col items-center justify-center">
                  <div class="flex items-center justify-center h-10 w-10 rounded-full bg-success/20 text-success mb-2">
                    <Icon name="lucide:check" class="h-5 w-5" />
                  </div>
                  <div class="text-2xl font-bold mb-1">24</div>
                  <p class="text-sm text-muted-foreground">Present</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent class="p-4 flex flex-col items-center justify-center">
                  <div class="flex items-center justify-center h-10 w-10 rounded-full bg-warning/20 text-warning mb-2">
                    <Icon name="lucide:clock" class="h-5 w-5" />
                  </div>
                  <div class="text-2xl font-bold mb-1">2</div>
                  <p class="text-sm text-muted-foreground">Late</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent class="p-4 flex flex-col items-center justify-center">
                  <div class="flex items-center justify-center h-10 w-10 rounded-full bg-destructive/20 text-destructive mb-2">
                    <Icon name="lucide:x" class="h-5 w-5" />
                  </div>
                  <div class="text-2xl font-bold mb-1">1</div>
                  <p class="text-sm text-muted-foreground">Absent</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent class="p-4 flex flex-col items-center justify-center">
                  <div class="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500/20 text-blue-500 mb-2">
                    <Icon name="lucide:file-text" class="h-5 w-5" />
                  </div>
                  <div class="text-2xl font-bold mb-1">1</div>
                  <p class="text-sm text-muted-foreground">Excused</p>
                </CardContent>
              </Card>
            </div>
            
            <div class="bg-muted/30 p-4 rounded-lg mb-6 flex items-center">
              <Icon name="lucide:info" class="h-5 w-5 text-primary mr-2" />
              <div class="text-sm">
                You have <span class="font-medium">3 students</span> with attendance concerns this month. 
                <Button variant="link" class="p-0 h-auto text-sm">View attendance report</Button>
              </div>
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="py-3 px-4 text-left font-medium">Student</th>
                    <th class="py-3 px-4 text-center font-medium w-24">Status</th>
                    <th class="py-3 px-4 text-left font-medium">Notes</th>
                    <th class="py-3 px-4 text-center font-medium w-24">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b hover:bg-muted/50">
                    <td class="py-3 px-4">
                      <div class="flex items-center space-x-2">
                        <Avatar class="h-7 w-7">
                          <AvatarImage src="https://i.pravatar.cc/150?img=33" />
                          <AvatarFallback>EB</AvatarFallback>
                        </Avatar>
                        <span>Emily Brown</span>
                      </div>
                    </td>
                    <td class="py-3 px-4">
                      <select class="w-full text-sm p-1 border rounded-md bg-success/10 text-success">
                        <option>Present</option>
                        <option>Late</option>
                        <option>Absent</option>
                        <option>Excused</option>
                      </select>
                    </td>
                    <td class="py-3 px-4">
                      <input type="text" class="w-full text-sm p-1 border rounded-md" placeholder="Add notes...">
                    </td>
                    <td class="py-3 px-4 text-center">
                      <Button variant="ghost" size="icon" class="h-8 w-8">
                        <Icon name="lucide:more-horizontal" class="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr class="border-b hover:bg-muted/50">
                    <td class="py-3 px-4">
                      <div class="flex items-center space-x-2">
                        <Avatar class="h-7 w-7">
                          <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                          <AvatarFallback>TW</AvatarFallback>
                        </Avatar>
                        <span>Thomas Wilson</span>
                      </div>
                    </td>
                    <td class="py-3 px-4">
                      <select class="w-full text-sm p-1 border rounded-md bg-warning/10 text-warning">
                        <option>Late</option>
                        <option>Present</option>
                        <option>Absent</option>
                        <option>Excused</option>
                      </select>
                    </td>
                    <td class="py-3 px-4">
                      <input type="text" class="w-full text-sm p-1 border rounded-md" value="Bus delay - 15 minutes late" />
                    </td>
                    <td class="py-3 px-4 text-center">
                      <Button variant="ghost" size="icon" class="h-8 w-8">
                        <Icon name="lucide:more-horizontal" class="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr class="border-b hover:bg-muted/50">
                    <td class="py-3 px-4">
                      <div class="flex items-center space-x-2">
                        <Avatar class="h-7 w-7">
                          <AvatarImage src="https://i.pravatar.cc/150?img=27" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <span>Jessica Davis</span>
                      </div>
                    </td>
                    <td class="py-3 px-4">
                      <select class="w-full text-sm p-1 border rounded-md bg-success/10 text-success">
                        <option>Present</option>
                        <option>Late</option>
                        <option>Absent</option>
                        <option>Excused</option>
                      </select>
                    </td>
                    <td class="py-3 px-4">
                      <input type="text" class="w-full text-sm p-1 border rounded-md" placeholder="Add notes..." />
                    </td>
                    <td class="py-3 px-4 text-center">
                      <Button variant="ghost" size="icon" class="h-8 w-8">
                        <Icon name="lucide:more-horizontal" class="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr class="border-b hover:bg-muted/50">
                    <td class="py-3 px-4">
                      <div class="flex items-center space-x-2">
                        <Avatar class="h-7 w-7">
                          <AvatarImage src="https://i.pravatar.cc/150?img=5" />
                          <AvatarFallback>RM</AvatarFallback>
                        </Avatar>
                        <span>Ryan Miller</span>
                      </div>
                    </td>
                    <td class="py-3 px-4">
                      <select class="w-full text-sm p-1 border rounded-md bg-success/10 text-success">
                        <option>Present</option>
                        <option>Late</option>
                        <option>Absent</option>
                        <option>Excused</option>
                      </select>
                    </td>
                    <td class="py-3 px-4">
                      <input type="text" class="w-full text-sm p-1 border rounded-md" placeholder="Add notes..." />
                    </td>
                    <td class="py-3 px-4 text-center">
                      <Button variant="ghost" size="icon" class="h-8 w-8">
                        <Icon name="lucide:more-horizontal" class="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr class="border-b hover:bg-muted/50">
                    <td class="py-3 px-4">
                      <div class="flex items-center space-x-2">
                        <Avatar class="h-7 w-7">
                          <AvatarImage src="https://i.pravatar.cc/150?img=17" />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <span>Sofia Johnson</span>
                      </div>
                    </td>
                    <td class="py-3 px-4">
                      <select class="w-full text-sm p-1 border rounded-md bg-destructive/10 text-destructive">
                        <option>Absent</option>
                        <option>Present</option>
                        <option>Late</option>
                        <option>Excused</option>
                      </select>
                    </td>
                    <td class="py-3 px-4">
                      <input type="text" class="w-full text-sm p-1 border rounded-md" placeholder="Add notes..." />
                    </td>
                    <td class="py-3 px-4 text-center">
                      <Button variant="ghost" size="icon" class="h-8 w-8">
                        <Icon name="lucide:more-horizontal" class="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="flex justify-between items-center mt-4">
              <div class="text-sm text-muted-foreground">
                Showing 5 of 28 students
              </div>
              <div class="flex space-x-2">
                <Button variant="outline" size="sm" disabled>
                  <Icon name="lucide:chevron-left" class="h-4 w-4 mr-1" />
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                  <Icon name="lucide:chevron-right" class="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm">
          <CardHeader>
            <div class="flex justify-between items-center">
              <CardTitle>Attendance History</CardTitle>
              <div class="text-sm font-medium">March 2025</div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="overflow-x-auto">
              <div class="min-w-[800px]">
                <div class="grid grid-cols-31 mb-2">
                  <div class="text-center font-medium">Student</div>
                  <div v-for="day in 31" :key="day" class="text-center text-xs">{{ day }}</div>
                </div>
                
                <div class="border-t">
                  <div class="grid grid-cols-31 py-3 border-b hover:bg-muted/50">
                    <div class="flex items-center space-x-2">
                      <Avatar class="h-7 w-7">
                        <AvatarImage src="https://i.pravatar.cc/150?img=33" />
                        <AvatarFallback>EB</AvatarFallback>
                      </Avatar>
                      <span class="text-sm">Emily B.</span>
                    </div>
                    <div v-for="day in 31" :key="day" class="flex items-center justify-center">
                      <div v-if="day <= 25" class="h-4 w-4 rounded-full" :class="{
                        'bg-success': day !== 12,
                        'bg-warning': day === 12
                      }" />
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-31 py-3 border-b hover:bg-muted/50">
                    <div class="flex items-center space-x-2">
                      <Avatar class="h-7 w-7">
                        <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                        <AvatarFallback>TW</AvatarFallback>
                      </Avatar>
                      <span class="text-sm">Thomas W.</span>
                    </div>
                    <div v-for="day in 31" :key="day" class="flex items-center justify-center">
                      <div v-if="day <= 25" class="h-4 w-4 rounded-full" :class="{
                        'bg-success': day !== 8 && day !== 15 && day !== 22 && day !== 25,
                        'bg-warning': day === 15 || day === 25,
                        'bg-destructive': day === 8 || day === 22
                      }" />
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-31 py-3 border-b hover:bg-muted/50">
                    <div class="flex items-center space-x-2">
                      <Avatar class="h-7 w-7">
                        <AvatarImage src="https://i.pravatar.cc/150?img=27" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <span class="text-sm">Jessica D.</span>
                    </div>
                    <div v-for="day in 31" :key="day" class="flex items-center justify-center">
                      <div v-if="day <= 25" class="h-4 w-4 rounded-full" :class="{
                        'bg-success': day !== 10,
                        'bg-blue-500': day === 10
                      }" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="flex space-x-6 items-center mt-6">
              <div class="flex items-center space-x-2">
                <div class="h-3 w-3 rounded-full bg-success mr-2" />
                <span class="text-sm">Present</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-3 w-3 rounded-full bg-warning mr-2" />
                <span class="text-sm">Late</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-3 w-3 rounded-full bg-destructive mr-2" />
                <span class="text-sm">Absent</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="h-3 w-3 rounded-full bg-blue-500 mr-2" />
                <span class="text-sm">Excused</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
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

<style scoped>
.grid-cols-31 {
  display: grid;
  grid-template-columns: 120px repeat(31, minmax(20px, 1fr));
  gap: 2px;
}
</style>
