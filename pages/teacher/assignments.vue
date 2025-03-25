<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Assignments</h1>
      <p class="text-muted-foreground">Manage assignments and submissions</p>
    </div>

    <div class="flex justify-between items-center mb-6">
      <div>
        <Tabs default-value="all" class="w-full">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="graded">Graded</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <Button>
        <Icon name="lucide:plus" class="h-4 w-4 mr-2" />
        New Assignment
      </Button>
    </div>
    
    <Card class="shadow-sm mb-6">
      <CardHeader>
        <CardTitle>All Assignments</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="flex justify-between items-center mb-4">
          <div class="relative">
            <input type="text" placeholder="Search assignments..." class="pl-8 pr-4 py-2 text-sm rounded-md border focus:ring-2 focus:ring-primary focus:border-primary">
            <Icon name="lucide:search" class="h-4 w-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>
          
          <div class="flex space-x-2">
            <Select default-value="all-classes">
              <SelectTrigger class="w-[180px]">
                <SelectValue placeholder="Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-classes">All Classes</SelectItem>
                <SelectItem value="math-101-10a">Math 101 - Class 10A</SelectItem>
                <SelectItem value="math-101-10b">Math 101 - Class 10B</SelectItem>
                <SelectItem value="math-202-11a">Math 202 - Class 11A</SelectItem>
                <SelectItem value="math-202-11b">Math 202 - Class 11B</SelectItem>
                <SelectItem value="math-303-12a">Math 303 - Class 12A</SelectItem>
              </SelectContent>
            </Select>
            
            <Select default-value="all-types">
              <SelectTrigger class="w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-types">All Types</SelectItem>
                <SelectItem value="homework">Homework</SelectItem>
                <SelectItem value="quiz">Quiz</SelectItem>
                <SelectItem value="test">Test</SelectItem>
                <SelectItem value="project">Project</SelectItem>
                <SelectItem value="exam">Exam</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b">
                <th class="py-3 px-4 text-left font-medium">Assignment</th>
                <th class="py-3 px-4 text-left font-medium">Class</th>
                <th class="py-3 px-4 text-left font-medium">Type</th>
                <th class="py-3 px-4 text-left font-medium">Due Date</th>
                <th class="py-3 px-4 text-left font-medium">Submissions</th>
                <th class="py-3 px-4 text-left font-medium">Status</th>
                <th class="py-3 px-4 text-left font-medium"/>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b hover:bg-muted/50">
                <td class="py-3 px-4">
                  <div class="font-medium">Math 101 - Homework #8</div>
                </td>
                <td class="py-3 px-4">Class 10A</td>
                <td class="py-3 px-4">Homework</td>
                <td class="py-3 px-4">March 22, 2025</td>
                <td class="py-3 px-4">28/28</td>
                <td class="py-3 px-4">
                  <Badge variant="success">Graded</Badge>
                </td>
                <td class="py-3 px-4">
                  <div class="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:eye" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:more-vertical" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-muted/50">
                <td class="py-3 px-4">
                  <div class="font-medium">Math 101 - Quiz #4</div>
                </td>
                <td class="py-3 px-4">Class 10B</td>
                <td class="py-3 px-4">Quiz</td>
                <td class="py-3 px-4">March 24, 2025</td>
                <td class="py-3 px-4">26/26</td>
                <td class="py-3 px-4">
                  <Badge variant="success">Graded</Badge>
                </td>
                <td class="py-3 px-4">
                  <div class="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:eye" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:more-vertical" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-muted/50">
                <td class="py-3 px-4">
                  <div class="font-medium">Math 202 - Project Assignment</div>
                </td>
                <td class="py-3 px-4">Class 11A</td>
                <td class="py-3 px-4">Project</td>
                <td class="py-3 px-4">March 29, 2025</td>
                <td class="py-3 px-4">19/24</td>
                <td class="py-3 px-4">
                  <Badge variant="warning">Pending</Badge>
                </td>
                <td class="py-3 px-4">
                  <div class="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:eye" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:more-vertical" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-muted/50">
                <td class="py-3 px-4">
                  <div class="font-medium">Math 202 - Quiz #5</div>
                </td>
                <td class="py-3 px-4">Class 11B</td>
                <td class="py-3 px-4">Quiz</td>
                <td class="py-3 px-4">March 26, 2025</td>
                <td class="py-3 px-4">0/22</td>
                <td class="py-3 px-4">
                  <Badge variant="secondary">Draft</Badge>
                </td>
                <td class="py-3 px-4">
                  <div class="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:eye" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:more-vertical" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-muted/50">
                <td class="py-3 px-4">
                  <div class="font-medium">Math 303 - Mid-Term Exam</div>
                </td>
                <td class="py-3 px-4">Class 12A</td>
                <td class="py-3 px-4">Exam</td>
                <td class="py-3 px-4">April 2, 2025</td>
                <td class="py-3 px-4">0/25</td>
                <td class="py-3 px-4">
                  <Badge variant="outline">Scheduled</Badge>
                </td>
                <td class="py-3 px-4">
                  <div class="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:eye" class="h-4 w-4" />
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
        
        <div class="flex justify-between items-center mt-4">
          <div class="text-sm text-muted-foreground">
            Showing 6 of 24 assignments
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
        <CardTitle>Assignment Templates</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="grid md:grid-cols-3 gap-4">
          <Button variant="outline" class="h-auto flex-col py-4 px-3 space-y-2 items-center justify-center">
            <Icon name="lucide:file-text" class="h-6 w-6" />
            <span class="font-medium">Homework Template</span>
            <span class="text-xs text-muted-foreground">Standard homework format</span>
          </Button>
          <Button variant="outline" class="h-auto flex-col py-4 px-3 space-y-2 items-center justify-center">
            <Icon name="lucide:clipboard-check" class="h-6 w-6" />
            <span class="font-medium">Quiz Template</span>
            <span class="text-xs text-muted-foreground">Multiple choice format</span>
          </Button>
          <Button variant="outline" class="h-auto flex-col py-4 px-3 space-y-2 items-center justify-center">
            <Icon name="lucide:award" class="h-6 w-6" />
            <span class="font-medium">Project Template</span>
            <span class="text-xs text-muted-foreground">Long-form with rubric</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

definePageMeta({
  layout: 'teacher'
});
</script>
