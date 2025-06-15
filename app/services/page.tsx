import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      title: "Soft Top Fabric Roof",
      description:
        "Experience flexible outdoor living with our sleek and modern retractable fabric roof. Designed to provide shade and protection when you need it, and open skies when you don't, these systems are perfect for patios, restaurants, and terraces.",
      image: "/placeholder.svg?height=300&width=500",
      features: ["Retractable design", "Weather resistant", "UV protection", "Easy operation"],
    },
    {
      title: "Hard Top Roofs",
      description:
        "Enjoy natural light without compromising on strength or weather protection. Our polycarbonate roofing solutions are lightweight, UV-resistant, and ideal for areas requiring transparency and durability, such as walkways, balconies, and skylights.",
      image: "/placeholder.svg?height=300&width=500",
      features: ["Polycarbonate material", "UV-resistant", "Lightweight", "Transparent design"],
    },
    {
      title: "Retractable Pergola",
      description:
        "Our retractable pergolas offer stylish, adjustable shade and weather protection, perfect for patios, terraces, and outdoor spaces—combining comfort, functionality, and modern design for year-round usability.",
      image: "/placeholder.svg?height=300&width=500",
      features: ["Adjustable shade", "Weather protection", "Modern design", "Year-round use"],
    },
    {
      title: "Tensile Structures",
      description:
        "Add a touch of architectural elegance with our custom-designed tensile membrane structures. These fabric-based solutions offer excellent weather resistance, long life, and eye-catching aesthetics for large spaces like event venues, sports arenas, and courtyards.",
      image: "/placeholder.svg?height=300&width=500",
      features: ["Custom design", "Weather resistant", "Long lasting", "Architectural elegance"],
    },
    {
      title: "Sports Sheds",
      description:
        "Crafted for durability and resilience, our metal roofing and shed solutions are perfect for both residential and commercial applications. We offer a range of designs and finishes to meet your structural and aesthetic needs, ensuring protection and performance throughout the year.",
      image: "/placeholder.svg?height=300&width=500",
      features: ["Metal construction", "Durable design", "Multiple finishes", "All-weather protection"],
    },
    {
      title: "Skylight",
      description:
        "We provide expertly crafted skylight solutions that enhance natural lighting, improve energy efficiency, and add elegance to residential and commercial spaces—designed for durability, weather resistance, and aesthetic appeal.",
      image: "/placeholder.svg?height=300&width=500",
      features: ["Natural lighting", "Energy efficient", "Weather resistant", "Elegant design"],
    },
    {
      title: "Retractable Sitting System",
      description:
        "Maximize space and style with our retractable seating systems – smart, space-saving solutions designed for comfort and flexibility. Ideal for indoor and outdoor areas needing adaptable seating.",
      image: "/placeholder.svg?height=300&width=500",
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
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
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
