<template>
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center">Tutorials & Guides</h1>
    
    <div class="max-w-6xl mx-auto">
      <!-- Introduction section -->
      <div class="text-center mb-12">
        <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
          Welcome to our comprehensive tutorials section. Here you'll find step-by-step guides 
          to help you make the most of our school management system.
        </p>
      </div>
      
      <!-- Search & Filters -->
      <div class="bg-muted p-6 rounded-lg mb-12">
        <div class="grid md:grid-cols-4 gap-4">
          <div class="md:col-span-3">
            <div class="relative">
              <Search size="20" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search tutorials..."
                class="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
            </div>
          </div>
          <div>
            <select class="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
              <option value="">All Categories</option>
              <option value="students">For Students</option>
              <option value="teachers">For Teachers</option>
              <option value="parents">For Parents</option>
              <option value="administrators">For Administrators</option>
            </select>
          </div>
        </div>
      </div>
      
      <!-- Tutorial Categories -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 class="text-2xl font-bold mb-6 flex items-center">
            <Users size="24" class="mr-2 text-primary" />
            Getting Started
          </h2>
          
          <Card class="mb-4 cursor-pointer hover:shadow-md transition-shadow">
            <CardContent class="p-4">
              <h3 class="text-xl font-medium mb-2">Creating Your Account</h3>
              <p class="text-muted-foreground mb-4">Learn how to set up your account, verify your email, and set your preferences.</p>
              <div class="flex items-center text-sm text-muted-foreground">
                <span class="flex items-center mr-4">
                  <Eye size="18" class="mr-1" />
                  2,347 views
                </span>
                <span class="flex items-center">
                  <Clock size="18" class="mr-1" />
                  5 min read
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card class="mb-4 cursor-pointer hover:shadow-md transition-shadow">
            <CardContent class="p-4">
              <h3 class="text-xl font-medium mb-2">System Navigation</h3>
              <p class="text-muted-foreground mb-4">Understanding the dashboard, navigation menu, and key features of the platform.</p>
              <div class="flex items-center text-sm text-muted-foreground">
                <span class="flex items-center mr-4">
                  <Eye size="18" class="mr-1" />
                  1,856 views
                </span>
                <span class="flex items-center">
                  <Clock size="18" class="mr-1" />
                  7 min read
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card class="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent class="p-4">
              <h3 class="text-xl font-medium mb-2">Profile Management</h3>
              <p class="text-muted-foreground mb-4">How to update your personal information, change passwords, and manage notification settings.</p>
              <div class="flex items-center text-sm text-muted-foreground">
                <span class="flex items-center mr-4">
                  <Eye size="18" class="mr-1" />
                  1,593 views
                </span>
                <span class="flex items-center">
                  <Clock size="18" class="mr-1" />
                  4 min read
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h2 class="text-2xl font-bold mb-6 flex items-center">
            <HelpCircle size="24" class="mr-2 text-primary" />
            Common Questions
          </h2>
          
          <Card class="mb-4 cursor-pointer hover:shadow-md transition-shadow">
            <CardContent class="p-4">
              <h3 class="text-xl font-medium mb-2">Managing Assignments</h3>
              <p class="text-muted-foreground mb-4">Learn how to submit assignments, track due dates, and receive feedback from teachers.</p>
              <div class="flex items-center text-sm text-muted-foreground">
                <span class="flex items-center mr-4">
                  <Eye size="18" class="mr-1" />
                  3,142 views
                </span>
                <span class="flex items-center">
                  <Clock size="18" class="mr-1" />
                  8 min read
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card class="mb-4 cursor-pointer hover:shadow-md transition-shadow">
            <CardContent class="p-4">
              <h3 class="text-xl font-medium mb-2">Calendar & Scheduling</h3>
              <p class="text-muted-foreground mb-4">How to view your academic calendar, set reminders, and manage your school schedule.</p>
              <div class="flex items-center text-sm text-muted-foreground">
                <span class="flex items-center mr-4">
                  <Eye size="18" class="mr-1" />
                  2,085 views
                </span>
                <span class="flex items-center">
                  <Clock size="18" class="mr-1" />
                  6 min read
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card class="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent class="p-4">
              <h3 class="text-xl font-medium mb-2">Communication Tools</h3>
              <p class="text-muted-foreground mb-4">Instructions for messaging teachers, participating in discussions, and collaborating with classmates.</p>
              <div class="flex items-center text-sm text-muted-foreground">
                <span class="flex items-center mr-4">
                  <Eye size="18" class="mr-1" />
                  1,874 views
                </span>
                <span class="flex items-center">
                  <Clock size="18" class="mr-1" />
                  9 min read
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <!-- Video Tutorials -->
      <h2 class="text-2xl font-bold mb-6 flex items-center">
        <Video size="24" class="mr-2 text-primary" />
        Video Tutorials
      </h2>
      
      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <div class="rounded-lg overflow-hidden shadow-md">
          <div class="relative pb-[56.25%] bg-muted">
            <div class="absolute inset-0 flex items-center justify-center">
              <Play size="48" class="text-primary/80 cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">Complete Platform Walkthrough</h3>
            <p class="text-sm text-muted-foreground">A comprehensive guide to navigate and use all features of our platform.</p>
          </div>
        </div>
        
        <div class="rounded-lg overflow-hidden shadow-md">
          <div class="relative pb-[56.25%] bg-muted">
            <div class="absolute inset-0 flex items-center justify-center">
              <Play size="48" class="text-primary/80 cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">Advanced Assignment Submission</h3>
            <p class="text-sm text-muted-foreground">Tips and tricks for submitting various types of assignments with attachments.</p>
          </div>
        </div>
        
        <div class="rounded-lg overflow-hidden shadow-md">
          <div class="relative pb-[56.25%] bg-muted">
            <div class="absolute inset-0 flex items-center justify-center">
              <Play size="48" class="text-primary/80 cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">Mobile App Companion Guide</h3>
            <p class="text-sm text-muted-foreground">Learn how to use our mobile application for on-the-go learning access.</p>
          </div>
        </div>
      </div>
      
      <!-- FAQ Section -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center">
          <HelpCircle size="24" class="mr-2 text-primary" />
          FAQs
        </h2>
        
        <div class="space-y-4">
          <details class="group rounded-lg bg-muted p-4">
            <summary class="flex cursor-pointer items-center justify-between font-medium">
              <span>How do I reset my password?</span>
              <ChevronDown size="24" class="transition duration-300 group-open:rotate-180" />
            </summary>
            <div class="mt-3 text-muted-foreground">
              <p>
                To reset your password, click on the "Forgot Password" link on the login page. You'll receive an email with instructions to create a new password. If you don't receive the email, check your spam folder or contact support.
              </p>
            </div>
          </details>
          
          <details class="group rounded-lg bg-muted p-4">
            <summary class="flex cursor-pointer items-center justify-between font-medium">
              <span>How can I contact my teacher?</span>
              <ChevronDown size="24" class="transition duration-300 group-open:rotate-180" />
            </summary>
            <div class="mt-3 text-muted-foreground">
              <p>
                You can message your teacher directly through the Communication tab in your dashboard. Select your teacher's name from your contacts list, compose your message, and send. Teachers typically respond within 24-48 hours on school days.
              </p>
            </div>
          </details>
          
          <details class="group rounded-lg bg-muted p-4">
            <summary class="flex cursor-pointer items-center justify-between font-medium">
              <span>Can I access the system on my mobile device?</span>
              <ChevronDown size="24" class="transition duration-300 group-open:rotate-180" />
            </summary>
            <div class="mt-3 text-muted-foreground">
              <p>
                Yes, our platform is fully responsive and works on all devices. For the best mobile experience, we recommend downloading our dedicated mobile app available for iOS and Android devices from the respective app stores.
              </p>
            </div>
          </details>
          
          <details class="group rounded-lg bg-muted p-4">
            <summary class="flex cursor-pointer items-center justify-between font-medium">
              <span>How do I view my grades?</span>
              <ChevronDown size="24" class="transition duration-300 group-open:rotate-180" />
            </summary>
            <div class="mt-3 text-muted-foreground">
              <p>
                To view your grades, log in to your account and navigate to the "Grades" section from your dashboard. Here you'll find all your courses listed with current grades, assignment scores, and academic progress over time.
              </p>
            </div>
          </details>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="text-center">
        <h2 class="text-2xl font-bold mb-4">Need More Help?</h2>
        <p class="mb-6 max-w-2xl mx-auto text-muted-foreground">
          If you couldn't find what you're looking for, our support team is ready to assist you.
        </p>
        <NuxtLink to="/support">
          <Button size="lg">Contact Support</Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
