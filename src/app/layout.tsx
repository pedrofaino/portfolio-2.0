import type { Metadata } from 'next'
import { Inter, Press_Start_2P } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const pressStart = Press_Start_2P({weight: '400' ,subsets:["latin"]})

export const metadata: Metadata = {
  title: 'Pedro Faino',
  description: 'Portfolio dev pedro faino',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pressStart.className}>{children}</body>
    </html>
  )
}
