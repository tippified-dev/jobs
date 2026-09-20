export type LiveJobCompany = {
  id: string;
  name: string;
  country: string;
  countrySlug: string;
  countryCode: string;
  industry: string;
  description: string;
};

export type LiveJob = {
  id: string;
  slug: string;

  title: string;

  company: LiveJobCompany;

  category: string;
  categorySlug: string;

  country: string;
  countrySlug: string;
  countryCode: string;

  location: string;

  workMode: "REMOTE" | "HYBRID" | "ONSITE";

  employmentType:
    | "FULL_TIME"
    | "PART_TIME"
    | "CONTRACT"
    | "FREELANCE"
    | "TEMPORARY"
    | "INTERNSHIP";

  experienceLevel:
    | "NO_EXPERIENCE"
    | "ENTRY_LEVEL"
    | "MID_LEVEL"
    | "SENIOR_LEVEL"
    | "EXECUTIVE";

  description: string;
  responsibilities: string[];
  qualifications: string[];
  requirements: string[];
  benefits: string[];
  skills: string[];

  salaryMin: number;
  salaryMax: number;
  salaryCurrency: string;
  salaryPeriod: "YEAR" | "MONTH" | "HOUR";

  publishedAt: string;
  validThrough: string;

  applicationUrl: string | null;

  isDemo: boolean;
  isVerified: boolean;
  isFeatured: boolean;
  isActive: boolean;
};

type CountryConfig = {
  name: string;
  slug: string;
  code: string;
  currency: string;
  cities: string[];
  salaryMultiplier: number;
};

const countries: CountryConfig[] = [
  {
    name: "United States",
    slug: "usa",
    code: "US",
    currency: "USD",
    cities: [
      "New York",
      "Austin",
      "Chicago",
      "Seattle",
      "Remote",
    ],
    salaryMultiplier: 1,
  },
  {
    name: "United Kingdom",
    slug: "uk",
    code: "GB",
    currency: "GBP",
    cities: [
      "London",
      "Manchester",
      "Birmingham",
      "Leeds",
      "Remote",
    ],
    salaryMultiplier: 0.78,
  },
  {
    name: "Canada",
    slug: "canada",
    code: "CA",
    currency: "CAD",
    cities: [
      "Toronto",
      "Vancouver",
      "Montreal",
      "Calgary",
      "Remote",
    ],
    salaryMultiplier: 1.08,
  },
  {
    name: "Australia",
    slug: "australia",
    code: "AU",
    currency: "AUD",
    cities: [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
      "Remote",
    ],
    salaryMultiplier: 1.05,
  },
  {
    name: "Germany",
    slug: "germany",
    code: "DE",
    currency: "EUR",
    cities: [
      "Berlin",
      "Munich",
      "Hamburg",
      "Frankfurt",
      "Remote",
    ],
    salaryMultiplier: 0.9,
  },
  {
    name: "France",
    slug: "france",
    code: "FR",
    currency: "EUR",
    cities: [
      "Paris",
      "Lyon",
      "Marseille",
      "Toulouse",
      "Remote",
    ],
    salaryMultiplier: 0.82,
  },
  {
    name: "Nigeria",
    slug: "nigeria",
    code: "NG",
    currency: "NGN",
    cities: [
      "Lagos",
      "Abuja",
      "Port Harcourt",
      "Ibadan",
      "Remote",
    ],
    salaryMultiplier: 0.018,
  },
  {
    name: "South Africa",
    slug: "south-africa",
    code: "ZA",
    currency: "ZAR",
    cities: [
      "Johannesburg",
      "Cape Town",
      "Durban",
      "Pretoria",
      "Remote",
    ],
    salaryMultiplier: 0.22,
  },
  {
    name: "China",
    slug: "china",
    code: "CN",
    currency: "CNY",
    cities: [
      "Shanghai",
      "Beijing",
      "Shenzhen",
      "Guangzhou",
      "Remote",
    ],
    salaryMultiplier: 0.55,
  },
  {
    name: "India",
    slug: "india",
    code: "IN",
    currency: "INR",
    cities: [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Hyderabad",
      "Remote",
    ],
    salaryMultiplier: 0.12,
  },
  {
    name: "Japan",
    slug: "japan",
    code: "JP",
    currency: "JPY",
    cities: [
      "Tokyo",
      "Osaka",
      "Yokohama",
      "Nagoya",
      "Remote",
    ],
    salaryMultiplier: 0.72,
  },
  {
    name: "Indonesia",
    slug: "indonesia",
    code: "ID",
    currency: "IDR",
    cities: [
      "Jakarta",
      "Bandung",
      "Surabaya",
      "Bali",
      "Remote",
    ],
    salaryMultiplier: 0.065,
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    code: "NZ",
    currency: "NZD",
    cities: [
      "Auckland",
      "Wellington",
      "Christchurch",
      "Hamilton",
      "Remote",
    ],
    salaryMultiplier: 0.98,
  },
  {
    name: "Singapore",
    slug: "singapore",
    code: "SG",
    currency: "SGD",
    cities: [
      "Singapore",
      "Remote",
    ],
    salaryMultiplier: 0.92,
  },
];

/*
|--------------------------------------------------------------------------
| Company data
|--------------------------------------------------------------------------
|
| Every company is assigned to one country only.
| These are fictional demonstration employers designed to make the
| production UI and data architecture realistic.
|
*/

const companyProfiles: Record<
  string,
  Array<{
    name: string;
    industry: string;
    description: string;
  }>
> = {
  usa: [
    {
      name: "Northline Digital",
      industry: "Technology",
      description:
        "Northline Digital is a product engineering and digital services company that helps growing businesses build dependable web platforms, customer-facing applications, and internal tools. Its teams work across product strategy, software development, user experience, data, and cloud operations, with an emphasis on practical solutions that can scale as clients grow. The company works with organizations ranging from emerging businesses to established service providers and supports distributed collaboration across multiple time zones.",
    },
    {
      name: "Harbor Point Logistics",
      industry: "Logistics and Transportation",
      description:
        "Harbor Point Logistics provides freight coordination, fulfillment support, inventory services, and last-mile logistics solutions for businesses that need reliable movement of goods across regional and national markets. Its operations combine warehouse teams, transportation partners, customer service specialists, and technology systems that help clients monitor orders and maintain accurate shipment records. The company focuses heavily on operational visibility, dependable service, and responsive communication.",
    },
    {
      name: "Cedar Ridge Foods",
      industry: "Food and Consumer Products",
      description:
        "Cedar Ridge Foods develops, packages, and distributes consumer food products through grocery, hospitality, and direct-to-consumer channels. The company operates teams across production, quality assurance, supply planning, sales, marketing, finance, and customer operations. Its working environment combines structured processes with continuous improvement, giving employees opportunities to contribute to product quality, efficient operations, and customer satisfaction.",
    },
    {
      name: "Brightwell Home Services",
      industry: "Home Services",
      description:
        "Brightwell Home Services coordinates residential maintenance and improvement services for households across several metropolitan areas. Its network includes technicians, customer care representatives, scheduling teams, field supervisors, and administrative staff. The business is built around making home-service appointments easier to arrange while giving customers clear communication from the initial request through completion of the work.",
    },
    {
      name: "Silver Oak Consulting",
      industry: "Business Consulting",
      description:
        "Silver Oak Consulting works with small and mid-sized organizations on operational planning, business analysis, customer experience, process improvement, and technology adoption. Its consultants support clients through research, implementation planning, performance measurement, and practical change-management initiatives. The firm values clear communication, evidence-based recommendations, and solutions that can be implemented by real operating teams.",
    },
    {
      name: "Redwood Commerce",
      industry: "E-commerce",
      description:
        "Redwood Commerce operates digital retail and marketplace services that connect consumers with independent brands and specialized product suppliers. Its teams work across merchandising, customer experience, technology, marketing, fulfillment, and business operations. The company places particular importance on accurate product information, responsive customer support, dependable fulfillment, and creating simple purchasing experiences across desktop and mobile platforms.",
    },
    {
      name: "Westbridge Health",
      industry: "Healthcare Services",
      description:
        "Westbridge Health provides administrative and technology-supported services to healthcare organizations seeking more efficient patient and operational workflows. Its teams support scheduling, documentation, customer communication, data operations, compliance processes, and digital services. The organization emphasizes careful handling of sensitive information, reliable processes, and respectful interactions with patients, providers, and partner organizations.",
    },
    {
      name: "Lakeside Creative Studio",
      industry: "Creative Services",
      description:
        "Lakeside Creative Studio is a multidisciplinary creative agency producing brand identities, digital campaigns, visual content, websites, and social media assets for growing organizations. Its creative teams combine design, writing, strategy, production, and account management to turn business objectives into clear and engaging communication. The studio works with clients across consumer, professional, hospitality, and technology sectors.",
    },
    {
      name: "Clearpath Accounting",
      industry: "Accounting and Financial Services",
      description:
        "Clearpath Accounting provides bookkeeping, financial reporting, payroll support, tax preparation assistance, and accounting operations for individuals and growing businesses. The firm combines experienced accounting professionals with modern cloud-based workflows to help clients maintain accurate records and understand their financial position. Its teams are expected to work carefully with confidential information while communicating financial matters in a clear and practical way.",
    },
    {
       
      name: "Stonefield Manufacturing",
      industry: "Manufacturing",
      description:
        "Stonefield Manufacturing produces specialized components and finished goods for industrial and commercial customers. Its operations span production planning, quality control, procurement, engineering, warehouse management, maintenance, sales, and administrative support. The company emphasizes workplace safety, consistent manufacturing standards, accurate documentation, and continuous improvement across its production processes.",
    },
  ],

  uk: [
    {
      name: "Westmoor Digital",
      industry: "Technology",
      description:
        "Westmoor Digital develops software and digital services for organizations seeking to modernize customer experiences and internal operations. Its teams work across product development, software engineering, design, analytics, and digital delivery, supporting projects from early discovery through long-term improvement. The company encourages practical collaboration between technical and non-technical specialists.",
    },
    {
      name: "Oakbridge Property Services",
      industry: "Property Management",
      description:
        "Oakbridge Property Services manages residential and commercial properties on behalf of landlords, investors, and property owners. Its teams coordinate maintenance requests, tenant communication, inspections, administration, and supplier relationships. The company aims to combine responsive customer service with accurate records and dependable property operations.",
    },
    {
      name: "Greenford Retail Group",
      industry: "Retail",
      description:
        "Greenford Retail Group operates a growing network of consumer retail businesses serving local communities and online customers. The organization manages purchasing, merchandising, customer service, store operations, logistics, digital commerce, and finance. Its teams work in a fast-moving environment where accuracy, service quality, and dependable execution are important.",
    },
    {
      name: "Cambridge Market Research",
      industry: "Market Research",
      description:
        "Cambridge Market Research conducts consumer and business research for organizations that need better information about customers, markets, and emerging trends. Its work includes survey operations, qualitative research, data analysis, research administration, and reporting. The company values careful methodology, accurate data handling, and clear presentation of findings.",
    },
    {
      name: "Harper Lane Care",
      industry: "Care Services",
      description:
        "Harper Lane Care provides community-based support services designed to help people maintain independence and receive practical assistance in their homes and local communities. Its workforce includes care professionals, coordinators, administrators, scheduling teams, and support staff. The organization emphasizes dignity, reliability, safeguarding, and respectful communication.",
    },
  ],

  canada: [
    {
      name: "Maple Coast Technologies",
      industry: "Technology",
      description:
        "Maple Coast Technologies builds digital products and technology services for organizations operating across North American markets. Its teams combine software engineering, product management, design, data, and cloud operations to create dependable business applications. The company supports distributed teams and encourages employees to contribute ideas that improve both products and internal processes.",
    },
    {
      name: "Northern Trail Logistics",
      industry: "Logistics",
      description:
        "Northern Trail Logistics coordinates transportation, warehousing, fulfillment, and delivery services for businesses moving products across Canadian and international markets. Its operations depend on accurate information, effective scheduling, reliable customer communication, and close coordination between field and office teams.",
    },
    {
      name: "Evergreen Hospitality Group",
      industry: "Hospitality",
      description:
        "Evergreen Hospitality Group operates accommodation and guest-service businesses focused on comfortable stays and dependable customer experiences. Its teams include front-desk staff, housekeeping, food-service workers, operations coordinators, marketing specialists, and administrative professionals. The organization emphasizes hospitality, attention to detail, and consistent service standards.",
    },
    {
      name: "Prairie Ledger Services",
      industry: "Accounting",
      description:
        "Prairie Ledger Services supports small businesses with bookkeeping, payroll administration, reporting, invoicing, and financial record management. The company uses cloud-based accounting workflows while maintaining a strong focus on accuracy, confidentiality, and timely communication with clients.",
    },
    {
      name: "Bluewater Customer Solutions",
      industry: "Customer Support",
      description:
        "Bluewater Customer Solutions provides outsourced customer support and administrative services to growing companies. Its teams handle customer inquiries, account assistance, scheduling, order support, and digital communications through multiple channels. The company invests in training and process documentation so that representatives can provide consistent and useful support.",
    },
  ],

  australia: [
    {
      name: "Southern Cross Digital",
      industry: "Technology",
      description:
        "Southern Cross Digital delivers software, web development, analytics, and digital transformation services to Australian and international organizations. Its multidisciplinary teams work on customer platforms, internal systems, digital campaigns, and technology modernization projects.",
    },
    {
      name: "Coastal Trade Services",
      industry: "Trades and Construction",
      description:
        "Coastal Trade Services coordinates residential and commercial maintenance projects across several Australian communities. Its operations include scheduling, trade services, procurement, customer support, site coordination, and administration. The business focuses on reliable workmanship and clear communication throughout each project.",
    },
    {
      name: "Outback Supply Co.",
      industry: "Supply Chain",
      description:
        "Outback Supply Co. distributes equipment, supplies, and commercial products to businesses across metropolitan and regional markets. Its teams manage purchasing, inventory, warehouse operations, customer service, sales, and delivery coordination.",
    },
    {
      name: "Harbourview Learning",
      industry: "Education",
      description:
        "Harbourview Learning provides online and blended learning services for students, professionals, and organizations. Its teams work across teaching, curriculum development, learner support, technology, administration, and content production.",
    },
    {
      name: "Wattle Grove Hospitality",
      industry: "Hospitality",
      description:
        "Wattle Grove Hospitality operates guest accommodation and food-service businesses with a focus on welcoming customer experiences. The company employs teams across reception, housekeeping, kitchen operations, food service, administration, and management.",
    },
  ],

  germany: [
    {
      name: "Rheinland Systems",
      industry: "Technology",
      description:
        "Rheinland Systems develops enterprise software and technology services for organizations seeking reliable digital infrastructure and business applications. Its teams work across engineering, cloud services, data, product delivery, and technical support.",
    },
    {
      name: "Berlin Commerce Works",
      industry: "E-commerce",
      description:
        "Berlin Commerce Works operates digital commerce services supporting independent brands and established retailers. Its teams cover merchandising, customer experience, technology, marketing, operations, and fulfillment.",
    },
    {
      name: "Munich Mobility Services",
      industry: "Transportation",
      description:
        "Munich Mobility Services supports transportation and mobility operations through scheduling, customer service, fleet coordination, and technology-enabled administration.",
    },
    {
      name: "Rhine Valley Manufacturing",
      industry: "Manufacturing",
      description:
        "Rhine Valley Manufacturing produces industrial components and commercial equipment while maintaining structured quality, production, procurement, and maintenance operations.",
    },
    {
      name: "Hanseatic Business Support",
      industry: "Business Services",
      description:
        "Hanseatic Business Support provides administrative, customer service, documentation, and operational assistance to businesses that need dependable back-office capacity.",
    },
  ],

  france: [
    {
      name: "Maison Digital",
      industry: "Technology",
      description:
        "Maison Digital develops websites, software products, and digital services for organizations across France and international markets. Its teams combine technology, design, product strategy, and customer support to deliver practical digital experiences.",
    },
    {
      name: "Lumière Commerce",
      industry: "E-commerce",
      description:
        "Lumière Commerce operates digital retail services focused on carefully presented products, responsive customer service, and efficient order management.",
    },
    {
      name: "Rivière Conseil",
      industry: "Consulting",
      description:
        "Rivière Conseil advises growing organizations on business operations, customer experience, digital adoption, and process improvement.",
    },
    {
      name: "Montparnasse Services",
      industry: "Business Services",
      description:
        "Montparnasse Services provides administrative and operational support to organizations managing growing volumes of customer, financial, and business documentation.",
    },
    {
      name: "Azur Hospitality",
      industry: "Hospitality",
      description:
        "Azur Hospitality manages accommodation and guest-service operations with a focus on dependable service, clean facilities, and positive visitor experiences.",
    },
  ],

  nigeria: [
    {
      name: "Lagos Digital Works",
      industry: "Technology",
      description:
        "Lagos Digital Works builds websites, business applications, digital products, and technology services for organizations across Nigeria and international markets. Its teams bring together software development, design, product operations, customer support, and digital strategy.",
    },
    {
      name: "Greenfield Agro Services",
      industry: "Agriculture",
      description:
        "Greenfield Agro Services supports agricultural producers and food businesses through farm operations, supply coordination, distribution, advisory services, and market connections.",
    },
    {
      name: "Atlantic Customer Care",
      industry: "Customer Support",
      description:
        "Atlantic Customer Care provides customer service and administrative support for businesses serving Nigerian consumers. Its teams handle customer inquiries, order assistance, account support, scheduling, and digital communications.",
    },
    {
      name: "Bridgeway Logistics Nigeria",
      industry: "Logistics",
      description:
        "Bridgeway Logistics Nigeria provides delivery coordination, warehouse support, shipment administration, and logistics services for businesses operating across major Nigerian cities.",
    },
    {
      name: "Prime Ledger Advisory",
      industry: "Accounting",
      description:
        "Prime Ledger Advisory supports businesses with bookkeeping, financial administration, payroll assistance, reporting, and general accounting operations.",
    },
  ],

  "south-africa": [
    {
      name: "Cape Meridian Digital",
      industry: "Technology",
      description:
        "Cape Meridian Digital develops digital products and technology services for businesses across South Africa and international markets, combining engineering, design, product delivery, and technical support.",
    },
    {
      name: "Highveld Logistics",
      industry: "Logistics",
      description:
        "Highveld Logistics coordinates transportation, warehousing, dispatch, and customer delivery services for commercial clients.",
    },
    {
      name: "Ubuntu Business Services",
      industry: "Business Services",
      description:
        "Ubuntu Business Services provides administrative, customer support, documentation, and operational services to growing businesses.",
    },
    {
      name: "Cape Harvest Foods",
      industry: "Food Production",
      description:
        "Cape Harvest Foods produces and distributes food products through retail, hospitality, and wholesale channels, supported by teams across production, quality, sales, and logistics.",
    },
    {
      name: "Golden Coast Hospitality",
      industry: "Hospitality",
      description:
        "Golden Coast Hospitality manages guest-service operations across accommodation and hospitality businesses with an emphasis on service quality and dependable daily operations.",
    },
  ],

  china: [
    {
      name: "Jade River Technology",
      industry: "Technology",
      description:
        "Jade River Technology develops software platforms and digital services for businesses operating in rapidly changing technology and commerce markets. Its teams work across engineering, product, customer operations, data, and digital infrastructure.",
    },
    {
      name: "Shanghai Harbor Commerce",
      industry: "E-commerce",
      description:
        "Shanghai Harbor Commerce supports online retail operations through merchandising, order management, customer service, fulfillment coordination, and digital marketing.",
    },
    {
      name: "Eastern Horizon Manufacturing",
      industry: "Manufacturing",
      description:
        "Eastern Horizon Manufacturing produces commercial and industrial goods while coordinating production planning, quality assurance, procurement, warehouse operations, and distribution.",
    },
    {
      name: "Beijing Learning Network",
      industry: "Education",
      description:
        "Beijing Learning Network provides educational content, online learning services, learner support, and digital classroom resources for students and professional learners.",
    },
    {
      name: "Pearl Coast Business Services",
      industry: "Business Services",
      description:
        "Pearl Coast Business Services provides administrative and operational support to businesses requiring reliable documentation, customer communication, research, and back-office services.",
    },
  ],

  india: [
    {
      name: "Bengaluru Product Labs",
      industry: "Technology",
      description:
        "Bengaluru Product Labs develops software products and digital services for startups, established companies, and technology-driven organizations. Its teams cover engineering, product management, design, quality assurance, and customer operations.",
    },
    {
      name: "Indus Business Support",
      industry: "Business Services",
      description:
        "Indus Business Support provides remote administrative, customer service, research, documentation, and operational support to organizations managing growing workloads.",
    },
    {
      name: "Mumbai Commerce House",
      industry: "E-commerce",
      description:
        "Mumbai Commerce House operates digital commerce services connecting consumers with a wide range of products while managing merchandising, customer experience, fulfillment, and marketing.",
    },
    {
      name: "Deccan Learning Services",
      industry: "Education",
      description:
        "Deccan Learning Services provides online tutoring, educational content, learner support, and academic administration for students and professional learners.",
    },
    {
      name: "Lotus Ledger Partners",
      industry: "Accounting",
      description:
        "Lotus Ledger Partners provides bookkeeping, accounting support, financial administration, and reporting services to businesses across multiple industries.",
    },
  ],

  japan: [
    {
      name: "Sakura Systems",
      industry: "Technology",
      description:
        "Sakura Systems develops enterprise software, digital platforms, and technology services for Japanese and international organizations. Its teams work across engineering, product delivery, cloud infrastructure, and technical support.",
    },
    {
      name: "Pacific Retail Works",
      industry: "Retail",
      description:
        "Pacific Retail Works manages retail and online commerce operations focused on dependable customer service, accurate product information, and efficient order fulfillment.",
    },
    {
      name: "Tokyo Business Support",
      industry: "Business Services",
      description:
        "Tokyo Business Support provides administrative, documentation, customer service, and research assistance to organizations operating in competitive commercial markets.",
    },
    {
      name: "Hikari Learning",
      industry: "Education",
      description:
        "Hikari Learning develops educational content and online learning services for students and professionals seeking flexible access to structured instruction.",
    },
    {
      name: "Kansai Manufacturing Group",
      industry: "Manufacturing",
      description:
        "Kansai Manufacturing Group produces industrial components and commercial products through coordinated engineering, production, quality, procurement, and logistics operations.",
    },
  ],

  indonesia: [
    {
      name: "Archipelago Digital",
      industry: "Technology",
      description:
        "Archipelago Digital develops websites, software products, digital marketing systems, and business applications for organizations across Indonesia and international markets.",
    },
    {
      name: "Jakarta Commerce Network",
      industry: "E-commerce",
      description:
        "Jakarta Commerce Network supports online retail businesses through product operations, customer support, fulfillment coordination, and digital marketing.",
    },
    {
      name: "Bali Hospitality Services",
      industry: "Hospitality",
      description:
        "Bali Hospitality Services provides accommodation and guest-service operations with teams working across reservations, housekeeping, food service, administration, and customer experience.",
    },
    {
      name: "Nusantara Logistics",
      industry: "Logistics",
      description:
        "Nusantara Logistics coordinates delivery, warehouse, shipment administration, and distribution services across Indonesia.",
    },
    {
      name: "Island Business Solutions",
      industry: "Business Services",
      description:
        "Island Business Solutions provides remote administrative, research, customer support, and operational assistance to growing businesses.",
    },
  ],

  "new-zealand": [
    {
      name: "Southern Lakes Technology",
      industry: "Technology",
      description:
        "Southern Lakes Technology develops digital products, websites, and business applications for organizations in New Zealand and overseas markets.",
    },
    {
      name: "Kiwi Coast Services",
      industry: "Business Services",
      description:
        "Kiwi Coast Services provides administrative, customer support, scheduling, and operational services for businesses managing growing customer demand.",
    },
    {
      name: "Aotearoa Learning Hub",
      industry: "Education",
      description:
        "Aotearoa Learning Hub delivers online learning resources, tutoring, learner support, and educational administration.",
    },
    {
      name: "Pacific Ridge Property",
      industry: "Property Services",
      description:
        "Pacific Ridge Property supports property owners and tenants through maintenance coordination, administration, communication, and property management services.",
    },
    {
      name: "Harbour Street Foods",
      industry: "Food and Hospitality",
      description:
        "Harbour Street Foods supplies food products and hospitality services while managing production, customer service, distribution, and daily operations.",
    },
  ],

  singapore: [
    {
      name: "Lion City Technologies",
      industry: "Technology",
      description:
        "Lion City Technologies builds digital products and enterprise technology services for businesses operating throughout Singapore and international markets. Its teams combine engineering, product management, design, data, and technical support.",
    },
    {
      name: "Marina Commerce Group",
      industry: "E-commerce",
      description:
        "Marina Commerce Group supports digital retail and marketplace operations through merchandising, customer experience, marketing, fulfillment, and business operations.",
    },
    {
      name: "Meridian Asia Services",
      industry: "Business Services",
      description:
        "Meridian Asia Services provides administrative, research, customer support, and operational services to organizations working across Asian and international markets.",
    },
    {
      name: "Orchard Learning Network",
      industry: "Education",
      description:
        "Orchard Learning Network provides online education, tutoring, learner support, and digital educational resources for students and professionals.",
    },
    {
      name: "Straits Logistics",
      industry: "Logistics",
      description:
        "Straits Logistics coordinates regional freight, fulfillment, warehouse, and shipment-support services for businesses operating across Singapore and surrounding markets.",
    },
  ],
};

/*
|--------------------------------------------------------------------------
| Job profiles
|--------------------------------------------------------------------------
*/

type JobProfile = {
  title: string;
  category: string;
  categorySlug: string;
  experienceLevel: LiveJob["experienceLevel"];
  employmentType: LiveJob["employmentType"];
  workMode: LiveJob["workMode"];
  description: string;
  responsibilities: string[];
  qualifications: string[];
  requirements: string[];
  benefits: string[];
  skills: string[];
  salaryMin: number;
  salaryMax: number;
  salaryPeriod: LiveJob["salaryPeriod"];
};

const jobProfiles: JobProfile[] = [
  {
    title: "Frontend Developer",
    category: "Software Development",
    categorySlug: "software-development",
    experienceLevel: "MID_LEVEL",
    employmentType: "FULL_TIME",
    workMode: "REMOTE",
    description:
      "The Frontend Developer will build and improve responsive web experiences used by customers and internal teams. The role combines interface development, accessibility, performance optimization, and close collaboration with designers, backend engineers, and product stakeholders. The successful candidate will turn product requirements and design concepts into maintainable interfaces while paying attention to usability across desktop and mobile devices.",
    responsibilities: [
      "Build responsive interfaces using modern frontend development practices.",
      "Translate product and design requirements into accessible user experiences.",
      "Collaborate with backend engineers to integrate APIs and application services.",
      "Investigate interface issues and improve performance, reliability, and usability.",
      "Participate in code reviews and contribute to frontend engineering standards.",
    ],
    qualifications: [
      "Professional experience building modern web applications.",
      "Strong understanding of JavaScript and browser fundamentals.",
      "Experience with React or a comparable component-based framework.",
    ],
    requirements: [
      "Ability to work independently while communicating effectively with a distributed team.",
      "Comfortable working with Git and collaborative development workflows.",
      "Strong attention to responsive design and accessibility.",
    ],
    benefits: [
      "Flexible remote working arrangements.",
      "Professional development support.",
      "Paid time off.",
      "Collaborative engineering environment.",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "HTML",
      "CSS",
      "Git",
      "Responsive Design",
      "Accessibility",
    ],
    salaryMin: 70000,
    salaryMax: 105000,
    salaryPeriod: "YEAR",
  },

  {
    title: "Backend Developer",
    category: "Software Development",
    categorySlug: "software-development",
    experienceLevel: "MID_LEVEL",
    employmentType: "FULL_TIME",
    workMode: "REMOTE",
    description:
      "The Backend Developer will design and maintain reliable services that support customer applications, internal workflows, and data-driven business processes. The position involves API development, database work, application security, testing, and performance improvements. The developer will work closely with frontend engineers and product teams to ensure that services remain dependable as usage grows.",
    responsibilities: [
      "Develop and maintain APIs and backend services.",
      "Design reliable database structures and data-access workflows.",
      "Monitor application performance and investigate production issues.",
      "Implement automated tests and participate in code reviews.",
      "Collaborate with frontend and product teams on new features.",
    ],
    qualifications: [
      "Experience developing production backend applications.",
      "Strong understanding of APIs, databases, and server-side programming.",
      "Experience with at least one modern backend programming language.",
    ],
    requirements: [
      "Good understanding of authentication and application security.",
      "Ability to troubleshoot technical problems systematically.",
      "Comfort working with version control and development environments.",
    ],
    benefits: [
      "Remote-friendly working environment.",
      "Learning and development opportunities.",
      "Paid time off.",
      "Team-based engineering culture.",
    ],
    skills: [
      "Node.js",
      "Python",
      "REST APIs",
      "PostgreSQL",
      "SQL",
      "Git",
      "Testing",
      "Backend Development",
    ],
    salaryMin: 72000,
    salaryMax: 110000,
    salaryPeriod: "YEAR",
  },

  {
    title: "Data Entry Specialist",
    category: "Data Entry",
    categorySlug: "data-entry",
    experienceLevel: "ENTRY_LEVEL",
    employmentType: "FULL_TIME",
    workMode: "REMOTE",
    description:
      "The Data Entry Specialist will help maintain accurate digital records across operational systems. The position involves entering information from forms and source documents, reviewing records for inconsistencies, organizing digital files, and escalating unclear information for clarification. This role is suitable for someone who is comfortable working carefully with repetitive information and following established procedures.",
    responsibilities: [
      "Enter information accurately into company systems and spreadsheets.",
      "Review submitted records for missing or inconsistent information.",
      "Organize digital documents according to established naming conventions.",
      "Compare source documents against entered information.",
      "Report unclear or incomplete records to the appropriate team member.",
    ],
    qualifications: [
      "Basic computer literacy.",
      "Ability to work confidently with spreadsheets and online forms.",
      "Strong attention to detail.",
    ],
    requirements: [
      "Reliable internet connection for remote work.",
      "Ability to maintain accuracy during repetitive tasks.",
      "Good written communication.",
    ],
    benefits: [
      "Remote work option.",
      "Structured onboarding and training.",
      "Flexible scheduling on selected teams.",
      "Opportunities to develop administrative skills.",
    ],
    skills: [
      "Data Entry",
      "Microsoft Excel",
      "Google Sheets",
      "Typing",
      "Document Management",
      "Attention to Detail",
    ],
    salaryMin: 15,
    salaryMax: 24,
    salaryPeriod: "HOUR",
  },

  {
    title: "Virtual Assistant",
    category: "Administrative Support",
    categorySlug: "administrative-support",
    experienceLevel: "ENTRY_LEVEL",
    employmentType: "PART_TIME",
    workMode: "REMOTE",
    description:
      "The Virtual Assistant will provide practical administrative support to a distributed team by organizing information, maintaining calendars, responding to routine messages, preparing documents, and helping keep day-to-day tasks on schedule. The role requires someone who can prioritize several small assignments without losing attention to detail.",
    responsibilities: [
      "Maintain calendars, task lists, and routine administrative records.",
      "Prepare and organize documents and spreadsheets.",
      "Respond to routine internal and customer messages.",
      "Research information and summarize findings when requested.",
      "Support meeting preparation and follow-up activities.",
    ],
    qualifications: [
      "Previous administrative, customer service, or office experience is helpful.",
      "Good written communication.",
      "Comfort using common online productivity tools.",
    ],
    requirements: [
      "Strong organizational skills.",
      "Reliable internet access.",
      "Ability to manage confidential information appropriately.",
    ],
    benefits: [
      "Remote working arrangement.",
      "Flexible part-time schedule.",
      "Training provided.",
      "Potential for additional responsibilities.",
    ],
    skills: [
      "Administration",
      "Google Workspace",
      "Microsoft Office",
      "Email Management",
      "Calendar Management",
      "Online Research",
    ],
    salaryMin: 14,
    salaryMax: 25,
    salaryPeriod: "HOUR",
  },

  {
    title: "Customer Support Representative",
    category: "Customer Service",
    categorySlug: "customer-service",
    experienceLevel: "ENTRY_LEVEL",
    employmentType: "FULL_TIME",
    workMode: "REMOTE",
    description:
      "The Customer Support Representative will assist customers through email, chat, and other approved communication channels. The role focuses on understanding customer questions, providing accurate information, documenting interactions, and escalating issues that require specialist attention. Strong communication and patience are more important than industry-specific experience because comprehensive product training will be provided.",
    responsibilities: [
      "Respond to customer questions through approved support channels.",
      "Investigate routine account, order, or service issues.",
      "Document customer interactions accurately.",
      "Escalate technical or sensitive cases to the appropriate team.",
      "Identify recurring customer problems and share useful feedback.",
    ],
    qualifications: [
      "Strong written and verbal communication.",
      "Previous customer-facing experience is useful but not always required.",
      "Comfort learning new software systems.",
    ],
    requirements: [
      "Professional and patient communication style.",
      "Reliable internet connection for remote positions.",
      "Ability to follow customer-service procedures.",
    ],
    benefits: [
      "Paid training.",
      "Remote working opportunities.",
      "Performance development programs.",
      "Paid time off for eligible employees.",
    ],
    skills: [
      "Customer Service",
      "Communication",
      "Problem Solving",
      "CRM",
      "Email Support",
      "Chat Support",
    ],
    salaryMin: 16,
    salaryMax: 28,
    salaryPeriod: "HOUR",
  },

  {
    title: "Digital Marketing Specialist",
    category: "Digital Marketing",
    categorySlug: "digital-marketing",
    experienceLevel: "MID_LEVEL",
    employmentType: "FULL_TIME",
    workMode: "HYBRID",
    description:
      "The Digital Marketing Specialist will help plan, execute, and measure campaigns across search, social, email, and other digital channels. The position combines creative thinking with analytical work, requiring the ability to understand target audiences, develop useful content, monitor campaign performance, and turn performance data into practical recommendations.",
    responsibilities: [
      "Plan and execute digital marketing campaigns across relevant channels.",
      "Monitor campaign performance and prepare regular reports.",
      "Coordinate content calendars with creative and commercial teams.",
      "Conduct keyword, audience, and competitor research.",
      "Recommend improvements based on campaign performance data.",
    ],
    qualifications: [
      "Experience with digital marketing campaigns.",
      "Understanding of search, social, email, and content marketing.",
      "Ability to interpret marketing performance metrics.",
    ],
    requirements: [
      "Strong written communication.",
      "Comfort working with analytics platforms.",
      "Ability to manage multiple campaigns and deadlines.",
    ],
    benefits: [
      "Professional development budget.",
      "Hybrid working arrangement.",
      "Paid leave.",
      "Collaborative marketing environment.",
    ],
    skills: [
      "Digital Marketing",
      "SEO",
      "Google Analytics",
      "Content Marketing",
      "Social Media",
      "Email Marketing",
    ],
    salaryMin: 52000,
    salaryMax: 82000,
    salaryPeriod: "YEAR",
  },

  {
    title: "Graphic Designer",
    category: "Design",
    categorySlug: "design",
    experienceLevel: "MID_LEVEL",
    employmentType: "CONTRACT",
    workMode: "REMOTE",
    description:
      "The Graphic Designer will create visual assets for digital campaigns, marketing materials, product communications, and social channels. The role requires a strong understanding of visual hierarchy and brand consistency as well as the ability to translate written briefs into polished creative work.",
    responsibilities: [
      "Create digital graphics for campaigns and communications.",
      "Adapt creative assets for multiple screen sizes and platforms.",
      "Work with marketing and content teams on campaign concepts.",
      "Maintain visual consistency across brand materials.",
      "Organize and prepare final creative files for publication.",
    ],
    qualifications: [
      "Portfolio demonstrating professional design work.",
      "Experience with common design tools.",
      "Understanding of typography, layout, and visual hierarchy.",
    ],
    requirements: [
      "Ability to interpret creative briefs.",
      "Strong attention to detail.",
      "Ability to meet agreed production deadlines.",
    ],
    benefits: [
      "Remote contract arrangement.",
      "Flexible project scheduling.",
      "Opportunity to work across multiple digital campaigns.",
    ],
    skills: [
      "Graphic Design",
      "Adobe Creative Suite",
      "Figma",
      "Typography",
      "Brand Design",
      "Digital Design",
    ],
    salaryMin: 28,
    salaryMax: 50,
    salaryPeriod: "HOUR",
  },

  {
    title: "Warehouse Associate",
    category: "Warehouse and Logistics",
    categorySlug: "warehouse-logistics",
    experienceLevel: "NO_EXPERIENCE",
    employmentType: "FULL_TIME",
    workMode: "ONSITE",
    description:
      "The Warehouse Associate supports daily warehouse operations by receiving goods, organizing inventory, preparing orders, and maintaining a clean and safe working area. The position is practical and hands-on and is suitable for applicants who are dependable, physically capable, and comfortable following established safety and inventory procedures.",
    responsibilities: [
      "Receive and organize incoming goods.",
      "Pick and pack customer orders accurately.",
      "Move inventory between designated storage areas.",
      "Assist with stock counts and inventory checks.",
      "Maintain a clean and safe warehouse environment.",
    ],
    qualifications: [
      "No formal qualification is required for entry-level positions.",
      "Previous warehouse experience is helpful but not essential.",
    ],
    requirements: [
      "Reliable attendance.",
      "Ability to follow safety instructions.",
      "Ability to perform physical warehouse tasks.",
    ],
    benefits: [
      "On-the-job training.",
      "Structured shift schedules.",
      "Employee development opportunities.",
      "Eligible employee benefits.",
    ],
    skills: [
      "Warehouse Operations",
      "Order Picking",
      "Packing",
      "Inventory",
      "Safety",
      "Teamwork",
    ],
    salaryMin: 14,
    salaryMax: 23,
    salaryPeriod: "HOUR",
  },

  {
    title: "Online Research Assistant",
    category: "Online Work",
    categorySlug: "online-work",
    experienceLevel: "ENTRY_LEVEL",
    employmentType: "PART_TIME",
    workMode: "REMOTE",
    description:
      "The Online Research Assistant will gather and organize publicly available information for internal business projects. Assignments may involve comparing websites, identifying relevant businesses, checking publicly listed information, organizing findings in spreadsheets, and preparing concise summaries for review.",
    responsibilities: [
      "Research information using approved online sources.",
      "Record findings accurately in spreadsheets or internal tools.",
      "Compare information from multiple sources.",
      "Flag incomplete, conflicting, or outdated information.",
      "Prepare concise summaries of research findings.",
    ],
    qualifications: [
      "Strong internet research ability.",
      "Basic spreadsheet skills.",
      "Good written communication.",
    ],
    requirements: [
      "Reliable internet access.",
      "Ability to follow research instructions carefully.",
      "Strong attention to detail.",
    ],
    benefits: [
      "Remote work.",
      "Flexible part-time schedule.",
      "Training on internal research procedures.",
      "Opportunity to develop digital research skills.",
    ],
    skills: [
      "Online Research",
      "Google Search",
      "Data Collection",
      "Google Sheets",
      "Writing",
      "Fact Checking",
    ],
    salaryMin: 14,
    salaryMax: 26,
    salaryPeriod: "HOUR",
  },

  {
    title: "Kitchen Assistant",
    category: "Hospitality",
    categorySlug: "hospitality",
    experienceLevel: "NO_EXPERIENCE",
    employmentType: "FULL_TIME",
    workMode: "ONSITE",
    description:
      "The Kitchen Assistant supports food preparation and daily kitchen operations by preparing basic ingredients, maintaining clean work areas, assisting chefs and kitchen staff, and following food-safety procedures. The role is suitable for dependable applicants who want to develop practical hospitality experience.",
    responsibilities: [
      "Prepare basic ingredients under kitchen supervision.",
      "Keep preparation areas clean and organized.",
      "Wash and sanitize equipment and utensils.",
      "Assist with receiving and storing food supplies.",
      "Follow food-safety and workplace procedures.",
    ],
    qualifications: [
      "No formal culinary qualification is required.",
      "Previous hospitality experience is useful but not essential.",
    ],
    requirements: [
      "Reliable attendance.",
      "Ability to work efficiently during busy service periods.",
      "Willingness to follow food-safety instructions.",
    ],
    benefits: [
      "On-the-job training.",
      "Staff meal arrangements where applicable.",
      "Opportunities to progress into kitchen roles.",
    ],
    skills: [
      "Food Preparation",
      "Kitchen Hygiene",
      "Food Safety",
      "Teamwork",
      "Time Management",
    ],
    salaryMin: 13,
    salaryMax: 22,
    salaryPeriod: "HOUR",
  },

  {
    title: "Electrician",
    category: "Skilled Trades",
    categorySlug: "skilled-trades",
    experienceLevel: "MID_LEVEL",
    employmentType: "FULL_TIME",
    workMode: "ONSITE",
    description:
      "The Electrician will carry out electrical installation, maintenance, inspection, and repair work across residential or commercial projects. The position requires careful adherence to applicable electrical standards, safe working procedures, and project specifications. Depending on the assignment, work may include new installations, fault diagnosis, equipment replacement, and preventative maintenance.",
    responsibilities: [
      "Install and maintain electrical systems and equipment.",
      "Diagnose electrical faults and complete approved repairs.",
      "Read technical drawings and installation specifications.",
      "Maintain accurate records of completed work.",
      "Follow electrical safety procedures and applicable regulations.",
    ],
    qualifications: [
      "Relevant electrical training or recognized trade qualification where required.",
      "Practical experience with electrical installations or maintenance.",
    ],
    requirements: [
      "Ability to work safely with electrical equipment.",
      "Relevant local licensing where legally required.",
      "Ability to work independently and as part of a site team.",
    ],
    benefits: [
      "Professional development opportunities.",
      "Safety equipment and training.",
      "Stable project-based work.",
      "Potential overtime opportunities.",
    ],
    skills: [
      "Electrical Installation",
      "Electrical Maintenance",
      "Fault Finding",
      "Safety Procedures",
      "Technical Drawings",
    ],
    salaryMin: 24,
    salaryMax: 48,
    salaryPeriod: "HOUR",
  },

  {
    title: "Plumber",
    category: "Skilled Trades",
    categorySlug: "skilled-trades",
    experienceLevel: "MID_LEVEL",
    employmentType: "FULL_TIME",
    workMode: "ONSITE",
    description:
      "The Plumber will install, maintain, inspect, and repair plumbing systems across assigned properties and projects. Daily work may include diagnosing leaks, replacing fittings, installing pipework, maintaining water systems, and completing preventative maintenance while following applicable safety and building requirements.",
    responsibilities: [
      "Install and repair plumbing fixtures and pipework.",
      "Investigate leaks, blockages, and water-system faults.",
      "Complete maintenance work according to job instructions.",
      "Maintain accurate service records.",
      "Follow workplace and site safety requirements.",
    ],
    qualifications: [
      "Relevant plumbing training or trade qualification where required.",
      "Practical plumbing experience.",
    ],
    requirements: [
      "Ability to use plumbing tools safely.",
      "Relevant local licensing where required.",
      "Reliable transport or ability to travel to assigned work locations.",
    ],
    benefits: [
      "Tools and safety equipment provided where applicable.",
      "Training and development opportunities.",
      "Stable project pipeline.",
    ],
    skills: [
      "Plumbing",
      "Pipework",
      "Maintenance",
      "Fault Diagnosis",
      "Safety",
      "Hand Tools",
    ],
    salaryMin: 23,
    salaryMax: 46,
    salaryPeriod: "HOUR",
  },
];

/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
*/

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function hashString(value: string): number {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }

  return Math.abs(hash);
}

function makeCode(value: string): string {
  return hashString(value).toString(36);
}

function getPublishedAt(index: number): string {
  const now = Date.now();

  const minutesAgo =
    10 + ((index * 37) % (23 * 60 - 10));

  return new Date(
    now - minutesAgo * 60 * 1000,
  ).toISOString();
}

function getValidThrough(publishedAt: string): string {
  return new Date(
    new Date(publishedAt).getTime() +
      30 * 24 * 60 * 60 * 1000,
  ).toISOString();
}

function getSalary(
  profile: JobProfile,
  country: CountryConfig,
  index: number,
) {
  const variation = 0.92 + ((index * 13) % 17) / 100;

  const minimum = Math.round(
    profile.salaryMin *
      country.salaryMultiplier *
      variation,
  );

  const maximum = Math.round(
    profile.salaryMax *
      country.salaryMultiplier *
      variation,
  );

  return {
    salaryMin: minimum,
    salaryMax: Math.max(maximum, minimum + 1),
  };
}

function makeJobDescription(
  profile: JobProfile,
  company: LiveJobCompany,
  country: CountryConfig,
  location: string,
): string {
  return `${profile.description} This position is part of ${company.name}'s ${company.industry.toLowerCase()} operations in ${country.name}. The successful candidate will work with colleagues and stakeholders connected to the company's ${location} operations and will be expected to contribute to dependable day-to-day service delivery while following established processes and quality standards.`;
}

/*
|--------------------------------------------------------------------------
| Company generation
|--------------------------------------------------------------------------
*/

function createCompanies(): LiveJobCompany[] {
  const companies: LiveJobCompany[] = [];

  for (const country of countries) {
    const profiles = companyProfiles[country.slug];

    if (!profiles) {
      throw new Error(
        `No company profiles configured for ${country.slug}`,
      );
    }

    for (const profile of profiles) {
      companies.push({
        id: `company-${makeCode(
          `${country.slug}-${profile.name}`,
        )}`,
        name: profile.name,
        country: country.name,
        countrySlug: country.slug,
        countryCode: country.code,
        industry: profile.industry,
        description: profile.description,
      });
    }
  }

  return companies;
}

export const liveJobCompanies = createCompanies();

/*
|--------------------------------------------------------------------------
| Company validation
|--------------------------------------------------------------------------
*/

export function validateLiveJobCompanies(
  companies: LiveJobCompany[] = liveJobCompanies,
): void {
  const names = new Map<string, LiveJobCompany>();

  for (const company of companies) {
    const normalizedName = company.name
      .trim()
      .toLowerCase();

    const existing = names.get(normalizedName);

    if (existing) {
      throw new Error(
        `Duplicate company name detected: "${company.name}" appears in ${existing.country} and ${company.country}.`,
      );
    }

    names.set(normalizedName, company);
  }
}

validateLiveJobCompanies();

/*
|--------------------------------------------------------------------------
| Job generation
|--------------------------------------------------------------------------
*/

function createLiveJobs(): LiveJob[] {
  const jobs: LiveJob[] = [];

  const totalJobs = 1000;

  for (let index = 0; index < totalJobs; index += 1) {
    const country = countries[index % countries.length];

    const companiesForCountry =
      liveJobCompanies.filter(
        (company) =>
          company.countrySlug === country.slug,
      );

    const company =
      companiesForCountry[
        Math.floor(
          index / countries.length,
        ) % companiesForCountry.length
      ];

    const profile =
      jobProfiles[
        index % jobProfiles.length
      ];

    const location =
      country.cities[
        Math.floor(
          index / countries.length,
        ) % country.cities.length
      ];

    const publishedAt =
      getPublishedAt(index);

    const salary =
      getSalary(
        profile,
        country,
        index,
      );

    const uniqueCode = makeCode(
      `${country.slug}-${company.name}-${profile.title}-${index}`,
    );

    const baseSlug = [
      profile.title,
      company.name,
      country.slug,
      uniqueCode,
    ]
      .map(slugify)
      .join("-");

    const isRemote =
      location === "Remote" ||
      profile.workMode === "REMOTE";

    const workMode: LiveJob["workMode"] =
      isRemote
        ? "REMOTE"
        : profile.workMode;

    jobs.push({
      id: `live-job-${uniqueCode}`,

      slug: baseSlug,

      title: profile.title,

      company,

      category: profile.category,
      categorySlug: profile.categorySlug,

      country: country.name,
      countrySlug: country.slug,
      countryCode: country.code,

      location,

      workMode,

      employmentType:
        profile.employmentType,

      experienceLevel:
        profile.experienceLevel,

      description:
        makeJobDescription(
          profile,
          company,
          country,
          location,
        ),

      responsibilities:
        profile.responsibilities,

      qualifications:
        profile.qualifications,

      requirements:
        profile.requirements,

      benefits:
        profile.benefits,

      skills:
        profile.skills,

      salaryMin:
        salary.salaryMin,

      salaryMax:
        salary.salaryMax,

      salaryCurrency:
        country.currency,

      salaryPeriod:
        profile.salaryPeriod,

      publishedAt,

      validThrough:
        getValidThrough(
          publishedAt,
        ),

      applicationUrl:
        null,

      isDemo: false,

      isVerified: true,

      isFeatured:
        index % 19 === 0,

      isActive: true,
    });
  }

  return jobs;
}

export const liveJobs = createLiveJobs();

/*
|--------------------------------------------------------------------------
| Dataset validation
|--------------------------------------------------------------------------
*/

function validateLiveJobs(): void {
  if (liveJobs.length !== 1000) {
    throw new Error(
      `Expected 1000 live jobs, received ${liveJobs.length}.`,
    );
  }

  const slugs = new Set<string>();
  const ids = new Set<string>();

  for (const job of liveJobs) {
    if (slugs.has(job.slug)) {
      throw new Error(
        `Duplicate live job slug: ${job.slug}`,
      );
    }

    if (ids.has(job.id)) {
      throw new Error(
        `Duplicate live job ID: ${job.id}`,
      );
    }

    slugs.add(job.slug);
    ids.add(job.id);
  }
}

validateLiveJobs();

/*
|--------------------------------------------------------------------------
| Public data helpers
|--------------------------------------------------------------------------
*/

export function getLiveJobBySlug(
  slug: string,
): LiveJob | undefined {
  return liveJobs.find(
    (job) => job.slug === slug,
  );
}

export function getLiveJobsByCountry(
  countrySlug: string,
): LiveJob[] {
  return liveJobs.filter(
    (job) =>
      job.countrySlug === countrySlug,
  );
}

export function getLiveJobsByCategory(
  categorySlug: string,
): LiveJob[] {
  return liveJobs.filter(
    (job) =>
      job.categorySlug === categorySlug,
  );
}

export function getFreshLiveJobs(
  limit = 30,
): LiveJob[] {
  return [...liveJobs]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);
}

export function getLiveJobCount(): number {
  return liveJobs.filter(
    (job) => job.isActive,
  ).length;
}

export function getLiveJobCountByCountry(
  countrySlug: string,
): number {
  return liveJobs.filter(
    (job) =>
      job.isActive &&
      job.countrySlug === countrySlug,
  ).length;
}