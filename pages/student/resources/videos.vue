<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Video Tutorials</h1>
    
    <!-- Search and Filter -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
      <div class="relative flex-grow max-w-md">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon name="lucide:search" class="h-4 w-4 text-muted-foreground" />
        </div>
        <input 
          type="text"
          placeholder="Search tutorials..."
          class="pl-10 pr-4 py-2 text-sm border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div class="flex items-center space-x-2">
        <Select defaultValue="all">
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
        <Select defaultValue="all">
          <SelectTrigger class="w-[150px]">
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Length</SelectItem>
            <SelectItem value="short">Under 10 min</SelectItem>
            <SelectItem value="medium">10-30 min</SelectItem>
            <SelectItem value="long">Over 30 min</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    
    <!-- Featured Tutorials -->
    <Card class="shadow-sm mb-8">
      <CardHeader>
        <CardTitle>Featured Tutorials</CardTitle>
        <CardDescription>Recommended by your teachers</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="(video, index) in featuredVideos" :key="index" class="flex flex-col">
            <div class="aspect-video bg-muted rounded-md overflow-hidden mb-2 relative group">
              <img :src="video.thumbnail" :alt="video.title" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" class="text-white">
                  <Icon name="lucide:play" class="h-12 w-12" />
                </Button>
              </div>
              <Badge class="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white">{{ video.duration }}</Badge>
            </div>
            <h3 class="font-medium text-sm">{{ video.title }}</h3>
            <p class="text-xs text-muted-foreground">{{ video.instructor }}</p>
            <div class="mt-2 flex items-center space-x-2">
              <Badge variant="secondary" class="text-xs">{{ video.subject }}</Badge>
              <span class="text-xs text-muted-foreground">{{ video.views }} views</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <!-- Recommended For You -->
    <Card class="shadow-sm mb-8">
      <CardHeader>
        <CardTitle>Recommended For You</CardTitle>
        <CardDescription>Based on your courses and viewing history</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-1 gap-4">
          <div v-for="(video, index) in recommendedVideos" :key="index" class="flex items-start border rounded-lg p-3">
            <div class="h-20 w-36 bg-muted rounded overflow-hidden mr-3 relative flex-shrink-0">
              <img :src="video.thumbnail" :alt="video.title" class="w-full h-full object-cover" />
              <Badge class="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs">{{ video.duration }}</Badge>
            </div>
            <div class="flex-grow">
              <h3 class="font-medium text-sm">{{ video.title }}</h3>
              <p class="text-xs text-muted-foreground">{{ video.instructor }}</p>
              <p class="text-xs mt-1 line-clamp-2">{{ video.description }}</p>
              <div class="flex items-center mt-2 space-x-2">
                <Badge variant="outline" class="text-xs">{{ video.subject }}</Badge>
                <span class="text-xs text-muted-foreground">{{ video.views }} views</span>
              </div>
            </div>
            <div class="flex-shrink-0 ml-2">
              <Button variant="ghost" size="sm">
                <Icon name="lucide:play" class="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <!-- Video Categories -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- Math Videos -->
      <Card class="shadow-sm">
        <CardHeader>
          <CardTitle>Mathematics</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-3">
            <div v-for="(video, index) in mathVideos" :key="index" class="flex items-center border-b pb-3 last:border-b-0 last:pb-0">
              <div class="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <Icon name="lucide:calculator" class="h-6 w-6 text-primary" />
              </div>
              <div class="flex-grow">
                <h3 class="font-medium text-sm">{{ video.title }}</h3>
                <div class="flex items-center mt-1">
                  <span class="text-xs text-muted-foreground">{{ video.duration }}</span>
                  <span class="mx-2 text-muted-foreground">•</span>
                  <Badge variant="outline" class="text-xs">{{ video.level }}</Badge>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Icon name="lucide:play" class="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button variant="outline" size="sm" class="w-full mt-3">
            View All Mathematics Videos
          </Button>
        </CardContent>
      </Card>
      
      <!-- Science Videos -->
      <Card class="shadow-sm">
        <CardHeader>
          <CardTitle>Science</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-3">
            <div v-for="(video, index) in scienceVideos" :key="index" class="flex items-center border-b pb-3 last:border-b-0 last:pb-0">
              <div class="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <Icon name="lucide:flask-conical" class="h-6 w-6 text-primary" />
              </div>
              <div class="flex-grow">
                <h3 class="font-medium text-sm">{{ video.title }}</h3>
                <div class="flex items-center mt-1">
                  <span class="text-xs text-muted-foreground">{{ video.duration }}</span>
                  <span class="mx-2 text-muted-foreground">•</span>
                  <Badge variant="outline" class="text-xs">{{ video.level }}</Badge>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Icon name="lucide:play" class="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button variant="outline" size="sm" class="w-full mt-3">
            View All Science Videos
          </Button>
        </CardContent>
      </Card>
    </div>
    
    <!-- Latest Additions -->
    <Card class="shadow-sm">
      <CardHeader>
        <div class="flex items-center justify-between">
          <div>
            <CardTitle>Latest Additions</CardTitle>
            <CardDescription>Recently added to our collection</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="(video, index) in latestVideos" :key="index" class="flex flex-col">
            <div class="aspect-video bg-muted rounded-md overflow-hidden mb-2 relative group">
              <img :src="video.thumbnail" :alt="video.title" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" class="text-white">
                  <Icon name="lucide:play" class="h-8 w-8" />
                </Button>
              </div>
              <Badge class="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white">{{ video.duration }}</Badge>
            </div>
            <h3 class="font-medium text-sm line-clamp-1">{{ video.title }}</h3>
            <p class="text-xs text-muted-foreground">{{ video.instructor }}</p>
            <div class="mt-1 flex items-center space-x-2">
              <Badge variant="secondary" class="text-xs">{{ video.subject }}</Badge>
              <span class="text-xs text-muted-foreground">{{ video.date }}</span>
            </div>
          </div>
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

const featuredVideos = [
  {
    title: 'Understanding Quadratic Equations',
    instructor: 'Prof. Robert Wilson',
    thumbnail: 'https://images.unsplash.com/photo-1596496181871-9681eacf9764?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3',
    duration: '18:45',
    subject: 'Mathematics',
    views: '1.2K'
  },
  {
    title: 'Cell Division: Mitosis and Meiosis',
    instructor: 'Dr. Emily Chen',
    thumbnail: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3',
    duration: '24:30',
    subject: 'Biology',
    views: '986'
  },
  {
    title: 'Shakespeare\'s Hamlet: Character Analysis',
    instructor: 'Ms. Sarah Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1506880135364-e28660dc35fa?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3',
    duration: '32:15',
    subject: 'English',
    views: '743'
  }
];

const recommendedVideos = [
  {
    title: 'The American Civil War: Causes and Effects',
    instructor: 'Dr. Michael Brown',
    thumbnail: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
    duration: '45:20',
    subject: 'History',
    views: '1.5K',
    description: 'An in-depth analysis of the social, economic, and political factors that led to the Civil War and its lasting impact on American society.'
  },
  {
    title: 'Introduction to Chemical Bonding',
    instructor: 'Prof. David Lee',
    thumbnail: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
    duration: '22:10',
    subject: 'Chemistry',
    views: '876',
    description: 'Learn about ionic, covalent, and metallic bonds, and how they determine the properties of different compounds.'
  },
  {
    title: 'Solving Systems of Linear Equations',
    instructor: 'Ms. Jennifer Adams',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
    duration: '15:45',
    subject: 'Mathematics',
    views: '1.1K',
    description: 'This tutorial covers multiple methods for solving systems of linear equations, including substitution, elimination, and matrix methods.'
  }
];

const mathVideos = [
  {
    title: 'Derivatives and Their Applications',
    duration: '28:15',
    level: 'Advanced'
  },
  {
    title: 'Introduction to Trigonometry',
    duration: '22:40',
    level: 'Intermediate'
  },
  {
    title: 'Basic Algebra Concepts',
    duration: '15:30',
    level: 'Beginner'
  },
  {
    title: 'Understanding Probability',
    duration: '19:45',
    level: 'Intermediate'
  }
];

const scienceVideos = [
  {
    title: 'Newton\'s Laws of Motion',
    duration: '24:10',
    level: 'Intermediate'
  },
  {
    title: 'The Periodic Table Explained',
    duration: '18:35',
    level: 'Beginner'
  },
  {
    title: 'DNA Replication Process',
    duration: '26:50',
    level: 'Advanced'
  },
  {
    title: 'Basics of Electricity',
    duration: '20:15',
    level: 'Beginner'
  }
];

const latestVideos = [
  {
    title: 'Poetry Analysis Techniques',
    instructor: 'Ms. Sarah Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3',
    duration: '14:30',
    subject: 'English',
    date: 'Added March 24, 2025'
  },
  {
    title: 'Quantum Mechanics Basics',
    instructor: 'Dr. Richard Miller',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
    duration: '32:45',
    subject: 'Physics',
    date: 'Added March 22, 2025'
  },
  {
    title: 'Understanding Ecosystems',
    instructor: 'Prof. Lisa Green',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3',
    duration: '21:20',
    subject: 'Biology',
    date: 'Added March 20, 2025'
  },
  {
    title: 'The French Revolution',
    instructor: 'Dr. Michael Brown',
    thumbnail: 'https://images.unsplash.com/photo-1549893072-4bc678117f45?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3',
    duration: '38:15',
    subject: 'History',
    date: 'Added March 18, 2025'
  }
];
</script>
