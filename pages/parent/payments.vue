<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Payments</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Current Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">$275.50</div>
          <p class="text-xs text-muted-foreground">Due April 15, 2025</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Last Payment</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">$350.00</div>
          <p class="text-xs text-muted-foreground">March 5, 2025</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader class="pb-2">
          <CardTitle class="text-sm font-medium">Payment Method</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex items-center">
            <Icon name="lucide:credit-card" class="h-5 w-5 mr-2 text-muted-foreground" />
            <div>
              <div class="font-medium">Visa ••••4832</div>
              <p class="text-xs text-muted-foreground">Expires 09/26</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    
    <Tabs default-value="invoices">
      <TabsList class="grid w-full grid-cols-3">
        <TabsTrigger value="invoices">Invoices</TabsTrigger>
        <TabsTrigger value="payment-history">Payment History</TabsTrigger>
        <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
      </TabsList>
      
      <TabsContent value="invoices">
        <Card>
          <CardHeader>
            <div class="flex justify-between items-center">
              <div>
                <CardTitle>Current Invoices</CardTitle>
                <CardDescription>Active charges and upcoming payments</CardDescription>
              </div>
              <Button class-name="ml-auto">
                <Icon name="lucide:credit-card" class-name="mr-2 h-4 w-4" />
                Pay All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead/>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow v-for="(invoice, index) in currentInvoices" :key="index">
                  <TableCell>
                    <div class="flex-1">
                      <h3 class="text-base font-semibold">{{ invoice.description }}</h3>
                      <p class="text-sm text-muted-foreground">{{ invoice.category }}</p>
                    </div>
                  </TableCell>
                  <TableCell>{{ invoice.student }}</TableCell>
                  <TableCell>{{ invoice.date }}</TableCell>
                  <TableCell>
                    <Badge :variant="getStatusVariant(invoice.status)">
                      {{ invoice.status }}
                    </Badge>
                  </TableCell>
                  <TableCell>${{ invoice.amount.toFixed(2) }}</TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">Pay</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="payment-history">
        <Card>
          <CardHeader>
            <div class="flex justify-between items-center">
              <div>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>Record of all transactions</CardDescription>
              </div>
              <Button variant="outline">
                <Icon name="lucide:download" class-name="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div class="relative">
              <div class="absolute left-8 top-0 bottom-0 w-px bg-border"/>
              <div class="space-y-6">
                <div v-for="(year, yearIndex) in Object.keys(paymentHistory)" :key="yearIndex">
                  <h3 class="font-medium mb-4">{{ year }}</h3>
                  <div v-for="(payment, paymentIndex) in paymentHistory[year]" :key="paymentIndex" class="relative pl-16 mb-6 last:mb-0">
                    <div class="absolute left-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent">
                      <Icon name="lucide:check" class="h-4 w-4 text-accent-foreground" />
                    </div>
                    <div class="space-y-1">
                      <div class="flex items-center justify-between">
                        <div class="font-medium">{{ payment.description }}</div>
                        <div class="font-medium">${{ payment.amount.toFixed(2) }}</div>
                      </div>
                      <div class="flex items-center justify-between">
                        <div class="text-sm text-muted-foreground">{{ payment.date }} • {{ payment.paymentMethod }}</div>
                        <div class="text-sm text-muted-foreground">Receipt #{{ payment.receipt }}</div>
                      </div>
                      <div class="text-sm text-muted-foreground">{{ payment.status }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="payment-methods">
        <Card>
          <CardHeader>
            <div class="flex justify-between items-center">
              <div>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your saved payment methods</CardDescription>
              </div>
              <Button>
                <Icon name="lucide:plus" class-name="mr-2 h-4 w-4" />
                Add Method
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div
v-for="(method, index) in paymentMethods" :key="index" 
                class="p-4 border rounded-lg flex items-center justify-between">
                <div class="flex items-center">
                  <div 
                    class="w-12 h-12 rounded-md mr-4 flex items-center justify-center"
                    :class="method.type === 'Visa' ? 'bg-blue-100' : 
                           method.type === 'MasterCard' ? 'bg-red-100' : 
                           method.type === 'Bank Account' ? 'bg-emerald-100' : 'bg-gray-100'"
                  >
                    <Icon 
                      :name="method.type === 'Bank Account' ? 'lucide:landmark' : 'lucide:credit-card'" 
                      class="h-6 w-6"
                      :class="method.type === 'Visa' ? 'text-blue-500' : 
                             method.type === 'MasterCard' ? 'text-red-500' : 
                             method.type === 'Bank Account' ? 'text-emerald-500' : 'text-gray-500'"
                    />
                  </div>
                  <div>
                    <div class="font-medium">{{ method.name }}</div>
                    <div class="text-sm text-muted-foreground">{{ method.number }}</div>
                    <div class="text-xs text-muted-foreground">{{ method.expiry }}</div>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <Badge v-if="method.default" variant="outline">Default</Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                      <Button variant="ghost" size="icon">
                        <Icon name="lucide:more-vertical" class="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Set as default</DropdownMenuItem>
                      <DropdownMenuItem>Remove</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Payment Settings</CardTitle>
          <CardDescription>Configure your payment preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-6">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-medium">Auto-Pay</h4>
                <p class="text-sm text-muted-foreground">Automatically pay invoices when due</p>
              </div>
              <Switch />
            </div>
            
            <Separator />
            
            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-medium">Payment Reminders</h4>
                <p class="text-sm text-muted-foreground">Receive notifications before payment due dates</p>
              </div>
              <Switch checked />
            </div>
            
            <Separator />
            
            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-medium">Receipt Emails</h4>
                <p class="text-sm text-muted-foreground">Receive email receipts for payments</p>
              </div>
              <Switch checked />
            </div>
            
            <Separator />
            
            <div>
              <h4 class="font-medium mb-2">Payment Currency</h4>
              <Select 
                :default-value="'usd'" 
                class="w-full sm:w-[180px]"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD - US Dollar</SelectItem>
                  <SelectItem value="eur">EUR - Euro</SelectItem>
                  <SelectItem value="gbp">GBP - British Pound</SelectItem>
                  <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Financial Aid</CardTitle>
          <CardDescription>Information about financial assistance programs</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-6">
            <div>
              <h4 class="font-medium mb-2">Available Programs</h4>
              <div class="space-y-2">
                <div class="p-3 rounded-md bg-accent">
                  <div class="flex justify-between items-start mb-1">
                    <h5 class="font-medium">Tuition Assistance Program</h5>
                    <Badge variant="outline">Applications Open</Badge>
                  </div>
                  <p class="text-sm text-muted-foreground mb-2">Financial assistance for families who meet income eligibility requirements.</p>
                  <Button 
                    :as-child="true" 
                    size="sm" 
                    variant="outline" 
                    class="mr-2 last:mr-0"
                  >
                    Learn More
                  </Button>
                </div>
                
                <div class="p-3 rounded-md bg-accent">
                  <div class="flex justify-between items-start mb-1">
                    <h5 class="font-medium">Merit Scholarship</h5>
                    <Badge variant="outline">Deadline: May 15</Badge>
                  </div>
                  <p class="text-sm text-muted-foreground mb-2">Academic scholarships for high-achieving students.</p>
                  <Button 
                    :as-child="true" 
                    size="sm" 
                    variant="outline" 
                    class="mr-2 last:mr-0"
                  >
                    Learn More
                  </Button>
                </div>
                
                <div class="p-3 rounded-md bg-accent">
                  <div class="flex justify-between items-start mb-1">
                    <h5 class="font-medium">Payment Plan Options</h5>
                    <Badge variant="outline">Always Available</Badge>
                  </div>
                  <p class="text-sm text-muted-foreground mb-2">Flexible payment scheduling to meet your family's needs.</p>
                  <Button 
                    :as-child="true" 
                    size="sm" 
                    variant="outline" 
                    class="mr-2 last:mr-0"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            
            <Alert>
              <AlertTitle>Need Assistance?</AlertTitle>
              <AlertDescription>
                Our financial aid office is available to help with questions about tuition, payments, and financial assistance programs.
                Contact us at <a href="mailto:financial-aid@school.edu" class="underline">financial-aid@school.edu</a> or call (555) 123-4567.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';

// Current invoices data
const currentInvoices = [
  {
    description: 'Spring Semester Tuition',
    category: 'Tuition & Fees',
    student: 'Emma Davis',
    date: 'Due April 15, 2025',
    status: 'Pending',
    amount: 200.00
  },
  {
    description: 'School Lunch Program',
    category: 'Meal Plan',
    student: 'Emma Davis',
    date: 'Due April 15, 2025',
    status: 'Pending',
    amount: 45.50
  },
  {
    description: 'Field Trip - Science Museum',
    category: 'Activities',
    student: 'Emma Davis',
    date: 'Due April 1, 2025',
    status: 'Pending',
    amount: 30.00
  },
  {
    description: 'Spring Semester Tuition',
    category: 'Tuition & Fees',
    student: 'Ethan Davis',
    date: 'Due April 15, 2025',
    status: 'Pending',
    amount: 200.00
  },
  {
    description: 'School Lunch Program',
    category: 'Meal Plan',
    student: 'Ethan Davis',
    date: 'Due April 15, 2025',
    status: 'Pending',
    amount: 45.50
  },
  {
    description: 'Overdue Library Book',
    category: 'Miscellaneous',
    student: 'Ethan Davis',
    date: 'Due immediately',
    status: 'Overdue',
    amount: 5.00
  }
];

// Payment history by year
const paymentHistory = {
  '2025': [
    {
      description: 'Winter Semester Tuition',
      amount: 400.00,
      date: 'March 5, 2025',
      paymentMethod: 'Visa ••••4832',
      receipt: '2025-001254',
      status: 'Paid'
    },
    {
      description: 'School Lunch Program',
      amount: 91.00,
      date: 'March 5, 2025',
      paymentMethod: 'Visa ••••4832',
      receipt: '2025-001255',
      status: 'Paid'
    },
    {
      description: 'Art Supplies Fee',
      amount: 35.00,
      date: 'February 10, 2025',
      paymentMethod: 'Visa ••••4832',
      receipt: '2025-000892',
      status: 'Paid'
    }
  ],
  '2024': [
    {
      description: 'Fall Semester Tuition',
      amount: 400.00,
      date: 'November 15, 2024',
      paymentMethod: 'Bank Account ••••7890',
      receipt: '2024-005721',
      status: 'Paid'
    },
    {
      description: 'School Lunch Program',
      amount: 91.00,
      date: 'November 15, 2024',
      paymentMethod: 'Bank Account ••••7890',
      receipt: '2024-005722',
      status: 'Paid'
    },
    {
      description: 'Technology Fee',
      amount: 75.00,
      date: 'September 20, 2024',
      paymentMethod: 'Visa ••••4832',
      receipt: '2024-003421',
      status: 'Paid'
    },
    {
      description: 'Back-to-School Supplies',
      amount: 120.50,
      date: 'August 25, 2024',
      paymentMethod: 'Visa ••••4832',
      receipt: '2024-002157',
      status: 'Paid'
    }
  ]
};

// Saved payment methods
const paymentMethods = [
  {
    type: 'Visa',
    name: 'Visa Credit Card',
    number: '••••••••••••4832',
    expiry: 'Expires 09/26',
    default: true
  },
  {
    type: 'MasterCard',
    name: 'MasterCard Debit',
    number: '••••••••••••7621',
    expiry: 'Expires 12/25',
    default: false
  },
  {
    type: 'Bank Account',
    name: 'Wells Fargo Checking',
    number: '••••7890',
    expiry: 'Direct Debit',
    default: false
  }
];

const getStatusVariant = (status) => {
  switch (status) {
    case 'Paid': return 'success';
    case 'Pending': return 'secondary';
    case 'Overdue': return 'destructive';
    case 'Processing': return 'warning';
    default: return 'outline';
  }
};
definePageMeta({
  layout: 'parent'
})

</script>
