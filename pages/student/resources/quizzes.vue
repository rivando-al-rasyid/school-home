<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Practice Quizzes</h1>
    
    <!-- Search and Filter -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
      <div class="relative flex-grow max-w-md">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon name="lucide:search" class="h-4 w-4 text-muted-foreground" />
        </div>
        <input 
          type="text"
          placeholder="Search quizzes..."
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
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    
    <!-- Quiz Stats -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <Card className="bg-primary/5">
        <CardContent className="p-6">
          <div class="flex items-center space-x-4">
            <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="lucide:check-circle" class="h-6 w-6 text-primary" />
            </div>
            <div>
              <div class="text-sm font-medium text-muted-foreground">Completed</div>
              <div class="text-2xl font-bold">24</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-primary/5">
        <CardContent className="p-6">
          <div class="flex items-center space-x-4">
            <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="lucide:bar-chart" class="h-6 w-6 text-primary" />
            </div>
            <div>
              <div class="text-sm font-medium text-muted-foreground">Average Score</div>
              <div class="text-2xl font-bold">85%</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-primary/5">
        <CardContent className="p-6">
          <div class="flex items-center space-x-4">
            <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="lucide:thumbs-up" class="h-6 w-6 text-primary" />
            </div>
            <div>
              <div class="text-sm font-medium text-muted-foreground">Best Subject</div>
              <div class="text-2xl font-bold">Math</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-primary/5">
        <CardContent className="p-6">
          <div class="flex items-center space-x-4">
            <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="lucide:flame" class="h-6 w-6 text-primary" />
            </div>
            <div>
              <div class="text-sm font-medium text-muted-foreground">Streak</div>
              <div class="text-2xl font-bold">5 days</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    
    <!-- Recommended Quizzes -->
    <Card class="shadow-sm mb-8">
      <CardHeader>
        <CardTitle>Recommended for You</CardTitle>
        <CardDescription>Based on your courses and performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="(quiz, index) in recommendedQuizzes" :key="index" class="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div class="flex items-center mb-3">
              <div class="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <Icon :name="quiz.icon" class="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 class="font-medium">{{ quiz.title }}</h3>
                <p class="text-xs text-muted-foreground">{{ quiz.subject }}</p>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
              <Badge :variant="quiz.difficulty === 'Beginner' ? 'outline' : quiz.difficulty === 'Intermediate' ? 'secondary' : 'default'">
                {{ quiz.difficulty }}
              </Badge>
              <span class="text-xs text-muted-foreground">{{ quiz.questions }} questions</span>
            </div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs text-muted-foreground">Estimated time: {{ quiz.time }}</span>
              <span class="text-xs text-muted-foreground">{{ quiz.attempts }} attempts allowed</span>
            </div>
            <Button class="w-full">Start Quiz</Button>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <!-- Practice by Topic -->
    <Card class="shadow-sm mb-8">
      <CardHeader>
        <CardTitle>Practice by Topic</CardTitle>
        <CardDescription>Focus on specific areas to improve your skills</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="math" class="w-full">
          <TabsList class="grid grid-cols-4 w-full">
            <TabsTrigger value="math">Mathematics</TabsTrigger>
            <TabsTrigger value="science">Science</TabsTrigger>
            <TabsTrigger value="english">English</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="math">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div v-for="(topic, index) in mathTopics" :key="index" class="border rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-medium">{{ topic.title }}</h3>
                  <Badge variant="outline">{{ topic.quizCount }} quizzes</Badge>
                </div>
                <p class="text-sm text-muted-foreground mb-3">{{ topic.description }}</p>
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center">
                    <Icon name="lucide:users" class="h-4 w-4 text-muted-foreground mr-1" />
                    <span class="text-xs text-muted-foreground">{{ topic.students }} students</span>
                  </div>
                  <div class="flex items-center">
                    <Icon name="lucide:activity" class="h-4 w-4 text-muted-foreground mr-1" />
                    <span class="text-xs text-muted-foreground">{{ topic.difficulty }}</span>
                  </div>
                </div>
                <Button variant="outline" class="w-full">Explore Topic</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="science">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div v-for="(topic, index) in scienceTopics" :key="index" class="border rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-medium">{{ topic.title }}</h3>
                  <Badge variant="outline">{{ topic.quizCount }} quizzes</Badge>
                </div>
                <p class="text-sm text-muted-foreground mb-3">{{ topic.description }}</p>
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center">
                    <Icon name="lucide:users" class="h-4 w-4 text-muted-foreground mr-1" />
                    <span class="text-xs text-muted-foreground">{{ topic.students }} students</span>
                  </div>
                  <div class="flex items-center">
                    <Icon name="lucide:activity" class="h-4 w-4 text-muted-foreground mr-1" />
                    <span class="text-xs text-muted-foreground">{{ topic.difficulty }}</span>
                  </div>
                </div>
                <Button variant="outline" class="w-full">Explore Topic</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="english">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div v-for="(topic, index) in englishTopics" :key="index" class="border rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-medium">{{ topic.title }}</h3>
                  <Badge variant="outline">{{ topic.quizCount }} quizzes</Badge>
                </div>
                <p class="text-sm text-muted-foreground mb-3">{{ topic.description }}</p>
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center">
                    <Icon name="lucide:users" class="h-4 w-4 text-muted-foreground mr-1" />
                    <span class="text-xs text-muted-foreground">{{ topic.students }} students</span>
                  </div>
                  <div class="flex items-center">
                    <Icon name="lucide:activity" class="h-4 w-4 text-muted-foreground mr-1" />
                    <span class="text-xs text-muted-foreground">{{ topic.difficulty }}</span>
                  </div>
                </div>
                <Button variant="outline" class="w-full">Explore Topic</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="history">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div v-for="(topic, index) in historyTopics" :key="index" class="border rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-medium">{{ topic.title }}</h3>
                  <Badge variant="outline">{{ topic.quizCount }} quizzes</Badge>
                </div>
                <p class="text-sm text-muted-foreground mb-3">{{ topic.description }}</p>
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center">
                    <Icon name="lucide:users" class="h-4 w-4 text-muted-foreground mr-1" />
                    <span class="text-xs text-muted-foreground">{{ topic.students }} students</span>
                  </div>
                  <div class="flex items-center">
                    <Icon name="lucide:activity" class="h-4 w-4 text-muted-foreground mr-1" />
                    <span class="text-xs text-muted-foreground">{{ topic.difficulty }}</span>
                  </div>
                </div>
                <Button variant="outline" class="w-full">Explore Topic</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
    
    <!-- Recently Completed -->
    <Card class="shadow-sm">
      <CardHeader>
        <CardTitle>Your Recent Quiz Results</CardTitle>
        <CardDescription>Track your progress and identify areas for improvement</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div v-for="(result, index) in recentResults" :key="index" class="border rounded-lg p-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
              <div class="flex items-center mb-2 sm:mb-0">
                <div class="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Icon :name="result.icon" class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 class="font-medium">{{ result.title }}</h3>
                  <p class="text-xs text-muted-foreground">{{ result.subject }}</p>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <Badge :variant="getScoreVariant(result.score)">{{ result.score }}%</Badge>
                <span class="text-xs text-muted-foreground">{{ result.date }}</span>
              </div>
            </div>
            <div class="w-full bg-muted rounded-full h-2 mb-3">
              <div 
                class="h-2 rounded-full" 
                :class="getScoreVariant(result.score) === 'default' ? 'bg-primary' : getScoreVariant(result.score) === 'secondary' ? 'bg-amber-500' : 'bg-red-500'"
                :style="{ width: `${result.score}%` }"
              ></div>
            </div>
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <div v-for="(stat, statIndex) in result.stats" :key="statIndex" class="flex items-center text-xs text-muted-foreground">
                <Icon :name="stat.icon" class="h-3 w-3 mr-1" />
                <span>{{ stat.label }}</span>
                <span class="mx-1">•</span>
                <span class="font-medium">{{ stat.value }}</span>
              </div>
            </div>
            <div class="flex justify-between">
              <Button variant="outline" size="sm">
                <Icon name="lucide:refresh-cw" class="h-4 w-4 mr-1" />
                Retry Quiz
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="lucide:list" class="h-4 w-4 mr-1" />
                Review Answers
              </Button>
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

definePageMeta({
  layout: 'student'
})

const recommendedQuizzes = [
  {
    title: 'Algebra Fundamentals',
    subject: 'Mathematics',
    icon: 'lucide:calculator',
    difficulty: 'Intermediate',
    questions: 15,
    time: '20 min',
    attempts: 'Unlimited'
  },
  {
    title: 'Chemical Reactions',
    subject: 'Chemistry',
    icon: 'lucide:flask-conical',
    difficulty: 'Advanced',
    questions: 20,
    time: '30 min',
    attempts: 2
  },
  {
    title: 'Grammar Essentials',
    subject: 'English',
    icon: 'lucide:book-open',
    difficulty: 'Beginner',
    questions: 12,
    time: '15 min',
    attempts: 'Unlimited'
  }
];

const mathTopics = [
  {
    title: 'Algebra',
    description: 'Practice equations, inequalities, functions, and graphs.',
    quizCount: 12,
    students: '1.2K',
    difficulty: 'Varies'
  },
  {
    title: 'Geometry',
    description: 'Test your knowledge on shapes, angles, and spatial relationships.',
    quizCount: 8,
    students: '945',
    difficulty: 'Intermediate'
  },
  {
    title: 'Calculus',
    description: 'Practice derivatives, integrals, and limits.',
    quizCount: 10,
    students: '768',
    difficulty: 'Advanced'
  },
  {
    title: 'Statistics',
    description: 'Test your knowledge on probability, data analysis, and statistical methods.',
    quizCount: 6,
    students: '835',
    difficulty: 'Intermediate'
  }
];

const scienceTopics = [
  {
    title: 'Physics',
    description: 'Test your knowledge on mechanics, electricity, and thermodynamics.',
    quizCount: 9,
    students: '892',
    difficulty: 'Advanced'
  },
  {
    title: 'Chemistry',
    description: 'Practice chemical reactions, periodic table, and molecular structures.',
    quizCount: 11,
    students: '1.1K',
    difficulty: 'Intermediate'
  },
  {
    title: 'Biology',
    description: 'Test your knowledge on cells, genetics, and ecosystems.',
    quizCount: 14,
    students: '1.3K',
    difficulty: 'Varies'
  },
  {
    title: 'Earth Science',
    description: 'Practice geology, meteorology, and astronomy concepts.',
    quizCount: 7,
    students: '720',
    difficulty: 'Beginner'
  }
];

const englishTopics = [
  {
    title: 'Grammar',
    description: 'Practice parts of speech, sentence structure, and punctuation.',
    quizCount: 10,
    students: '1.4K',
    difficulty: 'Varies'
  },
  {
    title: 'Literature',
    description: 'Test your knowledge on classic literature, authors, and literary devices.',
    quizCount: 8,
    students: '934',
    difficulty: 'Intermediate'
  },
  {
    title: 'Vocabulary',
    description: 'Expand your vocabulary with practice quizzes on word meanings and usage.',
    quizCount: 12,
    students: '1.2K',
    difficulty: 'Varies'
  },
  {
    title: 'Writing Skills',
    description: 'Improve your essays with quizzes on structure, argumentation, and style.',
    quizCount: 6,
    students: '780',
    difficulty: 'Intermediate'
  }
];

const historyTopics = [
  {
    title: 'World History',
    description: 'Test your knowledge on major historical events and civilizations.',
    quizCount: 11,
    students: '965',
    difficulty: 'Intermediate'
  },
  {
    title: 'American History',
    description: 'Practice key events and figures in U.S. history.',
    quizCount: 9,
    students: '1.1K',
    difficulty: 'Varies'
  },
  {
    title: 'Ancient Civilizations',
    description: 'Test your knowledge on Egypt, Greece, Rome, and other ancient societies.',
    quizCount: 7,
    students: '843',
    difficulty: 'Intermediate'
  },
  {
    title: 'Modern Era',
    description: 'Practice 20th and 21st century historical events and movements.',
    quizCount: 8,
    students: '792',
    difficulty: 'Advanced'
  }
];

const recentResults = [
  {
    title: 'Quadratic Equations',
    subject: 'Mathematics',
    icon: 'lucide:calculator',
    score: 92,
    date: 'March 24, 2025',
    stats: [
      { icon: 'lucide:clock', label: 'Time', value: '18 min' },
      { icon: 'lucide:check', label: 'Correct', value: '13/15' },
      { icon: 'lucide:award', label: 'Rank', value: '5th in class' }
    ]
  },
  {
    title: 'Cell Biology',
    subject: 'Biology',
    icon: 'lucide:microscope',
    score: 76,
    date: 'March 22, 2025',
    stats: [
      { icon: 'lucide:clock', label: 'Time', value: '25 min' },
      { icon: 'lucide:check', label: 'Correct', value: '15/20' },
      { icon: 'lucide:award', label: 'Rank', value: '12th in class' }
    ]
  },
  {
    title: 'Grammar and Punctuation',
    subject: 'English',
    icon: 'lucide:book-open',
    score: 58,
    date: 'March 19, 2025',
    stats: [
      { icon: 'lucide:clock', label: 'Time', value: '14 min' },
      { icon: 'lucide:check', label: 'Correct', value: '7/12' },
      { icon: 'lucide:award', label: 'Rank', value: '18th in class' }
    ]
  }
];

const getScoreVariant = (score) => {
  if (score >= 80) return 'default';
  if (score >= 60) return 'secondary';
  return 'destructive';
};
</script>
