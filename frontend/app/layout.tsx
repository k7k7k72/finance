import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financial AI Search',
  description: 'Advanced financial search powered by AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}