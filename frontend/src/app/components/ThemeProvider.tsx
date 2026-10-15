'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      themes={['dark', 'light']}
      defaultTheme="dark"
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  )
}