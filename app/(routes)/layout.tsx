import { Inter } from 'next/font/google'
import { Header } from '../../components/header/Header'

import '../globals.css'

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
      <body className={`${inter.variable} font-sans bg-gray-900`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
