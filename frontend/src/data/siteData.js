// ============================================================
// STATIC SITE DATA — replaces all backend API calls
// ============================================================

// ---- SITE SETTINGS ----
export const siteSettings = {
  company_name: "Aditya Solar Kota",
  email: "adityasolar2112@gmail.com",
  phone: "+91 7014635499",
  whatsapp_number: "+91 7014635499",
  address: "330 Shopping Centre, Kota, Rajasthan 324007, India",
  office_hours: "Open 24 Hours",
  logo_url: null,
  facebook_url: "https://www.facebook.com/p/Aditya-Solar-kota-100072161827745/",
  twitter_url: "",
  linkedin_url: "",
  instagram_url: "https://www.instagram.com/adityasolarenergy/",
  google_map_embed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.7!2d75.8648!3d25.1798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEwJzQ3LjMiTiA3NcKwNTEnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890",
  hero_heading: "Power Your Future with Clean & Smart Energy",
  hero_description:
    "Transition to affordable, eco-friendly energy. Save up to 90% on electricity bills with PM Surya Ghar subsidies. Premium panels, hybrid backups, and net-metering.",
  hero_image_url: null,
};

// ---- PRODUCTS ----
import img1 from "../assets/ref-images/img1.jpg";
import img2 from "../assets/ref-images/img2.jpg";
import img3 from "../assets/ref-images/img3.png";
import img4 from "../assets/ref-images/img4.jpg";
import img5 from "../assets/ref-images/img5.png";
import invImg from "../assets/inv.jpg";

export const products = [
  {
    _id: "prod-1",
    slug: "adiya-3kw-mono-perc-solar-panel",
    title: "3kW Mono PERC Solar Panel System",
    category: "solar-panels",
    description:
      "High-efficiency 3kW monocrystalline PERC solar panel system with 22.3% module efficiency. DCR certified and eligible for PM Surya Ghar subsidy.",
    image_url: img1,
    is_featured: true,
    features: [
      "22.3% module efficiency rating",
      "DCR certified — PM Surya Ghar subsidy eligible",
      "25-year linear power output warranty",
      "Anti-PID technology for performance longevity",
      "IP68 rated junction boxes for all weather use",
      "Suitable for residential and commercial rooftops",
    ],
    specs: {
      "Peak Power (Wp)": "540 Wp per panel",
      "Module Efficiency": "22.3%",
      "No. of Panels": "6 panels",
      "System Voltage": "48V DC",
      "Temperature Coefficient": "-0.34% / °C",
      "Wind Load Tolerance": "2400 Pa",
      "Certification": "IEC 61215, IEC 61730, DCR",
    },
    downloads: [],
  },
  {
    _id: "prod-2",
    slug: "5kw-hybrid-solar-inverter",
    title: "5kW Hybrid Solar Inverter",
    category: "hybrid-inverters",
    description:
      "Smart 5kW hybrid inverter with integrated MPPT charge controller, grid-tie + battery backup capability, and WiFi monitoring support.",
    image_url: invImg,
    is_featured: true,
    features: [
      "Dual MPPT with 5kW AC output",
      "Grid-tie + off-grid hybrid mode",
      "Built-in 60A MPPT charge controller",
      "WiFi monitoring via mobile app",
      "Pure sine wave output — safe for all appliances",
      "Wide input voltage range: 60V–450V DC",
    ],
    specs: {
      "Rated AC Output": "5000W",
      "Max PV Input": "6500W",
      "MPPT Voltage Range": "60–450V",
      "Battery Voltage": "48V",
      "Efficiency": "93.5%",
      "Protection": "IP20",
      "Warranty": "5 Years",
    },
    downloads: [],
  },
  {
    _id: "prod-3",
    slug: "100ah-lithium-solar-battery",
    title: "100Ah Lithium Iron Phosphate Battery",
    category: "solar-batteries",
    description:
      "Deep-cycle LiFePO4 battery bank with 6000+ charge cycle life, BMS protection, and 95% depth of discharge — ideal for solar storage.",
    image_url: img2,
    is_featured: true,
    features: [
      "6000+ deep discharge cycles",
      "95% depth of discharge (DoD)",
      "Built-in Battery Management System (BMS)",
      "Safe lithium iron phosphate chemistry",
      "No maintenance required",
      "10-year design life",
    ],
    specs: {
      "Capacity": "100Ah / 5.12 kWh",
      "Nominal Voltage": "51.2V",
      "Chemistry": "LiFePO4",
      "Cycle Life": "6000+ cycles @ 80% DoD",
      "Charge Efficiency": "98%",
      "Operating Temp": "-20°C to +60°C",
      "Warranty": "7 Years",
    },
    downloads: [],
  },
  {
    _id: "prod-4",
    slug: "3hp-solar-submersible-pump",
    title: "3HP Solar Submersible Pump",
    category: "solar-pumps",
    description:
      "3HP DC solar submersible pump for agricultural irrigation. Works directly on solar power — no inverter or grid required.",
    image_url: img3,
    is_featured: false,
    features: [
      "Runs directly on solar DC power",
      "No inverter required — reduces system cost",
      "Stainless steel housing for corrosion resistance",
      "Suitable for bore depth up to 100 feet",
      "MNRE PM KUSUM scheme subsidy eligible",
      "Dry-run protection built in",
    ],
    specs: {
      "Motor Power": "3HP / 2.2kW",
      "Flow Rate": "1500 LPH at 60 ft head",
      "Solar Panel Required": "3 × 330Wp panels",
      "Max Head": "100 feet",
      "Pipe Size": "1.5 inch outlet",
      "Warranty": "2 Years",
    },
    downloads: [],
  },
  {
    _id: "prod-5",
    slug: "300lpd-solar-water-heater",
    title: "300 LPD ETC Solar Water Heater",
    category: "solar-water-heaters",
    description:
      "300 LPD evacuated tube collector (ETC) solar water heater for residential and commercial hot water needs year round.",
    image_url: img4,
    is_featured: false,
    features: [
      "Evacuated tube collectors — works even on cloudy days",
      "300 litres per day hot water output",
      "No electricity consumption — 100% solar powered",
      "Stainless steel inner tank with 5-year warranty",
      "Automatic pressure relief valve included",
      "Suitable for family of 4-6 persons",
    ],
    specs: {
      "Capacity": "300 LPD",
      "Collector Type": "ETC (Evacuated Tube)",
      "No. of Tubes": "30 tubes",
      "Max Temperature": "80°C",
      "Tank Material": "SS 304 inner, GI outer",
      "Warranty": "5 Years (tank), 2 Years (collector)",
    },
    downloads: [],
  },
  {
    _id: "prod-6",
    slug: "10kw-on-grid-solar-system",
    title: "10kW On-Grid Solar System",
    category: "on-grid-inverters",
    description:
      "Complete 10kW on-grid solar system with net-metering — export surplus power to the grid and earn credits on your electricity bill.",
    image_url: img5,
    is_featured: false,
    features: [
      "10kW grid-connected with net-metering",
      "3-phase output — suitable for large residential & SME",
      "Export surplus energy to DISCOM grid",
      "Remote monitoring via WiFi/GPRS",
      "Built-in anti-islanding protection",
      "40% accelerated depreciation benefit for commercial",
    ],
    specs: {
      "AC Output": "10kW / 3-phase",
      "Max PV Input": "13kWp",
      "MPPT Trackers": "2 × MPPT",
      "Grid Voltage": "380–440V, 50Hz",
      "Efficiency": "98.4%",
      "Display": "LCD + WiFi app",
      "Warranty": "5 Years",
    },
    downloads: [],
  },
];

export const categories = [
  { slug: "solar-panels", name: "Solar Panels" },
  { slug: "hybrid-inverters", name: "Hybrid Inverters" },
  { slug: "on-grid-inverters", name: "On-Grid Inverters" },
  { slug: "solar-batteries", name: "Solar Batteries" },
  { slug: "solar-pumps", name: "Solar Pumps" },
  { slug: "solar-water-heaters", name: "Water Heaters" },
];

// ---- PROJECTS ----
import gal1 from "../assets/ref-images/gal1.png";
import gal2 from "../assets/ref-images/gal2.png";

export const projects = [
  {
    _id: "proj-1",
    slug: "5kw-residential-kota-2024",
    title: "5kW Residential Rooftop — Kota",
    category: "Residential",
    capacity: "5 kWp",
    state: "Kota, Rajasthan",
    completion_date: "March 2024",
    is_featured: true,
    image_url: gal1,
    description:
      "Installed a 5kW on-grid solar system for a residential customer in Kota. The system uses 10 × 540Wp monocrystalline DCR panels with a 5kW string inverter.\n\nThe project qualified for the full PM Surya Ghar subsidy of ₹78,000 after documentation filing through the national portal. Net-metering was completed within 3 weeks of installation.\n\nThe customer now exports 8–12 units of electricity per day back to RVVNL grid and receives monthly credits. Full payback expected in 3.5 years.",
  },
  {
    _id: "proj-2",
    slug: "20kw-commercial-factory-kota",
    title: "20kW Commercial Factory — Kota Industrial Area",
    category: "Commercial",
    capacity: "20 kWp",
    state: "Kota, Rajasthan",
    completion_date: "January 2024",
    is_featured: true,
    image_url: gal2,
    description:
      "Designed and commissioned a 20kW rooftop solar system for a textile manufacturing unit in Kota Industrial Area. The installation uses high-efficiency 400Wp bifacial panels on a GI mounting structure.\n\nThe project qualifies for 40% accelerated depreciation under the Income Tax Act, reducing effective cost significantly for the business owner.\n\nMonitored via a central SCADA system. The system generates an average of 80 kWh/day, offsetting 70% of the factory's daytime load.",
  },
  {
    _id: "proj-3",
    slug: "3kw-agricultural-pump-hadoti",
    title: "3HP Agricultural Solar Pump — Hadoti Region",
    category: "Residential",
    capacity: "3 kWp",
    state: "Bundi, Rajasthan",
    completion_date: "April 2024",
    is_featured: false,
    image_url: gal1,
    description:
      "Deployed a 3HP DC solar submersible pump system for a farmer in Bundi district under the PM KUSUM scheme. The system runs directly on 3 × 330Wp solar panels without any inverter.\n\nThe farmer now irrigates 2 acres of farmland during daylight hours without any electricity cost. The pump draws from a 60-foot bore well and delivers 1500 LPH.\n\nTotal project cost after subsidy: ₹45,000. No grid connection required.",
  },
  {
    _id: "proj-4",
    slug: "50kw-school-solar-kota",
    title: "50kW Rooftop Solar — Government School Kota",
    category: "Commercial",
    capacity: "50 kWp",
    state: "Kota, Rajasthan",
    completion_date: "November 2023",
    is_featured: false,
    image_url: gal2,
    description:
      "Commissioned a 50kW rooftop solar system on a government higher secondary school in Kota. The system uses 3-phase string inverters and produces 180–200 kWh per day.\n\nThe school now operates virtually electricity-bill-free during school hours. The project was completed under a state government initiative for green energy in educational institutions.\n\nAnnual savings: approximately ₹3.6 lakhs. CO2 offset: 60 tons per year.",
  },
];

// ---- TESTIMONIALS ----
export const testimonials = [
  {
    _id: "test-1",
    name: "Ramesh Sharma",
    location: "Kota, Rajasthan",
    rating: 5,
    review:
      "Excellent service from Aditya Solar! The team helped us with the PM Surya Ghar subsidy documentation and the installation was completed within a week. Our electricity bill dropped from ₹4,200 to under ₹400 per month.",
  },
  {
    _id: "test-2",
    name: "Sunita Agarwal",
    location: "Bundi, Rajasthan",
    rating: 5,
    review:
      "We installed a 3kW system six months ago and the savings have been remarkable. Aditya Solar's engineering team did a thorough shadow analysis before installation. Highly recommend their services.",
  },
  {
    _id: "test-3",
    name: "Vikram Singhania",
    location: "Kota Industrial Area",
    rating: 5,
    review:
      "For our factory we needed a reliable commercial solar system. Aditya Solar delivered on time with proper discom approvals and monitoring setup. Our power cost has reduced by 65%.",
  },
];

// ---- GALLERY ----
export const galleryItems = [
  { _id: "gal-1", title: "Residential Rooftop Kota", category: "Projects", image: gal1 },
  { _id: "gal-2", title: "Industrial Mounting Structure", category: "Installations", image: gal2 },
  { _id: "gal-3", title: "Panel Array Installation", category: "Installations", image: gal1 },
  { _id: "gal-4", title: "Before & After Rooftop", category: "BeforeAfter", image: gal2 },
  { _id: "gal-5", title: "Inverter Room Setup", category: "Installations", image: gal1 },
  { _id: "gal-6", title: "Commercial Project Kota", category: "Projects", image: gal2 },
  { _id: "gal-7", title: "Agricultural Solar Pump", category: "Projects", image: gal1 },
  { _id: "gal-8", title: "Wiring & Safety Checks", category: "Installations", image: gal2 },
];

// ---- SERVICES ----
export const services = [
  {
    name: "Solar Engineering & Consulting",
    description:
      "Custom engineering, rooftop assessment, shading analysis, shadow simulation, and complete ROI-based technical design proposals for your premises.",
    features: [
      "3D Shadow path modeling",
      "Financial payback reports",
      "Subsidy application documentation guidance",
    ],
    icon: "clipboard-list",
  },
  {
    name: "Professional Rooftop Installation",
    description:
      "End-to-end site preparation, module mounting, structural anchoring, inverter installation, and net-metering integration by certified solar technicians.",
    features: [
      "Certified structural safety designs",
      "Double-insulated DC wiring",
      "Net-metering connection execution",
    ],
    icon: "wrench",
  },
  {
    name: "Annual Maintenance Contracts (AMC)",
    description:
      "Keep your solar systems running at peak yield with regular checkups, professional dust washing, thermal diagnostics, and wiring testing.",
    features: [
      "Quarterly safety checkups",
      "Professional panel pressure washing",
      "Detailed production report comparison",
    ],
    icon: "shield-check",
  },
];

// ---- FAQs ----
export const faqs = [
  {
    _id: "faq-1",
    question: "What is the PM Surya Ghar Muft Bijli Yojana?",
    answer:
      "PM Surya Ghar Muft Bijli Yojana is a central government initiative providing financial assistance of up to ₹78,000 for residential rooftop solar installations. Households installing 1kW systems receive ₹30,000, 2kW systems ₹60,000, and 3kW and above receive the maximum ₹78,000 subsidy directly to their bank accounts.",
    category: "Subsidy",
  },
  {
    _id: "faq-2",
    question: "How long does the installation take?",
    answer:
      "For a standard residential 3kW to 5kW rooftop system, the installation takes 1 to 2 working days. The net-metering approval process from the DISCOM takes an additional 15 to 30 days depending on the state utility. We handle all documentation and approvals on your behalf.",
    category: "Installation",
  },
  {
    _id: "faq-3",
    question: "What is net-metering and how does it benefit me?",
    answer:
      "Net-metering is a billing mechanism that allows you to export surplus solar electricity back to the grid. The exported units are credited against your electricity bill. On days your system generates more than you consume, those credits offset future bills — effectively making your meter run backwards.",
    category: "Technical",
  },
  {
    _id: "faq-4",
    question: "What is the payback period for a rooftop solar installation?",
    answer:
      "For a typical residential 3kW system in Rajasthan, the payback period is 3 to 4 years after the government subsidy. After payback, you enjoy free electricity for 21+ additional years since quality solar panels carry 25-year performance warranties.",
    category: "Finance",
  },
  {
    _id: "faq-5",
    question: "Do solar panels work during cloudy days or monsoon?",
    answer:
      "Yes, solar panels continue to generate electricity on cloudy days, though at reduced capacity (typically 20–40% of peak output). Modern high-efficiency monocrystalline panels perform well even in diffused light conditions. During monsoon, the cooler temperatures actually improve efficiency slightly.",
    category: "Technical",
  },
  {
    _id: "faq-6",
    question: "What maintenance do solar panels require?",
    answer:
      "Solar panels require minimal maintenance. The main task is cleaning dust, bird droppings, and pollen from the panel surface every 1–2 months using plain water. We recommend an annual professional inspection for wiring, connections, and inverter performance. Our AMC packages cover this completely.",
    category: "Maintenance",
  },
  {
    _id: "faq-7",
    question: "Is my roof suitable for solar installation?",
    answer:
      "Most rooftops are suitable for solar. We assess shadow-free area, structural load capacity, and roof orientation during our free site visit. South-facing rooftops receive maximum sun. A 1kW system requires approximately 100 square feet of shadow-free space. We provide a detailed feasibility report before any commitment.",
    category: "Installation",
  },
  {
    _id: "faq-8",
    question: "What warranty do I get on the solar system?",
    answer:
      "Our solar systems come with: 25-year linear power output warranty on panels (minimum 80% output in year 25), 5-year warranty on inverters, and 2-year warranty on balance of system components including mounting structures and wiring. We also provide AMC contracts for long-term peace of mind.",
    category: "Warranty",
  },
];

// ---- BLOGS ----
export const blogs = [
  {
    _id: "blog-1",
    slug: "pm-surya-ghar-subsidy-guide-2024",
    title: "Complete Guide to PM Surya Ghar Muft Bijli Yojana Subsidy 2024",
    seo_description:
      "Step-by-step guide to claiming up to ₹78,000 subsidy under PM Surya Ghar scheme for residential rooftop solar in India.",
    tags: ["Subsidy", "PM Surya Ghar", "Residential Solar"],
    created_at: "2024-03-15T10:00:00Z",
    content: `## What is PM Surya Ghar Muft Bijli Yojana?

PM Surya Ghar Muft Bijli Yojana is a landmark central government scheme launched in 2024 to promote residential rooftop solar adoption across India. The scheme provides direct financial subsidies to households installing grid-connected rooftop solar systems.

## Subsidy Amounts

The central financial assistance is structured as follows:

- 1 kWp system: ₹30,000 subsidy
- 2 kWp system: ₹60,000 subsidy
- 3 kWp and above: ₹78,000 (maximum cap)

## Who is Eligible?

Any Indian household with a valid electricity connection from a state DISCOM can apply. The property must be residential and the installation must use DCR (Domestic Content Requirement) certified solar panels manufactured in India.

## How to Apply

The application process is entirely online through the official pmsuryaghar.gov.in portal. You will need to register your details, select an empaneled installer like Aditya Solar, and submit your DISCOM connection details.

## DCR Panel Requirement

All panels must carry MNRE DCR certification. Aditya Solar supplies only DCR certified Tier-1 monocrystalline panels that qualify for this subsidy automatically.

## Timeline

From application to subsidy disbursement, the typical timeline is 45 to 60 days. The subsidy amount is transferred directly to your bank account after the DISCOM inspector completes the net-meter installation and generates the commissioning certificate.`,
  },
  {
    _id: "blog-2",
    slug: "hybrid-vs-on-grid-solar-which-is-right",
    title: "Hybrid vs On-Grid Solar: Which System is Right for You?",
    seo_description:
      "Compare hybrid solar systems with on-grid systems to choose the best option for your home or business in India.",
    tags: ["Hybrid Solar", "On-Grid", "Inverter"],
    created_at: "2024-02-20T10:00:00Z",
    content: `## Understanding Your Options

When choosing a rooftop solar system, the two most popular configurations are on-grid (grid-tied) and hybrid systems. Understanding the difference is key to making the right investment.

## On-Grid Systems

On-grid solar systems connect directly to the utility grid without any battery storage. They are ideal if your primary goal is to reduce electricity bills and earn net-metering credits.

Key benefits include lower upfront cost, simpler installation, and maximum ROI through net-metering. The limitation is that they shut down during grid failures as a safety measure.

## Hybrid Systems

Hybrid systems combine solar generation, battery storage, and grid connection in one setup. They provide power backup during grid outages while also allowing net-metering.

They cost more upfront due to the battery bank, but provide energy independence and are ideal for areas with frequent power cuts.

## Which Should You Choose?

Choose on-grid if: your area has a reliable grid supply, your primary goal is bill reduction, and you want maximum subsidy eligibility.

Choose hybrid if: your area experiences frequent power cuts, you have critical loads that cannot be interrupted, or you want partial energy independence.

## Our Recommendation

For most residential customers in Rajasthan with relatively stable grid supply, we recommend starting with an on-grid system to maximize subsidy benefits and achieve faster payback.`,
  },
  {
    _id: "blog-3",
    slug: "solar-panel-cleaning-maintenance-guide",
    title: "Solar Panel Cleaning & Maintenance Guide for Indian Conditions",
    seo_description:
      "Learn how to maintain your solar panels in Indian weather conditions for maximum efficiency and longevity.",
    tags: ["Maintenance", "Panel Cleaning", "AMC"],
    created_at: "2024-01-10T10:00:00Z",
    content: `## Why Panel Cleaning Matters

In Indian conditions, especially in Rajasthan, dust, sand, bird droppings, and pollen accumulate rapidly on solar panel surfaces. Studies show that unclean panels can lose 20 to 30 percent of their generation capacity within just a few weeks during dry seasons.

## How Often Should You Clean?

For Rajasthan and other dusty regions, we recommend cleaning every 2 to 4 weeks during the dry months (October to June). During monsoon season, natural rainfall handles most cleaning naturally.

## Cleaning Method

Use plain water and a soft cloth or brush. Avoid harsh chemicals or abrasive materials that can scratch the glass surface. The best time to clean is early morning or late evening when panels are cool to avoid thermal shock.

## Professional AMC Packages

Our Annual Maintenance Contract (AMC) packages include scheduled professional cleanings, performance checks, wiring inspections, and thermal imaging diagnostics. This ensures your system operates at peak efficiency throughout its 25-year life.

## Warning Signs

Monitor your inverter display or mobile app for sudden drops in generation output. A significant drop on a clear day typically indicates dirty panels, loose connections, or a shading issue that needs inspection.`,
  },
];
