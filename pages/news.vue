<template>
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center">School News</h1>
    
    <div class="max-w-6xl mx-auto">
<!-- Featured News -->
<div class="space-y-8 mb-16">
  <!-- Featured Article (Atas) -->
  <div class="w-full">
    <div class="relative rounded-lg overflow-hidden shadow-lg">
      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" alt="Featured news" class="w-full h-80 object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
        <div class="p-6 text-white">
          <div class="inline-flex items-center bg-primary px-3 py-1 rounded-full text-white text-sm font-medium mb-3">
            <Calendar size="16" class="mr-1" />
            March 24, 2025
          </div>
          <h2 class="text-3xl font-bold mb-2">School Achieves Outstanding Results in National Assessment</h2>
          <p class="mb-4">Our students have exceeded national averages across all subjects, demonstrating remarkable academic progress over the past year.</p>
          <NuxtLink to="/news/school-achieves-outstanding-results-in-national-assessment">
            <Button variant="secondary">Read Full Story</Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <!-- Side News (Bawah) -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card class="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div class="relative h-40 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1546519638-68e109acd27d?auto=format&fit=crop&q=80" alt="STEM Workshop" class="w-full h-full object-cover" />
        <div class="absolute top-3 left-3 bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded">Academic</div>
      </div>
      <CardContent class="pt-4">
        <div class="flex items-center text-muted-foreground text-sm mb-2">
          <Calendar size="16" class="mr-1" />
          March 20, 2025
        </div>
        <h3 class="text-lg font-bold mb-1">New STEM Lab Opens for Students</h3>
        <p class="text-muted-foreground text-sm mb-2">State-of-the-art facility provides hands-on learning opportunities in science and technology.</p>
        <NuxtLink to="/news/new-stem-lab-opens-for-students">
          <Button variant="link" class="p-0 h-auto text-sm">Read More</Button>
        </NuxtLink>
      </CardContent>
    </Card>

    <Card class="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div class="relative h-40 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?auto=format&fit=crop&q=80" alt="Sports Achievements" class="w-full h-full object-cover" />
        <div class="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">Sports</div>
      </div>
      <CardContent class="pt-4">
        <div class="flex items-center text-muted-foreground text-sm mb-2">
          <Calendar size="16" class="mr-1" />
          March 15, 2025
        </div>
        <h3 class="text-lg font-bold mb-1">Swimming Team Wins Regional Championship</h3>
        <p class="text-muted-foreground text-sm mb-2">Our swim team brought home five gold medals and set two new regional records.</p>
        <NuxtLink to="/news/swimming-team-wins-regional-championship">
          <Button variant="link" class="p-0 h-auto text-sm">Read More</Button>
        </NuxtLink>
      </CardContent>
    </Card>
  </div>
</div>

<!-- News Filter -->
<div class="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
  <div class="flex items-center gap-2">
    <Button variant="outline" class="bg-primary/10 text-primary">All News</Button>
    <Button variant="outline">Academic</Button>
    <Button variant="outline">Sports</Button>
          <Button variant="outline">Arts</Button>
          <Button variant="outline">Community</Button>
        </div>
        
        <div class="relative w-full md:w-64">
          <Search size="20" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search news..."
            class="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>
      
      <!-- News Grid -->
      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <!-- News 1 -->
        <Card class="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80" alt="Curriculum Update" class="w-full h-full object-cover" />
            <div class="absolute top-3 left-3 bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded">Academic</div>
          </div>
          <CardContent class="pt-6">
            <div class="flex items-center text-muted-foreground text-sm mb-2">
              <Calendar size="16" class="mr-1" />
              March 10, 2025
            </div>
            <h3 class="text-xl font-bold mb-2">New Curriculum Announced for Next Academic Year</h3>
            <p class="text-muted-foreground mb-4">
              Updated curriculum introduces innovative teaching methods and enhanced focus on digital literacy skills for all grade levels.
            </p>
            <NuxtLink to="/news/new-curriculum-announced-for-next-academic-year">
              <Button variant="link" class="p-0">Read Full Story</Button>
            </NuxtLink>
          </CardContent>
        </Card>
        
        <!-- News 2 -->
        <Card class="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80" alt="Parent Workshop" class="w-full h-full object-cover" />
            <div class="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">Community</div>
          </div>
          <CardContent class="pt-6">
            <div class="flex items-center text-muted-foreground text-sm mb-2">
              <Calendar size="16" class="mr-1" />
              March 5, 2025
            </div>
            <h3 class="text-xl font-bold mb-2">Parent Workshop on Digital Safety Well-Attended</h3>
            <p class="text-muted-foreground mb-4">
              Over 200 parents participated in our workshop on keeping children safe online and promoting responsible digital citizenship.
            </p>
            <NuxtLink to="/news/parent-workshop-on-digital-safety-well-attended">
              <Button variant="link" class="p-0">Read Full Story</Button>
            </NuxtLink>
          </CardContent>
        </Card>
        
        <!-- News 3 -->
        <Card class="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1574283073530-b9b1a420758a?auto=format&fit=crop&q=80" alt="Art Exhibition" class="w-full h-full object-cover" />
            <div class="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">Arts</div>
          </div>
          <CardContent class="pt-6">
            <div class="flex items-center text-muted-foreground text-sm mb-2">
              <Calendar size="16" class="mr-1" />
              February 28, 2025
            </div>
            <h3 class="text-xl font-bold mb-2">Student Art Exhibition Opens at Local Gallery</h3>
            <p class="text-muted-foreground mb-4">
              Artwork from students across all grades is now on display at the Central Community Gallery, showcasing remarkable talent and creativity.
            </p>
            <NuxtLink to="/news/student-art-exhibition-opens-at-local-gallery">
              <Button variant="link" class="p-0">Read Full Story</Button>
            </NuxtLink>
          </CardContent>
        </Card>
        
        <!-- News 4 -->
        <Card class="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80" alt="Robotics Competition" class="w-full h-full object-cover" />
            <div class="absolute top-3 left-3 bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded">Academic</div>
          </div>
          <CardContent class="pt-6">
            <div class="flex items-center text-muted-foreground text-sm mb-2">
              <Calendar size="16" class="mr-1" />
              February 25, 2025
            </div>
            <h3 class="text-xl font-bold mb-2">Robotics Team Qualifies for National Competition</h3>
            <p class="text-muted-foreground mb-4">
              Our school robotics team has secured a spot in the National Robotics Championship after an impressive performance at regionals.
            </p>
            <NuxtLink to="/news/robotics-team-qualifies-for-national-competition">
              <Button variant="link" class="p-0">Read Full Story</Button>
            </NuxtLink>
          </CardContent>
        </Card>
        
        <!-- News 5 -->
        <Card class="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1551966775-a4ddc8df052b?auto=format&fit=crop&q=80" alt="School Renovation" class="w-full h-full object-cover" />
            <div class="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">Community</div>
          </div>
          <CardContent class="pt-6">
            <div class="flex items-center text-muted-foreground text-sm mb-2">
              <Calendar size="16" class="mr-1" />
              February 20, 2025
            </div>
            <h3 class="text-xl font-bold mb-2">Library Renovation Project Completed Ahead of Schedule</h3>
            <p class="text-muted-foreground mb-4">
              The newly renovated library features expanded study spaces, digital research stations, and thousands of new books and resources.
            </p>
            <NuxtLink to="/news/library-renovation-project-completed-ahead-of-schedule">
              <Button variant="link" class="p-0">Read Full Story</Button>
            </NuxtLink>
          </CardContent>
        </Card>
        
        <!-- News 6 -->
        <Card class="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80" alt="International Exchange" class="w-full h-full object-cover" />
            <div class="absolute top-3 left-3 bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded">Academic</div>
          </div>
          <CardContent class="pt-6">
            <div class="flex items-center text-muted-foreground text-sm mb-2">
              <Calendar size="16" class="mr-1" />
              February 15, 2025
            </div>
            <h3 class="text-xl font-bold mb-2">New International Exchange Program with Schools in Japan</h3>
            <p class="text-muted-foreground mb-4">
              Ten students will participate in our new exchange program with Osaka International School, enhancing cultural understanding and global perspective.
            </p>
            <NuxtLink to="/news/new-international-exchange-program-with-schools-in-japan">
              <Button variant="link" class="p-0">Read Full Story</Button>
            </NuxtLink>
          </CardContent>
        </Card>
      </div>
      
      <!-- Pagination -->
      <div class="flex justify-center mb-16">
        <Button variant="outline" size="sm" disabled class="mr-2">
          <ChevronLeft size="16" class="mr-1" />
          Previous
        </Button>
        <Button variant="outline" size="sm" class="bg-primary/10 text-primary mr-1">1</Button>
        <Button variant="outline" size="sm" class="mr-1">2</Button>
        <Button variant="outline" size="sm" class="mr-1">3</Button>
        <Button variant="outline" size="sm" class="mr-2">
          Next
          <ChevronRight size="16" class="ml-1" />
        </Button>
      </div>
      
      <!-- Newsletter Section -->
      <div class="bg-muted rounded-lg p-8 text-center mb-10">
        <h2 class="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p class="mb-6 max-w-2xl mx-auto text-muted-foreground">
          Stay informed about school news, events, and important announcements by subscribing to our weekly newsletter.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input type="email" v-model="newsletterEmail" placeholder="Your email address" class="flex-grow" />
          <Button @click="subscribeToNewsletter">Subscribe</Button>
        </div>
      </div>
      
      <!-- School Social Media -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-6 text-center">Follow Us on Social Media</h2>
        <div class="flex justify-center gap-6">
          <a href="#" class="h-12 w-12 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Facebook size="24" />
          </a>
          <a href="#" class="h-12 w-12 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Twitter size="24" />
          </a>
          <a href="#" class="h-12 w-12 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Instagram size="24" />
          </a>
          <a href="#" class="h-12 w-12 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Youtube size="24" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Search, ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Youtube } from 'lucide-vue-next';
import { ref } from 'vue';

const newsletterEmail = ref('');

const subscribeToNewsletter = () => {
  if (newsletterEmail.value) {
    // In a real application, this would send the email to a backend service
    alert(`Thank you for subscribing with ${newsletterEmail.value}!`);
    newsletterEmail.value = '';
  } else {
    alert('Please enter a valid email address.');
  }
};
</script>
