<template>
  <SidebarProvider>
    <Sidebar>
      <!-- Sidebar header with profile -->
      <SidebarHeader class="p-4 border-b">
        <div class="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=22" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h3 class="font-medium">Jessica Davis</h3>
            <p class="text-sm text-muted-foreground">Math Teacher</p>
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
                    <Icon :name="item.icon" class="h-4 w-4" />
                    <span>{{ item.label }}</span>
                  </NuxtLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <!-- Sidebar footer with upcoming schedule -->
      <SidebarFooter class="border-t p-4">
        <h4 class="text-sm font-medium mb-2">Upcoming Schedule</h4>
        <div class="space-y-4">
          <div v-for="(class_item, index) in upcomingClasses" :key="index">
            <h5 class="font-medium text-sm">{{ class_item.name }}</h5>
            <p class="text-xs text-muted-foreground">{{ class_item.time }}</p>
            <p class="text-xs text-muted-foreground">{{ class_item.room }}</p>
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
          <h1 class="text-xl font-bold">Teacher Portal</h1>
        </div>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?img=22" />
          <AvatarFallback>JD</AvatarFallback>
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
import { 
  LayoutDashboard as DashboardIcon, 
  Users as UsersIcon, 
  ClipboardCheck as ClipboardCheckIcon,
  BarChart2 as BarChart2Icon, 
  Calendar as CalendarIcon, 
  Mail as MailIcon, 
  Folder as FolderIcon,
  Menu as MenuIcon
} from 'lucide-vue-next';

const navigationItems = [
  { path: '/teacher', icon: DashboardIcon, label: 'Dashboard' },
  { path: '/teacher/classes', icon: UsersIcon, label: 'Classes' },
  { path: '/teacher/assignments', icon: ClipboardCheckIcon, label: 'Assignments' },
  { path: '/teacher/grades', icon: BarChart2Icon, label: 'Grades' },
  { path: '/teacher/attendance', icon: CalendarIcon, label: 'Attendance' },
  { path: '/teacher/messages', icon: MailIcon, label: 'Messages' },
  { path: '/teacher/resources', icon: FolderIcon, label: 'Resources' }
];

const upcomingClasses = [
  {
    name: 'Algebra II',
    time: '10:00 AM - 11:30 AM',
    room: 'Room 202'
  },
  {
    name: 'Advanced Math',
    time: '1:00 PM - 2:30 PM',
    room: 'Room 205'
  },
  {
    name: 'Office Hours',
    time: '3:00 PM - 4:00 PM',
    room: 'Teachers Lounge'
  }
];
</script>