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
              <a 
                v-for="(item, index) in settingsNavItems" 
                :key="index"
                :href="`#${item.id}`"
                :class="[
                  'flex items-center px-4 py-2 text-sm font-medium border-l-2',
                  activeSection === item.id 
                    ? 'text-primary border-primary' 
                    : 'text-muted-foreground hover:text-primary border-transparent'
                ]"
                @click="activeSection = item.id"
              >
                <Icon :name="item.icon" class="h-5 w-5 mr-3" />
                {{ item.label }}
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
        
        <!-- User Permissions Settings -->
        <Card id="users" class="shadow-sm scroll-mt-6">
          <CardHeader>
            <CardTitle>User Permissions</CardTitle>
            <CardDescription>Configure access controls and user roles</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-6">
              <div>
                <h3 class="text-sm font-medium mb-3">Role Management</h3>
                <div class="space-y-4">
                  <div class="grid gap-2">
                    <label class="text-sm font-medium">Default Role for New Users</label>
                    <Select default-value="student">
                      <SelectTrigger>
                        <SelectValue placeholder="Select default role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="staff">Staff</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div class="pt-4 border-t">
                <h3 class="text-sm font-medium mb-3">Permission Groups</h3>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">Teachers can modify grades after submission</label>
                    </div>
                    <Switch checked />
                  </div>
                  
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">Admin approval for course creation</label>
                    </div>
                    <Switch checked />
                  </div>
                  
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">Parents can view all child activities</label>
                    </div>
                    <Switch checked />
                  </div>
                  
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">Staff can access financial reports</label>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
              
              <div class="pt-4 border-t">
                <h3 class="text-sm font-medium mb-3">Advanced Permissions</h3>
                <Button variant="outline" size="sm">
                  <Icon name="lucide:settings" class="h-4 w-4 mr-2" />
                  Configure Custom Role Permissions
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter class="flex justify-end">
            <Button>Save Permission Settings</Button>
          </CardFooter>
        </Card>
        
        <!-- Notification Settings -->
        <Card id="notifications" class="shadow-sm scroll-mt-6">
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>Configure system and user notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-6">
              <div>
                <h3 class="text-sm font-medium mb-3">System Notifications</h3>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">Grade Updates</label>
                      <p class="text-xs text-muted-foreground">Notify when grades are updated</p>
                    </div>
                    <Switch checked />
                  </div>
                  
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">Attendance Alerts</label>
                      <p class="text-xs text-muted-foreground">Alert for student absences</p>
                    </div>
                    <Switch checked />
                  </div>
                  
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">System Maintenance</label>
                      <p class="text-xs text-muted-foreground">Notify users about planned maintenance</p>
                    </div>
                    <Switch checked />
                  </div>
                  
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">School Events</label>
                      <p class="text-xs text-muted-foreground">Announcement for upcoming events</p>
                    </div>
                    <Switch checked />
                  </div>
                </div>
              </div>
              
              <div class="pt-4 border-t">
                <h3 class="text-sm font-medium mb-3">Delivery Channels</h3>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">Email Notifications</label>
                    </div>
                    <Switch checked />
                  </div>
                  
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">SMS Notifications</label>
                    </div>
                    <Switch />
                  </div>
                  
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">In-App Notifications</label>
                    </div>
                    <Switch checked />
                  </div>
                  
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">Browser Push Notifications</label>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter class="flex justify-end">
            <Button>Save Notification Settings</Button>
          </CardFooter>
        </Card>
        
        <!-- Security Settings -->
        <Card id="security" class="shadow-sm scroll-mt-6">
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
            <CardDescription>Configure system security and authentication</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-6">
              <div>
                <h3 class="text-sm font-medium mb-3">Authentication</h3>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">Two-Factor Authentication</label>
                      <p class="text-xs text-muted-foreground">Require 2FA for admin users</p>
                    </div>
                    <Switch checked />
                  </div>
                  
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">Single Sign-On (SSO)</label>
                      <p class="text-xs text-muted-foreground">Enable SSO with Google, Microsoft, etc.</p>
                    </div>
                    <Switch checked />
                  </div>
                  
                  <div class="grid gap-2">
                    <label class="text-sm font-medium">Password Policy</label>
                    <Select default-value="strong">
                      <SelectTrigger>
                        <SelectValue placeholder="Select password policy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic (8+ characters)</SelectItem>
                        <SelectItem value="medium">Medium (8+ chars, mixed case)</SelectItem>
                        <SelectItem value="strong">Strong (8+ chars, mixed case, numbers)</SelectItem>
                        <SelectItem value="very-strong">Very Strong (12+ chars, mixed case, numbers, symbols)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div class="pt-4 border-t">
                <h3 class="text-sm font-medium mb-3">Session Management</h3>
                <div class="space-y-4">
                  <div class="grid gap-2">
                    <label class="text-sm font-medium">Session Timeout (minutes)</label>
                    <Input type="number" value="30" min="5" max="120" />
                  </div>
                  
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">Force logout after password change</label>
                    </div>
                    <Switch checked />
                  </div>
                  
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">Maximum concurrent sessions</label>
                    </div>
                    <Input type="number" value="3" min="1" max="10" class="w-20" />
                  </div>
                </div>
              </div>
              
              <div class="pt-4 border-t">
                <h3 class="text-sm font-medium mb-3">IP Restrictions</h3>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">Enable IP Whitelisting</label>
                    </div>
                    <Switch />
                  </div>
                  <Button variant="outline" size="sm">
                    <Icon name="lucide:plus" class="h-4 w-4 mr-2" />
                    Add IP Address
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter class="flex justify-end">
            <Button>Save Security Settings</Button>
          </CardFooter>
        </Card>
        
        <!-- Integrations Settings -->
        <Card id="integrations" class="shadow-sm scroll-mt-6">
          <CardHeader>
            <CardTitle>Integrations</CardTitle>
            <CardDescription>Connect with external systems and services</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-6">
              <div class="border rounded-md">
                <div class="p-4 border-b flex justify-between items-center">
                  <div class="flex items-center space-x-4">
                    <div class="h-10 w-10 rounded-md bg-blue-100 flex items-center justify-center">
                      <Icon name="lucide:mail" class="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 class="text-sm font-medium">Email Service</h3>
                      <p class="text-xs text-muted-foreground">Connect to SMTP server for email notifications</p>
                    </div>
                  </div>
                  <Switch checked />
                </div>
                <div class="p-4 space-y-2">
                  <div class="grid gap-2">
                    <label class="text-sm font-medium">SMTP Server</label>
                    <Input value="smtp.schoolserver.edu" />
                  </div>
                  <div class="grid gap-2">
                    <label class="text-sm font-medium">SMTP Port</label>
                    <Input value="587" type="number" />
                  </div>
                  <div class="grid gap-2">
                    <label class="text-sm font-medium">Email From</label>
                    <Input value="no-reply@schoolhome.edu" />
                  </div>
                </div>
              </div>
              
              <div class="border rounded-md">
                <div class="p-4 border-b flex justify-between items-center">
                  <div class="flex items-center space-x-4">
                    <div class="h-10 w-10 rounded-md bg-green-100 flex items-center justify-center">
                      <Icon name="lucide:calendar" class="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 class="text-sm font-medium">Google Calendar</h3>
                      <p class="text-xs text-muted-foreground">Sync school events with Google Calendar</p>
                    </div>
                  </div>
                  <Switch />
                </div>
                <div class="p-4 space-y-2 opacity-50">
                  <Button variant="outline" size="sm">
                    <Icon name="lucide:key" class="h-4 w-4 mr-2" />
                    Configure API Keys
                  </Button>
                </div>
              </div>
              
              <div class="border rounded-md">
                <div class="p-4 border-b flex justify-between items-center">
                  <div class="flex items-center space-x-4">
                    <div class="h-10 w-10 rounded-md bg-purple-100 flex items-center justify-center">
                      <Icon name="lucide:message-square" class="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 class="text-sm font-medium">SMS Gateway</h3>
                      <p class="text-xs text-muted-foreground">Connect to SMS service for text notifications</p>
                    </div>
                  </div>
                  <Switch />
                </div>
                <div class="p-4 space-y-2 opacity-50">
                  <Button variant="outline" size="sm">
                    <Icon name="lucide:key" class="h-4 w-4 mr-2" />
                    Configure SMS Provider
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter class="flex justify-end">
            <Button>Save Integration Settings</Button>
          </CardFooter>
        </Card>
        
        <!-- Backup & Restore Settings -->
        <Card id="backup" class="shadow-sm scroll-mt-6">
          <CardHeader>
            <CardTitle>Backup & Restore</CardTitle>
            <CardDescription>Manage system backups and data restoration</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-6">
              <div>
                <h3 class="text-sm font-medium mb-3">Automated Backups</h3>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">Enable Automated Backups</label>
                    </div>
                    <Switch checked />
                  </div>
                  
                  <div class="grid gap-2">
                    <label class="text-sm font-medium">Backup Frequency</label>
                    <Select default-value="daily">
                      <SelectTrigger>
                        <SelectValue placeholder="Select backup frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div class="grid gap-2">
                    <label class="text-sm font-medium">Retention Period (days)</label>
                    <Input type="number" value="30" min="1" max="365" />
                  </div>
                </div>
              </div>
              
              <div class="pt-4 border-t">
                <h3 class="text-sm font-medium mb-3">Backup Location</h3>
                <div class="space-y-4">
                  <div class="flex items-center space-x-2">
                    <input id="local" type="radio" name="backup-location" class="h-4 w-4" checked>
                    <label for="local" class="text-sm">Local Server</label>
                  </div>
                  
                  <div class="flex items-center space-x-2">
                    <input id="cloud" type="radio" name="backup-location" class="h-4 w-4">
                    <label for="cloud" class="text-sm">Cloud Storage</label>
                  </div>
                  
                  <div class="flex items-center space-x-2">
                    <input id="both" type="radio" name="backup-location" class="h-4 w-4">
                    <label for="both" class="text-sm">Both Local and Cloud</label>
                  </div>
                </div>
              </div>
              
              <div class="pt-4 border-t">
                <h3 class="text-sm font-medium mb-3">Manual Backup</h3>
                <Button variant="outline">
                  <Icon name="lucide:download" class="h-4 w-4 mr-2" />
                  Create Backup Now
                </Button>
              </div>
              
              <div class="pt-4 border-t">
                <h3 class="text-sm font-medium mb-3">Restore from Backup</h3>
                <Button variant="outline">
                  <Icon name="lucide:upload" class="h-4 w-4 mr-2" />
                  Restore System
                </Button>
                <p class="text-xs text-muted-foreground mt-2">Warning: Restoring from backup will replace all current data.</p>
              </div>
            </div>
          </CardContent>
          <CardFooter class="flex justify-end">
            <Button>Save Backup Settings</Button>
          </CardFooter>
        </Card>
        
        <!-- Advanced Settings -->
        <Card id="advanced" class="shadow-sm scroll-mt-6">
          <CardHeader>
            <CardTitle>Advanced Settings</CardTitle>
            <CardDescription>Configure system-level settings (use with caution)</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-6">
              <div>
                <h3 class="text-sm font-medium mb-3">System Performance</h3>
                <div class="space-y-4">
                  <div class="grid gap-2">
                    <label class="text-sm font-medium">Cache Duration (minutes)</label>
                    <Input type="number" value="60" min="0" max="1440" />
                  </div>
                  
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">Enable Data Compression</label>
                    </div>
                    <Switch checked />
                  </div>
                </div>
              </div>
              
              <div class="pt-4 border-t">
                <h3 class="text-sm font-medium mb-3">Logs & Debugging</h3>
                <div class="space-y-4">
                  <div class="grid gap-2">
                    <label class="text-sm font-medium">Log Level</label>
                    <Select default-value="info">
                      <SelectTrigger>
                        <SelectValue placeholder="Select log level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="error">Error Only</SelectItem>
                        <SelectItem value="warn">Warning & Error</SelectItem>
                        <SelectItem value="info">Info, Warning & Error</SelectItem>
                        <SelectItem value="debug">Debug (Verbose)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">Detailed Performance Metrics</label>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
              
              <div class="pt-4 border-t">
                <h3 class="text-sm font-medium mb-3">System Maintenance</h3>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <label class="text-sm font-medium">Automatic Database Optimization</label>
                    </div>
                    <Switch checked />
                  </div>
                  
                  <div class="grid gap-2">
                    <label class="text-sm font-medium">Maintenance Window</label>
                    <Select default-value="midnight">
                      <SelectTrigger>
                        <SelectValue placeholder="Select maintenance time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="midnight">Midnight - 2 AM</SelectItem>
                        <SelectItem value="early-morning">2 AM - 4 AM</SelectItem>
                        <SelectItem value="weekend">Weekend Only</SelectItem>
                        <SelectItem value="manual">Manual Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div class="pt-4 border-t">
                <h3 class="text-sm font-medium mb-3 text-destructive">Danger Zone</h3>
                <div class="space-y-4">
                  <Button variant="destructive-outline" size="sm">
                    <Icon name="lucide:trash" class="h-4 w-4 mr-2" />
                    Clear All System Caches
                  </Button>
                  
                  <Button variant="destructive-outline" size="sm">
                    <Icon name="lucide:refresh-cw" class="h-4 w-4 mr-2" />
                    Reset System Settings
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter class="flex justify-end">
            <Button>Save Advanced Settings</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

definePageMeta({
  layout: 'admin'
})

// Track the active section
const activeSection = ref('general')

// Settings navigation items
const settingsNavItems = [
  { id: 'general', icon: 'lucide:settings', label: 'General Settings' },
  { id: 'school', icon: 'lucide:building', label: 'School Information' },
  { id: 'academic', icon: 'lucide:book', label: 'Academic Settings' },
  { id: 'users', icon: 'lucide:users', label: 'User Permissions' },
  { id: 'notifications', icon: 'lucide:bell', label: 'Notifications' },
  { id: 'security', icon: 'lucide:shield', label: 'Security' },
  { id: 'integrations', icon: 'lucide:plug', label: 'Integrations' },
  { id: 'backup', icon: 'lucide:database', label: 'Backup & Restore' },
  { id: 'advanced', icon: 'lucide:terminal', label: 'Advanced' }
]

// Add a function to detect scroll and update active section
function updateActiveSection() {
  const sections = settingsNavItems.map(item => document.getElementById(item.id))
  const scrollPosition = window.scrollY + 100 // Offset for better UX

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = settingsNavItems[i].id
      break
    }
  }
}

// Add scroll listener when component mounts
onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  // Initialize active section
  updateActiveSection()
})

// Remove listener when component unmounts
onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>