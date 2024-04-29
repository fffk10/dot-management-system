import './globals.css'
import type { Metadata } from 'next'
import { DotGothic16 } from 'next/font/google'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Main from '@/components/layout/main'
import { cn } from '@/lib/utils'
import Sidebar from '@/components/sidebar/sidebar'

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
        <div className='flex flex-1'>
          <Sidebar />
          <Main>{children}</Main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
