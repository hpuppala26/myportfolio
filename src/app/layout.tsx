import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import Header from '@/Components/HeaderSection/index'
import Footer from '@/Components/FooterSection'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Inter({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Hrithik's Portfolio",
  description: "About Hrithik",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
