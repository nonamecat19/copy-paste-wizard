import Navbar from '@/components/Navbar.tsx'
import MainBlock from '@/components/MainBlock.tsx'
import TabsBlock from '@/components/TabsBlock.tsx'
import { Toaster } from '@/components/ui/toaster.tsx'

export default function App() {
  return (
    <>
      <Navbar />
      <TabsBlock />
      <MainBlock />
      <Toaster />
    </>
  )
}
