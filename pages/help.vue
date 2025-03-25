<template>
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center">Help Center</h1>
    
    <div class="max-w-6xl mx-auto">
      <!-- Search Section -->
      <div class="max-w-2xl mx-auto mb-12">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon name="lucide:search" size="20" class="text-muted-foreground" />
          </div>
          <Input 
            v-model="searchQuery"
            class="pl-10"
            type="search" 
            placeholder="Search for help articles..." 
          />
        </div>
      </div>
      
      <!-- Popular Topics -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6 text-center">Popular Topics</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card :key="topic.id" v-for="topic in popularTopics" class="text-center cursor-pointer hover:shadow-md transition-shadow">
            <CardContent class="pt-6">
              <div class="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-primary">
                <Icon :name="topic.icon" size="24" />
              </div>
              <h3 class="font-medium mb-2">{{ topic.title }}</h3>
              <p class="text-sm text-muted-foreground">{{ topic.description }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <!-- Help Categories -->
      <div class="mb-16">
        <Tabs default-value="students" class="w-full">
          <TabsList class="w-full flex justify-center mb-8">
            <TabsTrigger value="students">For Students</TabsTrigger>
            <TabsTrigger value="teachers">For Teachers</TabsTrigger>
            <TabsTrigger value="parents">For Parents</TabsTrigger>
            <TabsTrigger value="admins">For Administrators</TabsTrigger>
          </TabsList>
          
          <TabsContent value="students">
            <div class="grid md:grid-cols-2 gap-6">
              <Accordion type="single" collapsible class="w-full" v-for="(group, index) in studentHelp" :key="index">
                <h3 class="text-xl font-semibold mb-3">{{ group.category }}</h3>
                <AccordionItem :key="item.id" v-for="item in group.items" :value="item.id">
                  <AccordionTrigger>{{ item.question }}</AccordionTrigger>
                  <AccordionContent>
                    <p class="text-muted-foreground">{{ item.answer }}</p>
                    <NuxtLink v-if="item.link" :to="item.link" class="text-primary hover:underline mt-2 inline-block">
                      Read more →
                    </NuxtLink>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
          
          <TabsContent value="teachers">
            <div class="text-center py-12">
              <h3 class="text-xl font-semibold mb-3">Teacher Help Content</h3>
              <p class="text-muted-foreground mb-6">Comprehensive resources for teachers coming soon.</p>
              <p>For immediate assistance, please contact support at:</p>
              <p class="text-primary">teacher-support@schoolmanagementsystem.com</p>
            </div>
          </TabsContent>
          
          <TabsContent value="parents">
            <div class="text-center py-12">
              <h3 class="text-xl font-semibold mb-3">Parent Help Content</h3>
              <p class="text-muted-foreground mb-6">Comprehensive resources for parents coming soon.</p>
              <p>For immediate assistance, please contact support at:</p>
              <p class="text-primary">parent-support@schoolmanagementsystem.com</p>
            </div>
          </TabsContent>
          
          <TabsContent value="admins">
            <div class="text-center py-12">
              <h3 class="text-xl font-semibold mb-3">Administrator Help Content</h3>
              <p class="text-muted-foreground mb-6">Comprehensive resources for administrators coming soon.</p>
              <p>For immediate assistance, please contact support at:</p>
              <p class="text-primary">admin-support@schoolmanagementsystem.com</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <!-- Video Tutorials -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-6 text-center">Video Tutorials</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <Card :key="video.id" v-for="video in videoTutorials" class="overflow-hidden">
            <div class="aspect-video relative bg-muted">
              <img :src="video.thumbnail" :alt="video.title" class="w-full h-full object-cover">
              <div class="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary">
                  <Icon name="lucide:play" size="24" />
                </div>
              </div>
            </div>
            <CardContent class="pt-4">
              <h3 class="font-medium">{{ video.title }}</h3>
              <p class="text-sm text-muted-foreground mt-1">{{ video.duration }}</p>
            </CardContent>
          </Card>
        </div>
        <div class="text-center mt-6">
          <Button variant="outline">View All Tutorials</Button>
        </div>
      </div>
      
      <!-- Additional Support Section -->
      <div class="bg-muted p-8 rounded-lg text-center">
        <h2 class="text-2xl font-bold mb-4">Need Additional Help?</h2>
        <p class="text-muted-foreground mb-6 max-w-2xl mx-auto">
          If you can't find the answer you're looking for, our support team is always ready to assist you.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact">
            <Button>Contact Support</Button>
          </NuxtLink>
          <NuxtLink to="/faq">
            <Button variant="outline">Visit FAQ</Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const searchQuery = ref('');

const popularTopics = ref([
  {
    id: 1,
    title: 'Getting Started',
    description: 'Learn the basics of the platform',
    icon: 'lucide:user'
  },
  {
    id: 2,
    title: 'Course Management',
    description: 'Managing assignments and materials',
    icon: 'lucide:book-open'
  },
  {
    id: 3,
    title: 'Account Settings',
    description: 'Update your profile and preferences',
    icon: 'lucide:settings'
  },
  {
    id: 4,
    title: 'Privacy & Security',
    description: 'Keeping your data safe',
    icon: 'lucide:lock'
  }
]);

const studentHelp = ref([
  {
    category: 'Account Management',
    items: [
      {
        id: 'student-1',
        question: 'How do I reset my password?',
        answer: 'To reset your password, go to the login page and click on "Forgot Password". You will receive an email with instructions to create a new password.',
        link: '/tutorials/reset-password'
      },
      {
        id: 'student-2',
        question: 'How can I update my profile information?',
        answer: 'Log in to your account, navigate to "Settings" from the dropdown menu in the top-right corner, then select "Edit Profile" to update your information.',
        link: '/tutorials/update-profile'
      },
      {
        id: 'student-3',
        question: 'What should I do if my account is locked?',
        answer: 'If your account is locked, please contact your school administrator or email our support team at support@schoolmanagementsystem.com for assistance.',
        link: null
      }
    ]
  },
  {
    category: 'Courses and Assignments',
    items: [
      {
        id: 'student-4',
        question: 'How do I submit an assignment?',
        answer: 'Navigate to the course, find the assignment, click "Submit Assignment", and follow the instructions to upload your work or type your response.',
        link: '/tutorials/submit-assignment'
      },
      {
        id: 'student-5',
        question: 'Where can I view my grades?',
        answer: 'To view your grades, go to the "Grades" section in the main navigation menu. You can filter by course or view all grades in one place.',
        link: '/tutorials/view-grades'
      },
      {
        id: 'student-6',
        question: 'How do I message my teacher?',
        answer: 'From your course page, click on the "Message" icon next to your teacher\'s name, or use the Messages section to compose a new message to any of your teachers.',
        link: '/tutorials/message-teacher'
      }
    ]
  }
]);

const videoTutorials = ref([
  {
    id: 1,
    title: 'Getting Started for Students',
    thumbnail: 'https://images.unsplash.com/photo-1589329482108-e115b5393438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    duration: '3:45'
  },
  {
    id: 2,
    title: 'Navigating Your Dashboard',
    thumbnail: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    duration: '4:20'
  },
  {
    id: 3,
    title: 'Submitting Assignments',
    thumbnail: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    duration: '2:55'
  }
]);
</script>
