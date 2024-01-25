import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/sonner.tsx'

export default function MainLayout() {
  return (
    <div className="dark:text-white dark:bg-black h-screen">
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  )
}
