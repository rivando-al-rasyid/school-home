<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Digital Library</h1>
    
    <!-- Search and Filter -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
      <div class="relative flex-grow max-w-md">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon name="lucide:search" class="h-4 w-4 text-muted-foreground" />
        </div>
        <input 
          type="text"
          placeholder="Search books, journals, articles..."
          class="pl-10 pr-4 py-2 text-sm border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary"
        >
      </div>
      <div class="flex items-center space-x-2">
        <Select default-value="all">
          <SelectTrigger class="w-[150px]">
            <SelectValue placeholder="Resource Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Resources</SelectItem>
            <SelectItem value="books">Books</SelectItem>
            <SelectItem value="articles">Articles</SelectItem>
            <SelectItem value="journals">Journals</SelectItem>
            <SelectItem value="references">References</SelectItem>
          </SelectContent>
        </Select>
        <Select default-value="all">
          <SelectTrigger class="w-[150px]">
            <SelectValue placeholder="Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            <SelectItem value="math">Mathematics</SelectItem>
            <SelectItem value="science">Science</SelectItem>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="history">History</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    
    <!-- Featured Resources -->
    <Card class="shadow-sm mb-8">
      <CardHeader>
        <CardTitle>Featured Resources</CardTitle>
        <CardDescription>Staff picks and recommended reading</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="(book, index) in featuredBooks" :key="index" class="flex flex-col">
            <div class="aspect-[2/3] bg-muted rounded-md overflow-hidden mb-2">
              <img :src="book.cover" :alt="book.title" class="w-full h-full object-cover" >
            </div>
            <h3 class="font-medium text-sm line-clamp-1">{{ book.title }}</h3>
            <p class="text-xs text-muted-foreground">{{ book.author }}</p>
            <div class="mt-2 flex items-center space-x-2">
              <Badge variant="outline" class="text-xs">{{ book.type }}</Badge>
              <Badge variant="secondary" class="text-xs">{{ book.subject }}</Badge>
            </div>
            <Button variant="outline" size="sm" class="mt-2">
              <Icon name="lucide:book-open" class="h-4 w-4 mr-1" />
              Read Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <!-- Recently Viewed -->
    <Card class="shadow-sm mb-8">
      <CardHeader>
        <CardTitle>Recently Viewed</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div v-for="(resource, index) in recentlyViewed" :key="index" class="flex items-start border rounded-lg p-3">
            <div class="h-12 w-12 rounded bg-primary/10 flex items-center justify-center mr-3">
              <Icon :name="resource.icon" class="h-6 w-6 text-primary" />
            </div>
            <div class="flex-grow">
              <h3 class="font-medium text-sm">{{ resource.title }}</h3>
              <p class="text-xs text-muted-foreground">{{ resource.author }}</p>
              <p class="text-xs text-muted-foreground mt-1">Last opened: {{ resource.lastOpened }}</p>
            </div>
            <div class="flex flex-col items-end space-y-2">
              <Badge variant="outline" class="text-xs">{{ resource.type }}</Badge>
              <Button variant="ghost" size="sm">
                <Icon name="lucide:external-link" class="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <!-- All Resources -->
    <Card class="shadow-sm">
      <CardHeader>
        <div class="flex items-center justify-between">
          <div>
            <CardTitle>Browse All Resources</CardTitle>
            <CardDescription>Access our complete digital collection</CardDescription>
          </div>
          <Select default-value="newest">
            <SelectTrigger class="w-[150px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="relevant">Most Relevant</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div v-for="(resource, index) in allResources" :key="index" class="flex items-start border rounded-lg p-4">
            <div class="h-16 w-12 bg-muted rounded overflow-hidden mr-4 hidden sm:block">
              <img :src="resource.thumbnail" :alt="resource.title" class="w-full h-full object-cover" >
            </div>
            <div class="flex-grow">
              <div class="flex items-start justify-between mb-1">
                <h3 class="font-medium">{{ resource.title }}</h3>
                <Badge variant="outline">{{ resource.type }}</Badge>
              </div>
              <p class="text-sm text-muted-foreground">By {{ resource.author }}</p>
              <p class="text-sm mt-1">{{ resource.description }}</p>
              <div class="flex items-center mt-2 space-x-2">
                <Badge variant="secondary" class="text-xs">{{ resource.subject }}</Badge>
                <span class="text-xs text-muted-foreground">Added: {{ resource.added }}</span>
              </div>
            </div>
            <div class="flex flex-col items-end space-y-2 ml-4">
              <Button variant="outline" size="sm">View Details</Button>
              <Button size="sm">
                <Icon name="lucide:download" class="h-4 w-4 mr-1" />
                Download
              </Button>
            </div>
          </div>
        </div>
        
        <div class="flex items-center justify-center mt-6">
          <Button variant="outline" class="mx-1 px-3 py-1">
            <Icon name="lucide:chevron-left" class="h-4 w-4" />
          </Button>
          <Button variant="outline" class="mx-1 px-3 py-1 bg-primary text-primary-foreground">1</Button>
          <Button variant="outline" class="mx-1 px-3 py-1">2</Button>
          <Button variant="outline" class="mx-1 px-3 py-1">3</Button>
          <span class="mx-1">...</span>
          <Button variant="outline" class="mx-1 px-3 py-1">12</Button>
          <Button variant="outline" class="mx-1 px-3 py-1">
            <Icon name="lucide:chevron-right" class="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

definePageMeta({
  layout: 'student'
})

const featuredBooks = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'Book',
    subject: 'English'
  },
  {
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    cover: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=2690&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'Book',
    subject: 'Science'
  },
  {
    title: 'The Elements of Euclid',
    author: 'Euclid of Alexandria',
    cover: 'https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'Reference',
    subject: 'Mathematics'
  },
  {
    title: 'Civil War: A Narrative',
    author: 'Shelby Foote',
    cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'Book',
    subject: 'History'
  }
];

const recentlyViewed = [
  {
    title: 'Fundamentals of Physics',
    author: 'David Halliday, Robert Resnick',
    lastOpened: 'Today, 10:25 AM',
    type: 'Textbook',
    icon: 'lucide:book'
  },
  {
    title: 'The Cell Structure and Function',
    author: 'Journal of Cell Biology',
    lastOpened: 'Yesterday, 3:15 PM',
    type: 'Article',
    icon: 'lucide:file-text'
  },
  {
    title: 'Introduction to Calculus',
    author: 'MIT OpenCourseWare',
    lastOpened: 'March 20, 2025',
    type: 'Course Material',
    icon: 'lucide:file'
  }
];

const allResources = [
  {
    title: 'Introduction to Algebra',
    author: 'John Smith',
    description: 'A comprehensive guide to basic algebraic concepts including equations, inequalities, and functions.',
    subject: 'Mathematics',
    type: 'Textbook',
    added: 'March 18, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    title: 'Cellular Respiration',
    author: 'Dr. Emily Chen',
    description: 'An in-depth look at how cells convert nutrients into energy through various metabolic pathways.',
    subject: 'Biology',
    type: 'Article',
    added: 'March 15, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    title: 'Shakespeare\'s Macbeth: Analysis',
    author: 'Sarah Johnson',
    description: 'Literary analysis of themes, motifs, and symbolism in Shakespeare\'s tragedy Macbeth.',
    subject: 'English',
    type: 'Study Guide',
    added: 'March 10, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    title: 'World War II: European Theater',
    author: 'Dr. Michael Brown',
    description: 'Detailed overview of key battles, strategies, and political developments in the European Theater during WWII.',
    subject: 'History',
    type: 'Reference',
    added: 'March 5, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3'
  }
];
</script>
