"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface ServiceImage {
  src: string
  alt: string
}

interface Service {
  title: string
  description: string
  images: ServiceImage[]
  features: string[]
}

function ImageSlider({ images, title }: { images: ServiceImage[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative group">
      {/* Main Image */}
      <div className="relative h-80 overflow-hidden rounded-lg">
        <Image
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          width={500}
          height={320}
          className="w-full h-full object-cover transition-transform duration-300"
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Dots */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-mule-fawn" : "bg-cape-cod hover:bg-gunsmoke"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      title: "Soft Top Fabric Roof",
      description:
        "Experience flexible outdoor living with our sleek and modern retractable fabric roof. Designed to provide shade and protection when you need it, and open skies when you don't, these systems are perfect for patios, restaurants, and terraces.",
      images: [
        {
          src: "/images/softtoproof/3.png?height=320&width=500&text=Soft+Top+Fabric+Roof+1",
          alt: "Soft Top Fabric Roof - Retracted Position",
        },
        {
          src: "/images/softtoproof/2.jpg?height=320&width=500&text=Soft+Top+Fabric+Roof+2",
          alt: "Soft Top Fabric Roof - Extended Position",
        },
        {
          src: "/images/softtoproof/4.png?height=320&width=500&text=Soft+Top+Fabric+Roof+3",
          alt: "Soft Top Fabric Roof - Installation View",
        },
      ],
      features: ["Retractable design", "Weather resistant", "UV protection", "Easy operation"],
    },
    {
      title: "Hard Top Roofs",
      description:
        "Enjoy natural light without compromising on strength or weather protection. Our polycarbonate roofing solutions are lightweight, UV-resistant, and ideal for areas requiring transparency and durability, such as walkways, balconies, and skylights.",
      images: [
        {
          src: "/images/hardtoproof/1.jpg?height=320&width=500&text=Hard+Top+Polycarbonate+1",
          alt: "Hard Top Polycarbonate Roof - Clear Panels",
        },
        {
          src: "/images/hardtoproof/3.jpg?height=320&width=500&text=Hard+Top+Polycarbonate+2",
          alt: "Hard Top Polycarbonate Roof - Tinted Panels",
        },
        {
          src: "/images/hardtoproof/2.png?height=320&width=500&text=Hard+Top+Polycarbonate+3",
          alt: "Hard Top Polycarbonate Roof - Installation Process",
        },
      ],
      features: ["Polycarbonate material", "UV-resistant", "Lightweight", "Transparent design"],
    },
    {
      title: "Retractable Pergola",
      description:
        "Our retractable pergolas offer stylish, adjustable shade and weather protection, perfect for patios, terraces, and outdoor spaces—combining comfort, functionality, and modern design for year-round usability.",
      images: [
        {
          src: "/images/retractablepergola/1.jpeg?height=320&width=500&text=Retractable+Pergola+1",
          alt: "Retractable Pergola - Open Configuration",
        },
        {
          src: "/images/retractablepergola/3.jpg?height=320&width=500&text=Retractable+Pergola+3",
          alt: "Retractable Pergola - Side View",
        },
        {
          src: "/images/retractablepergola/2.png?height=320&width=500&text=Retractable+Pergola+2",
          alt: "Retractable Pergola - Closed Configuration",
        },
        
      ],
      features: ["Adjustable shade", "Weather protection", "Modern design", "Year-round use"],
    },
    {
      title: "Tensile Structures",
      description:
        "Add a touch of architectural elegance with our custom-designed tensile membrane structures. These fabric-based solutions offer excellent weather resistance, long life, and eye-catching aesthetics for large spaces like event venues, sports arenas, and courtyards.",
      images: [
        {
          src: "/images/tensile/6.jpg?height=320&width=500&text=Tensile+Structure+1",
          alt: "Tensile Structure - Curved Design",
        },
        {
          src: "/images/tensile/2.jpg?height=320&width=500&text=Tensile+Structure+2",
          alt: "Tensile Structure - Angular Design",
        },
        {
          src: "/images/tensile/3.jpg?height=320&width=500&text=Tensile+Structure+3",
          alt: "Tensile Structure - Large Span Installation",
        },
        {
          src: "/images/tensile/4.jpg?height=320&width=500&text=Tensile+Structure+4",
          alt: "Tensile Structure - Large Span Installation",
        },
        {
          src: "/images/tensile/5.jpg?height=320&width=500&text=Tensile+Structure+5",
          alt: "Tensile Structure - Large Span Installation",
        },
        
      ],
      features: ["Custom design", "Weather resistant", "Long lasting", "Architectural elegance"],
    },
    {
      title: "Sports Sheds",
      description:
        "Crafted for durability and resilience, our metal roofing and shed solutions are perfect for both residential and commercial applications. We offer a range of designs and finishes to meet your structural and aesthetic needs, ensuring protection and performance throughout the year.",
      images: [
        {
          src: "/images/sportshed/1.png?text=Sports+Shed+1",
          alt: "Sports Shed - Metal Roofing",
        },
        {
          src: "/images/sportshed/2.png?text=Sports+Shed+2",
          alt: "Sports Shed - Interior View",
        },
        // {
        //   src: "/images/sportshed/4.webp?text=Sports+Shed+3",
        //   alt: "Sports Shed - Exterior Design",
        // },
      ],
      features: ["Metal construction", "Durable design", "Multiple finishes", "All-weather protection"],
    },
    {
      title: "Retractable Gate System",
      description:
        "Enhance security and convenience with our retractable gate systems – sleek, motorized gates operated effortlessly with the push of a button. Perfect for homes, office buildings, and commercial spaces.",
      images: [
        {
          src: "/images/door/1.png?height=320&width=500&text=Retractable+Seating+1",
          alt: "Retractable Seating - Extended Position",
        },
        {
          src: "/images/door/2.png?height=320&width=500&text=Retractable+Seating+2",
          alt: "Retractable Seating - Retracted Position",
        },
        {
          src: "/images/door/3.png?height=320&width=500&text=Retractable+Seating+3",
          alt: "Retractable Seating - Mechanism Detail",
        },
      ],
      features: ["Remote-controlled", "Space-efficient", "Modern design", "Versatile application"],
    },
    {
      title: "Skylight",
      description:
        "We provide expertly crafted skylight solutions that enhance natural lighting, improve energy efficiency, and add elegance to residential and commercial spaces—designed for durability, weather resistance, and aesthetic appeal.",
      images: [
        {
          src: "/images/skyline/1.png?height=320&width=500&text=Skylight+1",
          alt: "Skylight - Fixed Installation",
        },
        // {
        //   src: "/placeholder.svg?height=320&width=500&text=Skylight+2",
        //   alt: "Skylight - Motorized Opening",
        // },
        // {
        //   src: "/placeholder.svg?height=320&width=500&text=Skylight+3",
        //   alt: "Skylight - Interior Light Effect",
        // },
      ],
      features: ["Natural lighting", "Energy efficient", "Weather resistant", "Elegant design"],
    },
    {
      title: "Retractable Sitting System",
      description:
        "Maximize space and style with our retractable seating systems – smart, space-saving solutions designed for comfort and flexibility. Ideal for indoor and outdoor areas needing adaptable seating.",
      images: [
        {
          src: "/images/sitting/1.png?height=320&width=500&text=Retractable+Seating+1",
          alt: "Retractable Seating - Extended Position",
        },
        // {
        //   src: "/images/sitting/1.png?height=320&width=500&text=Retractable+Seating+2",
        //   alt: "Retractable Seating - Retracted Position",
        // },
        // {
        //   src: "/images/sitting/1.png?height=320&width=500&text=Retractable+Seating+3",
        //   alt: "Retractable Seating - Mechanism Detail",
        // },
      ],
      features: ["Space-saving", "Flexible design", "Comfortable seating", "Indoor/outdoor use"],
    },
    
  ]

  return (
    <div className="min-h-screen bg-woodsmoke">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-woodsmoke to-merlin text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-quicksand">Our Services</h1>
            <p className="text-xl text-gunsmoke leading-relaxed">
              We are your premier experts in customized roofing solutions and retractable structures. Whether you
              require elegant pergolas, modern polycarbonate roofs, stylish tensile structures, or robust metal sheds,
              we have you covered—quite literally.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-outer-space">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden shadow-lg bg-merlin border-cape-cod">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="p-6">
                      <ImageSlider images={service.images} title={service.title} />
                    </div>
                  </div>
                  <div
                    className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl lg:text-3xl font-bold text-quicksand">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-gunsmoke text-lg leading-relaxed mb-6">{service.description}</p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-mule-fawn rounded-full"></div>
                            <span className="text-gunsmoke text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button asChild className="bg-mule-fawn hover:bg-soya-bean text-white">
                        <Link href="/contact">Get Quote</Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-merlin">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-quicksand mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gunsmoke mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a customized solution that meets your specific
            needs.
          </p>
          <Button asChild size="lg" className="bg-mule-fawn hover:bg-soya-bean text-white">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
