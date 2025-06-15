"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Calculator, Download, Send } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

interface EstimationData {
  serviceType: string
  dimensions: {
    length: number
    width: number
  }
  material: string
  features: string[]
  installation: boolean
  location: string
  urgency: string
}

interface PricingStructure {
  [key: string]: {
    basePrice: number
    pricePerSqFt: number
    materials: {
      [key: string]: number
    }
    features: {
      [key: string]: number
    }
  }
}

export default function CalculatorPage() {
  const [estimationData, setEstimationData] = useState<EstimationData>({
    serviceType: "",
    dimensions: { length: 10, width: 10 },
    material: "",
    features: [],
    installation: true,
    location: "",
    urgency: "standard",
  })

  const [estimatedCost, setEstimatedCost] = useState<number>(0)
  const [showResults, setShowResults] = useState(false)

  const pricingStructure: PricingStructure = {
    "soft-top-fabric": {
      basePrice: 15000,
      pricePerSqFt: 150,
      materials: {
        "standard-fabric": 1.0,
        "premium-fabric": 1.3,
        "waterproof-fabric": 1.2,
      },
      features: {
        "motorized-operation": 8000,
        "remote-control": 3000,
        "wind-sensor": 5000,
        "led-lighting": 4000,
      },
    },
    "hard-top-roofs": {
      basePrice: 25000,
      pricePerSqFt: 200,
      materials: {
        "standard-polycarbonate": 1.0,
        "premium-polycarbonate": 1.4,
        "tempered-glass": 1.8,
      },
      features: {
        "drainage-system": 6000,
        "thermal-insulation": 8000,
        "uv-coating": 4000,
        ventilation: 5000,
      },
    },
    "retractable-pergola": {
      basePrice: 35000,
      pricePerSqFt: 250,
      materials: {
        "aluminum-frame": 1.0,
        "steel-frame": 1.2,
        "wood-composite": 1.5,
      },
      features: {
        "motorized-canopy": 12000,
        "side-screens": 8000,
        "heating-elements": 15000,
        "sound-system": 10000,
      },
    },
    "tensile-structures": {
      basePrice: 40000,
      pricePerSqFt: 180,
      materials: {
        "pvc-membrane": 1.0,
        "ptfe-membrane": 1.6,
        "etfe-membrane": 2.0,
      },
      features: {
        "custom-design": 20000,
        "architectural-lighting": 12000,
        "climate-control": 25000,
        "acoustic-treatment": 15000,
      },
    },
    "sports-sheds": {
      basePrice: 20000,
      pricePerSqFt: 120,
      materials: {
        "galvanized-steel": 1.0,
        "aluminum-composite": 1.3,
        "insulated-panels": 1.5,
      },
      features: {
        "ventilation-system": 8000,
        insulation: 10000,
        "electrical-setup": 12000,
        "security-features": 6000,
      },
    },
    skylight: {
      basePrice: 8000,
      pricePerSqFt: 300,
      materials: {
        "standard-glass": 1.0,
        "laminated-glass": 1.4,
        "smart-glass": 2.5,
      },
      features: {
        "motorized-opening": 8000,
        "rain-sensor": 4000,
        "thermal-break": 6000,
        "blinds-integration": 5000,
      },
    },
    "retractable-sitting": {
      basePrice: 12000,
      pricePerSqFt: 400,
      materials: {
        "standard-seating": 1.0,
        "premium-upholstery": 1.5,
        "weather-resistant": 1.3,
      },
      features: {
        "motorized-system": 15000,
        "custom-cushions": 5000,
        "storage-compartment": 8000,
        "heating-system": 12000,
      },
    },
  }

  const serviceOptions = [
    { value: "soft-top-fabric", label: "Soft Top Fabric Roof" },
    { value: "hard-top-roofs", label: "Hard Top Roofs" },
    { value: "retractable-pergola", label: "Retractable Pergola" },
    { value: "tensile-structures", label: "Tensile Structures" },
    { value: "sports-sheds", label: "Sports Sheds" },
    { value: "skylight", label: "Skylight" },
    { value: "retractable-sitting", label: "Retractable Sitting System" },
  ]

  const locationMultipliers = {
    local: 1.0,
    state: 1.1,
    national: 1.2,
  }

  const urgencyMultipliers = {
    standard: 1.0,
    urgent: 1.2,
    emergency: 1.5,
  }

  const calculateEstimate = () => {
    if (!estimationData.serviceType || !estimationData.material) return

    const service = pricingStructure[estimationData.serviceType]
    const area = estimationData.dimensions.length * estimationData.dimensions.width

    // Base calculation
    let totalCost = service.basePrice + area * service.pricePerSqFt

    // Material multiplier
    const materialMultiplier = service.materials[estimationData.material] || 1.0
    totalCost *= materialMultiplier

    // Add features
    estimationData.features.forEach((feature) => {
      totalCost += service.features[feature] || 0
    })

    // Installation cost (20% of base cost)
    if (estimationData.installation) {
      totalCost *= 1.2
    }

    // Location multiplier
    const locationMultiplier = locationMultipliers[estimationData.location as keyof typeof locationMultipliers] || 1.0
    totalCost *= locationMultiplier

    // Urgency multiplier
    const urgencyMultiplier = urgencyMultipliers[estimationData.urgency as keyof typeof urgencyMultipliers] || 1.0
    totalCost *= urgencyMultiplier

    setEstimatedCost(Math.round(totalCost))
    setShowResults(true)
  }

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setEstimationData((prev) => ({
      ...prev,
      features: checked ? [...prev.features, feature] : prev.features.filter((f) => f !== feature),
    }))
  }

  const handleDimensionChange = (dimension: "length" | "width", value: number[]) => {
    setEstimationData((prev) => ({
      ...prev,
      dimensions: {
        ...prev.dimensions,
        [dimension]: value[0],
      },
    }))
  }

  useEffect(() => {
    if (estimationData.serviceType && estimationData.material) {
      calculateEstimate()
    }
  }, [estimationData])

  const getAvailableFeatures = () => {
    if (!estimationData.serviceType) return []
    return Object.keys(pricingStructure[estimationData.serviceType].features)
  }

  const getAvailableMaterials = () => {
    if (!estimationData.serviceType) return []
    return Object.keys(pricingStructure[estimationData.serviceType].materials)
  }

  const formatFeatureName = (feature: string) => {
    return feature
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calculator className="h-12 w-12 text-emerald-400" />
              <h1 className="text-4xl lg:text-5xl font-bold">Cost Calculator</h1>
            </div>
            <p className="text-xl text-slate-300 leading-relaxed">
              Get an instant estimate for your retractable roofing and seating solutions. Our calculator provides
              preliminary pricing based on your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Service Type */}
                  <div className="space-y-3">
                    <Label className="text-lg font-semibold">Service Type *</Label>
                    <Select
                      value={estimationData.serviceType}
                      onValueChange={(value) =>
                        setEstimationData((prev) => ({
                          ...prev,
                          serviceType: value,
                          material: "",
                          features: [],
                        }))
                      }
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Dimensions */}
                  {estimationData.serviceType && (
                    <div className="space-y-6">
                      <Label className="text-lg font-semibold">Dimensions (in feet)</Label>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <Label>Length</Label>
                            <span className="text-sm text-slate-600">{estimationData.dimensions.length} ft</span>
                          </div>
                          <Slider
                            value={[estimationData.dimensions.length]}
                            onValueChange={(value) => handleDimensionChange("length", value)}
                            max={50}
                            min={5}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <Label>Width</Label>
                            <span className="text-sm text-slate-600">{estimationData.dimensions.width} ft</span>
                          </div>
                          <Slider
                            value={[estimationData.dimensions.width]}
                            onValueChange={(value) => handleDimensionChange("width", value)}
                            max={50}
                            min={5}
                            step={1}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="text-sm text-slate-600">
                          <strong>Total Area:</strong>{" "}
                          {estimationData.dimensions.length * estimationData.dimensions.width} sq ft
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Material Selection */}
                  {estimationData.serviceType && (
                    <div className="space-y-3">
                      <Label className="text-lg font-semibold">Material Type *</Label>
                      <Select
                        value={estimationData.material}
                        onValueChange={(value) => setEstimationData((prev) => ({ ...prev, material: value }))}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select material" />
                        </SelectTrigger>
                        <SelectContent>
                          {getAvailableMaterials().map((material) => (
                            <SelectItem key={material} value={material}>
                              {formatFeatureName(material)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Additional Features */}
                  {estimationData.serviceType && (
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Additional Features</Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {getAvailableFeatures().map((feature) => (
                          <div key={feature} className="flex items-center space-x-3">
                            <Checkbox
                              id={feature}
                              checked={estimationData.features.includes(feature)}
                              onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                            />
                            <Label htmlFor={feature} className="text-sm cursor-pointer">
                              {formatFeatureName(feature)}
                              <span className="text-slate-500 ml-2">
                                (+₹{pricingStructure[estimationData.serviceType].features[feature].toLocaleString()})
                              </span>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Installation */}
                  <div className="space-y-3">
                    <Label className="text-lg font-semibold">Installation Service</Label>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="installation"
                        checked={estimationData.installation}
                        onCheckedChange={(checked) =>
                          setEstimationData((prev) => ({
                            ...prev,
                            installation: checked as boolean,
                          }))
                        }
                      />
                      <Label htmlFor="installation" className="cursor-pointer">
                        Include professional installation (+20% of base cost)
                      </Label>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-3">
                    <Label className="text-lg font-semibold">Project Location</Label>
                    <Select
                      value={estimationData.location}
                      onValueChange={(value) => setEstimationData((prev) => ({ ...prev, location: value }))}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="local">Local (Lucknow & nearby areas)</SelectItem>
                        <SelectItem value="state">Within Uttar Pradesh (+10%)</SelectItem>
                        <SelectItem value="national">Other states (+20%)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Urgency */}
                  <div className="space-y-3">
                    <Label className="text-lg font-semibold">Project Timeline</Label>
                    <Select
                      value={estimationData.urgency}
                      onValueChange={(value) => setEstimationData((prev) => ({ ...prev, urgency: value }))}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard (4-6 weeks)</SelectItem>
                        <SelectItem value="urgent">Urgent (2-3 weeks) (+20%)</SelectItem>
                        <SelectItem value="emergency">Emergency (1 week) (+50%)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-slate-900">Cost Estimate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {showResults ? (
                      <div className="space-y-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-emerald-600 mb-2">
                            ₹{estimatedCost.toLocaleString()}
                          </div>
                          <p className="text-sm text-slate-600">Estimated Total Cost</p>
                        </div>

                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span>Service:</span>
                            <span className="font-medium">
                              {serviceOptions.find((s) => s.value === estimationData.serviceType)?.label}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Area:</span>
                            <span className="font-medium">
                              {estimationData.dimensions.length * estimationData.dimensions.width} sq ft
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Material:</span>
                            <span className="font-medium">{formatFeatureName(estimationData.material)}</span>
                          </div>
                          {estimationData.features.length > 0 && (
                            <div className="flex justify-between">
                              <span>Features:</span>
                              <span className="font-medium">{estimationData.features.length} selected</span>
                            </div>
                          )}
                        </div>

                        <div className="border-t pt-4 space-y-3">
                          <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                            <Link href="/contact">
                              <Send className="mr-2 h-4 w-4" />
                              Request Detailed Quote
                            </Link>
                          </Button>

                          <Button variant="outline" className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download Estimate
                          </Button>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                          <p className="text-xs text-amber-800">
                            <strong>Note:</strong> This is a preliminary estimate. Final pricing may vary based on site
                            conditions, specific requirements, and current material costs. Contact us for a detailed
                            quote.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Calculator className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                        <p className="text-slate-500">Select service type and material to see your estimate</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Quick Tips */}
                <Card className="shadow-lg mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-900">💡 Quick Tips</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-slate-600">
                    <p>• Larger areas typically have better per-sq-ft pricing</p>
                    <p>• Premium materials offer better durability</p>
                    <p>• Motorized features add convenience but increase cost</p>
                    <p>• Professional installation ensures warranty coverage</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
