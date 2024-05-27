"use client"
import './globals.css'
import { Inter as FontSans } from 'next/font/google'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={"flex justify-center items-center gap-y-4"}
      >
        {children}
      </body>
    </html>
  )
}
