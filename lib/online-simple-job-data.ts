
export type OnlineSimpleJobCategory = {
  name: string;
  slug: string;
  description: string;
};

export type OnlineSimpleJobCompany = {
  name: string;
  country: string;
  countrySlug: string;
  countryCode: string;
  description: string;
};

export type OnlineSimpleJob = {
  id: string;
  slug: string;

  title: string;
  location:string

  company: OnlineSimpleJobCompany;

  category: string;
  categorySlug: string;

  country: string;
  countrySlug: string;
  countryCode: string;

  workMode: "REMOTE";

  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  skills: string[];

  estimatedPayMin: number;
  estimatedPayMax: number;
  payCurrency: string;
  payPeriod: "TASK" | "HOUR" | "WEEK";

  publishedAt: string;
  validThrough: string;

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
  companies: string[];
  companyDescriptions: string[];
};

type JobTemplate = {
  title: string;
  categorySlug: string;
  descriptionIntro: string;
  taskFocus: string[];
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  benefits: string[];
  payMin: number;
  payMax: number;
  payPeriod: "TASK" | "HOUR" | "WEEK";
};

export const onlineSimpleJobCategories: OnlineSimpleJobCategory[] = [
  {
    name: "Micro Tasks",
    slug: "micro-tasks",
    description:
      "Simple online tasks that can be completed with a smartphone, internet connection and careful attention to detail.",
  },
  {
    name: "Surveys & Research",
    slug: "surveys-research",
    description:
      "Participate in surveys, product research, opinion studies and simple online research activities.",
  },
  {
    name: "Content & Social Tasks",
    slug: "content-social-tasks",
    description:
      "Simple social media, content and online engagement tasks that do not require formal qualifications.",
  },
  {
    name: "Testing & Feedback",
    slug: "testing-feedback",
    description:
      "Help companies test websites, apps, digital services and online experiences and provide useful feedback.",
  },
  {
    name: "Simple Online Assistance",
    slug: "simple-online-assistance",
    description:
      "Straightforward online assistance tasks such as information checking, listing updates and basic digital support.",
  },
];

const countries: CountryConfig[] = [
  {
    name: "United States",
    slug: "united-states",
    code: "US",
    currency: "USD",
    companies: [
      "BrightPath Digital",
      "Northstar Task Hub",
      "Clearview Online Works",
      "Maple Ridge Research",
      "Everline Support Network",
    ],
    companyDescriptions: [
      "A digital services company supporting online businesses with research, content and customer-facing tasks.",
      "An independent remote work network coordinating simple digital assignments for businesses.",
      "A growing online services provider focused on digital operations and customer experience.",
      "A research-focused business supporting product studies and online information projects.",
      "A remote support company helping businesses manage straightforward online operations.",
    ],
  },
  {
    name: "United Kingdom",
    slug: "united-kingdom",
    code: "GB",
    currency: "GBP",
    companies: [
      "Crownfield Digital",
      "Westbridge Online",
      "Silveroak Research",
      "Harborline Tasks",
      "Oakwell Remote Services",
    ],
    companyDescriptions: [
      "A UK digital services business working with companies on online research and content operations.",
      "A remote-first service provider supporting small businesses with straightforward digital work.",
      "An independent research company coordinating online feedback and consumer insight projects.",
      "A digital operations provider offering flexible task-based work to remote contributors.",
      "A remote services business helping companies maintain simple online processes.",
    ],
  },
  {
    name: "Canada",
    slug: "canada",
    code: "CA",
    currency: "CAD",
    companies: [
      "Pinecrest Digital",
      "Northline Research",
      "Lakeview Task Services",
      "Cedarstone Online",
      "Maplecrest Support",
    ],
    companyDescriptions: [
      "A Canadian digital operations company supporting online businesses and research teams.",
      "A research services provider running online surveys and information-gathering projects.",
      "A flexible remote task company focused on everyday digital assignments.",
      "A Canadian online services business working with independent digital contributors.",
      "A remote support provider helping businesses handle routine online activities.",
    ],
  },
  {
    name: "Australia",
    slug: "australia",
    code: "AU",
    currency: "AUD",
    companies: [
      "Southern Cross Digital",
      "Harbourview Tasks",
      "Coral Coast Research",
      "Bluegum Online Services",
      "Sunridge Remote Works",
    ],
    companyDescriptions: [
      "An Australian digital services company supporting online business operations.",
      "A remote task provider connecting contributors with straightforward online assignments.",
      "A consumer research company conducting digital feedback and research projects.",
      "An online services provider focused on content, listings and digital administration.",
      "A flexible remote work company supporting businesses with routine online tasks.",
    ],
  },
  {
    name: "Germany",
    slug: "germany",
    code: "DE",
    currency: "EUR",
    companies: [
      "Rhein Digital Works",
      "Nordlicht Research",
      "Berlin Task Studio",
      "Alpen Online Services",
      "Westfalen Remote Hub",
    ],
    companyDescriptions: [
      "A German digital operations company providing online support and research services.",
      "A research business coordinating consumer feedback and digital information projects.",
      "A remote services company working with businesses on straightforward digital assignments.",
      "An online services provider supporting product, content and administrative workflows.",
      "A German remote work network focused on flexible online task opportunities.",
    ],
  },
  {
    name: "France",
    slug: "france",
    code: "FR",
    currency: "EUR",
    companies: [
      "Lumière Digital",
      "Montclair Research",
      "Riviera Online Works",
      "Bellevue Task Services",
      "Nouvelle Remote",
    ],
    companyDescriptions: [
      "A French digital services company supporting online business activities.",
      "A research provider focused on surveys, feedback and digital information gathering.",
      "A remote services company coordinating simple online tasks for businesses.",
      "An online operations provider supporting content and digital administration.",
      "A flexible remote work company connecting contributors with online assignments.",
    ],
  },
  {
    name: "Nigeria",
    slug: "nigeria",
    code: "NG",
    currency: "NGN",
    companies: [
      "Lagos Digital Works",
      "Naija Task Network",
      "Cedarpoint Online",
      "Westbridge Research",
      "Metroline Remote Services",
    ],
    companyDescriptions: [
      "A Nigerian digital services company supporting businesses with online operations.",
      "A task-based remote work network focused on accessible online assignments.",
      "An online services provider helping businesses manage routine digital activities.",
      "A research and feedback company coordinating online information projects.",
      "A Nigerian remote services business supporting digital administration and customer operations.",
    ],
  },
  {
    name: "South Africa",
    slug: "south-africa",
    code: "ZA",
    currency: "ZAR",
    companies: [
      "Cape Digital Network",
      "Ubuntu Online Works",
      "Highveld Research",
      "Coastal Task Services",
      "Savanna Remote Hub",
    ],
    companyDescriptions: [
      "A South African digital services company supporting online business operations.",
      "A remote work network coordinating simple digital tasks for businesses.",
      "A research provider focused on online surveys, feedback and information projects.",
      "A task-based services company helping businesses with routine online activities.",
      "A South African remote services provider supporting digital workflows.",
    ],
  },
  {
    name: "China",
    slug: "china",
    code: "CN",
    currency: "CNY",
    companies: [
      "Jadebridge Digital",
      "Eastwind Research",
      "Pearl River Online",
      "Golden Harbor Tasks",
      "Silkroad Remote Services",
    ],
    companyDescriptions: [
      "A digital services company supporting online research and business operations.",
      "A research-focused company coordinating digital surveys and feedback projects.",
      "An online services provider supporting content and digital administration.",
      "A remote task company coordinating straightforward assignments for businesses.",
      "A digital operations provider focused on flexible online work.",
    ],
  },
  {
    name: "India",
    slug: "india",
    code: "IN",
    currency: "INR",
    companies: [
      "Blue Lotus Digital",
      "Crescent Online Works",
      "Indigo Research Hub",
      "Saffron Task Network",
      "Riverstone Remote",
    ],
    companyDescriptions: [
      "An Indian digital services business supporting companies with online operations.",
      "A remote services provider coordinating simple digital assignments.",
      "A research company working on surveys and online information projects.",
      "A task network connecting remote contributors with straightforward digital work.",
      "An online operations company supporting routine digital business activities.",
    ],
  },
  {
    name: "Japan",
    slug: "japan",
    code: "JP",
    currency: "JPY",
    companies: [
      "Sakura Digital Works",
      "Harukaze Research",
      "Tokyo Online Services",
      "Mizuho Task Studio",
      "Kiyomi Remote Network",
    ],
    companyDescriptions: [
      "A Japanese digital services business supporting online business processes.",
      "A research company coordinating digital feedback and consumer insight projects.",
      "An online services provider supporting businesses with routine digital work.",
      "A remote task company focused on simple online assignments.",
      "A Japanese remote services provider supporting digital operations.",
    ],
  },
  {
    name: "Indonesia",
    slug: "indonesia",
    code: "ID",
    currency: "IDR",
    companies: [
      "Nusantara Digital",
      "Islandview Online",
      "Merah Research",
      "Bali Task Services",
      "Archipelago Remote",
    ],
    companyDescriptions: [
      "An Indonesian digital services company supporting online business operations.",
      "A remote online services provider coordinating simple digital tasks.",
      "A research business focused on online surveys and consumer feedback.",
      "A task services company supporting businesses with straightforward online work.",
      "An Indonesian remote services network focused on flexible digital assignments.",
    ],
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    code: "NZ",
    currency: "NZD",
    companies: [
      "Kiwi Digital Works",
      "Southern Research Hub",
      "Harbourstone Online",
      "Fernhill Task Services",
      "Pacific Remote Network",
    ],
    companyDescriptions: [
      "A New Zealand digital services company supporting remote online operations.",
      "A research provider coordinating online feedback and information projects.",
      "An online services company helping businesses with routine digital tasks.",
      "A remote task provider supporting content and digital administration.",
      "A flexible online work network serving businesses across digital markets.",
    ],
  },
];

const jobTemplates: JobTemplate[] = [
  {
    title: "Online Product Review Assistant",
    categorySlug: "micro-tasks",
    descriptionIntro:
      "This simple remote task involves reviewing short product descriptions and recording clear observations through an online task platform.",
    taskFocus: [
      "checking product names and descriptions for obvious inconsistencies",
      "comparing short product details against supplied information",
      "identifying missing or confusing information in product listings",
      "confirming whether product descriptions are easy to understand",
      "checking whether basic product information appears complete",
      "reviewing short product summaries for clarity",
      "comparing product attributes with reference information",
      "flagging duplicate or unusually formatted product information",
      "checking simple product listing fields",
      "recording straightforward observations about online product pages",
    ],
    responsibilities: [
      "Complete assigned product review tasks accurately.",
      "Follow the instructions provided for each task.",
      "Record observations using the supplied online form.",
      "Flag information that appears incomplete or inconsistent.",
      "Submit completed tasks within the requested timeframe.",
    ],
    requirements: [
      "A smartphone, tablet or computer with internet access.",
      "Ability to read and understand simple instructions.",
      "Good attention to detail.",
      "No formal qualification is required.",
      "No previous professional experience is required.",
    ],
    skills: [
      "Attention to detail",
      "Basic internet use",
      "Reading comprehension",
      "Accurate data entry",
    ],
    benefits: [
      "Work remotely.",
      "Flexible task availability.",
      "No CV required.",
      "No formal education requirement.",
      "Suitable for beginners.",
    ],
    payMin: 2,
    payMax: 12,
    payPeriod: "TASK",
  },

  {
    title: "Simple Data Checking Assistant",
    categorySlug: "micro-tasks",
    descriptionIntro:
      "The role involves checking small pieces of information online and recording whether the supplied information appears accurate and complete.",
    taskFocus: [
      "checking names and basic information",
      "comparing short records",
      "identifying missing fields",
      "checking simple online listings",
      "reviewing basic information for obvious errors",
      "matching information between two supplied sources",
      "checking categories assigned to records",
      "confirming that simple fields contain relevant information",
      "reviewing short digital records",
      "flagging records that need another review",
    ],
    responsibilities: [
      "Review assigned records carefully.",
      "Compare information using the supplied references.",
      "Mark records according to the provided instructions.",
      "Identify obvious inconsistencies.",
      "Submit completed records through the online system.",
    ],
    requirements: [
      "Reliable internet connection.",
      "A smartphone or internet-enabled device.",
      "Ability to follow written instructions.",
      "Basic typing ability.",
      "No CV or formal education required.",
    ],
    skills: [
      "Accuracy",
      "Basic typing",
      "Internet research",
      "Attention to detail",
    ],
    benefits: [
      "Remote work.",
      "Beginner-friendly tasks.",
      "Flexible participation.",
      "No CV required.",
      "Simple online workflow.",
    ],
    payMin: 1,
    payMax: 8,
    payPeriod: "TASK",
  },

  {
    title: "Image Classification Assistant",
    categorySlug: "micro-tasks",
    descriptionIntro:
      "Review a series of images and place them into the correct categories using simple instructions supplied with each task.",
    taskFocus: [
      "classifying images according to visible characteristics",
      "checking whether an image belongs to a supplied category",
      "identifying the main subject shown in an image",
      "matching images with basic labels",
      "checking image groups for incorrect classifications",
      "selecting the most suitable label from a short list",
      "reviewing simple visual categories",
      "flagging unclear images for additional review",
      "checking whether an image meets basic criteria",
      "organising small groups of images into categories",
    ],
    responsibilities: [
      "Review images carefully before selecting a category.",
      "Follow the classification rules supplied with each assignment.",
      "Use the correct label for each image.",
      "Flag unclear items instead of guessing.",
      "Submit completed classifications accurately.",
    ],
    requirements: [
      "Internet-enabled smartphone, tablet or computer.",
      "Ability to view images clearly.",
      "Ability to follow simple written instructions.",
      "Careful attention to detail.",
      "No previous experience required.",
    ],
    skills: [
      "Visual attention",
      "Accuracy",
      "Basic internet use",
      "Following instructions",
    ],
    benefits: [
      "Remote.",
      "Flexible task-based work.",
      "Beginner friendly.",
      "No CV required.",
      "No formal qualification required.",
    ],
    payMin: 2,
    payMax: 10,
    payPeriod: "TASK",
  },

  {
    title: "Online Survey Participant",
    categorySlug: "surveys-research",
    descriptionIntro:
      "Take part in short online surveys and provide genuine opinions about products, services, websites and everyday experiences.",
    taskFocus: [
      "answering short consumer questions",
      "sharing opinions about everyday products",
      "reviewing simple service experiences",
      "answering questions about online shopping habits",
      "providing feedback about digital services",
      "sharing preferences about product features",
      "answering short market research questions",
      "reviewing simple advertising concepts",
      "providing opinions about customer experiences",
      "answering demographic and preference questions",
    ],
    responsibilities: [
      "Read each survey question carefully.",
      "Provide genuine answers based on your experience.",
      "Complete surveys without rushing through questions.",
      "Submit responses before the stated closing time.",
      "Follow any eligibility instructions attached to each survey.",
    ],
    requirements: [
      "Internet-enabled smartphone, tablet or computer.",
      "Ability to understand simple questions.",
      "A valid email address.",
      "Honest and consistent responses.",
      "No CV or formal qualification required.",
    ],
    skills: [
      "Reading comprehension",
      "Communication",
      "Attention to detail",
      "Basic internet use",
    ],
    benefits: [
      "Remote participation.",
      "Flexible schedule.",
      "No CV required.",
      "No formal education requirement.",
      "Suitable for beginners.",
    ],
    payMin: 1,
    payMax: 7,
    payPeriod: "TASK",
  },

  {
    title: "Consumer Research Participant",
    categorySlug: "surveys-research",
    descriptionIntro:
      "Help a research team understand consumer preferences by answering structured questions about everyday products and online services.",
    taskFocus: [
      "sharing product preferences",
      "answering questions about purchasing decisions",
      "reviewing basic service concepts",
      "providing feedback about digital experiences",
      "comparing product features",
      "sharing opinions about customer expectations",
      "reviewing simple product concepts",
      "answering questions about online habits",
      "providing feedback on service ideas",
      "sharing general consumer preferences",
    ],
    responsibilities: [
      "Complete research questionnaires carefully.",
      "Answer questions honestly and consistently.",
      "Read eligibility requirements before starting.",
      "Provide useful written feedback when requested.",
      "Complete approved research sessions within the available window.",
    ],
    requirements: [
      "Internet access.",
      "A smartphone or compatible device.",
      "Ability to provide clear answers.",
      "Basic written communication.",
      "No CV or degree required.",
    ],
    skills: [
      "Communication",
      "Opinion sharing",
      "Reading",
      "Basic digital skills",
    ],
    benefits: [
      "Work from anywhere.",
      "Flexible participation.",
      "No formal education requirement.",
      "No CV required.",
      "Suitable for first-time online workers.",
    ],
    payMin: 3,
    payMax: 15,
    payPeriod: "TASK",
  },

  {
    title: "Social Content Engagement Assistant",
    categorySlug: "content-social-tasks",
    descriptionIntro:
      "Support a digital content team by completing simple engagement and content-review tasks across approved online channels.",
    taskFocus: [
      "reviewing short social media posts",
      "checking whether captions match supplied content",
      "recording basic engagement observations",
      "reviewing public content according to instructions",
      "checking simple post categories",
      "identifying content that requires review",
      "checking captions for obvious formatting issues",
      "recording simple social media observations",
      "reviewing content themes",
      "organising supplied social content into categories",
    ],
    responsibilities: [
      "Review assigned content according to the provided instructions.",
      "Record observations accurately.",
      "Follow platform and task guidelines.",
      "Flag content that does not meet the supplied criteria.",
      "Complete assigned tasks within the requested timeframe.",
    ],
    requirements: [
      "Smartphone or computer with internet access.",
      "Familiarity with common social media platforms.",
      "Ability to follow straightforward instructions.",
      "Good attention to detail.",
      "No CV or formal education required.",
    ],
    skills: [
      "Social media familiarity",
      "Content review",
      "Communication",
      "Attention to detail",
    ],
    benefits: [
      "Remote work.",
      "Flexible task schedule.",
      "No CV required.",
      "Beginner friendly.",
      "Simple online workflow.",
    ],
    payMin: 2,
    payMax: 10,
    payPeriod: "TASK",
  },

  {
    title: "Website Feedback Tester",
    categorySlug: "testing-feedback",
    descriptionIntro:
      "Visit selected websites, complete simple instructions and provide practical feedback about the experience from a normal user's perspective.",
    taskFocus: [
      "checking whether a website is easy to navigate",
      "testing simple buttons and links",
      "reviewing page clarity",
      "checking the mobile browsing experience",
      "finding confusing sections",
      "checking whether important information is easy to locate",
      "reviewing basic website forms",
      "checking the order of simple user steps",
      "recording usability observations",
      "reporting obvious issues encountered during a task",
    ],
    responsibilities: [
      "Follow the test instructions exactly.",
      "Complete the requested website actions.",
      "Describe any problems encountered clearly.",
      "Submit feedback through the supplied form.",
      "Complete tests within the stated availability window.",
    ],
    requirements: [
      "Internet-connected smartphone, tablet or computer.",
      "Ability to browse websites.",
      "Ability to describe simple observations.",
      "Attention to instructions.",
      "No technical qualification required.",
    ],
    skills: [
      "Web browsing",
      "Observation",
      "Communication",
      "Basic digital literacy",
    ],
    benefits: [
      "Remote.",
      "No programming required.",
      "No CV required.",
      "Flexible testing opportunities.",
      "Suitable for beginners.",
    ],
    payMin: 3,
    payMax: 15,
    payPeriod: "TASK",
  },

  {
    title: "App Feedback Participant",
    categorySlug: "testing-feedback",
    descriptionIntro:
      "Use selected mobile applications and provide simple feedback about navigation, clarity and the overall user experience.",
    taskFocus: [
      "checking the first-time app experience",
      "reviewing simple navigation flows",
      "testing selected app screens",
      "checking whether instructions are understandable",
      "recording observations about app usability",
      "testing basic account or information flows",
      "checking the clarity of buttons and labels",
      "reviewing simple mobile interactions",
      "identifying confusing steps",
      "providing general usability feedback",
    ],
    responsibilities: [
      "Install or open the assigned application when instructed.",
      "Complete the specified user journey.",
      "Record observations accurately.",
      "Report issues without attempting to fix them.",
      "Submit feedback using the provided process.",
    ],
    requirements: [
      "Compatible smartphone.",
      "Reliable internet access.",
      "Ability to follow simple testing instructions.",
      "Ability to provide basic written feedback.",
      "No CV or formal qualification required.",
    ],
    skills: [
      "Mobile app use",
      "Observation",
      "Feedback",
      "Basic written communication",
    ],
    benefits: [
      "Work remotely.",
      "No coding required.",
      "No CV required.",
      "Flexible assignments.",
      "Beginner friendly.",
    ],
    payMin: 3,
    payMax: 14,
    payPeriod: "TASK",
  },

  {
    title: "Online Listing Assistant",
    categorySlug: "simple-online-assistance",
    descriptionIntro:
      "Help maintain simple online listings by checking supplied information, organising details and identifying records that require attention.",
    taskFocus: [
      "checking listing names",
      "reviewing business information",
      "checking opening-hour information",
      "matching listings with supplied references",
      "identifying incomplete listing fields",
      "reviewing category labels",
      "checking short descriptions",
      "organising supplied listing information",
      "flagging duplicate records",
      "recording basic listing corrections",
    ],
    responsibilities: [
      "Review assigned online records.",
      "Compare information against supplied references.",
      "Record required corrections accurately.",
      "Flag unclear records for review.",
      "Complete assigned listing checks on time.",
    ],
    requirements: [
      "Internet-enabled device.",
      "Basic web browsing ability.",
      "Good attention to detail.",
      "Ability to follow written instructions.",
      "No CV or formal education required.",
    ],
    skills: [
      "Web research",
      "Basic data entry",
      "Accuracy",
      "Organisation",
    ],
    benefits: [
      "Remote work.",
      "Flexible assignments.",
      "No CV required.",
      "No degree required.",
      "Suitable for beginners.",
    ],
    payMin: 2,
    payMax: 10,
    payPeriod: "TASK",
  },

  {
    title: "Basic Online Information Assistant",
    categorySlug: "simple-online-assistance",
    descriptionIntro:
      "Collect simple publicly available information from specified online sources and enter the requested details into a structured task form.",
    taskFocus: [
      "finding basic public information",
      "checking business details",
      "recording website information",
      "finding supplied contact details",
      "checking simple public listings",
      "collecting publicly displayed service information",
      "recording business categories",
      "checking basic location information",
      "reviewing public web pages",
      "organising supplied online information",
    ],
    responsibilities: [
      "Search only the sources specified in the task.",
      "Record information accurately.",
      "Do not invent missing information.",
      "Follow the supplied formatting instructions.",
      "Submit completed research tasks for review.",
    ],
    requirements: [
      "Smartphone, tablet or computer.",
      "Internet connection.",
      "Basic web search ability.",
      "Ability to follow instructions.",
      "No CV or formal education required.",
    ],
    skills: [
      "Web research",
      "Typing",
      "Organisation",
      "Attention to detail",
    ],
    benefits: [
      "Remote.",
      "Flexible online work.",
      "No CV required.",
      "No formal qualification required.",
      "Beginner friendly.",
    ],
    payMin: 2,
    payMax: 12,
    payPeriod: "TASK",
  },
];

/*
 * Each country has its own company names.
 * No company name is reused across countries.
 */

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function makeCode(input: string): string {
  let hash = 2166136261;

  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  return Math.abs(hash >>> 0).toString(36);
}

function getTimeAgoLabel(publishedAt: string): string {
  const diffMs = Date.now() - new Date(publishedAt).getTime();
  const minutes = Math.max(1, Math.floor(diffMs / 60000));

  if (minutes < 60) {
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  }

  const hours = Math.floor(minutes / 60);

  return `${hours} hour${hours === 1 ? "" : "s"} ago`;
}

/*
 * Publication time is always within the last 24 hours.
 *
 * We deliberately use deterministic offsets so the generated dataset
 * does not randomly change every time this function is called.
 */
function getPublishedAt(index: number): string {
  const now = Date.now();

  const minuteOffset = ((index * 17) % 23 * 60) + ((index * 13) % 60);

  const safeOffset = Math.min(minuteOffset, 23 * 60 + 45);

  return new Date(now - safeOffset * 60 * 1000).toISOString();
}

/*
 * validThrough is deliberately calculated every time the dataset is
 * generated. It is never stored as an old fixed date.
 *
 * Every generated job remains valid for another 30 days from the
 * moment the dataset is generated.
 */
function getValidThrough(): string {
  return new Date(
    Date.now() + 30 * 24 * 60 * 60 * 1000,
  ).toISOString();
}

function getCategory(
  categorySlug: string,
): OnlineSimpleJobCategory {
  return (
    onlineSimpleJobCategories.find(
      (category) => category.slug === categorySlug,
    ) ?? onlineSimpleJobCategories[0]
  );
}

function getCountryCompanies(
  country: CountryConfig,
): OnlineSimpleJobCompany[] {
  return country.companies.map((name, index) => ({
    name,
    country: country.name,
    countrySlug: country.slug,
    countryCode: country.code,
    description:
      country.companyDescriptions[index] ??
      `A ${country.name} digital services company supporting online business operations.`,
  }));
}

function createDescription(
  template: JobTemplate,
  company: OnlineSimpleJobCompany,
  country: CountryConfig,
  variant: number,
): string {
  const focus =
    template.taskFocus[variant % template.taskFocus.length];

  return `${template.descriptionIntro} At ${company.name}, the assignment is focused on ${focus}. The work is designed for remote contributors in ${country.name} and follows a straightforward task process. You will receive the information and instructions needed for each assignment and will be expected to complete the work carefully rather than relying on specialist qualifications. The position is suitable for someone who is comfortable using the internet, reading short instructions and submitting accurate information online.`;
}

function createResponsibilities(
  template: JobTemplate,
  company: OnlineSimpleJobCompany,
  variant: number,
): string[] {
  const extraTasks = [
    `Review each ${template.title.toLowerCase()} assignment before submitting it.,
    Use the instructions supplied by ${company.name} for the assigned task group.,
    Keep submitted information clear and accurate.,
    Report unclear items instead of guessing at an answer.,
    Complete available assignments within the stated task window.`,
  ];

  return [
    ...template.responsibilities,
    extraTasks[variant % extraTasks.length],
  ];
}

function createRequirements(
  template: JobTemplate,
  country: CountryConfig,
): string[] {
  return [
    ...template.requirements,
    `Applicants must be located in ${country.name} for this demo listing.`,
  ];
}

function createBenefits(
  template: JobTemplate,
  variant: number,
): string[] {
  const additionalBenefits = [
    "Work can be completed from a suitable private location.",
    "Assignments are generally short and straightforward.",
    "You can use a smartphone for suitable tasks.",
    "The work does not require professional certification.",
    "Tasks are designed around clear instructions.",
  ];

  return [
    ...template.benefits,
    additionalBenefits[variant % additionalBenefits.length],
  ];
}

function createJob(
  index: number,
  country: CountryConfig,
  company: OnlineSimpleJobCompany,
  template: JobTemplate,
  
): OnlineSimpleJob {
  const category = getCategory(template.categorySlug);

  const variant = index % 10;

  const publishedAt = getPublishedAt(index);

  /*
   * Important:
   * validThrough is recalculated whenever createOnlineSimpleJobs()
   * runs. It is therefore never tied to an old static date.
   */
  const validThrough = getValidThrough();

  const locationLabel =
    country.name === "United States"
      ? "Remote — United States"
      : `Remote — ${country.name}`;

  const titleVariant =
    variant % 3 === 0
      ? template.title
      : variant % 3 === 1
        ? `${template.title} — Flexible Online Tasks`
        : `${template.title} — Remote Assignment`;

  const uniqueSeed = `${country.code}-${company.name}-${template.title}-${index}`;

  const slug = [
    slugify(titleVariant),
    slugify(company.name),
    country.slug,
    makeCode(uniqueSeed),
  ].join("-");

  const payMultiplier =
    country.code === "NG"
      ? 1
      : country.code === "IN"
        ? 80
        : country.code === "ID"
          ? 240
          : country.code === "JP"
            ? 145
            : country.code === "CN"
              ? 7
              : country.code === "ZA"
                ? 18
                : country.code === "GB"
                  ? 0.8
                  : country.code === "CA"
                    ? 1.35
                    : country.code === "AU"
                      ? 1.55
                      : country.code === "NZ"
                        ? 1.65
                        : country.code === "DE" || country.code === "FR"
                          ? 0.92
                          : 1;

  const salaryMin = Math.round(
    template.payMin * payMultiplier,
  );

  const salaryMax = Math.round(
    template.payMax * payMultiplier,
  );

  const description = createDescription(
    template,
    company,
    country,
    variant,
  );

  return {
    id: `makeCode(online-simple-job-${uniqueSeed})`,

    slug,

    title: titleVariant,

    company,

    category: category.name,
    categorySlug: category.slug,

    country: country.name,
    countrySlug: country.slug,
    countryCode: country.code,
    

    location: locationLabel,

    workMode: "REMOTE",

    description,

    responsibilities: createResponsibilities(
      template,
      company,
      variant,
    ),

    requirements: createRequirements(
      template,
      country,
    ),

    benefits: createBenefits(
      template,
      variant,
    ),

    skills: [
      ...template.skills,
      `${country.name} online work`,
    ],

    estimatedPayMin: salaryMin,
    estimatedPayMax: salaryMax,

    payCurrency: country.currency,
    payPeriod: template.payPeriod,

    publishedAt,

    validThrough,

    /*
     * This is deliberately true for the complete demo dataset.
     *
     * When real vacancies are connected, real records should use:
     *
     * isDemo: false
     * isVerified: true
     */
    isDemo: true,
    isVerified: false,

    isFeatured: index % 17 === 0,

    isActive: true,
  };
}

/*
 * Generates exactly 500 online simple jobs.
 *
 * 13 countries
 * 5 companies per country
 * 5 job categories
 *
 * The generator deliberately distributes jobs across the countries,
 * companies and categories instead of producing one country at a time.
 */
export function createOnlineSimpleJobs(): OnlineSimpleJob[] {
  const jobs: OnlineSimpleJob[] = [];

  const totalJobs = 500;

  for (let index = 0; index < totalJobs; index++) {
    const countryIndex = index % countries.length;

    const country = countries[countryIndex];

    const companies = getCountryCompanies(country);

    const companyIndex =
      Math.floor(index / countries.length) %
      companies.length;

    const company = companies[companyIndex];

    const templateIndex =
      Math.floor(index / (countries.length * companies.length)) %
      jobTemplates.length;

    const template =
      jobTemplates[templateIndex];

    /*
     * The remaining index is used to rotate through templates,
     * companies and countries so that the 500 records are spread
     * throughout the complete dataset.
     */
    const job = createJob(
      index,
      country,
      company,
      template,
    
    );

    jobs.push(job);
  }

  return jobs;
}

/*
 * Public dataset.
 *
 * The function is called when the module is loaded.
 * For server-side production pages, createOnlineSimpleJobs()
 * can be called directly whenever fresh timestamps are required.
 */
export const onlineSimpleJobs = createOnlineSimpleJobs();

/* -------------------------------------------------------------
 * Lookup helpers
 * ------------------------------------------------------------- */

export function getOnlineSimpleJobBySlug(
  slug: string,
): OnlineSimpleJob | undefined {
  return onlineSimpleJobs.find(
    (job) => job.slug === slug,
  );
}

export function getOnlineSimpleJobsByCategory(
  categorySlug: string,
): OnlineSimpleJob[] {
  return onlineSimpleJobs.filter(
    (job) =>
      job.categorySlug === categorySlug &&
      job.isActive,
  );
}

export function getOnlineSimpleJobsByCountry(
  countrySlug: string,
): OnlineSimpleJob[] {
  return onlineSimpleJobs.filter(
    (job) =>
      job.countrySlug === countrySlug &&
      job.isActive,
  );
}

export function getOnlineSimpleJobCategory(
  slug: string,
): OnlineSimpleJobCategory | undefined {
  return onlineSimpleJobCategories.find(
    (category) => category.slug === slug,
  );
}

export function getOnlineSimpleJobCount(): number {
  return onlineSimpleJobs.filter(
    (job) => job.isActive,
  ).length;
}

export function getOnlineSimpleJobCategoryCount(
  categorySlug: string,
): number {
  return getOnlineSimpleJobsByCategory(
    categorySlug,
  ).length;
}

export function getOnlineSimpleJobCountryCount(
  countrySlug: string,
): number {
  return getOnlineSimpleJobsByCountry(
    countrySlug,
  ).length;
}

/* -------------------------------------------------------------
 * Display helpers
 * ------------------------------------------------------------- */

export function getOnlineSimpleJobTimeAgo(
  publishedAt: string,
): string {
  return getTimeAgoLabel(publishedAt);
}

export function formatOnlineSimpleJobPay(
  job: OnlineSimpleJob,
): string {
  const formatter = new Intl.NumberFormat(
    undefined,
    {
      maximumFractionDigits: 0,
    },
  );

  const min = formatter.format(
    job.estimatedPayMin,
  );

  const max = formatter.format(
    job.estimatedPayMax,
  );

  if (job.payPeriod === "TASK") {
    return `${job.payCurrency} ${min}–${max} per task`;
  }

  if (job.payPeriod === "HOUR") {
    return `${job.payCurrency} ${min}–${max} per hour`;
  }

  return `${job.payCurrency} ${min}–${max} per week`;
}

/* -------------------------------------------------------------
 * Dataset validation
 * ------------------------------------------------------------- */

export function validateOnlineSimpleJobs(): {
  valid: boolean;
  total: number;
  duplicateIds: string[];
  duplicateSlugs: string[];
  duplicateCompanyNames: string[];
} {
  const ids = new Set<string>();
  const slugs = new Set<string>();
  const companyNames = new Set<string>();

  const duplicateIds: string[] = [];
  const duplicateSlugs: string[] = [];
  const duplicateCompanyNames: string[] = [];

  for (const job of onlineSimpleJobs) {
    if (ids.has(job.id)) {
      duplicateIds.push(job.id);
    }

    ids.add(job.id);

    if (slugs.has(job.slug)) {
      duplicateSlugs.push(job.slug);
    }

    slugs.add(job.slug);

    const normalizedCompanyName =
      job.company.name.trim().toLowerCase();

    if (companyNames.has(normalizedCompanyName)) {
      duplicateCompanyNames.push(
        job.company.name,
      );
    }

    companyNames.add(normalizedCompanyName);
  }

  return {
    valid:
      onlineSimpleJobs.length === 500 &&
      duplicateIds.length === 0 &&
      duplicateSlugs.length === 0 &&
      duplicateCompanyNames.length === 0,

    total: onlineSimpleJobs.length,
    

    duplicateIds,
    duplicateSlugs,
    duplicateCompanyNames,
  };
}