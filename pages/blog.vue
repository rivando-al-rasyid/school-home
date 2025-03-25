<template>
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center">School Management Blog</h1>
    
    <div class="max-w-6xl mx-auto">
      <!-- Featured Article -->
      <div class="mb-16">
        <Card class="overflow-hidden">
          <div class="grid md:grid-cols-2 gap-0">
            <div class="order-2 md:order-1">
              <CardContent class="p-8">
                <div class="text-sm text-muted-foreground mb-2">March 15, 2025</div>
                <h2 class="text-3xl font-bold mb-4">Embracing Digital Transformation in Education</h2>
                <p class="text-muted-foreground mb-4">
                  The rapid advancement of technology is reshaping the landscape of education, opening up new possibilities for teaching, learning, and school administration. In this article, we explore how digital transformation is revolutionizing education and why schools need to adapt.
                </p>
                <div class="flex items-center gap-4 mb-6">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?img=32" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p class="font-medium">Dr. Emily Parker</p>
                    <p class="text-sm text-muted-foreground">Education Technology Specialist</p>
                  </div>
                </div>
                <Button>Read Full Article</Button>
              </CardContent>
            </div>
            <div class="order-1 md:order-2">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80" alt="Digital Education" class="w-full h-full object-cover" />
            </div>
          </div>
        </Card>
      </div>
      
      <!-- Blog Grid -->
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <Card v-for="(post, index) in blogPosts" :key="post.id" class="overflow-hidden">
          <div class="aspect-video overflow-hidden">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
          </div>
          <CardContent class="pt-6">
            <div class="text-sm text-muted-foreground mb-2">{{ post.date }}</div>
            <h3 class="text-xl font-bold mb-2">{{ post.title }}</h3>
            <p class="text-muted-foreground mb-4 line-clamp-3">{{ post.excerpt }}</p>
            <div class="flex items-center gap-3 mb-4">
              <Avatar class="h-8 w-8">
                <AvatarImage :src="post.author.avatar" />
                <AvatarFallback>{{ post.author.initials }}</AvatarFallback>
              </Avatar>
              <span class="text-sm font-medium">{{ post.author.name }}</span>
            </div>
            <Button variant="outline" class="w-full">Read More</Button>
          </CardContent>
        </Card>
      </div>
      
      <!-- Categories Section -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
        <div class="flex flex-wrap gap-3 justify-center">
          <Badge variant="outline" class="px-4 py-2 text-base cursor-pointer hover:bg-muted">Digital Learning</Badge>
          <Badge variant="outline" class="px-4 py-2 text-base cursor-pointer hover:bg-muted">School Administration</Badge>
          <Badge variant="outline" class="px-4 py-2 text-base cursor-pointer hover:bg-muted">Teaching Strategies</Badge>
          <Badge variant="outline" class="px-4 py-2 text-base cursor-pointer hover:bg-muted">Student Success</Badge>
          <Badge variant="outline" class="px-4 py-2 text-base cursor-pointer hover:bg-muted">Parent Engagement</Badge>
          <Badge variant="outline" class="px-4 py-2 text-base cursor-pointer hover:bg-muted">Technology Tips</Badge>
          <Badge variant="outline" class="px-4 py-2 text-base cursor-pointer hover:bg-muted">Educational Research</Badge>
          <Badge variant="outline" class="px-4 py-2 text-base cursor-pointer hover:bg-muted">Professional Development</Badge>
        </div>
      </div>
      
      <!-- Newsletter -->
      <div class="bg-muted p-8 rounded-lg">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p class="text-muted-foreground mb-6">
            Stay updated with the latest educational trends, technology tips, and school management strategies delivered to your inbox.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input type="email" placeholder="Your email address" class="flex-grow" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const blogPosts = ref([
  {
    id: 1,
    title: 'How Data Analytics is Improving Student Outcomes',
    excerpt: 'Discover how schools are leveraging data-driven insights to personalize education and improve academic performance across diverse student populations.',
    date: 'March 10, 2025',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    author: {
      name: 'Robert Wilson',
      avatar: 'https://i.pravatar.cc/150?img=33',
      initials: 'RW'
    }
  },
  {
    id: 2,
    title: 'Engaging Parents in the Digital Age',
    excerpt: 'Learn effective strategies for strengthening the school-parent partnership through digital tools and meaningful communication channels.',
    date: 'March 8, 2025',
    image: 'https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://i.pravatar.cc/150?img=48',
      initials: 'SC'
    }
  },
  {
    id: 3,
    title: 'Streamlining Administrative Workflows',
    excerpt: 'Explore how automation and digital systems can reduce administrative burden, allowing educators to focus more time on teaching and less on paperwork.',
    date: 'March 5, 2025',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    author: {
      name: 'Marcus Brown',
      avatar: 'https://i.pravatar.cc/150?img=12',
      initials: 'MB'
    }
  },
  {
    id: 4,
    title: 'Building Digital Literacy in Students',
    excerpt: 'Critical strategies for developing essential digital skills that prepare students for success in the increasingly technology-driven workplace.',
    date: 'March 1, 2025',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    author: {
      name: 'Lisa Garcia',
      avatar: 'https://i.pravatar.cc/150?img=28',
      initials: 'LG'
    }
  },
  {
    id: 5,
    title: 'Cybersecurity Essentials for Schools',
    excerpt: 'Best practices for protecting sensitive student data and maintaining secure digital environments in educational institutions.',
    date: 'February 25, 2025',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    author: {
      name: 'David Park',
      avatar: 'https://i.pravatar.cc/150?img=53',
      initials: 'DP'
    }
  },
  {
    id: 6,
    title: 'The Future of Classroom Technology',
    excerpt: 'Emerging trends and innovations that are reshaping how we think about educational spaces and instructional delivery methods.',
    date: 'February 20, 2025',
    image: 'https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    author: {
      name: 'Amanda Johnson',
      avatar: 'https://i.pravatar.cc/150?img=44',
      initials: 'AJ'
    }
  }
]);
</script>
