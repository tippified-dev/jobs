import {
    CategoryType,
    ExperienceLevel,
    JobType,
    PrismaClient,
    WorkMode,
} from "../app/generated/prisma/client";

const prisma = new PrismaClient();

const companies = [
  {
    name: "Global Success Limited",
    slug: "global-success-limited",
    description: "Business and professional services company.",
    website: "https://example.com",
    country: "United States",
    countryCode: "US",
  },
  {
    name: "Bright Future Technologies",
    slug: "bright-future-technologies",
    description: "Technology and digital services company.",
    website: "https://example.com",
    country: "Canada",
    countryCode: "CA",
  },
  {
    name: "Digital Edge Solutions",
    slug: "digital-edge-solutions",
    description: "Digital products and technology services company.",
    website: "https://example.com",
    country: "United Kingdom",
    countryCode: "GB",
  },
  {
    name: "Prime Work Services",
    slug: "prime-work-services",
    description: "Professional staffing and business services company.",
    website: "https://example.com",
    country: "Nigeria",
    countryCode: "NG",
  },
  {
    name: "Next Horizon Group",
    slug: "next-horizon-group",
    description: "International business and professional services group.",
    website: "https://example.com",
    country: "Australia",
    countryCode: "AU",
  },
  {
    name: "Blue Peak Solutions",
    slug: "blue-peak-solutions",
    description: "Technology, consulting and digital services company.",
    website: "https://example.com",
    country: "Germany",
    countryCode: "DE",
  },
  {
    name: "Remote Career Hub",
    slug: "remote-career-hub",
    description: "Remote work and professional services company.",
    website: "https://example.com",
    country: "Canada",
    countryCode: "CA",
  },
  {
    name: "Smart Choice Services",
    slug: "smart-choice-services",
    description: "Customer, administrative and professional services company.",
    website: "https://example.com",
    country: "Nigeria",
    countryCode: "NG",
  },
  {
    name: "Future Works International",
    slug: "future-works-international",
    description: "International workforce and business services company.",
    website: "https://example.com",
    country: "United Kingdom",
    countryCode: "GB",
  },
  {
    name: "Talent Bridge Solutions",
    slug: "talent-bridge-solutions",
    description: "Talent and workforce solutions company.",
    website: "https://example.com",
    country: "United States",
    countryCode: "US",
  },
  {
    name: "Cloud First Systems",
    slug: "cloud-first-systems",
    description: "Cloud infrastructure and software services company.",
    website: "https://example.com",
    country: "Germany",
    countryCode: "DE",
  },
  {
    name: "Creative Point Studio",
    slug: "creative-point-studio",
    description: "Creative, design and marketing services company.",
    website: "https://example.com",
    country: "Australia",
    countryCode: "AU",
  },
  {
    name: "Workforce Direct",
    slug: "workforce-direct",
    description: "Workforce and staffing services company.",
    website: "https://example.com",
    country: "South Africa",
    countryCode: "ZA",
  },
  {
    name: "Global Digital Works",
    slug: "global-digital-works",
    description: "Digital operations and technology services company.",
    website: "https://example.com",
    country: "India",
    countryCode: "IN",
  },
  {
    name: "Modern Business Partners",
    slug: "modern-business-partners",
    description: "Business consulting and operational services company.",
    website: "https://example.com",
    country: "France",
    countryCode: "FR",
  },
  {
    name: "Tech Forward Group",
    slug: "tech-forward-group",
    description: "Technology and software solutions company.",
    website: "https://example.com",
    country: "United States",
    countryCode: "US",
  },
  {
    name: "Open Work Network",
    slug: "open-work-network",
    description: "Digital workforce and remote services company.",
    website: "https://example.com",
    country: "Indonesia",
    countryCode: "ID",
  },
  {
    name: "Career Growth Partners",
    slug: "career-growth-partners",
    description: "Career, staffing and professional services company.",
    website: "https://example.com",
    country: "Canada",
    countryCode: "CA",
  },
  {
    name: "Digital Talent Group",
    slug: "digital-talent-group",
    description: "Digital talent and workforce services company.",
    website: "https://example.com",
    country: "United Kingdom",
    countryCode: "GB",
  },
  {
    name: "Work Smart Solutions",
    slug: "work-smart-solutions",
    description: "Remote operations and business services company.",
    website: "https://example.com",
    country: "Nigeria",
    countryCode: "NG",
  },
  {
    name: "Global Talent Services",
    slug: "global-talent-services",
    description: "International talent and staffing services company.",
    website: "https://example.com",
    country: "Australia",
    countryCode: "AU",
  },
  {
    name: "Bright Path Consulting",
    slug: "bright-path-consulting",
    description: "Business consulting and professional services company.",
    website: "https://example.com",
    country: "Germany",
    countryCode: "DE",
  },
  {
    name: "Innovation Works",
    slug: "innovation-works",
    description: "Innovation and digital business services company.",
    website: "https://example.com",
    country: "France",
    countryCode: "FR",
  },
  {
    name: "United Career Solutions",
    slug: "united-career-solutions",
    description: "Career and workforce solutions company.",
    website: "https://example.com",
    country: "South Africa",
    countryCode: "ZA",
  },
  {
    name: "Digital Growth Partners",
    slug: "digital-growth-partners",
    description: "Digital marketing and business growth company.",
    website: "https://example.com",
    country: "India",
    countryCode: "IN",
  },
];

const locations = [
  {
    country: "United States",
    countryCode: "US",
    cities: ["New York", "Austin", "Chicago", "Seattle", "Remote"],
    currency: "USD",
  },
  {
    country: "Canada",
    countryCode: "CA",
    cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Remote"],
    currency: "CAD",
  },
  {
    country: "United Kingdom",
    countryCode: "GB",
    cities: ["London", "Manchester", "Birmingham", "Leeds", "Remote"],
    currency: "GBP",
  },
  {
    country: "Nigeria",
    countryCode: "NG",
    cities: ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Remote"],
    currency: "NGN",
  },
  {
    country: "Australia",
    countryCode: "AU",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Remote"],
    currency: "AUD",
  },
  {
    country: "Germany",
    countryCode: "DE",
    cities: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Remote"],
    currency: "EUR",
  },
  {
    country: "South Africa",
    countryCode: "ZA",
    cities: ["Johannesburg", "Cape Town", "Pretoria", "Durban", "Remote"],
    currency: "ZAR",
  },
  {
    country: "India",
    countryCode: "IN",
    cities: ["Bangalore", "Mumbai", "Delhi", "Hyderabad", "Remote"],
    currency: "INR",
  },
  {
    country: "France",
    countryCode: "FR",
    cities: ["Paris", "Lyon", "Marseille", "Toulouse", "Remote"],
    currency: "EUR",
  },
  {
    country: "Indonesia",
    countryCode: "ID",
    cities: ["Jakarta", "Bandung", "Surabaya", "Bali", "Remote"],
    currency: "IDR",
  },
];

const jobTypes: JobType[] = [
  JobType.FULL_TIME,
  JobType.PART_TIME,
  JobType.CONTRACT,
  JobType.FREELANCE,
  JobType.TEMPORARY,
  JobType.INTERNSHIP,
];

const workModes: WorkMode[] = [
  WorkMode.REMOTE,
  WorkMode.REMOTE,
  WorkMode.REMOTE,
  WorkMode.HYBRID,
  WorkMode.ONSITE,
];

const experienceLevels: ExperienceLevel[] = [
  ExperienceLevel.ENTRY_LEVEL,
  ExperienceLevel.MID_LEVEL,
  ExperienceLevel.SENIOR_LEVEL,
  ExperienceLevel.NO_EXPERIENCE,
];

const titlePrefixes = [
  "Junior",
  "Senior",
  "Remote",
  "Lead",
  "Entry Level",
  "Experienced",
  "Associate",
  "Professional",
  "Digital",
  "Online",
];

const titleSuffixes = [
  "Specialist",
  "Coordinator",
  "Associate",
  "Professional",
  "Representative",
  "Consultant",
  "Officer",
  "Administrator",
  "Assistant",
  "Expert",
];

const salaryRanges: Record<
  string,
  { min: number; max: number }
> = {
  USD: { min: 32000, max: 115000 },
  CAD: { min: 38000, max: 105000 },
  GBP: { min: 24000, max: 80000 },
  NGN: { min: 600000, max: 9000000 },
  AUD: { min: 45000, max: 125000 },
  EUR: { min: 28000, max: 95000 },
  ZAR: { min: 90000, max: 850000 },
  INR: { min: 250000, max: 2200000 },
  IDR: { min: 45000000, max: 400000000 },
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getJobTitle(
  categoryName: string,
  index: number,
  categoryType: CategoryType,
) {
  if (categoryType === CategoryType.UNSKILLED) {
    const prefixes = [
      "Remote",
      "Online",
      "Entry Level",
      "Flexible",
      "Work From Home",
      "Customer",
      "Digital",
      "Virtual",
    ];

    const suffixes = [
      "Assistant",
      "Agent",
      "Associate",
      "Specialist",
      "Representative",
      "Worker",
      "Coordinator",
      "Operator",
    ];

    const prefix = prefixes[index % prefixes.length];
    const suffix = suffixes[index % suffixes.length];

    return `${prefix} ${categoryName} ${suffix}`;
  }

  const prefix = titlePrefixes[index % titlePrefixes.length];
  const suffix = titleSuffixes[index % titleSuffixes.length];

  return `${prefix} ${categoryName} ${suffix}`;
}

function getDescription(
  categoryName: string,
  categoryType: CategoryType,
  workMode: WorkMode,
) {
  const mode =
    workMode === WorkMode.REMOTE
      ? "remote"
      : workMode === WorkMode.HYBRID
        ? "hybrid"
        : "onsite";

  if (categoryType === CategoryType.UNSKILLED) {
    return `Join our team as a ${categoryName} professional. This ${mode} opportunity involves supporting daily operations, completing assigned tasks, communicating effectively and delivering reliable results.`;
  }

  return `We are looking for a skilled ${categoryName} professional to join our team. This ${mode} position involves delivering high-quality work, collaborating with colleagues and contributing to business and project goals.`;
}

async function main() {
  console.log("Starting Global Jobs Live seed...");

  /*
   * ---------------------------------------------------------
   * 1. Create / update companies
   * ---------------------------------------------------------
   */

  const companyRecords = [];

  for (const company of companies) {
    const record = await prisma.company.upsert({
      where: {
        slug: company.slug,
      },
      update: {
        name: company.name,
        description: company.description,
        website: company.website,
        country: company.country,
        countryCode: company.countryCode,
        isActive: true,
      },
      create: {
        name: company.name,
        slug: company.slug,
        description: company.description,
        website: company.website,
        country: company.country,
        countryCode: company.countryCode,
        isVerified: false,
        isActive: true,
      },
    });

    companyRecords.push(record);
  }

  console.log(`Companies ready: ${companyRecords.length}`);

  /*
   * ---------------------------------------------------------
   * 2. Remove previous generated seed jobs
   * ---------------------------------------------------------
   */

  const deletedJobs = await prisma.job.deleteMany({
    where: {
      slug: {
        startsWith: "seed-global-jobs-live-",
      },
    },
  });

  console.log(`Previous generated jobs removed: ${deletedJobs.count}`);

  /*
   * ---------------------------------------------------------
   * 3. Load all 40 categories
   * ---------------------------------------------------------
   */

  const categories = await prisma.jobCategory.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      sortOrder: "asc",
    },
  });

  if (categories.length === 0) {
    throw new Error(
      "No job categories found. Run your category seed first.",
    );
  }

  console.log(`Categories found: ${categories.length}`);

  /*
   * ---------------------------------------------------------
   * 4. Create exactly 500 jobs
   *
   * 40 categories x 12 jobs = 480
   * First 20 categories receive one extra job = 500
   * ---------------------------------------------------------
   */

  const jobsToCreate = [];

  for (let categoryIndex = 0; categoryIndex < categories.length; categoryIndex++) {
    const category = categories[categoryIndex];

    const jobsForThisCategory =
      categoryIndex < 20 ? 13 : 12;

    for (let index = 0; index < jobsForThisCategory; index++) {
      const location =
        locations[
          (categoryIndex + index) % locations.length
        ];

      const city =
        location.cities[
          (categoryIndex + index) % location.cities.length
        ];

      const company =
        companyRecords[
          (categoryIndex * 3 + index) % companyRecords.length
        ];

      const jobType =
        jobTypes[
          (categoryIndex + index) % jobTypes.length
        ];

      const workMode =
        workModes[
          (categoryIndex + index) % workModes.length
        ];

      const experienceLevel =
        experienceLevels[
          (categoryIndex + index) % experienceLevels.length
        ];

      const title = getJobTitle(
        category.name,
        index,
        category.categoryType,
      );

      const salaryRange =
        salaryRanges[location.currency];

      const salaryMin =
        Math.round(
          salaryRange.min +
            ((index * 731 +
              categoryIndex * 419) %
              (salaryRange.max - salaryRange.min)),
        );

      const salaryMax =
        Math.min(
          salaryRange.max,
          salaryMin +
            Math.round(
              (salaryRange.max - salaryRange.min) * 0.3,
            ),
        );

      const slug = `seed-global-jobs-live-${slugify(
        category.slug,
      )}-${location.countryCode.toLowerCase()}-${index + 1}`;

      jobsToCreate.push({
        title,
        slug,
        description: getDescription(
          category.name,
          category.categoryType,
          workMode,
        ),
        companyId: company.id,
        country: location.country,
        countryCode: location.countryCode,
        location: city,
        categoryId: category.id,
        jobType,
        workMode,
        experienceLevel,
        salaryMin,
        salaryMax,
        salaryCurrency: location.currency,
        applicationUrl: `https://example.com/apply/${slug}`,
        isVerified: false,
        isFeatured:
          index === 0 && categoryIndex % 4 === 0,
        isActive: true,
        publishedAt: new Date(
          Date.now() -
            (categoryIndex * 2 + index) *
              60 *
              60 *
              1000,
        ),
      });
    }
  }

  console.log(`Jobs prepared: ${jobsToCreate.length}`);

  /*
   * ---------------------------------------------------------
   * 5. Insert jobs in batches
   * ---------------------------------------------------------
   */

  const batchSize = 100;

  for (
    let start = 0;
    start < jobsToCreate.length;
    start += batchSize
  ) {
    const batch = jobsToCreate.slice(
      start,
      start + batchSize,
    );

    await prisma.job.createMany({
      data: batch,
    });

    console.log(
      `Inserted ${Math.min(
        start + batch.length,
        jobsToCreate.length,
      )}/${jobsToCreate.length} jobs`,
    );
  }

  /*
   * ---------------------------------------------------------
   * 6. Final statistics
   * ---------------------------------------------------------
   */

  const totalJobs = await prisma.job.count();

  const generatedJobs = await prisma.job.count({
    where: {
      slug: {
        startsWith: "seed-global-jobs-live-",
      },
    },
  });

  const categoryStats = await prisma.jobCategory.findMany({
    where: {
      isActive: true,
    },
    include: {
      _count: {
        select: {
          jobs: true,
        },
      },
    },
    orderBy: {
      sortOrder: "asc",
    },
  });

  console.log("");
  console.log("========================================");
  console.log("Global Jobs Live seed completed");
  console.log("========================================");
  console.log(`Generated jobs: ${generatedJobs}`);
  console.log(`Total jobs in database: ${totalJobs}`);
  console.log("");

  for (const category of categoryStats) {
    console.log(
      `${category.name}: ${category._count.jobs} jobs`,
    );
  }

  console.log("");
  console.log("Seed complete.");
}

main()
  .catch((error) => {
    console.error("Seed failed:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });