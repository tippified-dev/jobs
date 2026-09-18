import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";

const prisma = new PrismaClient();

const categories = [
  // =========================
  // SKILLED JOB CATEGORIES
  // =========================
  {
    name: "Full Stack Developer",
    slug: "full-stack-developer",
    shortDescription:
      "Remote and online full stack developer jobs working across frontend and backend technologies.",
    description:
      "Find full stack developer jobs involving frontend development, backend development, APIs, databases, cloud services, and modern web applications.",
    categoryType: "SKILLED" as const,
    seoTitle: "Full Stack Developer Jobs - Remote & Online Jobs",
    seoDescription:
      "Find full stack developer jobs, remote full stack developer opportunities, salaries, companies, and online positions.",
    icon: "FiCode",
    isRemote: true,
    isFeatured: true,
    sortOrder: 1,
  },
  {
    name: "Frontend Developer",
    slug: "frontend-developer",
    shortDescription:
      "Frontend developer jobs building modern websites and web applications.",
    description:
      "Explore frontend developer jobs using technologies such as React, JavaScript, TypeScript, HTML, CSS, Next.js, and modern frontend frameworks.",
    categoryType: "SKILLED" as const,
    seoTitle: "Frontend Developer Jobs - Remote & Online",
    seoDescription:
      "Find frontend developer jobs, remote frontend positions, salaries, companies, and online opportunities.",
    icon: "FiMonitor",
    isRemote: true,
    isFeatured: true,
    sortOrder: 2,
  },
  {
    name: "Backend Developer",
    slug: "backend-developer",
    shortDescription:
      "Backend developer jobs building APIs, databases, servers, and application infrastructure.",
    description:
      "Find backend developer opportunities involving APIs, databases, authentication, cloud services, server-side programming, and application infrastructure.",
    categoryType: "SKILLED" as const,
    seoTitle: "Backend Developer Jobs - Remote & Online",
    seoDescription:
      "Browse backend developer jobs, remote backend positions, salaries, companies, and online opportunities.",
    icon: "FiServer",
    isRemote: true,
    isFeatured: true,
    sortOrder: 3,
  },
  {
    name: "UI/UX Designer",
    slug: "ui-ux-designer",
    shortDescription:
      "UI and UX design jobs creating useful, accessible, and engaging digital experiences.",
    description:
      "Explore UI/UX designer jobs focused on user research, interface design, prototyping, usability, design systems, and digital product experiences.",
    categoryType: "SKILLED" as const,
    seoTitle: "UI/UX Designer Jobs - Remote & Online",
    seoDescription:
      "Find UI/UX designer jobs, remote design opportunities, salaries, companies, and online positions.",
    icon: "FiPenTool",
    isRemote: true,
    isFeatured: true,
    sortOrder: 4,
  },
  {
    name: "Graphic Designer",
    slug: "graphic-designer",
    shortDescription:
      "Graphic design jobs creating visual content for brands, websites, products, and marketing.",
    description:
      "Find graphic designer jobs involving branding, social media graphics, advertising materials, digital illustrations, marketing designs, and visual communication.",
    categoryType: "SKILLED" as const,
    seoTitle: "Graphic Designer Jobs - Remote & Online",
    seoDescription:
      "Browse graphic designer jobs, remote graphic design positions, salaries, companies, and online opportunities.",
    icon: "FiImage",
    isRemote: true,
    isFeatured: true,
    sortOrder: 5,
  },
  {
    name: "Digital Marketer",
    slug: "digital-marketer",
    shortDescription:
      "Digital marketing jobs covering online advertising, campaigns, content, and customer acquisition.",
    description:
      "Explore digital marketing jobs involving online advertising, email marketing, content marketing, social media, analytics, lead generation, and customer acquisition.",
    categoryType: "SKILLED" as const,
    seoTitle: "Digital Marketing Jobs - Remote & Online",
    seoDescription:
      "Find digital marketing jobs, remote digital marketer positions, salaries, companies, and online opportunities.",
    icon: "FiTrendingUp",
    isRemote: true,
    sortOrder: 6,
  },
  {
    name: "SEO Specialist",
    slug: "seo-specialist",
    shortDescription:
      "SEO jobs helping websites improve search visibility, rankings, traffic, and organic growth.",
    description:
      "Find SEO specialist jobs involving keyword research, technical SEO, content optimization, link building, analytics, and search engine optimization.",
    categoryType: "SKILLED" as const,
    seoTitle: "SEO Specialist Jobs - Remote & Online",
    seoDescription:
      "Browse SEO specialist jobs, remote SEO positions, salaries, companies, and online opportunities.",
    icon: "FiSearch",
    isRemote: true,
    sortOrder: 7,
  },
  {
    name: "Content Writer",
    slug: "content-writer",
    shortDescription:
      "Content writing jobs creating articles, website content, marketing copy, and digital content.",
    description:
      "Explore content writer jobs involving blog posts, website content, product descriptions, marketing materials, technical writing, and online publishing.",
    categoryType: "SKILLED" as const,
    seoTitle: "Content Writer Jobs - Remote & Online",
    seoDescription:
      "Find content writer jobs, remote writing positions, salaries, companies, and online opportunities.",
    icon: "FiEdit3",
    isRemote: true,
    sortOrder: 8,
  },
  {
    name: "Software Engineer",
    slug: "software-engineer",
    shortDescription:
      "Software engineering jobs developing applications, systems, platforms, and digital products.",
    description:
      "Find software engineering opportunities involving application development, system design, testing, programming, APIs, databases, and software architecture.",
    categoryType: "SKILLED" as const,
    seoTitle: "Software Engineer Jobs - Remote & Online",
    seoDescription:
      "Browse software engineer jobs, remote software engineering positions, salaries, companies, and online opportunities.",
    icon: "FiCpu",
    isRemote: true,
    isFeatured: true,
    sortOrder: 9,
  },
  {
    name: "Data Analyst",
    slug: "data-analyst",
    shortDescription:
      "Data analyst jobs turning business and operational data into useful insights.",
    description:
      "Explore data analyst jobs involving data collection, reporting, dashboards, spreadsheets, SQL, analytics, visualization, and business intelligence.",
    categoryType: "SKILLED" as const,
    seoTitle: "Data Analyst Jobs - Remote & Online",
    seoDescription:
      "Find data analyst jobs, remote data analysis positions, salaries, companies, and online opportunities.",
    icon: "FiBarChart2",
    isRemote: true,
    sortOrder: 10,
  },
  {
    name: "Project Manager",
    slug: "project-manager",
    shortDescription:
      "Project management jobs coordinating teams, deadlines, resources, and business projects.",
    description:
      "Find project manager jobs involving planning, team coordination, project delivery, documentation, budgets, timelines, and stakeholder communication.",
    categoryType: "SKILLED" as const,
    seoTitle: "Project Manager Jobs - Remote & Online",
    seoDescription:
      "Browse project manager jobs, remote project management positions, salaries, companies, and online opportunities.",
    icon: "FiBriefcase",
    isRemote: true,
    sortOrder: 11,
  },
  {
    name: "Social Media Manager",
    slug: "social-media-manager",
    shortDescription:
      "Social media management jobs creating and managing digital content and online communities.",
    description:
      "Explore social media manager jobs involving content planning, publishing, audience engagement, analytics, campaigns, and social media strategy.",
    categoryType: "SKILLED" as const,
    seoTitle: "Social Media Manager Jobs - Remote & Online",
    seoDescription:
      "Find social media manager jobs, remote social media positions, salaries, companies, and online opportunities.",
    icon: "FiShare2",
    isRemote: true,
    sortOrder: 12,
  },
  {
    name: "Product Manager",
    slug: "product-manager",
    shortDescription:
      "Product management jobs guiding digital products from ideas through development and launch.",
    description:
      "Find product manager opportunities involving product strategy, requirements, roadmaps, research, development teams, testing, and product launches.",
    categoryType: "SKILLED" as const,
    seoTitle: "Product Manager Jobs - Remote & Online",
    seoDescription:
      "Browse product manager jobs, remote product management positions, salaries, companies, and online opportunities.",
    icon: "FiPackage",
    isRemote: true,
    sortOrder: 13,
  },
  {
    name: "DevOps Engineer",
    slug: "devops-engineer",
    shortDescription:
      "DevOps engineering jobs involving deployment, automation, infrastructure, and cloud operations.",
    description:
      "Explore DevOps engineer jobs involving CI/CD, cloud infrastructure, containers, automation, monitoring, deployment pipelines, and system reliability.",
    categoryType: "SKILLED" as const,
    seoTitle: "DevOps Engineer Jobs - Remote & Online",
    seoDescription:
      "Find DevOps engineer jobs, remote DevOps positions, salaries, companies, and online opportunities.",
    icon: "FiSettings",
    isRemote: true,
    sortOrder: 14,
  },
  {
    name: "Customer Success Manager",
    slug: "customer-success-manager",
    shortDescription:
      "Customer success jobs helping customers achieve results with products and services.",
    description:
      "Find customer success manager opportunities involving customer relationships, onboarding, retention, product adoption, support, and account management.",
    categoryType: "SKILLED" as const,
    seoTitle: "Customer Success Manager Jobs - Remote & Online",
    seoDescription:
      "Browse customer success manager jobs, remote customer success positions, salaries, companies, and online opportunities.",
    icon: "FiUsers",
    isRemote: true,
    sortOrder: 15,
  },
  {
    name: "Business Analyst",
    slug: "business-analyst",
    shortDescription:
      "Business analyst jobs analyzing processes, requirements, data, and business opportunities.",
    description:
      "Explore business analyst jobs involving requirements gathering, process analysis, documentation, reporting, stakeholder communication, and business improvement.",
    categoryType: "SKILLED" as const,
    seoTitle: "Business Analyst Jobs - Remote & Online",
    seoDescription:
      "Find business analyst jobs, remote business analysis positions, salaries, companies, and online opportunities.",
    icon: "FiPieChart",
    isRemote: true,
    sortOrder: 16,
  },
  {
    name: "Virtual Assistant",
    slug: "virtual-assistant",
    shortDescription:
      "Virtual assistant jobs helping businesses and individuals with online administrative tasks.",
    description:
      "Find virtual assistant jobs involving scheduling, email management, research, customer communication, data entry, administration, and online business support.",
    categoryType: "SKILLED" as const,
    seoTitle: "Virtual Assistant Jobs - Remote & Online",
    seoDescription:
      "Browse virtual assistant jobs, remote VA positions, salaries, companies, and online opportunities.",
    icon: "FiUserCheck",
    isRemote: true,
    sortOrder: 17,
  },
  {
    name: "Web Designer",
    slug: "web-designer",
    shortDescription:
      "Web design jobs creating attractive, accessible, and user-friendly websites.",
    description:
      "Explore web designer jobs involving website layouts, visual design, responsive design, landing pages, user interfaces, and website experiences.",
    categoryType: "SKILLED" as const,
    seoTitle: "Web Designer Jobs - Remote & Online",
    seoDescription:
      "Find web designer jobs, remote web design positions, salaries, companies, and online opportunities.",
    icon: "FiLayout",
    isRemote: true,
    sortOrder: 18,
  },
  {
    name: "Cybersecurity Specialist",
    slug: "cybersecurity-specialist",
    shortDescription:
      "Cybersecurity jobs protecting systems, applications, networks, and digital information.",
    description:
      "Find cybersecurity specialist jobs involving security monitoring, vulnerability assessment, risk management, compliance, incident response, and security operations.",
    categoryType: "SKILLED" as const,
    seoTitle: "Cybersecurity Specialist Jobs - Remote & Online",
    seoDescription:
      "Browse cybersecurity jobs, remote cybersecurity positions, salaries, companies, and online opportunities.",
    icon: "FiShield",
    isRemote: true,
    sortOrder: 19,
  },
  {
    name: "Cloud Engineer",
    slug: "cloud-engineer",
    shortDescription:
      "Cloud engineering jobs managing cloud infrastructure, applications, deployments, and services.",
    description:
      "Explore cloud engineer jobs involving cloud infrastructure, deployment, networking, security, automation, monitoring, and cloud platforms.",
    categoryType: "SKILLED" as const,
    seoTitle: "Cloud Engineer Jobs - Remote & Online",
    seoDescription:
      "Find cloud engineer jobs, remote cloud engineering positions, salaries, companies, and online opportunities.",
    icon: "FiCloud",
    isRemote: true,
    sortOrder: 20,
  },

  // =========================
  // UNSKILLED / ENTRY-LEVEL
  // =========================
  {
    name: "Data Entry",
    slug: "data-entry",
    shortDescription:
      "Data entry jobs that involve entering, updating, organizing, and checking information online.",
    description:
      "Find data entry jobs suitable for people looking for online work involving spreadsheets, databases, forms, document processing, and information management.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "Data Entry Jobs - Remote & Online",
    seoDescription:
      "Find remote data entry jobs, online data entry opportunities, entry-level positions, companies, and available work.",
    icon: "FiDatabase",
    isRemote: true,
    isFeatured: true,
    sortOrder: 21,
  },
  {
    name: "Online Surveys",
    slug: "online-surveys",
    shortDescription:
      "Online survey opportunities involving research questionnaires and consumer feedback.",
    description:
      "Explore online survey opportunities where participants provide opinions, feedback, and information for market research and consumer studies.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "Online Survey Jobs & Opportunities",
    seoDescription:
      "Find online survey opportunities, paid research surveys, consumer feedback jobs, and flexible online work.",
    icon: "FiClipboard",
    isRemote: true,
    sortOrder: 22,
  },
  {
    name: "Transcription",
    slug: "transcription",
    shortDescription:
      "Transcription jobs converting audio and video recordings into written text.",
    description:
      "Find online transcription opportunities involving audio recordings, interviews, meetings, videos, podcasts, and other digital content.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "Transcription Jobs - Remote & Online",
    seoDescription:
      "Browse remote transcription jobs, online transcription opportunities, salaries, companies, and flexible work.",
    icon: "FiFileText",
    isRemote: true,
    sortOrder: 23,
  },
  {
    name: "Chat Support",
    slug: "chat-support",
    shortDescription:
      "Chat support jobs helping customers through online messaging platforms.",
    description:
      "Explore chat support jobs involving customer communication, troubleshooting, answering questions, and providing assistance through live chat.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "Chat Support Jobs - Remote & Online",
    seoDescription:
      "Find remote chat support jobs, online customer chat positions, companies, salaries, and flexible opportunities.",
    icon: "FiMessageCircle",
    isRemote: true,
    sortOrder: 24,
  },
  {
    name: "Customer Support",
    slug: "customer-support",
    shortDescription:
      "Customer support jobs helping customers resolve questions and service issues.",
    description:
      "Find customer support opportunities involving email, chat, phone, troubleshooting, customer questions, account assistance, and service support.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "Customer Support Jobs - Remote & Online",
    seoDescription:
      "Browse remote customer support jobs, online customer service positions, salaries, companies, and entry-level opportunities.",
    icon: "FiHeadphones",
    isRemote: true,
    isFeatured: true,
    sortOrder: 25,
  },
  {
    name: "Content Moderation",
    slug: "content-moderation",
    shortDescription:
      "Content moderation jobs reviewing online content according to platform guidelines.",
    description:
      "Explore content moderation opportunities involving reviewing user-generated content, identifying policy violations, and maintaining online community standards.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "Content Moderator Jobs - Remote & Online",
    seoDescription:
      "Find remote content moderator jobs, online content review opportunities, companies, salaries, and flexible work.",
    icon: "FiEye",
    isRemote: true,
    sortOrder: 26,
  },
  {
    name: "Product Listing",
    slug: "product-listing",
    shortDescription:
      "Product listing jobs adding and updating products on online stores and marketplaces.",
    description:
      "Find product listing opportunities involving product titles, descriptions, images, prices, categories, inventory information, and ecommerce platforms.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "Product Listing Jobs - Remote & Online",
    seoDescription:
      "Browse remote product listing jobs, ecommerce listing opportunities, online marketplace jobs, and flexible work.",
    icon: "FiShoppingBag",
    isRemote: true,
    sortOrder: 27,
  },
  {
    name: "Online Research",
    slug: "online-research",
    shortDescription:
      "Online research jobs collecting and organizing information from websites and digital sources.",
    description:
      "Explore online research jobs involving web research, information gathering, data collection, competitor research, and organizing online information.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "Online Research Jobs - Remote & Online",
    seoDescription:
      "Find online research jobs, remote web research opportunities, data collection positions, and flexible work.",
    icon: "FiSearch",
    isRemote: true,
    sortOrder: 28,
  },
  {
    name: "Email Support",
    slug: "email-support",
    shortDescription:
      "Email support jobs helping customers and users through written communication.",
    description:
      "Find email support opportunities involving customer questions, account assistance, issue resolution, written communication, and service support.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "Email Support Jobs - Remote & Online",
    seoDescription:
      "Browse remote email support jobs, online customer service positions, salaries, companies, and flexible work.",
    icon: "FiMail",
    isRemote: true,
    sortOrder: 29,
  },
  {
    name: "Social Media Assistant",
    slug: "social-media-assistant",
    shortDescription:
      "Social media assistant jobs supporting content publishing, engagement, and online communities.",
    description:
      "Explore social media assistant opportunities involving scheduling posts, responding to comments, collecting content, basic research, and audience engagement.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "Social Media Assistant Jobs - Remote & Online",
    seoDescription:
      "Find remote social media assistant jobs, online social media opportunities, companies, and flexible positions.",
    icon: "FiShare2",
    isRemote: true,
    sortOrder: 30,
  },
  {
    name: "Website Testing",
    slug: "website-testing",
    shortDescription:
      "Website testing opportunities reviewing websites and reporting usability issues.",
    description:
      "Find website testing opportunities involving usability testing, navigation checks, bug reporting, feedback, and user experience evaluation.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "Website Testing Jobs - Remote & Online",
    seoDescription:
      "Browse website testing jobs and online usability testing opportunities that can be performed remotely.",
    icon: "FiMonitor",
    isRemote: true,
    sortOrder: 31,
  },
  {
    name: "App Testing",
    slug: "app-testing",
    shortDescription:
      "App testing opportunities reviewing mobile and web applications and reporting issues.",
    description:
      "Explore app testing opportunities involving usability checks, feature testing, bug reporting, user feedback, and application reviews.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "App Testing Jobs - Remote & Online",
    seoDescription:
      "Find remote app testing opportunities, mobile app testing jobs, usability testing, and flexible online work.",
    icon: "FiSmartphone",
    isRemote: true,
    sortOrder: 32,
  },
  {
    name: "Captioning",
    slug: "captioning",
    shortDescription:
      "Captioning jobs creating written captions for videos and digital media.",
    description:
      "Find online captioning opportunities involving video captions, subtitles, accessibility content, and written versions of spoken audio.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "Captioning Jobs - Remote & Online",
    seoDescription:
      "Browse remote captioning jobs, online captioning opportunities, video subtitle work, and flexible positions.",
    icon: "FiType",
    isRemote: true,
    sortOrder: 33,
  },
  {
    name: "Online Chat Agent",
    slug: "online-chat-agent",
    shortDescription:
      "Online chat agent jobs assisting customers and users through digital chat platforms.",
    description:
      "Explore online chat agent opportunities involving customer questions, live chat communication, basic troubleshooting, and online assistance.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "Online Chat Agent Jobs - Remote & Online",
    seoDescription:
      "Find online chat agent jobs, remote chat positions, customer communication opportunities, and flexible work.",
    icon: "FiMessageSquare",
    isRemote: true,
    sortOrder: 34,
  },
  {
    name: "Simple Web Research",
    slug: "web-research",
    shortDescription:
      "Simple web research jobs collecting basic information from websites and online sources.",
    description:
      "Find simple web research opportunities involving searching websites, collecting information, verifying details, and organizing research results.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "Web Research Jobs - Remote & Online",
    seoDescription:
      "Browse simple web research jobs, online research opportunities, data collection work, and flexible remote positions.",
    icon: "FiSearch",
    isRemote: true,
    sortOrder: 35,
  },
  {
    name: "Order Processing",
    slug: "order-processing",
    shortDescription:
      "Order processing jobs helping businesses manage customer orders and ecommerce transactions.",
    description:
      "Explore order processing opportunities involving entering orders, checking customer information, updating order records, and supporting ecommerce operations.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "Order Processing Jobs - Remote & Online",
    seoDescription:
      "Find remote order processing jobs, ecommerce order management opportunities, companies, and flexible work.",
    icon: "FiShoppingCart",
    isRemote: true,
    sortOrder: 36,
  },
  {
    name: "Community Assistant",
    slug: "community-assistant",
    shortDescription:
      "Community assistant jobs supporting online communities and member engagement.",
    description:
      "Find community assistant opportunities involving member support, communication, content organization, moderation assistance, and community engagement.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "Community Assistant Jobs - Remote & Online",
    seoDescription:
      "Browse remote community assistant jobs, online community support opportunities, and flexible positions.",
    icon: "FiUsers",
    isRemote: true,
    sortOrder: 37,
  },
  {
    name: "Document Formatting",
    slug: "document-formatting",
    shortDescription:
      "Document formatting jobs organizing and formatting digital documents.",
    description:
      "Explore document formatting opportunities involving Word documents, reports, spreadsheets, presentations, PDFs, and digital document organization.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "Document Formatting Jobs - Remote & Online",
    seoDescription:
      "Find remote document formatting jobs, online document processing opportunities, and flexible work.",
    icon: "FiFile",
    isRemote: true,
    sortOrder: 38,
  },
  {
    name: "Image Tagging",
    slug: "image-tagging",
    shortDescription:
      "Image tagging jobs labeling and categorizing images for digital projects and datasets.",
    description:
      "Find image tagging opportunities involving labeling objects, categorizing images, annotating visual information, and preparing data for digital projects.",
    categoryType: "UNSKILLED" as const,
    seoTitle: "Image Tagging Jobs - Remote & Online",
    seoDescription:
      "Browse remote image tagging jobs, image annotation opportunities, data labeling work, and flexible online positions.",
    icon: "FiTag",
    isRemote: true,
    sortOrder: 39,
  },
];

async function main() {
  console.log(`Seeding ${categories.length} job categories...`);

  for (const category of categories) {
    await prisma.jobCategory.upsert({
      where: {
        slug: category.slug,
      },
      update: {
        name: category.name,
        shortDescription: category.shortDescription,
        description: category.description,
        categoryType: category.categoryType,
        seoTitle: category.seoTitle,
        seoDescription: category.seoDescription,
        icon: category.icon,
        isRemote: category.isRemote,
        isFeatured: category.isFeatured ?? false,
        isActive: true,
        sortOrder: category.sortOrder,
      },
      create: {
        name: category.name,
        slug: category.slug,
        shortDescription: category.shortDescription,
        description: category.description,
        categoryType: category.categoryType,
        seoTitle: category.seoTitle,
        seoDescription: category.seoDescription,
        icon: category.icon,
        isRemote: category.isRemote,
        isFeatured: category.isFeatured ?? false,
        isActive: true,
        sortOrder: category.sortOrder,
      },
    });

    console.log(`✓ ${category.name}`);
  }

  console.log("\nCategory seeding completed successfully.");
}

main()
  .catch((error) => {
    console.error("Category seeding failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });