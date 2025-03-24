<template>
  <!-- Hero Section with Carousel -->
  <section class="relative h-[600px] overflow-hidden">
    <Carousel
      class="h-full"
      :plugins="[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
          stopOnMouseEnter: true
        })
      ]"
    >
      <CarouselContent>
        <CarouselItem v-for="slide in slides" :key="slide.id" class="h-full">
          <div class="relative h-full">
            <img :src="`${slide.src}?w=1600&auto=format&fit=crop&q=80`" :alt="slide.alt" class="h-full w-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 class="mb-2 text-3xl font-bold">{{ slide.caption }}</h2>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>

    <!-- Hero Content -->
    <div class="absolute inset-0 flex items-center justify-center text-center">
      <div class="max-w-3xl px-4">
        <h1 class="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl" data-aos="fade-down">
          School Management System
        </h1>
        <p class="mb-8 text-xl text-white md:text-2xl" data-aos="fade-up" data-aos-delay="200">
          A comprehensive platform for students, teachers, and parents
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row" data-aos="fade-up" data-aos-delay="400">
          <NuxtLink to="/register">
            <Button variant="default" size="lg">Get Started</Button>
          </NuxtLink>
          <NuxtLink to="/login">
            <Button variant="outline" size="lg" class="border-white hover:bg-white/20">Log In</Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Quick Info Stats Section -->
  <section class="py-12 bg-muted">
    <div class="container px-4 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Upcoming Events -->
        <Card data-aos="fade-up" data-aos-delay="100">
          <CardHeader>
            <CardTitle class="flex items-center">
              <Icon name="lucide:calendar" style="color: black" class="mr-2" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              <div v-for="event in events" :key="event.id" class="border-b pb-3 last:border-b-0 last:pb-0">
                <div class="text-sm text-muted-foreground">{{ new Date(event.date).toLocaleDateString() }}</div>
                <div class="font-medium">{{ event.title }}</div>
                <div class="text-sm text-muted-foreground">{{ event.description }}</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <NuxtLink to="/events">
              <Button variant="outline" class="w-full">View All Events</Button>
            </NuxtLink>
          </CardFooter>
        </Card>

        <!-- Latest News -->
        <Card data-aos="fade-up" data-aos-delay="200">
          <CardHeader>
            <CardTitle class="flex items-center">
              <Icon name="lucide:file-text" style="color: black" class="mr-2" />
              Latest News
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              <div v-for="item in news" :key="item.id" class="border-b pb-3 last:border-b-0 last:pb-0">
                <div class="text-sm text-muted-foreground">{{ new Date(item.created_at).toLocaleDateString() }}</div>
                <div class="font-medium">{{ item.title }}</div>
                <div class="text-sm text-muted-foreground">{{ item.description }}</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <NuxtLink to="/news">
              <Button variant="outline" class="w-full">All News</Button>
            </NuxtLink>
          </CardFooter>
        </Card>

        <!-- Quick Links -->
        <Card data-aos="fade-up" data-aos-delay="300">
          <CardHeader>
            <CardTitle class="flex items-center">
              <Icon name="lucide:link" style="color: black" class="mr-2" />
              Quick Links
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-2">
              <NuxtLink to="/students" class="block p-2 rounded-md hover:bg-accent transition-colors">
                <div class="font-medium">Student Portal</div>
                <div class="text-sm text-muted-foreground">Access your courses and grades</div>
              </NuxtLink>
              <NuxtLink to="/teachers" class="block p-2 rounded-md hover:bg-accent transition-colors">
                <div class="font-medium">Teacher Portal</div>
                <div class="text-sm text-muted-foreground">Manage classes and assignments</div>
              </NuxtLink>
              <NuxtLink to="/parents" class="block p-2 rounded-md hover:bg-accent transition-colors">
                <div class="font-medium">Parent Portal</div>
                <div class="text-sm text-muted-foreground">Monitor your child's progress</div>
              </NuxtLink>
              <NuxtLink to="/features" class="block p-2 rounded-md hover:bg-accent transition-colors">
                <div class="font-medium">Platform Features</div>
                <div class="text-sm text-muted-foreground">Explore our complete feature set</div>
              </NuxtLink>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

  <!-- Featured Sections -->
  <section class="py-12 container px-4 mx-auto">
    <h2 class="text-3xl font-bold text-center mb-10">Discover Our Platform</h2>
    
    <div class="grid md:grid-cols-2 gap-8 mb-12">
      <div data-aos="fade-right">
        <NuxtLink to="/features">
          <Card class="overflow-hidden h-full hover:shadow-lg transition-shadow">
            <div class="aspect-video">
              <img src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80" alt="Features" class="w-full h-full object-cover" />
            </div>
            <CardContent class="p-6">
              <h3 class="text-2xl font-bold mb-2">Powerful Features</h3>
              <p class="text-muted-foreground">Explore the comprehensive tools and capabilities that make our platform the perfect solution for educational management.</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" class="px-0">
                Learn More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ml-1">
                  <path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd" />
                </svg>
              </Button>
            </CardFooter>
          </Card>
        </NuxtLink>
      </div>
      
      <div data-aos="fade-left">
        <NuxtLink to="/about">
          <Card class="overflow-hidden h-full hover:shadow-lg transition-shadow">
            <div class="aspect-video">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="About Us" class="w-full h-full object-cover" />
            </div>
            <CardContent class="p-6">
              <h3 class="text-2xl font-bold mb-2">About Our Platform</h3>
              <p class="text-muted-foreground">Learn about our mission, values, and approach to creating the best education management system.</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" class="px-0">
                Learn More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ml-1">
                  <path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd" />
                </svg>
              </Button>
            </CardFooter>
          </Card>
        </NuxtLink>
      </div>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      <div data-aos="fade-up" data-aos-delay="100">
        <NuxtLink to="/students">
          <Card class="overflow-hidden h-full hover:shadow-lg transition-shadow">
            <div class="aspect-video">
              <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Students" class="w-full h-full object-cover" />
            </div>
            <CardContent class="p-6">
              <h3 class="text-xl font-bold mb-2">For Students</h3>
              <p class="text-muted-foreground">Access your assignments, grades, and learning resources all in one place.</p>
            </CardContent>
          </Card>
        </NuxtLink>
      </div>
      
      <div data-aos="fade-up" data-aos-delay="200">
        <NuxtLink to="/teachers">
          <Card class="overflow-hidden h-full hover:shadow-lg transition-shadow">
            <div class="aspect-video">
              <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="Teachers" class="w-full h-full object-cover" />
            </div>
            <CardContent class="p-6">
              <h3 class="text-xl font-bold mb-2">For Teachers</h3>
              <p class="text-muted-foreground">Streamline your workflow with powerful teaching and grading tools.</p>
            </CardContent>
          </Card>
        </NuxtLink>
      </div>
      
      <div data-aos="fade-up" data-aos-delay="300">
        <NuxtLink to="/parents">
          <Card class="overflow-hidden h-full hover:shadow-lg transition-shadow">
            <div class="aspect-video">
              <img src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="Parents" class="w-full h-full object-cover" />
            </div>
            <CardContent class="p-6">
              <h3 class="text-xl font-bold mb-2">For Parents</h3>
              <p class="text-muted-foreground">Stay connected with your child's education and school activities.</p>
            </CardContent>
          </Card>
        </NuxtLink>
      </div>
    </div>
  </section>
<!-- Sign Up and Login Section -->
<section class="py-12 bg-muted">
  <div class="container px-4 mx-auto">
    <h2 class="text-3xl font-bold text-center mb-10">Get Started Today</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
      <div data-aos="fade-right">
        <Card class="overflow-hidden h-full hover:shadow-lg transition-shadow">
          <div class="aspect-video">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Sign Up" class="w-full h-full object-cover" />
          </div>
          <CardContent class="p-6">
            <h3 class="text-xl font-bold mb-2">New to Our Platform?</h3>
            <p class="text-muted-foreground mb-4">Create an account to access all features and start managing your educational journey.</p>
          </CardContent>
          <CardFooter>
            <NuxtLink to="/register" class="w-full">
              <Button variant="default" class="w-full">Sign Up Now</Button>
            </NuxtLink>
          </CardFooter>
        </Card>
      </div>
      
      <div data-aos="fade-left">
        <Card class="overflow-hidden h-full hover:shadow-lg transition-shadow">
          <div class="aspect-video">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Login" class="w-full h-full object-cover" />
          </div>
          <CardContent class="p-6">
            <h3 class="text-xl font-bold mb-2">Already Have an Account?</h3>
            <p class="text-muted-foreground mb-4">Welcome back! Sign in to continue where you left off and access your dashboard.</p>
          </CardContent>
          <CardFooter>
            <NuxtLink to="/pelajar" class="w-full">
              <Button variant="outline" class="w-full">Log In</Button>
            </NuxtLink>
          </CardFooter>
        </Card>
      </div>
    </div>
    
    <div class="text-center mt-8">
      <p class="text-muted-foreground mb-4">Need help getting started?</p>
      <NuxtLink to="/support">
        <Button variant="link">Visit our Support Center</Button>
      </NuxtLink>
    </div>
  </div>
</section>

</template>

<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay';

// Hero section slides
const slides = ref([
  { id: 1, src: 'https://images.unsplash.com/photo-1562774053-701939374585', alt: 'School Building', caption: 'Our Modern Campus' },
  { id: 2, src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754', alt: 'Classroom', caption: 'Interactive Learning Environments' },
  { id: 3, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1', alt: 'Students', caption: 'Empowering Student Success' }
]);

// Upcoming events
const events = ref([
  {
    id: 1,
    title: 'Parent-Teacher Conference',
    date: '2025-04-15',
    description: 'Discuss student progress and learning goals'
  },
  {
    id: 2,
    title: 'Annual Science Fair',
    date: '2025-04-22',
    description: 'Students showcase their scientific discoveries'
  },
  {
    id: 3,
    title: 'End of Term Exams',
    date: '2025-05-05',
    description: 'Final examinations for the spring semester'
  }
]);

// Latest news
const news = ref([
  {
    id: 1,
    title: 'New Curriculum Updates',
    created_at: '2025-03-20',
    description: 'Important changes to the math and science programs'
  },
  {
    id: 2,
    title: 'System Maintenance Notice',
    created_at: '2025-03-18',
    description: 'Scheduled downtime on Sunday from 2-4 AM'
  },
  {
    id: 3,
    title: 'New Mobile App Features',
    created_at: '2025-03-15',
    description: 'Updated interface with improved notifications'
  }
]);
</script>
