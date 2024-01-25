import { StrictMode } from 'react'
import { ThemeProvider } from '@/components/ThemeProvider'
import { PropsWithRequiredChildren } from '@/types/global.types.ts'

export default function Providers({ children }: PropsWithRequiredChildren) {
  return (
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </StrictMode>
  )
}
