import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components'
import { Toaster } from '@ui'

export function MainLayout() {
  return (
    <div className="dark:text-white dark:bg-black h-screen">
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  )
}
