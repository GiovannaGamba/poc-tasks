import { createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router'
import { Login } from '../pages/Login'
import { Authenticated } from '../pages/Authenticated'

const rootRoute = createRootRoute()

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Login,
})

const appRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/app',
  component: Authenticated,
})

const routeTree = rootRoute.addChildren([indexRoute, appRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export function AppRouterProvider() {
  return <RouterProvider router={router} />
}


