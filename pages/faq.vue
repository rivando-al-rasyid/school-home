<template>
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
    
    <div class="max-w-3xl mx-auto">
      <!-- Search Section -->
      <div class="mb-10">
        <div class="relative mb-8">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <NuxtIcon name="lucide:search" size="20" class="text-muted-foreground" />
          </div>
          <Input 
            v-model="searchQuery"
            type="search" 
            placeholder="Search frequently asked questions..." 
            class="pl-10"
          />
        </div>
      </div>
      
      <!-- FAQ Categories -->
      <Tabs default-value="general" class="w-full mb-12">
        <TabsList class="w-full flex justify-center mb-8">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="students">For Students</TabsTrigger>
          <TabsTrigger value="teachers">For Teachers</TabsTrigger>
          <TabsTrigger value="parents">For Parents</TabsTrigger>
          <TabsTrigger value="admin">For Administrators</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Accordion type="single" collapsible class="w-full">
            <AccordionItem v-for="faq in generalFaqs" :key="faq.id" :value="faq.id">
              <AccordionTrigger>{{ faq.question }}</AccordionTrigger>
              <AccordionContent>
                <div class="prose prose-sm">
                  <p class="text-muted-foreground">{{ faq.answer }}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        
        <TabsContent value="students">
          <Accordion type="single" collapsible class="w-full">
            <AccordionItem v-for="faq in studentFaqs" :key="faq.id" :value="faq.id">
              <AccordionTrigger>{{ faq.question }}</AccordionTrigger>
              <AccordionContent>
                <div class="prose prose-sm">
                  <p class="text-muted-foreground">{{ faq.answer }}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        
        <TabsContent value="teachers">
          <Accordion type="single" collapsible class="w-full">
            <AccordionItem v-for="faq in teacherFaqs" :key="faq.id" :value="faq.id">
              <AccordionTrigger>{{ faq.question }}</AccordionTrigger>
              <AccordionContent>
                <div class="prose prose-sm">
                  <p class="text-muted-foreground">{{ faq.answer }}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        
        <TabsContent value="parents">
          <Accordion type="single" collapsible class="w-full">
            <AccordionItem v-for="faq in parentFaqs" :key="faq.id" :value="faq.id">
              <AccordionTrigger>{{ faq.question }}</AccordionTrigger>
              <AccordionContent>
                <div class="prose prose-sm">
                  <p class="text-muted-foreground">{{ faq.answer }}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        
        <TabsContent value="admin">
          <Accordion type="single" collapsible class="w-full">
            <AccordionItem v-for="faq in adminFaqs" :key="faq.id" :value="faq.id">
              <AccordionTrigger>{{ faq.question }}</AccordionTrigger>
              <AccordionContent>
                <div class="prose prose-sm">
                  <p class="text-muted-foreground">{{ faq.answer }}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
      
      <!-- Question Not Answered Section -->
      <div class="bg-muted p-8 rounded-lg text-center">
        <h2 class="text-2xl font-bold mb-4">Didn't Find Your Answer?</h2>
        <p class="text-muted-foreground mb-6">
          If you can't find the answer you're looking for, our support team is always ready to assist you.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact">
            <Button>Contact Support</Button>
          </NuxtLink>
          <NuxtLink to="/help">
            <Button variant="outline">Help Center</Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';


const searchQuery = ref('');

const generalFaqs = ref([
  {
    id: 'gen-1',
    question: 'What is the School Management System?',
    answer: 'The School Management System is a comprehensive digital platform designed to streamline educational processes for schools, teachers, students, and parents. It offers tools for attendance tracking, grade management, communication, resource sharing, and administrative tasks.'
  },
  {
    id: 'gen-2',
    question: 'How secure is the platform?',
    answer: 'We take security seriously. Our platform uses industry-standard encryption, regular security audits, and strict access controls to protect all user data. We comply with educational privacy laws including FERPA to ensure your information remains secure and confidential.'
  },
  {
    id: 'gen-3',
    question: 'Can I access the system on mobile devices?',
    answer: 'Yes! Our platform is fully responsive and works on all devices including smartphones and tablets. You can access all features on-the-go through any modern web browser. We also offer mobile apps for iOS and Android with additional features like push notifications.'
  },
  {
    id: 'gen-4',
    question: 'What do I do if I forget my password?',
    answer: 'If you forget your password, simply click on the "Forgot Password" link on the login page. You\'ll receive an email with instructions to reset your password. If you don\'t receive the email, check your spam folder or contact your school administrator for assistance.'
  },
  {
    id: 'gen-5',
    question: 'Is training available for new users?',
    answer: 'Yes, we offer comprehensive training resources including video tutorials, documentation, and webinars for all user types. Schools can also request custom training sessions for their staff. Visit our Help Center for access to all training materials.'
  }
]);

const studentFaqs = ref([
  {
    id: 'stu-1',
    question: 'How do I view my assignments and deadlines?',
    answer: 'Once logged in, you can view all your assignments from your dashboard or by navigating to the "Assignments" section. You can filter assignments by course, due date, or completion status. The calendar view also gives you a visual overview of upcoming deadlines.'
  },
  {
    id: 'stu-2',
    question: 'How can I check my grades?',
    answer: 'To view your grades, navigate to the "Grades" section from the main menu. Here, you can see your grades for all courses, filter by term or subject, and view detailed feedback from your teachers on individual assignments and assessments.'
  },
  {
    id: 'stu-3',
    question: 'Can I submit assignments late?',
    answer: 'Late submission policies are set by individual teachers. The system allows for late submissions, but whether these are accepted and any grade penalties are determined by your teacher\'s policy. Always check the assignment details for specific late submission guidelines.'
  },
  {
    id: 'stu-4',
    question: 'How do I communicate with my teachers?',
    answer: 'You can message your teachers directly through the platform\'s messaging system. Navigate to the "Messages" section, select "New Message," and choose your teacher from the recipient list. You can also send messages through specific course pages or discussions.'
  },
  {
    id: 'stu-5',
    question: 'Can I access course materials offline?',
    answer: 'Many course materials can be downloaded for offline access. Look for the download icon next to documents, presentations, or resources. Once downloaded, you can access these materials without an internet connection, though interactive elements may require online access.'
  }
]);

const teacherFaqs = ref([
  {
    id: 'tea-1',
    question: 'How do I create and assign homework?',
    answer: 'To create assignments, go to your course page and select "Create Assignment." You can set details like due dates, file attachments, submission types, and grading criteria. You can assign to the entire class or select specific students. You can also create assignment templates to reuse.'
  },
  {
    id: 'tea-2',
    question: 'How do I track student attendance?',
    answer: 'Navigate to the "Attendance" section, select the class and date, and mark students as present, absent, or late. You can also batch update attendance, import attendance from spreadsheets, or enable student self-check-in options. Attendance reports are available for analysis.'
  },
  {
    id: 'tea-3',
    question: 'Can I schedule parent-teacher meetings through the system?',
    answer: 'Yes, you can schedule meetings with parents through the platform. Go to "Communication" > "Meetings" and select the "Schedule Meeting" option. Choose available time slots, add meeting details, and send invitations to parents. The system will sync with your calendar and send reminders.'
  },
  {
    id: 'tea-4',
    question: 'How do I create and grade quizzes?',
    answer: 'To create quizzes, go to your course and select "Create Quiz." You can add various question types (multiple choice, short answer, essay, etc.), set time limits, and customize grading options. Once students complete the quiz, you can grade responses and provide feedback directly in the system.'
  },
  {
    id: 'tea-5',
    question: 'How can I generate grade reports?',
    answer: 'You can generate comprehensive grade reports from the "Grades" section. Select "Generate Report," choose the class and grading period, and customize the format. Reports can be exported as PDFs or spreadsheets and can include detailed analytics, comments, and progress tracking.'
  }
]);

const parentFaqs = ref([
  {
    id: 'par-1',
    question: 'How do I view my child\'s progress?',
    answer: 'Once logged in, your dashboard will show an overview of your child\'s progress. For detailed information, navigate to the "Grades" section to view academic performance, the "Attendance" section for attendance records, and "Assignments" to see current and upcoming homework.'
  },
  {
    id: 'par-2',
    question: 'Can I receive notifications about my child\'s grades and attendance?',
    answer: 'Yes, you can set up notifications in your account settings. Go to "Settings" > "Notifications" and choose what updates you want to receive (grade changes, absences, upcoming tests, etc.) and how you want to receive them (email, SMS, or push notifications).'
  },
  {
    id: 'par-3',
    question: 'How do I communicate with my child\'s teachers?',
    answer: 'You can message teachers through the platform\'s messaging system. Go to "Messages" > "New Message" and select the appropriate teacher. You can also respond to teacher-initiated messages or request meetings. All communication is kept in one secure location for easy reference.'
  },
  {
    id: 'par-4',
    question: 'Can I view the school calendar and events?',
    answer: 'Yes, the "Calendar" section displays all school events, holidays, exam periods, and other important dates. You can filter to view only events relevant to your child\'s grade or specific activities. You can also sync the school calendar with your personal calendar.'
  },
  {
    id: 'par-5',
    question: 'How do I update my contact information?',
    answer: 'To update your contact information, go to "Profile Settings" and select "Edit Contact Information." Here you can update your email, phone number, address, and emergency contact details. It\'s important to keep this information current for school communications.'
  }
]);

const adminFaqs = ref([
  {
    id: 'adm-1',
    question: 'How do I add new users to the system?',
    answer: 'To add new users, go to the "User Management" section and select "Add New User." You can add users individually or import multiple users via CSV. Assign appropriate roles (student, teacher, parent, admin) and link related accounts (students to parents, students to classes).'
  },
  {
    id: 'adm-2',
    question: 'How do I set up the academic year and terms?',
    answer: 'Navigate to "System Settings" > "Academic Calendar" to configure the academic year, terms, and grading periods. You can set start and end dates, holidays, and exam periods. These settings will be applied across the platform for scheduling and reporting purposes.'
  },
  {
    id: 'adm-3',
    question: 'Can I customize system permissions based on roles?',
    answer: 'Yes, you can customize permissions for different user roles. Go to "System Settings" > "Roles & Permissions" to configure what each role can view and edit. You can create custom roles with specific permission sets tailored to your school\'s needs.'
  },
  {
    id: 'adm-4',
    question: 'How do I generate school-wide reports?',
    answer: 'To generate comprehensive reports, go to the "Reports" section. You can create reports on attendance, grades, behavior, and system usage. Set parameters for the data you want to include, choose visualization options, and export reports in various formats.'
  },
  {
    id: 'adm-5',
    question: 'How do I manage course offerings and class schedules?',
    answer: 'Use the "Courses & Scheduling" section to manage your school\'s courses and class schedules. You can create courses, assign teachers, enroll students, and build master schedules. The system helps identify scheduling conflicts and optimize resource allocation.'
  }
]);
</script>
