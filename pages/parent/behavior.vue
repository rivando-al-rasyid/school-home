<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Behavior</h1>
    
    <div class="mb-6 flex items-center gap-4 flex-wrap">
      <Select v-model="selectedChild">
        <SelectTrigger class="w-[200px]">
          <SelectValue placeholder="Select a child" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem v-for="(child, index) in children" :key="index" :value="child.id">
            {{ child.name }}
          </SelectItem>
        </SelectContent>
      </Select>
      
      <Select v-model="selectedPeriod">
        <SelectTrigger class="w-[200px]">
          <SelectValue placeholder="Select period" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem v-for="(period, index) in periods" :key="index" :value="period.value">
            {{ period.label }}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Behavior Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">4.8/5.0</div>
          <p class="text-xs text-muted-foreground">Excellent</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Merits</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">15</div>
          <p class="text-xs text-muted-foreground">This semester</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Demerits</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">2</div>
          <p class="text-xs text-muted-foreground">This semester</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Conduct Grade</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">A</div>
          <p class="text-xs text-muted-foreground">Excellent</p>
        </CardContent>
      </Card>
    </div>
    
    <Tabs default-value="incidents">
      <TabsList class="grid w-full grid-cols-3">
        <TabsTrigger value="incidents">Behavior Log</TabsTrigger>
        <TabsTrigger value="feedback">Teacher Feedback</TabsTrigger>
        <TabsTrigger value="trends">Behavior Trends</TabsTrigger>
      </TabsList>
      
      <TabsContent value="incidents">
        <Card>
          <CardHeader>
            <CardTitle>Behavior Log</CardTitle>
            <CardDescription>Record of behavior incidents and achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="relative">
              <div class="absolute h-full w-0.5 bg-border left-3.5 top-0"/>
              <div class="space-y-6">
                <div v-for="(incident, index) in behaviorLog" :key="index" class="relative pl-10">
                  <div
:class="[
                    'absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center',
                    incident.type === 'positive' ? 'bg-emerald-100 text-emerald-700' : incident.type === 'negative' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                  ]">
                    <Icon :name="getBehaviorIcon(incident.type)" class="h-4 w-4" />
                  </div>
                  <div class="space-y-1">
                    <div class="flex items-center justify-between">
                      <h4 class="font-medium">{{ incident.title }}</h4>
                      <Badge :variant="getBadgeVariant(incident.type)">{{ incident.points > 0 ? `+${incident.points}` : incident.points }}</Badge>
                    </div>
                    <p class="text-sm text-muted-foreground">{{ incident.description }}</p>
                    <div class="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{{ incident.date }} • {{ incident.teacher }}</span>
                      <span>{{ incident.class }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="feedback">
        <Card>
          <CardHeader>
            <CardTitle>Teacher Feedback</CardTitle>
            <CardDescription>Comments from teachers about your child's behavior</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-6">
              <div v-for="(feedback, index) in teacherFeedback" :key="index" class="p-4 border rounded-lg">
                <div class="flex justify-between items-start mb-2">
                  <div class="flex items-center">
                    <Avatar class="h-10 w-10 mr-3">
                      <AvatarImage :src="feedback.teacherAvatar" />
                      <AvatarFallback>{{ getInitials(feedback.teacher) }}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 class="font-medium">{{ feedback.teacher }}</h4>
                      <p class="text-sm text-muted-foreground">{{ feedback.subject }}</p>
                    </div>
                  </div>
                  <Badge>{{ feedback.rating }}/5</Badge>
                </div>
                <p class="text-sm mb-2">{{ feedback.comment }}</p>
                <div class="flex flex-wrap gap-2">
                  <Badge v-for="(trait, tIndex) in feedback.traits" :key="tIndex" variant="outline" class="mr-1 mb-1">
                    {{ trait }}
                  </Badge>
                </div>
                <div class="flex justify-between items-center mt-4 text-xs text-muted-foreground">
                  <span>{{ feedback.date }}</span>
                  <Button variant="ghost" size="sm" class="text-xs h-auto p-1">Reply</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="trends">
        <Card>
          <CardHeader>
            <CardTitle>Behavior Trends</CardTitle>
            <CardDescription>Analysis of behavior patterns over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-6">
              <div>
                <h3 class="font-medium mb-2">Monthly Behavior Score</h3>
                <div class="flex items-end h-40 space-x-2">
                  <div v-for="(month, index) in monthlyBehavior" :key="index" class="flex flex-col items-center">
                    <div class="text-sm font-medium">{{ month.score }}</div>
                    <div
:style="`height: ${month.score * 8}px; width: 30px;`" 
                         :class="[
                           'rounded-t',
                           month.score >= 4.5 ? 'bg-emerald-500' : 
                           month.score >= 4.0 ? 'bg-emerald-400' : 
                           month.score >= 3.5 ? 'bg-blue-500' : 
                           month.score >= 3.0 ? 'bg-amber-500' : 
                           'bg-red-500'
                         ]"/>
                    <div class="mt-2 text-xs">{{ month.name }}</div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 class="font-medium mb-4">Behavior by Subject</h3>
                <div class="space-y-4">
                  <div v-for="(subject, index) in subjectBehavior" :key="index" class="space-y-1">
                    <div class="flex justify-between">
                      <span>{{ subject.name }}</span>
                      <span class="font-medium">{{ subject.score }}/5</span>
                    </div>
                    <div class="w-full bg-accent h-3 rounded-full">
                      <div 
                        class="h-3 rounded-full" 
                        :style="`width: ${(subject.score / 5) * 100}%`"
                        :class="[
                          subject.score >= 4.5 ? 'bg-emerald-500' : 
                          subject.score >= 4.0 ? 'bg-emerald-400' : 
                          subject.score >= 3.5 ? 'bg-blue-500' : 
                          subject.score >= 3.0 ? 'bg-amber-500' : 
                          'bg-red-500'
                        ]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 class="font-medium mb-2">Behavioral Strengths</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div v-for="(strength, index) in behavioralStrengths" :key="index" class="border rounded-lg p-3">
                    <h4 class="font-medium text-sm">{{ strength.trait }}</h4>
                    <div class="flex mt-1">
                      <Icon 
                        v-for="i in 5" 
                        :key="i"
                        :name="i <= strength.rating ? 'lucide:star' : 'lucide:star-outline'" 
                        class="h-4 w-4" 
                        :class="i <= strength.rating ? 'text-primary' : 'text-muted-foreground'"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
    
    <Alert variant="default" class="mt-6 bg-amber-50 border-amber-200">
      <Icon name="lucide:info" class="h-4 w-4 text-amber-600" />
      <AlertTitle>About Behavior Tracking</AlertTitle>
      <AlertDescription>
        Our school uses a positive behavior intervention and support (PBIS) system to encourage positive behavior 
        and provide support for behavioral challenges. If you have concerns about your child's behavior, please 
        contact their homeroom teacher or school counselor.
      </AlertDescription>
    </Alert>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const selectedChild = ref('emma');
const selectedPeriod = ref('current');

const children = [
  { id: 'emma', name: 'Emma Davis' },
  { id: 'ethan', name: 'Ethan Davis' }
];

const periods = [
  { value: 'current', label: 'Current Semester' },
  { value: 'previous', label: 'Previous Semester' },
  { value: 'year', label: 'Full Year' }
];

const behaviorLog = [
  {
    type: 'positive',
    title: 'Academic Excellence',
    points: 5,
    description: 'Emma received a perfect score on her math test and helped other students understand the material.',
    date: 'March 23, 2025',
    teacher: 'Mr. Johnson',
    class: 'Mathematics'
  },
  {
    type: 'positive',
    title: 'Class Participation',
    points: 3,
    description: 'Active participation in class discussion with thoughtful contributions.',
    date: 'March 21, 2025',
    teacher: 'Mrs. Wilson',
    class: 'History'
  },
  {
    type: 'negative',
    title: 'Late Assignment',
    points: -1,
    description: 'Homework turned in a day late without prior arrangement.',
    date: 'March 18, 2025',
    teacher: 'Mr. Davis',
    class: 'English'
  },
  {
    type: 'positive',
    title: 'Helping Others',
    points: 2,
    description: 'Volunteered to help a new student get oriented with school procedures.',
    date: 'March 16, 2025',
    teacher: 'Ms. Thompson',
    class: 'Science'
  },
  {
    type: 'neutral',
    title: 'Classroom Reminder',
    points: 0,
    description: 'Gentle reminder about raising hand before speaking in class.',
    date: 'March 14, 2025',
    teacher: 'Mrs. Wilson',
    class: 'History'
  },
  {
    type: 'positive',
    title: 'Project Excellence',
    points: 5,
    description: 'Outstanding science project that went above and beyond requirements.',
    date: 'March 10, 2025',
    teacher: 'Ms. Thompson',
    class: 'Science'
  },
  {
    type: 'negative',
    title: 'Disruptive Behavior',
    points: -1,
    description: 'Talking during quiet work time after being asked to focus.',
    date: 'March 8, 2025',
    teacher: 'Mr. Johnson',
    class: 'Mathematics'
  }
];

const teacherFeedback = [
  {
    teacher: 'Mr. Johnson',
    teacherAvatar: 'https://i.pravatar.cc/150?img=68',
    subject: 'Mathematics',
    rating: 5,
    comment: 'Emma continues to excel in mathematics. She is focused, asks insightful questions, and is always willing to help her peers. She has natural leadership abilities in group settings and demonstrates strong problem-solving skills.',
    traits: ['Focused', 'Helpful', 'Problem Solver', 'Leader'],
    date: 'March 22, 2025'
  },
  {
    teacher: 'Ms. Thompson',
    teacherAvatar: 'https://i.pravatar.cc/150?img=47',
    subject: 'Science',
    rating: 5,
    comment: 'Emma\'s curiosity and enthusiasm in science class are outstanding. Her recent project on renewable energy was exceptional and showed deep understanding of the concepts. She follows lab safety procedures meticulously.',
    traits: ['Curious', 'Enthusiastic', 'Responsible', 'Thorough'],
    date: 'March 20, 2025'
  },
  {
    teacher: 'Mrs. Wilson',
    teacherAvatar: 'https://i.pravatar.cc/150?img=39',
    subject: 'History',
    rating: 4,
    comment: 'Emma participates well in class discussions and has good historical analysis skills. She could benefit from being more precise in her written assignments. Overall, she shows genuine interest in the subject matter.',
    traits: ['Participative', 'Analytical', 'Engaged'],
    date: 'March 18, 2025'
  },
  {
    teacher: 'Mr. Davis',
    teacherAvatar: 'https://i.pravatar.cc/150?img=60',
    subject: 'English',
    rating: 4,
    comment: 'Emma demonstrates excellent reading comprehension and literary analysis. She has been turning in assignments on time except for one recent instance. Her writing skills are strong but there\'s room for improvement in essay structure.',
    traits: ['Creative', 'Articulate', 'Insightful'],
    date: 'March 15, 2025'
  }
];

const monthlyBehavior = [
  { name: 'Nov', score: 4.2 },
  { name: 'Dec', score: 4.5 },
  { name: 'Jan', score: 4.6 },
  { name: 'Feb', score: 4.7 },
  { name: 'Mar', score: 4.8 }
];

const subjectBehavior = [
  { name: 'Mathematics', score: 5.0 },
  { name: 'Science', score: 4.8 },
  { name: 'English', score: 4.5 },
  { name: 'History', score: 4.2 },
  { name: 'Physical Education', score: 5.0 },
  { name: 'Art', score: 4.9 }
];

const behavioralStrengths = [
  { trait: 'Responsibility', rating: 5 },
  { trait: 'Cooperation', rating: 5 },
  { trait: 'Participation', rating: 4 },
  { trait: 'Respect', rating: 5 },
  { trait: 'Attentiveness', rating: 4 },
  { trait: 'Organization', rating: 5 }
];

const getBehaviorIcon = (type) => {
  switch (type) {
    case 'positive': return 'lucide:thumbs-up';
    case 'negative': return 'lucide:thumbs-down';
    default: return 'lucide:info';
  }
};

const getBadgeVariant = (type) => {
  switch (type) {
    case 'positive': return 'success';
    case 'negative': return 'destructive';
    default: return 'secondary';
  }
};

const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('');
};
definePageMeta({
  layout: 'parent'
})

</script>
