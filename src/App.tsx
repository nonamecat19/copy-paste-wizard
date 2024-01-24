import Navbar from '@/components/Navbar'
import MainBlock from '@/components/MainBlock'
import TabsBlock from '@/components/TabsBlock'
import { Toaster } from '@/components/ui/toaster'

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
