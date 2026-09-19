export type ArtisanOpportunity = {
  id: string;
  title: string;
  slug: string;
  companyName: string;
  description: string;
  country: string;
  location: string;
  jobType: string;
  salary: string;
  applicationUrl: string;
};

export type ArtisanCategory = {
  id: string;
  name: string;
  slug: string;
  country: string;
  description: string;
  opportunities: ArtisanOpportunity[];
};

const locations = ["Lagos", "Abuja", "Port Harcourt"];

const companyPrefixes = [
  "Prime",
  "Royal",
  "Bright",
  "Golden",
  "Elite",
  "Trusted",
  "First",
  "Pro",
  "Smart",
  "Urban",
  "Metro",
  "Capital",
  "Global",
  "Modern",
  "Perfect",
  "Dynamic",
  "Reliable",
  "Express",
  "Top",
  "Superior",
];

const companySuffixes = [
  "Services",
  "Solutions",
  "Enterprise",
  "Works",
  "Group",
];

const titleVariants: Record<string, string[]> = {
  "Solar Panel Installation": [
    "Professional Solar Panel Installer",
    "Solar Panel Installation Technician",
    "Solar Energy Technician",
    "Solar Installation Specialist",
  ],

  "POP Installation": [
    "Professional POP Installer",
    "POP Ceiling Installer",
    "POP Installation Specialist",
    "Ceiling Finishing Technician",
  ],

  "Social Media Manager": [
    "Social Media Manager",
    "Social Media Specialist",
    "Social Media Marketing Manager",
    "Digital Social Media Manager",
  ],

  "Makeup Artist": [
    "Professional Makeup Artist",
    "Makeup Artist",
    "Bridal Makeup Artist",
    "Beauty Makeup Specialist",
  ],

  "Hair Stylist": [
    "Professional Hair Stylist",
    "Hair Styling Specialist",
    "Salon Hair Stylist",
    "Professional Hairstylist",
  ],

  Designer: [
    "Graphic Designer",
    "Creative Designer",
    "Visual Designer",
    "Digital Designer",
  ],

  Plumber: [
    "Professional Plumber",
    "Plumbing Technician",
    "Maintenance Plumber",
    "Residential Plumber",
  ],

  Painter: [
    "Professional Painter",
    "House Painter",
    "Painting Technician",
    "Interior Painter",
  ],

  Electrician: [
    "Professional Electrician",
    "Electrical Technician",
    "Maintenance Electrician",
    "Residential Electrician",
  ],

  Tiler: [
    "Professional Tiler",
    "Tile Installation Specialist",
    "Floor Tiling Technician",
    "Wall Tiling Specialist",
  ],

  Cobbler: [
    "Professional Cobbler",
    "Shoe Repair Specialist",
    "Footwear Repair Technician",
    "Leather Footwear Specialist",
  ],

  Barber: [
    "Professional Barber",
    "Barbering Specialist",
    "Men's Hair Stylist",
    "Professional Hair Barber",
  ],

  "CCTV Installation": [
    "CCTV Installation Technician",
    "Security Camera Installer",
    "CCTV Technician",
    "Security Systems Installer",
  ],

  "DSTV Installation": [
    "DSTV Installation Technician",
    "Satellite TV Installer",
    "DSTV Technician",
    "Satellite Installation Specialist",
  ],

  Welder: [
    "Professional Welder",
    "Welding Technician",
    "Metal Fabrication Welder",
    "Industrial Welder",
  ],

  Mechanic: [
    "Professional Mechanic",
    "Automobile Mechanic",
    "Auto Repair Technician",
    "Vehicle Maintenance Technician",
  ],

  Vulcaniser: [
    "Professional Vulcaniser",
    "Tyre Technician",
    "Automobile Tyre Specialist",
    "Wheel Service Technician",
  ],

  Bricklayer: [
    "Professional Bricklayer",
    "Building Construction Worker",
    "Masonry Specialist",
    "Bricklaying Technician",
  ],

  Carpenter: [
    "Professional Carpenter",
    "Furniture Carpenter",
    "Woodwork Specialist",
    "Carpentry Technician",
  ],

  "Sales Representative": [
    "Sales Representative",
    "Sales Executive",
    "Field Sales Representative",
    "Customer Sales Specialist",
  ],

  Cashier: [
    "Cashier",
    "Retail Cashier",
    "Store Cashier",
    "Front Desk Cashier",
  ],

  "Nail Technician": [
    "Professional Nail Technician",
    "Nail Artist",
    "Manicure and Pedicure Specialist",
    "Beauty Nail Technician",
  ],

  "Eye Lash Specialist": [
    "Eyelash Specialist",
    "Lash Technician",
    "Professional Lash Artist",
    "Eyelash Extension Specialist",
  ],

  "Phone Repairer": [
    "Phone Repair Technician",
    "Mobile Phone Repair Specialist",
    "Smartphone Repair Technician",
    "Mobile Device Technician",
  ],

  Washerman: [
    "Professional Laundry Attendant",
    "Laundry Technician",
    "Laundry Service Specialist",
    "Clothing Care Specialist",
  ],

  Babysitter: [
    "Professional Babysitter",
    "Childcare Assistant",
    "Babysitting Specialist",
    "Childcare Worker",
  ],

  Nanny: [
    "Professional Nanny",
    "Live-Out Nanny",
    "Childcare Nanny",
    "Family Nanny",
  ],

  Chef: [
    "Professional Chef",
    "Cook",
    "Kitchen Chef",
    "Private Chef",
  ],

  Waiter: [
    "Professional Waiter",
    "Restaurant Waiter",
    "Food Service Attendant",
    "Restaurant Service Staff",
  ],

  "Gym Instructor": [
    "Gym Instructor",
    "Fitness Instructor",
    "Personal Fitness Trainer",
    "Gym Fitness Coach",
  ],
};

const categoryDescriptions: Record<string, string> = {
  "Solar Panel Installation":
    "Find solar panel installation and solar energy opportunities across Lagos, Abuja and Port Harcourt.",

  "POP Installation":
    "Find POP ceiling installation and finishing opportunities across Lagos, Abuja and Port Harcourt.",

  "Social Media Manager":
    "Find social media management and digital marketing opportunities across Nigeria.",

  "Makeup Artist":
    "Find makeup artist, bridal makeup and beauty opportunities across Lagos, Abuja and Port Harcourt.",

  "Hair Stylist":
    "Find hair styling and salon opportunities across Lagos, Abuja and Port Harcourt.",

  Designer:
    "Find graphic design, creative design and visual design opportunities across Nigeria.",

  Plumber:
    "Find plumbing and maintenance opportunities across Lagos, Abuja and Port Harcourt.",

  Painter:
    "Find painting, decorating and finishing opportunities across Nigeria.",

  Electrician:
    "Find electrical installation and maintenance opportunities across Nigeria.",

  Tiler:
    "Find tiling, flooring and wall finishing opportunities across Lagos, Abuja and Port Harcourt.",

  Cobbler:
    "Find footwear repair, leatherwork and cobbling opportunities across Nigeria.",

  Barber:
    "Find barbering and men's grooming opportunities across Lagos, Abuja and Port Harcourt.",

  "CCTV Installation":
    "Find CCTV, security camera and security system installation opportunities across Nigeria.",

  "DSTV Installation":
    "Find DSTV, satellite television and satellite installation opportunities across Nigeria.",

  Welder:
    "Find welding, metal fabrication and industrial welding opportunities across Nigeria.",

  Mechanic:
    "Find automobile repair, servicing and vehicle maintenance opportunities across Nigeria.",

  Vulcaniser:
    "Find tyre fitting, tyre repair and wheel service opportunities across Nigeria.",

  Bricklayer:
    "Find bricklaying, masonry and building construction opportunities across Nigeria.",

  Carpenter:
    "Find carpentry, furniture and woodwork opportunities across Nigeria.",

  "Sales Representative":
    "Find sales representative and field sales opportunities across Lagos, Abuja and Port Harcourt.",

  Cashier:
    "Find cashier, retail and store payment opportunities across Nigeria.",

  "Nail Technician":
    "Find nail technician, manicure and pedicure opportunities across Nigeria.",

  "Eye Lash Specialist":
    "Find eyelash extension and lash technician opportunities across Nigeria.",

  "Phone Repairer":
    "Find mobile phone repair and smartphone technician opportunities across Nigeria.",

  Washerman:
    "Find laundry, washing and clothing care opportunities across Nigeria.",

  Babysitter:
    "Find babysitting and childcare opportunities across Lagos, Abuja and Port Harcourt.",

  Nanny:
    "Find nanny and childcare opportunities across Lagos, Abuja and Port Harcourt.",

  Chef:
    "Find chef, cooking and kitchen opportunities across Nigeria.",

  Waiter:
    "Find waiter and restaurant service opportunities across Nigeria.",

  "Gym Instructor":
    "Find gym instructor, fitness trainer and fitness coaching opportunities across Nigeria.",
};

const categories = [
  "Solar Panel Installation",
  "POP Installation",
  "Social Media Manager",
  "Makeup Artist",
  "Hair Stylist",
  "Designer",
  "Plumber",
  "Painter",
  "Electrician",
  "Tiler",
  "Cobbler",
  "Barber",
  "CCTV Installation",
  "DSTV Installation",
  "Welder",
  "Mechanic",
  "Vulcaniser",
  "Bricklayer",
  "Carpenter",
  "Sales Representative",
  "Cashier",
  "Nail Technician",
  "Eye Lash Specialist",
  "Phone Repairer",
  "Washerman",
  "Babysitter",
  "Nanny",
  "Chef",
  "Waiter",
  "Gym Instructor",
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getSalary(category: string, index: number) {
  const salaryRanges: Record<string, [number, number]> = {
    "Solar Panel Installation": [120000, 350000],
    "POP Installation": [100000, 300000],
    "Social Media Manager": [100000, 350000],
    "Makeup Artist": [80000, 300000],
    "Hair Stylist": [70000, 250000],
    Designer: [100000, 400000],
    Plumber: [80000, 250000],
    Painter: [70000, 220000],
    Electrician: [90000, 300000],
    Tiler: [80000, 250000],
    Cobbler: [70000, 200000],
    Barber: [70000, 220000],
    "CCTV Installation": [100000, 300000],
    "DSTV Installation": [90000, 280000],
    Welder: [100000, 350000],
    Mechanic: [100000, 350000],
    Vulcaniser: [70000, 220000],
    Bricklayer: [80000, 250000],
    Carpenter: [90000, 280000],
    "Sales Representative": [80000, 250000],
    Cashier: [60000, 180000],
    "Nail Technician": [70000, 220000],
    "Eye Lash Specialist": [70000, 220000],
    "Phone Repairer": [80000, 280000],
    Washerman: [60000, 180000],
    Babysitter: [60000, 180000],
    Nanny: [70000, 200000],
    Chef: [100000, 350000],
    Waiter: [60000, 160000],
    "Gym Instructor": [80000, 250000],
  };

  const [min, max] = salaryRanges[category] || [70000, 200000];

  const steps = 100;

  const value =
    min + ((index * 37) % steps) * ((max - min) / steps);

  const roundedValue = Math.round(value / 5000) * 5000;

  return `₦${roundedValue.toLocaleString()} - ₦${max.toLocaleString()} / month`;
}

function getJobType(index: number) {
  const types = [
    "FULL_TIME",
    "CONTRACT",
    "PART_TIME",
    "FREELANCE",
  ];

  return types[index % types.length];
}

function getTitle(category: string, index: number) {
  const variants = titleVariants[category] || [category];

  return variants[index % variants.length];
}

function getCompanyName(category: string, location: string, index: number) {
  const prefix = companyPrefixes[index % companyPrefixes.length];

  const suffix =
    companySuffixes[
      Math.floor(index / companyPrefixes.length) %
        companySuffixes.length
    ];

  return `${prefix} ${category} ${suffix} ${location} ${index + 1}`;
}

function createOpportunity(
  category: string,
  categorySlug: string,
  index: number
): ArtisanOpportunity {
  const location = locations[index % locations.length];

  const title = getTitle(category, index);

  const titleSlug = slugify(title);
  const locationSlug = slugify(location);

  const slug = `${titleSlug}-${locationSlug}-${index + 1}`;

  const companyName = getCompanyName(category, location, index);

  return {
    id: `${categorySlug}-${index + 1}`,

    title,

    slug,

    companyName,

    description: `${title} opportunity in ${location}, Nigeria. The successful candidate will provide professional ${category.toLowerCase()} services, maintain quality standards, work effectively with clients or customers, and complete assigned responsibilities reliably.`,

    country: "Nigeria",

    location,

    jobType: getJobType(index),

    salary: getSalary(category, index),

    applicationUrl: "https://www.globaljobslive.com",
  };
}

function createCategory(name: string, index: number): ArtisanCategory {
  const slug = slugify(name);

  const opportunities = Array.from({ length: 100 }, (_, opportunityIndex) =>
    createOpportunity(name, slug, opportunityIndex)
  );

  return {
    id: `artisan-category-${index + 1}`,

    name,

    slug,

    country: "Nigeria",

    description:
      categoryDescriptions[name] ||
      `Find ${name.toLowerCase()} opportunities across Lagos, Abuja and Port Harcourt.`,

    opportunities,
  };
}

export const artisanCategories: ArtisanCategory[] = categories.map(
  createCategory
);

export function getArtisanCategory(slug: string) {
  return artisanCategories.find((category) => category.slug === slug);
}

export function getArtisanOpportunity(
  categorySlug: string,
  opportunitySlug: string
) {
  const category = getArtisanCategory(categorySlug);

  if (!category) {
    return undefined;
  }

  return category.opportunities.find(
    (opportunity) => opportunity.slug === opportunitySlug
  );
}

export function getArtisanCategoryCount() {
  return artisanCategories.length;
}

export function getArtisanOpportunityCount() {
  return artisanCategories.reduce(
    (total, category) => total + category.opportunities.length,
    0
  );
}