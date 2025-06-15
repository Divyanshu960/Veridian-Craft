import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Veridian Craft Tech - Retractable Roofing Solutions",
  description:
    "Premier experts in customized roofing solutions and retractable structures. We specialize in pergolas, polycarbonate roofs, tensile structures, and more.",
  keywords: "retractable roofing, pergola, polycarbonate roof, tensile structures, skylight, outdoor solutions",
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
