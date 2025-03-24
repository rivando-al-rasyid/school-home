<template>
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center" data-aos="fade-down">School Events</h1>
    
    <div class="max-w-6xl mx-auto">
      <!-- Upcoming Events Hero -->
      <div class="relative overflow-hidden rounded-lg mb-16" data-aos="zoom-in">
        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80" alt="School event" class="w-full h-64 md:h-96 object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div class="p-6 text-white">
            <div class="inline-flex items-center bg-primary px-3 py-1 rounded-full text-white text-sm font-medium mb-3">
              <Calendar size="16" class="mr-1" />
              April 15, 2025
            </div>
            <h2 class="text-3xl font-bold mb-2">Annual Science Fair</h2>
            <p class="mb-4 max-w-2xl">Join us for a day of innovation and discovery as students showcase their scientific projects and experiments. Open to all students, parents, and community members.</p>
            <Button variant="secondary">Register to Attend</Button>
          </div>
        </div>
      </div>
      
      <!-- Events Filter -->
      <div class="flex flex-col md:flex-row gap-4 items-center justify-between mb-10" data-aos="fade-up">
        <div class="flex items-center gap-2">
          <Button variant="outline" class="bg-primary/10 text-primary">All Events</Button>
          <Button variant="outline">Academic</Button>
          <Button variant="outline">Sports</Button>
          <Button variant="outline">Arts</Button>
          <Button variant="outline">Community</Button>
        </div>
        
        <div class="relative w-full md:w-64">
          <Search size="20" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search events..."
            class="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>
      
      <!-- Events Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <!-- Event 1 -->
        <Card class="overflow-hidden shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80" alt="Parent-Teacher Conference" class="w-full h-full object-cover" />
            <div class="absolute top-3 left-3 bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded">Academic</div>
          </div>
          <CardContent class="pt-6">
            <div class="flex items-center text-muted-foreground text-sm mb-2">
              <Calendar size="16" class="mr-1" />
              April 5, 2025
              <span class="mx-2">|</span>
              <Clock size="16" class="mr-1" />
              4:00 PM - 7:00 PM
            </div>
            <h3 class="text-xl font-bold mb-2">Parent-Teacher Conference</h3>
            <p class="text-muted-foreground mb-4">
              One-on-one meetings with teachers to discuss student progress and address any concerns.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <MapPin size="16" class="mr-1 text-muted-foreground" />
                <span class="text-sm text-muted-foreground">Main Building</span>
              </div>
              <Button variant="link" class="p-0">Learn More</Button>
            </div>
          </CardContent>
        </Card>
        
        <!-- Event 2 -->
        <Card class="overflow-hidden shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="150">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1574279606130-09958dc756f7?auto=format&fit=crop&q=80" alt="Spring Concert" class="w-full h-full object-cover" />
            <div class="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">Arts</div>
          </div>
          <CardContent class="pt-6">
            <div class="flex items-center text-muted-foreground text-sm mb-2">
              <Calendar size="16" class="mr-1" />
              April 18, 2025
              <span class="mx-2">|</span>
              <Clock size="16" class="mr-1" />
              6:30 PM - 8:30 PM
            </div>
            <h3 class="text-xl font-bold mb-2">Spring Concert</h3>
            <p class="text-muted-foreground mb-4">
              Join us for a magical evening of music as our talented students perform a variety of pieces.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <MapPin size="16" class="mr-1 text-muted-foreground" />
                <span class="text-sm text-muted-foreground">Auditorium</span>
              </div>
              <Button variant="link" class="p-0">Learn More</Button>
            </div>
          </CardContent>
        </Card>
        
        <!-- Event 3 -->
        <Card class="overflow-hidden shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&q=80" alt="Basketball Tournament" class="w-full h-full object-cover" />
            <div class="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">Sports</div>
          </div>
          <CardContent class="pt-6">
            <div class="flex items-center text-muted-foreground text-sm mb-2">
              <Calendar size="16" class="mr-1" />
              April 22-24, 2025
              <span class="mx-2">|</span>
              <Clock size="16" class="mr-1" />
              All Day
            </div>
            <h3 class="text-xl font-bold mb-2">Inter-School Basketball Tournament</h3>
            <p class="text-muted-foreground mb-4">
              Cheer for our school team as they compete against other schools in this exciting tournament.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <MapPin size="16" class="mr-1 text-muted-foreground" />
                <span class="text-sm text-muted-foreground">Sports Complex</span>
              </div>
              <Button variant="link" class="p-0">Learn More</Button>
            </div>
          </CardContent>
        </Card>
        
        <!-- Event 4 -->
        <Card class="overflow-hidden shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="250">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80" alt="Career Day" class="w-full h-full object-cover" />
            <div class="absolute top-3 left-3 bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded">Academic</div>
          </div>
          <CardContent class="pt-6">
            <div class="flex items-center text-muted-foreground text-sm mb-2">
              <Calendar size="16" class="mr-1" />
              May 10, 2025
              <span class="mx-2">|</span>
              <Clock size="16" class="mr-1" />
              9:00 AM - 3:00 PM
            </div>
            <h3 class="text-xl font-bold mb-2">Career Day</h3>
            <p class="text-muted-foreground mb-4">
              Explore various career paths with presentations from professionals across different industries.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <MapPin size="16" class="mr-1 text-muted-foreground" />
                <span class="text-sm text-muted-foreground">Conference Hall</span>
              </div>
              <Button variant="link" class="p-0">Learn More</Button>
            </div>
          </CardContent>
        </Card>
        
        <!-- Event 5 -->
        <Card class="overflow-hidden shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80" alt="Charity Fundraiser" class="w-full h-full object-cover" />
            <div class="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">Community</div>
          </div>
          <CardContent class="pt-6">
            <div class="flex items-center text-muted-foreground text-sm mb-2">
              <Calendar size="16" class="mr-1" />
              May 15, 2025
              <span class="mx-2">|</span>
              <Clock size="16" class="mr-1" />
              1:00 PM - 6:00 PM
            </div>
            <h3 class="text-xl font-bold mb-2">Community Charity Fundraiser</h3>
            <p class="text-muted-foreground mb-4">
              Join our annual fundraising event to support local charities and make a difference in our community.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <MapPin size="16" class="mr-1 text-muted-foreground" />
                <span class="text-sm text-muted-foreground">School Grounds</span>
              </div>
              <Button variant="link" class="p-0">Learn More</Button>
            </div>
          </CardContent>
        </Card>
        
        <!-- Event 6 -->
        <Card class="overflow-hidden shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="350">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80" alt="Graduation Ceremony" class="w-full h-full object-cover" />
            <div class="absolute top-3 left-3 bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded">Academic</div>
          </div>
          <CardContent class="pt-6">
            <div class="flex items-center text-muted-foreground text-sm mb-2">
              <Calendar size="16" class="mr-1" />
              June 15, 2025
              <span class="mx-2">|</span>
              <Clock size="16" class="mr-1" />
              10:00 AM - 12:30 PM
            </div>
            <h3 class="text-xl font-bold mb-2">Graduation Ceremony</h3>
            <p class="text-muted-foreground mb-4">
              Celebrate the achievements of our graduating students as they embark on the next chapter of their lives.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <MapPin size="16" class="mr-1 text-muted-foreground" />
                <span class="text-sm text-muted-foreground">Main Hall</span>
              </div>
              <Button variant="link" class="p-0">Learn More</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <!-- Pagination -->
      <div class="flex justify-center mb-16" data-aos="fade-up" data-aos-delay="100">
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
      
      <!-- Calendar -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-6">Events Calendar</h2>
        <div class="border rounded-lg overflow-hidden">
          <div class="bg-muted p-4 flex items-center justify-between">
            <h3 class="font-semibold">April 2025</h3>
            <div class="flex gap-1">
              <Button variant="outline" size="sm">
                <ChevronLeft size="16" />
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight size="16" />
              </Button>
            </div>
          </div>
          <div class="grid grid-cols-7 text-center font-semibold bg-muted/50 p-2">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div class="grid grid-cols-7 text-center">
            <div class="p-2 text-muted-foreground">30</div>
            <div class="p-2 text-muted-foreground">31</div>
            <div class="p-2">1</div>
            <div class="p-2">2</div>
            <div class="p-2">3</div>
            <div class="p-2">4</div>
            <div class="p-2 relative">
              5
              <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
            </div>
            <div class="p-2">6</div>
            <div class="p-2">7</div>
            <div class="p-2">8</div>
            <div class="p-2">9</div>
            <div class="p-2">10</div>
            <div class="p-2">11</div>
            <div class="p-2">12</div>
            <div class="p-2">13</div>
            <div class="p-2">14</div>
            <div class="p-2 relative">
              15
              <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
            </div>
            <div class="p-2">16</div>
            <div class="p-2">17</div>
            <div class="p-2 relative">
              18
              <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full"></div>
            </div>
            <div class="p-2">19</div>
            <div class="p-2">20</div>
            <div class="p-2">21</div>
            <div class="p-2 relative">
              22
              <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-600 rounded-full"></div>
            </div>
            <div class="p-2 relative">
              23
              <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-600 rounded-full"></div>
            </div>
            <div class="p-2 relative">
              24
              <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-600 rounded-full"></div>
            </div>
            <div class="p-2">25</div>
            <div class="p-2">26</div>
            <div class="p-2">27</div>
            <div class="p-2">28</div>
            <div class="p-2">29</div>
            <div class="p-2">30</div>
            <div class="p-2 text-muted-foreground">1</div>
            <div class="p-2 text-muted-foreground">2</div>
            <div class="p-2 text-muted-foreground">3</div>
          </div>
        </div>
      </div>
      
      <!-- Subscribe Section -->
      <div class="bg-muted rounded-lg p-8 text-center mb-10" data-aos="zoom-in" data-aos-delay="150">
        <h2 class="text-2xl font-bold mb-4">Stay Updated</h2>
        <p class="mb-6 max-w-2xl mx-auto text-muted-foreground">
          Subscribe to our events newsletter to receive notifications about upcoming school events.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input type="email" placeholder="Your email address" class="flex-grow" />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube 
} from 'lucide-vue-next';
</script>
