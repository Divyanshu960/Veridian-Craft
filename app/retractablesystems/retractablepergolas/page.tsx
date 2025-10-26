import ServicePageLayout from "@/components/service-page-layout"

export default function RetractablePergolaPage() {
  return (
    <ServicePageLayout
      title="Retractable Pergola"
      category="Retractable Systems"
      description="Create the perfect outdoor living space with our sophisticated retractable pergola systems. Combining architectural elegance with practical functionality, these pergolas offer adjustable shade and weather protection for patios, terraces, and outdoor dining areas."
      features={[
        "Elegant architectural design with clean lines",
        "Adjustable louvered roof for precise light control",
        "Motorized operation with remote control",
        "Integrated drainage system for rain protection",
        "Optional side screens for wind and privacy",
        "LED lighting integration for evening ambiance",
        "Powder-coated aluminum construction",
        "Smart home automation compatibility",
      ]}
      backLink="/"
      backText="Back to Home"
      image={[
        "/images/retractablepergola/retractablepergola (1).jpeg",
        "/images/retractablepergola/retractablepergola (1).png",
        "/images/retractablepergola/retractablepergola (1).jpg",
      ]}

    />
  )
}
