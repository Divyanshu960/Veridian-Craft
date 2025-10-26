import ServicePageLayout from "@/components/service-page-layout"

export default function FixedPergolaPage() {
  return (
    <ServicePageLayout
      title="Fixed Pergola"
      category="Fixed System / Tensile Structures"
      description="Create a permanent outdoor living space with our elegant fixed pergola structures. Combining timeless design with modern materials, these pergolas provide lasting beauty and functionality for gardens, patios, and outdoor entertainment areas."
      features={[
        "Durable aluminum or steel construction",
        "Powder-coated finish for weather resistance",
        "Classic and contemporary design options",
        "Optional integrated lighting systems",
        "Climbing plant support structures",
        "Custom sizing for any outdoor space",
        "Low maintenance requirements",
        "Professional design and installation services",
      ]}
      backLink="/"
      backText="Back to Home"
      image={[
        "/images/fixedpergola/fixedpergola (5).jpg",
        "/images/fixedpergola/fixedpergola (2).jpg",
        "/images/fixedpergola/fixedpergola (3).jpg",
      ]}

    />
  )
}
