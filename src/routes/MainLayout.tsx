import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/toaster'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster />
    </>
  )
}
