import type { Metadata } from 'next'
import { Orbitron, Roboto } from 'next/font/google'
import { ThemeProvider } from './components/ThemeProvider'
import './globals.css'

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin']
})

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'HackathonUSP 2026',
  description: 'O maior hackathon da USP'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${orbitron.variable} ${roboto.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}