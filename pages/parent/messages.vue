<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Messages</h1>
    
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
          <CardTitle>Teacher Quick Access</CardTitle>
          <CardDescription>Quickly message your child's teachers</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-3">
            <div 
              v-for="(teacher, index) in teachers" 
              :key="index" 
              class="flex items-center p-2 rounded-md hover:bg-accent"
            >
              <Avatar class="h-10 w-10 mr-3">
                <AvatarImage :src="teacher.avatar" />
                <AvatarFallback>{{ getInitials(teacher.name) }}</AvatarFallback>
              </Avatar>
              <div class="flex-grow">
                <h4 class="font-medium">{{ teacher.name }}</h4>
                <p class="text-sm text-muted-foreground">{{ teacher.subject }}</p>
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
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const selectedConversation = ref(0);

const conversations = [
  {
    name: 'Ms. Thompson',
    role: 'Science Teacher',
    avatar: 'https://i.pravatar.cc/150?img=47',
    lastMessage: 'Emma\'s science project is looking great! She\'s making excellent progress.',
    time: '2 hours ago',
    unread: 1
  },
  {
    name: 'Mr. Johnson',
    role: 'Math Teacher',
    avatar: 'https://i.pravatar.cc/150?img=68',
    lastMessage: 'Thank you for your feedback on the homework assignments. I\'ll address your concerns.',
    time: 'Yesterday',
    unread: 1
  },
  {
    name: 'Principal Hernandez',
    role: 'School Principal',
    avatar: 'https://i.pravatar.cc/150?img=53',
    lastMessage: 'The parent-teacher conference is scheduled for March 28. Please confirm your attendance.',
    time: 'March 20',
    unread: 0
  },
  {
    name: 'Mrs. Garcia',
    role: 'English Teacher',
    avatar: 'https://i.pravatar.cc/150?img=32',
    lastMessage: 'Alex has shown great improvement in his essay writing skills this quarter.',
    time: 'March 18',
    unread: 0
  },
  {
    name: 'Coach Williams',
    role: 'Physical Education',
    avatar: 'https://i.pravatar.cc/150?img=15',
    lastMessage: 'Basketball tryouts will be held next Tuesday after school. Please ensure proper attire.',
    time: 'March 15',
    unread: 0
  }
];

const messagesByConversation = {
  0: [
    { 
      sender: 'other', 
      content: 'Hello Mrs. Davis, I wanted to update you on Emma\'s progress with her science project.', 
      time: 'Today, 9:30 AM' 
    },
    { 
      sender: 'user', 
      content: 'Hi Ms. Thompson, thank you for reaching out. How is she doing?', 
      time: 'Today, 9:45 AM' 
    },
    { 
      sender: 'other', 
      content: 'She\'s making excellent progress! Her experiment on plant growth with different light conditions is very well designed.', 
      time: 'Today, 10:15 AM' 
    },
    { 
      sender: 'other', 
      content: 'I\'ve shared some additional resources she might find helpful for her analysis section.', 
      time: 'Today, 10:16 AM' 
    },
    { 
      sender: 'user', 
      content: 'That\'s wonderful to hear! She\'s been working very hard on it at home. Thank you for the extra resources.', 
      time: 'Today, 10:30 AM' 
    }
  ],
  1: [
    { 
      sender: 'user', 
      content: 'Mr. Johnson, I\'ve noticed that the math homework has been more challenging lately. Is there additional support available?', 
      time: 'Yesterday, 4:15 PM' 
    },
    { 
      sender: 'other', 
      content: 'Hello Mrs. Davis, thank you for reaching out about this. I understand your concerns about the increasing difficulty.', 
      time: 'Yesterday, 5:20 PM' 
    },
    { 
      sender: 'other', 
      content: 'We\'re offering additional tutoring sessions on Thursdays after school. Would Emma be interested in attending?', 
      time: 'Yesterday, 5:22 PM' 
    },
    { 
      sender: 'user', 
      content: 'That sounds perfect. I\'ll discuss it with her tonight and let you know tomorrow.', 
      time: 'Yesterday, 6:45 PM' 
    },
    { 
      sender: 'other', 
      content: 'Great! I\'ll save her a spot just in case. Thank you for your feedback on the homework assignments. I\'ll address your concerns.', 
      time: 'Yesterday, 7:00 PM' 
    }
  ],
  2: [
    { 
      sender: 'other', 
      content: 'Dear Parents, we\'re hosting our annual parent-teacher conferences on March 28th from 1:00 PM to 7:00 PM.', 
      time: 'March 20, 11:00 AM' 
    },
    { 
      sender: 'other', 
      content: 'Please use our online scheduling system to book your preferred time slot. Each session will be approximately 15 minutes.', 
      time: 'March 20, 11:02 AM' 
    },
    { 
      sender: 'user', 
      content: 'Thank you for the information. I\'ll book a slot soon.', 
      time: 'March 20, 1:45 PM' 
    }
  ]
};

const announcements = [
  {
    title: 'Spring Break Schedule',
    category: 'Calendar',
    content: 'Spring break will be from April 3-10. Classes resume on Monday, April 11. We hope everyone has a safe and enjoyable break!',
    date: 'March 20, 2023',
    sender: 'Principal Hernandez'
  },
  {
    title: 'Science Fair Registration',
    category: 'Academic',
    content: 'Registration for the annual science fair is now open. Students can register online through the student portal until April 15.',
    date: 'March 18, 2023',
    sender: 'Science Department'
  },
  {
    title: 'COVID-19 Protocol Updates',
    category: 'Health',
    content: 'Updated COVID protocols are now in effect. Masks are optional but recommended for all indoor activities.',
    date: 'March 15, 2023',
    sender: 'School Nurse'
  }
];

const teachers = [
  {
    name: 'Ms. Thompson',
    subject: 'Science - Grade 8',
    avatar: 'https://i.pravatar.cc/150?img=47'
  },
  {
    name: 'Mr. Johnson',
    subject: 'Mathematics - Grade 8',
    avatar: 'https://i.pravatar.cc/150?img=68'
  },
  {
    name: 'Mrs. Garcia',
    subject: 'English - Grade 8',
    avatar: 'https://i.pravatar.cc/150?img=32'
  },
  {
    name: 'Ms. Wilson',
    subject: 'History - Grade 8',
    avatar: 'https://i.pravatar.cc/150?img=23'
  },
  {
    name: 'Coach Williams',
    subject: 'Physical Education',
    avatar: 'https://i.pravatar.cc/150?img=15'
  }
];

const activeConversation = computed(() => conversations[selectedConversation.value]);
const activeMessages = computed(() => messagesByConversation[selectedConversation.value] || []);

function selectConversation(index) {
  selectedConversation.value = index;
  // Mark as read when selecting
  if (conversations[index].unread) {
    conversations[index].unread = 0;
  }
}

function getInitials(name) {
  return name.split(' ').map(part => part.charAt(0)).join('');
}
definePageMeta({
  layout: 'parent'
})

</script>
