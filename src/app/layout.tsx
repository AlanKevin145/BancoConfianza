import type { Metadata } from 'next'
import { inter } from '@/config/fonts';



import './globals.css';



export const metadata: Metadata = {
  title: 'BanConfianza | Soluciones financieras',
  description: 'Prestamos para tu negocio y cuidamos tus ahorros',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
