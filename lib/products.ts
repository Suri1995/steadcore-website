export interface Product {
  id: string;
  name: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  color: string;
  features: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  applications: string[];
  manufacturing: {
    title: string;
    description: string;
  }[];
  certifications: string[];
  advantages: string[];
  useCase: string;
}

export const products: Product[] = [
  {
    id: "single-sided-pcb",
    name: "Single-Sided PCB",
    title: "Single-Sided PCBs",
    description: "Advanced single-layer circuit boards engineered for straightforward electronic applications requiring cost-effective solutions with reliable performance.",
    shortDescription: "Cost-effective single-layer boards for standard electronic applications",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Single copper layer on one side",
      "Cost-effective manufacturing",
      "Perfect for simple circuits",
      "Quick turnaround time",
      "RoHS compliant",
      "High reliability"
    ],
    specifications: [
      { label: "Layer Count", value: "1" },
      { label: "Min Line Width", value: "0.1mm" },
      { label: "Min Trace Spacing", value: "0.1mm" },
      { label: "Min Via Size", value: "0.3mm" },
      { label: "Copper Thickness", value: "1oz - 3oz" },
      { label: "Board Thickness", value: "0.8mm - 3.2mm" },
      { label: "Surface Finish", value: "HASL, ENIG, OSP" },
      { label: "Max Size", value: "500mm x 600mm" }
    ],
    applications: [
      "Simple LED circuits",
      "Basic power supplies",
      "Audio amplifiers",
      "Battery chargers",
      "Temperature sensors",
      "Consumer electronics"
    ],
    manufacturing: [
      {
        title: "Design & Preparation",
        description: "Gerber files processed and validated for manufacturing specifications"
      },
      {
        title: "Copper Lamination",
        description: "Precision etching process creates circuit patterns on single copper layer"
      },
      {
        title: "Drilling & Plating",
        description: "Accurate drilling and through-hole plating for component mounting"
      },
      {
        title: "Surface Finish",
        description: "Final protective coating applied (HASL, ENIG, or OSP)"
      }
    ],
    certifications: ["RoHS Compliant", "ISO 9001:2015", "IPC-6012", "UL Certified"],
    advantages: [
      "Most economical option for simple circuits",
      "Fast production and delivery",
      "Ideal for prototyping and small batches",
      "Excellent for low-complexity applications",
      "Proven reliability for decades"
    ],
    useCase: "Perfect for hobbyists, students, and small projects with straightforward circuit designs"
  },
  {
    id: "double-sided-pcb",
    name: "Double-Sided PCB",
    title: "Double-Sided PCBs",
    description: "Professional-grade dual-layer circuit boards featuring copper traces on both sides, enabling complex designs with superior signal integrity and space optimization.",
    shortDescription: "Dual-layer boards for complex circuits with enhanced performance",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop",
    color: "from-green-500 to-emerald-500",
    features: [
      "Copper traces on both sides",
      "Via interconnections",
      "Higher circuit density",
      "Better signal integrity",
      "Through-hole mounting",
      "Enhanced thermal management"
    ],
    specifications: [
      { label: "Layer Count", value: "2" },
      { label: "Min Line Width", value: "0.075mm" },
      { label: "Min Trace Spacing", value: "0.075mm" },
      { label: "Min Via Size", value: "0.25mm" },
      { label: "Copper Thickness", value: "0.5oz - 3oz" },
      { label: "Board Thickness", value: "0.8mm - 3.2mm" },
      { label: "Surface Finish", value: "HASL, ENIG, OSP, IMMERSION" },
      { label: "Max Size", value: "600mm x 800mm" }
    ],
    applications: [
      "Industrial control systems",
      "Power management circuits",
      "Communication modules",
      "Consumer devices",
      "Automotive electronics",
      "Medical devices",
      "RF & microwave circuits"
    ],
    manufacturing: [
      {
        title: "Layer Stack-Up Design",
        description: "Optimized layout for signal integrity and power distribution"
      },
      {
        title: "Inner Layer Imaging",
        description: "Precision photolithography for both copper layers"
      },
      {
        title: "Layer Lamination",
        description: "Vacuum pressing bonds layers with dielectric material"
      },
      {
        title: "Via Drilling & Plating",
        description: "Through-hole vias created and electroplated for inter-layer connectivity"
      }
    ],
    certifications: ["RoHS Compliant", "ISO 9001:2015", "IPC-6012", "UL Certified", "IPC-A-600"],
    advantages: [
      "Support for complex circuit designs",
      "Improved noise immunity",
      "Better power distribution",
      "Higher component density",
      "Professional-grade reliability",
      "Suitable for volume production"
    ],
    useCase: "Ideal for commercial applications, consumer electronics, and industrial systems requiring advanced functionality"
  },
  {
    id: "metal-clad-pcb",
    name: "Metal-Clad PCB",
    title: "Metal-Clad PCBs",
    description: "High-performance thermal management boards with metal substrate core, engineered for applications requiring superior heat dissipation and durability.",
    shortDescription: "Thermal boards with metal substrate for heat-sensitive applications",
    image: "https://images.unsplash.com/photo-1620714223084-81342ee5ff30?w=500&h=500&fit=crop",
    color: "from-orange-500 to-red-500",
    features: [
      "Metal substrate core (Aluminum or Copper)",
      "Exceptional heat dissipation",
      "High mechanical strength",
      "Excellent dimensional stability",
      "Low thermal expansion",
      "Superior reliability at high temperatures"
    ],
    specifications: [
      { label: "Layer Count", value: "1-2 Conductive Layers" },
      { label: "Metal Substrate", value: "Aluminum 1.0mm - 3.0mm" },
      { label: "Dielectric Thickness", value: "0.1mm - 0.3mm" },
      { label: "Min Line Width", value: "0.1mm" },
      { label: "Thermal Conductivity", value: "1-3 W/mK" },
      { label: "Operating Temperature", value: "-40°C to +150°C" },
      { label: "Surface Finish", value: "HASL, ENIG, IMMERSION" },
      { label: "Max Size", value: "500mm x 600mm" }
    ],
    applications: [
      "LED lighting systems",
      "Power converters",
      "Motor drivers",
      "High-power amplifiers",
      "Audio amplifiers",
      "Automotive lighting",
      "Industrial heating",
      "Microwave components"
    ],
    manufacturing: [
      {
        title: "Substrate Preparation",
        description: "Metal substrate (Aluminum/Copper) cleaned and inspected"
      },
      {
        title: "Dielectric Application",
        description: "Thermal insulating layer applied with precise thickness control"
      },
      {
        title: "Copper Lamination",
        description: "Copper foil bonded to dielectric layer under pressure and heat"
      },
      {
        title: "Circuit Pattern",
        description: "Circuit etched and finished with protective coating"
      }
    ],
    certifications: ["RoHS Compliant", "ISO 9001:2015", "AEC-Q200 (Automotive)", "UL Certified"],
    advantages: [
      "Superior thermal dissipation (20x better than FR-4)",
      "Reduced need for heatsinks",
      "Extended component lifespan",
      "Improved reliability in high-temperature environments",
      "Cost-effective heat management solution",
      "Excellent for LED applications"
    ],
    useCase: "Essential for high-power applications, LED lighting systems, and any design requiring efficient thermal management"
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getAllProductIds(): string[] {
  return products.map(p => p.id);
}
