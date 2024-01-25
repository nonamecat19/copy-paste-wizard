import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Settings from '@/routes/Settings'
import Home from '@/routes/Home'
import MainLayout from '@/routes/MainLayout'

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
  return <RouterProvider router={router} />
}
