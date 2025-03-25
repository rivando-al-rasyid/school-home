export default defineNuxtRouteMiddleware((_to, _from) => {
  const { checkAuth, checkRole } = useAuth();
  
  // Check if user is authenticated and has admin role
  if (!checkAuth() || !checkRole('admin')) {
    // Redirect to admin login if not authenticated or not an admin
    return navigateTo('/login/admin');
  }
});
