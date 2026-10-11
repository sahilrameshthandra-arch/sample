import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: 'Homes R Us Real Estate Brokers | Dubai Property Sales & Leasing',
    template: '%s | Homes R Us Real Estate Brokers',
  },
  description: 'Leading real estate brokerage in Deira, Dubai. Expert property sales, leasing, and investment consulting. RERA registered. Contact +971 50 148 5560.',
  keywords: ['real estate Dubai', 'property sales Deira', 'property leasing Dubai', 'Dubai real estate broker', 'RERA registered broker', 'Homes R Us Real Estate'],
  authors: [{ name: 'Homes R Us Real Estate Brokers' }],
  creator: 'Homes R Us Real Estate Brokers',
  publisher: 'Homes R Us Real Estate Brokers',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://homesrus-realestate.ae',
    siteName: 'Homes R Us Real Estate Brokers',
    title: 'Homes R Us Real Estate Brokers | Dubai Property Sales & Leasing',
    description: 'Leading real estate brokerage in Deira, Dubai. Expert property sales, leasing, and investment consulting.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Homes R Us Real Estate Brokers - Dubai Property Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homes R Us Real Estate Brokers | Dubai Property Sales & Leasing',
    description: 'Leading real estate brokerage in Deira, Dubai. Expert property sales, leasing, and investment consulting.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0c406e' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AE" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}