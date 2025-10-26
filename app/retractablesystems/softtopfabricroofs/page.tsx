import ServicePageLayout from "@/components/service-page-layout"

export default function SoftTopFabricRoofPage() {
  return (
    <ServicePageLayout
      title="Soft Top Fabric Roof"
      category="Retractable Systems"
      description="Transform your outdoor space with our elegant soft top fabric roofing systems. Featuring high-quality weather-resistant fabrics, these retractable roofs offer flexible shade solutions that adapt to your needs and weather conditions."
      features={[
        "Premium weather-resistant fabric materials",
        "Smooth retractable operation with motorized controls",
        "UV-resistant and waterproof fabric options",
        "Lightweight yet durable aluminum frame",
        "Multiple fabric colors and patterns available",
        "Wind sensor integration for automatic retraction",
        "Easy maintenance and fabric replacement",
        "Energy-efficient design reduces cooling costs",
      ]}
      backLink="/"
      backText="Back to Home"
      image={
        [
        "/images/softtoproof/softtoproof (1).jpg",
        "/images/softtoproof/softtoproof (2).jpg",
        "/images/softtoproof/softtoproof (3).jpg",
      ]
    }
    />
  )
}
