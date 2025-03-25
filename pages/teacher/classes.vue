<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Classes</h1>
      <p class="text-muted-foreground">Manage your class rosters, schedules, and student information</p>
    </div>
    
    <Card class="shadow-sm mb-6">
      <CardHeader>
        <div class="flex justify-between items-center">
          <CardTitle>All Classes</CardTitle>
          <Button size="sm">
            <Icon name="lucide:plus" class="h-4 w-4 mr-1" />
            Add Class
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b">
                <th class="py-3 px-4 text-left font-medium">Class Name</th>
                <th class="py-3 px-4 text-left font-medium">Period</th>
                <th class="py-3 px-4 text-left font-medium">Room</th>
                <th class="py-3 px-4 text-left font-medium">Students</th>
                <th class="py-3 px-4 text-left font-medium">Average Grade</th>
                <th class="py-3 px-4 text-left font-medium" />
              </tr>
            </thead>
            <tbody>
              <tr class="border-b hover:bg-muted/50">
                <td class="py-3 px-4">Math 101 - Class 10A</td>
                <td class="py-3 px-4">1st (8:00 - 9:30 AM)</td>
                <td class="py-3 px-4">Room 205</td>
                <td class="py-3 px-4">28</td>
                <td class="py-3 px-4">
                  <Badge variant="success">A-</Badge>
                </td>
                <td class="py-3 px-4">
                  <div class="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:users" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:file-text" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:more-vertical" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-muted/50">
                <td class="py-3 px-4">Math 101 - Class 10B</td>
                <td class="py-3 px-4">2nd (10:00 - 11:30 AM)</td>
                <td class="py-3 px-4">Room 205</td>
                <td class="py-3 px-4">26</td>
                <td class="py-3 px-4">
                  <Badge variant="warning">B</Badge>
                </td>
                <td class="py-3 px-4">
                  <div class="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:users" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:file-text" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:more-vertical" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-muted/50">
                <td class="py-3 px-4">Math 202 - Class 11A</td>
                <td class="py-3 px-4">3rd (12:30 - 2:00 PM)</td>
                <td class="py-3 px-4">Room 302</td>
                <td class="py-3 px-4">24</td>
                <td class="py-3 px-4">
                  <Badge variant="success">A</Badge>
                </td>
                <td class="py-3 px-4">
                  <div class="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:users" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:file-text" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:more-vertical" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-muted/50">
                <td class="py-3 px-4">Math 202 - Class 11B</td>
                <td class="py-3 px-4">4th (2:15 - 3:45 PM)</td>
                <td class="py-3 px-4">Room 302</td>
                <td class="py-3 px-4">22</td>
                <td class="py-3 px-4">
                  <Badge variant="warning">B+</Badge>
                </td>
                <td class="py-3 px-4">
                  <div class="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:users" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:file-text" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:more-vertical" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-muted/50">
                <td class="py-3 px-4">Math 303 - Class 12A</td>
                <td class="py-3 px-4">5th (3:15 - 4:45 PM)</td>
                <td class="py-3 px-4">Room 302</td>
                <td class="py-3 px-4">25</td>
                <td class="py-3 px-4">
                  <Badge variant="warning">B-</Badge>
                </td>
                <td class="py-3 px-4">
                  <div class="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:users" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:file-text" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:more-vertical" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
    
    <Card class="shadow-sm">
      <CardHeader>
        <CardTitle>Featured Class: Math 202 - Class 11A</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-muted/30 p-4 rounded-lg">
            <div class="text-sm font-medium mb-2">Class Details</div>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-muted-foreground">Period:</span>
                <span>3rd (12:30 - 2:00 PM)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">Room:</span>
                <span>302</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">Students:</span>
                <span>24</span>
              </div>
            </div>
          </div>
          
          <div class="bg-muted/30 p-4 rounded-lg">
            <div class="text-sm font-medium mb-2">Performance</div>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-muted-foreground">Average Grade:</span>
                <Badge variant="success">A</Badge>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">Attendance:</span>
                <span>98%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">Assignment Completion:</span>
                <span>95%</span>
              </div>
            </div>
          </div>
          
          <div class="bg-muted/30 p-4 rounded-lg">
            <div class="text-sm font-medium mb-2">Upcoming</div>
            <div class="space-y-2 text-sm">
              <div>
                <div class="font-medium">Quiz #5</div>
                <div class="text-muted-foreground">Tomorrow</div>
              </div>
              <div>
                <div class="font-medium">Project Submission</div>
                <div class="text-muted-foreground">Friday</div>
              </div>
              <div>
                <div class="font-medium">Parent-Teacher Meeting</div>
                <div class="text-muted-foreground">Next Tuesday</div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-medium">Students</h3>
            <div class="relative">
              <input type="text" placeholder="Search students..." class="pl-8 pr-4 py-2 text-sm rounded-md border focus:ring-2 focus:ring-primary focus:border-primary">
              <Icon name="lucide:search" class="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
            </div>
          </div>
          
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b">
                  <th class="py-3 px-4 text-left font-medium">Student Name</th>
                  <th class="py-3 px-4 text-left font-medium">ID</th>
                  <th class="py-3 px-4 text-left font-medium">Current Grade</th>
                  <th class="py-3 px-4 text-left font-medium">Attendance</th>
                  <th class="py-3 px-4 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b hover:bg-muted/50">
                  <td class="py-3 px-4">
                    <div class="flex items-center space-x-2">
                      <Avatar class="h-7 w-7">
                        <AvatarImage src="https://i.pravatar.cc/150?img=1" />
                        <AvatarFallback>EJ</AvatarFallback>
                      </Avatar>
                      <span>Emily Johnson</span>
                    </div>
                  </td>
                  <td class="py-3 px-4">STU-2025-001</td>
                  <td class="py-3 px-4">
                    <Badge variant="success">A+</Badge>
                  </td>
                  <td class="py-3 px-4">100%</td>
                  <td class="py-3 px-4">
                    <div class="flex space-x-2">
                      <Button variant="ghost" size="icon">
                        <Icon name="lucide:file-text" class="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Icon name="lucide:mail" class="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
                
                <tr class="border-b hover:bg-muted/50">
                  <td class="py-3 px-4">
                    <div class="flex items-center space-x-2">
                      <Avatar class="h-7 w-7">
                        <AvatarImage src="https://i.pravatar.cc/150?img=2" />
                        <AvatarFallback>JB</AvatarFallback>
                      </Avatar>
                      <span>Joshua Brown</span>
                    </div>
                  </td>
                  <td class="py-3 px-4">STU-2025-002</td>
                  <td class="py-3 px-4">
                    <Badge variant="success">A</Badge>
                  </td>
                  <td class="py-3 px-4">95%</td>
                  <td class="py-3 px-4">
                    <div class="flex space-x-2">
                      <Button variant="ghost" size="icon">
                        <Icon name="lucide:file-text" class="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Icon name="lucide:mail" class="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
                
                <tr class="border-b hover:bg-muted/50">
                  <td class="py-3 px-4">
                    <div class="flex items-center space-x-2">
                      <Avatar class="h-7 w-7">
                        <AvatarImage src="https://i.pravatar.cc/150?img=3" />
                        <AvatarFallback>AW</AvatarFallback>
                      </Avatar>
                      <span>Ava Williams</span>
                    </div>
                  </td>
                  <td class="py-3 px-4">STU-2025-003</td>
                  <td class="py-3 px-4">
                    <Badge variant="success">A-</Badge>
                  </td>
                  <td class="py-3 px-4">98%</td>
                  <td class="py-3 px-4">
                    <div class="flex space-x-2">
                      <Button variant="ghost" size="icon">
                        <Icon name="lucide:file-text" class="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Icon name="lucide:mail" class="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
                
                <tr class="border-b hover:bg-muted/50">
                  <td class="py-3 px-4">
                    <div class="flex items-center space-x-2">
                      <Avatar class="h-7 w-7">
                        <AvatarImage src="https://i.pravatar.cc/150?img=4" />
                        <AvatarFallback>OM</AvatarFallback>
                      </Avatar>
                      <span>Oliver Martinez</span>
                    </div>
                  </td>
                  <td class="py-3 px-4">STU-2025-004</td>
                  <td class="py-3 px-4">
                    <Badge variant="warning">B+</Badge>
                  </td>
                  <td class="py-3 px-4">90%</td>
                  <td class="py-3 px-4">
                    <div class="flex space-x-2">
                      <Button variant="ghost" size="icon">
                        <Icon name="lucide:file-text" class="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Icon name="lucide:mail" class="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
                
                <tr class="border-b hover:bg-muted/50">
                  <td class="py-3 px-4">
                    <div class="flex items-center space-x-2">
                      <Avatar class="h-7 w-7">
                        <AvatarImage src="https://i.pravatar.cc/150?img=5" />
                        <AvatarFallback>SD</AvatarFallback>
                      </Avatar>
                      <span>Sophia Davis</span>
                    </div>
                  </td>
                  <td class="py-3 px-4">STU-2025-005</td>
                  <td class="py-3 px-4">
                    <Badge variant="success">A</Badge>
                  </td>
                  <td class="py-3 px-4">100%</td>
                  <td class="py-3 px-4">
                    <div class="flex space-x-2">
                      <Button variant="ghost" size="icon">
                        <Icon name="lucide:file-text" class="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Icon name="lucide:mail" class="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="flex justify-end mt-4 space-x-2">
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
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

definePageMeta({
  layout: 'teacher'
});
</script>
