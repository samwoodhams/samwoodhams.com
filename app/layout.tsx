import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sam Woodhams',
  description: 'Personal portfolio website for Sam Woodhams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/face.png" sizes="any" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
