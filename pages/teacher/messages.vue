<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Messages</h1>
      <p class="text-muted-foreground">Communicate with students, parents, and colleagues</p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Sidebar -->
      <div class="lg:col-span-4">
        <Card>
          <CardHeader class="pb-3">
            <div class="flex justify-between items-center">
              <CardTitle>Conversations</CardTitle>
              <Button size="sm">
                <Icon name="lucide:plus" class="h-4 w-4 mr-2" />
                New Message
              </Button>
            </div>
          </CardHeader>
          <CardContent class="p-0">
            <div class="relative h-[500px] overflow-auto">
              <div class="sticky top-0 p-3 bg-card border-b mb-0.5">
                <div class="relative">
                  <Input placeholder="Search messages..." class="pl-8" />
                  <Icon name="lucide:search" class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div>
                <div 
                  v-for="(conversation, index) in conversations" 
                  :key="index"
                  :class="[
                    'flex items-center p-3 hover:bg-accent cursor-pointer',
                    selectedConversation === index ? 'bg-accent' : '',
                    conversation.unread ? 'border-l-2 border-primary' : ''
                  ]"
                  @click="selectConversation(index)"
                >
                  <Avatar class="h-10 w-10 mr-3">
                    <AvatarImage :src="conversation.avatar" />
                    <AvatarFallback>{{ getInitials(conversation.name) }}</AvatarFallback>
                  </Avatar>
                  <div class="flex-1 min-w-0">
                    <div class="flex justify-between items-center mb-1">
                      <h4 class="font-medium truncate">{{ conversation.name }}</h4>
                      <span class="text-xs text-muted-foreground whitespace-nowrap ml-2">{{ conversation.time }}</span>
                    </div>
                    <div class="flex justify-between">
                      <p class="text-sm text-muted-foreground truncate">{{ conversation.lastMessage }}</p>
                      <Badge v-if="conversation.unread" class="ml-2">{{ conversation.unread }}</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <!-- Message Content -->
      <div class="lg:col-span-8">
        <Card class="h-full flex flex-col">
          <CardHeader class="flex-shrink-0 pb-3">
            <div class="flex items-center">
              <Avatar class="h-10 w-10 mr-3">
                <AvatarImage :src="activeConversation?.avatar" />
                <AvatarFallback>{{ activeConversation ? getInitials(activeConversation.name) : 'NA' }}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{{ activeConversation?.name || 'Select a conversation' }}</CardTitle>
                <CardDescription>{{ activeConversation?.role || '' }}</CardDescription>
              </div>
            </div>
            
            <div v-if="activeConversation" class="flex gap-2 ml-auto">
              <Button variant="ghost" size="icon">
                <Icon name="lucide:phone" class="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="lucide:video" class="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="lucide:more-vertical" class="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent class="flex-grow p-0 overflow-auto">
            <div v-if="!activeConversation" class="h-full flex flex-col items-center justify-center p-6">
              <div class="w-full max-w-md text-center">
                <div class="bg-accent rounded-full p-3 inline-flex mb-4">
                  <Icon name="lucide:mail" class="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 class="text-lg font-medium mb-2">Your Messages</h3>
                <p class="text-muted-foreground mb-4">
                  Select a conversation from the sidebar to view messages or start a new conversation
                </p>
                <Button>
                  <Icon name="lucide:plus" class="h-4 w-4 mr-2" />
                  New Message
                </Button>
              </div>
            </div>
            
            <div v-else class="flex flex-col h-[calc(100vh-23rem)]">
              <div class="flex-grow overflow-auto p-4 space-y-4">
                <div 
                  v-for="(message, index) in activeMessages" 
                  :key="index" 
                  :class="[
                    'flex',
                    message.sender === 'user' ? 'justify-end' : ''
                  ]"
                >
                  <div 
                    :class="[
                      'max-w-[75%] rounded-lg p-3',
                      message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-accent'
                    ]"
                  >
                    <p class="text-sm">{{ message.content }}</p>
                    <p class="text-xs mt-1 opacity-80 text-right">{{ message.time }}</p>
                  </div>
                </div>
              </div>
              
              <div class="p-4 border-t">
                <div class="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Icon name="lucide:paperclip" class="h-4 w-4" />
                  </Button>
                  <div class="relative flex-grow">
                    <Textarea placeholder="Type your message here..." rows="1" class="resize-none min-h-10 py-2.5 pr-10" />
                    <Button variant="ghost" size="icon" class="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <Icon name="lucide:smile" class="h-4 w-4" />
                    </Button>
                  </div>
                  <Button>
                    <Icon name="lucide:send" class="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Announcements</CardTitle>
          <CardDescription>School-wide announcements and notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div v-for="(announcement, index) in announcements" :key="index" class="border-b pb-4 last:border-0 last:pb-0">
              <div class="flex justify-between items-start mb-1">
                <h4 class="font-medium">{{ announcement.title }}</h4>
                <Badge variant="outline">{{ announcement.category }}</Badge>
              </div>
              <p class="text-sm text-muted-foreground mb-2">{{ announcement.content }}</p>
              <div class="flex justify-between items-center text-xs text-muted-foreground">
                <span>{{ announcement.date }} • {{ announcement.sender }}</span>
                <Button variant="ghost" size="sm" class="h-auto py-1 px-2">Read More</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Class Communication</CardTitle>
          <CardDescription>Send messages to your classes or individual students</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-3">
            <div 
              v-for="(classGroup, index) in classes" 
              :key="index" 
              class="flex items-center p-2 rounded-md hover:bg-accent"
            >
              <div class="h-10 w-10 mr-3 flex items-center justify-center bg-primary/10 rounded-full">
                <Icon :name="classGroup.icon" class="h-5 w-5 text-primary" />
              </div>
              <div class="flex-grow">
                <h4 class="font-medium">{{ classGroup.name }}</h4>
                <p class="text-sm text-muted-foreground">{{ classGroup.students }} students</p>
              </div>
              <Button variant="outline" size="sm">Message</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const selectedConversation = ref(null);

const conversations = ref([
  {
    name: 'Martha Wilson',
    role: 'Parent of Alex Wilson',
    avatar: '/avatars/parent1.png',
    lastMessage: 'Could we schedule a meeting to discuss Alex\'s progress?',
    time: '10:32 AM',
    unread: 1
  },
  {
    name: 'Robert Johnson',
    role: 'Parent of Emma Johnson',
    avatar: '/avatars/parent2.png',
    lastMessage: 'Thank you for the update on Emma\'s project.',
    time: 'Yesterday',
    unread: null
  },
  {
    name: 'Jesscia Brown',
    role: 'Student',
    avatar: '/avatars/student1.png',
    lastMessage: 'I submitted my assignment late. Will there be a penalty?',
    time: 'Yesterday',
    unread: 1
  },
  {
    name: 'Principal Diaz',
    role: 'Administrator',
    avatar: '/avatars/admin1.png',
    lastMessage: 'Please submit your field trip proposal by Friday.',
    time: 'Mar 20',
    unread: null
  },
  {
    name: 'Michael Taylor',
    role: 'Science Teacher',
    avatar: '/avatars/teacher1.png',
    lastMessage: 'Can we coordinate our lessons on ecosystems next week?',
    time: 'Mar 19',
    unread: null
  }
]);

const activeConversation = computed(() => {
  if (selectedConversation.value !== null) {
    return conversations.value[selectedConversation.value];
  }
  return null;
});

const activeMessages = ref([
  { 
    sender: 'other', 
    content: 'Hello, I wanted to discuss Alex\'s recent test results. He\'s been struggling with the new math concepts.',
    time: '10:15 AM' 
  },
  { 
    sender: 'user', 
    content: 'I\'ve noticed that as well. I\'ve been providing additional resources, but he might benefit from some extra help.',
    time: '10:18 AM' 
  },
  { 
    sender: 'other', 
    content: 'Would it be possible to set up a meeting to discuss strategies to help him improve?',
    time: '10:25 AM' 
  },
  { 
    sender: 'user', 
    content: 'Absolutely. I\'m available after school on Thursday or Friday this week. Would either of those work for you?',
    time: '10:30 AM' 
  },
  { 
    sender: 'other', 
    content: 'Friday would be perfect. Around 3:30 PM?',
    time: '10:32 AM' 
  }
]);

const announcements = [
  {
    title: 'Spring Break Schedule',
    category: 'Calendar',
    content: 'Spring break will be from April 3-10. Classes resume on Monday, April 11. We hope everyone has a safe and enjoyable break!',
    date: 'Mar 20, 2025',
    sender: 'Administration'
  },
  {
    title: 'Professional Development Day',
    category: 'Staff',
    content: 'The upcoming professional development day will focus on innovative teaching methods. Please submit your workshop preferences by Friday.',
    date: 'Mar 18, 2025',
    sender: 'Principal Diaz'
  },
  {
    title: 'Quarterly Grades Due',
    category: 'Academic',
    content: 'All quarter grades must be submitted by 5pm this Friday. Please ensure all assignments are graded and entered promptly.',
    date: 'Mar 15, 2025',
    sender: 'Administration'
  }
];

const classes = [
  {
    name: 'Algebra I - Period 2',
    students: 28,
    icon: 'lucide:calculator'
  },
  {
    name: 'Geometry - Period 3',
    students: 24,
    icon: 'lucide:triangle'
  },
  {
    name: 'Pre-Calculus - Period 5',
    students: 22,
    icon: 'lucide:function-square'
  },
  {
    name: 'Math Club',
    students: 16,
    icon: 'lucide:sigma'
  }
];

function selectConversation(index) {
  selectedConversation.value = index;
  if (conversations.value[index].unread) {
    conversations.value[index].unread = null;
  }
}

function getInitials(name) {
  return name.split(' ').map(word => word[0]).join('');
}

definePageMeta({
  layout: 'teacher'
});
</script>
