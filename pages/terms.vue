<template>
  <div class="container mx-auto py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div class="prose prose-slate max-w-none">
        <p class="lead">Last updated: {{ new Date().toLocaleDateString() }}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>
          Welcome to the School Management System. These Terms of Service ("Terms") govern your access to and use of our platform, services, and website. By accessing or using the School Management System, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
        </p>
        
        <h2>2. Description of Service</h2>
        <p>
          The School Management System is an educational platform designed to facilitate the management of school activities, including but not limited to, student information management, grade tracking, attendance recording, communication between students, teachers, and parents, and resource sharing.
        </p>
        
        <h2>3. User Accounts</h2>
        <h3>3.1 Account Creation</h3>
        <p>
          To use certain features of the platform, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
        </p>
        
        <h3>3.2 Account Responsibilities</h3>
        <p>
          You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
        </p>
        
        <h3>3.3 Account Types</h3>
        <p>
          Our platform offers different account types for administrators, teachers, students, and parents. Each account type has specific permissions and features appropriate to their role in the educational process.
        </p>
        
        <h2>4. User Conduct</h2>
        <p>You agree not to use the platform to:</p>
        <ul>
          <li>Violate any applicable law or regulation</li>
          <li>Infringe upon the rights of others</li>
          <li>Share inappropriate, offensive, or harmful content</li>
          <li>Attempt to access accounts or data not belonging to you</li>
          <li>Interfere with or disrupt the service or servers</li>
          <li>Collect or store personal data about other users without permission</li>
          <li>Use the platform for any illegal or unauthorized purpose</li>
        </ul>
        
        <h2>5. Content and Intellectual Property</h2>
        <h3>5.1 User Content</h3>
        <p>
          Users may post content, including messages, documents, images, and other materials ("User Content"). You retain ownership of your User Content, but you grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, modify, publicly display, and distribute such content on and through the platform.
        </p>
        
        <h3>5.2 Platform Content</h3>
        <p>
          The platform and its original content (excluding User Content), features, and functionality are and will remain the exclusive property of the School Management System and its licensors. The platform is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
        </p>
        
        <h2>6. Educational Records and Privacy</h2>
        <p>
          We comply with applicable educational privacy laws, including the Family Educational Rights and Privacy Act (FERPA) in the United States. Please review our Privacy Policy for information on how we collect, use, and disclose information from our users.
        </p>
        
        <h2>7. Termination</h2>
        <p>
          We may terminate or suspend your account and bar access to the platform immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>
        
        <h2>8. Limitation of Liability</h2>
        <p>
          In no event shall the School Management System, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the platform.
        </p>
        
        <h2>9. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
        
        <h2>10. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
        </p>
        
        <h2>11. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <address>
          School Management System<br>
          123 Education Lane<br>
          Learning City, ED 54321<br>
          Email: legal@schoolmanagementsystem.com<br>
          Phone: +1 (555) 123-4567
        </address>
      </div>
    </div>
  </div>
</template>

<script setup>
// No specific script functionality required for this page
</script>

<style>
.prose h2 {
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  font-weight: 600;
}

.prose h3 {
  margin-top: 1.2em;
  margin-bottom: 0.5em;
  font-weight: 600;
}

.prose ul {
  margin-left: 1.5em;
  list-style-type: disc;
}

.prose p, .prose ul {
  margin-bottom: 1em;
}

.prose .lead {
  font-size: 1.1em;
  margin-bottom: 2em;
}

.prose address {
  font-style: normal;
  margin-top: 1em;
  line-height: 1.6;
}
</style>
