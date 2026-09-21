import type { MetadataRoute } from "next";

const BASE_URL = "https://globaljobslive.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
        "/dashboard/",
        "/login/",
        "/signup/",
      ],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}