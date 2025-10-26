"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqs: FAQItem[] = [
    {
      question: "What is a retractable roofing system, and how does it work?",
      answer:
        "Our retractable roofing systems are innovative, custom-designed structures that allow you to control your outdoor environment. When the weather is pleasant, you can open the roof for full outdoor enjoyment. When conditions change—rain, strong sun, or cold—simply close the roof for protection and comfort. Our systems are engineered for effortless use and built to withstand diverse weather conditions.",
    },
    {
      question: "How much does a retractable roof or pergola system cost?",
      answer:
        "Each Veridian structure is custom-built based on your site, size, and features. Key cost factors include: Dimensions and design, Type of roof (polycarbonate, tensile, motorized, etc.), Materials and finishes, Manual or motorized functionality, and On-site installation requirements. Our typical systems range between ₹8,000–₹15,000 per square meter, depending on specifications. Contact us for a personalized quote.",
    },
    {
      question: "Are your structures strong and durable?",
      answer:
        "Absolutely. Our enclosures and pergolas are designed using high-grade aluminum frames, stainless steel fittings, and premium-grade roofing materials like polycarbonate sheets and architectural fabrics. They are wind-resistant, UV-protected, and weatherproof. Every structure undergoes rigorous quality checks to ensure longevity and safety.",
    },
    {
      question: "Can you install on an existing structure or open space?",
      answer:
        "Yes. We frequently design systems that integrate seamlessly with existing rooftops, terraces, courtyards, or pool decks. If the surface is level and structurally sound, we can install with minimal modifications. In complex scenarios, we collaborate with your architect or contractor to ensure the best outcome.",
    },
    {
      question: "Do Veridian systems require tracks?",
      answer:
        "Many of our retractable roofing and pergola systems are trackless, meaning there's no floor obstruction—ideal for safety and aesthetics. For some large-span projects, discreet floor tracks may be required, but we always prioritize low-maintenance and visually clean designs.",
    },
    {
      question: "Will it get too hot under a closed roof?",
      answer:
        "Our roofing panels—especially polycarbonate options—have built-in UV and heat-reflective coatings that minimize heat buildup. Additionally, we offer: Sliding or louvered side panels, Motorized or manual ventilation options, and Fabric tensile covers for airflow. For enclosed applications, we recommend evaluating HVAC requirements with a local contractor for optimal year-round comfort.",
    },
    {
      question: "Does a retractable roof help regulate pool or patio temperatures?",
      answer:
        "Yes. Our enclosures can increase ambient air temperature by 10–15°C, reduce wind chill, and prevent debris from entering pools or patios. This can reduce cleaning time and maintenance costs while enhancing year-round usability.",
    },
    {
      question: "Can Veridian structures be customized for unique shapes or tight spaces?",
      answer:
        "Definitely. We specialize in custom design. Whether your space includes curves, water features, or non-rectangular layouts, our team will design a solution tailored to fit—both functionally and aesthetically.",
    },
    {
      question: "Do you offer different colors and materials?",
      answer:
        "Yes, our frames are available in powder-coated finishes, anodized colors, and a variety of fabric or sheet options. We provide dozens of standard color options and custom finishes upon request. Matching the style of your home or business is a key part of our process.",
    },
    {
      question: "What's the typical lead time for a project?",
      answer:
        "After design finalization and approval, production typically takes 3–6 weeks, followed by on-site installation, which takes 2–5 days depending on complexity. We provide you a full project timeline during the consultation phase.",
    },
    {
      question: "Is your work covered under warranty?",
      answer:
        "Yes. All Veridian Craft Tech systems come with: 10-year warranty on structure, 5-year warranty on roofing materials, and 1-year warranty on motorized/mechanical components (extendable).",
    },
    {
      question: "Do I need a building permit?",
      answer:
        "In some regions, local authorities may require a permit depending on size and structural changes. While we provide structural design documentation if needed, it's best to check with your local municipality. Our team can guide you through this process.",
    },
    {
      question: "Can I install the structure myself?",
      answer:
        "Our systems are designed for professional installation. We offer full-service installation across India and recommend using our trained teams to maintain structural integrity and preserve warranty coverage. Self-installation is not recommended.",
    },
    {
      question: "What types of clients do you work with?",
      answer:
        "We serve a wide range of clients, including: Homeowners (terraces, pools, gardens), Restaurants and cafés (outdoor dining), Hotels and resorts (banquet & poolside enclosures), Commercial developers, and Architects and contractors.",
    },
    {
      question: "What makes Veridian Craft Tech different?",
      answer:
        "Custom design-first approach, Zero-track, low-maintenance systems, Durable, premium materials, On-time delivery and installation, Transparent pricing and documentation, and 100% made in India with precision engineering.",
    },
  ]

  return (
    <div className="min-h-screen bg-woodsmoke">
      <Header />

      {/* Hero Section */}
      <section className="bg-jumbo text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <HelpCircle className="h-12 w-12 text-quicksand" />
              <h1 className="text-4xl lg:text-5xl font-bold text-quicksand">Frequently Asked Questions</h1>
            </div>
            <p className="text-xl text-white leading-relaxed mb-4">
              Specialists in Custom Retractable Roofing, Pergolas, and Tensile Structures
            </p>
            <p className="text-lg text-white">
              Find answers to common questions about our retractable roofing systems, installation process, and
              services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-outer-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="shadow-lg bg-merlin border-cape-cod overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left p-6 hover:bg-outer-space/50 transition-colors focus:outline-none focus:ring-2 focus:ring-mule-fawn/20"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-quicksand pr-4">{faq.question}</h3>
                      {openItems.includes(index) ? (
                        <ChevronUp className="h-5 w-5 text-mule-fawn flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-mule-fawn flex-shrink-0" />
                      )}
                    </div>
                  </button>
                  {openItems.includes(index) && (
                    <CardContent className="px-6 pb-6 pt-0">
                      <div className="border-t border-cape-cod pt-4">
                        <p className="text-gunsmoke leading-relaxed">{faq.answer}</p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg bg-merlin border-cape-cod">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-mule-fawn/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="h-8 w-8 text-mule-fawn" />
                  </div>
                  <h3 className="text-xl font-bold text-quicksand mb-4">Still Have Questions?</h3>
                  <p className="text-gunsmoke mb-6">
                    Our experts are ready to help you with personalized answers and project consultation.
                  </p>
                  <div className="space-y-3">
                    <p className="text-gunsmoke">
                      <strong className="text-quicksand">Call:</strong>{" "}
                      <a href="tel:+919369923536" className="hover:text-quicksand transition-colors">
                        93699 23536
                      </a>
                    </p>
                    <p className="text-gunsmoke">
                      <strong className="text-quicksand">Email:</strong>{" "}
                      <a href="mailto:infoveridiancraft@gmail.com" className="hover:text-quicksand transition-colors">
                        infoveridiancraft@gmail.com
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-merlin border-cape-cod">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-mule-fawn/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-8 w-8 text-mule-fawn" />
                  </div>
                  <h3 className="text-xl font-bold text-quicksand mb-4">Ready to Get Started?</h3>
                  <p className="text-gunsmoke mb-6">
                    Contact us for a free consultation and personalized quote for your retractable roofing project.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-mule-fawn hover:bg-soya-bean text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Get Free Quote
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-merlin">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-mule-fawn">Ready to Transform Your Space?</h2>
            <p className="text-xl text-gunsmoke mb-8">
              We look forward to crafting your outdoor vision with our innovative retractable solutions.
            </p>

            <div className="bg-outer-space rounded-lg p-8 border border-cape-cod">
              <h3 className="text-xl font-semibold text-quicksand mb-4">Why Choose Veridian Craft Tech?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-gunsmoke">
                <div className="space-y-2">
                  <h4 className="font-semibold text-quicksand">Custom Design</h4>
                  <p>Tailored solutions for your unique space and requirements</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-quicksand">Premium Quality</h4>
                  <p>High-grade materials with comprehensive warranty coverage</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-quicksand">Expert Installation</h4>
                  <p>Professional installation team across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
