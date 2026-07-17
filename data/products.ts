import type { Product } from "@/types/product";
export const productCategories = [
  "All Products",
  "Welding Machines",
  "Robotic Automation",
  "Laser Solutions",
  "Plasma Cutting",
  "Accessories",
];

export const products: Product[] = [
  {
  id: 1,

  slug: "metl-m19-mig-mag-mma-400",

  category: "Welding Machines",

  name: "METL M19 MIG/MAG/MMA 400",

  shortDescription:
    "Industrial multiprocess welding machine.",

  description:
    "Heavy-duty industrial multiprocess welding system engineered for fabrication workshops and manufacturing plants.",

  badge: "Best Seller",

  thumbnail: "/images/products/mig/mig1.png",

  gallery: [
    "/images/products/mig/mig1.png",
    "/images/products/mig/mig2.png",
    "/images/products/mig/mig3.png",
    "/images/products/mig/mig4.png",
  ],

  brochure: "/brochures/mig.pdf",

  features: [
    "IGBT Inverter Technology",
    "Digital Display",
    "Arc Force Control",
    "Low Spatter Output",
    "Heavy Duty Cycle",
    "Energy Efficient",
  ],

  specifications: {
    power: "15 kVA",
    voltage: "415V",
    current: "40–400A",
    dutyCycle: "60%",
    dimensions: "620 × 320 × 520 mm",
    weight: "38 kg",
    warranty: "2 Years",
  },

  featured: true,
},
  {
  id: 2,

  slug: "nikoarc-tig-mma-250",

  category: "Welding Machines",

  name: "NIKOARC TIG/MMA 250",

  shortDescription:
    "Professional TIG and MMA inverter welding machine.",

  description:
    "The NIKOARC TIG/MMA 250 is a powerful and versatile inverter welding machine designed for professional welders, fabrication workshops, maintenance applications, and industrial use. Supporting both TIG and MMA welding processes, it delivers smooth arc performance, precise control, and reliable welding results.",

  badge: "Premium",

  thumbnail: "/images/products/tig/tig1.png",

  gallery: [
    "/images/products/tig/tig1.png",
    "/images/products/tig/tig2.png",
    "/images/products/tig/tig3.png",
    "/images/products/tig/tig4.png",
  ],

  brochure: "/brochures/tig250.pdf",

  features: [
    "TIG + MMA Welding",
    "Digital Display",
    "Hot Start",
    "Arc Force",
    "IGBT Inverter",
    "Portable Design",
  ],

  specifications: {
    power: "8 kVA",
    voltage: "230V",
    current: "20–250A",
    dutyCycle: "60%",
    dimensions: "510 × 220 × 390 mm",
    weight: "12 kg",
    warranty: "2 Years",
  },

  featured: true,
},
  {
  id: 3,

  slug: "otc-robotic-welding-cell",

  category: "Robotic Automation",

  name: "OTC Robotic Welding Cell",

  shortDescription:
    "Industrial robotic welding automation solution.",

  description:
    "The OTC Robotic Welding Cell is designed for high-speed automated welding in automotive, heavy engineering, and manufacturing industries. It delivers exceptional precision, repeatability, and productivity while reducing production costs.",

  badge: "Automation",

  thumbnail: "/images/products/robotic/otcrobot1.png",

  gallery: [
    "/images/products/robotic/otcrobot1.png",
    "/images/products/robotic/otcrobot2.png",
    "/images/products/robotic/otcrobot3.png",
    "/images/products/robotic/otcrobot4.png",
  ],

  brochure: "/brochures/robotic.pdf",

  features: [
    "6-Axis Robot",
    "High Precision",
    "Automatic Torch Cleaning",
    "Offline Programming",
    "PLC Integration",
    "24x7 Operation",
  ],

  specifications: {
    power: "Industrial Supply",
    voltage: "415V",
    current: "Robot Controlled",
    dutyCycle: "Continuous",
    dimensions: "Custom Layout",
    weight: "Custom",
    warranty: "2 Years",
  },

  featured: true,
},
  {
  id: 4,

  slug: "nikoarc-w315",

  category: "Welding Machines",

  name: "NIKOARC W 315 Welding Machine",

  shortDescription:
    "Heavy-duty MMA inverter welding machine.",

  description:
    "NIKO ARC MMA/ARC 315 W is a powerful inverter-based welding machine engineered for fabrication, construction, maintenance, and industrial welding applications. Built with advanced IGBT technology for reliable performance.",

  badge: "Industrial",

  thumbnail: "/images/products/mig/mig1.png",

  gallery: [
    "/images/products/mig/mig1.png",
  ],

  brochure: "/brochures/arc315.pdf",

  features: [
    "IGBT Inverter",
    "Digital Display",
    "Arc Force",
    "Hot Start",
    "Portable",
    "Low Power Consumption",
  ],

  specifications: {
    power: "12 kVA",
    voltage: "415V",
    current: "40–315A",
    dutyCycle: "60%",
    dimensions: "600 × 300 × 500 mm",
    weight: "30 kg",
    warranty: "2 Years",
  },

  featured: false,
},
  {
  id: 5,

  slug: "hallmark-laser-welding",

  category: "Laser Solutions",

  name: "Hallmark Laser Welding Machine",

  shortDescription:
    "High-precision fiber laser welding solution.",

  description:
    "The Hallmark Laser Welding Machine is designed for precision welding applications with minimal heat distortion. It provides clean, accurate welds suitable for industrial manufacturing and fabrication.",

  badge: "New",

  thumbnail: "/images/products/laser/laserwelding.png",

  gallery: [
    "/images/products/laser/laserwelding1.png",
    "/images/products/laser/laserwelding2.png",
    "/images/products/laser/laserwelding3.png",
    "/images/products/laser/laserwelding4.png",
  ],

  brochure: "/brochures/laser.pdf",

  features: [
    "Fiber Laser",
    "High Precision",
    "Fast Welding",
    "Low Heat Input",
    "Touch Display",
    "Water Cooling",
  ],

  specifications: {
    power: "1500W",
    voltage: "220V",
    current: "Laser Controlled",
    dutyCycle: "100%",
    dimensions: "980 × 520 × 850 mm",
    weight: "180 kg",
    warranty: "2 Years",
  },

  featured: true,
},
  {
  id: 6,

  slug: "nikoarc-p6-acdc-630",

  category: "Welding Machines",

  name: "NIKO ARC P6 AC/DC 630",

  shortDescription:
    "Industrial AC/DC TIG welding machine.",

  description:
    "The NIKO ARC P6 AC/DC 630 is a heavy-duty industrial welding machine supporting AC/DC TIG and MMA welding. It is ideal for aluminium, stainless steel, mild steel, and titanium fabrication.",

  badge: "Industrial",

  thumbnail: "/images/products/acdc/acdc.png",

  gallery: [
    "/images/products/acdc/acdc1.png",
    "/images/products/acdc/acdc2.png",
    "/images/products/acdc/acdc3.png",
    "/images/products/acdc/acdc4.png",
  ],

  brochure: "/brochures/acdc630.pdf",

  features: [
    "AC/DC TIG",
    "Pulse TIG",
    "MMA Welding",
    "Digital Display",
    "Water Cooling",
    "IGBT Technology",
  ],

  specifications: {
    power: "22 kVA",
    voltage: "415V",
    current: "20–630A",
    dutyCycle: "100%",
    dimensions: "820 × 420 × 720 mm",
    weight: "85 kg",
    warranty: "2 Years",
  },

  featured: false,
},
  {
  id: 7,

  slug: "nikoarc-q4-digital-arc400",

  category: "Welding Machines",

  name: "NIKOARC Q4 DIGITAL MMA/ARC 400",

  shortDescription:
    "Heavy-duty digital MMA welding machine.",

  description:
    "The NIKOARC Q4 DIGITAL MMA/ARC 400 is engineered for demanding industrial welding applications. Featuring advanced IGBT technology and a digital control system, it delivers stable arc performance and excellent weld quality.",

  badge: "Essential",

  thumbnail: "/images/products/arcq4/arcq4.png",

  gallery: [
    "/images/products/arcq4/arcq4-1.png",
    "/images/products/arcq4/arcq4-2.png",
    "/images/products/arcq4/arcq4-3.png",
    "/images/products/arcq4/arcq4-4.png",
  ],

  brochure: "/brochures/arc400.pdf",

  features: [
    "Digital Control",
    "IGBT Inverter",
    "Hot Start",
    "Arc Force",
    "Anti Stick",
    "Heavy Duty",
  ],

  specifications: {
    power: "18 kVA",
    voltage: "415V",
    current: "20–400A",
    dutyCycle: "60%",
    dimensions: "640 × 340 × 560 mm",
    weight: "42 kg",
    warranty: "2 Years",
  },

  featured: false,
},
]