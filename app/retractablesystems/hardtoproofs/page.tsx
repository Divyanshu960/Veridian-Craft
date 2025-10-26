import ServicePageLayout from "@/components/service-page-layout"

export default function HardTopRoofPage() {
  return (
    <ServicePageLayout
      title="Hard Top Roof"
      category="Retractable Systems"
      description="Experience the perfect blend of durability and functionality with our hard top retractable roofing systems. Engineered with premium polycarbonate materials, these roofs provide excellent weather protection while maintaining transparency and natural light flow."
      features={[
        "Premium polycarbonate panels with UV protection",
        "Motorized retractable mechanism for easy operation",
        "Weather-resistant aluminum frame construction",
        "Excellent thermal insulation properties",
        "Low maintenance and long-lasting durability",
        "Custom sizing available for any space",
        "Remote control operation with smart home integration",
        "Professional installation with comprehensive warranty",
      ]}
      backLink="/"
      backText="Back to Home"
      image={[
        "/images/hardtoproof/hardtoproof (8).jpg",
        "/images/hardtoproof/hardtoproof (9).jpg",
        "/images/hardtoproof/hardtoproof (10).jpg",
      ]}
    />
  )
}
