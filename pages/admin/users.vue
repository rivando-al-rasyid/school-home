<template>
  <div>
    <h1 class="text-3xl font-bold mb-2">User Management</h1>
    <p class="text-muted-foreground mb-6">Manage students, teachers, parents, and staff accounts</p>
    
    <!-- User Management Controls -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div class="flex items-center gap-2">
        <div class="relative">
          <Icon name="lucide:search" class="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Search users..." class="pl-9 pr-4 py-2 rounded-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none w-full sm:w-[300px]">
        </div>
        <div class="relative">
          <select class="pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
            <option>All Users</option>
            <option>Students</option>
            <option>Teachers</option>
            <option>Parents</option>
            <option>Administrators</option>
          </select>
          <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
      <Button>
        <Icon name="lucide:plus" class="h-4 w-4 mr-2" />
        Add New User
      </Button>
    </div>
    
    <!-- Users Table -->
    <Card class="shadow-sm mb-8">
      <CardContent class="p-0">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b">
                <th class="text-left p-4 font-medium text-sm">Name</th>
                <th class="text-left p-4 font-medium text-sm">Email</th>
                <th class="text-left p-4 font-medium text-sm">Role</th>
                <th class="text-left p-4 font-medium text-sm">Status</th>
                <th class="text-left p-4 font-medium text-sm">Last Login</th>
                <th class="text-right p-4 font-medium text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              <!-- User Row -->
              <tr class="border-b hover:bg-accent/5">
                <td class="p-4">
                  <div class="flex items-center gap-3">
                    <Avatar class="h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/150?img=1" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p class="font-medium">John Doe</p>
                      <p class="text-xs text-muted-foreground">ID: STU10045</p>
                    </div>
                  </div>
                </td>
                <td class="p-4 text-sm">john.doe@example.com</td>
                <td class="p-4 text-sm">Student</td>
                <td class="p-4">
                  <Badge variant="secondary" class="bg-green-100 text-green-800 hover:bg-green-200">Active</Badge>
                </td>
                <td class="p-4 text-sm">Today, 10:24 AM</td>
                <td class="p-4 text-right">
                  <div class="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:pencil" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:trash-2" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-accent/5">
                <td class="p-4">
                  <div class="flex items-center gap-3">
                    <Avatar class="h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/150?img=2" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p class="font-medium">Jane Smith</p>
                      <p class="text-xs text-muted-foreground">ID: TCH2035</p>
                    </div>
                  </div>
                </td>
                <td class="p-4 text-sm">jane.smith@example.com</td>
                <td class="p-4 text-sm">Teacher</td>
                <td class="p-4">
                  <Badge variant="secondary" class="bg-green-100 text-green-800 hover:bg-green-200">Active</Badge>
                </td>
                <td class="p-4 text-sm">Today, 9:15 AM</td>
                <td class="p-4 text-right">
                  <div class="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:pencil" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:trash-2" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-accent/5">
                <td class="p-4">
                  <div class="flex items-center gap-3">
                    <Avatar class="h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/150?img=3" />
                      <AvatarFallback>RW</AvatarFallback>
                    </Avatar>
                    <div>
                      <p class="font-medium">Robert Williams</p>
                      <p class="text-xs text-muted-foreground">ID: PAR3087</p>
                    </div>
                  </div>
                </td>
                <td class="p-4 text-sm">robert.williams@example.com</td>
                <td class="p-4 text-sm">Parent</td>
                <td class="p-4">
                  <Badge variant="secondary" class="bg-green-100 text-green-800 hover:bg-green-200">Active</Badge>
                </td>
                <td class="p-4 text-sm">Yesterday, 5:30 PM</td>
                <td class="p-4 text-right">
                  <div class="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:pencil" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:trash-2" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-accent/5">
                <td class="p-4">
                  <div class="flex items-center gap-3">
                    <Avatar class="h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/150?img=4" />
                      <AvatarFallback>EJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p class="font-medium">Emily Johnson</p>
                      <p class="text-xs text-muted-foreground">ID: STU10046</p>
                    </div>
                  </div>
                </td>
                <td class="p-4 text-sm">emily.johnson@example.com</td>
                <td class="p-4 text-sm">Student</td>
                <td class="p-4">
                  <Badge variant="secondary">Inactive</Badge>
                </td>
                <td class="p-4 text-sm">Last week</td>
                <td class="p-4 text-right">
                  <div class="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:pencil" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:trash-2" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              
              <tr class="hover:bg-accent/5">
                <td class="p-4">
                  <div class="flex items-center gap-3">
                    <Avatar class="h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/150?img=5" />
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <div>
                      <p class="font-medium">Michael Lee</p>
                      <p class="text-xs text-muted-foreground">ID: ADM1005</p>
                    </div>
                  </div>
                </td>
                <td class="p-4 text-sm">michael.lee@example.com</td>
                <td class="p-4 text-sm">Administrator</td>
                <td class="p-4">
                  <Badge variant="secondary" class="bg-green-100 text-green-800 hover:bg-green-200">Active</Badge>
                </td>
                <td class="p-4 text-sm">Today, 8:00 AM</td>
                <td class="p-4 text-right">
                  <div class="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:pencil" class="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:trash-2" class="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
    
    <!-- Pagination -->
    <div class="flex justify-between items-center">
      <div class="text-sm text-muted-foreground">
        Showing 5 of 1,245 users
      </div>
      <div class="flex items-center gap-2">
        <Button variant="outline" size="sm" disabled>
          <Icon name="lucide:chevron-left" class="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" class="bg-primary/10 text-primary">1</Button>
        <Button variant="outline" size="sm">2</Button>
        <Button variant="outline" size="sm">3</Button>
        <Button variant="outline" size="sm">
          <Icon name="lucide:chevron-right" class="h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})
</script>