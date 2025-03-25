<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Study Groups</h1>
    
    <!-- Search and Filter -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
      <div class="relative flex-grow max-w-md">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon name="lucide:search" class="h-4 w-4 text-muted-foreground" />
        </div>
        <input 
          type="text"
          placeholder="Search study groups..."
          class="pl-10 pr-4 py-2 text-sm border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary"
        >
      </div>
      <div class="flex items-center space-x-2">
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
        <Select default-value="all">
          <SelectTrigger class="w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Groups</SelectItem>
            <SelectItem value="my">My Groups</SelectItem>
            <SelectItem value="open">Open Groups</SelectItem>
            <SelectItem value="upcoming">Upcoming Sessions</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    
    <!-- Your Groups -->
    <Card class="shadow-sm mb-8">
      <CardHeader>
        <CardTitle>Your Study Groups</CardTitle>
        <CardDescription>Groups you've joined or created</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="(group, index) in myGroups" :key="index" class="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div class="flex justify-between items-start mb-3">
              <div class="flex items-center">
                <div class="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Icon :name="group.icon" class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 class="font-medium">{{ group.name }}</h3>
                  <p class="text-xs text-muted-foreground">{{ group.subject }}</p>
                </div>
              </div>
              <Badge :variant="group.isLeader ? 'default' : 'outline'">
                {{ group.isLeader ? 'Leader' : 'Member' }}
              </Badge>
            </div>
            <p class="text-sm mb-3">{{ group.description }}</p>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <Icon name="lucide:users" class="h-4 w-4 text-muted-foreground mr-1" />
                <span class="text-xs text-muted-foreground">{{ group.members }} members</span>
              </div>
              <div class="flex items-center">
                <Icon name="lucide:calendar" class="h-4 w-4 text-muted-foreground mr-1" />
                <span class="text-xs text-muted-foreground">Meets {{ group.schedule }}</span>
              </div>
            </div>
            <div v-if="group.nextSession" class="bg-muted rounded-md p-3 mb-3">
              <div class="flex items-center justify-between mb-1">
                <h4 class="text-sm font-medium">Next Session</h4>
                <Badge variant="secondary">{{ group.nextSession.timeRemaining }}</Badge>
              </div>
              <div class="flex items-center text-xs text-muted-foreground mb-1">
                <Icon name="lucide:calendar" class="h-3 w-3 mr-1" />
                <span>{{ group.nextSession.date }}</span>
                <span class="mx-2">•</span>
                <Icon name="lucide:clock" class="h-3 w-3 mr-1" />
                <span>{{ group.nextSession.time }}</span>
              </div>
              <div class="flex items-center text-xs text-muted-foreground">
                <Icon name="lucide:book-open" class="h-3 w-3 mr-1" />
                <span>Topic: {{ group.nextSession.topic }}</span>
              </div>
            </div>
            <div class="flex justify-between">
              <Button>
                <Icon name="lucide:message-circle" class="h-4 w-4 mr-1" />
                Group Chat
              </Button>
              <Button variant="outline">
                <Icon name="lucide:external-link" class="h-4 w-4 mr-1" />
                View Details
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <!-- Available Groups -->
    <Card class="shadow-sm mb-8">
      <CardHeader>
        <CardTitle>Available Study Groups</CardTitle>
        <CardDescription>Join a group to study with your peers</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="(group, index) in availableGroups" :key="index" class="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div class="flex justify-between items-start mb-3">
              <div class="flex items-center">
                <div class="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Icon :name="group.icon" class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 class="font-medium">{{ group.name }}</h3>
                  <p class="text-xs text-muted-foreground">{{ group.subject }}</p>
                </div>
              </div>
              <Badge :variant="group.openSpots > 3 ? 'outline' : 'secondary'">
                {{ group.openSpots }} spots left
              </Badge>
            </div>
            <p class="text-sm mb-3">{{ group.description }}</p>
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <Icon name="lucide:users" class="h-4 w-4 text-muted-foreground mr-1" />
                <span class="text-xs text-muted-foreground">{{ group.members }} members</span>
              </div>
              <div class="flex items-center">
                <Icon name="lucide:calendar" class="h-4 w-4 text-muted-foreground mr-1" />
                <span class="text-xs text-muted-foreground">Meets {{ group.schedule }}</span>
              </div>
            </div>
            <div class="flex items-center mb-3">
              <Avatar class="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" alt="Leader" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span class="text-xs ml-2">Led by <span class="font-medium">{{ group.leader }}</span></span>
            </div>
            <Button class="w-full">
              <Icon name="lucide:plus" class="h-4 w-4 mr-1" />
              Join Group
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
    
    <!-- Create Group Card -->
    <Card class="shadow-sm mb-8">
      <CardHeader>
        <CardTitle>Create a Study Group</CardTitle>
        <CardDescription>Start your own group and invite others to join</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2">
              <Label for="group-name">Group Name</Label>
              <Input id="group-name" placeholder="e.g., Calculus Study Crew" />
            </div>
            <div class="space-y-2">
              <Label for="group-subject">Subject</Label>
              <Select default-value="math">
                <SelectTrigger id="group-subject">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div class="space-y-2">
            <Label for="group-description">Description</Label>
            <Textarea id="group-description" placeholder="Describe what your group will focus on..." />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2">
              <Label for="group-schedule">Meeting Schedule</Label>
              <Select default-value="weekly">
                <SelectTrigger id="group-schedule">
                  <SelectValue placeholder="Select a schedule" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="biweekly">Bi-weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="adhoc">Ad hoc</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div class="space-y-2">
              <Label for="group-size">Maximum Size</Label>
              <Select default-value="8">
                <SelectTrigger id="group-size">
                  <SelectValue placeholder="Select group size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 members</SelectItem>
                  <SelectItem value="8">8 members</SelectItem>
                  <SelectItem value="10">10 members</SelectItem>
                  <SelectItem value="15">15 members</SelectItem>
                  <SelectItem value="20">20 members</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <Checkbox id="private-group" />
              <Label for="private-group" class="text-sm">Make this a private group (invite only)</Label>
            </div>
          </div>
          <Button>Create Study Group</Button>
        </div>
      </CardContent>
    </Card>
    
    <!-- Upcoming Sessions -->
    <Card class="shadow-sm">
      <CardHeader>
        <CardTitle>Upcoming Study Sessions</CardTitle>
        <CardDescription>Schedule for all your study groups</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div v-for="(day, index) in upcomingSessions" :key="index">
            <h3 class="font-medium text-sm mb-2">{{ day.date }}</h3>
            <div class="space-y-2">
              <div v-for="(session, sIndex) in day.sessions" :key="sIndex" class="flex items-start border rounded-lg p-3">
                <div class="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                  <Icon :name="session.icon" class="h-5 w-5 text-primary" />
                </div>
                <div class="flex-grow">
                  <div class="flex items-start justify-between">
                    <div>
                      <h4 class="font-medium">{{ session.group }}</h4>
                      <p class="text-xs text-muted-foreground">{{ session.subject }}</p>
                    </div>
                    <Badge variant="outline">{{ session.time }}</Badge>
                  </div>
                  <p class="text-sm mt-1">{{ session.topic }}</p>
                  <div class="flex items-center mt-2">
                    <div class="flex -space-x-2 mr-3">
                      <Avatar v-for="(member, mIndex) in session.attendees.slice(0, 3)" :key="mIndex" class="h-6 w-6 border-2 border-background">
                        <AvatarImage :src="member.avatar" :alt="member.name" />
                        <AvatarFallback>{{ member.initials }}</AvatarFallback>
                      </Avatar>
                      <div v-if="session.attendees.length > 3" class="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs border-2 border-background">
                        +{{ session.attendees.length - 3 }}
                      </div>
                    </div>
                    <span class="text-xs text-muted-foreground">{{ session.attendees.length }} attending</span>
                  </div>
                </div>
                <div class="flex flex-col items-end space-y-2 ml-2">
                  <Button size="sm">
                    <Icon name="lucide:calendar-check" class="h-4 w-4 mr-1" />
                    RSVP
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="lucide:external-link" class="h-4 w-4 mr-1" />
                    Details
                  </Button>
                </div>
              </div>
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

definePageMeta({
  layout: 'student'
})

const myGroups = [
  {
    name: 'Calculus Crew',
    subject: 'Mathematics',
    icon: 'lucide:calculator',
    description: 'Advanced calculus study group focusing on derivatives, integrals, and applications.',
    members: 8,
    schedule: 'Tuesdays & Thursdays',
    isLeader: true,
    nextSession: {
      date: 'Tuesday, March 26, 2025',
      time: '4:00 PM - 5:30 PM',
      topic: 'Integration by Parts',
      timeRemaining: 'Tomorrow'
    }
  },
  {
    name: 'Biology Study Circle',
    subject: 'Biology',
    icon: 'lucide:microscope',
    description: 'Focused on cellular biology, genetics, and preparing for the AP Biology exam.',
    members: 12,
    schedule: 'Wednesdays',
    isLeader: false,
    nextSession: {
      date: 'Wednesday, March 27, 2025',
      time: '3:30 PM - 5:00 PM',
      topic: 'Cellular Respiration',
      timeRemaining: '2 days'
    }
  }
];

const availableGroups = [
  {
    name: 'Physics Problem Solvers',
    subject: 'Physics',
    icon: 'lucide:atom',
    description: 'Group dedicated to working through challenging physics problems together.',
    members: 7,
    openSpots: 3,
    schedule: 'Mondays & Fridays',
    leader: 'James Wilson'
  },
  {
    name: 'Shakespeare Analysis',
    subject: 'English Literature',
    icon: 'lucide:book-open',
    description: 'Deep dive into Shakespeare\'s plays, focusing on themes, characters, and literary devices.',
    members: 9,
    openSpots: 1,
    schedule: 'Thursdays',
    leader: 'Emily Parker'
  },
  {
    name: 'Chemistry Concepts',
    subject: 'Chemistry',
    icon: 'lucide:flask-conical',
    description: 'Reviewing key chemistry concepts and working through practice problems together.',
    members: 5,
    openSpots: 5,
    schedule: 'Wednesdays',
    leader: 'Michael Chen'
  },
  {
    name: 'U.S. History Review',
    subject: 'History',
    icon: 'lucide:landmark',
    description: 'Collaborative review of American history, preparing for exams and essays.',
    members: 8,
    openSpots: 7,
    schedule: 'Tuesdays',
    leader: 'Sarah Johnson'
  }
];

const upcomingSessions = [
  {
    date: 'Today - March 25, 2025',
    sessions: [
      {
        group: 'Spanish Conversation',
        subject: 'Foreign Languages',
        icon: 'lucide:languages',
        time: '3:30 PM - 4:30 PM',
        topic: 'Practicing Past Tense Conversations',
        attendees: [
          { name: 'John Smith', avatar: 'https://i.pravatar.cc/150?img=1', initials: 'JS' },
          { name: 'Maria Garcia', avatar: 'https://i.pravatar.cc/150?img=5', initials: 'MG' },
          { name: 'David Kim', avatar: 'https://i.pravatar.cc/150?img=7', initials: 'DK' },
          { name: 'Lisa Chen', avatar: 'https://i.pravatar.cc/150?img=9', initials: 'LC' },
          { name: 'Omar Patel', avatar: 'https://i.pravatar.cc/150?img=3', initials: 'OP' }
        ]
      }
    ]
  },
  {
    date: 'Tomorrow - March 26, 2025',
    sessions: [
      {
        group: 'Calculus Crew',
        subject: 'Mathematics',
        icon: 'lucide:calculator',
        time: '4:00 PM - 5:30 PM',
        topic: 'Integration by Parts',
        attendees: [
          { name: 'You', avatar: 'https://i.pravatar.cc/150?img=12', initials: 'ME' },
          { name: 'Alex Novak', avatar: 'https://i.pravatar.cc/150?img=11', initials: 'AN' },
          { name: 'Jessica Park', avatar: 'https://i.pravatar.cc/150?img=10', initials: 'JP' },
          { name: 'Ryan Cooper', avatar: 'https://i.pravatar.cc/150?img=13', initials: 'RC' },
          { name: 'Zoe Adams', avatar: 'https://i.pravatar.cc/150?img=14', initials: 'ZA' },
          { name: 'Thomas Lee', avatar: 'https://i.pravatar.cc/150?img=15', initials: 'TL' }
        ]
      }
    ]
  },
  {
    date: 'Wednesday - March 27, 2025',
    sessions: [
      {
        group: 'Biology Study Circle',
        subject: 'Biology',
        icon: 'lucide:microscope',
        time: '3:30 PM - 5:00 PM',
        topic: 'Cellular Respiration',
        attendees: [
          { name: 'You', avatar: 'https://i.pravatar.cc/150?img=12', initials: 'ME' },
          { name: 'Emma Wilson', avatar: 'https://i.pravatar.cc/150?img=16', initials: 'EW' },
          { name: 'Marcus Johnson', avatar: 'https://i.pravatar.cc/150?img=17', initials: 'MJ' },
          { name: 'Olivia Martinez', avatar: 'https://i.pravatar.cc/150?img=18', initials: 'OM' },
          { name: 'Jason Brown', avatar: 'https://i.pravatar.cc/150?img=19', initials: 'JB' },
          { name: 'Sophia Lee', avatar: 'https://i.pravatar.cc/150?img=20', initials: 'SL' },
          { name: 'Nathan Park', avatar: 'https://i.pravatar.cc/150?img=21', initials: 'NP' },
          { name: 'Isabella Kim', avatar: 'https://i.pravatar.cc/150?img=22', initials: 'IK' }
        ]
      },
      {
        group: 'Chemistry Concepts',
        subject: 'Chemistry',
        icon: 'lucide:flask-conical',
        time: '5:15 PM - 6:45 PM',
        topic: 'Balancing Chemical Equations',
        attendees: [
          { name: 'Michael Chen', avatar: 'https://i.pravatar.cc/150?img=23', initials: 'MC' },
          { name: 'Aisha Patel', avatar: 'https://i.pravatar.cc/150?img=24', initials: 'AP' },
          { name: 'Ethan Davis', avatar: 'https://i.pravatar.cc/150?img=25', initials: 'ED' },
          { name: 'Hannah Clark', avatar: 'https://i.pravatar.cc/150?img=26', initials: 'HC' }
        ]
      }
    ]
  }
];
</script>
