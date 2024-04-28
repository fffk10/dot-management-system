import './globals.css'
import type { Metadata } from 'next'
import { DotGothic16 } from 'next/font/google'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Main from '@/components/layout/main'
import { cn } from '@/lib/utils'

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
      <body
        className={cn([`${font.className}`, 'h-full w-full flex flex-col'])}
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  )
}
