import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";

const prisma = new PrismaClient();

type JobSeed = {
  title: string;
  slug: string;
  description: string;
  companySlug: string;
  categorySlug: string;
  country: string;
  countryCode: string;
  location: string;
  jobType:
    | "FULL_TIME"
    | "PART_TIME"
    | "CONTRACT"
    | "FREELANCE"
    | "TEMPORARY"
    | "INTERNSHIP";
  workMode: "REMOTE" | "HYBRID" | "ONSITE";
  experienceLevel:
    | "ENTRY_LEVEL"
    | "MID_LEVEL"
    | "SENIOR_LEVEL"
    | "EXECUTIVE"
    | "NO_EXPERIENCE";
  salaryMin?: number;
  salaryMax?: number;
  salaryCurrency?: string;
  applicationUrl: string;
  isVerified: boolean;
  isFeatured: boolean;
};

const jobs: JobSeed[] = [
  {
    title: "Full Stack Developer",
    slug: "full-stack-developer-united-states",
    description:
      "Work on web applications across frontend and backend systems, contributing to application development, APIs, databases and user-facing features.",
    companySlug: "microsoft",
    categorySlug: "full-stack-developer",
    country: "United States",
    countryCode: "US",
    location: "United States",
    jobType: "FULL_TIME",
    workMode: "REMOTE",
    experienceLevel: "MID_LEVEL",
    salaryMin: 80000,
    salaryMax: 140000,
    salaryCurrency: "USD",
    applicationUrl: "https://careers.microsoft.com/",
    isVerified: true,
    isFeatured: true,
  },

  {
    title: "Frontend Developer",
    slug: "frontend-developer-canada",
    description:
      "Build responsive and accessible web experiences using modern frontend technologies while collaborating with product and engineering teams.",
    companySlug: "shopify",
    categorySlug: "frontend-developer",
    country: "Canada",
    countryCode: "CA",
    location: "Canada",
    jobType: "FULL_TIME",
    workMode: "REMOTE",
    experienceLevel: "MID_LEVEL",
    salaryMin: 70000,
    salaryMax: 130000,
    salaryCurrency: "CAD",
    applicationUrl: "https://www.shopify.com/careers",
    isVerified: true,
    isFeatured: true,
  },

  {
    title: "Software Engineer",
    slug: "software-engineer-united-states",
    description:
      "Design, develop, test and maintain software systems while working with engineering teams to deliver reliable technology products.",
    companySlug: "ibm",
    categorySlug: "software-engineer",
    country: "United States",
    countryCode: "US",
    location: "United States",
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "MID_LEVEL",
    salaryMin: 75000,
    salaryMax: 135000,
    salaryCurrency: "USD",
    applicationUrl: "https://www.ibm.com/careers",
    isVerified: true,
    isFeatured: false,
  },

  {
    title: "UI UX Designer",
    slug: "ui-ux-designer-australia",
    description:
      "Create user-centered digital experiences through research, interaction design, prototyping and visual design.",
    companySlug: "canva",
    categorySlug: "ui-ux-designer",
    country: "Australia",
    countryCode: "AU",
    location: "Australia",
    jobType: "FULL_TIME",
    workMode: "REMOTE",
    experienceLevel: "MID_LEVEL",
    salaryMin: 70000,
    salaryMax: 120000,
    salaryCurrency: "AUD",
    applicationUrl: "https://www.canva.com/careers/",
    isVerified: true,
    isFeatured: true,
  },

  {
    title: "Data Analyst",
    slug: "data-analyst-united-states",
    description:
      "Analyze business and operational data, create reports and dashboards, and communicate useful insights to stakeholders.",
    companySlug: "amazon",
    categorySlug: "data-analyst",
    country: "United States",
    countryCode: "US",
    location: "United States",
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "MID_LEVEL",
    salaryMin: 65000,
    salaryMax: 115000,
    salaryCurrency: "USD",
    applicationUrl: "https://www.amazon.jobs/",
    isVerified: true,
    isFeatured: false,
  },

  {
    title: "Virtual Assistant",
    slug: "virtual-assistant-united-states",
    description:
      "Support business operations through administrative tasks, scheduling, communication, research and digital organization.",
    companySlug: "microsoft",
    categorySlug: "virtual-assistant",
    country: "United States",
    countryCode: "US",
    location: "United States",
    jobType: "PART_TIME",
    workMode: "REMOTE",
    experienceLevel: "ENTRY_LEVEL",
    salaryMin: 18,
    salaryMax: 30,
    salaryCurrency: "USD",
    applicationUrl: "https://careers.microsoft.com/",
    isVerified: true,
    isFeatured: false,
  },

  {
    title: "Content Writer",
    slug: "content-writer-canada",
    description:
      "Research and produce clear, useful written content for digital audiences across websites, marketing materials and online platforms.",
    companySlug: "shopify",
    categorySlug: "content-writer",
    country: "Canada",
    countryCode: "CA",
    location: "Canada",
    jobType: "CONTRACT",
    workMode: "REMOTE",
    experienceLevel: "ENTRY_LEVEL",
    salaryMin: 25,
    salaryMax: 45,
    salaryCurrency: "CAD",
    applicationUrl: "https://www.shopify.com/careers",
    isVerified: true,
    isFeatured: false,
  },

  {
    title: "Customer Service Representative",
    slug: "customer-service-representative-united-states",
    description:
      "Assist customers through digital communication channels, answer questions, resolve issues and provide helpful service.",
    companySlug: "amazon",
    categorySlug: "customer-service",
    country: "United States",
    countryCode: "US",
    location: "United States",
    jobType: "FULL_TIME",
    workMode: "REMOTE",
    experienceLevel: "ENTRY_LEVEL",
    salaryMin: 18,
    salaryMax: 28,
    salaryCurrency: "USD",
    applicationUrl: "https://www.amazon.jobs/",
    isVerified: true,
    isFeatured: false,
  },

  {
    title: "Graphic Designer",
    slug: "graphic-designer-australia",
    description:
      "Create digital visual assets for marketing, communication and product experiences while maintaining consistent visual standards.",
    companySlug: "canva",
    categorySlug: "graphic-designer",
    country: "Australia",
    countryCode: "AU",
    location: "Australia",
    jobType: "FULL_TIME",
    workMode: "REMOTE",
    experienceLevel: "MID_LEVEL",
    salaryMin: 65000,
    salaryMax: 110000,
    salaryCurrency: "AUD",
    applicationUrl: "https://www.canva.com/careers/",
    isVerified: true,
    isFeatured: false,
  },

  {
    title: "Project Manager",
    slug: "project-manager-united-states",
    description:
      "Coordinate projects, timelines, stakeholders and delivery activities while helping teams achieve defined business and technical objectives.",
    companySlug: "ibm",
    categorySlug: "project-manager",
    country: "United States",
    countryCode: "US",
    location: "United States",
    jobType: "FULL_TIME",
    workMode: "HYBRID",
    experienceLevel: "MID_LEVEL",
    salaryMin: 75000,
    salaryMax: 130000,
    salaryCurrency: "USD",
    applicationUrl: "https://www.ibm.com/careers",
    isVerified: true,
    isFeatured: false,
  },
];

async function main() {
  console.log(`Seeding ${jobs.length} jobs...`);

  for (const job of jobs) {
    const company = await prisma.company.findUnique({
      where: {
        slug: job.companySlug,
      },
    });

    if (!company) {
      throw new Error(
        `Company not found: ${job.companySlug}. Seed companies first.`,
      );
    }

    const category = await prisma.jobCategory.findUnique({
      where: {
        slug: job.categorySlug,
      },
    });

    if (!category) {
      throw new Error(
        `Category not found: ${job.categorySlug}. Seed categories first.`,
      );
    }

    await prisma.job.upsert({
      where: {
        slug: job.slug,
      },

      update: {
        title: job.title,
        description: job.description,
        companyId: company.id,
        country: job.country,
        countryCode: job.countryCode,
        location: job.location,
        categoryId: category.id,
        jobType: job.jobType,
        workMode: job.workMode,
        experienceLevel: job.experienceLevel,
        salaryMin: job.salaryMin,
        salaryMax: job.salaryMax,
        salaryCurrency: job.salaryCurrency,
        applicationUrl: job.applicationUrl,
        isVerified: job.isVerified,
        isFeatured: job.isFeatured,
        isActive: true,
      },

      create: {
        title: job.title,
        slug: job.slug,
        description: job.description,
        companyId: company.id,
        country: job.country,
        countryCode: job.countryCode,
        location: job.location,
        categoryId: category.id,
        jobType: job.jobType,
        workMode: job.workMode,
        experienceLevel: job.experienceLevel,
        salaryMin: job.salaryMin,
        salaryMax: job.salaryMax,
        salaryCurrency: job.salaryCurrency,
        applicationUrl: job.applicationUrl,
        isVerified: job.isVerified,
        isFeatured: job.isFeatured,
        isActive: true,
      },
    });
  }

  console.log(`Successfully seeded ${jobs.length} jobs.`);
}

main()
  .catch((error) => {
    console.error("Error while seeding jobs:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });