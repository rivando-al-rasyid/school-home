import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
  routes: (_routes) => [
    ..._routes,
  ],
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top by default
    return savedPosition || { top: 0, left: 0 }
  },
}
