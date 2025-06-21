import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Phone, Mail, MessageCircle} from "lucide-react"
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
                  <p className="text-xl lg:text-2xl text-white font-medium mt-4">INNOVATE • ENGINEER • ACHIEVE</p>
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
                   <div>
                  <Link href="/contact">Contact Us</Link>
                  {/* <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                      <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                      </svg>
                  </div> */}
                 </div>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/tensile/home2.jpg"
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
                image: "/images/softtoproof/2.jpg",
                width: 600,
                height: 400,
                
              },
              {
                title: "Hard Top Roofs",
                description: "Polycarbonate roofing solutions with UV resistance and durability",
                image: "/images/hardtoproof/1.jpg",
              },
              {
                title: "Retractable Pergola",
                description: "Stylish, adjustable shade and weather protection systems",
                image: "/images/retractablepergola/1.jpeg",
              },
              {
                title: "Tensile Structures",
                description: "Custom-designed membrane structures with architectural elegance",
                image: "/images/tensile/1.png",
              },
              {
                title: "Sports Sheds",
                description: "Durable metal roofing and shed solutions for all applications",
                image: "/images/sportshed/1.png",
              },
              {
                title: "Skylight Systems",
                description: "Enhanced natural lighting with weather-resistant skylights",
                image: "/images/skyline/1.png",
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
