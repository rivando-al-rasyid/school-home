<template>
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center">Contact Us</h1>
    
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <h2 class="text-2xl font-semibold mb-6">Contact Information</h2>
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="bg-primary/10 p-3 rounded-full text-primary">
                <MapPin size="20" />
              </div>
              <div>
                <h3 class="font-semibold">Our Address</h3>
                <p class="text-muted-foreground mt-1">123 Education Lane, Learning City, ED 54321</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="bg-primary/10 p-3 rounded-full text-primary">
                <Phone size="20" />
              </div>
              <div>
                <h3 class="font-semibold">Phone Number</h3>
                <p class="text-muted-foreground mt-1">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="bg-primary/10 p-3 rounded-full text-primary">
                <Mail size="20" />
              </div>
              <div>
                <h3 class="font-semibold">Email Address</h3>
                <p class="text-muted-foreground mt-1">info@schoolmanagementsystem.com</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="bg-primary/10 p-3 rounded-full text-primary">
                <Clock size="20" />
              </div>
              <div>
                <h3 class="font-semibold">Support Hours</h3>
                <p class="text-muted-foreground mt-1">Monday - Friday: 8:00 AM to 6:00 PM</p>
                <p class="text-muted-foreground">Saturday: 9:00 AM to 1:00 PM</p>
              </div>
            </div>
          </div>
          
          <div class="mt-10">
            <h3 class="text-xl font-semibold mb-4">Connect With Us</h3>
            <div class="flex space-x-4">
              <Facebook size="20" class="text-primary hover:text-primary/80 transition-colors cursor-pointer" />
              <Twitter size="20" class="text-primary hover:text-primary/80 transition-colors cursor-pointer" />
              <Instagram size="20" class="text-primary hover:text-primary/80 transition-colors cursor-pointer" />
              <Linkedin size="20" class="text-primary hover:text-primary/80 transition-colors cursor-pointer" />
            </div>
          </div>
          
          <div class="mt-10">
            <h3 class="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible class="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I get started with the platform?</AccordionTrigger>
                <AccordionContent>
                  Simply click on the Register button and create an account with your email address. Select your role (student, teacher, or parent) and follow the setup instructions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is my data secure on your platform?</AccordionTrigger>
                <AccordionContent>
                  Yes, we take data security very seriously. We use encryption and follow all educational data privacy laws to ensure your information is protected.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I access the system on mobile devices?</AccordionTrigger>
                <AccordionContent>
                  Yes, our platform is fully responsive and works on all devices including smartphones and tablets. We also offer dedicated mobile apps for iOS and Android.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div class="mt-4">
              <NuxtLink to="/faq" class="text-primary hover:underline">View all FAQs →</NuxtLink>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div>
          <Card class="shadow-lg">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div class="space-y-2">
                    <Label for="firstName">First Name</Label>
                    <Input id="firstName" v-model="form.firstName" placeholder="John" required />
                  </div>
                  <div class="space-y-2">
                    <Label for="lastName">Last Name</Label>
                    <Input id="lastName" v-model="form.lastName" placeholder="Doe" required />
                  </div>
                </div>
                
                <div class="space-y-2">
                  <Label for="email">Email</Label>
                  <Input id="email" v-model="form.email" type="email" placeholder="john.doe@example.com" required />
                </div>
                
                <div class="space-y-2">
                  <Label for="phone">Phone (Optional)</Label>
                  <Input id="phone" v-model="form.phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                
                <div class="space-y-2">
                  <Label for="subject">Subject</Label>
                  <Select v-model="form.subject">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="feedback">Feedback/Suggestion</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div class="space-y-2">
                  <Label for="message">Message</Label>
                  <Textarea id="message" v-model="form.message" placeholder="Your message here..." rows="5" required />
                </div>
                
                <Button type="submit" class="w-full" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <!-- Map Section -->
      <div class="mt-16">
        <h2 class="text-2xl font-semibold mb-6 text-center">Our Location</h2>
        <div class="aspect-video rounded-lg border overflow-hidden">
          <img src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l+4264fb(-122.4194,37.7749)/[-122.4194,37.7749,13]/800x400@2x?access_token=pk.example" alt="Office Location Map" class="w-full h-full object-cover" />
        </div>
        <p class="text-center text-muted-foreground mt-4">
          Our main office is conveniently located in downtown Learning City, with easy access to public transportation.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;
  
  try {
    // Here you would typically make an API call to send the form data
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset the form after successful submission
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
    
    alert('Thank you for your message! We will get back to you soon.');
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was an error sending your message. Please try again later.');
  } finally {
    isSubmitting.value = false;
  }
};
</script>
