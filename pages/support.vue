<template>
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center">Support Center</h1>
    
    <div class="max-w-6xl mx-auto">
      <!-- Introduction section -->
      <div class="text-center mb-12">
        <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
          We're here to help you make the most of our school management system. 
          Browse our support resources or reach out directly for personalized assistance.
        </p>
      </div>
      
      <!-- Quick Help Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card class="text-center shadow-sm hover:shadow-md transition-shadow">
          <CardContent class="pt-6">
            <div class="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">FAQs</h3>
            <p class="text-muted-foreground mb-4">
              Find quick answers to the most common questions about our platform.
            </p>
            <NuxtLink to="/tutorials#faq">
              <Button variant="outline" class="w-full">Browse FAQs</Button>
            </NuxtLink>
          </CardContent>
        </Card>
        
        <Card class="text-center shadow-sm hover:shadow-md transition-shadow">
          <CardContent class="pt-6">
            <div class="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Video Guides</h3>
            <p class="text-muted-foreground mb-4">
              Watch step-by-step tutorials on how to use all features of our platform.
            </p>
            <NuxtLink to="/tutorials#videos">
              <Button variant="outline" class="w-full">Watch Tutorials</Button>
            </NuxtLink>
          </CardContent>
        </Card>
        
        <Card class="text-center shadow-sm hover:shadow-md transition-shadow">
          <CardContent class="pt-6">
            <div class="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Live Chat</h3>
            <p class="text-muted-foreground mb-4">
              Chat with our support team in real-time during business hours.
            </p>
            <Button variant="outline" class="w-full">Start Chat</Button>
          </CardContent>
        </Card>
      </div>
      
      <!-- Contact Form Section -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 class="text-2xl font-bold mb-6">Contact Support</h2>
          <p class="text-muted-foreground mb-6">
            Fill out the form and our support team will get back to you as soon as possible, 
            usually within 24 hours on business days.
          </p>
          
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <Label for="name">Full Name</Label>
              <Input id="name" v-model="formData.name" type="text" placeholder="Your name" required />
            </div>
            
            <div>
              <Label for="email">Email</Label>
              <Input id="email" v-model="formData.email" type="email" placeholder="your.email@example.com" required />
            </div>
            
            <div>
              <Label for="userType">I am a</Label>
              <Select v-model="formData.userType">
                <SelectTrigger>
                  <SelectValue placeholder="Please select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="parent">Parent</SelectItem>
                  <SelectItem value="administrator">Administrator</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label for="subject">Subject</Label>
              <Select v-model="formData.subject">
                <SelectTrigger>
                  <SelectValue placeholder="Please select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="account">Account Issue</SelectItem>
                  <SelectItem value="technical">Technical Problem</SelectItem>
                  <SelectItem value="billing">Billing Question</SelectItem>
                  <SelectItem value="feature">Feature Request</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label for="message">Message</Label>
              <Textarea 
                id="message" 
                v-model="formData.message" 
                placeholder="Please describe your issue in detail..." 
                rows="5"
                required
              />
            </div>
            
            <div class="flex items-center space-x-2">
              <Checkbox id="terms" v-model="formData.terms" />
              <label for="terms" class="text-sm text-muted-foreground">
                I agree to the processing of my personal data as described in the
                <NuxtLink to="/terms" class="text-primary underline">Privacy Policy</NuxtLink>.
              </label>
            </div>
            
            <Button type="submit" class="w-full">Submit Request</Button>
          </form>
        </div>
        
        <div>
          <h2 class="text-2xl font-bold mb-6">Support Information</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-2">Business Hours</h3>
              <p class="text-muted-foreground">
                Our support team is available Monday through Friday from 8:00 AM to 8:00 PM EST, and Saturday from 9:00 AM to 5:00 PM EST.
              </p>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold mb-2">Contact Information</h3>
              <div class="space-y-3">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-primary">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>1-800-123-4567</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-primary">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>support@schoolsystem.edu</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold mb-2">Emergency Support</h3>
              <p class="text-muted-foreground mb-2">
                For urgent matters that require immediate attention outside of normal business hours:
              </p>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-primary">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>emergency@schoolsystem.edu</span>
              </div>
            </div>
            
            <div class="border-t pt-6">
              <h3 class="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              
              <details class="group mb-3">
                <summary class="flex cursor-pointer items-center justify-between rounded-lg bg-muted p-4">
                  <span class="font-medium">What is the average response time?</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition duration-300 group-open:rotate-180">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div class="px-4 pt-2 pb-4 text-muted-foreground">
                  <p>During business hours, our average response time is under 2 hours. For inquiries submitted outside business hours, you can expect a response the next business day.</p>
                </div>
              </details>
              
              <details class="group">
                <summary class="flex cursor-pointer items-center justify-between rounded-lg bg-muted p-4">
                  <span class="font-medium">Do you offer phone support?</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition duration-300 group-open:rotate-180">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div class="px-4 pt-2 pb-4 text-muted-foreground">
                  <p>Yes, phone support is available during our business hours. For complex issues, we recommend submitting a support ticket first so our team can gather necessary information before the call.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Self-Help Resources -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-6 text-center">Self-Help Resources</h2>
        
        <div class="grid md:grid-cols-4 gap-6">
          <Card class="shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <CardContent class="pt-6">
              <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3 class="text-center font-semibold mb-2">Knowledge Base</h3>
              <p class="text-center text-sm text-muted-foreground">
                Browse articles and guides on all platform features
              </p>
            </CardContent>
          </Card>
          
          <Card class="shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <CardContent class="pt-6">
              <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <h3 class="text-center font-semibold mb-2">Documentation</h3>
              <p class="text-center text-sm text-muted-foreground">
                Technical documentation for advanced users
              </p>
            </CardContent>
          </Card>
          
          <Card class="shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <CardContent class="pt-6">
              <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h3 class="text-center font-semibold mb-2">Community Forum</h3>
              <p class="text-center text-sm text-muted-foreground">
                Connect with other users and share solutions
              </p>
            </CardContent>
          </Card>
          
          <Card class="shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <CardContent class="pt-6">
              <div class="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 class="text-center font-semibold mb-2">Webinars</h3>
              <p class="text-center text-sm text-muted-foreground">
                Register for upcoming training sessions
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <!-- Feedback Section -->
      <div class="bg-muted rounded-lg p-8 text-center">
        <h2 class="text-2xl font-bold mb-4">Help Us Improve</h2>
        <p class="mb-6 max-w-2xl mx-auto text-muted-foreground">
          We're constantly working to improve our support services. Share your feedback to help us serve you better.
        </p>
        <Button variant="outline">Share Feedback</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

const formData = ref({
  name: '',
  email: '',
  userType: '',
  subject: '',
  message: '',
  terms: false
});

const handleSubmit = () => {
  // Here would be the logic to submit the form data
  console.log('Form submitted:', formData.value);
  alert('Thank you for contacting support. We will get back to you soon!');
  // Reset the form after submission
  formData.value = {
    name: '',
    email: '',
    userType: '',
    subject: '',
    message: '',
    terms: false
  };
};
</script>
