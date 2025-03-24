<template>
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center">For Teachers</h1>
    
    <div class="max-w-6xl mx-auto">
      <!-- Hero section -->
      <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 class="text-3xl font-bold mb-4">Streamline Your Teaching Process</h2>
          <p class="text-muted-foreground mb-6">
            Our platform simplifies administrative tasks so you can focus on what matters most: teaching. From attendance tracking to grade management, we provide the tools you need to enhance your educational impact.
          </p>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <Avatar class="h-8 w-8 mt-1 bg-primary/10">
                <AvatarFallback class="text-primary">
                  <Icon name="lucide:check" size="16" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 class="font-semibold">Save time on administrative tasks</h3>
                <p class="text-sm text-muted-foreground">Automate attendance, grade recording, and reporting</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Avatar class="h-8 w-8 mt-1 bg-primary/10">
                <AvatarFallback class="text-primary">
                  <Icon name="lucide:check" size="16" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 class="font-semibold">Enhanced communication</h3>
                <p class="text-sm text-muted-foreground">Connect with students and parents effortlessly</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Avatar class="h-8 w-8 mt-1 bg-primary/10">
                <AvatarFallback class="text-primary">
                  <Icon name="lucide:check" size="16" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 class="font-semibold">Data-driven insights</h3>
                <p class="text-sm text-muted-foreground">Gain valuable insights into student performance and classroom trends</p>
              </div>
            </div>
          </div>
          <NuxtLink to="/register" class="mt-8 inline-block">
            <Button>Join as a Teacher</Button>
          </NuxtLink>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80" alt="Teacher helping students" class="rounded-lg shadow-lg w-full h-auto" />
        </div>
      </div>
      
      <!-- Features grid -->
      <h2 class="text-3xl font-bold mb-8 text-center">Teacher Platform Features</h2>
      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <Card class="shadow-sm">
          <CardHeader class="pb-2">
            <CardTitle class="text-xl">Class Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              Organize your classes, create seating charts, and manage student groups effortlessly. Track attendance with just a few clicks.
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm">
          <CardHeader class="pb-2">
            <CardTitle class="text-xl">Assignment Creation</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              Create, distribute, and collect assignments digitally. Set due dates, attach resources, and provide detailed instructions.
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm">
          <CardHeader class="pb-2">
            <CardTitle class="text-xl">Gradebook</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              Record and manage grades with our intuitive gradebook. Calculate weighted averages, track missing assignments, and export reports.
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm">
          <CardHeader class="pb-2">
            <CardTitle class="text-xl">Parent Communication</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              Message parents individually or send group announcements. Schedule conferences and keep families informed about student progress.
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm">
          <CardHeader class="pb-2">
            <CardTitle class="text-xl">Curriculum Planning</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              Plan lessons, organize units, and align curriculum with standards. Share resources with colleagues and build a repository of teaching materials.
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm">
          <CardHeader class="pb-2">
            <CardTitle class="text-xl">Analytics Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              Gain insights into student performance with detailed analytics. Identify trends, spot knowledge gaps, and tailor instruction to meet student needs.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <!-- Testimonials -->
      <h2 class="text-3xl font-bold mb-8 text-center">What Teachers Say</h2>
      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <Card class="shadow-sm">
          <CardContent class="pt-6">
            <div class="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=65" />
                <AvatarFallback>EJ</AvatarFallback>
              </Avatar>
              <div>
                <p class="font-medium">Emily Johnson</p>
                <p class="text-sm text-muted-foreground">English Teacher</p>
              </div>
            </div>
            <p class="italic text-muted-foreground">
              "This platform has saved me countless hours on administrative tasks. I can quickly track attendance, grade assignments, and communicate with parents all in one place."
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm">
          <CardContent class="pt-6">
            <div class="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
              <div>
                <p class="font-medium">Marcus Brown</p>
                <p class="text-sm text-muted-foreground">Math Department Head</p>
              </div>
            </div>
            <p class="italic text-muted-foreground">
              "The analytics have transformed our department's approach to instruction. We can now identify struggling students early and provide targeted interventions based on real data."
            </p>
          </CardContent>
        </Card>
        
        <Card class="shadow-sm">
          <CardContent class="pt-6">
            <div class="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?img=28" />
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
              <div>
                <p class="font-medium">Lisa Garcia</p>
                <p class="text-sm text-muted-foreground">Science Teacher</p>
              </div>
            </div>
            <p class="italic text-muted-foreground">
              "Parent-teacher communication has never been easier. The messaging system ensures I can keep families updated on student progress without playing phone tag or sending emails that go unread."
            </p>
          </CardContent>
        </Card>
      </div>
      
      <!-- CTA -->
      <div class="text-center p-8 bg-muted rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Ready to transform your teaching experience?</h2>
        <p class="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join thousands of educators who have streamlined their workflow and enhanced their teaching impact with our platform.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/register">
            <Button size="lg">Create Teacher Account</Button>
          </NuxtLink>
          <NuxtLink to="/contact">
            <Button variant="outline" size="lg">Request a Demo</Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
</script>
