export type OpportunityCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  keywords: string[];
};

export const opportunityCategories: OpportunityCategory[] = [
  {
    id: "frontend-developer",
    name: "Frontend Developer",
    slug: "frontend-developer",
    description:
      "Explore frontend developer opportunities involving modern web interfaces, responsive applications, user experiences and client-side development.",
    keywords: [
      "frontend developer",
      "front end developer",
      "frontend engineer",
      "react developer",
      "javascript developer",
      "typescript developer",
      "web developer",
      "UI developer",
    ],
  },

  {
    id: "backend-developer",
    name: "Backend Developer",
    slug: "backend-developer",
    description:
      "Explore backend developer opportunities involving APIs, databases, server-side applications, cloud services and backend systems.",
    keywords: [
      "backend developer",
      "back end developer",
      "backend engineer",
      "API developer",
      "server side developer",
      "Node.js developer",
      "Python developer",
      "backend engineer",
    ],
  },

  {
    id: "full-stack-developer",
    name: "Full Stack Developer",
    slug: "full-stack-developer",
    description:
      "Explore full stack developer opportunities involving frontend interfaces, backend systems, APIs, databases and complete web applications.",
    keywords: [
      "full stack developer",
      "full-stack developer",
      "full stack engineer",
      "web developer",
      "software developer",
      "frontend",
      "backend",
      "web application",
    ],
  },

  {
    id: "software-engineer",
    name: "Software Engineer",
    slug: "software-engineer",
    description:
      "Explore software engineering opportunities covering application development, software systems, testing, problem solving and modern development practices.",
    keywords: [
      "software engineer",
      "software developer",
      "application developer",
      "software development",
      "programmer",
      "engineering",
      "coding",
      "software systems",
    ],
  },

  {
    id: "mobile-developer",
    name: "Mobile Developer",
    slug: "mobile-developer",
    description:
      "Explore mobile developer opportunities involving Android, iOS, React Native, Flutter and modern mobile application development.",
    keywords: [
      "mobile developer",
      "mobile engineer",
      "android developer",
      "ios developer",
      "react native developer",
      "flutter developer",
      "mobile application",
      "app developer",
    ],
  },

  {
    id: "data-entry",
    name: "Data Entry",
    slug: "data-entry",
    description:
      "Explore data entry opportunities involving online data processing, typing, spreadsheets, information management and administrative support.",
    keywords: [
      "data entry",
      "data entry jobs",
      "online data entry",
      "typing jobs",
      "data processing",
      "data clerk",
      "spreadsheet",
      "remote data entry",
    ],
  },

  {
    id: "virtual-assistant",
    name: "Virtual Assistant",
    slug: "virtual-assistant",
    description:
      "Explore virtual assistant opportunities involving administration, scheduling, email management, online research, customer support and business assistance.",
    keywords: [
      "virtual assistant",
      "VA jobs",
      "remote assistant",
      "administrative assistant",
      "executive assistant",
      "online assistant",
      "virtual office assistant",
      "remote administrative",
    ],
  },

  {
    id: "customer-support",
    name: "Customer Support",
    slug: "customer-support",
    description:
      "Explore customer support opportunities involving customer service, communication, chat support, email support and customer experience.",
    keywords: [
      "customer support",
      "customer service",
      "customer care",
      "chat support",
      "email support",
      "customer experience",
      "support agent",
      "remote customer support",
    ],
  },

  {
    id: "digital-marketing",
    name: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Explore digital marketing opportunities involving online campaigns, advertising, content marketing, social media, analytics and customer acquisition.",
    keywords: [
      "digital marketing",
      "online marketing",
      "digital marketer",
      "marketing specialist",
      "performance marketing",
      "content marketing",
      "online advertising",
      "marketing campaigns",
    ],
  },

  {
    id: "seo-specialist",
    name: "SEO Specialist",
    slug: "seo-specialist",
    description:
      "Explore SEO opportunities involving search engine optimisation, keyword research, technical SEO, content optimisation and organic search growth.",
    keywords: [
      "SEO specialist",
      "SEO jobs",
      "search engine optimization",
      "search engine optimisation",
      "technical SEO",
      "SEO analyst",
      "keyword research",
      "organic search",
    ],
  },

  {
    id: "graphic-designer",
    name: "Graphic Designer",
    slug: "graphic-designer",
    description:
      "Explore graphic design opportunities involving branding, digital design, marketing materials, social media graphics and visual communication.",
    keywords: [
      "graphic designer",
      "graphic design",
      "visual designer",
      "brand designer",
      "digital designer",
      "creative designer",
      "UI designer",
      "design jobs",
    ],
  },

  {
    id: "content-writer",
    name: "Content Writer",
    slug: "content-writer",
    description:
      "Explore content writing opportunities involving articles, blogs, website content, SEO writing, copywriting, editing and digital publishing.",
    keywords: [
      "content writer",
      "content writing",
      "copywriter",
      "SEO writer",
      "blog writer",
      "technical writer",
      "website content",
      "writing jobs",
    ],
  },

  {
    id: "social-media-manager",
    name: "Social Media Manager",
    slug: "social-media-manager",
    description:
      "Explore social media management opportunities involving content planning, community management, social campaigns, audience growth and digital engagement.",
    keywords: [
      "social media manager",
      "social media specialist",
      "community manager",
      "social media jobs",
      "content manager",
      "Instagram manager",
      "TikTok manager",
      "social media marketing",
    ],
  },

  {
    id: "data-analyst",
    name: "Data Analyst",
    slug: "data-analyst",
    description:
      "Explore data analyst opportunities involving business intelligence, reporting, data visualisation, SQL, spreadsheets and analytical decision-making.",
    keywords: [
      "data analyst",
      "data analysis",
      "business analyst",
      "business intelligence",
      "SQL analyst",
      "reporting analyst",
      "data analytics",
      "BI analyst",
    ],
  },

  {
    id: "project-manager",
    name: "Project Manager",
    slug: "project-manager",
    description:
      "Explore project management opportunities involving planning, coordination, delivery, stakeholder communication, operations and team management.",
    keywords: [
      "project manager",
      "project management",
      "project coordinator",
      "program manager",
      "delivery manager",
      "operations manager",
      "project jobs",
      "program coordinator",
    ],
  },

  {
    id: "sales",
    name: "Sales",
    slug: "sales",
    description:
      "Explore sales opportunities involving business development, customer acquisition, account management, lead generation and revenue growth.",
    keywords: [
      "sales",
      "sales representative",
      "sales executive",
      "business development",
      "account executive",
      "account manager",
      "sales jobs",
      "lead generation",
    ],
  },

  {
    id: "finance-accounting",
    name: "Finance & Accounting",
    slug: "finance-accounting",
    description:
      "Explore finance and accounting opportunities involving bookkeeping, financial reporting, accounts payable, accounts receivable and financial analysis.",
    keywords: [
      "finance",
      "accounting",
      "accountant",
      "bookkeeper",
      "financial analyst",
      "accounts assistant",
      "accounts payable",
      "accounts receivable",
    ],
  },

  {
    id: "human-resources",
    name: "Human Resources",
    slug: "human-resources",
    description:
      "Explore human resources opportunities involving recruitment, talent acquisition, employee support, HR administration and people operations.",
    keywords: [
      "human resources",
      "HR",
      "HR assistant",
      "HR officer",
      "recruitment",
      "talent acquisition",
      "people operations",
      "HR jobs",
    ],
  },

  {
    id: "healthcare",
    name: "Healthcare",
    slug: "healthcare",
    description:
      "Explore healthcare opportunities involving patient support, healthcare administration, medical services and health-related operations.",
    keywords: [
      "healthcare",
      "healthcare assistant",
      "medical assistant",
      "health services",
      "patient support",
      "medical administration",
      "healthcare jobs",
      "clinical support",
    ],
  },

  {
    id: "education",
    name: "Education",
    slug: "education",
    description:
      "Explore education opportunities involving teaching, tutoring, academic support, online learning and educational services.",
    keywords: [
      "education",
      "teacher",
      "teaching",
      "online tutor",
      "tutor",
      "teaching assistant",
      "online teaching",
      "education jobs",
    ],
  },

  {
    id: "construction",
    name: "Construction",
    slug: "construction",
    description:
      "Explore construction opportunities involving building projects, site operations, construction support, technical work and project coordination.",
    keywords: [
      "construction",
      "construction worker",
      "construction jobs",
      "site assistant",
      "building",
      "construction technician",
      "site coordinator",
      "construction supervisor",
    ],
  },

  {
    id: "hospitality",
    name: "Hospitality",
    slug: "hospitality",
    description:
      "Explore hospitality opportunities involving hotels, restaurants, guest services, food service, reception and hospitality operations.",
    keywords: [
      "hospitality",
      "hotel jobs",
      "restaurant jobs",
      "waiter",
      "chef",
      "hotel receptionist",
      "guest services",
      "food service",
    ],
  },

  {
    id: "retail",
    name: "Retail",
    slug: "retail",
    description:
      "Explore retail opportunities involving stores, sales, customer service, cashier roles, stock management and retail operations.",
    keywords: [
      "retail",
      "retail jobs",
      "cashier",
      "store assistant",
      "retail sales",
      "shop assistant",
      "store clerk",
      "retail associate",
    ],
  },

  {
    id: "logistics",
    name: "Logistics & Delivery",
    slug: "logistics",
    description:
      "Explore logistics and delivery opportunities involving warehouses, dispatch, inventory, transportation, delivery and supply chain operations.",
    keywords: [
      "logistics",
      "delivery",
      "warehouse",
      "supply chain",
      "dispatch",
      "inventory",
      "logistics coordinator",
      "delivery driver",
    ],
  },

  {
    id: "cleaning-maintenance",
    name: "Cleaning & Maintenance",
    slug: "cleaning-maintenance",
    description:
      "Explore cleaning and maintenance opportunities involving housekeeping, facilities support, property maintenance and cleaning services.",
    keywords: [
      "cleaning",
      "cleaner",
      "housekeeping",
      "maintenance",
      "facilities",
      "cleaning jobs",
      "maintenance jobs",
      "facility support",
    ],
  },

  {
    id: "skilled-trades",
    name: "Skilled Trades",
    slug: "skilled-trades",
    description:
      "Explore skilled trade opportunities involving electrical work, plumbing, welding, carpentry, installation, maintenance and technical services.",
    keywords: [
      "skilled trades",
      "electrician",
      "plumber",
      "welder",
      "carpenter",
      "technician",
      "trade jobs",
      "maintenance technician",
    ],
  },
];

export function getOpportunityCategory(
  slug: string,
): OpportunityCategory | undefined {
  return opportunityCategories.find(
    (category) => category.slug === slug,
  );
}