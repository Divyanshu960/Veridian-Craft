import ServicePageLayout from "@/components/service-page-layout"

export default function BleachersPage() {
  return (
    <ServicePageLayout
      title="Bleachers"
      category="Fixed System / Tensile Structures"
      description="Provide comfortable and safe seating for sporting events and gatherings with our professional bleacher systems. Engineered for durability and safety, our bleachers meet all industry standards while offering excellent sightlines and comfort."
      features={[
        "Aluminum or steel frame construction",
        "Compliant with safety codes and regulations",
        "Multiple seating capacity options",
        "Excellent sightlines from all positions",
        "Weather-resistant materials and finishes",
        "Optional accessories like handrails and aisles",
        "Professional engineering and installation",
        "Customizable configurations for any venue",
      ]}
      backLink="/"
      backText="Back to Home"
      image={[
  "/images/bleacher/bleachers (1).jpg",
  "/images/bleacher/bleachers (2).jpg",
  "/images/bleacher/bleachers (3).jpg",
]}

    />
  )
}
