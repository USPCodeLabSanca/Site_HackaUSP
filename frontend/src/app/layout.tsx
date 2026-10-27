import type { Metadata } from 'next'
import { Orbitron, Roboto } from 'next/font/google'
import { ThemeProvider } from './components/ThemeProvider'
import { SITE_URL } from './site'
import './globals.css'

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
  // Só usada abaixo da primeira tela; sem preload ela não disputa banda com a imagem LCP
  preload: false
})

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin']
})

const description =
  'HackathonUSP 2026: 9ª edição do maior hackathon da USP, organizado pelo USPCodeLab ' +
  'em parceria com o Núcleo de Empreendedorismo da USP (NEU). Inscreva-se!'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'HackathonUSP 2026 | O maior hackathon da USP',
  description,
  keywords: ['HackathonUSP', 'HackaUSP', 'hackathon', 'USP', 'USPCodeLab', 'NEU', 'hackathon São Paulo'],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'HackathonUSP',
    title: 'HackathonUSP 2026 | O maior hackathon da USP',
    description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'HackathonUSP' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HackathonUSP 2026 | O maior hackathon da USP',
    description,
    images: ['/og-image.jpg']
  }
}

// Dados estruturados (schema.org) para o Google entender que é um evento
const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'HackathonUSP 2026',
  description,
  url: SITE_URL,
  image: [`${SITE_URL}/og-image.jpg`],
  startDate: '2026-11-07T08:00:00-03:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Capim',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Brig. Faria Lima, 1713 - Jardim Paulistano',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '01451-000',
      addressCountry: 'BR'
    }
  },
  organizer: [
    { '@type': 'Organization', name: 'USPCodeLab', url: SITE_URL },
    { '@type': 'Organization', name: 'Núcleo de Empreendedorismo da USP (NEU)' }
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${orbitron.variable} ${roboto.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}