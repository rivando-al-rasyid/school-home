<template>
  <SidebarProvider>
    <Sidebar>
      <!-- Sidebar header with profile -->
      <SidebarHeader class="p-4 border-b">
        <div class="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=35" />
            <AvatarFallback>MP</AvatarFallback>
          </Avatar>
          <div>
            <h3 class="font-medium">Michael Peterson</h3>
            <p class="text-sm text-muted-foreground">Parent</p>
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
                    :class="[$route.path === item.path ? 'text-primary font-medium' : '']"
                  >
                    <component :is="item.icon" class="h-4 w-4" />
                    <span>{{ item.label }}</span>
                    <Badge 
                      v-if="item.badge" 
                      variant="secondary" 
                      class="ml-auto"
                    >
                      {{ item.badge }}
                    </Badge>
                  </NuxtLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <!-- Sidebar footer with upcoming events -->
      <SidebarFooter class="border-t p-4">
        <h4 class="text-sm font-medium mb-2">Upcoming Events</h4>
        <div class="space-y-4">
          <div v-for="(event, index) in upcomingEvents" :key="index">
            <h5 class="font-medium text-sm">{{ event.title }}</h5>
            <p class="text-xs text-muted-foreground">{{ event.date }}</p>
            <p class="text-xs text-muted-foreground">{{ event.location }}</p>
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
          <h1 class="text-xl font-bold">Parent Portal</h1>
        </div>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?img=35" />
          <AvatarFallback>MP</AvatarFallback>
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
  GraduationCap as GraduationCapIcon, 
  Calendar as CalendarIcon, 
  ClipboardList as ClipboardListIcon, 
  Mail as MailIcon, 
  FileText as FileTextIcon, 
  Settings as SettingsIcon,
  Menu as MenuIcon
} from 'lucide-vue-next';

const navigationItems = [
  { path: '/parent', icon: DashboardIcon, label: 'Dashboard' },
  { path: '/parent/grades', icon: GraduationCapIcon, label: 'Grades' },
  { path: '/parent/attendance', icon: CalendarIcon, label: 'Attendance' },
  { path: '/parent/assignments', icon: ClipboardListIcon, label: 'Assignments', badge: '3' },
  { path: '/parent/messages', icon: MailIcon, label: 'Messages', badge: '2' },
  { path: '/parent/calendar', icon: FileTextIcon, label: 'Calendar' },
  { path: '/parent/settings', icon: SettingsIcon, label: 'Settings' }
];

const upcomingEvents = [
  {
    title: 'Parent-Teacher Conference',
    date: 'March 28, 2025 - 4:00 PM',
    location: 'School Auditorium'
  },
  {
    title: 'Science Fair',
    date: 'April 10, 2025 - 1:00 PM',
    location: 'Gymnasium'
  },
  {
    title: 'School Holiday',
    date: 'April 15, 2025',
    location: 'No School'
  }
];
</script>