"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Mail, X, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FormData {
  name: string
  phone: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  message?: string
}

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})

  useEffect(() => {
    // Show the button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isModalOpen])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[\d\s+\-()]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Import EmailJS at the top of the file
      const emailjs = (await import("@emailjs/browser")).default

      // EmailJS configuration
      const serviceId = "service_dw5oapl"
      const templateId = "template_2edz0sr"
      const publicKey = "bCAHV8Lp_4YStVKxC"

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
        to_email: "infoveridiancraft@gmail.com",
        reply_to: formData.email,
      }

      // Send email using EmailJS
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey)

      console.log("Email sent successfully:", result)
      setSubmitStatus("success")

      // Reset form after success
      setTimeout(() => {
        setFormData({ name: "", phone: "", email: "", message: "" })
        setSubmitStatus("idle")
        closeModal()
      }, 3000)
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const openModal = () => {
    setIsModalOpen(true)
    setSubmitStatus("idle")
    setErrors({})
  }

  const closeModal = () => {
    setIsModalOpen(false)
    if (submitStatus !== "success") {
      setFormData({ name: "", phone: "", email: "", message: "" })
    }
    setErrors({})
    setSubmitStatus("idle")
  }

  if (!isVisible) return null

  return (
    <>
      {/* Floating Contact Button */}
      <div className="fixed bottom-24 right-6 z-40">
        <button
          onClick={openModal}
          className="group relative bg-mule-fawn hover:bg-soya-bean text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Open contact form"
        >
          <Mail className="h-6 w-6" />

          {/* Pulse Ring Animation */}
          <div className="absolute inset-0 rounded-full bg-mule-fawn opacity-30 animate-ping"></div>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
              Quick Contact
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </button>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative bg-outer-space border border-cape-cod rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100 opacity-100 animate-in slide-in-from-bottom-4">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-cape-cod">
              <div>
                <h3 className="text-xl font-bold text-quicksand">Quick Contact</h3>
                <p className="text-sm text-gunsmoke">Get in touch with our team</p>
              </div>
              <button
                onClick={closeModal}
                className="text-gunsmoke hover:text-quicksand transition-colors p-1"
                aria-label="Close contact form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6">
              {submitStatus === "success" ? (
                // Success Message
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-quicksand mb-2">Message Sent!</h4>
                  <p className="text-gunsmoke text-sm">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : submitStatus === "error" ? (
                // Error Message
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="h-8 w-8 text-red-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-quicksand mb-2">Something went wrong</h4>
                  <p className="text-gunsmoke text-sm mb-4">
                    Please try again or contact us directly at infoveridiancraft@gmail.com
                  </p>
                  <Button
                    onClick={() => setSubmitStatus("idle")}
                    variant="outline"
                    className="border-cape-cod text-quicksand hover:bg-quicksand hover:text-woodsmoke"
                  >
                    Try Again
                  </Button>
                </div>
              ) : (
                // Contact Form
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-quicksand mb-2">
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`w-full px-4 py-3 bg-merlin border rounded-lg text-gunsmoke placeholder-jumbo focus:outline-none focus:ring-2 focus:ring-mule-fawn/50 transition-colors ${
                        errors.name ? "border-red-500" : "border-cape-cod focus:border-mule-fawn"
                      }`}
                      placeholder="Your full name"
                      disabled={isSubmitting}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-quicksand mb-2">
                      Phone *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`w-full px-4 py-3 bg-merlin border rounded-lg text-gunsmoke placeholder-jumbo focus:outline-none focus:ring-2 focus:ring-mule-fawn/50 transition-colors ${
                        errors.phone ? "border-red-500" : "border-cape-cod focus:border-mule-fawn"
                      }`}
                      placeholder="Your phone number"
                      disabled={isSubmitting}
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-quicksand mb-2">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`w-full px-4 py-3 bg-merlin border rounded-lg text-gunsmoke placeholder-jumbo focus:outline-none focus:ring-2 focus:ring-mule-fawn/50 transition-colors ${
                        errors.email ? "border-red-500" : "border-cape-cod focus:border-mule-fawn"
                      }`}
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-quicksand mb-2">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={`w-full px-4 py-3 bg-merlin border rounded-lg text-gunsmoke placeholder-jumbo focus:outline-none focus:ring-2 focus:ring-mule-fawn/50 transition-colors resize-none ${
                        errors.message ? "border-red-500" : "border-cape-cod focus:border-mule-fawn"
                      }`}
                      placeholder="Tell us about your project requirements..."
                      disabled={isSubmitting}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-mule-fawn hover:bg-soya-bean text-white py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </div>
                    )}
                  </Button>

                  {/* Footer Note */}
                  <p className="text-xs text-gunsmoke text-center mt-4">
                    We typically respond within 2-4 hours during business hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
