import ServicePageLayout from "@/components/service-page-layout"

export default function SkylightsPage() {
  return (
    <ServicePageLayout
      title="Skylights"
      category="Fixed System / Tensile Structures"
      description="Bring natural light into your space with our premium skylight solutions. Designed for energy efficiency and weather protection, our skylights enhance the ambiance of any interior while reducing electricity costs and improving well-being."
      features={[
        "High-performance glazing for energy efficiency",
        "Excellent weather sealing and insulation",
        "UV protection to prevent interior fading",
        "Multiple opening options including fixed and venting",
        "Impact-resistant materials for safety",
        "Professional flashing and installation",
        "Low-maintenance design with easy cleaning",
        "Available in various shapes and sizes",
      ]}
      backLink="/"
      backText="Back to Home"
      image={[
  "/images/skylightsystem/skylight (3).jpg",
  "/images/skylightsystem/skylight (5).jpg",
  "/images/skylightsystem/skylight (4).jpg",
]}

    />
  )
}
