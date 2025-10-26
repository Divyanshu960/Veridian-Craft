// app/components/ClientFloats.tsx
"use client"

import WhatsAppFloat from "@/components/whatsapp-float"
import FloatingContact from "@/components/floating-contact"
import { useEffect, useState } from "react"

export default function ClientFloats() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // This ensures the component only renders after hydration
    setMounted(true)
  }, [])

  if (!mounted) {
    // Optionally render nothing or a placeholder during SSR
    return null
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 transition-all duration-300 ease-in-out">
      <WhatsAppFloat />
      <FloatingContact />
    </div>
  )
}