import { prisma } from "@/lib/prisma";
import CurrentArtisanJobs from "./CurrentArtisanJobs";

export default async function CurrentArtisanJobsServer() {
  const categories = await prisma.artisanCategory.findMany({
    where: {
      country: "Nigeria",
      isActive: true,
    },
    orderBy: {
      sortOrder: "asc",
    },
    select: {
      id: true,
      name: true,
      slug: true,
      country: true,
      description: true,
      _count: {
        select: {
          opportunities: {
            where: {
              isActive: true,
            },
          },
        },
      },
    },
  });

  const formattedCategories = categories.map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
    country: category.country,
    description: category.description,
    opportunityCount: category._count.opportunities,
  }));

  return (
    <CurrentArtisanJobs categories={formattedCategories} location="Nigeria" />
  );
}
