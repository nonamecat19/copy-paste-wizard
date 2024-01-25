import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Settings from '@/routes/Settings'
import Home from '@/routes/Home'
import MainLayout from '@/routes/MainLayout'
import { useEffect } from 'react'
import { changeLanguage } from 'i18next'
import { useLocalizationStore } from '@/store/useLocalizationStore.ts'

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

export default function Router() {
  const localizationStore = useLocalizationStore()
  useEffect(() => {
    changeLanguage(localizationStore.lang).then()
  })
  return <RouterProvider router={router} />
}
