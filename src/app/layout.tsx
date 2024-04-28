import type { Metadata } from 'next'
import { DotGothic16 } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'

const font = DotGothic16({ weight: '400', style: 'normal', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DotItemManagement',
  description: 'Dot desinged item management system.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body className={font.className}>
        <Header />
        {children}
        Fotre
      </body>
    </html>
  )
}
