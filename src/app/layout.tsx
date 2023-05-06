import React from 'react'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div id="__next">
          <Providers>
            <main>{children}</main>
          </Providers>
        </div>
      </body>
    </html>
  )
}
