<template>
  <div>
    <h1 class="text-3xl font-bold mb-2">System Settings</h1>
    <p class="text-muted-foreground mb-6">Configure system preferences, permissions, and general settings</p>
    
    <!-- Settings Navigation -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="md:col-span-1">
        <Card class="shadow-sm sticky top-4">
          <CardContent class="p-0">
            <nav class="space-y-1">
              <a href="#general" class="flex items-center px-4 py-2 text-sm font-medium text-primary border-l-2 border-primary">
                <Icon name="lucide:settings" class="h-5 w-5 mr-3" />
                General Settings
              </a>
              <a href="#school" class="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary border-l-2 border-transparent">
                <Icon name="lucide:building" class="h-5 w-5 mr-3" />
                School Information
              </a>
              <a href="#academic" class="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary border-l-2 border-transparent">
                <Icon name="lucide:book" class="h-5 w-5 mr-3" />
                Academic Settings
              </a>
              <a href="#users" class="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary border-l-2 border-transparent">
                <Icon name="lucide:users" class="h-5 w-5 mr-3" />
                User Permissions
              </a>
              <a href="#notifications" class="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary border-l-2 border-transparent">
                <Icon name="lucide:bell" class="h-5 w-5 mr-3" />
                Notifications
              </a>
              <a href="#security" class="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary border-l-2 border-transparent">
                <Icon name="lucide:shield" class="h-5 w-5 mr-3" />
                Security
              </a>
              <a href="#integrations" class="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary border-l-2 border-transparent">
                <Icon name="lucide:plug" class="h-5 w-5 mr-3" />
                Integrations
              </a>
              <a href="#backup" class="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary border-l-2 border-transparent">
                <Icon name="lucide:database" class="h-5 w-5 mr-3" />
                Backup & Restore
              </a>
              <a href="#advanced" class="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary border-l-2 border-transparent">
                <Icon name="lucide:terminal" class="h-5 w-5 mr-3" />
                Advanced
              </a>
            </nav>
          </CardContent>
        </Card>
      </div>
      
      <!-- Settings Content -->
      <div class="md:col-span-3 space-y-6">
        <!-- General Settings -->
        <Card id="general" class="shadow-sm scroll-mt-6">
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
            <CardDescription>Basic system configuration and preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-1">School Name</label>
                <input type="text" value="Cascade Academy" class="w-full px-3 py-2 rounded-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-1">System Language</label>
                <div class="relative">
                  <select class="w-full pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
                    <option>English (US)</option>
                    <option>Spanish (ES)</option>
                    <option>French (FR)</option>
                    <option>German (DE)</option>
                    <option>Chinese (ZH)</option>
                  </select>
                  <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-1">Time Zone</label>
                <div class="relative">
                  <select class="w-full pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
                    <option>(GMT-08:00) Pacific Time (US & Canada)</option>
                    <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                    <option>(GMT-06:00) Central Time (US & Canada)</option>
                    <option>(GMT-07:00) Mountain Time (US & Canada)</option>
                    <option>(GMT) Greenwich Mean Time</option>
                  </select>
                  <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-1">Date Format</label>
                <div class="relative">
                  <select class="w-full pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
                    <option>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                  <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              
              <div class="flex items-center justify-between">
                <div>
                  <label class="text-sm font-medium">Enable Dark Mode</label>
                  <p class="text-xs text-muted-foreground">Allow users to switch to dark mode</p>
                </div>
                <Switch />
              </div>
              
              <div class="flex items-center justify-between">
                <div>
                  <label class="text-sm font-medium">System Maintenance Mode</label>
                  <p class="text-xs text-muted-foreground">Temporarily disable access for non-admin users</p>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
          <CardFooter class="flex justify-end">
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
        
        <!-- School Information -->
        <Card id="school" class="shadow-sm scroll-mt-6">
          <CardHeader>
            <CardTitle>School Information</CardTitle>
            <CardDescription>Update your institution's details and branding</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="flex flex-col sm:flex-row gap-6 items-start">
                <div class="flex-shrink-0">
                  <div class="h-24 w-24 border rounded-md flex items-center justify-center bg-muted">
                    <Icon name="lucide:image" class="h-8 w-8 text-muted-foreground" />
                  </div>
                  <Button variant="outline" size="sm" class="mt-2 w-full">
                    <Icon name="lucide:upload" class="h-4 w-4 mr-2" />
                    Upload Logo
                  </Button>
                </div>
                
                <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium mb-1">School Full Name</label>
                    <input type="text" value="Cascade Academy of Technology" class="w-full px-3 py-2 rounded-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
                  </div>
                  
                  <div>
                    <label class="block text-sm font-medium mb-1">Short Name</label>
                    <input type="text" value="Cascade Academy" class="w-full px-3 py-2 rounded-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
                  </div>
                  
                  <div>
                    <label class="block text-sm font-medium mb-1">School Email</label>
                    <input type="email" value="info@cascadeacademy.edu" class="w-full px-3 py-2 rounded-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
                  </div>
                  
                  <div>
                    <label class="block text-sm font-medium mb-1">Phone Number</label>
                    <input type="tel" value="(555) 123-4567" class="w-full px-3 py-2 rounded-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
                  </div>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-1">School Address</label>
                <input type="text" value="123 Education Avenue" class="w-full px-3 py-2 rounded-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none mb-2" />
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input type="text" value="Silicon Valley" placeholder="City" class="px-3 py-2 rounded-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
                  <input type="text" value="CA" placeholder="State/Province" class="px-3 py-2 rounded-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
                  <input type="text" value="94024" placeholder="Postal Code" class="px-3 py-2 rounded-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-1">School Website</label>
                <input type="url" value="https://cascadeacademy.edu" class="w-full px-3 py-2 rounded-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-1">School Description</label>
                <textarea rows="3" class="w-full px-3 py-2 rounded-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none">Cascade Academy is a leading STEM-focused educational institution committed to providing innovative learning experiences for students of all backgrounds.</textarea>
              </div>
            </div>
          </CardContent>
          <CardFooter class="flex justify-end">
            <Button>Update School Information</Button>
          </CardFooter>
        </Card>
        
        <!-- Academic Settings -->
        <Card id="academic" class="shadow-sm scroll-mt-6">
          <CardHeader>
            <CardTitle>Academic Settings</CardTitle>
            <CardDescription>Configure grading systems, academic calendar, and course settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-6">
              <div>
                <h3 class="text-sm font-medium mb-3">Grading System</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label class="block text-xs text-muted-foreground mb-1">A Range</label>
                    <div class="flex items-center">
                      <input type="number" value="90" class="w-full px-3 py-2 rounded-l-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
                      <span class="flex items-center justify-center h-[36px] px-3 border-y bg-muted">-</span>
                      <input type="number" value="100" class="w-full px-3 py-2 rounded-r-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label class="block text-xs text-muted-foreground mb-1">B Range</label>
                    <div class="flex items-center">
                      <input type="number" value="80" class="w-full px-3 py-2 rounded-l-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
                      <span class="flex items-center justify-center h-[36px] px-3 border-y bg-muted">-</span>
                      <input type="number" value="89" class="w-full px-3 py-2 rounded-r-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label class="block text-xs text-muted-foreground mb-1">C Range</label>
                    <div class="flex items-center">
                      <input type="number" value="70" class="w-full px-3 py-2 rounded-l-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
                      <span class="flex items-center justify-center h-[36px] px-3 border-y bg-muted">-</span>
                      <input type="number" value="79" class="w-full px-3 py-2 rounded-r-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label class="block text-xs text-muted-foreground mb-1">D Range</label>
                    <div class="flex items-center">
                      <input type="number" value="60" class="w-full px-3 py-2 rounded-l-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
                      <span class="flex items-center justify-center h-[36px] px-3 border-y bg-muted">-</span>
                      <input type="number" value="69" class="w-full px-3 py-2 rounded-r-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 class="text-sm font-medium mb-3">Term Configuration</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs text-muted-foreground mb-1">Academic Year</label>
                    <div class="relative">
                      <select class="w-full pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
                        <option>2024-2025</option>
                        <option>2025-2026</option>
                        <option>2026-2027</option>
                      </select>
                      <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label class="block text-xs text-muted-foreground mb-1">Current Term</label>
                    <div class="relative">
                      <select class="w-full pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
                        <option>Spring 2025</option>
                        <option>Summer 2025</option>
                        <option>Fall 2025</option>
                        <option>Winter 2026</option>
                      </select>
                      <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="flex items-center justify-between">
                <div>
                  <label class="text-sm font-medium">Enable GPA Calculation</label>
                  <p class="text-xs text-muted-foreground">Automatically calculate student GPAs</p>
                </div>
                <Switch checked />
              </div>
              
              <div class="flex items-center justify-between">
                <div>
                  <label class="text-sm font-medium">Enable Course Prerequisites</label>
                  <p class="text-xs text-muted-foreground">Enforce prerequisites during course registration</p>
                </div>
                <Switch checked />
              </div>
              
              <div class="flex items-center justify-between">
                <div>
                  <label class="text-sm font-medium">Allow Late Submissions</label>
                  <p class="text-xs text-muted-foreground">Allow teachers to accept late assignment submissions</p>
                </div>
                <Switch checked />
              </div>
            </div>
          </CardContent>
          <CardFooter class="flex justify-end">
            <Button>Save Academic Settings</Button>
          </CardFooter>
        </Card>
        
        <!-- Showing just part of the settings for brevity -->
        <div class="flex justify-center mt-8">
          <Button variant="outline">Load More Settings Sections</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})
</script>