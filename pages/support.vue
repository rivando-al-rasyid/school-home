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
              <NuxtIcon name="lucide:life-buoy" size="24" />
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
              <NuxtIcon name="lucide:message-circle" size="24" />
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
              <NuxtIcon name="lucide:mail" size="24" />
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
          
          <form class="space-y-4" @submit.prevent="handleSubmit">
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
                  <NuxtIcon name="lucide:phone" class="mr-2 text-primary" size="20" />
                  <span>1-800-123-4567</span>
                </div>
                <div class="flex items-center">
                  <NuxtIcon name="lucide:mail" class="mr-2 text-primary" size="20" />
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
                <NuxtIcon name="lucide:mail" class="mr-2 text-primary" size="20" />
                <span>emergency@schoolsystem.edu</span>
              </div>
            </div>
            
            <div class="border-t pt-6">
              <h3 class="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              
              <details class="group mb-3">
                <summary class="flex cursor-pointer items-center justify-between rounded-lg bg-muted p-4">
                  <span class="font-medium">What is the average response time?</span>
                  <NuxtIcon name="lucide:chevron-down" class="transition duration-300 group-open:rotate-180" size="24" />
                </summary>
                <div class="px-4 pt-2 pb-4 text-muted-foreground">
                  <p>During business hours, our average response time is under 2 hours. For inquiries submitted outside business hours, you can expect a response the next business day.</p>
                </div>
              </details>
              
              <details class="group">
                <summary class="flex cursor-pointer items-center justify-between rounded-lg bg-muted p-4">
                  <span class="font-medium">Do you offer phone support?</span>
                  <NuxtIcon name="lucide:chevron-down" class="transition duration-300 group-open:rotate-180" size="24" />
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
                <NuxtIcon name="lucide:headset" size="24" />
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
                <NuxtIcon name="lucide:phone" size="24" />
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
                <NuxtIcon name="lucide:message-square" size="24" />
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
                <NuxtIcon name="lucide:mail" size="24" />
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
