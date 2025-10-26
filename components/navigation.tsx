"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

interface SubItem {
  name: string
  href: string
}

interface NavSection {
  name: string
  items: SubItem[]
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileActiveSection, setMobileActiveSection] = useState<string | null>(null)
  const pathname = usePathname()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

   const navSections: NavSection[] = [
    {
      name: "Retractable Systems",
      items: [
        { name: "Hard Top Roof", href: "/retractablesystems/hardtoproofs" },
        { name: "Soft Top Fabric Roof", href: "/retractablesystems/softtopfabricroofs" },
        { name: "Retractable Pergola", href: "/retractablesystems/retractablepergolas" },
        { name: "Retractable Sitting System", href: "/retractablesystems/retractablesittingsystems" },
        { name: "Retractable Gates", href: "/retractablesystems/retractablegates" },
      ],
    },
    {
      name: "Fixed Systems",
      items: [
        { name: "Shed", href: "/fixedsystems/sheds" },
        { name: "Bleachers", href: "/fixedsystems/bleachers" },
        { name: "Skylights", href: "/fixedsystems/skylights" },
        { name: "Fixed Pergola", href: "/fixedsystems/fixedpergolas" },
        { name: "Tensile Stuctures", href: "/fixedsystems/tensilestructures" },
      ],
    },
    {
      name: "Blinds",
      items: [
        { name: "Zip Screen", href: "/blinds/zipscreens" },
        { name: "Shutters", href: "/blinds/shutters" },
      ],
    },
  ]

  const otherPages = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  const handleMouseEnter = (sectionName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(sectionName)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  const toggleMobileSection = (sectionName: string) => {
    setMobileActiveSection(mobileActiveSection === sectionName ? null : sectionName)
  }

  const closeMobileMenu = () => {
    setIsMenuOpen(false)
    setMobileActiveSection(null)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <header className="bg-merlin shadow-lg border-b border-cape-cod sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
            <Image
              src="/images/veridian-craft-logo.png"
              alt="Veridian Craft Tech"
              width={120}
              height={144}
              className="w-10 h-auto"
            />
            <div className="company-name text-xl font-bold text-quicksand">
              VERIDIAN
              <span className="text-mule-fawn"> CRAFT</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Home Link */}
            <Link
              href="/"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-abbey ${
                pathname === "/" ? "text-quicksand" : "text-medium-contrast "
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter("Services")} onMouseLeave={handleMouseLeave}>
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-abbey ${
                  pathname.startsWith("/services") ? "text-quicksand" : "text-medium-contrast"
                }`}
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Services Mega Dropdown */}
              {activeDropdown === "Services" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-screen max-w-5xl bg-merlin border border-cape-cod rounded-lg shadow-lg py-6 z-50">
                  <div className="px-6">
                    {/* 3 equal-width columns; consistent spacing and heights */}
                    <div className="grid grid-cols-3 gap-8 md:gap-10">
                      {navSections.map((section) => (
                        <div key={section.name} className="flex flex-col" /* equal visual height */>
                          {/* Category Header */}
                          <div className="mb-3 pb-2 border-b border-cape-cod/40">
                            <h3 className="text-base font-bold text-quicksand leading-tight">{section.name}</h3>
                          </div>

                          {/* Category Items */}
                          <div className="flex-1 space-y-2">
                            {section.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-3 py-2 text-sm leading-6 text-medium-contrast rounded-md hover:text-quicksand hover:bg-abbey transition-colors group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="flex items-center justify-between">
                                  <span>{item.name}</span>
                                  <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Pages */}
            {otherPages
              .filter((p) => p.name !== "Home")
              .map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-abbey ${
                    pathname === page.href ? "text-quicksand" : "text-medium-contrast "
                  }`}
                >
                  {page.name}
                </Link>
              ))}
          </nav>

          {/* Desktop CTA (kept outside dropdown) */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild className="bg-mule-fawn hover:bg-soya-bean text-white font-semibold">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-medium-contrast"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-cape-cod bg-merlin">
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
              {/* Home Link */}
              <Link
                href="/"
                className={`block px-3 py-2 text-base font-medium transition-colors rounded-md hover:bg-abbey ${
                  pathname === "/" ? "text-quicksand" : "text-medium-contrast hover:text-quicksand"
                }`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>

              {/* Services Link */}
              {/* <Link
                href="/services"
                className={`block px-3 py-2 text-base font-medium transition-colors rounded-md hover:bg-abbey ${
                  pathname === "/services" ? "text-quicksand" : "text-medium-contrast hover:text-quicksand"
                }`}
                onClick={closeMobileMenu}
              >
                Services
              </Link> */}

              {/* Mobile Sections as accordion */}
              {navSections.map((section) => (
                <div key={section.name}>
                  <button
                    onClick={() => toggleMobileSection(section.name)}
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-medium-contrast hover:text-quicksand transition-colors rounded-md hover:bg-abbey"
                  >
                    {section.name}
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${
                        mobileActiveSection === section.name ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {mobileActiveSection === section.name && (
                    <div className="ml-4 mt-1 space-y-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-3 py-2 text-sm text-medium-contrast hover:text-quicksand transition-colors rounded-md hover:bg-abbey"
                          onClick={closeMobileMenu}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Other Pages */}
              <div className="border-t border-cape-cod pt-2 mt-2">
                {otherPages
                  .filter((p) => p.name !== "Home")
                  .map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className={`block px-3 py-2 text-base font-medium transition-colors rounded-md hover:bg-abbey ${
                        pathname === page.href ? "text-quicksand" : "text-medium-contrast hover:text-quicksand"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {page.name}
                    </Link>
                  ))}
              </div>

              {/* Mobile CTA (outside dropdown paradigm) */}
              <div className="px-3 py-2 border-t border-cape-cod mt-2 pt-2">
                <Button asChild className="w-full bg-mule-fawn hover:bg-soya-bean text-white font-semibold">
                  <Link href="/contact" onClick={closeMobileMenu}>
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
