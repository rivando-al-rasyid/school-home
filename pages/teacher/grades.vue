<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <div class="flex items-center space-x-4">
        <select class="pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
          <option>Math 101 - Class 10A</option>
          <option>Math 101 - Class 10B</option>
          <option>Math 202 - Class 11A</option>
          <option>Math 202 - Class 11B</option>
          <option>Math 303 - Class 12A</option>
        </select>
        <select class="pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
          <option>Current Term (Q3 2024-2025)</option>
          <option>Q2 2024-2025</option>
          <option>Q1 2024-2025</option>
          <option>Q4 2023-2024</option>
        </select>
      </div>
      <div class="flex space-x-2">
        <Button variant="outline">
          <Icon name="lucide:download" class="mr-2 h-4 w-4" />
          Export
        </Button>
        <Button>
          <Icon name="lucide:plus" class="mr-2 h-4 w-4" />
          Add Assessment
        </Button>
      </div>
    </div>
    
    <Card class="shadow-sm mb-6">
      <CardHeader>
        <div class="flex justify-between items-center">
          <CardTitle>Class Performance Overview</CardTitle>
          <Badge variant="outline">Average: B+ (88%)</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent class="p-4 flex flex-col items-center justify-center">
              <div class="text-3xl font-bold mb-1 text-success">A</div>
              <p class="text-sm text-muted-foreground">7 Students (25%)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="p-4 flex flex-col items-center justify-center">
              <div class="text-3xl font-bold mb-1 text-success">B</div>
              <p class="text-sm text-muted-foreground">12 Students (42.8%)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="p-4 flex flex-col items-center justify-center">
              <div class="text-3xl font-bold mb-1 text-warning">C</div>
              <p class="text-sm text-muted-foreground">6 Students (21.4%)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="p-4 flex flex-col items-center justify-center">
              <div class="text-3xl font-bold mb-1 text-destructive">D-F</div>
              <p class="text-sm text-muted-foreground">3 Students (10.7%)</p>
            </CardContent>
          </Card>
        </div>
        
        <div class="h-64 w-full bg-muted/30 rounded-lg flex items-center justify-center">
          <div class="text-center">
            <Icon name="lucide:bar-chart-3" class="h-10 w-10 text-muted-foreground mx-auto mb-2" />
            <p class="text-muted-foreground">Grade Distribution Chart</p>
            <p class="text-xs text-muted-foreground">Showing average performance across all assessments</p>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <Card class="shadow-sm mb-6">
      <CardHeader>
        <div class="flex justify-between items-center">
          <CardTitle>Gradebook</CardTitle>
          <div class="relative">
            <input type="text" placeholder="Search students..." class="pl-8 pr-4 py-2 text-sm rounded-md border focus:ring-2 focus:ring-primary focus:border-primary">
            <Icon name="lucide:search" class="h-4 w-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b">
                <th class="py-3 px-4 text-left font-medium sticky left-0 bg-background">Student</th>
                <th class="py-3 px-4 text-center font-medium">HW #6<br/><span class="font-normal text-xs">10 pts</span></th>
                <th class="py-3 px-4 text-center font-medium">HW #7<br/><span class="font-normal text-xs">10 pts</span></th>
                <th class="py-3 px-4 text-center font-medium">Quiz #3<br/><span class="font-normal text-xs">20 pts</span></th>
                <th class="py-3 px-4 text-center font-medium">Quiz #4<br/><span class="font-normal text-xs">20 pts</span></th>
                <th class="py-3 px-4 text-center font-medium">Project<br/><span class="font-normal text-xs">50 pts</span></th>
                <th class="py-3 px-4 text-center font-medium">Midterm<br/><span class="font-normal text-xs">100 pts</span></th>
                <th class="py-3 px-4 text-center font-medium">Overall<br/><span class="font-normal text-xs">Grade</span></th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b hover:bg-muted/50">
                <td class="py-3 px-4 sticky left-0 bg-background">
                  <div class="flex items-center space-x-2">
                    <Avatar class="h-7 w-7">
                      <AvatarImage src="https://i.pravatar.cc/150?img=33" />
                      <AvatarFallback>EB</AvatarFallback>
                    </Avatar>
                    <span>Emily Brown</span>
                  </div>
                </td>
                <td class="py-3 px-4 text-center">10/10</td>
                <td class="py-3 px-4 text-center">9/10</td>
                <td class="py-3 px-4 text-center">18/20</td>
                <td class="py-3 px-4 text-center">20/20</td>
                <td class="py-3 px-4 text-center">47/50</td>
                <td class="py-3 px-4 text-center">92/100</td>
                <td class="py-3 px-4 text-center font-medium text-success">A (93%)</td>
              </tr>
              <tr class="border-b hover:bg-muted/50">
                <td class="py-3 px-4 sticky left-0 bg-background">
                  <div class="flex items-center space-x-2">
                    <Avatar class="h-7 w-7">
                      <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                      <AvatarFallback>TW</AvatarFallback>
                    </Avatar>
                    <span>Thomas Wilson</span>
                  </div>
                </td>
                <td class="py-3 px-4 text-center">8/10</td>
                <td class="py-3 px-4 text-center">9/10</td>
                <td class="py-3 px-4 text-center">16/20</td>
                <td class="py-3 px-4 text-center">17/20</td>
                <td class="py-3 px-4 text-center">45/50</td>
                <td class="py-3 px-4 text-center">85/100</td>
                <td class="py-3 px-4 text-center font-medium text-success">B (85%)</td>
              </tr>
              <tr class="border-b hover:bg-muted/50">
                <td class="py-3 px-4 sticky left-0 bg-background">
                  <div class="flex items-center space-x-2">
                    <Avatar class="h-7 w-7">
                      <AvatarImage src="https://i.pravatar.cc/150?img=32" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <span>Michael Johnson</span>
                  </div>
                </td>
                <td class="py-3 px-4 text-center">6/10</td>
                <td class="py-3 px-4 text-center">7/10</td>
                <td class="py-3 px-4 text-center">14/20</td>
                <td class="py-3 px-4 text-center">13/20</td>
                <td class="py-3 px-4 text-center">38/50</td>
                <td class="py-3 px-4 text-center">65/100</td>
                <td class="py-3 px-4 text-center font-medium text-warning">C (68%)</td>
              </tr>
              <tr class="border-b hover:bg-muted/50">
                <td class="py-3 px-4 sticky left-0 bg-background">
                  <div class="flex items-center space-x-2">
                    <Avatar class="h-7 w-7">
                      <AvatarImage src="https://i.pravatar.cc/150?img=20" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span>James Davis</span>
                  </div>
                </td>
                <td class="py-3 px-4 text-center">10/10</td>
                <td class="py-3 px-4 text-center">10/10</td>
                <td class="py-3 px-4 text-center">19/20</td>
                <td class="py-3 px-4 text-center">19/20</td>
                <td class="py-3 px-4 text-center">48/50</td>
                <td class="py-3 px-4 text-center">95/100</td>
                <td class="py-3 px-4 text-center font-medium text-success">A (95%)</td>
              </tr>
              <tr class="border-b hover:bg-muted/50">
                <td class="py-3 px-4 sticky left-0 bg-background">
                  <div class="flex items-center space-x-2">
                    <Avatar class="h-7 w-7">
                      <AvatarImage src="https://i.pravatar.cc/150?img=17" />
                      <AvatarFallback>SP</AvatarFallback>
                    </Avatar>
                    <span>Sophia Parker</span>
                  </div>
                </td>
                <td class="py-3 px-4 text-center">9/10</td>
                <td class="py-3 px-4 text-center">8/10</td>
                <td class="py-3 px-4 text-center">17/20</td>
                <td class="py-3 px-4 text-center">18/20</td>
                <td class="py-3 px-4 text-center">46/50</td>
                <td class="py-3 px-4 text-center">88/100</td>
                <td class="py-3 px-4 text-center font-medium text-success">B+ (88%)</td>
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
        <CardTitle>Assessment Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="grid sm:grid-cols-2 gap-8">
          <div>
            <h3 class="text-sm font-medium mb-4">Assessment Performance</h3>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between items-center mb-1">
                  <span class="text-sm">Homework #6</span>
                  <span class="text-sm font-medium">85%</span>
                </div>
                <div class="w-full bg-muted h-2 rounded-full">
                  <div class="bg-success h-2 rounded-full" style="width: 85%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between items-center mb-1">
                  <span class="text-sm">Homework #7</span>
                  <span class="text-sm font-medium">83%</span>
                </div>
                <div class="w-full bg-muted h-2 rounded-full">
                  <div class="bg-success h-2 rounded-full" style="width: 83%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between items-center mb-1">
                  <span class="text-sm">Quiz #3</span>
                  <span class="text-sm font-medium">78%</span>
                </div>
                <div class="w-full bg-muted h-2 rounded-full">
                  <div class="bg-primary h-2 rounded-full" style="width: 78%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between items-center mb-1">
                  <span class="text-sm">Quiz #4</span>
                  <span class="text-sm font-medium">81%</span>
                </div>
                <div class="w-full bg-muted h-2 rounded-full">
                  <div class="bg-primary h-2 rounded-full" style="width: 81%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between items-center mb-1">
                  <span class="text-sm">Project</span>
                  <span class="text-sm font-medium">89%</span>
                </div>
                <div class="w-full bg-muted h-2 rounded-full">
                  <div class="bg-success h-2 rounded-full" style="width: 89%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between items-center mb-1">
                  <span class="text-sm">Midterm Exam</span>
                  <span class="text-sm font-medium">79%</span>
                </div>
                <div class="w-full bg-muted h-2 rounded-full">
                  <div class="bg-primary h-2 rounded-full" style="width: 79%"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-sm font-medium mb-4">Students Requiring Attention</h3>
            <div class="space-y-3">
              <div class="flex items-center justify-between bg-muted/30 p-3 rounded-lg">
                <div class="flex items-center space-x-2">
                  <Avatar class="h-7 w-7">
                    <AvatarImage src="https://i.pravatar.cc/150?img=45" />
                    <AvatarFallback>AW</AvatarFallback>
                  </Avatar>
                  <div>
                    <div class="font-medium">Alex Williams</div>
                    <div class="text-xs text-muted-foreground">Overall Grade: D (62%)</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">Contact</Button>
              </div>
              
              <div class="flex items-center justify-between bg-muted/30 p-3 rounded-lg">
                <div class="flex items-center space-x-2">
                  <Avatar class="h-7 w-7">
                    <AvatarImage src="https://i.pravatar.cc/150?img=48" />
                    <AvatarFallback>LM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div class="font-medium">Lucas Martinez</div>
                    <div class="text-xs text-muted-foreground">Overall Grade: D+ (65%)</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">Contact</Button>
              </div>
              
              <div class="flex items-center justify-between bg-muted/30 p-3 rounded-lg">
                <div class="flex items-center space-x-2">
                  <Avatar class="h-7 w-7">
                    <AvatarImage src="https://i.pravatar.cc/150?img=29" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <div class="font-medium">Michael Johnson</div>
                    <div class="text-xs text-muted-foreground">Overall Grade: C (68%)</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">Contact</Button>
              </div>
              
              <div class="bg-blue-500/10 p-3 rounded-lg mt-4">
                <div class="flex items-center text-sm">
                  <Icon name="lucide:lightbulb" class="h-4 w-4 mr-2 text-blue-500" />
                  <span>Schedule a group review session for struggling students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

definePageMeta({
  layout: 'teacher'
});
</script>
