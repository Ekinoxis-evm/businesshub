import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Cali Business Hub 2025 - Conecta. Inspírate. Escala.',
  description: 'El punto de encuentro para empresarios, inversionistas y directivos que transforman el país. 22 de noviembre en Zonamérica Cali.',
  keywords: 'business hub, networking, empresarios, inversionistas, cali, colombia',
  openGraph: {
    title: 'Cali Business Hub 2025',
    description: 'El punto de encuentro para empresarios, inversionistas y directivos que transforman el país.',
    type: 'website',
    locale: 'es_CO',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-torus antialiased">
        {children}
      </body>
    </html>
  )
}
