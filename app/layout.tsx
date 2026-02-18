import type { Metadata } from 'next'
import { Geist, Geist_Mono, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const _spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" });

export const metadata: Metadata = {
  title: 'Demis Hassabis -- Co-Founder & CEO, Google DeepMind',
  description: 'Portfolio of Demis Hassabis, AI pioneer, neuroscientist, Nobel laureate, and co-founder of Google DeepMind. Pushing the boundaries of artificial intelligence.',
  generator: 'v0.app',
  icons: {
    icon: '/deepmindlogo.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${_geist.variable} ${_geistMono.variable} ${_spaceMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
