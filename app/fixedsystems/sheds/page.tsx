import ServicePageLayout from "@/components/service-page-layout"

export default function ShedPage() {
  return (
    <ServicePageLayout
      title="Shed"
      category="Fixed System / Tensile Structures"
      description="Protect your equipment and create additional storage space with our durable shed solutions. Built with high-quality materials and engineered for longevity, our sheds provide reliable protection for residential, commercial, and industrial applications."
      features={[
        "Heavy-duty galvanized steel construction",
        "Weather-resistant coating and finishes",
        "Multiple size options to fit your needs",
        "Excellent ventilation and drainage systems",
        "Easy assembly with professional installation",
        "Customizable door and window configurations",
        "Fire-resistant materials available",
        "Long-term warranty coverage",
      ]}
      backLink="/"
      backText="Back to Home"
      image={[
        "/images/shed/shed (1).png",
        "/images/shed/shed (10).jpg",
        "/images/shed/shed (16).jpg",
        "/images/shed/shed (1).webp",
        "/images/shed/shed (2).jpg",
      ]}

    />
  )
}
