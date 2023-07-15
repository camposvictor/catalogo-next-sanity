import { Inter } from 'next/font/google'
import { Header } from '../../components/header'

import '../globals.css'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable}  flex min-h-screen flex-col bg-zinc-900 font-sans`}
      >
        <Header />
        <div className="container mx-auto flex-1 px-5">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
