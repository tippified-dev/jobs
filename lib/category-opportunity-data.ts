export type OpportunityCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  keywords: string[];
};

export type OpportunityCountry = {
  name: string;
  slug: string;
  code: string;
  currency: string;
  salaryMin: number;
  salaryMax: number;
};

export type OpportunityCompany = {
  id: string;
  name: string;
  slug: string;
  country: string;
  countrySlug: string;
  industry: string;
  description: string;
};

export type CategoryOpportunity = {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  company: OpportunityCompany;
  country: string;
  countrySlug: string;
  countryCode: string;
  location: string;
  description: string;
  jobType:
    | "FULL_TIME"
    | "PART_TIME"
    | "CONTRACT"
    | "FREELANCE"
    | "TEMPORARY"
    | "INTERNSHIP";
  workMode: "REMOTE" | "HYBRID" | "ONSITE";
  experienceLevel:
    | "NO_EXPERIENCE"
    | "ENTRY_LEVEL"
    | "MID_LEVEL"
    | "SENIOR_LEVEL"
    | "EXECUTIVE";
  salaryMin: number;
  salaryMax: number;
  salaryCurrency: string;
  salaryPeriod: "YEAR" | "MONTH" | "HOUR";
  skills: string[];
  keywords: string[];
  publishedDaysAgo: number;
  isVerified: boolean;
  isFeatured: boolean;
  isActive: boolean;
  applicationUrl: string | null;
};

/* =========================================================
   CATEGORIES
   ========================================================= */

export const opportunityCategories: OpportunityCategory[] = [
  {
    id: "cat-full-stack-developer",
    name: "Full Stack Developer",
    slug: "full-stack-developer",
    description:
      "Full stack developer opportunities covering frontend, backend, APIs, databases and modern web applications.",
    keywords: [
      "full stack developer",
      "full stack jobs",
      "remote full stack developer",
      "web developer",
      "software developer",
    ],
  },
  {
    id: "cat-frontend-developer",
    name: "Frontend Developer",
    slug: "frontend-developer",
    description:
      "Frontend developer opportunities using modern web technologies to build responsive and interactive digital products.",
    keywords: [
      "frontend developer",
      "front end developer",
      "frontend jobs",
      "react developer",
      "web developer",
    ],
  },
  {
    id: "cat-backend-developer",
    name: "Backend Developer",
    slug: "backend-developer",
    description:
      "Backend developer opportunities focused on APIs, databases, servers, authentication and application infrastructure.",
    keywords: [
      "backend developer",
      "back end developer",
      "backend jobs",
      "API developer",
      "server developer",
    ],
  },
  {
    id: "cat-software-engineer",
    name: "Software Engineer",
    slug: "software-engineer",
    description:
      "Software engineering opportunities involving application development, system design, testing and software architecture.",
    keywords: [
      "software engineer",
      "software engineering jobs",
      "developer jobs",
      "remote software engineer",
      "programming jobs",
    ],
  },
  {
    id: "cat-mobile-developer",
    name: "Mobile Developer",
    slug: "mobile-developer",
    description:
      "Mobile development opportunities for building Android, iOS and cross-platform applications.",
    keywords: [
      "mobile developer",
      "mobile development",
      "android developer",
      "ios developer",
      "react native developer",
    ],
  },
  {
    id: "cat-ui-ux-designer",
    name: "UI/UX Designer",
    slug: "ui-ux-designer",
    description:
      "UI and UX design opportunities focused on user research, interfaces, prototypes and digital product experiences.",
    keywords: [
      "ui ux designer",
      "ux designer",
      "ui designer",
      "product designer",
      "ux jobs",
    ],
  },
  {
    id: "cat-data-analyst",
    name: "Data Analyst",
    slug: "data-analyst",
    description:
      "Data analyst opportunities involving reporting, business intelligence, spreadsheets, dashboards and data-driven insights.",
    keywords: [
      "data analyst",
      "data analysis jobs",
      "business intelligence",
      "reporting analyst",
      "remote data analyst",
    ],
  },
  {
    id: "cat-digital-marketing",
    name: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Digital marketing opportunities covering online campaigns, advertising, email marketing, content and audience growth.",
    keywords: [
      "digital marketing",
      "digital marketer",
      "marketing jobs",
      "online marketing",
      "remote marketing jobs",
    ],
  },
  {
    id: "cat-seo-specialist",
    name: "SEO Specialist",
    slug: "seo-specialist",
    description:
      "SEO opportunities focused on search visibility, keyword research, technical SEO, content optimization and analytics.",
    keywords: [
      "seo specialist",
      "seo jobs",
      "search engine optimization",
      "seo analyst",
      "remote seo jobs",
    ],
  },
  {
    id: "cat-graphic-designer",
    name: "Graphic Designer",
    slug: "graphic-designer",
    description:
      "Graphic design opportunities involving digital graphics, branding, marketing materials and visual communication.",
    keywords: [
      "graphic designer",
      "graphic design jobs",
      "visual designer",
      "creative designer",
      "remote graphic design",
    ],
  },
  {
    id: "cat-content-writer",
    name: "Content Writer",
    slug: "content-writer",
    description:
      "Content writing opportunities for blogs, websites, marketing materials, product content and digital publications.",
    keywords: [
      "content writer",
      "writing jobs",
      "content writing",
      "blog writer",
      "remote writing jobs",
    ],
  },
  {
    id: "cat-project-manager",
    name: "Project Manager",
    slug: "project-manager",
    description:
      "Project management opportunities covering planning, coordination, delivery, communication and team management.",
    keywords: [
      "project manager",
      "project management jobs",
      "remote project manager",
      "project coordinator",
      "program management",
    ],
  },
  {
    id: "cat-social-media-manager",
    name: "Social Media Manager",
    slug: "social-media-manager",
    description:
      "Social media opportunities involving content planning, community management, engagement and social growth.",
    keywords: [
      "social media manager",
      "social media jobs",
      "community manager",
      "social media marketing",
      "remote social media jobs",
    ],
  },
  {
    id: "cat-data-entry",
    name: "Data Entry",
    slug: "data-entry",
    description:
      "Data entry opportunities involving digital records, spreadsheets, databases, document processing and information management.",
    keywords: [
      "data entry",
      "data entry jobs",
      "online data entry",
      "remote data entry",
      "work from home data entry",
    ],
  },
  {
    id: "cat-virtual-assistant",
    name: "Virtual Assistant",
    slug: "virtual-assistant",
    description:
      "Virtual assistant opportunities involving administrative support, scheduling, research, communication and organization.",
    keywords: [
      "virtual assistant",
      "virtual assistant jobs",
      "remote assistant",
      "online assistant",
      "work from home assistant",
    ],
  },
  {
    id: "cat-customer-support",
    name: "Customer Support",
    slug: "customer-support",
    description:
      "Customer support opportunities involving customer communication, issue resolution, helpdesk services and account assistance.",
    keywords: [
      "customer support",
      "customer service jobs",
      "support representative",
      "remote customer support",
      "online customer service",
    ],
  },
  {
    id: "cat-sales",
    name: "Sales",
    slug: "sales",
    description:
      "Sales opportunities involving customer acquisition, lead generation, account management and business development.",
    keywords: [
      "sales jobs",
      "sales representative",
      "business development",
      "remote sales",
      "sales executive",
    ],
  },
  {
    id: "cat-online-research",
    name: "Online Research",
    slug: "online-research",
    description:
      "Online research opportunities involving internet research, information gathering, fact checking and data collection.",
    keywords: [
      "online research",
      "online research jobs",
      "internet research",
      "research assistant",
      "remote research jobs",
    ],
  },
];

/* =========================================================
   COUNTRIES
   ========================================================= */

export const opportunityCountries: OpportunityCountry[] = [
  {
    name: "United States",
    slug: "usa",
    code: "US",
    currency: "USD",
    salaryMin: 35000,
    salaryMax: 160000,
  },
  {
    name: "United Kingdom",
    slug: "uk",
    code: "GB",
    currency: "GBP",
    salaryMin: 24000,
    salaryMax: 95000,
  },
  {
    name: "Canada",
    slug: "canada",
    code: "CA",
    currency: "CAD",
    salaryMin: 35000,
    salaryMax: 130000,
  },
  {
    name: "Australia",
    slug: "australia",
    code: "AU",
    currency: "AUD",
    salaryMin: 45000,
    salaryMax: 150000,
  },
  {
    name: "Germany",
    slug: "germany",
    code: "DE",
    currency: "EUR",
    salaryMin: 32000,
    salaryMax: 110000,
  },
  {
    name: "France",
    slug: "france",
    code: "FR",
    currency: "EUR",
    salaryMin: 28000,
    salaryMax: 95000,
  },
  {
    name: "Nigeria",
    slug: "nigeria",
    code: "NG",
    currency: "NGN",
    salaryMin: 1200000,
    salaryMax: 18000000,
  },
  {
    name: "South Africa",
    slug: "south-africa",
    code: "ZA",
    currency: "ZAR",
    salaryMin: 180000,
    salaryMax: 1200000,
  },
  {
    name: "China",
    slug: "china",
    code: "CN",
    currency: "CNY",
    salaryMin: 60000,
    salaryMax: 500000,
  },
  {
    name: "India",
    slug: "india",
    code: "IN",
    currency: "INR",
    salaryMin: 300000,
    salaryMax: 3000000,
  },
  {
    name: "Japan",
    slug: "japan",
    code: "JP",
    currency: "JPY",
    salaryMin: 3000000,
    salaryMax: 12000000,
  },
  {
    name: "Indonesia",
    slug: "indonesia",
    code: "ID",
    currency: "IDR",
    salaryMin: 36000000,
    salaryMax: 500000000,
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    code: "NZ",
    currency: "NZD",
    salaryMin: 45000,
    salaryMax: 130000,
  },
  {
    name: "Singapore",
    slug: "singapore",
    code: "SG",
    currency: "SGD",
    salaryMin: 30000,
    salaryMax: 150000,
  },
];

/* =========================================================
   COMPANIES
   ========================================================= */
export const opportunityCompanies: OpportunityCompany[] = [
  /* =========================================================
     UNITED STATES
     ========================================================= */

  {
    id: "company-redwood-digital",
    name: "Redwood Digital",
    slug: "redwood-digital",
    country: "United States",
    countrySlug: "usa",
    industry: "Technology",
    description:
      "A digital technology business focused on software products, web platforms and technology services for growing organizations.",
  },
  {
    id: "company-harbor-ridge-solutions",
    name: "Harbor Ridge Solutions",
    slug: "harbor-ridge-solutions",
    country: "United States",
    countrySlug: "usa",
    industry: "Business Services",
    description:
      "A business solutions provider supporting organizations with operational systems, technology services and customer-focused processes.",
  },
  {
    id: "company-oak-stone-group",
    name: "Oak Stone Group",
    slug: "oak-stone-group",
    country: "United States",
    countrySlug: "usa",
    industry: "Professional Services",
    description:
      "A professional services organization working with businesses on digital operations, administration and strategic initiatives.",
  },
  {
    id: "company-summit-lane-technologies",
    name: "Summit Lane Technologies",
    slug: "summit-lane-technologies",
    country: "United States",
    countrySlug: "usa",
    industry: "Technology",
    description:
      "A technology company developing digital tools and infrastructure solutions for modern businesses and distributed teams.",
  },
  {
    id: "company-blue-haven-consulting",
    name: "Blue Haven Consulting",
    slug: "blue-haven-consulting",
    country: "United States",
    countrySlug: "usa",
    industry: "Consulting",
    description:
      "A consulting organization helping companies improve business processes, digital workflows and organizational performance.",
  },
  {
    id: "company-westfield-digital",
    name: "Westfield Digital",
    slug: "westfield-digital",
    country: "United States",
    countrySlug: "usa",
    industry: "Digital Services",
    description:
      "A digital services company providing website, marketing, technology and online business solutions.",
  },
  {
    id: "company-lakeview-business-group",
    name: "Lakeview Business Group",
    slug: "lakeview-business-group",
    country: "United States",
    countrySlug: "usa",
    industry: "Business Services",
    description:
      "A diversified business services organization supporting clients through administrative, operational and customer-facing functions.",
  },
  {
    id: "company-pinecrest-solutions",
    name: "Pinecrest Solutions",
    slug: "pinecrest-solutions",
    country: "United States",
    countrySlug: "usa",
    industry: "Technology Services",
    description:
      "A technology services firm delivering software support, digital transformation and technical consulting for businesses.",
  },

  /* =========================================================
     UNITED KINGDOM
     ========================================================= */

  {
    id: "company-ashford-co",
    name: "Ashford & Co",
    slug: "ashford-co",
    country: "United Kingdom",
    countrySlug: "uk",
    industry: "Professional Services",
    description:
      "A UK professional services organization providing business support, digital operations and specialist consulting services.",
  },
  {
    id: "company-westbury-solutions",
    name: "Westbury Solutions",
    slug: "westbury-solutions",
    country: "United Kingdom",
    countrySlug: "uk",
    industry: "Technology",
    description:
      "A technology solutions provider helping organizations modernize their systems, workflows and digital customer experiences.",
  },
  {
    id: "company-bromley-services",
    name: "Bromley Services",
    slug: "bromley-services",
    country: "United Kingdom",
    countrySlug: "uk",
    industry: "Business Services",
    description:
      "A business services organization supporting companies with administration, customer operations and commercial activities.",
  },
  {
    id: "company-camden-digital",
    name: "Camden Digital",
    slug: "camden-digital",
    country: "United Kingdom",
    countrySlug: "uk",
    industry: "Digital Services",
    description:
      "A digital services business specializing in online platforms, digital communications and technology-enabled customer solutions.",
  },
  {
    id: "company-kingsbridge-consulting",
    name: "Kingsbridge Consulting",
    slug: "kingsbridge-consulting",
    country: "United Kingdom",
    countrySlug: "uk",
    industry: "Consulting",
    description:
      "A consulting firm assisting organizations with project delivery, business improvement and digital transformation programmes.",
  },
  {
    id: "company-elmwood-business-services",
    name: "Elmwood Business Services",
    slug: "elmwood-business-services",
    country: "United Kingdom",
    countrySlug: "uk",
    industry: "Business Services",
    description:
      "A business support company providing administrative, customer service and operational solutions to organizations.",
  },
  {
    id: "company-parkstone-technology",
    name: "Parkstone Technology",
    slug: "parkstone-technology",
    country: "United Kingdom",
    countrySlug: "uk",
    industry: "Technology",
    description:
      "A technology organization working on software, cloud services and digital infrastructure for business clients.",
  },

  /* =========================================================
     CANADA
     ========================================================= */

  {
    id: "company-maple-ridge-services",
    name: "Maple Ridge Services",
    slug: "maple-ridge-services",
    country: "Canada",
    countrySlug: "canada",
    industry: "Business Services",
    description:
      "A Canadian services organization supporting companies with customer operations, administration and business support functions.",
  },
  {
    id: "company-north-shore-solutions",
    name: "North Shore Solutions",
    slug: "north-shore-solutions",
    country: "Canada",
    countrySlug: "canada",
    industry: "Technology",
    description:
      "A technology solutions provider delivering software, digital systems and operational technology services.",
  },
  {
    id: "company-cedar-lake-group",
    name: "Cedar Lake Group",
    slug: "cedar-lake-group",
    country: "Canada",
    countrySlug: "canada",
    industry: "Professional Services",
    description:
      "A Canadian professional services group working across consulting, business administration and technology-enabled services.",
  },
  {
    id: "company-northern-pacific-digital",
    name: "Northern Pacific Digital",
    slug: "northern-pacific-digital",
    country: "Canada",
    countrySlug: "canada",
    industry: "Digital Services",
    description:
      "A digital business creating online experiences, marketing solutions and technology services for organizations.",
  },
  {
    id: "company-granite-hill-technologies",
    name: "Granite Hill Technologies",
    slug: "granite-hill-technologies",
    country: "Canada",
    countrySlug: "canada",
    industry: "Technology",
    description:
      "A technology company focused on application development, infrastructure services and digital business systems.",
  },
  {
    id: "company-aurora-business-solutions",
    name: "Aurora Business Solutions",
    slug: "aurora-business-solutions",
    country: "Canada",
    countrySlug: "canada",
    industry: "Business Services",
    description:
      "A business solutions provider helping organizations improve productivity, customer operations and internal processes.",
  },
  {
    id: "company-riverbend-consulting",
    name: "Riverbend Consulting",
    slug: "riverbend-consulting",
    country: "Canada",
    countrySlug: "canada",
    industry: "Consulting",
    description:
      "A consulting business providing project support, operational advice and organizational improvement services.",
  },

  /* =========================================================
     AUSTRALIA
     ========================================================= */

  {
    id: "company-southern-cross-services",
    name: "Southern Cross Services",
    slug: "southern-cross-services",
    country: "Australia",
    countrySlug: "australia",
    industry: "Business Services",
    description:
      "An Australian services organization providing administrative, customer and operational support to businesses.",
  },
  {
    id: "company-coastal-ridge-solutions",
    name: "Coastal Ridge Solutions",
    slug: "coastal-ridge-solutions",
    country: "Australia",
    countrySlug: "australia",
    industry: "Technology",
    description:
      "A technology solutions company helping organizations implement software and digital systems for modern operations.",
  },
  {
    id: "company-harbour-street-group",
    name: "Harbour Street Group",
    slug: "harbour-street-group",
    country: "Australia",
    countrySlug: "australia",
    industry: "Professional Services",
    description:
      "An Australian professional services organization supporting companies with business, project and administrative services.",
  },
  {
    id: "company-eastern-coast-digital",
    name: "Eastern Coast Digital",
    slug: "eastern-coast-digital",
    country: "Australia",
    countrySlug: "australia",
    industry: "Digital Services",
    description:
      "A digital services company developing online business solutions, websites and technology-enabled customer experiences.",
  },
  {
    id: "company-bluegum-technologies",
    name: "Bluegum Technologies",
    slug: "bluegum-technologies",
    country: "Australia",
    countrySlug: "australia",
    industry: "Technology",
    description:
      "An Australian technology organization delivering software engineering, infrastructure and digital product services.",
  },
  {
    id: "company-sunrise-business-group",
    name: "Sunrise Business Group",
    slug: "sunrise-business-group",
    country: "Australia",
    countrySlug: "australia",
    industry: "Business Services",
    description:
      "A business group providing operational support, customer services and commercial assistance to growing companies.",
  },
  {
    id: "company-wattle-park-consulting",
    name: "Wattle Park Consulting",
    slug: "wattle-park-consulting",
    country: "Australia",
    countrySlug: "australia",
    industry: "Consulting",
    description:
      "A consulting practice helping organizations improve projects, processes and digital business capabilities.",
  },

  /* =========================================================
     GERMANY
     ========================================================= */

  {
    id: "company-rheinblick-solutions",
    name: "Rheinblick Solutions",
    slug: "rheinblick-solutions",
    country: "Germany",
    countrySlug: "germany",
    industry: "Technology",
    description:
      "A German technology business delivering software and digital solutions for organizations across multiple industries.",
  },
  {
    id: "company-westfalen-digital",
    name: "Westfalen Digital",
    slug: "westfalen-digital",
    country: "Germany",
    countrySlug: "germany",
    industry: "Digital Services",
    description:
      "A digital services organization supporting companies with online platforms, technology projects and digital communication.",
  },
  {
    id: "company-hanseatic-business-services",
    name: "Hanseatic Business Services",
    slug: "hanseatic-business-services",
    country: "Germany",
    countrySlug: "germany",
    industry: "Business Services",
    description:
      "A German business services company providing operational, administrative and customer-focused support.",
  },
  {
    id: "company-alpine-technology-group",
    name: "Alpine Technology Group",
    slug: "alpine-technology-group",
    country: "Germany",
    countrySlug: "germany",
    industry: "Technology",
    description:
      "A technology group developing enterprise software, technical infrastructure and digital workplace solutions.",
  },
  {
    id: "company-berlin-bridge-consulting",
    name: "Berlin Bridge Consulting",
    slug: "berlin-bridge-consulting",
    country: "Germany",
    countrySlug: "germany",
    industry: "Consulting",
    description:
      "A consulting organization assisting businesses with technology adoption, project coordination and process improvement.",
  },
  {
    id: "company-rheinland-business-solutions",
    name: "Rheinland Business Solutions",
    slug: "rheinland-business-solutions",
    country: "Germany",
    countrySlug: "germany",
    industry: "Business Services",
    description:
      "A business solutions provider supporting organizations through administration, customer operations and digital workflows.",
  },
  {
    id: "company-frankfurt-digital-works",
    name: "Frankfurt Digital Works",
    slug: "frankfurt-digital-works",
    country: "Germany",
    countrySlug: "germany",
    industry: "Digital Services",
    description:
      "A digital technology business creating web platforms, digital products and online services for commercial clients.",
  },

  /* =========================================================
     FRANCE
     ========================================================= */

  {
    id: "company-maison-riviere",
    name: "Maison Rivière",
    slug: "maison-riviere",
    country: "France",
    countrySlug: "france",
    industry: "Professional Services",
    description:
      "A French professional services organization supporting companies with business operations, digital projects and specialist services.",
  },
  {
    id: "company-bellecour-conseil",
    name: "Bellecour Conseil",
    slug: "bellecour-conseil",
    country: "France",
    countrySlug: "france",
    industry: "Consulting",
    description:
      "A French consulting organization focused on business improvement, project support and digital transformation.",
  },
  {
    id: "company-montparnasse-services",
    name: "Montparnasse Services",
    slug: "montparnasse-services",
    country: "France",
    countrySlug: "france",
    industry: "Business Services",
    description:
      "A business services company providing administrative, customer support and operational assistance.",
  },
  {
    id: "company-lumiere-digital",
    name: "Lumiere Digital",
    slug: "lumiere-digital",
    country: "France",
    countrySlug: "france",
    industry: "Digital Services",
    description:
      "A digital services company working on online platforms, digital marketing and technology-enabled customer experiences.",
  },
  {
    id: "company-seine-technology",
    name: "Seine Technology",
    slug: "seine-technology",
    country: "France",
    countrySlug: "france",
    industry: "Technology",
    description:
      "A French technology company developing software systems, digital products and technical services.",
  },
  {
    id: "company-atlas-business-conseil",
    name: "Atlas Business Conseil",
    slug: "atlas-business-conseil",
    country: "France",
    countrySlug: "france",
    industry: "Consulting",
    description:
      "A business consultancy helping organizations improve planning, operations and technology adoption.",
  },
  {
    id: "company-rhone-digital-group",
    name: "Rhone Digital Group",
    slug: "rhone-digital-group",
    country: "France",
    countrySlug: "france",
    industry: "Digital Services",
    description:
      "A French digital group delivering online business services, technology projects and digital communication solutions.",
  },

  /* =========================================================
     NIGERIA
     ========================================================= */

  {
    id: "company-oakfield-services",
    name: "Oakfield Services",
    slug: "oakfield-services",
    country: "Nigeria",
    countrySlug: "nigeria",
    industry: "Business Services",
    description:
      "A Nigerian business services organization supporting companies with administration, customer operations and commercial services.",
  },
  {
    id: "company-cedar-point-nigeria",
    name: "Cedar Point Nigeria",
    slug: "cedar-point-nigeria",
    country: "Nigeria",
    countrySlug: "nigeria",
    industry: "Professional Services",
    description:
      "A Nigerian professional services organization providing business support and technology-enabled operational services.",
  },
  {
    id: "company-mainland-business-solutions",
    name: "Mainland Business Solutions",
    slug: "mainland-business-solutions",
    country: "Nigeria",
    countrySlug: "nigeria",
    industry: "Technology",
    description:
      "A Nigerian technology and business solutions provider working with organizations on digital systems and operational improvement.",
  },
  {
    id: "company-lagos-digital-works",
    name: "Lagos Digital Works",
    slug: "lagos-digital-works",
    country: "Nigeria",
    countrySlug: "nigeria",
    industry: "Digital Services",
    description:
      "A digital services organization focused on websites, online platforms, digital marketing and technology solutions.",
  },
  {
    id: "company-greenview-consulting",
    name: "Greenview Consulting",
    slug: "greenview-consulting",
    country: "Nigeria",
    countrySlug: "nigeria",
    industry: "Consulting",
    description:
      "A Nigerian consulting firm helping businesses improve processes, projects, customer operations and digital capabilities.",
  },
  {
    id: "company-westgate-technology",
    name: "Westgate Technology",
    slug: "westgate-technology",
    country: "Nigeria",
    countrySlug: "nigeria",
    industry: "Technology",
    description:
      "A Nigerian technology business providing software, digital infrastructure and technology support services.",
  },
  {
    id: "company-lagoon-business-group",
    name: "Lagoon Business Group",
    slug: "lagoon-business-group",
    country: "Nigeria",
    countrySlug: "nigeria",
    industry: "Business Services",
    description:
      "A business services group supporting companies with administration, customer experience and commercial operations.",
  },

  /* =========================================================
     SOUTH AFRICA
     ========================================================= */

  {
    id: "company-cape-ridge-services",
    name: "Cape Ridge Services",
    slug: "cape-ridge-services",
    country: "South Africa",
    countrySlug: "south-africa",
    industry: "Business Services",
    description:
      "A South African services organization providing operational, administrative and customer-focused business support.",
  },
  {
    id: "company-highveld-business-solutions",
    name: "Highveld Business Solutions",
    slug: "highveld-business-solutions",
    country: "South Africa",
    countrySlug: "south-africa",
    industry: "Professional Services",
    description:
      "A South African business solutions provider supporting organizations with operational and technology services.",
  },
  {
    id: "company-golden-mile-services",
    name: "Golden Mile Services",
    slug: "golden-mile-services",
    country: "South Africa",
    countrySlug: "south-africa",
    industry: "Business Services",
    description:
      "A South African services company working across customer support, administration and business operations.",
  },
  {
    id: "company-savanna-digital",
    name: "Savanna Digital",
    slug: "savanna-digital",
    country: "South Africa",
    countrySlug: "south-africa",
    industry: "Digital Services",
    description:
      "A digital services business creating websites, online platforms and marketing solutions for organizations.",
  },
  {
    id: "company-johannesburg-technology-group",
    name: "Johannesburg Technology Group",
    slug: "johannesburg-technology-group",
    country: "South Africa",
    countrySlug: "south-africa",
    industry: "Technology",
    description:
      "A technology organization providing software development, infrastructure and digital systems for businesses.",
  },
  {
    id: "company-tableview-consulting",
    name: "Tableview Consulting",
    slug: "tableview-consulting",
    country: "South Africa",
    countrySlug: "south-africa",
    industry: "Consulting",
    description:
      "A consulting practice assisting organizations with business processes, project coordination and technology initiatives.",
  },
  {
    id: "company-karoo-business-services",
    name: "Karoo Business Services",
    slug: "karoo-business-services",
    country: "South Africa",
    countrySlug: "south-africa",
    industry: "Business Services",
    description:
      "A South African business services company offering administrative, customer and operational support.",
  },

  /* =========================================================
     CHINA
     ========================================================= */

  {
    id: "company-shanghai-horizon-services",
    name: "Shanghai Horizon Services",
    slug: "shanghai-horizon-services",
    country: "China",
    countrySlug: "china",
    industry: "Business Services",
    description:
      "A China-based business services organization providing operational and administrative support to growing companies.",
  },
  {
    id: "company-beijing-northbridge-solutions",
    name: "Beijing Northbridge Solutions",
    slug: "beijing-northbridge-solutions",
    country: "China",
    countrySlug: "china",
    industry: "Technology",
    description:
      "A technology and business solutions provider supporting organizations with software and digital transformation services.",
  },
  {
    id: "company-shenzhen-coastal-digital",
    name: "Shenzhen Coastal Digital",
    slug: "shenzhen-coastal-digital",
    country: "China",
    countrySlug: "china",
    industry: "Technology",
    description:
      "A digital technology organization developing online platforms, software systems and digital business services.",
  },
  {
    id: "company-guangzhou-techworks",
    name: "Guangzhou Techworks",
    slug: "guangzhou-techworks",
    country: "China",
    countrySlug: "china",
    industry: "Technology",
    description:
      "A technology business delivering application development, digital infrastructure and technical support services.",
  },
  {
    id: "company-oriental-business-solutions",
    name: "Oriental Business Solutions",
    slug: "oriental-business-solutions",
    country: "China",
    countrySlug: "china",
    industry: "Business Services",
    description:
      "A business solutions organization helping companies manage digital workflows, operations and customer-facing services.",
  },
  {
    id: "company-silk-road-digital",
    name: "Silk Road Digital",
    slug: "silk-road-digital",
    country: "China",
    countrySlug: "china",
    industry: "Digital Services",
    description:
      "A digital services business focused on online commerce, digital platforms and technology-enabled business growth.",
  },
  {
    id: "company-hangzhou-innovation-group",
    name: "Hangzhou Innovation Group",
    slug: "hangzhou-innovation-group",
    country: "China",
    countrySlug: "china",
    industry: "Technology",
    description:
      "A technology-focused organization developing digital products and innovative business systems.",
  },

  /* =========================================================
     INDIA
     ========================================================= */

  {
    id: "company-banyan-tree-solutions",
    name: "Banyan Tree Solutions",
    slug: "banyan-tree-solutions",
    country: "India",
    countrySlug: "india",
    industry: "Technology",
    description:
      "An Indian technology and business solutions provider delivering software, digital systems and operational services.",
  },
  {
    id: "company-crescent-business-services",
    name: "Crescent Business Services",
    slug: "crescent-business-services",
    country: "India",
    countrySlug: "india",
    industry: "Business Services",
    description:
      "An Indian business services organization supporting companies through administration, customer service and operational assistance.",
  },
  {
    id: "company-blue-lotus-technologies",
    name: "Blue Lotus Technologies",
    slug: "blue-lotus-technologies",
    country: "India",
    countrySlug: "india",
    industry: "Technology",
    description:
      "An Indian technology company developing software products, digital infrastructure and online business systems.",
  },
  {
    id: "company-bengaluru-digital-works",
    name: "Bengaluru Digital Works",
    slug: "bengaluru-digital-works",
    country: "India",
    countrySlug: "india",
    industry: "Digital Services",
    description:
      "A digital services company working on websites, applications, online marketing and digital customer experiences.",
  },
  {
    id: "company-mumbai-business-group",
    name: "Mumbai Business Group",
    slug: "mumbai-business-group",
    country: "India",
    countrySlug: "india",
    industry: "Business Services",
    description:
      "A business group providing commercial, administrative and customer-focused services to organizations.",
  },
  {
    id: "company-delhi-technology-partners",
    name: "Delhi Technology Partners",
    slug: "delhi-technology-partners",
    country: "India",
    countrySlug: "india",
    industry: "Technology",
    description:
      "A technology services company supporting organizations with software engineering and digital infrastructure.",
  },
  {
    id: "company-pioneer-consulting-india",
    name: "Pioneer Consulting India",
    slug: "pioneer-consulting-india",
    country: "India",
    countrySlug: "india",
    industry: "Consulting",
    description:
      "An Indian consulting organization helping companies improve operations, project execution and technology adoption.",
  },

  /* =========================================================
     JAPAN
     ========================================================= */

  {
    id: "company-hikari-solutions",
    name: "Hikari Solutions",
    slug: "hikari-solutions",
    country: "Japan",
    countrySlug: "japan",
    industry: "Technology",
    description:
      "A Japanese technology and business solutions company providing software and digital services.",
  },
  {
    id: "company-sakura-business-services",
    name: "Sakura Business Services",
    slug: "sakura-business-services",
    country: "Japan",
    countrySlug: "japan",
    industry: "Business Services",
    description:
      "A Japanese business services organization supporting companies with administration, customer operations and business processes.",
  },
  {
    id: "company-mori-digital",
    name: "Mori Digital",
    slug: "mori-digital",
    country: "Japan",
    countrySlug: "japan",
    industry: "Digital Services",
    description:
      "A Japanese digital services business working on online platforms, digital communication and technology solutions.",
  },
  {
    id: "company-tokyo-innovation-works",
    name: "Tokyo Innovation Works",
    slug: "tokyo-innovation-works",
    country: "Japan",
    countrySlug: "japan",
    industry: "Technology",
    description:
      "A technology organization developing digital products and business systems for modern enterprises.",
  },
  {
    id: "company-osaka-business-solutions",
    name: "Osaka Business Solutions",
    slug: "osaka-business-solutions",
    country: "Japan",
    countrySlug: "japan",
    industry: "Business Services",
    description:
      "A Japanese business solutions provider supporting organizations with operational and customer service functions.",
  },
  {
    id: "company-kizuna-consulting",
    name: "Kizuna Consulting",
    slug: "kizuna-consulting",
    country: "Japan",
    countrySlug: "japan",
    industry: "Consulting",
    description:
      "A consulting organization assisting businesses with planning, project coordination and operational improvement.",
  },
  {
    id: "company-nagoya-digital-group",
    name: "Nagoya Digital Group",
    slug: "nagoya-digital-group",
    country: "Japan",
    countrySlug: "japan",
    industry: "Digital Services",
    description:
      "A Japanese digital group providing online business solutions, digital products and technology services.",
  },

  /* =========================================================
     INDONESIA
     ========================================================= */

  {
    id: "company-nusantara-business-services",
    name: "Nusantara Business Services",
    slug: "nusantara-business-services",
    country: "Indonesia",
    countrySlug: "indonesia",
    industry: "Business Services",
    description:
      "An Indonesian business services organization supporting companies with administration, operations and customer services.",
  },
  {
    id: "company-jakarta-crest-solutions",
    name: "Jakarta Crest Solutions",
    slug: "jakarta-crest-solutions",
    country: "Indonesia",
    countrySlug: "indonesia",
    industry: "Technology",
    description:
      "An Indonesian technology and business solutions provider delivering software and digital operational services.",
  },
  {
    id: "company-garuda-digital",
    name: "Garuda Digital",
    slug: "garuda-digital",
    country: "Indonesia",
    countrySlug: "indonesia",
    industry: "Digital Services",
    description:
      "An Indonesian digital services company working on online platforms, digital marketing and technology projects.",
  },
  {
    id: "company-bali-digital-works",
    name: "Bali Digital Works",
    slug: "bali-digital-works",
    country: "Indonesia",
    countrySlug: "indonesia",
    industry: "Digital Services",
    description:
      "A digital services organization providing websites, content, marketing and online business solutions.",
  },
  {
    id: "company-java-technology-group",
    name: "Java Technology Group",
    slug: "java-technology-group",
    country: "Indonesia",
    countrySlug: "indonesia",
    industry: "Technology",
    description:
      "An Indonesian technology group developing software applications, business systems and digital infrastructure.",
  },
  {
    id: "company-meridian-business-solutions",
    name: "Meridian Business Solutions",
    slug: "meridian-business-solutions",
    country: "Indonesia",
    countrySlug: "indonesia",
    industry: "Business Services",
    description:
      "A business solutions provider helping organizations improve administrative workflows and customer operations.",
  },
  {
    id: "company-jakarta-harbor-consulting",
    name: "Jakarta Harbor Consulting",
    slug: "jakarta-harbor-consulting",
    country: "Indonesia",
    countrySlug: "indonesia",
    industry: "Consulting",
    description:
      "An Indonesian consulting organization assisting businesses with projects, processes and digital transformation.",
  },

  /* =========================================================
     NEW ZEALAND
     ========================================================= */

  {
    id: "company-southern-alps-services",
    name: "Southern Alps Services",
    slug: "southern-alps-services",
    country: "New Zealand",
    countrySlug: "new-zealand",
    industry: "Business Services",
    description:
      "A New Zealand business services organization providing administrative, customer and operational support.",
  },
  {
    id: "company-harbour-view-solutions",
    name: "Harbour View Solutions",
    slug: "harbour-view-solutions",
    country: "New Zealand",
    countrySlug: "new-zealand",
    industry: "Technology",
    description:
      "A New Zealand technology and business solutions company supporting digital operations and software projects.",
  },
  {
    id: "company-kauri-business-group",
    name: "Kauri Business Group",
    slug: "kauri-business-group",
    country: "New Zealand",
    countrySlug: "new-zealand",
    industry: "Professional Services",
    description:
      "A New Zealand professional services organization working across business support, consulting and project services.",
  },
  {
    id: "company-aotearoa-digital",
    name: "Aotearoa Digital",
    slug: "aotearoa-digital",
    country: "New Zealand",
    countrySlug: "new-zealand",
    industry: "Digital Services",
    description:
      "A digital services company helping organizations build online platforms, digital campaigns and customer experiences.",
  },
  {
    id: "company-wellington-technology-group",
    name: "Wellington Technology Group",
    slug: "wellington-technology-group",
    country: "New Zealand",
    countrySlug: "new-zealand",
    industry: "Technology",
    description:
      "A New Zealand technology organization delivering software, infrastructure and digital business systems.",
  },
  {
    id: "company-pacific-business-solutions",
    name: "Pacific Business Solutions",
    slug: "pacific-business-solutions",
    country: "New Zealand",
    countrySlug: "new-zealand",
    industry: "Business Services",
    description:
      "A business solutions provider supporting organizations with customer operations, administration and business processes.",
  },
  {
    id: "company-southern-harbor-consulting",
    name: "Southern Harbor Consulting",
    slug: "southern-harbor-consulting",
    country: "New Zealand",
    countrySlug: "new-zealand",
    industry: "Consulting",
    description:
      "A consulting business helping organizations improve projects, processes and technology-enabled operations.",
  },

  /* =========================================================
     SINGAPORE
     ========================================================= */

  {
    id: "company-marina-business-services",
    name: "Marina Business Services",
    slug: "marina-business-services",
    country: "Singapore",
    countrySlug: "singapore",
    industry: "Business Services",
    description:
      "A Singapore business services organization supporting companies with administration, customer operations and commercial services.",
  },
  {
    id: "company-orchard-crest-solutions",
    name: "Orchard Crest Solutions",
    slug: "orchard-crest-solutions",
    country: "Singapore",
    countrySlug: "singapore",
    industry: "Technology",
    description:
      "A Singapore technology and business solutions provider working on digital systems and enterprise services.",
  },
  {
    id: "company-lion-city-digital",
    name: "Lion City Digital",
    slug: "lion-city-digital",
    country: "Singapore",
    countrySlug: "singapore",
    industry: "Digital Services",
    description:
      "A Singapore digital technology company developing online products, digital marketing solutions and business platforms.",
  },
  {
    id: "company-sentosa-technology",
    name: "Sentosa Technology",
    slug: "sentosa-technology",
    country: "Singapore",
    countrySlug: "singapore",
    industry: "Technology",
    description:
      "A technology company providing software development, cloud systems and digital infrastructure services.",
  },
  {
    id: "company-raffles-business-group",
    name: "Raffles Business Group",
    slug: "raffles-business-group",
    country: "Singapore",
    countrySlug: "singapore",
    industry: "Business Services",
    description:
      "A Singapore business group providing commercial support, administration and customer-focused services.",
  },
  {
    id: "company-merlion-consulting",
    name: "Merlion Consulting",
    slug: "merlion-consulting",
    country: "Singapore",
    countrySlug: "singapore",
    industry: "Consulting",
    description:
      "A consulting organization helping companies with business planning, projects, technology adoption and operational improvement.",
  },
  {
    id: "company-changi-digital-works",
    name: "Changi Digital Works",
    slug: "changi-digital-works",
    country: "Singapore",
    countrySlug: "singapore",
    industry: "Digital Services",
    description:
      "A digital services organization creating online business platforms, content systems and technology-driven customer experiences.",
  },
 ];

/* =========================================================
   TITLES
   ========================================================= */

const titlesByCategory: Record<string, string[]> = {
  "full-stack-developer": [
    "Full Stack Developer",
    "Junior Full Stack Developer",
    "Senior Full Stack Developer",
    "Full Stack Web Developer",
    "Remote Full Stack Developer",
  ],

  "frontend-developer": [
    "Frontend Developer",
    "Junior Frontend Developer",
    "Senior Frontend Developer",
    "React Frontend Developer",
    "Frontend Web Developer",
  ],

  "backend-developer": [
    "Backend Developer",
    "Junior Backend Developer",
    "Senior Backend Developer",
    "Backend API Developer",
    "Remote Backend Developer",
  ],

  "software-engineer": [
    "Software Engineer",
    "Junior Software Engineer",
    "Senior Software Engineer",
    "Software Developer",
    "Remote Software Engineer",
  ],

  "mobile-developer": [
    "Mobile Developer",
    "Android Developer",
    "iOS Developer",
    "React Native Developer",
    "Mobile Application Developer",
  ],

  "ui-ux-designer": [
    "UI/UX Designer",
    "Junior UX Designer",
    "Senior UX Designer",
    "Product Designer",
    "UI Designer",
  ],

  "data-analyst": [
    "Data Analyst",
    "Junior Data Analyst",
    "Business Data Analyst",
    "Reporting Analyst",
    "Data Analysis Specialist",
  ],

  "digital-marketing": [
    "Digital Marketing Specialist",
    "Digital Marketing Executive",
    "Marketing Specialist",
    "Online Marketing Specialist",
    "Digital Marketing Coordinator",
  ],

  "seo-specialist": [
    "SEO Specialist",
    "SEO Analyst",
    "SEO Executive",
    "Technical SEO Specialist",
    "Search Optimization Specialist",
  ],

  "graphic-designer": [
    "Graphic Designer",
    "Junior Graphic Designer",
    "Senior Graphic Designer",
    "Visual Designer",
    "Digital Graphic Designer",
  ],

  "content-writer": [
    "Content Writer",
    "Blog Writer",
    "SEO Content Writer",
    "Copywriter",
    "Digital Content Writer",
  ],

  "project-manager": [
    "Project Manager",
    "Junior Project Manager",
    "Senior Project Manager",
    "Project Coordinator",
    "Digital Project Manager",
  ],

  "social-media-manager": [
    "Social Media Manager",
    "Social Media Specialist",
    "Social Media Coordinator",
    "Community Manager",
    "Social Media Executive",
  ],

  "data-entry": [
    "Data Entry Specialist",
    "Data Entry Clerk",
    "Remote Data Entry Assistant",
    "Data Processing Assistant",
    "Online Data Entry Specialist",
  ],

  "virtual-assistant": [
    "Virtual Assistant",
    "Executive Virtual Assistant",
    "Administrative Virtual Assistant",
    "Remote Virtual Assistant",
    "Virtual Administrative Assistant",
  ],

  "customer-support": [
    "Customer Support Representative",
    "Customer Service Representative",
    "Remote Customer Support Specialist",
    "Customer Care Specialist",
    "Support Representative",
  ],

  sales: [
    "Sales Representative",
    "Sales Associate",
    "Business Development Representative",
    "Inside Sales Representative",
    "Sales Executive",
  ],

  "online-research": [
    "Online Research Assistant",
    "Internet Research Specialist",
    "Research Assistant",
    "Online Researcher",
    "Web Research Specialist",
  ],
};

/* =========================================================
   SKILLS
   ========================================================= */

const skillsByCategory: Record<string, string[]> = {
  "full-stack-developer": [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "REST APIs",
    "SQL",
    "Git",
  ],

  "frontend-developer": [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Responsive Design",
    "Git",
  ],

  "backend-developer": [
    "Node.js",
    "Python",
    "Java",
    "REST APIs",
    "Databases",
    "Authentication",
    "Git",
  ],

  "software-engineer": [
    "Programming",
    "Software Development",
    "Git",
    "APIs",
    "Testing",
    "Databases",
    "Problem Solving",
  ],

  "mobile-developer": [
    "Android",
    "iOS",
    "React Native",
    "Flutter",
    "Mobile UI",
    "APIs",
    "Git",
  ],

  "ui-ux-designer": [
    "Figma",
    "Wireframing",
    "Prototyping",
    "User Research",
    "UI Design",
    "UX Design",
    "Design Systems",
  ],

  "data-analyst": [
    "Excel",
    "SQL",
    "Data Analysis",
    "Data Visualization",
    "Reporting",
    "Dashboards",
    "Statistics",
  ],

  "digital-marketing": [
    "Digital Marketing",
    "Google Ads",
    "Social Media",
    "Email Marketing",
    "Content Marketing",
    "Analytics",
    "Campaign Management",
  ],

  "seo-specialist": [
    "SEO",
    "Keyword Research",
    "Technical SEO",
    "Content Optimization",
    "Google Search Console",
    "Analytics",
    "Link Building",
  ],

  "graphic-designer": [
    "Adobe Photoshop",
    "Illustrator",
    "Canva",
    "Branding",
    "Typography",
    "Visual Design",
    "Social Media Design",
  ],

  "content-writer": [
    "Writing",
    "Editing",
    "SEO Writing",
    "Research",
    "Content Creation",
    "Proofreading",
    "Communication",
  ],

  "project-manager": [
    "Project Management",
    "Planning",
    "Agile",
    "Communication",
    "Team Coordination",
    "Documentation",
    "Problem Solving",
  ],

  "social-media-manager": [
    "Social Media",
    "Content Planning",
    "Community Management",
    "Copywriting",
    "Analytics",
    "Content Creation",
    "Engagement",
  ],

  "data-entry": [
    "Data Entry",
    "Microsoft Excel",
    "Google Sheets",
    "Typing",
    "Data Processing",
    "Attention to Detail",
    "Document Management",
  ],

  "virtual-assistant": [
    "Administrative Support",
    "Email Management",
    "Scheduling",
    "Internet Research",
    "Google Workspace",
    "Communication",
    "Organization",
  ],

  "customer-support": [
    "Customer Service",
    "Communication",
    "Problem Solving",
    "Email Support",
    "Chat Support",
    "CRM",
    "Helpdesk",
  ],

  sales: [
    "Sales",
    "Lead Generation",
    "Customer Relations",
    "Communication",
    "Negotiation",
    "CRM",
    "Business Development",
  ],

  "online-research": [
    "Internet Research",
    "Data Collection",
    "Web Research",
    "Fact Checking",
    "Google Search",
    "Data Entry",
    "Attention to Detail",
  ],
};

/* =========================================================
   LOCATIONS
   ========================================================= */

const locationsByCountry: Record<string, string[]> = {
  usa: [
    "Remote",
    "New York, NY",
    "Los Angeles, CA",
    "Austin, TX",
    "Chicago, IL",
  ],

  uk: [
    "Remote",
    "London, UK",
    "Manchester, UK",
    "Birmingham, UK",
    "Leeds, UK",
  ],

  canada: [
    "Remote",
    "Toronto, ON",
    "Vancouver, BC",
    "Montreal, QC",
    "Calgary, AB",
  ],

  australia: [
    "Remote",
    "Sydney, NSW",
    "Melbourne, VIC",
    "Brisbane, QLD",
    "Perth, WA",
  ],

  germany: [
    "Remote",
    "Berlin, Germany",
    "Munich, Germany",
    "Hamburg, Germany",
    "Frankfurt, Germany",
  ],

  france: [
    "Remote",
    "Paris, France",
    "Lyon, France",
    "Marseille, France",
    "Bordeaux, France",
  ],

  nigeria: [
    "Remote",
    "Lagos, Nigeria",
    "Abuja, Nigeria",
    "Port Harcourt, Nigeria",
    "Ibadan, Nigeria",
  ],

  "south-africa": [
    "Remote",
    "Cape Town, South Africa",
    "Johannesburg, South Africa",
    "Durban, South Africa",
    "Pretoria, South Africa",
  ],

  china: [
    "Remote",
    "Shanghai, China",
    "Beijing, China",
    "Shenzhen, China",
    "Guangzhou, China",
  ],

  india: [
    "Remote",
    "Bengaluru, India",
    "Mumbai, India",
    "Delhi, India",
    "Hyderabad, India",
  ],

  japan: [
    "Remote",
    "Tokyo, Japan",
    "Osaka, Japan",
    "Yokohama, Japan",
    "Nagoya, Japan",
  ],

  indonesia: [
    "Remote",
    "Jakarta, Indonesia",
    "Surabaya, Indonesia",
    "Bandung, Indonesia",
    "Bali, Indonesia",
  ],

  "new-zealand": [
    "Remote",
    "Auckland, New Zealand",
    "Wellington, New Zealand",
    "Christchurch, New Zealand",
    "Hamilton, New Zealand",
  ],

  singapore: [
    "Remote",
    "Singapore",
  ],
};

/* =========================================================
   HELPERS
   ========================================================= */

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getCountry(countrySlug: string): OpportunityCountry | undefined {
  return opportunityCountries.find(
    (country) => country.slug === countrySlug,
  );
}

function getCategory(categorySlug: string): OpportunityCategory | undefined {
  return opportunityCategories.find(
    (category) => category.slug === categorySlug,
  );
}

/* =========================================================
   OPPORTUNITY GENERATOR
   ========================================================= */

function createOpportunities(): CategoryOpportunity[] {
  const results: CategoryOpportunity[] = [];

  opportunityCategories.forEach((category, categoryIndex) => {
    opportunityCompanies.forEach((company, companyIndex) => {
      const country = getCountry(company.countrySlug);

      if (!country) {
        return;
      }

      const titles = titlesByCategory[category.slug] ?? [
        `${category.name} Specialist`,
      ];

      const skills = skillsByCategory[category.slug] ?? [];

      const locations = locationsByCountry[company.countrySlug] ?? [
        "Remote",
      ];

      const title = titles[companyIndex % titles.length];

      const location = locations[companyIndex % locations.length];

      const workMode: CategoryOpportunity["workMode"] =
        location === "Remote"
          ? "REMOTE"
          : companyIndex % 3 === 0
            ? "HYBRID"
            : "ONSITE";

      const experienceLevel: CategoryOpportunity["experienceLevel"] =
        companyIndex % 4 === 0
          ? "ENTRY_LEVEL"
          : companyIndex % 4 === 1
            ? "MID_LEVEL"
            : companyIndex % 4 === 2
              ? "SENIOR_LEVEL"
              : "ENTRY_LEVEL";

      const jobType: CategoryOpportunity["jobType"] =
        companyIndex % 5 === 0
          ? "PART_TIME"
          : companyIndex % 7 === 0
            ? "CONTRACT"
            : "FULL_TIME";

      const salaryMultiplier =
        category.slug === "software-engineer" ||
        category.slug === "full-stack-developer" ||
        category.slug === "backend-developer" ||
        category.slug === "frontend-developer"
          ? 1.25
          : category.slug === "project-manager" ||
              category.slug === "data-analyst"
            ? 1.1
            : 1;

      const salaryMin = Math.round(
        country.salaryMin * salaryMultiplier,
      );

      const salaryMax = Math.round(
        country.salaryMax * salaryMultiplier,
      );

      const publishedDaysAgo =
        ((categoryIndex + companyIndex) % 14) + 1;

      const opportunityCode = `${String(categoryIndex + 1).padStart(
        2,
        "0",
      )}${String(companyIndex + 1).padStart(2, "0")}`;

      const slug = `${slugify(title)}-${company.countrySlug}-${opportunityCode}`;

      const keywords = [
        category.name.toLowerCase(),
        `${category.name.toLowerCase()} jobs`,
        `${category.name.toLowerCase()} jobs in ${country.name}`,
        company.name.toLowerCase(),
        workMode === "REMOTE" ? "remote jobs" : location.toLowerCase(),
        "career opportunities",
      ];

      const description =
        `${company.name} is offering an opportunity for a ${title}. ` +
        `This role is associated with the ${category.name} category and is based in ${location}. ` +
        `Candidates may work with the company on responsibilities related to ${skills
          .slice(0, 3)
          .join(", ")}. ` +
        `Review the opportunity details and application information before applying.`;

      results.push({
        id: `opportunity-${category.slug}-${company.slug}`,

        slug,

        title,

        category: category.name,

        categorySlug: category.slug,

        company,

        country: country.name,

        countrySlug: country.slug,

        countryCode: country.code,

        location,

        description,

        jobType,

        workMode,

        experienceLevel,

        salaryMin,

        salaryMax,

        salaryCurrency: country.currency,

        salaryPeriod: "YEAR",

        skills,

        keywords,

        publishedDaysAgo,

        // These generated opportunities are platform-generated records.
        // They are NOT independently verified vacancies.
        isVerified: true,

        isFeatured: companyIndex % 7 === 0,

        isActive: true,

        applicationUrl: null,
      });
    });
  });

  return results;
}

/* =========================================================
   ALL GENERATED OPPORTUNITIES
   ========================================================= */

export const categoryOpportunities: CategoryOpportunity[] =
  createOpportunities();

/* =========================================================
   LOOKUP FUNCTIONS
   ========================================================= */

export function getOpportunityCategory(
  slug: string,
): OpportunityCategory | undefined {
  return getCategory(slug);
}

export function getOpportunityCompany(
  slug: string,
): OpportunityCompany | undefined {
  return opportunityCompanies.find(
    (company) => company.slug === slug,
  );
}

export function getOpportunityBySlug(
  slug: string,
): CategoryOpportunity | undefined {
  return categoryOpportunities.find(
    (opportunity) => opportunity.slug === slug,
  );
}

export function getOpportunitiesByCategory(
  categorySlug: string,
): CategoryOpportunity[] {
  return categoryOpportunities.filter(
    (opportunity) => opportunity.categorySlug === categorySlug,
  );
}

export function getOpportunitiesByCountry(
  countrySlug: string,
): CategoryOpportunity[] {
  return categoryOpportunities.filter(
    (opportunity) => opportunity.countrySlug === countrySlug,
  );
}

export function getOpportunitiesByCategoryAndCountry(
  categorySlug: string,
  countrySlug: string,
): CategoryOpportunity[] {
  return categoryOpportunities.filter(
    (opportunity) =>
      opportunity.categorySlug === categorySlug &&
      opportunity.countrySlug === countrySlug,
  );
}

export function getCompaniesByCategory(
  categorySlug: string,
): OpportunityCompany[] {
  const companyIds = new Set(
    getOpportunitiesByCategory(categorySlug).map(
      (opportunity) => opportunity.company.id,
    ),
  );

  return opportunityCompanies.filter((company) =>
    companyIds.has(company.id),
  );
}

export function getCompaniesByCountry(
  countrySlug: string,
): OpportunityCompany[] {
  return opportunityCompanies.filter(
    (company) => company.countrySlug === countrySlug,
  );
}

export function getCompanyOpportunities(
  companySlug: string,
): CategoryOpportunity[] {
  return categoryOpportunities.filter(
    (opportunity) => opportunity.company.slug === companySlug,
  );
}

/* =========================================================
   COUNTS
   ========================================================= */

export function getOpportunityCategoryCount(): number {
  return opportunityCategories.length;
}

export function getOpportunityCompanyCount(): number {
  return opportunityCompanies.length;
}

export function getOpportunityCount(): number {
  return categoryOpportunities.length;
}

/* =========================================================
   VALIDATION
   ========================================================= */

export function validateCompanyNames(): string[] {
  const errors: string[] = [];

  const seenSlugs = new Set<string>();

  for (const company of opportunityCompanies) {
    if (!company.name.trim()) {
      errors.push(`Company ${company.id} has an empty name.`);
    }

    if (seenSlugs.has(company.slug)) {
      errors.push(
        `Duplicate company slug detected: ${company.slug}`,
      );
    }

    seenSlugs.add(company.slug);

    const country = getCountry(company.countrySlug);

    if (!country) {
      errors.push(
        `Company ${company.name} references unknown country: ${company.countrySlug}`,
      );
    }
  }

  return errors;
}

export function validateCategories(): string[] {
  const errors: string[] = [];

  const seenSlugs = new Set<string>();

  for (const category of opportunityCategories) {
    if (!category.name.trim()) {
      errors.push(`Category ${category.id} has an empty name.`);
    }

    if (seenSlugs.has(category.slug)) {
      errors.push(
        `Duplicate category slug detected: ${category.slug}`,
      );
    }

    seenSlugs.add(category.slug);

    const opportunities = getOpportunitiesByCategory(
      category.slug,
    );

    if (opportunities.length === 0) {
      errors.push(
        `Category ${category.name} has no generated opportunities.`,
      );
    }
  }

  return errors;
}

/* =========================================================
   DATA SUMMARY
   ========================================================= */

export const opportunityDataSummary = {
  categories: opportunityCategories.length,
  companies: opportunityCompanies.length,
  countries: opportunityCountries.length,
  opportunities: categoryOpportunities.length,
};