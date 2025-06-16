"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, CheckCircle, Facebook, Instagram, Linkedin, Youtube , MessageCircle,} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
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
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Contact Information */}
              <Card className="shadow-lg bg-merlin border-cape-cod">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-quicksand">Get In Touch</CardTitle>
                  <p className="text-gunsmoke">Reach out to us directly for immediate assistance</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-mule-fawn/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-mule-fawn" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-quicksand mb-1">Phone Numbers</h3>
                      <div className="space-y-1">
                        <p className="text-gunsmoke">
                          <a href="tel:+919369923536" className="hover:text-quicksand transition-colors">
                            93699 23536
                          </a>
                        </p>
                        <p className="text-gunsmoke">
                          <a href="tel:+918595552198" className="hover:text-quicksand transition-colors">
                            85955 52198
                          </a>
                        </p>
                        <p className="text-gunsmoke">
                          <a href="tel:+919211323080" className="hover:text-quicksand transition-colors">
                            9211323080
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-mule-fawn/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-mule-fawn" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-quicksand mb-1">Email</h3>
                      <p className="text-gunsmoke">
                        <a href="mailto:infoveridiancraft@gmail.com" className="hover:text-quicksand transition-colors">
                          infoveridiancraft@gmail.com
                        </a>
                      </p>
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
                      <div className="text-gunsmoke space-y-1">
                        <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: By Appointment</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-lg bg-merlin border-cape-cod">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-quicksand">Follow Us on Our Socials</CardTitle>
                  <p className="text-gunsmoke">Stay updated with our latest projects and innovations</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center py-4">
                    <p className="text-gunsmoke mb-6">
                      Connect with us on social media to see our latest projects, behind-the-scenes content, and
                      engineering innovations.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Facebook */}
                      <a
                        href="https://facebook.com/veridiancraft"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-outer-space rounded-lg border border-cape-cod hover:border-mule-fawn transition-colors group"
                      >
                        <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                          <Facebook className="h-5 w-5 text-blue-400" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-semibold text-quicksand group-hover:text-mule-fawn transition-colors">
                            Facebook
                          </h4>
                          <p className="text-xs text-gunsmoke">Latest updates</p>
                        </div>
                      </a>

                      {/* Instagram */}
                      <a
                        href="https://instagram.com/veridiancraft"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-outer-space rounded-lg border border-cape-cod hover:border-mule-fawn transition-colors group"
                      >
                        <div className="w-10 h-10 bg-pink-600/20 rounded-lg flex items-center justify-center">
                          <Instagram className="h-5 w-5 text-pink-400" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-semibold text-quicksand group-hover:text-mule-fawn transition-colors">
                            Instagram
                          </h4>
                          <p className="text-xs text-gunsmoke">Project photos</p>
                        </div>
                      </a>

                      {/* LinkedIn */}
                      <a
                        href="https://linkedin.com/company/veridiancraft"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-outer-space rounded-lg border border-cape-cod hover:border-mule-fawn transition-colors group"
                      >
                        <div className="w-10 h-10 bg-blue-700/20 rounded-lg flex items-center justify-center">
                          <Linkedin className="h-5 w-5 text-blue-300" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-semibold text-quicksand group-hover:text-mule-fawn transition-colors">
                            LinkedIn
                          </h4>
                          <p className="text-xs text-gunsmoke">Our network</p>
                        </div>
                      </a>

                      {/* YouTube */}
                      <a
                        href="https://youtube.com/@veridiancraft"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-outer-space rounded-lg border border-cape-cod hover:border-mule-fawn transition-colors group"
                      >
                        <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                          <Youtube className="h-5 w-5 text-red-400" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-semibold text-quicksand group-hover:text-mule-fawn transition-colors">
                            YouTube
                          </h4>
                          <p className="text-xs text-gunsmoke">Videos </p>
                        </div>
                      </a>
                    </div>

                    {/* WhatsApp Chat */}
                    <div className="mt-6">
                      <a
                        href="https://wa.me/919369923536?text=Hello%20Veridian%20Craft%20Tech!%20I'm%20interested%20in%20your%20retractable%20roofing%20solutions."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 p-4 bg-green-600/20 rounded-lg border border-green-600/30 hover:border-green-500 transition-colors group w-full"
                      >
                        <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                          <MessageCircle className="h-6 w-6 text-green-400" />
                        </div>
                        <div className="text-left flex-1">
                          <h4 className="font-semibold text-green-400 group-hover:text-green-300 transition-colors">
                            WhatsApp Chat
                          </h4>
                          <p className="text-sm text-gunsmoke">Get instant support and quick quotes</p>
                        </div>
                      </a>
                    </div>

                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Response Time Notice - Full Width */}
            <Card className="shadow-lg bg-mule-fawn/10 border-mule-fawn/20 mb-12">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <CheckCircle className="h-6 w-6 text-mule-fawn" />
                  <h3 className="text-xl font-semibold text-quicksand">Quick Response Guarantee</h3>
                </div>
                <p className="text-gunsmoke text-center">
                  We typically respond to all inquiries within 2-4 hours during business hours. For urgent projects,
                  please call us directly at any of the numbers above.
                </p>
              </CardContent>
            </Card>

            {/* Services Overview */}
            <Card className="shadow-lg bg-merlin border-cape-cod">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-quicksand text-center">Our Expertise</CardTitle>
                <p className="text-gunsmoke text-center">Specialized solutions for every need</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Soft Top Fabric Roof",
                      description: "Flexible retractable fabric solutions",
                    },
                    {
                      title: "Hard Top Roofs",
                      description: "Durable polycarbonate roofing systems",
                    },
                    {
                      title: "Retractable Pergola",
                      description: "Stylish adjustable shade structures",
                    },
                    {
                      title: "Tensile Structures",
                      description: "Custom architectural membrane designs",
                    },
                    {
                      title: "Sports Sheds",
                      description: "Robust metal roofing solutions",
                    },
                    {
                      title: "Skylight Systems",
                      description: "Natural lighting enhancement solutions",
                    },
                  ].map((service, index) => (
                    <div key={index} className="text-center p-4 bg-outer-space rounded-lg border border-cape-cod">
                      <h4 className="font-semibold text-quicksand mb-2">{service.title}</h4>
                      <p className="text-gunsmoke text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-merlin">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-quicksand">Ready to Get Started?</h2>
          <p className="text-xl text-gunsmoke mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a customized solution that meets your specific
            needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-mule-fawn" />
              <span className="text-gunsmoke font-medium">Call: 93699 23536</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-mule-fawn" />
              <span className="text-gunsmoke font-medium">Email: infoveridiancraft@gmail.com</span>
            </div>
          </div>

          <div className="bg-outer-space rounded-lg p-6 max-w-2xl mx-auto border border-cape-cod">
            <h3 className="text-lg font-semibold text-quicksand mb-3">What to Expect</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gunsmoke">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-mule-fawn flex-shrink-0" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-mule-fawn flex-shrink-0" />
                <span>Custom design proposal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-mule-fawn flex-shrink-0" />
                <span>Professional installation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
