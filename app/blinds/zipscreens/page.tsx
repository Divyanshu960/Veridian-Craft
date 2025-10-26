import ServicePageLayout from "@/components/service-page-layout"

export default function ZipScreenPage() {
  return (
    <ServicePageLayout
      title="Zip Screen"
      category="Blinds"
      description="Control light, privacy, and weather with our innovative zip screen systems. Featuring a unique guided track system, these screens provide superior wind resistance and smooth operation for both indoor and outdoor applications."
      features={[
        "Patented zip-guided track system",
        "Superior wind resistance up to 75 mph",
        "Smooth and quiet motorized operation",
        "UV-resistant and weather-proof fabrics",
        "Multiple opacity levels from sheer to blackout",
        "Integrated insect protection",
        "Smart home automation compatibility",
        "Professional measurement and installation",
      ]}
      backLink="/"
      backText="Back to Home"
     image={[
  "/images/zipscreen/zipscreen (4).jpeg",
  "/images/zipscreen/zipscreen (2).webp",
  "/images/zipscreen/zipscreen (3).jpeg",
]}

    />
  )
}
