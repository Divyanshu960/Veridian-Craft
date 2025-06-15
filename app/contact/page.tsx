"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-woodsmoke">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-woodsmoke to-merlin text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-quicksand">Contact Us</h1>
            <p className="text-xl text-gunsmoke leading-relaxed">
              Ready to transform your space? Get in touch with our team of experts to discuss your retractable roofing
              and seating solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-outer-space">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg bg-merlin border-cape-cod">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-quicksand">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gunsmoke">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="bg-outer-space border-cape-cod text-gunsmoke"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gunsmoke">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="bg-outer-space border-cape-cod text-gunsmoke"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gunsmoke">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="bg-outer-space border-cape-cod text-gunsmoke"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-gunsmoke">
                        Service Interest
                      </Label>
                      <Select onValueChange={handleSelectChange} value={formData.service}>
                        <SelectTrigger className="bg-outer-space border-cape-cod text-gunsmoke">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-outer-space border-cape-cod text-gunsmoke">
                          <SelectItem value="soft-top-fabric">Soft Top Fabric Roof</SelectItem>
                          <SelectItem value="hard-top-roofs">Hard Top Roofs</SelectItem>
                          <SelectItem value="retractable-pergola">Retractable Pergola</SelectItem>
                          <SelectItem value="tensile-structures">Tensile Structures</SelectItem>
                          <SelectItem value="sports-sheds">Sports Sheds</SelectItem>
                          <SelectItem value="skylight">Skylight</SelectItem>
                          <SelectItem value="retractable-sitting">Retractable Sitting System</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gunsmoke">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                      className="bg-outer-space border-cape-cod text-gunsmoke"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <p className="text-green-400">
                        Thank you for your message! We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                      <p className="text-red-400">Sorry, there was an error sending your message. Please try again.</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-mule-fawn hover:bg-soya-bean text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg bg-merlin border-cape-cod">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-quicksand">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-mule-fawn/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-mule-fawn" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-quicksand mb-1">Phone Numbers</h3>
                      <p className="text-gunsmoke">93699 23536</p>
                      <p className="text-gunsmoke">85955 52198</p>
                      <p className="text-gunsmoke">9211323080</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-mule-fawn/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-mule-fawn" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-quicksand mb-1">Email</h3>
                      <p className="text-gunsmoke">infoveridiancraft@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-mule-fawn/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-mule-fawn" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-quicksand mb-1">Address</h3>
                      <p className="text-gunsmoke">
                        Shop No-1, Dwarkapuri, Haibat Mau Mawaiya,
                        <br />
                        Rai Bareli Road, Lucknow, UP - 226002
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-mule-fawn/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-mule-fawn" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-quicksand mb-1">Business Hours</h3>
                      <p className="text-gunsmoke">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gunsmoke">Sunday: By Appointment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-merlin border-cape-cod">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-quicksand">Visit Our Website</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gunsmoke mb-4">Learn more about our services and view our portfolio online.</p>
                  <a
                    href="https://www.veridiancraft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-quicksand hover:text-mule-fawn font-semibold transition-colors"
                  >
                    www.veridiancraft.com
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
