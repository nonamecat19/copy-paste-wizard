import Navbar from "@/components/Navbar.tsx";
import MainBlock from "@/components/MainBlock.tsx";
import TabsBlock from "@/components/TabsBlock.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";
import {ThemeProvider} from "@/components/ThemeProvider.tsx";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar/>
      <TabsBlock/>
      <MainBlock/>

      <Toaster/>
    </ThemeProvider>
  );
}