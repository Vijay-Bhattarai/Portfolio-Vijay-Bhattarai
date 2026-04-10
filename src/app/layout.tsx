import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ContactProvider } from './components/contact-provider'
import DarkToggleBottom from './components/dark-toggle-bottom'
import AnnouncementMessage from './components/announcement-message'
import Footer from './components/layout/footer'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Vijay-Bhattarai Portfolio',
  description: 'Portfolio of Bijay Bhattarai - AI Engineer & Tech Professional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable} suppressHydrationWarning cz-shortcut-listen="true">
        <ContactProvider>
          {children}
          <Footer />
        </ContactProvider>
        <DarkToggleBottom />
        <AnnouncementMessage />
      </body>
    </html>
  )
}
