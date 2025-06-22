import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import WhatsAppFloat from "@/components/whatsapp-float"
import FloatingContact from "@/components/floating-contact"

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
      <body className={inter.className}>
        {children}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 transition-all duration-300 ease-in-out">
          <WhatsAppFloat />
          <FloatingContact />
        </div>
        </body>
    </html>
  )
}
