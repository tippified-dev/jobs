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

  workMode:
    | "REMOTE"
    | "HYBRID"
    | "ONSITE";

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
    id: "frontend-developer",
    name: "Frontend Developer",
    slug: "frontend-developer",
    description:
      "Frontend developer opportunities for professionals who build responsive websites, web applications and digital interfaces using modern frontend technologies.",
    keywords: [
      "frontend developer",
      "front end developer",
      "frontend engineer",
      "react developer",
      "javascript developer",
      "typescript developer",
      "web developer",
      "ui developer",
    ],
  },

  {
    id: "backend-developer",
    name: "Backend Developer",
    slug: "backend-developer",
    description:
      "Backend developer opportunities involving APIs, databases, server-side applications, integrations and reliable software infrastructure.",
    keywords: [
      "backend developer",
      "back end developer",
      "backend engineer",
      "api developer",
      "server side developer",
      "node.js developer",
      "python developer",
      "software backend",
    ],
  },

  {
    id: "full-stack-developer",
    name: "Full Stack Developer",
    slug: "full-stack-developer",
    description:
      "Full stack developer opportunities covering frontend interfaces, backend services, APIs, databases and complete web application development.",
    keywords: [
      "full stack developer",
      "full-stack developer",
      "full stack engineer",
      "web application developer",
      "software engineer",
      "react developer",
      "node.js developer",
    ],
  },

  {
    id: "software-engineer",
    name: "Software Engineer",
    slug: "software-engineer",
    description:
      "Software engineering opportunities across application development, software architecture, testing, maintenance and technical problem solving.",
    keywords: [
      "software engineer",
      "software developer",
      "application developer",
      "programmer",
      "software development",
      "web software",
      "application engineering",
    ],
  },

  {
    id: "mobile-developer",
    name: "Mobile Developer",
    slug: "mobile-developer",
    description:
      "Mobile development opportunities for professionals building and maintaining Android, iOS and cross-platform mobile applications.",
    keywords: [
      "mobile developer",
      "mobile app developer",
      "android developer",
      "ios developer",
      "react native developer",
      "flutter developer",
      "mobile engineer",
    ],
  },

  {
    id: "data-entry",
    name: "Data Entry",
    slug: "data-entry",
    description:
      "Data entry opportunities involving accurate information processing, document handling, database updates, online research and administrative support.",
    keywords: [
      "data entry",
      "data entry clerk",
      "data entry specialist",
      "online data entry",
      "data processing",
      "typing jobs",
      "remote data entry",
    ],
  },

  {
    id: "virtual-assistant",
    name: "Virtual Assistant",
    slug: "virtual-assistant",
    description:
      "Virtual assistant opportunities involving administration, scheduling, customer communication, research, organisation and remote business support.",
    keywords: [
      "virtual assistant",
      "remote assistant",
      "administrative assistant",
      "online assistant",
      "executive assistant",
      "remote administrative assistant",
    ],
  },

  {
    id: "customer-support",
    name: "Customer Support",
    slug: "customer-support",
    description:
      "Customer support opportunities helping customers through email, chat, telephone and other digital communication channels.",
    keywords: [
      "customer support",
      "customer service",
      "customer care",
      "support agent",
      "chat support",
      "email support",
      "remote customer service",
    ],
  },

  {
    id: "digital-marketing",
    name: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Digital marketing opportunities covering online campaigns, search marketing, social media, content promotion, analytics and customer acquisition.",
    keywords: [
      "digital marketing",
      "digital marketer",
      "online marketing",
      "marketing specialist",
      "growth marketing",
      "social media marketing",
      "performance marketing",
    ],
  },

  {
    id: "seo-specialist",
    name: "SEO Specialist",
    slug: "seo-specialist",
    description:
      "SEO opportunities focused on search visibility, keyword research, technical optimisation, content strategy, link development and organic growth.",
    keywords: [
      "seo specialist",
      "seo manager",
      "search engine optimization",
      "organic search",
      "technical seo",
      "seo analyst",
      "content seo",
    ],
  },

  {
    id: "graphic-designer",
    name: "Graphic Designer",
    slug: "graphic-designer",
    description:
      "Graphic design opportunities involving digital graphics, branding, marketing materials, social media assets and visual communication.",
    keywords: [
      "graphic designer",
      "visual designer",
      "creative designer",
      "brand designer",
      "digital designer",
      "marketing designer",
    ],
  },

  {
    id: "content-writer",
    name: "Content Writer",
    slug: "content-writer",
    description:
      "Content writing opportunities covering articles, website content, marketing copy, product content, research-based writing and digital publishing.",
    keywords: [
      "content writer",
      "copywriter",
      "content creator",
      "seo writer",
      "technical writer",
      "blog writer",
      "freelance writer",
    ],
  },

  {
    id: "social-media-manager",
    name: "Social Media Manager",
    slug: "social-media-manager",
    description:
      "Social media management opportunities involving content planning, community engagement, campaign management and social growth.",
    keywords: [
      "social media manager",
      "social media specialist",
      "community manager",
      "social media marketing",
      "content manager",
      "social media coordinator",
    ],
  },

  {
    id: "data-analyst",
    name: "Data Analyst",
    slug: "data-analyst",
    description:
      "Data analyst opportunities involving business data, reporting, dashboards, research, analytics and data-driven decision making.",
    keywords: [
      "data analyst",
      "business analyst",
      "data analytics",
      "reporting analyst",
      "business intelligence",
      "data specialist",
    ],
  },

  {
    id: "project-manager",
    name: "Project Manager",
    slug: "project-manager",
    description:
      "Project management opportunities involving planning, coordination, delivery, stakeholder communication, resources and project operations.",
    keywords: [
      "project manager",
      "project coordinator",
      "program manager",
      "project management",
      "delivery manager",
      "operations manager",
    ],
  },

  {
    id: "sales",
    name: "Sales",
    slug: "sales",
    description:
      "Sales opportunities covering customer acquisition, account management, business development, lead generation and commercial growth.",
    keywords: [
      "sales representative",
      "sales executive",
      "business development",
      "account executive",
      "sales associate",
      "inside sales",
    ],
  },

  {
    id: "finance-accounting",
    name: "Finance & Accounting",
    slug: "finance-accounting",
    description:
      "Finance and accounting opportunities involving financial records, bookkeeping, reporting, analysis, accounts and business finance operations.",
    keywords: [
      "accountant",
      "accounting",
      "bookkeeper",
      "finance officer",
      "financial analyst",
      "accounts assistant",
      "accounts payable",
    ],
  },

  {
    id: "human-resources",
    name: "Human Resources",
    slug: "human-resources",
    description:
      "Human resources opportunities covering recruitment, employee support, people operations, talent acquisition and workplace administration.",
    keywords: [
      "human resources",
      "hr specialist",
      "hr assistant",
      "recruitment",
      "talent acquisition",
      "people operations",
      "hr coordinator",
    ],
  },

  {
    id: "healthcare",
    name: "Healthcare",
    slug: "healthcare",
    description:
      "Healthcare opportunities across patient support, healthcare administration, medical services and health-related professional roles.",
    keywords: [
      "healthcare",
      "healthcare assistant",
      "medical assistant",
      "patient support",
      "health services",
      "medical administration",
    ],
  },

  {
    id: "education",
    name: "Education",
    slug: "education",
    description:
      "Education opportunities including teaching, tutoring, academic support, online learning and educational administration.",
    keywords: [
      "teacher",
      "tutor",
      "online tutor",
      "teaching assistant",
      "online teacher",
      "education specialist",
    ],
  },

  {
    id: "construction",
    name: "Construction",
    slug: "construction",
    description:
      "Construction opportunities across building, site operations, project support, technical construction work and infrastructure services.",
    keywords: [
      "construction",
      "construction worker",
      "site assistant",
      "building",
      "construction technician",
      "site coordinator",
    ],
  },

  {
    id: "hospitality",
    name: "Hospitality",
    slug: "hospitality",
    description:
      "Hospitality opportunities across hotels, restaurants, food service, guest relations, front desk operations and hospitality support.",
    keywords: [
      "hospitality",
      "hotel jobs",
      "restaurant jobs",
      "waiter",
      "chef",
      "hotel receptionist",
      "guest services",
    ],
  },

  {
    id: "retail",
    name: "Retail",
    slug: "retail",
    description:
      "Retail opportunities involving stores, customer service, sales, stock management, cashier operations and retail administration.",
    keywords: [
      "retail",
      "retail assistant",
      "cashier",
      "store assistant",
      "retail sales",
      "shop assistant",
      "store clerk",
    ],
  },

  {
    id: "logistics",
    name: "Logistics & Delivery",
    slug: "logistics",
    description:
      "Logistics and delivery opportunities covering transportation, warehouse operations, inventory, dispatch and supply chain support.",
    keywords: [
      "logistics",
      "delivery",
      "warehouse",
      "dispatch",
      "supply chain",
      "logistics assistant",
      "delivery driver",
    ],
  },

  {
    id: "cleaning-maintenance",
    name: "Cleaning & Maintenance",
    slug: "cleaning-maintenance",
    description:
      "Cleaning and maintenance opportunities across facilities, housekeeping, property maintenance and general support services.",
    keywords: [
      "cleaning",
      "cleaner",
      "housekeeping",
      "maintenance",
      "facilities",
      "maintenance assistant",
      "housekeeping attendant",
    ],
  },

  {
    id: "skilled-trades",
    name: "Skilled Trades",
    slug: "skilled-trades",
    description:
      "Skilled trade opportunities for electricians, plumbers, welders, carpenters, technicians, installers and other technical professionals.",
    keywords: [
      "skilled trades",
      "electrician",
      "plumber",
      "welder",
      "carpenter",
      "technician",
      "installer",
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
    salaryMin: 45000,
    salaryMax: 150000,
  },
  {
    name: "United Kingdom",
    slug: "uk",
    code: "GB",
    currency: "GBP",
    salaryMin: 28000,
    salaryMax: 95000,
  },
  {
    name: "Canada",
    slug: "canada",
    code: "CA",
    currency: "CAD",
    salaryMin: 40000,
    salaryMax: 130000,
  },
  {
    name: "Australia",
    slug: "australia",
    code: "AU",
    currency: "AUD",
    salaryMin: 50000,
    salaryMax: 150000,
  },
  {
    name: "Germany",
    slug: "germany",
    code: "DE",
    currency: "EUR",
    salaryMin: 32000,
    salaryMax: 100000,
  },
  {
    name: "France",
    slug: "france",
    code: "FR",
    currency: "EUR",
    salaryMin: 28000,
    salaryMax: 85000,
  },
  {
    name: "Nigeria",
    slug: "nigeria",
    code: "NG",
    currency: "NGN",
    salaryMin: 1200000,
    salaryMax: 15000000,
  },
  {
    name: "South Africa",
    slug: "south-africa",
    code: "ZA",
    currency: "ZAR",
    salaryMin: 120000,
    salaryMax: 900000,
  },
  {
    name: "China",
    slug: "china",
    code: "CN",
    currency: "CNY",
    salaryMin: 80000,
    salaryMax: 450000,
  },
  {
    name: "India",
    slug: "india",
    code: "IN",
    currency: "INR",
    salaryMin: 250000,
    salaryMax: 2500000,
  },
  {
    name: "Japan",
    slug: "japan",
    code: "JP",
    currency: "JPY",
    salaryMin: 3500000,
    salaryMax: 12000000,
  },
  {
    name: "Indonesia",
    slug: "indonesia",
    code: "ID",
    currency: "IDR",
    salaryMin: 45000000,
    salaryMax: 300000000,
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    code: "NZ",
    currency: "NZD",
    salaryMin: 45000,
    salaryMax: 120000,
  },
  {
    name: "Singapore",
    slug: "singapore",
    code: "SG",
    currency: "SGD",
    salaryMin: 30000,
    salaryMax: 120000,
  },
];


/* =========================================================
   COMPANIES
========================================================= */

export const opportunityCompanies: OpportunityCompany[] = [
  /* UNITED STATES */

  {
    id: "company-redwood-digital",
    name: "Redwood Digital",
    slug: "redwood-digital",
    country: "United States",
    countrySlug: "usa",
    industry: "Technology and Digital Services",
    description:
      "Redwood Digital is a technology and digital services organisation serving businesses that need dependable digital products, online platforms and modern technology solutions. Its teams bring together software professionals, digital specialists, analysts and business operators to support products throughout their development and operational lifecycle. The organisation places emphasis on thoughtful engineering, clear communication, reliable delivery and practical solutions that can adapt as customer requirements evolve.",
  },

  {
    id: "company-harbor-ridge-solutions",
    name: "Harbor Ridge Solutions",
    slug: "harbor-ridge-solutions",
    country: "United States",
    countrySlug: "usa",
    industry: "Business and Professional Services",
    description:
      "Harbor Ridge Solutions provides business and professional services to organisations seeking stronger operational processes, customer support and administrative efficiency. Its teams work across a variety of business functions and help clients manage practical requirements through organised workflows and responsive service. The company values accountability, professionalism, analytical thinking and dependable communication, creating an environment where employees can contribute directly to measurable business outcomes.",
  },

  {
    id: "company-oak-stone-group",
    name: "Oak & Stone Group",
    slug: "oak-and-stone-group",
    country: "United States",
    countrySlug: "usa",
    industry: "Commercial Services",
    description:
      "Oak & Stone Group is a diversified commercial services organisation supporting businesses through professional, operational and customer-focused solutions. Its activities involve teams with different areas of expertise who work together to address client requirements and improve everyday business processes. The organisation encourages ownership, collaboration and continuous improvement while maintaining a strong focus on service quality and long-term professional relationships.",
  },

  /* UNITED KINGDOM */

  {
    id: "company-ashford-co",
    name: "Ashford & Co",
    slug: "ashford-and-co",
    country: "United Kingdom",
    countrySlug: "uk",
    industry: "Professional Services",
    description:
      "Ashford & Co is a professional services organisation supporting businesses through a combination of operational, administrative and customer-focused activities. Its teams are structured around dependable service delivery and clear communication, helping clients manage everyday requirements while responding to changing commercial conditions. The company values professionalism, attention to detail, collaboration and the development of people who can take responsibility for meaningful work.",
  },

  {
    id: "company-westbury-solutions",
    name: "Westbury Solutions",
    slug: "westbury-solutions",
    country: "United Kingdom",
    countrySlug: "uk",
    industry: "Business Solutions",
    description:
      "Westbury Solutions provides business-focused services for organisations looking to improve their operations, customer experience and internal processes. The company combines structured workflows with teams that understand the practical realities of day-to-day business activity. Its working culture places emphasis on reliability, communication, analytical thinking and continuous improvement, while giving employees opportunities to develop expertise across their areas of responsibility.",
  },

  {
    id: "company-bromley-services",
    name: "Bromley Services",
    slug: "bromley-services",
    country: "United Kingdom",
    countrySlug: "uk",
    industry: "Business and Customer Services",
    description:
      "Bromley Services supports organisations and customers through a range of professional and operational services. Its teams focus on responsive communication, accurate execution and consistent customer support, helping clients manage practical requirements efficiently. The organisation encourages employees to understand customer needs, work collaboratively and maintain high professional standards while contributing ideas that can improve service delivery.",
  },

  /* CANADA */

  {
    id: "company-maple-ridge-services",
    name: "Maple Ridge Services",
    slug: "maple-ridge-services",
    country: "Canada",
    countrySlug: "canada",
    industry: "Professional Services",
    description:
      "Maple Ridge Services provides professional and operational support to businesses and customers across Canada. The organisation combines structured business processes with service-focused teams to help clients manage practical requirements efficiently. Its environment encourages reliability, thoughtful communication and responsible decision making, while employees are expected to understand customer requirements and contribute to sustainable improvements in service quality.",
  },

  {
    id: "company-north-shore-solutions",
    name: "North Shore Solutions",
    slug: "north-shore-solutions",
    country: "Canada",
    countrySlug: "canada",
    industry: "Business Solutions",
    description:
      "North Shore Solutions delivers business-oriented services for organisations seeking dependable operational and professional support. Its teams combine practical knowledge with organised workflows to address client requirements and improve business processes. The organisation values collaboration, responsiveness and attention to detail, creating a working environment where professionals can solve problems while developing strong relationships with colleagues and customers.",
  },

  {
    id: "company-cedar-lake-group",
    name: "Cedar & Lake Group",
    slug: "cedar-and-lake-group",
    country: "Canada",
    countrySlug: "canada",
    industry: "Commercial Services",
    description:
      "Cedar & Lake Group is a commercial services organisation supporting customers and businesses through professional services and operational solutions. The company brings together people with different skills and encourages them to approach assignments with clear objectives and a strong understanding of client requirements. Its culture focuses on quality, accountability, communication and continuous operational improvement.",
  },

  /* AUSTRALIA */

  {
    id: "company-southern-cross-services",
    name: "Southern Cross Services",
    slug: "southern-cross-services",
    country: "Australia",
    countrySlug: "australia",
    industry: "Professional and Business Services",
    description:
      "Southern Cross Services provides professional and business support solutions for organisations operating across Australia's diverse commercial environment. Its teams help clients manage operational requirements through structured processes, responsive communication and practical service delivery. The organisation values professionalism, accountability and collaboration while encouraging employees to develop their expertise and contribute ideas that improve customer outcomes.",
  },

  {
    id: "company-coastal-ridge-solutions",
    name: "Coastal Ridge Solutions",
    slug: "coastal-ridge-solutions",
    country: "Australia",
    countrySlug: "australia",
    industry: "Business Solutions",
    description:
      "Coastal Ridge Solutions works with businesses that require dependable operational, administrative and professional support. The organisation combines experienced teams with organised workflows to address customer requirements and improve everyday business processes. Its working culture is built around communication, reliability and practical problem solving, with employees encouraged to take ownership of their work and contribute to service improvements.",
  },

  {
    id: "company-harbour-street-group",
    name: "Harbour Street Group",
    slug: "harbour-street-group",
    country: "Australia",
    countrySlug: "australia",
    industry: "Commercial Services",
    description:
      "Harbour Street Group provides commercial and professional services to organisations seeking practical support across their day-to-day operations. The company encourages employees to work collaboratively, communicate clearly and understand the wider objectives behind each assignment. Its service model focuses on dependable execution, customer satisfaction and operational efficiency while supporting teams in developing valuable professional capabilities.",
  },

  /* GERMANY */

  {
    id: "company-rheinblick-solutions",
    name: "Rheinblick Solutions",
    slug: "rheinblick-solutions",
    country: "Germany",
    countrySlug: "germany",
    industry: "Technology and Business Services",
    description:
      "Rheinblick Solutions provides technology and business services to organisations looking to improve digital operations, internal processes and customer-facing solutions. The company combines structured working practices with specialist expertise and a strong focus on dependable delivery. Teams are encouraged to approach challenges methodically, communicate effectively and develop solutions that provide practical value to clients.",
  },

  {
    id: "company-westfalen-digital",
    name: "Westfalen Digital",
    slug: "westfalen-digital",
    country: "Germany",
    countrySlug: "germany",
    industry: "Digital Services",
    description:
      "Westfalen Digital focuses on digital services and technology-enabled business solutions for organisations adapting to changing customer expectations and modern working practices. Its teams work across digital operations, technology support and online services, combining technical expertise with structured project delivery. The organisation values quality, precision, collaboration and continuous improvement across its professional teams.",
  },

  {
    id: "company-hanseatic-business-services",
    name: "Hanseatic Business Services",
    slug: "hanseatic-business-services",
    country: "Germany",
    countrySlug: "germany",
    industry: "Business Services",
    description:
      "Hanseatic Business Services supports organisations through professional, administrative and operational services designed to improve everyday business performance. The company emphasises dependable processes, clear communication and careful attention to client requirements. Its teams work collaboratively to provide practical support while maintaining professional standards and developing efficient approaches to recurring business challenges.",
  },

  /* FRANCE */

  {
    id: "company-maison-riviere",
    name: "Maison Rivière",
    slug: "maison-riviere",
    country: "France",
    countrySlug: "france",
    industry: "Professional Services",
    description:
      "Maison Rivière provides professional and commercial services to businesses and customers in France. The organisation combines service expertise with structured operations, focusing on quality, responsiveness and strong professional relationships. Its teams work across a variety of activities and are encouraged to bring initiative, attention to detail and practical problem-solving skills to their responsibilities.",
  },

  {
    id: "company-bellecour-conseil",
    name: "Bellecour Conseil",
    slug: "bellecour-conseil",
    country: "France",
    countrySlug: "france",
    industry: "Business Consulting and Services",
    description:
      "Bellecour Conseil supports organisations through professional services and practical business solutions. Its work is centred on helping clients manage operational requirements, improve processes and respond effectively to changing market conditions. The organisation values analytical thinking, communication, professionalism and collaborative working relationships, while encouraging employees to develop specialised expertise within their roles.",
  },

  {
    id: "company-montparnasse-services",
    name: "Montparnasse Services",
    slug: "montparnasse-services",
    country: "France",
    countrySlug: "france",
    industry: "Commercial Services",
    description:
      "Montparnasse Services delivers customer-focused and professional services to organisations and individuals across France. The company places emphasis on dependable service, organised operations and understanding the specific requirements of its customers. Employees are encouraged to work collaboratively, communicate clearly and contribute to improvements in service quality and operational efficiency.",
  },

  /* NIGERIA */

  {
    id: "company-oakfield-services",
    name: "Oakfield Services",
    slug: "oakfield-services",
    country: "Nigeria",
    countrySlug: "nigeria",
    industry: "Business and Professional Services",
    description:
      "Oakfield Services provides professional and operational services to businesses and customers in Nigeria. The organisation supports clients through practical solutions, responsive service and structured business processes designed around everyday commercial needs. Its teams value professionalism, accountability, communication and the ability to deliver reliable results in a fast-changing business environment.",
  },

  {
    id: "company-cedar-point-nigeria",
    name: "Cedar Point Nigeria",
    slug: "cedar-point-nigeria",
    country: "Nigeria",
    countrySlug: "nigeria",
    industry: "Business Services",
    description:
      "Cedar Point Nigeria provides business and customer-focused services to organisations operating across different sectors of the Nigerian economy. The company combines local market understanding with organised service delivery and practical operational support. Its working culture emphasises reliability, teamwork, customer satisfaction and the continuous development of useful professional capabilities.",
  },

  {
    id: "company-mainland-business-solutions",
    name: "Mainland Business Solutions",
    slug: "mainland-business-solutions",
    country: "Nigeria",
    countrySlug: "nigeria",
    industry: "Business Solutions",
    description:
      "Mainland Business Solutions supports businesses with professional services, administrative assistance and operational solutions designed to make everyday work more efficient. The organisation works with customers and business teams to understand practical requirements and provide dependable support. Its culture encourages professionalism, collaboration, clear communication and a strong commitment to service quality.",
  },

  /* SOUTH AFRICA */

  {
    id: "company-cape-ridge-services",
    name: "Cape Ridge Services",
    slug: "cape-ridge-services",
    country: "South Africa",
    countrySlug: "south-africa",
    industry: "Professional Services",
    description:
      "Cape Ridge Services provides professional and operational support to businesses and customers across South Africa. The organisation combines structured processes with service-oriented teams to address everyday commercial requirements. Its approach places emphasis on reliability, communication, accountability and delivering practical solutions that create lasting value for clients.",
  },

  {
    id: "company-highveld-business-solutions",
    name: "Highveld Business Solutions",
    slug: "highveld-business-solutions",
    country: "South Africa",
    countrySlug: "south-africa",
    industry: "Business Solutions",
    description:
      "Highveld Business Solutions works with organisations seeking dependable business, administrative and operational support. The company brings together professionals with different areas of expertise and encourages collaborative problem solving. Its service approach focuses on customer requirements, operational efficiency, consistent communication and the delivery of useful business outcomes.",
  },

  {
    id: "company-golden-mile-services",
    name: "Golden Mile Services",
    slug: "golden-mile-services",
    country: "South Africa",
    countrySlug: "south-africa",
    industry: "Commercial Services",
    description:
      "Golden Mile Services provides commercial and customer-focused services designed to support businesses with practical day-to-day requirements. The organisation values professional service, responsive communication and reliable execution. Its teams are encouraged to understand customer expectations, work collaboratively and contribute to improvements in operational quality.",
  },

  /* CHINA */

  {
    id: "company-shanghai-horizon-services",
    name: "Shanghai Horizon Services",
    slug: "shanghai-horizon-services",
    country: "China",
    countrySlug: "china",
    industry: "Business and Technology Services",
    description:
      "Shanghai Horizon Services provides professional and technology-enabled business services for organisations operating in China's dynamic commercial environment. The company supports clients through structured operations, digital services and practical business solutions designed to improve efficiency and customer experience. Its teams work across different professional disciplines and value precision, collaboration, responsiveness and continuous improvement.",
  },

  {
    id: "company-beijing-northbridge-solutions",
    name: "Beijing Northbridge Solutions",
    slug: "beijing-northbridge-solutions",
    country: "China",
    countrySlug: "china",
    industry: "Technology and Business Solutions",
    description:
      "Beijing Northbridge Solutions works with businesses seeking technology, operational and professional support. The organisation combines specialist knowledge with structured processes to help clients address practical business requirements and develop more efficient ways of working. Its teams are encouraged to approach projects carefully, communicate clearly and contribute solutions that are useful, sustainable and responsive to changing market needs.",
  },

  {
    id: "company-shenzhen-coastal-digital",
    name: "Shenzhen Coastal Digital",
    slug: "shenzhen-coastal-digital",
    country: "China",
    countrySlug: "china",
    industry: "Digital Services",
    description:
      "Shenzhen Coastal Digital provides digital and technology services for businesses developing their online operations and customer-facing capabilities. The company brings together technical, creative and operational professionals to support digital products, online services and business processes. Its working environment values innovation, practical execution, teamwork and the ability to turn changing requirements into dependable digital solutions.",
  },

  /* INDIA */

  {
    id: "company-banyan-tree-solutions",
    name: "Banyan Tree Solutions",
    slug: "banyan-tree-solutions",
    country: "India",
    countrySlug: "india",
    industry: "Technology and Professional Services",
    description:
      "Banyan Tree Solutions provides technology and professional services to businesses seeking reliable support across digital operations, administration and customer-focused activities. The organisation combines experienced teams with structured processes to help clients manage their requirements efficiently. Its culture encourages collaboration, continuous learning, professional accountability and the development of practical solutions that support long-term business relationships.",
  },

  {
    id: "company-crescent-business-services",
    name: "Crescent Business Services",
    slug: "crescent-business-services",
    country: "India",
    countrySlug: "india",
    industry: "Business Services",
    description:
      "Crescent Business Services supports businesses through administrative, professional and operational services tailored to everyday commercial requirements. The company focuses on dependable execution, responsive communication and organised workflows that help clients manage their activities effectively. Its teams are encouraged to combine attention to detail with practical problem solving while maintaining a strong commitment to customer service.",
  },

  {
    id: "company-blue-lotus-technologies",
    name: "Blue Lotus Technologies",
    slug: "blue-lotus-technologies",
    country: "India",
    countrySlug: "india",
    industry: "Technology Services",
    description:
      "Blue Lotus Technologies develops and supports technology-focused services for organisations adapting to increasingly digital business environments. Its teams work across software, digital operations and technology support, combining technical capability with a practical understanding of business requirements. The organisation values innovation, quality, collaboration and continuous development while maintaining a strong focus on dependable delivery.",
  },

  /* JAPAN */

  {
    id: "company-hikari-solutions",
    name: "Hikari Solutions",
    slug: "hikari-solutions",
    country: "Japan",
    countrySlug: "japan",
    industry: "Technology and Business Services",
    description:
      "Hikari Solutions provides technology and business services for organisations seeking dependable support across digital operations and professional activities. The company places strong emphasis on careful execution, service quality and structured processes. Its teams bring together different areas of expertise and work collaboratively to develop practical solutions while maintaining attention to detail and customer requirements.",
  },

  {
    id: "company-sakura-business-services",
    name: "Sakura Business Services",
    slug: "sakura-business-services",
    country: "Japan",
    countrySlug: "japan",
    industry: "Professional Services",
    description:
      "Sakura Business Services supports businesses through professional, administrative and operational services designed to improve everyday business activities. The organisation values reliability, clear communication and consistent attention to client requirements. Its teams work in a structured environment that encourages cooperation, professional development and continuous improvement in service delivery.",
  },

  {
    id: "company-mori-digital",
    name: "Mori Digital",
    slug: "mori-digital",
    country: "Japan",
    countrySlug: "japan",
    industry: "Digital Technology",
    description:
      "Mori Digital focuses on digital technology and online business services for organisations developing modern customer experiences and digital operations. The company brings together technical and creative professionals who collaborate on practical digital solutions. Its approach combines careful planning, quality execution and an understanding of the changing expectations of businesses and their customers.",
  },

  /* INDONESIA */

  {
    id: "company-nusantara-business-services",
    name: "Nusantara Business Services",
    slug: "nusantara-business-services",
    country: "Indonesia",
    countrySlug: "indonesia",
    industry: "Business and Professional Services",
    description:
      "Nusantara Business Services provides professional and operational support to organisations working across Indonesia's diverse business environment. The company helps clients manage administrative, customer and business requirements through structured processes and responsive service. Its teams value collaboration, reliability, practical problem solving and the ability to adapt services to changing customer and market needs.",
  },

  {
    id: "company-jakarta-crest-solutions",
    name: "Jakarta Crest Solutions",
    slug: "jakarta-crest-solutions",
    country: "Indonesia",
    countrySlug: "indonesia",
    industry: "Business Solutions",
    description:
      "Jakarta Crest Solutions works with businesses seeking dependable professional and operational support. The organisation combines service-focused teams with organised workflows to help clients address everyday commercial requirements and improve business processes. Its working culture encourages accountability, teamwork, communication and a continuous focus on delivering useful outcomes for customers.",
  },

  {
    id: "company-garuda-digital",
    name: "Garuda Digital",
    slug: "garuda-digital",
    country: "Indonesia",
    countrySlug: "indonesia",
    industry: "Digital Services",
    description:
      "Garuda Digital provides digital services and technology-enabled solutions for businesses building stronger online operations. The company brings together professionals across technology, digital content, customer experience and business support. Its teams focus on practical execution, creative problem solving and dependable service while helping clients respond to the opportunities created by an increasingly connected economy.",
  },

  /* NEW ZEALAND */

  {
    id: "company-southern-alps-services",
    name: "Southern Alps Services",
    slug: "southern-alps-services",
    country: "New Zealand",
    countrySlug: "new-zealand",
    industry: "Professional Services",
    description:
      "Southern Alps Services provides professional and operational support to businesses and customers across New Zealand. The organisation focuses on dependable service delivery, practical business assistance and responsive customer support. Its teams work collaboratively and value professionalism, reliability, clear communication and the ability to provide solutions that reflect the individual needs of clients.",
  },

  {
    id: "company-harbour-view-solutions",
    name: "Harbour View Solutions",
    slug: "harbour-view-solutions",
    country: "New Zealand",
    countrySlug: "new-zealand",
    industry: "Business Solutions",
    description:
      "Harbour View Solutions supports organisations through a range of professional, administrative and business services. The company combines organised processes with customer-focused teams to help clients manage their everyday responsibilities effectively. Its working environment promotes collaboration, accountability, continuous learning and a strong commitment to dependable service.",
  },

  {
    id: "company-kauri-business-group",
    name: "Kauri Business Group",
    slug: "kauri-business-group",
    country: "New Zealand",
    countrySlug: "new-zealand",
    industry: "Commercial Services",
    description:
      "Kauri Business Group provides commercial and professional services to organisations looking for practical support and reliable execution. The company works across several areas of business activity and encourages employees to understand client requirements before developing appropriate solutions. Its culture is centred on professionalism, communication, teamwork and sustainable customer relationships.",
  },

  /* SINGAPORE */

  {
    id: "company-marina-business-services",
    name: "Marina Business Services",
    slug: "marina-business-services",
    country: "Singapore",
    countrySlug: "singapore",
    industry: "Professional and Business Services",
    description:
      "Marina Business Services provides professional and operational support to organisations operating in Singapore's highly connected business environment. The company combines structured processes with responsive service to help clients manage administrative, commercial and customer-focused activities. Its teams value efficiency, professionalism, clear communication and the ability to respond effectively to changing business requirements.",
  },

  {
    id: "company-orchard-crest-solutions",
    name: "Orchard Crest Solutions",
    slug: "orchard-crest-solutions",
    country: "Singapore",
    countrySlug: "singapore",
    industry: "Business Solutions",
    description:
      "Orchard Crest Solutions works with businesses seeking dependable professional and operational solutions. The organisation supports clients through structured workflows, specialist services and customer-focused assistance designed to improve everyday business performance. Its working culture encourages collaboration, accountability, careful execution and continuous improvement across its service areas.",
  },

  {
    id: "company-lion-city-digital",
    name: "Lion City Digital",
    slug: "lion-city-digital",
    country: "Singapore",
    countrySlug: "singapore",
    industry: "Digital Technology",
    description:
      "Lion City Digital provides digital and technology services for organisations developing modern online products, customer experiences and business operations. The company brings together technical, creative and business professionals who work collaboratively to deliver practical digital solutions. Its approach focuses on quality, innovation, reliable execution and an understanding of how technology can improve everyday business activities.",
  },
];


/* =========================================================
   JOB TITLES
========================================================= */

const titlesByCategory: Record<string, string[]> = {
  "frontend-developer": [
    "Frontend Developer",
    "Frontend Engineer",
    "React Developer",
    "JavaScript Developer",
    "UI Developer",
  ],

  "backend-developer": [
    "Backend Developer",
    "Backend Engineer",
    "API Developer",
    "Server-Side Developer",
    "Node.js Developer",
  ],

  "full-stack-developer": [
    "Full Stack Developer",
    "Full Stack Engineer",
    "Full Stack Software Engineer",
    "Web Application Developer",
    "Full Stack Web Developer",
  ],

  "software-engineer": [
    "Software Engineer",
    "Software Developer",
    "Application Developer",
    "Software Development Engineer",
    "Software Engineer II",
  ],

  "mobile-developer": [
    "Mobile App Developer",
    "React Native Developer",
    "Flutter Developer",
    "Android Developer",
    "Mobile Software Engineer",
  ],

  "data-entry": [
    "Data Entry Specialist",
    "Data Entry Clerk",
    "Data Processing Assistant",
    "Online Data Entry Specialist",
    "Data Entry Operator",
  ],

  "virtual-assistant": [
    "Virtual Assistant",
    "Remote Administrative Assistant",
    "Executive Virtual Assistant",
    "Online Virtual Assistant",
    "Virtual Office Assistant",
  ],

  "customer-support": [
    "Customer Support Specialist",
    "Customer Service Representative",
    "Customer Experience Associate",
    "Client Support Representative",
    "Customer Care Specialist",
  ],

  "digital-marketing": [
    "Digital Marketing Specialist",
    "Digital Marketing Coordinator",
    "Growth Marketing Associate",
    "Performance Marketing Specialist",
    "Digital Marketing Executive",
  ],

  "seo-specialist": [
    "SEO Specialist",
    "SEO Analyst",
    "Technical SEO Specialist",
    "SEO Content Specialist",
    "Search Marketing Specialist",
  ],

  "graphic-designer": [
    "Graphic Designer",
    "Visual Designer",
    "Brand Designer",
    "Creative Designer",
    "Digital Designer",
  ],

  "content-writer": [
    "Content Writer",
    "Copywriter",
    "Technical Writer",
    "SEO Content Writer",
    "Digital Content Writer",
  ],

  "social-media-manager": [
    "Social Media Manager",
    "Social Media Specialist",
    "Community Manager",
    "Social Media Coordinator",
    "Social Content Manager",
  ],

  "data-analyst": [
    "Data Analyst",
    "Business Data Analyst",
    "Reporting Analyst",
    "Business Intelligence Analyst",
    "Data Specialist",
  ],

  "project-manager": [
    "Project Manager",
    "Project Coordinator",
    "Program Coordinator",
    "Delivery Manager",
    "Project Operations Manager",
  ],

  sales: [
    "Sales Representative",
    "Sales Executive",
    "Business Development Representative",
    "Account Executive",
    "Inside Sales Representative",
  ],

  "finance-accounting": [
    "Accountant",
    "Accounts Assistant",
    "Bookkeeper",
    "Finance Officer",
    "Financial Analyst",
  ],

  "human-resources": [
    "HR Specialist",
    "Human Resources Officer",
    "HR Assistant",
    "Recruitment Specialist",
    "Talent Acquisition Coordinator",
  ],

  healthcare: [
    "Healthcare Assistant",
    "Medical Administrative Assistant",
    "Healthcare Coordinator",
    "Patient Support Specialist",
    "Health Services Assistant",
  ],

  education: [
    "Teacher",
    "Online Tutor",
    "Teaching Assistant",
    "Academic Support Specialist",
    "Education Coordinator",
  ],

  construction: [
    "Construction Worker",
    "Construction Assistant",
    "Site Assistant",
    "Construction Technician",
    "Building Technician",
  ],

  hospitality: [
    "Hotel Receptionist",
    "Waiter",
    "Restaurant Server",
    "Kitchen Assistant",
    "Hospitality Assistant",
  ],

  retail: [
    "Retail Associate",
    "Cashier",
    "Store Assistant",
    "Retail Sales Associate",
    "Store Clerk",
  ],

  logistics: [
    "Logistics Assistant",
    "Warehouse Assistant",
    "Delivery Coordinator",
    "Warehouse Associate",
    "Logistics Coordinator",
  ],

  "cleaning-maintenance": [
    "Cleaner",
    "Housekeeping Assistant",
    "Cleaning Technician",
    "Maintenance Assistant",
    "Facilities Assistant",
  ],

  "skilled-trades": [
    "Electrician",
    "Plumber",
    "Welder",
    "Carpenter",
    "Maintenance Technician",
  ],
};


/* =========================================================
   CATEGORY SKILLS
========================================================= */

const skillsByCategory: Record<string, string[]> = {
  "frontend-developer": [
    "JavaScript",
    "TypeScript",
    "React",
    "HTML",
    "CSS",
    "Responsive Design",
  ],

  "backend-developer": [
    "APIs",
    "Node.js",
    "Python",
    "Databases",
    "REST",
    "Server-side Development",
  ],

  "full-stack-developer": [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "APIs",
    "Databases",
  ],

  "software-engineer": [
    "Software Development",
    "Programming",
    "Git",
    "Testing",
    "APIs",
    "Problem Solving",
  ],

  "mobile-developer": [
    "React Native",
    "Flutter",
    "Android",
    "iOS",
    "Mobile UI",
    "API Integration",
  ],

  "data-entry": [
    "Data Entry",
    "Microsoft Excel",
    "Typing",
    "Data Processing",
    "Accuracy",
    "Online Research",
  ],

  "virtual-assistant": [
    "Administration",
    "Email Management",
    "Scheduling",
    "Online Research",
    "Customer Support",
    "Organisation",
  ],

  "customer-support": [
    "Customer Service",
    "Communication",
    "Email Support",
    "Chat Support",
    "Problem Solving",
    "CRM",
  ],

  "digital-marketing": [
    "Digital Marketing",
    "Social Media",
    "Content Marketing",
    "Analytics",
    "Campaign Management",
    "Lead Generation",
  ],

  "seo-specialist": [
    "SEO",
    "Keyword Research",
    "Technical SEO",
    "Content SEO",
    "Google Search",
    "Analytics",
  ],

  "graphic-designer": [
    "Graphic Design",
    "Adobe Creative Suite",
    "Branding",
    "Typography",
    "Visual Design",
    "Digital Design",
  ],

  "content-writer": [
    "Content Writing",
    "Copywriting",
    "SEO Writing",
    "Research",
    "Editing",
    "Digital Content",
  ],

  "social-media-manager": [
    "Social Media",
    "Content Planning",
    "Community Management",
    "Analytics",
    "Campaign Management",
    "Content Creation",
  ],

  "data-analyst": [
    "Data Analysis",
    "Excel",
    "SQL",
    "Reporting",
    "Data Visualisation",
    "Business Intelligence",
  ],

  "project-manager": [
    "Project Management",
    "Planning",
    "Stakeholder Management",
    "Agile",
    "Project Coordination",
    "Reporting",
  ],

  sales: [
    "Sales",
    "Lead Generation",
    "Customer Acquisition",
    "Communication",
    "Negotiation",
    "CRM",
  ],

  "finance-accounting": [
    "Accounting",
    "Bookkeeping",
    "Excel",
    "Financial Reporting",
    "Accounts Payable",
    "Accounts Receivable",
  ],

  "human-resources": [
    "Recruitment",
    "Human Resources",
    "Employee Relations",
    "Talent Acquisition",
    "HR Administration",
    "Communication",
  ],

  healthcare: [
    "Patient Support",
    "Healthcare Administration",
    "Communication",
    "Record Management",
    "Customer Service",
    "Healthcare Operations",
  ],

  education: [
    "Teaching",
    "Communication",
    "Lesson Planning",
    "Student Support",
    "Online Learning",
    "Education",
  ],

  construction: [
    "Construction",
    "Site Safety",
    "Building",
    "Equipment",
    "Project Support",
    "Site Operations",
  ],

  hospitality: [
    "Customer Service",
    "Hospitality",
    "Guest Relations",
    "Food Service",
    "Communication",
    "Teamwork",
  ],

  retail: [
    "Customer Service",
    "Retail Sales",
    "Cash Handling",
    "Inventory",
    "Stock Management",
    "Communication",
  ],

  logistics: [
    "Logistics",
    "Warehouse Operations",
    "Inventory",
    "Dispatch",
    "Supply Chain",
    "Organisation",
  ],

  "cleaning-maintenance": [
    "Cleaning",
    "Facilities",
    "Maintenance",
    "Safety",
    "Property Care",
    "Equipment",
  ],

  "skilled-trades": [
    "Technical Skills",
    "Safety",
    "Equipment",
    "Installation",
    "Maintenance",
    "Troubleshooting",
  ],
};


/* =========================================================
   LOCATIONS
========================================================= */

const locationsByCountry: Record<string, string[]> = {
  usa: [
    "New York, NY",
    "Los Angeles, CA",
    "Austin, TX",
    "Chicago, IL",
    "Remote",
  ],

  uk: [
    "London",
    "Manchester",
    "Birmingham",
    "Leeds",
    "Remote",
  ],

  canada: [
    "Toronto, ON",
    "Vancouver, BC",
    "Montreal, QC",
    "Calgary, AB",
    "Remote",
  ],

  australia: [
    "Sydney, NSW",
    "Melbourne, VIC",
    "Brisbane, QLD",
    "Perth, WA",
    "Remote",
  ],

  germany: [
    "Berlin",
    "Munich",
    "Hamburg",
    "Frankfurt",
    "Remote",
  ],

  france: [
    "Paris",
    "Lyon",
    "Marseille",
    "Toulouse",
    "Remote",
  ],

  nigeria: [
    "Lagos",
    "Abuja",
    "Port Harcourt",
    "Ibadan",
    "Remote",
  ],

  "south-africa": [
    "Johannesburg",
    "Cape Town",
    "Durban",
    "Pretoria",
    "Remote",
  ],

  china: [
    "Shanghai",
    "Beijing",
    "Shenzhen",
    "Guangzhou",
    "Remote",
  ],

  india: [
    "Bengaluru",
    "Mumbai",
    "Delhi",
    "Hyderabad",
    "Remote",
  ],

  japan: [
    "Tokyo",
    "Osaka",
    "Kyoto",
    "Yokohama",
    "Remote",
  ],

  indonesia: [
    "Jakarta",
    "Bandung",
    "Surabaya",
    "Bali",
    "Remote",
  ],

  "new-zealand": [
    "Auckland",
    "Wellington",
    "Christchurch",
    "Hamilton",
    "Remote",
  ],

  singapore: [
    "Singapore",
    "Remote",
  ],
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
  companyIndex: number,
) {
  const value =
    (categoryIndex + 19) * 7919 +
    (companyIndex + 37) * 1543;

  return value.toString(36);
}

function getCountry(countrySlug: string) {
  return opportunityCountries.find(
    (country) => country.slug === countrySlug,
  );
}

// function getCategory(categorySlug: string) {
//   return opportunityCategories.find(
//     (category) => category.slug === categorySlug,
//   );
// }


/* =========================================================
   OPPORTUNITY DESCRIPTION
========================================================= */

function createOpportunityDescription(
  title: string,
  category: OpportunityCategory,
  company: OpportunityCompany,
  location: string,
  workMode: CategoryOpportunity["workMode"],
) {
  const workText =
    workMode === "REMOTE"
      ? `This is a remote opportunity available to eligible candidates who can work effectively from their location.`
      : workMode === "HYBRID"
        ? `The position follows a hybrid working arrangement combining remote work with collaboration from the ${location} area.`
        : `The position is based in ${location} and involves working with the company's relevant teams and operations.`;

  return `${company.name} is looking for a ${title} to join its ${company.industry.toLowerCase()} operations. This opportunity sits within ${category.name.toLowerCase()} and is suited to a professional who can contribute practical skills, communicate effectively and take responsibility for delivering high-quality work. ${workText} The successful candidate will work with colleagues and relevant stakeholders, contribute to day-to-day responsibilities and help support the organisation's wider operational goals. Candidates should be organised, dependable and comfortable working independently while collaborating with others when required.`;
}


/* =========================================================
   GENERATE OPPORTUNITIES
========================================================= */

function createOpportunities(): CategoryOpportunity[] {
  const results: CategoryOpportunity[] = [];

  opportunityCategories.forEach(
    (category, categoryIndex) => {
      opportunityCompanies.forEach(
        (company, companyIndex) => {
          const country = getCountry(company.countrySlug);

          if (!country) {
            return;
          }

          const titles =
            titlesByCategory[category.slug] ?? [
              `${category.name} Specialist`,
            ];

          const skills =
            skillsByCategory[category.slug] ?? [];

          const locations =
            locationsByCountry[company.countrySlug] ?? [
              "Remote",
            ];

          /*
           * Every company receives one opportunity
           * for every category.
           *
           * 24 categories × 42 companies = 1,008
           * opportunities.
           */

          const title =
            titles[
              companyIndex % titles.length
            ];

          const location =
            locations[
              companyIndex % locations.length
            ];

          const workMode =
            location === "Remote"
              ? "REMOTE"
              : companyIndex % 3 === 0
                ? "HYBRID"
                : "ONSITE";

          const experienceLevel =
            companyIndex % 4 === 0
              ? "ENTRY_LEVEL"
              : companyIndex % 4 === 1
                ? "MID_LEVEL"
                : companyIndex % 4 === 2
                  ? "SENIOR_LEVEL"
                  : "ENTRY_LEVEL";

          const jobType =
            companyIndex % 5 === 0
              ? "PART_TIME"
              : companyIndex % 7 === 0
                ? "CONTRACT"
                : "FULL_TIME";

          const range =
            country.salaryMax -
            country.salaryMin;

          const salaryMin =
            Math.round(
              country.salaryMin +
                range *
                  ((companyIndex % 5) / 10),
            );

          const salaryMax =
            Math.round(
              country.salaryMin +
                range *
                  (0.45 +
                    (companyIndex % 5) / 10),
            );

          const code = deterministicCode(
            categoryIndex,
            companyIndex,
          );

          const slug =
            `${slugify(title)}-${company.countrySlug}-${code}`;

          const description =
            createOpportunityDescription(
              title,
              category,
              company,
              location,
              workMode,
            );

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

            skills: skills.slice(0, 6),

            keywords: [
              ...category.keywords,
              title.toLowerCase(),
              company.name.toLowerCase(),
              country.name.toLowerCase(),
              location.toLowerCase(),
            ],

            publishedDaysAgo:
              (companyIndex % 5) + 1,

            /*
             * These are generated platform opportunities.
             * They should not be presented as independently
             * verified vacancies until a real source/application
             * is connected.
             */
            isVerified: false,

            isFeatured:
              companyIndex % 7 === 0,

            isActive: true,

            applicationUrl: null,
          });
        },
      );
    },
  );

  return results;
}

export const categoryOpportunities =
  createOpportunities();


/* =========================================================
   LOOKUP FUNCTIONS
========================================================= */

export function getOpportunityCategory(
  slug: string,
) {
  return opportunityCategories.find(
    (category) =>
      category.slug === slug,
  );
}

export function getOpportunityCompany(
  slug: string,
) {
  return opportunityCompanies.find(
    (company) =>
      company.slug === slug,
  );
}

export function getOpportunityBySlug(
  slug: string,
) {
  return categoryOpportunities.find(
    (opportunity) =>
      opportunity.slug === slug,
  );
}

export function getOpportunitiesByCategory(
  categorySlug: string,
) {
  return categoryOpportunities.filter(
    (opportunity) =>
      opportunity.categorySlug ===
      categorySlug,
  );
}

export function getOpportunitiesByCountry(
  countrySlug: string,
) {
  return categoryOpportunities.filter(
    (opportunity) =>
      opportunity.countrySlug ===
      countrySlug,
  );
}

export function getOpportunitiesByCategoryAndCountry(
  categorySlug: string,
  countrySlug: string,
) {
  return categoryOpportunities.filter(
    (opportunity) =>
      opportunity.categorySlug ===
        categorySlug &&
      opportunity.countrySlug ===
        countrySlug,
  );
}

export function getCompaniesByCategory(
  categorySlug: string,
) {
  const opportunities =
    getOpportunitiesByCategory(
      categorySlug,
    );

  const companies = new Map<
    string,
    OpportunityCompany
  >();

  opportunities.forEach(
    (opportunity) => {
      companies.set(
        opportunity.company.slug,
        opportunity.company,
      );
    },
  );

  return Array.from(
    companies.values(),
  );
}

export function getCompaniesByCountry(
  countrySlug: string,
) {
  return opportunityCompanies.filter(
    (company) =>
      company.countrySlug ===
      countrySlug,
  );
}

export function getCompanyOpportunities(
  companySlug: string,
) {
  return categoryOpportunities.filter(
    (opportunity) =>
      opportunity.company.slug ===
      companySlug,
  );
}


/* =========================================================
   COUNTS
========================================================= */

export function getOpportunityCategoryCount() {
  return opportunityCategories.length;
}

export function getOpportunityCompanyCount() {
  return opportunityCompanies.length;
}

export function getOpportunityCount() {
  return categoryOpportunities.length;
}


/* =========================================================
   VALIDATION
========================================================= */

function validateCompanyNames() {
  const names = new Map<
    string,
    string
  >();

  for (const company of opportunityCompanies) {
    const normalized =
      company.name
        .trim()
        .toLowerCase();

    const existing =
      names.get(normalized);

    if (
      existing &&
      existing !== company.countrySlug
    ) {
      throw new Error(
        `Duplicate company name across countries: ${company.name}`,
      );
    }

    names.set(
      normalized,
      company.countrySlug,
    );
  }
}

function validateCategories() {
  const slugs = new Set<string>();

  for (const category of opportunityCategories) {
    if (slugs.has(category.slug)) {
      throw new Error(
        `Duplicate opportunity category slug: ${category.slug}`,
      );
    }

    slugs.add(category.slug);
  }
}

validateCompanyNames();
validateCategories();