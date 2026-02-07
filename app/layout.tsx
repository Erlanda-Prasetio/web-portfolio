import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/contexts/theme-context'
import './globals.css'

export const metadata: Metadata = {
  title: 'Web Portfolio',
  description: 'Erlanda Web Portfolio',
  generator: 'Web-Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
