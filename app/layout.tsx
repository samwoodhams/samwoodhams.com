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
          <link rel="shortcut icon" href="/images/face.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/face.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/face.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/face.png"/>
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
