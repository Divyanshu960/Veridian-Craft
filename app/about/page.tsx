import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Wrench } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-woodsmoke">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-woodsmoke to-merlin text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-quicksand">About Veridian Craft</h1>
            <p className="text-xl text-gunsmoke leading-relaxed">
              At Veridian Craft, we specialise in providing innovative and high-quality retractable roofing and sitting
              solutions tailored to meet your unique outdoor and architectural needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 bg-outer-space">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-quicksand mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gunsmoke leading-relaxed">
                <p>
                  Whether you're enhancing your home, business, or commercial space, our range of products combines
                  style, durability, and functionality. We are a dedicated team committed to delivering top-notch
                  retractable solutions.
                </p>
                <p>
                  With the expertise of our engineers, sales and marketing professionals, alongside our high-quality
                  production and site services, we blend innovation, durability, and design to elevate both outdoor
                  living and commercial spaces.
                </p>
                <p>
                  Our designs seamlessly combine durability and aesthetic appeal, providing all-weather protection for
                  both your serene home and thriving business.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/veridian (9).jpg"
                alt="Veridian Craft team at work"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-quicksand text-center mb-12">Our Core Values</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-cape-cod shadow-lg text-center bg-merlin">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-mule-fawn/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-mule-fawn" />
                  </div>
                  <h3 className="text-2xl font-bold text-quicksand mb-4">Innovation</h3>
                  <p className="text-gunsmoke">
                    We constantly push the boundaries of what's possible in retractable solutions, bringing cutting-edge
                    technology to every project.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-cape-cod shadow-lg text-center bg-merlin">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-mule-fawn/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Wrench className="h-8 w-8 text-mule-fawn" />
                  </div>
                  <h3 className="text-2xl font-bold text-quicksand mb-4">Engineering</h3>
                  <p className="text-gunsmoke">
                    Our expert engineering team ensures every solution meets the highest standards of structural
                    integrity and performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-cape-cod shadow-lg text-center bg-merlin">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-mule-fawn/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-mule-fawn" />
                  </div>
                  <h3 className="text-2xl font-bold text-quicksand mb-4">Achievement</h3>
                  <p className="text-gunsmoke">
                    We measure our success by the satisfaction of our clients and the quality of our installations that
                    stand the test of time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-merlin rounded-2xl p-12 border border-cape-cod">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-quicksand mb-4">Our Expert Team</h2>
              <p className="text-lg text-gunsmoke max-w-2xl mx-auto">
                A dedicated team of professionals committed to excellence in every project
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-mule-fawn/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-mule-fawn" />
                </div>
                <h3 className="text-xl font-bold text-quicksand mb-2">Engineers</h3>
                <p className="text-gunsmoke">
                  Skilled engineers who design and oversee the technical aspects of every installation
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-mule-fawn/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-mule-fawn" />
                </div>
                <h3 className="text-xl font-bold text-quicksand mb-2">Sales & Marketing</h3>
                <p className="text-gunsmoke">
                  Professional team dedicated to understanding your needs and providing solutions
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-mule-fawn/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-mule-fawn" />
                </div>
                <h3 className="text-xl font-bold text-quicksand mb-2">Production & Site Services</h3>
                <p className="text-gunsmoke">
                  High-quality production team and site service professionals ensuring perfect installation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
