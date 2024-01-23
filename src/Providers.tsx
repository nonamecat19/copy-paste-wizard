import { PropsWithChildren, StrictMode } from 'react'
import { ThemeProvider } from '@/components/ThemeProvider.tsx'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </StrictMode>
  )
}
