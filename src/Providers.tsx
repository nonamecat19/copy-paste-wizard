import { StrictMode } from 'react'
import { ThemeProvider } from '@/components'
import { PropsWithRequiredChildren } from '@/types'

export function Providers({ children }: PropsWithRequiredChildren) {
  return (
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </StrictMode>
  )
}
