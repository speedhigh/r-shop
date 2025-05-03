import { createGetRoutes, setupLayouts } from 'virtual:meta-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  routes: setupLayouts(routes),
  history: createWebHistory(),
})

export const getRoutes = createGetRoutes(router)
export const navigateTo = router.push
export function navigateBack(url = '') {
  if (window.history.length > 2) { router.back() }
  else if (url) { navigateTo(url) }
  else { navigateTo('/') }
}

export default router
