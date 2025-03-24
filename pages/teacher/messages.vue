<template>
  <div>
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <div class="relative w-full md:w-96">
        <input type="text" placeholder="Search messages..." class="pl-8 pr-4 py-2 text-sm rounded-md border focus:ring-2 focus:ring-primary focus:border-primary w-full" />
        <Icon name="lucide:search" class="h-4 w-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
      </div>
      <Button>
        <Icon name="lucide:plus" class="mr-2 h-4 w-4" />
        New Message
      </Button>
    </div>
    
    <div class="grid md:grid-cols-12 gap-6">
      <!-- Message List -->
      <div class="md:col-span-5 lg:col-span-4">
        <Card class="shadow-sm border">
          <CardHeader class="px-4 py-3">
            <div class="flex justify-between items-center">
              <CardTitle class="text-base">Inbox</CardTitle>
              <Badge>5 unread</Badge>
            </div>
          </CardHeader>
          <CardContent class="p-0">
            <div class="space-y-px">
              <div class="p-4 cursor-pointer bg-primary/5 border-l-2 border-primary hover:bg-accent">
                <div class="flex justify-between items-start mb-1">
                  <h4 class="font-medium text-sm flex items-center">
                    <span class="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Principal Anderson
                  </h4>
                  <span class="text-xs text-muted-foreground">12:45 PM</span>
                </div>
                <h5 class="text-sm font-medium mb-1">Staff Meeting Reminder</h5>
                <p class="text-xs text-muted-foreground line-clamp-2">
                  Reminder that we have our monthly staff meeting tomorrow at 4pm in the library. Please bring your department reports and...
                </p>
              </div>
              
              <div class="p-4 cursor-pointer bg-primary/5 border-l-2 border-primary hover:bg-accent">
                <div class="flex justify-between items-start mb-1">
                  <h4 class="font-medium text-sm flex items-center">
                    <span class="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Emily Brown's Parent
                  </h4>
                  <span class="text-xs text-muted-foreground">Yesterday</span>
                </div>
                <h5 class="text-sm font-medium mb-1">Question about homework</h5>
                <p class="text-xs text-muted-foreground line-clamp-2">
                  Hello Ms. Wilson, Emily is having some trouble with the latest algebra homework. Could we schedule a time to discuss...
                </p>
              </div>
              
              <div class="p-4 cursor-pointer bg-primary/5 border-l-2 border-primary hover:bg-accent">
                <div class="flex justify-between items-start mb-1">
                  <h4 class="font-medium text-sm flex items-center">
                    <span class="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    School IT Department
                  </h4>
                  <span class="text-xs text-muted-foreground">Mar 24</span>
                </div>
                <h5 class="text-sm font-medium mb-1">New Software Installation</h5>
                <p class="text-xs text-muted-foreground line-clamp-2">
                  We will be installing the new mathematics modeling software on all classroom computers this weekend. Please save any...
                </p>
              </div>
              
              <div class="p-4 cursor-pointer bg-primary/5 border-l-2 border-primary hover:bg-accent">
                <div class="flex justify-between items-start mb-1">
                  <h4 class="font-medium text-sm flex items-center">
                    <span class="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Math Department
                  </h4>
                  <span class="text-xs text-muted-foreground">Mar 23</span>
                </div>
                <h5 class="text-sm font-medium mb-1">Curriculum Meeting</h5>
                <p class="text-xs text-muted-foreground line-clamp-2">
                  Please join us for a curriculum planning meeting on Friday at 3pm. We'll be discussing changes to the Algebra 2 curriculum...
                </p>
              </div>
              
              <div class="p-4 cursor-pointer bg-primary/5 border-l-2 border-primary hover:bg-accent">
                <div class="flex justify-between items-start mb-1">
                  <h4 class="font-medium text-sm flex items-center">
                    <span class="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Kevin Thomas's Parent
                  </h4>
                  <span class="text-xs text-muted-foreground">Mar 22</span>
                </div>
                <h5 class="text-sm font-medium mb-1">Grades Concern</h5>
                <p class="text-xs text-muted-foreground line-clamp-2">
                  Good afternoon Ms. Wilson, I'm concerned about Kevin's recent test scores in your class. I'd like to discuss what we can do...
                </p>
              </div>
              
              <div class="p-4 cursor-pointer hover:bg-accent">
                <div class="flex justify-between items-start mb-1">
                  <h4 class="font-medium text-sm">Ryan Miller</h4>
                  <span class="text-xs text-muted-foreground">Mar 21</span>
                </div>
                <h5 class="text-sm font-medium mb-1">Homework Question</h5>
                <p class="text-xs text-muted-foreground line-clamp-2">
                  Hi Ms. Wilson, I'm stuck on problem #7 from yesterday's homework. Could you please explain how to solve for the variable when...
                </p>
              </div>
              
              <div class="p-4 cursor-pointer hover:bg-accent">
                <div class="flex justify-between items-start mb-1">
                  <h4 class="font-medium text-sm">School Administration</h4>
                  <span class="text-xs text-muted-foreground">Mar 20</span>
                </div>
                <h5 class="text-sm font-medium mb-1">Professional Development Day</h5>
                <p class="text-xs text-muted-foreground line-clamp-2">
                  Please note that April 15th will be a professional development day. All teachers are required to attend the workshops...
                </p>
              </div>
            </div>
          </CardContent>
          <div class="border-t p-3 flex justify-between items-center">
            <div class="text-sm text-muted-foreground">
              7 of 42 messages
            </div>
            <div class="flex space-x-1">
              <Button variant="ghost" size="icon" class="h-8 w-8" disabled>
                <Icon name="lucide:chevron-left" class="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" class="h-8 w-8">
                <Icon name="lucide:chevron-right" class="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
      
      <!-- Message Content -->
      <div class="md:col-span-7 lg:col-span-8">
        <Card class="shadow-sm h-full flex flex-col">
          <CardHeader class="px-6 py-4 border-b flex-none">
            <div class="flex justify-between items-start">
              <div>
                <div class="flex items-center gap-3 mb-0.5">
                  <Avatar class="h-9 w-9">
                    <AvatarImage src="https://i.pravatar.cc/150?img=4" />
                    <AvatarFallback>PA</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle class="text-base">Principal Anderson</CardTitle>
                    <p class="text-xs text-muted-foreground">To: All Teaching Staff</p>
                  </div>
                </div>
                <div class="ml-12">
                  <h3 class="text-lg font-medium">Staff Meeting Reminder</h3>
                  <p class="text-xs text-muted-foreground">Today at 12:45 PM</p>
                </div>
              </div>
              <div class="flex space-x-2">
                <Button variant="ghost" size="icon" class="h-8 w-8">
                  <Icon name="lucide:reply" class="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" class="h-8 w-8">
                  <Icon name="lucide:trash-2" class="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" class="h-8 w-8">
                  <Icon name="lucide:more-horizontal" class="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent class="px-6 py-4 flex-grow overflow-auto">
            <div class="prose max-w-none">
              <p>Dear Teaching Staff,</p>
              <p>Reminder that we have our monthly staff meeting tomorrow at 4pm in the library. Please bring your department reports and be prepared to discuss the following agenda items:</p>
              <ol>
                <li>End of term assessment planning</li>
                <li>Upcoming parent-teacher conference week</li>
                <li>New digital learning resources budget allocation</li>
                <li>Professional development opportunities for summer</li>
              </ol>
              <p>If you have any additional items you'd like to add to the agenda, please let me know by the end of the day.</p>
              <p>For those of you participating in the Math Olympiad next month, we'll have a separate 15-minute meeting immediately following the main staff meeting to go over logistics.</p>
              <p>As always, coffee and light refreshments will be provided.</p>
              <p>Thank you for your continued dedication to our students and school community.</p>
              <p>Best regards,<br>Principal Anderson</p>
            </div>
            
            <div class="border rounded-md p-3 mt-6 bg-muted/30">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="lucide:paperclip" class="h-4 w-4 text-muted-foreground" />
                <span class="text-sm font-medium">2 Attachments</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="flex items-center gap-3 p-3 bg-background rounded border">
                  <div class="h-10 w-10 bg-primary/10 rounded flex items-center justify-center">
                    <Icon name="lucide:file-text" class="h-5 w-5 text-primary" />
                  </div>
                  <div class="flex-grow min-w-0">
                    <p class="text-sm font-medium truncate">Staff_Meeting_Agenda_March.pdf</p>
                    <p class="text-xs text-muted-foreground">123 KB</p>
                  </div>
                  <Button variant="ghost" size="icon" class="h-8 w-8">
                    <Icon name="lucide:download" class="h-4 w-4" />
                  </Button>
                </div>
                <div class="flex items-center gap-3 p-3 bg-background rounded border">
                  <div class="h-10 w-10 bg-primary/10 rounded flex items-center justify-center">
                    <Icon name="lucide:file-spreadsheet" class="h-5 w-5 text-primary" />
                  </div>
                  <div class="flex-grow min-w-0">
                    <p class="text-sm font-medium truncate">Department_Report_Template.xlsx</p>
                    <p class="text-xs text-muted-foreground">85 KB</p>
                  </div>
                  <Button variant="ghost" size="icon" class="h-8 w-8">
                    <Icon name="lucide:download" class="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <div class="border-t p-4 flex-none">
            <div class="border rounded-md overflow-hidden">
              <div class="border-b p-3 bg-muted/30 flex justify-between items-center">
                <div class="text-sm font-medium">Reply to Principal Anderson</div>
                <div class="flex space-x-1">
                  <Button variant="ghost" size="icon" class="h-7 w-7">
                    <Icon name="lucide:paperclip" class="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" class="h-7 w-7">
                    <Icon name="lucide:smile" class="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div class="p-3">
                <textarea 
                  class="w-full border-0 focus:ring-0 resize-none min-h-[100px] p-0 placeholder:text-muted-foreground text-sm"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
            </div>
            <div class="flex justify-end mt-3">
              <Button variant="outline" class="mr-2">
                Save Draft
              </Button>
              <Button>
                <Icon name="lucide:send" class="mr-2 h-4 w-4" />
                Send
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

definePageMeta({
  layout: 'teacher'
});
</script>
