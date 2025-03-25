export default defineNuxtRouteMiddleware((_to, _from) => {
  const { checkAuth, checkRole } = useAuth();
  
  // Check if user is authenticated and has student role
  if (!checkAuth() || !checkRole('student')) {
    // Redirect to student login if not authenticated or not a student
    return navigateTo('/login');
  }
});
