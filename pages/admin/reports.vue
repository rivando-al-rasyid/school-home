<template>
  <div>
    <h1 class="text-3xl font-bold mb-2">Reports</h1>
    <p class="text-muted-foreground mb-6">Generate and view academic and administrative reports</p>
    
    <!-- Report Controls -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div class="flex items-center gap-2">
        <div class="relative">
          <select class="pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
            <option>All Report Types</option>
            <option>Academic Performance</option>
            <option>Attendance</option>
            <option>Behavioral</option>
            <option>Financial</option>
            <option>Administrative</option>
          </select>
          <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        <div class="relative">
          <select class="pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
            <option>Spring 2025</option>
            <option>Fall 2024</option>
            <option>All Time</option>
          </select>
          <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
      <Button>
        <Icon name="lucide:plus" class="h-4 w-4 mr-2" />
        Generate New Report
      </Button>
    </div>
    
    <!-- Report Type Tabs -->
    <div class="flex border-b mb-6 overflow-x-auto">
      <button class="px-4 py-2 font-medium text-sm whitespace-nowrap border-b-2 border-primary text-primary">Academic Performance</button>
      <button class="px-4 py-2 font-medium text-sm whitespace-nowrap border-b-2 border-transparent hover:text-primary/80">Attendance Reports</button>
      <button class="px-4 py-2 font-medium text-sm whitespace-nowrap border-b-2 border-transparent hover:text-primary/80">Behavioral Reports</button>
      <button class="px-4 py-2 font-medium text-sm whitespace-nowrap border-b-2 border-transparent hover:text-primary/80">Financial Reports</button>
      <button class="px-4 py-2 font-medium text-sm whitespace-nowrap border-b-2 border-transparent hover:text-primary/80">Administrative Reports</button>
    </div>
    
    <!-- Recent and Saved Reports -->
    <div class="grid md:grid-cols-2 gap-8 mb-8">
      <!-- Academic Performance Reports -->
      <Card class="shadow-sm">
        <CardHeader>
          <CardTitle>Recent Academic Reports</CardTitle>
          <CardDescription>Recently generated academic performance reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div class="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/5">
              <div class="flex items-center gap-3">
                <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="lucide:bar-chart-2" class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 class="font-medium text-sm">Mid-term Grade Report</h3>
                  <p class="text-xs text-muted-foreground">All Classes - Spring 2025</p>
                  <p class="text-xs text-muted-foreground">Generated: March 15, 2025</p>
                </div>
              </div>
              <div class="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Icon name="lucide:download" class="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="lucide:eye" class="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div class="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/5">
              <div class="flex items-center gap-3">
                <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="lucide:trending-up" class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 class="font-medium text-sm">Grade Distribution Analysis</h3>
                  <p class="text-xs text-muted-foreground">By Department - Spring 2025</p>
                  <p class="text-xs text-muted-foreground">Generated: March 12, 2025</p>
                </div>
              </div>
              <div class="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Icon name="lucide:download" class="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="lucide:eye" class="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div class="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/5">
              <div class="flex items-center gap-3">
                <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="lucide:line-chart" class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 class="font-medium text-sm">Student Progress Report</h3>
                  <p class="text-xs text-muted-foreground">Grade 9 - Spring 2025</p>
                  <p class="text-xs text-muted-foreground">Generated: March 10, 2025</p>
                </div>
              </div>
              <div class="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Icon name="lucide:download" class="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="lucide:eye" class="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div class="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/5">
              <div class="flex items-center gap-3">
                <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="lucide:pie-chart" class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 class="font-medium text-sm">Course Performance Analysis</h3>
                  <p class="text-xs text-muted-foreground">Mathematics Department - Spring 2025</p>
                  <p class="text-xs text-muted-foreground">Generated: March 5, 2025</p>
                </div>
              </div>
              <div class="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Icon name="lucide:download" class="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="lucide:eye" class="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" size="sm" class="w-full">View All Academic Reports</Button>
        </CardFooter>
      </Card>
      
      <!-- Attendance Reports -->
      <Card class="shadow-sm">
        <CardHeader>
          <CardTitle>Recent Attendance Reports</CardTitle>
          <CardDescription>Recently generated attendance and absence reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div class="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/5">
              <div class="flex items-center gap-3">
                <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="lucide:check-square" class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 class="font-medium text-sm">Daily Attendance Summary</h3>
                  <p class="text-xs text-muted-foreground">All Grades - March 20, 2025</p>
                  <p class="text-xs text-muted-foreground">Generated: March 20, 2025</p>
                </div>
              </div>
              <div class="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Icon name="lucide:download" class="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="lucide:eye" class="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div class="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/5">
              <div class="flex items-center gap-3">
                <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="lucide:alert-circle" class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 class="font-medium text-sm">Absence Analysis Report</h3>
                  <p class="text-xs text-muted-foreground">By Grade Level - March 2025</p>
                  <p class="text-xs text-muted-foreground">Generated: March 15, 2025</p>
                </div>
              </div>
              <div class="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Icon name="lucide:download" class="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="lucide:eye" class="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div class="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/5">
              <div class="flex items-center gap-3">
                <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="lucide:calendar-check" class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 class="font-medium text-sm">Monthly Attendance Summary</h3>
                  <p class="text-xs text-muted-foreground">All Classes - February 2025</p>
                  <p class="text-xs text-muted-foreground">Generated: March 3, 2025</p>
                </div>
              </div>
              <div class="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Icon name="lucide:download" class="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="lucide:eye" class="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div class="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/5">
              <div class="flex items-center gap-3">
                <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="lucide:trending-down" class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 class="font-medium text-sm">Chronic Absence Report</h3>
                  <p class="text-xs text-muted-foreground">All Grades - YTD</p>
                  <p class="text-xs text-muted-foreground">Generated: March 1, 2025</p>
                </div>
              </div>
              <div class="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Icon name="lucide:download" class="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="lucide:eye" class="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" size="sm" class="w-full">View All Attendance Reports</Button>
        </CardFooter>
      </Card>
    </div>
    
    <!-- Report Generator -->
    <Card class="shadow-sm">
      <CardHeader>
        <CardTitle>Generate Custom Report</CardTitle>
        <CardDescription>Create a new report based on your specific requirements</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1">Report Type</label>
            <div class="relative">
              <select class="w-full pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
                <option>Academic Performance</option>
                <option>Attendance</option>
                <option>Behavioral</option>
                <option>Financial</option>
                <option>Administrative</option>
              </select>
              <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Report Name</label>
            <input type="text" placeholder="Enter a name for this report" class="w-full px-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none" />
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Time Period</label>
            <div class="relative">
              <select class="w-full pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
                <option>Current Term (Spring 2025)</option>
                <option>Previous Term (Fall 2024)</option>
                <option>Academic Year 2024-2025</option>
                <option>Custom Date Range</option>
              </select>
              <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Data Source</label>
            <div class="relative">
              <select class="w-full pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
                <option>All Students</option>
                <option>Specific Grade Level</option>
                <option>Specific Class</option>
                <option>Specific Department</option>
                <option>Specific Teacher</option>
              </select>
              <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Data Fields</label>
            <div class="space-y-1">
              <label class="flex items-center text-sm">
                <input type="checkbox" class="mr-2" checked />
                Student Demographics
              </label>
              <label class="flex items-center text-sm">
                <input type="checkbox" class="mr-2" checked />
                Academic Performance
              </label>
              <label class="flex items-center text-sm">
                <input type="checkbox" class="mr-2" checked />
                Attendance Data
              </label>
              <label class="flex items-center text-sm">
                <input type="checkbox" class="mr-2" />
                Behavioral Records
              </label>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Report Format</label>
            <div class="space-y-1">
              <label class="flex items-center text-sm">
                <input type="radio" name="format" class="mr-2" checked />
                PDF Document
              </label>
              <label class="flex items-center text-sm">
                <input type="radio" name="format" class="mr-2" />
                Excel Spreadsheet
              </label>
              <label class="flex items-center text-sm">
                <input type="radio" name="format" class="mr-2" />
                CSV File
              </label>
              <label class="flex items-center text-sm">
                <input type="radio" name="format" class="mr-2" />
                Web Dashboard
              </label>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter class="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Generate Report</Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})
</script>