<template>
  <SidebarProvider>
    <Sidebar>
      <!-- Sidebar header with profile -->
      <SidebarHeader class="p-4 border-b">
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
      </SidebarHeader>

      <!-- Sidebar content with navigation -->
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem v-for="item in navigationItems" :key="item.path">
                <SidebarMenuButton as-child>
                  <NuxtLink 
                    :to="item.path" 
                    :class="[
                      $route.path === item.path ? 'text-primary font-medium' : ''
                    ]"
                  >
                    <component :is="item.icon" class="h-4 w-4" />
                    <span>{{ item.label }}</span>
                  </NuxtLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <!-- Sidebar footer with system status -->
      <SidebarFooter class="border-t p-4">
        <h4 class="text-sm font-medium mb-2">System Status</h4>
        <div class="space-y-4">
          <div v-for="(status, index) in systemStatus" :key="index" class="flex items-center justify-between">
            <span class="text-sm">{{ status.label }}:</span>
            <Badge v-if="status.badge" :variant="getBadgeVariant(status.badge)">{{ status.value }}</Badge>
            <span v-else class="text-sm text-muted-foreground">{{ status.value }}</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>

    <main class="flex-1">
      <!-- Mobile header with menu button -->
      <header class="lg:hidden flex items-center justify-between p-4 border-b">
        <div class="flex items-center">
          <SidebarTrigger class="mr-2">
            <Button variant="ghost" size="icon">
              <MenuIcon class="h-5 w-5" />
            </Button>
          </SidebarTrigger>
          <h1 class="text-xl font-bold">Admin Portal</h1>
        </div>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?img=12" />
          <AvatarFallback>RM</AvatarFallback>
        </Avatar>
      </header>

      <!-- Main content -->
      <div class="container py-8 px-4">
        <slot />
      </div>
    </main>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel, 
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  LayoutDashboard as DashboardIcon, 
  Users as UsersIcon, 
  BookOpen as BookIcon, 
  LayoutGrid as GridIcon, 
  Calendar as CalendarIcon, 
  BarChart2 as BarChart2Icon, 
  DollarSign as DollarSignIcon, 
  Settings as SettingsIcon,
  Menu as MenuIcon
} from 'lucide-vue-next';

const navigationItems = [
  { path: '/admin', icon: DashboardIcon, label: 'Dashboard' },
  { path: '/admin/users', icon: UsersIcon, label: 'User Management' },
  { path: '/admin/courses', icon: BookIcon, label: 'Courses' },
  { path: '/admin/classes', icon: GridIcon, label: 'Classes' },
  { path: '/admin/schedule', icon: CalendarIcon, label: 'Schedule' },
  { path: '/admin/reports', icon: BarChart2Icon, label: 'Reports' },
  { path: '/admin/finance', icon: DollarSignIcon, label: 'Finance' },
  { path: '/admin/settings', icon: SettingsIcon, label: 'Settings' }
];

const systemStatus = [
  { label: 'Server Status', value: 'Online', badge: 'success' },
  { label: 'Database', value: 'Connected', badge: 'success' },
  { label: 'Last Backup', value: 'Today, 3:00 AM' },
  { label: 'System Version', value: 'v2.4.1' }
];

function getBadgeVariant(status: string) {
  switch(status) {
    case 'success': return 'default';
    case 'warning': return 'secondary';
    case 'error': return 'destructive';
    default: return 'outline';
  }
}
</script>