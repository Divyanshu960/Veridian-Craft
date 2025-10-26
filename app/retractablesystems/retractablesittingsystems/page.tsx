import ServicePageLayout from "@/components/service-page-layout"

export default function RetractableSittingSystemPage() {
  return (
    <ServicePageLayout
      title="Retractable Sitting System"
      category="Retractable Systems"
      description="Maximize your space efficiency with our innovative retractable seating solutions. Perfect for stadiums, auditoriums, and multi-purpose venues, these systems provide flexible seating arrangements that can be easily stored when not in use."
      features={[
        "Space-saving retractable design",
        "Comfortable ergonomic seating",
        "Durable steel frame construction",
        "Smooth hydraulic or electric operation",
        "Custom capacity configurations available",
        "Safety features and emergency stops",
        "Low noise operation for quiet deployment",
        "Minimal maintenance requirements",
      ]}
      backLink="/"
      backText="Back to Home"
      image={[
  "/images/sitting/sitting (1).jpg",
  "/images/sitting/sitting (1).jpeg",
  "/images/sitting/sitting (2).jpeg",
]}

    />
  )
}
