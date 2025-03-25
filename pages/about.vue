<template>
  <div class="container mx-auto py-16 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center">About Our School</h1>
    
    <div class="max-w-4xl mx-auto">
      <Tabs default-value="mission" class="w-full">
        <TabsList class="grid w-full grid-cols-3">
          <TabsTrigger value="mission">Our Mission</TabsTrigger>
          <TabsTrigger value="values">Core Values</TabsTrigger>
          <TabsTrigger value="approach">Our Approach</TabsTrigger>
        </TabsList>
        <TabsContent value="mission">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>
                What drives us every day
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our mission is to empower students, teachers, and parents with technology that enhances the educational experience. We strive to create a connected school community where information flows freely, communication is seamless, and education thrives in a digital environment.
              </p>
              <p class="mt-4">
                We believe in making education accessible, transparent, and efficient for all stakeholders, ensuring that technology serves as a bridge rather than a barrier in the learning process.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="values">
          <Card>
            <CardHeader>
              <CardTitle>Core Values</CardTitle>
              <CardDescription>
                The principles that guide our work
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul class="list-disc pl-5 space-y-2">
                <li><span class="font-semibold">Excellence:</span> We strive for excellence in all aspects of education and technology.</li>
                <li><span class="font-semibold">Integrity:</span> We maintain honest and ethical practices in all our operations.</li>
                <li><span class="font-semibold">Innovation:</span> We consistently seek new ways to improve educational experiences.</li>
                <li><span class="font-semibold">Collaboration:</span> We believe in the power of working together across all educational roles.</li>
                <li><span class="font-semibold">Inclusivity:</span> We design our platform to be accessible and beneficial for all users.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="approach">
          <Card>
            <CardHeader>
              <CardTitle>Our Approach</CardTitle>
              <CardDescription>
                How we implement our vision
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our approach combines educational expertise with technological innovation. We work closely with educators, students, and parents to understand their needs and challenges, then develop solutions that address these specific requirements.
              </p>
              <p class="mt-4">
                We emphasize user-friendly design, robust functionality, and secure data management. Our platform evolves continuously based on feedback from our users and advances in educational technology.
              </p>
              <p class="mt-4">
                By focusing on both pedagogical principles and technical excellence, we create a system that truly enhances the educational experience for everyone involved.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div class="mt-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-2xl font-bold mb-4">Our History</h2>
          <p class="text-muted-foreground">
            Founded in 2018, our school management system began as a small project designed to solve communication challenges at a local school. As more schools adopted our solution, we expanded our capabilities to include comprehensive features for students, teachers, and parents.
          </p>
          <p class="mt-4 text-muted-foreground">
            Today, we serve hundreds of schools nationwide, continuously refining our platform based on feedback from educational professionals and the latest advances in technology.
          </p>
        </div>
        
        <div>
          <h2 class="text-2xl font-bold mb-4">Our Team</h2>
          <p class="text-muted-foreground">
            Our diverse team brings together experts in education, software development, user experience design, and data security. This interdisciplinary approach ensures that our platform is both pedagogically sound and technologically robust.
          </p>
          <p class="mt-4 text-muted-foreground">
            We're united by a passion for improving education through thoughtful application of technology, and we're committed to supporting schools in their digital transformation journey.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
