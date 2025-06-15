import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Head from "next/head"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-woodsmoke">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-woodsmoke via-merlin to-outer-space text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Logo */}
                {/* <div className="flex justify-center lg:justify-start">
                  <Image
                    src="/images/veridian-craft-logo.png"
                    alt="Veridian Craft Tech Logo"
                    width={300}
                    height={360}
                    className="w-64 h-auto lg:w-80"
                    priority
                  />
                </div> */}

                <div className="text-center lg:text-left">
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-quicksand">
                    VERIDIAN
                    <span className="block text-mule-fawn">CRAFT TECH</span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-quicksand font-medium mt-4">INNOVATE • ENGINEER • ACHIEVE</p>
                </div>
              </div>

              <p className="text-lg text-gunsmoke leading-relaxed max-w-xl text-center lg:text-left">
                We are a dedicated team committed to delivering top-notch retractable solutions. With the expertise of
                our engineers, sales and marketing professionals, alongside our high-quality production and site
                services, we blend innovation, durability, and design to elevate both outdoor living and commercial
                spaces.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-mule-fawn hover:bg-soya-bean text-white">
                  <Link href="/services">
                    Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-quicksand text-quicksand bg-black/20 hover:bg-quicksand hover:text-woodsmoke"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/veridian (21).jpg"
                alt="Retractable roofing solutions"
                width={700}
                height={900}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-outer-space">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-quicksand mb-4">Why Choose Veridian Craft?</h2>
            <p className="text-lg text-gunsmoke max-w-2xl mx-auto">
              We combine innovation, durability, and design to create exceptional retractable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-cape-cod shadow-lg hover:shadow-xl transition-shadow bg-merlin">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-mule-fawn/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-mule-fawn" />
                </div>
                <h3 className="text-xl font-bold text-quicksand mb-4">Innovation</h3>
                <p className="text-gunsmoke">
                  Cutting-edge retractable solutions that push the boundaries of outdoor living
                </p>
              </CardContent>
            </Card>

            <Card className="border-cape-cod shadow-lg hover:shadow-xl transition-shadow bg-merlin">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-mule-fawn/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-mule-fawn" />
                </div>
                <h3 className="text-xl font-bold text-quicksand mb-4">Engineering</h3>
                <p className="text-gunsmoke">
                  Expert engineering team ensuring structural integrity and optimal performance
                </p>
              </CardContent>
            </Card>

            <Card className="border-cape-cod shadow-lg hover:shadow-xl transition-shadow bg-merlin">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-mule-fawn/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-mule-fawn" />
                </div>
                <h3 className="text-xl font-bold text-quicksand mb-4">Achievement</h3>
                <p className="text-gunsmoke">Proven track record of successful installations and satisfied customers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-woodsmoke">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-quicksand mb-4">Our Services</h2>
            <p className="text-lg text-gunsmoke max-w-2xl mx-auto">
              Premier experts in customized roofing solutions and retractable structures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Soft Top Fabric Roof",
                description: "Flexible outdoor living with sleek retractable fabric roofs",
                image: "/images/softtoproofs.png",
                width: 600,
                height: 400,
                
              },
              {
                title: "Hard Top Roofs",
                description: "Polycarbonate roofing solutions with UV resistance and durability",
                image: "/images/hardtop.jpg",
              },
              {
                title: "Retractable Pergola",
                description: "Stylish, adjustable shade and weather protection systems",
                image: "/images/retractablepergola.png",
              },
              {
                title: "Tensile Structures",
                description: "Custom-designed membrane structures with architectural elegance",
                image: "/images/tensile.png",
              },
              {
                title: "Sports Sheds",
                description: "Durable metal roofing and shed solutions for all applications",
                image: "/images/sportsheds.png",
              },
              {
                title: "Skylight Systems",
                description: "Enhanced natural lighting with weather-resistant skylights",
                image: "/images/skylines.png",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-outer-space border-cape-cod"
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-quicksand mb-3">{service.title}</h3>
                  <p className="text-gunsmoke mb-4">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-mule-fawn hover:bg-soya-bean text-white">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-merlin text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-quicksand">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gunsmoke mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your retractable roofing and seating solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-mule-fawn" />
              <span className="text-gunsmoke">93699 23536</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-mule-fawn" />
              <span className="text-gunsmoke">infoveridiancraft@gmail.com</span>
            </div>
          </div>

          <Button asChild size="lg" className="mt-8 bg-mule-fawn hover:bg-soya-bean text-white">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
