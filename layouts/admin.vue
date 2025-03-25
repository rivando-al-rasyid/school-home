<template>
  <div class="container mx-auto py-8 px-4">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Administrator Portal</h1>
      <p class="text-muted-foreground">Manage school operations, staff, students, and system settings</p>
    </div>

    <div class="grid md:grid-cols-12 gap-8">
      <!-- Sidebar -->
      <div class="md:col-span-3">
        <div class="bg-card rounded-lg border shadow-sm mb-4">
          <div class="p-4 border-b">
            <div class="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                <AvatarFallback>RM</AvatarFallback>
              </Avatar>
              <div>
                <h3 class="font-medium">Robert Mitchell</h3>
                <p class="text-sm text-muted-foreground">School Administrator</p>
              </div>
            </div>
          </div>
          <div class="p-4">
            <nav class="space-y-1">
              <template v-for="(item, index) in navigationItems" :key="index">
                <NuxtLink 
                  :to="item.path" 
                  :class="[
                    'flex items-center px-3 py-2 text-sm rounded-md',
                    $route.path === item.path ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-accent'
                  ]">
                  <Icon :name="item.icon" class="mr-2 h-4 w-4" />
                  {{ item.label }}
                </NuxtLink>
              </template>
            </nav>
          </div>
        </div>
        
        <Card class="shadow-sm">
          <CardHeader>
            <CardTitle class="text-sm">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div v-for="(status, index) in systemStatus" :key="index" class="flex items-center justify-between">
                <span class="text-sm">{{ status.label }}:</span>
                <Badge v-if="status.badge" :variant="status.badge as ('default' | 'secondary' | 'destructive' | 'outline')">{{ status.value }}</Badge>
                <span v-else class="text-sm text-muted-foreground">{{ status.value }}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <!-- Main Content -->
      <div class="md:col-span-9">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const navigationItems = [
  { path: '/admin', icon: 'lucide:layout-dashboard', label: 'Dashboard' },
  { path: '/admin/users', icon: 'lucide:users', label: 'User Management' },
  { path: '/admin/courses', icon: 'lucide:book', label: 'Courses' },
  { path: '/admin/classes', icon: 'lucide:layout-grid', label: 'Classes' },
  { path: '/admin/schedule', icon: 'lucide:calendar', label: 'Schedule' },
  { path: '/admin/reports', icon: 'lucide:bar-chart-2', label: 'Reports' },
  { path: '/admin/finance', icon: 'lucide:dollar-sign', label: 'Finance' },
  { path: '/admin/settings', icon: 'lucide:settings', label: 'Settings' }
];

const systemStatus = [
  { label: 'Server Status', value: 'Online', badge: 'success' },
  { label: 'Database', value: 'Connected', badge: 'success' },
  { label: 'Last Backup', value: 'Today, 3:00 AM' },
  { label: 'System Version', value: 'v2.4.1' }
];
</script>