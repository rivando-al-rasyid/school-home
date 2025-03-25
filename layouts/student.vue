<template>
  <SidebarProvider>
    <Sidebar>
      <!-- Sidebar header with profile -->
      <SidebarHeader class="p-4 border-b">
        <div class="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=48" />
            <AvatarFallback>ED</AvatarFallback>
          </Avatar>
          <div>
            <h3 class="font-medium">Emma Davis</h3>
            <p class="text-sm text-muted-foreground">Student - 11th Grade</p>
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

      <!-- Sidebar footer with upcoming assignments -->
      <SidebarFooter class="border-t p-4">
        <h4 class="text-sm font-medium mb-2">Upcoming Assignments</h4>
        <div class="space-y-4">
          <div v-for="(assignment, index) in upcomingAssignments" :key="index">
            <h5 class="font-medium text-sm">{{ assignment.title }}</h5>
            <p class="text-xs text-muted-foreground">{{ assignment.course }}</p>
            <p class="text-xs text-muted-foreground">Due: {{ assignment.dueDate }}</p>
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
          <h1 class="text-xl font-bold">Student Portal</h1>
        </div>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?img=48" />
          <AvatarFallback>ED</AvatarFallback>
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
  BookOpen as BookOpenIcon,
  Users as UsersIcon,
  Menu as MenuIcon
} from 'lucide-vue-next';

const navigationItems = [
  { path: '/student', icon: DashboardIcon, label: 'Dashboard' },
  { path: '/student/courses', icon: BookOpenIcon, label: 'My Courses' },
  { path: '/student/grades', icon: GraduationCapIcon, label: 'Grades' },
  { path: '/student/assignments', icon: ClipboardListIcon, label: 'Assignments', badge: '5' },
  { path: '/student/attendance', icon: CalendarIcon, label: 'Attendance' },
  { path: '/student/messages', icon: MailIcon, label: 'Messages', badge: '3' },
  { path: '/student/classmates', icon: UsersIcon, label: 'Classmates' }
];

const upcomingAssignments = [
  {
    title: 'Math Quiz',
    course: 'Advanced Algebra',
    dueDate: 'Tomorrow, 9:00 AM'
  },
  {
    title: 'English Essay',
    course: 'English Literature',
    dueDate: 'March 28, 2025'
  },
  {
    title: 'Science Lab Report',
    course: 'Physics',
    dueDate: 'March 30, 2025'
  }
];
</script>