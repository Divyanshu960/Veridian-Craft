import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-woodsmoke text-gunsmoke border-t border-gunsmoke">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4 text-quicksand">
              VERIDIAN
              <span className="text-mule-fawn"> CRAFT TECH</span>
            </div>
            <p className="text-quicksand mb-4 max-w-md">INNOVATE • ENGINEER • ACHIEVE</p>
            <p className="text-merlin text-md leading-relaxed">
              We are a dedicated team committed to delivering top-notch retractable solutions. With expertise in
              engineering, sales, and high-quality production services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-mule-fawn">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-merlin hover:text-quicksand transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-merlin hover:text-quicksand transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-merlin hover:text-quicksand transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-merlin hover:text-quicksand transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-mule-fawn">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-mule-fawn flex-shrink-0" />
                <div className="text-sm text-merlin">
                  <div>93699 23536</div>
                  <div>85955 52198</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-mule-fawn flex-shrink-0" />
                <span className="text-sm text-merlin">infoveridiancraft@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-mule-fawn flex-shrink-0 mt-0.5" />
                <span className="text-sm text-merlin">
                  Shop No-1, Dwarkapuri, Haibat Mau Mawaiya, Rai Bareli Road, Lucknow, UP - 226002
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cape-cod mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-merlin text-sm">
            © {new Date().getFullYear()} Veridian Craft Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a
              href="https://www.veridiancraft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-merlin hover:text-quicksand text-sm transition-colors"
            >
              www.veridiancraft.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
