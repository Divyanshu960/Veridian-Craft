import ServicePageLayout from "@/components/service-page-layout"

export default function TensileStructurePage() {
  return (
    <ServicePageLayout
      title="Tensile Structures"
      category="Architectural Solutions"
      description="Add a touch of architectural elegance with our custom-designed tensile membrane structures. These fabric-based solutions offer excellent weather resistance, long life, and eye-catching aesthetics for large spaces like event venues, sports arenas, and courtyards."
      features={[
        "Custom-designed membrane architecture",
        "High-strength, weather-resistant fabric materials",
        "Lightweight yet durable structural design",
        "Suitable for large-span coverage and open spaces",
        "UV protection and minimal maintenance",
        "Versatile designs for commercial and public spaces",
        "Engineered for long-lasting performance",
        "Elegant and modern aesthetic appeal",
      ]}
      backLink="/"
      backText="Back to Home"
      image={[
        "/images/tensilestructure/6.jpg",
        "/images/tensilestructure/2.jpg",
        "/images/tensilestructure/3.jpg",
        "/images/tensilestructure/4.jpg",
        "/images/tensilestructure/5.jpg",
      ]}
    />
  )
}
