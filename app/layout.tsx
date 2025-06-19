import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Taraji Store',
  description: 'Created By Aniba Yassine',
  generator: 'YA.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
