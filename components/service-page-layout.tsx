"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

interface ServicePageLayoutProps {
  title: string
  category: string
  description: string
  features: string[]
  backLink: string
  backText: string
  image?: string[]
}

export default function ServicePageLayout({
  title,
  category,
  description,
  features,
  backLink,
  backText,
  image,
}: ServicePageLayoutProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrev = () => {
    if (!image || image.length === 0) return
    setCurrentImageIndex((prev) =>
      prev === 0 ? image.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    if (!image || image.length === 0) return
    setCurrentImageIndex((prev) =>
      prev === image.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div className="min-h-screen bg-woodsmoke">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-outer-space to-abbey py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-mule-fawn/20 text-mule-fawn text-sm font-medium rounded-full">
                {category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-quicksand mb-6">{title}</h1>

            {/* Description */}
            <p className="text-lg text-medium-contrast leading-relaxed max-w-3xl">{description}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image Slideshow */}
              <div className="relative">
                <div className="aspect-video bg-abbey rounded-lg overflow-hidden light-shadow-lg relative">
                  {image && image.length > 0 ? (
                    <>
                      <Image
                        src={image[currentImageIndex]}
                        alt={`${title} Image ${currentImageIndex + 1}`}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      {/* Prev Button */}
                      <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      {/* Next Button */}
                      <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=${encodeURIComponent(title)}`}
                      alt={title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-quicksand mb-6">Key Features</h2>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-mule-fawn rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-medium-contrast text-merlin">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Section */}
                <div className="mt-8 p-6 bg-outer-space rounded-lg border border-cape-cod">
                  <h2 className="text-xl font-bold text-quicksand mb-4">Interested in {title}?</h2>
                  <p className="text-medium-contrast mb-6">
                    Contact our experts for a personalized consultation and quote for your project.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-mule-fawn hover:bg-soya-bean text-white font-semibold">
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                    <div className="flex items-center gap-4 text-sm text-medium-contrast">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-mule-fawn" />
                        <span>93699 23536</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-mule-fawn" />
                        <span>infoveridiancraft@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Related Services */}
      <section className="py-16 bg-merlin">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-quicksand mb-6">Explore Our Other Services</h2>
            <p className="text-medium-contrast mb-8">
              Discover our complete range of retractable and fixed solutions for your space.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                variant="outline"
                className="border-cape-cod text-quicksand hover:bg-quicksand hover:text-white bg-transparent"
              >
                <Link href="/retractablesystems/hardtoproofs">Retractable Systems</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-cape-cod text-quicksand hover:bg-quicksand hover:text-white bg-transparent"
              >
                <Link href="/retractablesystems/retractablegates">Retractable Gates</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-cape-cod text-quicksand hover:bg-quicksand hover:text-white bg-transparent"
              >
                <Link href="/blinds/zipscreens">Blinds & Screens</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
