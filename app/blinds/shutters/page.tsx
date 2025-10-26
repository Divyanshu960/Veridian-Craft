import ServicePageLayout from "@/components/service-page-layout"

export default function ShuttersPage() {
  return (
    <ServicePageLayout
      title="Shutters"
      category="Blinds"
      description="Enhance your windows with our premium shutter solutions. Offering excellent light control, privacy, and insulation, our shutters combine functionality with timeless elegance to complement any architectural style."
      features={[
        "Premium wood, vinyl, or composite materials",
        "Custom-fit for perfect window coverage",
        "Adjustable louvers for precise light control",
        "Excellent insulation properties",
        "Multiple color and finish options",
        "Durable construction for long-lasting beauty",
        "Easy operation and maintenance",
        "Professional installation with warranty",
      ]}
      backLink="/"
      backText="Back to Home"
      image={[
  "/images/shutter/shutter (1).jpg",
  "/images/shutter/shutter (2).jpg",
  "/images/shutter/shutter (4).jpg",
]}

    />
  )
}
