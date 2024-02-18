import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, MainLayout, Settings } from '@/routes'
import { useEffect } from 'react'
import { changeLanguage } from 'i18next'
import { useLocalizationStore } from '@/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
])

export function Router() {
  const localizationStore = useLocalizationStore()
  useEffect(() => {
    changeLanguage(localizationStore.lang).then()
  })
  return <RouterProvider router={router} />
}
