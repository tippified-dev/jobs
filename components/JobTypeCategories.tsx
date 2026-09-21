import {
  categoryOpportunities,
  opportunityCategories,
} from "@/lib/category-opportunity-data";
import JobTypeCategoriesClient from "./JobTypeCategoriesClient";

const skilledCategorySlugs = new Set([
  "full-stack-developer",
  "frontend-developer",
  "backend-developer",
  "software-engineer",
  "mobile-developer",
  "ui-ux-designer",
  "data-analyst",
  "digital-marketing",
  "seo-specialist",
  "graphic-designer",
  "content-writer",
  "project-manager",
  "social-media-manager",
]);

const categoryDescriptions: Record<string, string> = {
  "full-stack-developer":
    "Build complete web applications across frontend and backend technologies for companies worldwide.",

  "frontend-developer":
    "Create responsive and interactive websites and web applications using modern frontend technologies.",

  "backend-developer":
    "Build APIs, server-side applications, databases, and backend systems that power digital products.",

  "software-engineer":
    "Develop, maintain, and improve software systems used by businesses and organizations.",

  "mobile-developer":
    "Build and maintain mobile applications for smartphones and tablets across major platforms.",

  "ui-ux-designer":
    "Design intuitive digital experiences, user interfaces, wireframes, and product experiences.",

  "data-analyst":
    "Analyze business data, identify useful insights, and help organizations make informed decisions.",

  "digital-marketing":
    "Help businesses grow online through digital campaigns, content, advertising, and audience engagement.",

  "seo-specialist":
    "Improve website visibility in search engines through technical, content, and search optimization strategies.",

  "graphic-designer":
    "Create visual content, marketing materials, brand assets, and digital designs for businesses and organizations.",

  "content-writer":
    "Write articles, website content, marketing copy, documentation, and other digital content.",

  "project-manager":
    "Coordinate projects, teams, deadlines, resources, and business requirements across different industries.",

  "social-media-manager":
    "Manage social media accounts, content calendars, audience engagement, and online brand presence.",

  "data-entry":
    "Find flexible opportunities involving data input, record management, document processing, and digital information tasks.",

  "virtual-assistant":
    "Support businesses and professionals with administrative, scheduling, communication, and online tasks.",

  "customer-support":
    "Help customers through chat, email, phone, and other support channels for businesses worldwide.",

  sales:
    "Find sales opportunities involving customer outreach, lead generation, business development, and client relationships.",

  "online-research":
    "Complete online research, information gathering, web research, and other internet-based tasks.",
};

function getCategoryDescription(slug: string, fallback: string): string {
  return categoryDescriptions[slug] ?? fallback;
}

export default function JobTypeCategories() {
  const skilledJobs = opportunityCategories
    .filter((category) => skilledCategorySlugs.has(category.slug))
    .map((category) => {
      const jobs = categoryOpportunities.filter(
        (opportunity) =>
          opportunity.categorySlug === category.slug && opportunity.isActive,
      );

      return {
        id: category.slug,
        title: category.name,
        description: getCategoryDescription(
          category.slug,
          `${category.name} opportunities from companies around the world.`,
        ),
        jobs: jobs.length,
        slug: category.slug,
        isRemote: jobs.some((opportunity) => opportunity.workMode === "REMOTE"),
      };
    });

  const unskilledJobs = opportunityCategories
    .filter((category) => !skilledCategorySlugs.has(category.slug))
    .map((category) => {
      const jobs = categoryOpportunities.filter(
        (opportunity) =>
          opportunity.categorySlug === category.slug && opportunity.isActive,
      );

      return {
        id: category.slug,
        title: category.name,
        description: getCategoryDescription(
          category.slug,
          `${category.name} opportunities from companies around the world.`,
        ),
        jobs: jobs.length,
        slug: category.slug,
        isRemote: jobs.some((opportunity) => opportunity.workMode === "REMOTE"),
      };
    });

  return (
    <JobTypeCategoriesClient
      skilledJobs={skilledJobs}
      unskilledJobs={unskilledJobs}
    />
  );
}
