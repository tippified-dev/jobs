import type { MetadataRoute } from "next";

import { artisanCategories } from "@/lib/artisan-data";
import { categoryOpportunities } from "@/lib/category-opportunity-data";
import { liveJobs } from "@/lib/live-job-data";
import { onlineSimpleJobs } from "@/lib/online-simple-job-data";

const BASE_URL = "https://globaljobslive.com";

export default function sitemap(): MetadataRoute.Sitemap {
  /*
   * Static pages
   */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/location`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/online-jobs`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/upload-cv`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ad-awareness`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/how-it-works`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/work-benefits`,
      changeFrequency: "daily",
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/data-entry`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/search`,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/post-a-job`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  /*
   * Live jobs
   */
  const liveJobPages: MetadataRoute.Sitemap = liveJobs
    .filter((job) => job.isActive)
    .map((job) => ({
      url: `${BASE_URL}/jobs/${job.slug}`,
      lastModified: job.publishedAt
        ? new Date(job.publishedAt)
        : undefined,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  /*
   * Online jobs
   */
  const onlineJobPages: MetadataRoute.Sitemap = onlineSimpleJobs
    .filter((job) => job.isActive)
    .map((job) => ({
      url: `${BASE_URL}/jobs/${job.slug}`,
      lastModified: job.publishedAt
        ? new Date(job.publishedAt)
        : undefined,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  /*
   * Category opportunities
   * /opportunities/[slug]
   */
  const opportunityPages: MetadataRoute.Sitemap =
    categoryOpportunities.map((opportunity) => ({
      url: `${BASE_URL}/opportunities/${opportunity.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  /*
   * Artisan category pages
   * /artisan/[category]
   */
  const artisanCategoryPages: MetadataRoute.Sitemap =
    artisanCategories.map((category) => ({
      url: `${BASE_URL}/artisan/${category.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  /*
   * Artisan individual opportunities
   * /artisan/[category]/[opportunity]
   */
  const artisanOpportunityPages: MetadataRoute.Sitemap =
    artisanCategories.flatMap((category) =>
      category.opportunities.map((opportunity) => ({
        url: `${BASE_URL}/artisan/${category.slug}/${opportunity.slug}`,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      }))
    );

  /*
   * Combine everything
   */
  const allPages = [
    ...staticPages,
    ...liveJobPages,
    ...onlineJobPages,
    ...opportunityPages,
    ...artisanCategoryPages,
    ...artisanOpportunityPages,
  ];

  /*
   * Remove duplicate URLs
   */
  const seen = new Set<string>();

  return allPages.filter((page) => {
    if (seen.has(page.url)) {
      return false;
    }

    seen.add(page.url);
    return true;
  });
}