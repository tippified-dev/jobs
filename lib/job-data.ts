export type JobType =
  | "FULL_TIME"
  | "PART_TIME"
  | "CONTRACT"
  | "FREELANCE"
  | "TEMPORARY"
  | "INTERNSHIP";

export type WorkMode =
  | "REMOTE"
  | "HYBRID"
  | "ONSITE";

export type ExperienceLevel =
  | "NO_EXPERIENCE"
  | "ENTRY_LEVEL"
  | "MID_LEVEL"
  | "SENIOR_LEVEL"
  | "EXECUTIVE";

export type JobCountry = {
  name: string;
  slug: string;
  code: string;
};

export type JobCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  keywords: string[];
};

export type JobCompany = {
  id: string;
  name: string;
  slug: string;
  country: string;
};

export type Job = {
  id: string;
  title: string;
  slug: string;

  company: JobCompany;

  description: string;

  category: string;
  categorySlug: string;

  country: string;
  countrySlug: string;
  countryCode: string;

  location: string;

  jobType: JobType;
  workMode: WorkMode;
  experienceLevel: ExperienceLevel;

  salaryMin: number | null;
  salaryMax: number | null;
  salaryCurrency: string | null;
  salaryPeriod: "YEAR" | "MONTH" | "HOUR" | null;

  skills: string[];
  keywords: string[];

  applicationUrl: string | null;
  sourceUrl: string | null;
  sourceName: string | null;

  isVerified: boolean;
  isFeatured: boolean;
  isActive: boolean;

  publishedAt: string;
  expiresAt: string | null;
};

/* =========================================================
   COUNTRIES
========================================================= */

export const jobCountries: JobCountry[] = [
  {
    name: "United States",
    slug: "usa",
    code: "US",
  },
  {
    name: "United Kingdom",
    slug: "uk",
    code: "GB",
  },
  {
    name: "Canada",
    slug: "canada",
    code: "CA",
  },
  {
    name: "Australia",
    slug: "australia",
    code: "AU",
  },
  {
    name: "Germany",
    slug: "germany",
    code: "DE",
  },
  {
    name: "France",
    slug: "france",
    code: "FR",
  },
  {
    name: "Nigeria",
    slug: "nigeria",
    code: "NG",
  },
  {
    name: "South Africa",
    slug: "south-africa",
    code: "ZA",
  },
  {
    name: "China",
    slug: "china",
    code: "CN",
  },
  {
    name: "India",
    slug: "india",
    code: "IN",
  },
  {
    name: "Japan",
    slug: "japan",
    code: "JP",
  },
  {
    name: "Indonesia",
    slug: "indonesia",
    code: "ID",
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    code: "NZ",
  },
  {
    name: "Singapore",
    slug: "singapore",
    code: "SG",
  },
];

/* =========================================================
   CATEGORIES
========================================================= */

export const jobCategories: JobCategory[] = [
  {
    id: "software-development",
    name: "Software Development",
    slug: "software-development",
    description:
      "Software development jobs including frontend, backend, full stack, mobile and application development.",
    keywords: [
      "software developer",
      "software engineer",
      "web developer",
      "programmer",
      "application developer",
      "coding",
    ],
  },

  {
    id: "frontend-development",
    name: "Frontend Development",
    slug: "frontend-development",
    description:
      "Frontend development jobs involving modern web interfaces, JavaScript, React, Next.js and related technologies.",
    keywords: [
      "frontend developer",
      "front end developer",
      "react developer",
      "javascript developer",
      "web developer",
      "ui developer",
    ],
  },

  {
    id: "backend-development",
    name: "Backend Development",
    slug: "backend-development",
    description:
      "Backend development jobs involving APIs, databases, cloud services and server-side applications.",
    keywords: [
      "backend developer",
      "back end developer",
      "api developer",
      "node developer",
      "python developer",
      "server developer",
    ],
  },

  {
    id: "full-stack-development",
    name: "Full Stack Development",
    slug: "full-stack-development",
    description:
      "Full stack developer jobs covering frontend, backend, APIs, databases and complete web applications.",
    keywords: [
      "full stack developer",
      "fullstack developer",
      "web developer",
      "software engineer",
      "react developer",
      "node developer",
    ],
  },

  {
    id: "mobile-development",
    name: "Mobile Development",
    slug: "mobile-development",
    description:
      "Mobile application development jobs for Android, iOS, React Native and Flutter developers.",
    keywords: [
      "mobile developer",
      "android developer",
      "ios developer",
      "react native developer",
      "flutter developer",
    ],
  },

  {
    id: "data-entry",
    name: "Data Entry",
    slug: "data-entry",
    description:
      "Data entry, typing, data processing and online administrative opportunities.",
    keywords: [
      "data entry",
      "data entry clerk",
      "typing",
      "data processing",
      "online typing",
      "virtual data entry",
    ],
  },

  {
    id: "customer-service",
    name: "Customer Service",
    slug: "customer-service",
    description:
      "Customer service, customer support, call centre and client experience jobs.",
    keywords: [
      "customer service",
      "customer support",
      "call center",
      "call centre",
      "client support",
      "support specialist",
    ],
  },

  {
    id: "virtual-assistant",
    name: "Virtual Assistant",
    slug: "virtual-assistant",
    description:
      "Virtual assistant, administrative support and remote office management opportunities.",
    keywords: [
      "virtual assistant",
      "remote assistant",
      "administrative assistant",
      "executive assistant",
      "online assistant",
    ],
  },

  {
    id: "digital-marketing",
    name: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Digital marketing jobs covering SEO, social media, email marketing, advertising and online growth.",
    keywords: [
      "digital marketing",
      "seo",
      "social media",
      "email marketing",
      "online marketing",
      "growth marketing",
    ],
  },

  {
    id: "graphic-design",
    name: "Graphic Design",
    slug: "graphic-design",
    description:
      "Graphic design, visual design, branding and creative production opportunities.",
    keywords: [
      "graphic designer",
      "visual designer",
      "brand designer",
      "creative designer",
      "digital designer",
    ],
  },

  {
    id: "writing",
    name: "Writing & Content",
    slug: "writing",
    description:
      "Writing, copywriting, content creation, editing and publishing opportunities.",
    keywords: [
      "writer",
      "content writer",
      "copywriter",
      "technical writer",
      "content creator",
      "editor",
    ],
  },

  {
    id: "sales",
    name: "Sales",
    slug: "sales",
    description:
      "Sales representative, business development, account management and sales support opportunities.",
    keywords: [
      "sales representative",
      "sales executive",
      "business development",
      "account executive",
      "sales associate",
    ],
  },

  {
    id: "finance-accounting",
    name: "Finance & Accounting",
    slug: "finance-accounting",
    description:
      "Accounting, finance, bookkeeping, payroll and financial operations jobs.",
    keywords: [
      "accountant",
      "bookkeeper",
      "finance officer",
      "financial analyst",
      "accounts assistant",
    ],
  },

  {
    id: "human-resources",
    name: "Human Resources",
    slug: "human-resources",
    description:
      "Human resources, recruitment, talent acquisition and people operations jobs.",
    keywords: [
      "human resources",
      "hr",
      "recruiter",
      "talent acquisition",
      "people operations",
    ],
  },

  {
    id: "project-management",
    name: "Project Management",
    slug: "project-management",
    description:
      "Project management, coordination, operations and delivery opportunities.",
    keywords: [
      "project manager",
      "project coordinator",
      "program manager",
      "operations manager",
      "delivery manager",
    ],
  },

  {
    id: "healthcare",
    name: "Healthcare",
    slug: "healthcare",
    description:
      "Healthcare, clinical support, medical administration and health services opportunities.",
    keywords: [
      "healthcare",
      "health worker",
      "medical assistant",
      "healthcare assistant",
      "medical administrator",
    ],
  },

  {
    id: "education",
    name: "Education",
    slug: "education",
    description:
      "Teaching, tutoring, online education and academic support opportunities.",
    keywords: [
      "teacher",
      "tutor",
      "online tutor",
      "teaching",
      "education",
      "instructor",
    ],
  },

  {
    id: "construction",
    name: "Construction",
    slug: "construction",
    description:
      "Construction, building, engineering support and skilled trade opportunities.",
    keywords: [
      "construction",
      "construction worker",
      "building",
      "site worker",
      "construction assistant",
    ],
  },

  {
    id: "hospitality",
    name: "Hospitality",
    slug: "hospitality",
    description:
      "Hotel, restaurant, food service and hospitality opportunities.",
    keywords: [
      "hospitality",
      "hotel",
      "restaurant",
      "waiter",
      "chef",
      "front desk",
    ],
  },

  {
    id: "retail",
    name: "Retail",
    slug: "retail",
    description:
      "Retail, cashier, store assistant, merchandising and customer-facing opportunities.",
    keywords: [
      "retail",
      "cashier",
      "store assistant",
      "retail associate",
      "sales assistant",
    ],
  },

  {
    id: "logistics",
    name: "Logistics & Delivery",
    slug: "logistics",
    description:
      "Logistics, warehouse, delivery, transportation and supply chain opportunities.",
    keywords: [
      "logistics",
      "warehouse",
      "delivery",
      "driver",
      "supply chain",
      "dispatch",
    ],
  },

  {
    id: "security",
    name: "Security",
    slug: "security",
    description:
      "Security officer, surveillance, safety and protection opportunities.",
    keywords: [
      "security",
      "security officer",
      "security guard",
      "surveillance",
      "safety officer",
    ],
  },

  {
    id: "cleaning",
    name: "Cleaning & Maintenance",
    slug: "cleaning",
    description:
      "Cleaning, housekeeping, maintenance and facility support opportunities.",
    keywords: [
      "cleaner",
      "cleaning",
      "housekeeping",
      "maintenance",
      "facility assistant",
    ],
  },

  {
    id: "artisan-skilled-trades",
    name: "Skilled Trades",
    slug: "artisan-skilled-trades",
    description:
      "Skilled trade opportunities including electrical, plumbing, welding, carpentry and technical work.",
    keywords: [
      "electrician",
      "plumber",
      "welder",
      "carpenter",
      "technician",
      "skilled trades",
    ],
  },
];

/* =========================================================
   COMPANY NAME POOLS
   These are seed/demo names. Replace with verified employers
   when adding real vacancies.
========================================================= */

const companyPrefixes = [
  "Northstar",
  "Brightpath",
  "Crestline",
  "Bluefield",
  "Silveroak",
  "Evermark",
  "Primebridge",
  "Westpoint",
  "Greenfield",
  "Oakridge",
  "Summit",
  "Clearview",
  "Redstone",
  "Grandline",
  "Stonebridge",
  "Riverside",
  "Nexfield",
  "Harborview",
  "Eastgate",
  "Skyline",
  "Pioneer",
  "Brookfield",
  "Cedarpoint",
  "Lighthouse",
  "Fairview",
  "Goldencrest",
  "Urbanpoint",
  "Meadowridge",
  "Bluecrest",
  "Highland",
];

const companySuffixes = [
  "Solutions",
  "Services",
  "Group",
  "Technologies",
  "Systems",
  "Enterprises",
  "Industries",
  "Partners",
  "Consulting",
  "Digital",
  "Global",
  "International",
];

/* =========================================================
   TITLE POOLS
========================================================= */

const titlePools: Record<string, string[]> = {
  "software-development": [
    "Software Developer",
    "Software Engineer",
    "Application Developer",
    "Web Application Developer",
    "Junior Software Engineer",
    "Software Development Specialist",
    "Backend Software Engineer",
    "Product Software Engineer",
  ],

  "frontend-development": [
    "Frontend Developer",
    "Frontend Engineer",
    "React Developer",
    "JavaScript Developer",
    "UI Developer",
    "Web Interface Developer",
    "Frontend Software Engineer",
    "Junior Frontend Developer",
  ],

  "backend-development": [
    "Backend Developer",
    "Backend Engineer",
    "API Developer",
    "Server-Side Developer",
    "Node.js Developer",
    "Python Backend Developer",
    "Backend Software Engineer",
    "Systems Developer",
  ],

  "full-stack-development": [
    "Full Stack Developer",
    "Full Stack Engineer",
    "Full Stack Software Engineer",
    "Web Application Developer",
    "Full Stack Web Developer",
    "Software Engineer",
    "Full Stack JavaScript Developer",
    "Full Stack Application Developer",
  ],

  "mobile-development": [
    "Mobile App Developer",
    "React Native Developer",
    "Flutter Developer",
    "Android Developer",
    "iOS Developer",
    "Mobile Software Engineer",
    "Mobile Application Engineer",
    "Junior Mobile Developer",
  ],

  "data-entry": [
    "Data Entry Specialist",
    "Data Entry Clerk",
    "Data Processing Assistant",
    "Online Data Entry Specialist",
    "Data Entry Operator",
    "Data Processing Associate",
    "Remote Data Entry Assistant",
    "Administrative Data Assistant",
  ],

  "customer-service": [
    "Customer Service Representative",
    "Customer Support Specialist",
    "Customer Experience Associate",
    "Client Support Representative",
    "Customer Care Specialist",
    "Remote Customer Support Agent",
    "Customer Service Associate",
    "Support Representative",
  ],

  "virtual-assistant": [
    "Virtual Assistant",
    "Remote Administrative Assistant",
    "Executive Virtual Assistant",
    "Administrative Support Assistant",
    "Online Virtual Assistant",
    "Virtual Office Assistant",
    "Remote Executive Assistant",
    "Administrative Coordinator",
  ],

  "digital-marketing": [
    "Digital Marketing Specialist",
    "SEO Specialist",
    "Social Media Manager",
    "Digital Marketing Coordinator",
    "Content Marketing Specialist",
    "Growth Marketing Associate",
    "Email Marketing Specialist",
    "Digital Marketing Executive",
  ],

  "graphic-design": [
    "Graphic Designer",
    "Visual Designer",
    "Brand Designer",
    "Creative Designer",
    "Digital Designer",
    "Marketing Designer",
    "Junior Graphic Designer",
    "Social Media Designer",
  ],

  writing: [
    "Content Writer",
    "Copywriter",
    "Technical Writer",
    "Content Specialist",
    "SEO Content Writer",
    "Creative Writer",
    "Content Editor",
    "Digital Content Writer",
  ],

  sales: [
    "Sales Representative",
    "Sales Executive",
    "Business Development Representative",
    "Account Executive",
    "Sales Associate",
    "Field Sales Representative",
    "Business Development Executive",
    "Inside Sales Representative",
  ],

  "finance-accounting": [
    "Accountant",
    "Accounts Assistant",
    "Bookkeeper",
    "Finance Officer",
    "Financial Analyst",
    "Accounts Payable Specialist",
    "Accounts Receivable Specialist",
    "Junior Accountant",
  ],

  "human-resources": [
    "HR Assistant",
    "Human Resources Officer",
    "Recruitment Specialist",
    "Talent Acquisition Specialist",
    "HR Coordinator",
    "People Operations Associate",
    "Recruitment Coordinator",
    "HR Administrator",
  ],

  "project-management": [
    "Project Manager",
    "Project Coordinator",
    "Project Assistant",
    "Operations Coordinator",
    "Program Coordinator",
    "Delivery Coordinator",
    "Project Support Specialist",
    "Operations Manager",
  ],

  healthcare: [
    "Healthcare Assistant",
    "Medical Administrative Assistant",
    "Healthcare Coordinator",
    "Patient Support Specialist",
    "Medical Office Assistant",
    "Health Services Assistant",
    "Clinical Support Assistant",
    "Healthcare Support Worker",
  ],

  education: [
    "Teacher",
    "Online Tutor",
    "Teaching Assistant",
    "Academic Support Specialist",
    "Online English Teacher",
    "Subject Tutor",
    "Education Coordinator",
    "Learning Support Assistant",
  ],

  construction: [
    "Construction Worker",
    "Construction Assistant",
    "Site Assistant",
    "Construction Technician",
    "Building Technician",
    "Site Coordinator",
    "Construction Supervisor",
    "General Construction Worker",
  ],

  hospitality: [
    "Hotel Receptionist",
    "Waiter",
    "Restaurant Server",
    "Kitchen Assistant",
    "Chef",
    "Food Service Assistant",
    "Hospitality Assistant",
    "Front Desk Associate",
  ],

  retail: [
    "Retail Associate",
    "Cashier",
    "Store Assistant",
    "Retail Sales Associate",
    "Customer Service Associate",
    "Store Clerk",
    "Retail Assistant",
    "Shop Assistant",
  ],

  logistics: [
    "Logistics Assistant",
    "Warehouse Assistant",
    "Delivery Coordinator",
    "Warehouse Associate",
    "Dispatch Assistant",
    "Logistics Coordinator",
    "Inventory Assistant",
    "Delivery Driver",
  ],

  security: [
    "Security Officer",
    "Security Guard",
    "Security Assistant",
    "Surveillance Officer",
    "Security Operations Assistant",
    "Safety Officer",
    "Security Supervisor",
    "Access Control Officer",
  ],

  cleaning: [
    "Cleaner",
    "Housekeeping Assistant",
    "Cleaning Technician",
    "Maintenance Assistant",
    "Facilities Assistant",
    "Housekeeping Attendant",
    "Cleaning Operative",
    "Facility Support Assistant",
  ],

  "artisan-skilled-trades": [
    "Electrician",
    "Plumber",
    "Welder",
    "Carpenter",
    "Maintenance Technician",
    "Electrical Technician",
    "Mechanical Technician",
    "Installation Technician",
  ],
};

/* =========================================================
   LOCATION DATA
========================================================= */

const countryLocations: Record<string, string[]> = {
  "United States": [
    "New York",
    "California",
    "Texas",
    "Florida",
    "Remote",
  ],

  "United Kingdom": [
    "London",
    "Manchester",
    "Birmingham",
    "Leeds",
    "Remote",
  ],

  Canada: [
    "Toronto",
    "Vancouver",
    "Montreal",
    "Calgary",
    "Remote",
  ],

  Australia: [
    "Sydney",
    "Melbourne",
    "Brisbane",
    "Perth",
    "Remote",
  ],

  Germany: [
    "Berlin",
    "Munich",
    "Hamburg",
    "Frankfurt",
    "Remote",
  ],

  France: [
    "Paris",
    "Lyon",
    "Marseille",
    "Toulouse",
    "Remote",
  ],

  Nigeria: [
    "Lagos",
    "Abuja",
    "Port Harcourt",
    "Ibadan",
    "Remote",
  ],

  "South Africa": [
    "Johannesburg",
    "Cape Town",
    "Durban",
    "Pretoria",
    "Remote",
  ],

  China: [
    "Shanghai",
    "Beijing",
    "Shenzhen",
    "Guangzhou",
    "Remote",
  ],

  India: [
    "Bengaluru",
    "Mumbai",
    "Delhi",
    "Hyderabad",
    "Remote",
  ],

  Japan: [
    "Tokyo",
    "Osaka",
    "Kyoto",
    "Yokohama",
    "Remote",
  ],

  Indonesia: [
    "Jakarta",
    "Bandung",
    "Surabaya",
    "Bali",
    "Remote",
  ],

  "New Zealand": [
    "Auckland",
    "Wellington",
    "Christchurch",
    "Hamilton",
    "Remote",
  ],

  Singapore: [
    "Singapore",
    "Remote",
  ],
};

/* =========================================================
   SALARY RANGES
========================================================= */

const salaryRanges: Record<
  string,
  {
    min: number;
    max: number;
    currency: string;
  }
> = {
  "United States": {
    min: 45000,
    max: 150000,
    currency: "USD",
  },

  "United Kingdom": {
    min: 28000,
    max: 95000,
    currency: "GBP",
  },

  Canada: {
    min: 40000,
    max: 130000,
    currency: "CAD",
  },

  Australia: {
    min: 50000,
    max: 150000,
    currency: "AUD",
  },

  Germany: {
    min: 32000,
    max: 100000,
    currency: "EUR",
  },

  France: {
    min: 28000,
    max: 85000,
    currency: "EUR",
  },

  Nigeria: {
    min: 1000000,
    max: 15000000,
    currency: "NGN",
  },

  "South Africa": {
    min: 120000,
    max: 900000,
    currency: "ZAR",
  },

  China: {
    min: 80000,
    max: 450000,
    currency: "CNY",
  },

  India: {
    min: 250000,
    max: 2500000,
    currency: "INR",
  },

  Japan: {
    min: 3500000,
    max: 12000000,
    currency: "JPY",
  },

  Indonesia: {
    min: 45000000,
    max: 300000000,
    currency: "IDR",
  },

  "New Zealand": {
    min: 45000,
    max: 120000,
    currency: "NZD",
  },

  Singapore: {
    min: 30000,
    max: 120000,
    currency: "SGD",
  },
};

/* =========================================================
   HELPERS
========================================================= */

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function deterministicCode(
  categoryIndex: number,
  countryIndex: number,
  jobIndex: number
) {
  const value =
    (categoryIndex + 17) * 7919 +
    (countryIndex + 23) * 1543 +
    (jobIndex + 31) * 313;

  return value.toString(36);
}

function createCompanyName(
  companyIndex: number,
  categoryIndex: number
) {
  const prefix =
    companyPrefixes[
      (companyIndex + categoryIndex * 3) %
        companyPrefixes.length
    ];

  const suffix =
    companySuffixes[
      (companyIndex * 2 + categoryIndex) %
        companySuffixes.length
    ];

  return `${prefix} ${suffix}`;
}

function createCompany(
  companyIndex: number,
  categoryIndex: number,
  country: string
): JobCompany {
  const name = createCompanyName(
    companyIndex,
    categoryIndex
  );

  return {
    id: `company-${slugify(name)}-${country.toLowerCase().replace(/\s+/g, "-")}`,
    name,
    slug: slugify(name),
    country,
  };
}

function getJobType(
  index: number,
  categoryIndex: number
): JobType {
  const types: JobType[] = [
    "FULL_TIME",
    "FULL_TIME",
    "FULL_TIME",
    "PART_TIME",
    "CONTRACT",
    "FREELANCE",
    "TEMPORARY",
    "INTERNSHIP",
  ];

  return types[(index + categoryIndex) % types.length];
}

function getWorkMode(
  index: number,
  categorySlug: string
): WorkMode {
  const remoteCategories = [
    "software-development",
    "frontend-development",
    "backend-development",
    "full-stack-development",
    "mobile-development",
    "data-entry",
    "customer-service",
    "virtual-assistant",
    "digital-marketing",
    "graphic-design",
    "writing",
    "finance-accounting",
    "human-resources",
    "project-management",
    "education",
  ];

  if (
    remoteCategories.includes(categorySlug) &&
    index % 3 !== 0
  ) {
    return "REMOTE";
  }

  if (index % 5 === 0) {
    return "HYBRID";
  }

  return "ONSITE";
}

function getExperienceLevel(
  index: number
): ExperienceLevel {
  const levels: ExperienceLevel[] = [
    "ENTRY_LEVEL",
    "ENTRY_LEVEL",
    "MID_LEVEL",
    "MID_LEVEL",
    "SENIOR_LEVEL",
    "NO_EXPERIENCE",
  ];

  return levels[index % levels.length];
}

function getSalary(
  country: string,
  index: number
) {
  const range = salaryRanges[country];

  if (!range) {
    return {
      min: null,
      max: null,
      currency: null,
    };
  }

  const spread = range.max - range.min;

  const min =
    range.min +
    Math.round(
      ((index % 10) / 10) * spread * 0.35
    );

  const max =
    min +
    Math.round(
      Math.max(spread * 0.25, spread * 0.4) / 100
    ) *
      100;

  return {
    min: Math.min(min, range.max),
    max: Math.min(max, range.max),
    currency: range.currency,
  };
}

function createDescription(
  title: string,
  company: string,
  category: JobCategory,
  location: string,
  workMode: WorkMode
) {
  const modeText =
    workMode === "REMOTE"
      ? "This is a remote opportunity and can be performed from an eligible location."
      : workMode === "HYBRID"
        ? `The role combines remote work with on-site work in ${location}.`
        : `The role is based in ${location}.`;

  return `${company} is seeking a ${title.toLowerCase()} to join its team. This opportunity falls within ${category.name.toLowerCase()} and involves supporting day-to-day business activities, delivering quality work and collaborating with relevant team members. ${modeText} Candidates should have the relevant skills, a reliable work ethic and the ability to meet the responsibilities of the role.`;
}

function createKeywords(
  category: JobCategory,
  title: string
) {
  return Array.from(
    new Set([
      title.toLowerCase(),
      category.name.toLowerCase(),
      ...category.keywords,
    ])
  );
}

/* =========================================================
   JOB GENERATOR
========================================================= */

function createJobs(): Job[] {
  const jobs: Job[] = [];

  let globalIndex = 0;

  jobCountries.forEach((country, countryIndex) => {
    jobCategories.forEach(
      (category, categoryIndex) => {
        const titles =
          titlePools[category.slug] ??
          [];

        /*
         * 2 jobs per category/country.
         *
         * 24 categories × 14 countries × 2
         * = 672 generated opportunities.
         *
         * We can increase this later without changing
         * the search architecture.
         */

        for (let i = 0; i < 2; i++) {
          const title =
            titles[
              (i +
                countryIndex +
                categoryIndex) %
                titles.length
            ];

          const locationList =
            countryLocations[country.name] ??
            ["Remote"];

          const location =
            locationList[
              (i + categoryIndex) %
                locationList.length
            ];

          const workMode = getWorkMode(
            globalIndex,
            category.slug
          );

          const jobType = getJobType(
            globalIndex,
            categoryIndex
          );

          const experienceLevel =
            getExperienceLevel(globalIndex);

          const code = deterministicCode(
            categoryIndex,
            countryIndex,
            i
          );

          const company = createCompany(
            categoryIndex * 10 +
              countryIndex +
              i,
            categoryIndex,
            country.name
          );

          const baseSlug =  `${slugify(title)}-${country.slug}`  ;

          const slug = `${baseSlug}-${code}`;

          const salary = getSalary(
            country.name,
            globalIndex
          );

          const description =
            createDescription(
              title,
              company.name,
              category,
              location,
              workMode
            );

          const publishedDate = new Date(
            Date.now() -
              globalIndex *
                24 *
                60 *
                60 *
                1000
          );

          jobs.push({
            id: `job-${code}-${country.code.toLowerCase()}-${category.slug}`,

            title,

            slug,

            company,

            description,

            category: category.name,
            categorySlug: category.slug,

            country: country.name,
            countrySlug: country.slug,
            countryCode: country.code,

            location,

            jobType,
            workMode,
            experienceLevel,

            salaryMin: salary.min,
            salaryMax: salary.max,
            salaryCurrency: salary.currency,
            salaryPeriod:
              salary.min !== null
                ? "YEAR"
                : null,

            skills: category.keywords,

            keywords: createKeywords(
              category,
              title
            ),

            /*
             * These remain null until the opportunity
             * has a genuine external application source.
             */
            applicationUrl: null,
            sourceUrl: null,
            sourceName: null,

            isVerified: false,

            isFeatured:
              globalIndex % 17 === 0,

            isActive: true,

            publishedAt:
              publishedDate.toISOString(),

            expiresAt: null,
          });

          globalIndex++;
        }
      }
    );
  });

  return jobs;
}

/* =========================================================
   MAIN DATASET
========================================================= */

export const jobs: Job[] = createJobs();

/* =========================================================
   LOOKUP HELPERS
========================================================= */

export function getJobBySlug(slug: string) {
  return jobs.find(
    (job) => job.slug === slug
  );
}

export function getJobsByCategory(
  categorySlug: string
) {
  return jobs.filter(
    (job) =>
      job.categorySlug === categorySlug &&
      job.isActive
  );
}

export function getJobsByCountry(
  countrySlug: string
) {
  return jobs.filter(
    (job) =>
      job.countrySlug === countrySlug &&
      job.isActive
  );
}

export function getJobsByCategoryAndCountry(
  categorySlug: string,
  countrySlug: string
) {
  return jobs.filter(
    (job) =>
      job.categorySlug === categorySlug &&
      job.countrySlug === countrySlug &&
      job.isActive
  );
}

export function getCategoryBySlug(
  slug: string
) {
  return jobCategories.find(
    (category) =>
      category.slug === slug
  );
}

export function getCountryBySlug(
  slug: string
) {
  return jobCountries.find(
    (country) =>
      country.slug === slug
  );
}

/* =========================================================
   SEARCH
========================================================= */

const searchAliases: Record<
  string,
  string[]
> = {
  developer: [
    "developer",
    "software developer",
    "software engineer",
    "programmer",
  ],

  frontend: [
    "frontend",
    "front end",
    "frontend developer",
    "front-end developer",
    "react developer",
    "ui developer",
  ],

  backend: [
    "backend",
    "back end",
    "backend developer",
    "back-end developer",
    "api developer",
  ],

  "full-stack": [
    "full stack",
    "full-stack",
    "fullstack",
    "full stack developer",
  ],

  remote: [
    "remote",
    "work from home",
    "wfh",
    "online",
    "work remotely",
  ],

  "data-entry": [
    "data entry",
    "data-entry",
    "typing",
    "online typing",
    "data processing",
  ],

  customer: [
    "customer service",
    "customer support",
    "customer care",
    "call center",
    "call centre",
  ],

  assistant: [
    "assistant",
    "virtual assistant",
    "administrative assistant",
    "executive assistant",
  ],
};

function normalizeSearch(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

function getSearchTerms(query: string) {
  const normalized = normalizeSearch(query);

  const terms = new Set<string>([
    normalized,
  ]);

  Object.values(searchAliases).forEach(
    (aliases) => {
      if (
        aliases.some(
          (alias) =>
            normalized.includes(alias)
        )
      ) {
        aliases.forEach((alias) =>
          terms.add(alias)
        );
      }
    }
  );

  return Array.from(terms);
}

export function searchJobs(
  query = "",
  location = ""
) {
  const normalizedQuery =
    normalizeSearch(query);

  const normalizedLocation =
    normalizeSearch(location);

  const queryTerms =
    normalizedQuery.length > 0
      ? getSearchTerms(normalizedQuery)
      : [];

  return jobs
    .filter((job) => job.isActive)
    .filter((job) => {
      if (!normalizedLocation) {
        return true;
      }

      if (
        normalizedLocation === "remote" ||
        normalizedLocation === "work from home" ||
        normalizedLocation === "wfh"
      ) {
        return job.workMode === "REMOTE";
      }

      const locationText =
        `${job.country} ${job.location}`
          .toLowerCase();

      return locationText.includes(
        normalizedLocation
      );
    })
    .map((job) => {
      if (queryTerms.length === 0) {
        return {
          job,
          score: 1,
        };
      }

      const searchableText =
        [
          job.title,
          job.description,
          job.category,
          job.company.name,
          job.country,
          job.location,
          ...job.skills,
          ...job.keywords,
        ]
          .join(" ")
          .toLowerCase();

      let score = 0;

      queryTerms.forEach((term) => {
        if (
          job.title
            .toLowerCase()
            .includes(term)
        ) {
          score += 10;
        }

        if (
          job.category
            .toLowerCase()
            .includes(term)
        ) {
          score += 7;
        }

        if (
          job.skills.some((skill) =>
            skill
              .toLowerCase()
              .includes(term)
          )
        ) {
          score += 5;
        }

        if (
          job.keywords.some((keyword) =>
            keyword
              .toLowerCase()
              .includes(term)
          )
        ) {
          score += 4;
        }

        if (
          searchableText.includes(term)
        ) {
          score += 1;
        }

        if (
          term === "remote" &&
          job.workMode === "REMOTE"
        ) {
          score += 10;
        }
      });

      return {
        job,
        score,
      };
    })
    .filter(
      (result) => result.score > 0
    )
    .sort(
      (a, b) => b.score - a.score
    )
    .map((result) => result.job);
}

/* =========================================================
   COUNTS
========================================================= */

export function getJobCount() {
  return jobs.length;
}

export function getActiveJobCount() {
  return jobs.filter(
    (job) => job.isActive
  ).length;
}

export function getCategoryCount() {
  return jobCategories.length;
}

export function getCountryCount() {
  return jobCountries.length;
}