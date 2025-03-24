<template>
  <div>
    <h1 class="text-3xl font-bold mb-2">Financial Management</h1>
    <p class="text-muted-foreground mb-6">Manage school finances, tuition, fees, and transactions</p>
    
    <!-- Finance Overview -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">$1,245,800</div>
          <p class="text-xs text-muted-foreground">+12% from last year</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Tuition Collected</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">$985,250</div>
          <p class="text-xs text-muted-foreground">79% of expected</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Outstanding Fees</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">$68,420</div>
          <p class="text-xs text-muted-foreground">-5% from last month</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Current Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">$342,680</div>
          <p class="text-xs text-muted-foreground">Operating funds</p>
        </CardContent>
      </Card>
    </div>
    
    <!-- Finance Controls -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div class="flex items-center gap-2">
        <div class="relative">
          <Icon name="lucide:search" class="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Search transactions..." class="pl-9 pr-4 py-2 rounded-md border text-sm focus:ring-2 focus:ring-primary focus:outline-none w-full sm:w-[300px]" />
        </div>
        <div class="relative">
          <select class="pr-10 pl-3 py-2 rounded-md border text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
            <option>All Categories</option>
            <option>Tuition</option>
            <option>Facilities</option>
            <option>Salaries</option>
            <option>Materials</option>
            <option>Events</option>
          </select>
          <Icon name="lucide:chevron-down" class="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
      <div class="flex gap-2">
        <Button variant="outline">
          <Icon name="lucide:filter" class="h-4 w-4 mr-2" />
          Filter
        </Button>
        <Button>
          <Icon name="lucide:plus" class="h-4 w-4 mr-2" />
          New Transaction
        </Button>
      </div>
    </div>
    
    <!-- Recent Transactions -->
    <Card class="shadow-sm mb-8">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Review the most recent financial activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b">
                <th class="text-left py-3 px-4 font-medium text-sm">ID</th>
                <th class="text-left py-3 px-4 font-medium text-sm">Date</th>
                <th class="text-left py-3 px-4 font-medium text-sm">Description</th>
                <th class="text-left py-3 px-4 font-medium text-sm">Category</th>
                <th class="text-left py-3 px-4 font-medium text-sm">Amount</th>
                <th class="text-left py-3 px-4 font-medium text-sm">Status</th>
                <th class="text-right py-3 px-4 font-medium text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b hover:bg-muted/30">
                <td class="py-3 px-4 text-sm">#TRX-2589</td>
                <td class="py-3 px-4 text-sm">Mar 24, 2025</td>
                <td class="py-3 px-4 text-sm">Tuition Payment - James Wilson</td>
                <td class="py-3 px-4 text-sm">
                  <Badge variant="outline">Tuition</Badge>
                </td>
                <td class="py-3 px-4 text-sm font-medium text-green-600">+$1,250.00</td>
                <td class="py-3 px-4 text-sm">
                  <Badge class="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                </td>
                <td class="py-3 px-4 text-sm text-right">
                  <Button variant="ghost" size="sm">
                    <Icon name="lucide:more-horizontal" class="h-4 w-4" />
                  </Button>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-muted/30">
                <td class="py-3 px-4 text-sm">#TRX-2588</td>
                <td class="py-3 px-4 text-sm">Mar 23, 2025</td>
                <td class="py-3 px-4 text-sm">Teacher Salary - March</td>
                <td class="py-3 px-4 text-sm">
                  <Badge variant="outline">Salaries</Badge>
                </td>
                <td class="py-3 px-4 text-sm font-medium text-red-600">-$48,500.00</td>
                <td class="py-3 px-4 text-sm">
                  <Badge class="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                </td>
                <td class="py-3 px-4 text-sm text-right">
                  <Button variant="ghost" size="sm">
                    <Icon name="lucide:more-horizontal" class="h-4 w-4" />
                  </Button>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-muted/30">
                <td class="py-3 px-4 text-sm">#TRX-2587</td>
                <td class="py-3 px-4 text-sm">Mar 22, 2025</td>
                <td class="py-3 px-4 text-sm">Cafeteria Supplies</td>
                <td class="py-3 px-4 text-sm">
                  <Badge variant="outline">Materials</Badge>
                </td>
                <td class="py-3 px-4 text-sm font-medium text-red-600">-$3,840.00</td>
                <td class="py-3 px-4 text-sm">
                  <Badge class="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                </td>
                <td class="py-3 px-4 text-sm text-right">
                  <Button variant="ghost" size="sm">
                    <Icon name="lucide:more-horizontal" class="h-4 w-4" />
                  </Button>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-muted/30">
                <td class="py-3 px-4 text-sm">#TRX-2586</td>
                <td class="py-3 px-4 text-sm">Mar 22, 2025</td>
                <td class="py-3 px-4 text-sm">Library Book Purchase</td>
                <td class="py-3 px-4 text-sm">
                  <Badge variant="outline">Materials</Badge>
                </td>
                <td class="py-3 px-4 text-sm font-medium text-red-600">-$1,450.00</td>
                <td class="py-3 px-4 text-sm">
                  <Badge class="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                </td>
                <td class="py-3 px-4 text-sm text-right">
                  <Button variant="ghost" size="sm">
                    <Icon name="lucide:more-horizontal" class="h-4 w-4" />
                  </Button>
                </td>
              </tr>
              
              <tr class="border-b hover:bg-muted/30">
                <td class="py-3 px-4 text-sm">#TRX-2585</td>
                <td class="py-3 px-4 text-sm">Mar 21, 2025</td>
                <td class="py-3 px-4 text-sm">Lab Equipment</td>
                <td class="py-3 px-4 text-sm">
                  <Badge variant="outline">Facilities</Badge>
                </td>
                <td class="py-3 px-4 text-sm font-medium text-red-600">-$12,780.00</td>
                <td class="py-3 px-4 text-sm">
                  <Badge class="bg-amber-100 text-amber-800 hover:bg-amber-100">Pending</Badge>
                </td>
                <td class="py-3 px-4 text-sm text-right">
                  <Button variant="ghost" size="sm">
                    <Icon name="lucide:more-horizontal" class="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
      <CardFooter class="flex justify-between items-center">
        <div class="text-sm text-muted-foreground">
          Showing 5 of 245 transactions
        </div>
        <Pagination :total="245" :items-per-page="5" :default-page="1" class="mt-2">
          <template #prev="{ onClick }">
            <PaginationPrev @click="onClick" />
          </template>
          <template #next="{ onClick }">
            <PaginationNext @click="onClick" />
          </template>
          <template #first="{ onClick }">
            <PaginationFirst @click="onClick" />
          </template>
          <template #last="{ onClick }">
            <PaginationLast @click="onClick" />
          </template>
          <template #ellipsis>
            <PaginationEllipsis />
          </template>
        </Pagination>
      </CardFooter>
    </Card>
    
    <!-- Budget Allocation -->
    <Card class="shadow-sm">
      <CardHeader>
        <div class="flex justify-between items-center">
          <div>
            <CardTitle>Budget Allocation</CardTitle>
            <CardDescription>Current financial year breakdown</CardDescription>
          </div>
          <Select defaultValue="2025">
            <SelectTrigger class="w-[180px]">
              <SelectValue placeholder="Financial Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">FY 2025</SelectItem>
              <SelectItem value="2024">FY 2024</SelectItem>
              <SelectItem value="2023">FY 2023</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div class="h-80 flex items-center justify-center">
          <div class="text-center text-muted-foreground">
            <Icon name="lucide:pie-chart" class="h-12 w-12 mx-auto mb-2" />
            <p>Budget breakdown visualization</p>
            <p class="text-sm">(Chart component would render here)</p>
          </div>
        </div>
        
        <div class="grid gap-2 mt-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="h-3 w-3 rounded-full bg-primary"></div>
              <span class="text-sm">Staff Salaries</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-sm font-medium">42%</span>
              <span class="text-sm text-muted-foreground">$630,000</span>
            </div>
          </div>
          
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="h-3 w-3 rounded-full bg-blue-500"></div>
              <span class="text-sm">Facilities & Maintenance</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-sm font-medium">18%</span>
              <span class="text-sm text-muted-foreground">$270,000</span>
            </div>
          </div>
          
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="h-3 w-3 rounded-full bg-green-500"></div>
              <span class="text-sm">Educational Materials</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-sm font-medium">15%</span>
              <span class="text-sm text-muted-foreground">$225,000</span>
            </div>
          </div>
          
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="h-3 w-3 rounded-full bg-amber-500"></div>
              <span class="text-sm">Technology & Equipment</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-sm font-medium">12%</span>
              <span class="text-sm text-muted-foreground">$180,000</span>
            </div>
          </div>
          
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="h-3 w-3 rounded-full bg-purple-500"></div>
              <span class="text-sm">Administrative Costs</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-sm font-medium">8%</span>
              <span class="text-sm text-muted-foreground">$120,000</span>
            </div>
          </div>
          
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="h-3 w-3 rounded-full bg-orange-500"></div>
              <span class="text-sm">Extracurricular Activities</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-sm font-medium">5%</span>
              <span class="text-sm text-muted-foreground">$75,000</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Pagination, 
  PaginationEllipsis, 
  PaginationFirst, 
  PaginationLast, 
  PaginationNext, 
  PaginationPrev 
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

definePageMeta({
  layout: 'admin'
})
</script>
