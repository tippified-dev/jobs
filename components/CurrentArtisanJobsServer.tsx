import { artisanCategories } from "@/lib/artisan-data";

import CurrentArtisanJobs from "./CurrentArtisanJobs";

export default function CurrentArtisanJobsServer() {
  const categories = artisanCategories.map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
    country: category.country,
    description: category.description,
    opportunityCount: category.opportunities.length,
  }));

  return <CurrentArtisanJobs categories={categories} location="Nigeria" />;
}
