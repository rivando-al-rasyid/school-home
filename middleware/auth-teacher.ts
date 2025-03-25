export default defineNuxtRouteMiddleware((_to, _from) => {
  const { checkAuth, checkRole } = useAuth();
  
  // Check if user is authenticated and has teacher role
  if (!checkAuth() || !checkRole('teacher')) {
    // Redirect to teacher login if not authenticated or not a teacher
    return navigateTo('/login/teacher');
  }
});
