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
          src: "/images/softtoproof/softtoproof (1).jpg?height=320&width=500&text=Soft+Top+Fabric+Roof+1",
          alt: "Soft Top Fabric Roof - Retracted Position",
        },
        {
          src: "/images/softtoproof/softtoproof (2).jpg?height=320&width=500&text=Soft+Top+Fabric+Roof+2",
          alt: "Soft Top Fabric Roof - Extended Position",
        },
        {
          src: "/images/softtoproof/softtoproof (3).jpg?height=320&width=500&text=Soft+Top+Fabric+Roof+3",
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
          src: "/images/hardtoproof/hardtoproof (8).jpg?height=320&width=500&text=Hard+Top+Polycarbonate+1",
          alt: "Hard Top Polycarbonate Roof - Clear Panels",
        },
        {
          src: "/images/hardtoproof/hardtoproof (9).jpg?height=320&width=500&text=Hard+Top+Polycarbonate+2",
          alt: "Hard Top Polycarbonate Roof - Tinted Panels",
        },
        {
          src: "/images/hardtoproof/hardtoproof (10).jpg?height=320&width=500&text=Hard+Top+Polycarbonate+3",
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
          src: "/images/retractablepergola/retractablepergola (1).jpeg?height=320&width=500&text=Retractable+Pergola+1",
          alt: "Retractable Pergola - Open Configuration",
        },
        {
          src: "/images/retractablepergola/retractablepergola (1).png?height=320&width=500&text=Retractable+Pergola+3",
          alt: "Retractable Pergola - Side View",
        },
        {
          src: "/images/retractablepergola/retractablepergola (1).jpg?height=320&width=500&text=Retractable+Pergola+2",
          alt: "Retractable Pergola - Closed Configuration",
        },
        
      ],
      features: ["Adjustable shade", "Weather protection", "Modern design", "Year-round use"],
    },
    {
  title: "Fixed Pergola System",
  description:
    "Redefine outdoor living with our fixed pergola systems – a perfect blend of architectural elegance and durability, designed to provide year-round shelter and aesthetic appeal for patios, terraces, and garden areas.",
  images: [
    {
      src: "/images/fixedpergola/fixedpergola (5).jpg?height=320&width=500&text=Fixed+Pergola+1",
      alt: "Fixed Pergola - Aluminum Frame",
    },
    {
      src: "/images/fixedpergola/fixedpergola (2).jpg?height=320&width=500&text=Fixed+Pergola+2",
      alt: "Fixed Pergola - Outdoor Lounge Area",
    },
    {
      src: "/images/fixedpergola/fixedpergola (3).jpg?height=320&width=500&text=Fixed+Pergola+3",
      alt: "Fixed Pergola - Modern Backyard Design",
    },
  ],
  features: [
    "Durable aluminum or steel construction",
    "Weather-resistant powder coating",
    "Customizable roof slats and lighting options",
    "Permanent installation for year-round use",
  ],
},

    {
      title: "Tensile Structures",
      description:
        "Add a touch of architectural elegance with our custom-designed tensile membrane structures. These fabric-based solutions offer excellent weather resistance, long life, and eye-catching aesthetics for large spaces like event venues, sports arenas, and courtyards.",
      images: [
        {
          src: "/images/tensilestructure/6.jpg?height=320&width=500&text=Tensile+Structure+1",
          alt: "Tensile Structure - Curved Design",
        },
        {
          src: "/images/tensilestructure/2.jpg?height=320&width=500&text=Tensile+Structure+2",
          alt: "Tensile Structure - Angular Design",
        },
        {
          src: "/images/tensilestructure/3.jpg?height=320&width=500&text=Tensile+Structure+3",
          alt: "Tensile Structure - Large Span Installation",
        },
        {
          src: "/images/tensilestructure/4.jpg?height=320&width=500&text=Tensile+Structure+4",
          alt: "Tensile Structure - Large Span Installation",
        },
        {
          src: "/images/tensilestructure/5.jpg?height=320&width=500&text=Tensile+Structure+5",
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
          src: "/images/shed/shed (1).png?text=Sports+Shed+1",
          alt: "Sports Shed - Metal Roofing",
        },
        {
          src: "/images/shed/shed (10).jpg?text=Sports+Shed+2",
          alt: "Sports Shed - Interior View",
        },
        {
          src: "/images/shed/shed (16).jpg?text=Sports+Shed+1",
          alt: "Sports Shed - Metal Roofing",
        },
        {
          src: "/images/shed/shed (1).webp?text=Sports+Shed+2",
          alt: "Sports Shed - Interior View",
        },
        {
          src: "/images/shed/shed (2).jpg?text=Sports+Shed+1",
          alt: "Sports Shed - Metal Roofing",
        },
        
      ],
      features: ["Metal construction", "Durable design", "Multiple finishes", "All-weather protection"],
    },
    {
      title: "Retractable Gate System",
      description:
        "Enhance security and convenience with our retractable gate systems – sleek, motorized gates operated effortlessly with the push of a button. Perfect for homes, office buildings, and commercial spaces.",
      images: [
        {
          src: "/images/door/door (3).png?height=320&width=500&text=Retractable+Seating+2",
          alt: "Retractable Seating - Retracted Position",
        },
        {
          src: "/images/door/door (1).jpg?height=320&width=500&text=Retractable+Seating+1",
          alt: "Retractable Seating - Extended Position",
        },
        {
          src: "/images/door/door (1).png?height=320&width=500&text=Retractable+Seating+3",
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
          src: "/images/skylightsystem/skylight (3).jpg?height=320&width=500&text=Skylight+1",
          alt: "Skylight - Fixed Installation",
        },
        {
          src: "/images/skylightsystem/skylight (5).jpg?height=320&width=500&text=Skylight+1",
          alt: "Skylight - Fixed Installation",
        },
        {
          src: "/images/skylightsystem/skylight (4).jpg?height=320&width=500&text=Skylight+1",
          alt: "Skylight - Fixed Installation",
        },
        
      ],
      features: ["Natural lighting", "Energy efficient", "Weather resistant", "Elegant design"],
    },
    {
      title: "Retractable Sitting System",
      description:
        "Maximize space and style with our retractable seating systems – smart, space-saving solutions designed for comfort and flexibility. Ideal for indoor and outdoor areas needing adaptable seating.",
      images: [
        {
          src: "/images/sitting/sitting (1).jpg?height=320&width=500&text=Retractable+Seating+1",
          alt: "Retractable Seating - Extended Position",
        },
        {
          src: "/images/sitting/sitting (1).jpeg?height=320&width=500&text=Retractable+Seating+1",
          alt: "Retractable Seating - Extended Position",
        },
        {
          src: "/images/sitting/sitting (2).jpeg?height=320&width=500&text=Retractable+Seating+1",
          alt: "Retractable Seating - Extended Position",
        },
        
      ],
      features: ["Space-saving", "Flexible design", "Comfortable seating", "Indoor/outdoor use"],
    },
    {
  title: "Zip Screen System",
  description:
    "Enhance comfort and energy efficiency with our premium Zip Screen systems – engineered to provide shade, privacy, and protection against heat, glare, and insects. Perfect for patios, balconies, and commercial façades.",
  images: [
    {
      src: "/images/zipscreen/zipscreen (4).jpeg?height=320&width=500&text=Zip+Screen+1",
      alt: "Zip Screen - Outdoor Shading System",
    },
    {
      src: "/images/zipscreen/zipscreen (2).webp?height=320&width=500&text=Zip+Screen+2",
      alt: "Zip Screen - Retractable Fabric Shade",
    },
    {
      src: "/images/zipscreen/zipscreen (3).jpeg?height=320&width=500&text=Zip+Screen+3",
      alt: "Zip Screen - Modern Exterior Design",
    },
  ],
  features: [
    "Wind-resistant fabric tension system",
    "UV and glare reduction",
    "Automated or manual control options",
    "All-weather protection",
  ],
},{
  title: "Motorized Shutters",
  description:
    "Combine aesthetics and functionality with our motorized shutter systems – offering superior privacy, ventilation control, and weather resilience. Ideal for residential façades, commercial fronts, and outdoor structures.",
  images: [
    {
      src: "/images/shutter/shutter (1).jpg?height=320&width=500&text=Shutters+1",
      alt: "Exterior Shutters - Aluminum Panels",
    },
    {
      src: "/images/shutter/shutter (2).jpg?height=320&width=500&text=Shutters+2",
      alt: "Adjustable Louver Shutters - Modern Design",
    },
    {
      src: "/images/shutter/shutter (4).jpg?height=320&width=500&text=Shutters+3",
      alt: "Automated Shutters - Outdoor Protection",
    },
  ],
  features: [
    "Adjustable louvers for airflow control",
    "Durable aluminum or composite materials",
    "Weather and corrosion resistant",
    "Manual or motorized operation",
  ],
},{
  title: "Bleachers",
  description:
    "Optimize audience capacity and venue flexibility with our bleacher systems – robust, safe, and space-efficient seating solutions ideal for auditoriums, stadiums, schools, and multipurpose halls.",
  images: [
    {
      src: "/images/bleacher/bleachers (1).jpg?height=320&width=500&text=Bleachers+1",
      alt: " Bleachers - Retracted",
    },
    {
      src: "/images/bleacher/bleachers (2).jpg?height=320&width=500&text=Bleachers+2",
      alt: "Bleachers - Extended Seating",
    },
    {
      src: "/images/bleacher/bleachers (3).jpg?height=320&width=500&text=Bleachers+3",
      alt: "Bleachers - Modular Design",
    },
  ],
  features: [
    "Retractable modular design",
    "High load-bearing steel structure",
    "Ergonomic seating comfort",
    "Customizable finishes and configurations",
  ],
},



    
  ]

  return (
    <div className="min-h-screen bg-woodsmoke">
      <Header />

      {/* Hero Section */}
      <section className="bg-jumbo text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-quicksand">Our Services</h1>
            <p className="text-xl text-white leading-relaxed">
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
