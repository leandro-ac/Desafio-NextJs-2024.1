import type { Metadata } from 'next'
import { Bebas_Neue} from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer/intex'

const BebasNeue = Bebas_Neue({
  weight: ['400'],
  style: "normal",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'GKVAQUIN',
  description: 'Ecommerce voltado para a venda de instrumentos musicais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={BebasNeue.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
