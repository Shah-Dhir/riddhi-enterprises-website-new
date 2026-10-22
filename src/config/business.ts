export const BUSINESS_INFO = {
  name: "Riddhi Enterprises",
  established: 2005,
  primaryContact: {
    name: "Dhir Shah",
    designation: "Partner",
  },
  phone: "+91 9619817847",
  whatsapp: "+91 9619817847",
  whatsappClean: "919619817847",
  email: "riddhienterprises.sales@gmail.com",
  officeAddress: "53, 3rd Floor, Peerbhoy Building, Pathakwadi, Loharchawl, Mumbai – 400002",
  factoryAddress: "Building No 1, Unit No 14, JP Colaco Industrial Estate, Sativali Road, Vasai East, Palghar – 401208",
  businessHours: "9:30 AM – 7:00 PM",
  serviceArea: "PAN India",
  googleMaps: {
    office: "https://maps.google.com/?q=53+3rd+Floor+Peerbhoy+Building+Pathakwadi+Loharchawl+Mumbai+400002",
    factory: "https://maps.google.com/?q=Building+No+1+Unit+No+14+JP+Colaco+Industrial+Estate+Sativali+Road+Vasai+East+Palghar+401208",
  },
  appsScriptUrl: "PASTE_YOUR_DEPLOYED_APPS_SCRIPT_WEB_APP_URL_HERE"
};

export const PRODUCTS = [
  {
    id: "perforated-cable-tray",
    name: "Perforated Cable Tray",
    description: "Reliable cable support with maximum ventilation for organized cable routing in industrial applications.",
    badge: "MOST REQUESTED",
    image: "/images/perforated-cable-tray.jpg",
    features: [
      "Excellent ventilation to prevent cable overheating",
      "Easy inspection and maintenance of cables",
      "Robust construction for industrial environments",
      "Available in multiple finishes (GI, HDG, Powder Coated)"
    ],
    applications: [
      "Industrial Plants", "Commercial Buildings", "Data Centers", "Power Plants"
    ]
  },
  {
    id: "ladder-tray",
    name: "Ladder Tray",
    description: "Heavy-duty cable support for long-span applications and high cable loads.",
    image: "/images/ladder-type-cable-tray.jpg",
    features: [
      "Superior strength for heavy cables",
      "Ideal for long support spans",
      "Maximum free air flow",
      "Custom rungs spacing available"
    ],
    applications: [
      "Heavy Engineering", "Oil & Gas", "Infrastructure Projects", "Power Generation"
    ]
  },
  {
    id: "cable-trunking",
    name: "Cable Trunking",
    description: "Enclosed cable protection for clean aesthetics and physical security.",
    image: "/images/cable-trunking.jpg",
    features: [
      "Complete protection from dust and debris",
      "Clean, aesthetic appearance",
      "Tamper-resistant design",
      "Easy lid removal for access"
    ],
    applications: [
      "Commercial Offices", "Hospitals", "Clean Rooms", "Retail Spaces"
    ]
  },
  {
    id: "strut-channel",
    name: "Strut Channel",
    description: "Versatile framing system for mechanical and electrical support.",
    image: "/images/strut-channel.jpg",
    features: [
      "No welding or drilling required for assembly",
      "Highly adjustable and reusable",
      "Supports heavy loads",
      "Compatible with standard fittings"
    ],
    applications: [
      "HVAC Support", "Pipe Support", "Cable Tray Mounting", "Ceiling Grids"
    ]
  },
  {
    id: "junction-box",
    name: "Junction Box",
    description: "Secure enclosures for electrical connections and terminations.",
    image: "/images/junction-box.jpg",
    features: [
      "Protects electrical connections",
      "Weather-resistant options available",
      "Various knock-out sizes",
      "Durable metal construction"
    ],
    applications: [
      "Industrial Wiring", "Outdoor Installations", "Commercial Electrical Systems"
    ]
  },
  {
    id: "gratings",
    name: "Gratings",
    description: "High-strength industrial flooring and walkway solutions.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
    features: [
      "High load-bearing capacity",
      "Slip-resistant surface",
      "Excellent drainage",
      "Low maintenance"
    ],
    applications: [
      "Industrial Walkways", "Platforms", "Drain Covers", "Stair Treads"
    ]
  },
  {
    id: "cable-ducts",
    name: "Cable Ducts",
    description: "Underground and surface cable protection systems.",
    image: "/images/cable-ducts.jpg",
    features: [
      "Protects cables from physical damage",
      "Organized routing for multiple cables",
      "Heavy-duty options for vehicle traffic areas",
      "Easy access for maintenance"
    ],
    applications: [
      "Underground Networking", "Substations", "Industrial Floors", "Telecommunications"
    ]
  },
  {
    id: "hand-rails",
    name: "Hand Rails",
    description: "Industrial safety handrails and barrier systems.",
    image: "/images/hand-rails.jpg",
    features: [
      "Robust safety barrier",
      "Modular components for easy assembly",
      "Corrosion-resistant finishes",
      "Compliance with safety standards"
    ],
    applications: [
      "Industrial Platforms", "Staircases", "Walkways", "Mezzanines"
    ]
  }
];

export const generateWhatsAppLink = (message: string) => {
  return `https://wa.me/${BUSINESS_INFO.whatsappClean}?text=${encodeURIComponent(message)}`;
};
