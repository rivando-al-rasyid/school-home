<template>
  <div>
    <h1 class="text-3xl font-bold mb-2">Admin Dashboard</h1>
    <p class="text-muted-foreground mb-6">Overview of school operations and key metrics</p>
    
    <div class="grid sm:grid-cols-4 gap-4 mb-8">
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Students</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">1,245</div>
          <p class="text-xs text-muted-foreground">+32 from last month</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Teachers</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">87</div>
          <p class="text-xs text-muted-foreground">+3 from last month</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Active Classes</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">120</div>
          <p class="text-xs text-muted-foreground">Spring semester</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Attendance Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">95.7%</div>
          <p class="text-xs text-muted-foreground">+1.2% from last month</p>
        </CardContent>
      </Card>
    </div>
    
    <!-- Interactive Dashboard Charts -->
    <div class="grid md:grid-cols-2 gap-8 mb-8">
      <Card class="shadow-sm">
        <CardHeader>
          <CardTitle>Enrollment Trends</CardTitle>
        </CardHeader>
        <CardContent class="h-80 flex items-center justify-center">
          <div class="text-center text-muted-foreground">
            <Icon name="lucide:bar-chart-2" class="h-12 w-12 mx-auto mb-2" />
            <p>Enrollment chart visualization</p>
            <p class="text-sm">(Chart component would render here)</p>
          </div>
        </CardContent>
      </Card>
      
      <Card class="shadow-sm">
        <CardHeader>
          <CardTitle>Academic Performance</CardTitle>
        </CardHeader>
        <CardContent class="h-80 flex items-center justify-center">
          <div class="text-center text-muted-foreground">
            <Icon name="lucide:line-chart" class="h-12 w-12 mx-auto mb-2" />
            <p>Academic performance visualization</p>
            <p class="text-sm">(Chart component would render here)</p>
          </div>
        </CardContent>
      </Card>
    </div>
    
    <!-- Recent Activity Feed -->
    <Card class="shadow-sm mb-8">
      <CardHeader>
        <CardTitle>Recent System Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div class="flex gap-3">
            <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="lucide:user-plus" class="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 class="text-sm font-medium">New Enrollment</h3>
              <p class="text-xs text-muted-foreground">15 new students enrolled for Fall 2025</p>
              <p class="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          </div>
          
          <div class="flex gap-3">
            <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="lucide:file-text" class="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 class="text-sm font-medium">Grade Reports Generated</h3>
              <p class="text-xs text-muted-foreground">Mid-term reports for all classes</p>
              <p class="text-xs text-muted-foreground">5 hours ago</p>
            </div>
          </div>
          
          <div class="flex gap-3">
            <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="lucide:calendar" class="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 class="text-sm font-medium">Schedule Updated</h3>
              <p class="text-xs text-muted-foreground">Spring semester exam schedule published</p>
              <p class="text-xs text-muted-foreground">Yesterday</p>
            </div>
          </div>
          
          <div class="flex gap-3">
            <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="lucide:database" class="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 class="text-sm font-medium">System Backup</h3>
              <p class="text-xs text-muted-foreground">Automatic system backup completed</p>
              <p class="text-xs text-muted-foreground">Yesterday</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" class="w-full">View All Activity</Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})
</script>