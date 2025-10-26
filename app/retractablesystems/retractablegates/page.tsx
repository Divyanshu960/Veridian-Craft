import ServicePageLayout from "@/components/service-page-layout"

export default function RetractableGatesPage() {
  return (
    <ServicePageLayout
      title="Retractable Gates"
      category="Retractable Systems"
      description="Secure your property with our advanced retractable gate systems. Designed for both residential and commercial applications, these gates provide security and access control while maintaining aesthetic appeal and space efficiency."
      features={[
        "Heavy-duty steel construction for maximum security",
        "Smooth sliding or folding mechanisms",
        "Automated operation with access control systems",
        "Weather-resistant powder coating finish",
        "Customizable height and width options",
        "Integration with security cameras and alarms",
        "Emergency manual override capability",
        "Professional installation and maintenance support",
      ]}
      backLink="/"
      backText="Back to Home"
      image={[
  "/images/door/door (3).png",
  "/images/door/door (1).jpg",
  "/images/door/door (1).png",
]}

    />
  )
}
