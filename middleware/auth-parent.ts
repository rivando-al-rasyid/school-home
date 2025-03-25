export default defineNuxtRouteMiddleware((_to, _from) => {
  const { checkAuth, checkRole } = useAuth();
  
  // Check if user is authenticated and has parent role
  if (!checkAuth() || !checkRole('parent')) {
    // Redirect to parent login if not authenticated or not a parent
    return navigateTo('/login/parent');
  }
});
