import { prisma } from "@/lib/prisma";
import JobTypeCategoriesClient from "./JobTypeCategoriesClient";

export default async function JobTypeCategories() {
  const categories = await prisma.jobCategory.findMany({
    where: {
      isActive: true,
    },
    orderBy: [
      {
        categoryType: "asc",
      },
      {
        sortOrder: "asc",
      },
    ],
    select: {
      id: true,
      name: true,
      slug: true,
      shortDescription: true,
      description: true,
      categoryType: true,
      icon: true,
      isRemote: true,
      _count: {
        select: {
          jobs: {
            where: {
              isActive: true,
            },
          },
        },
      },
    },
  });

  const skilledJobs = categories
    .filter((category) => category.categoryType === "SKILLED")
    .map((category) => ({
      id: category.id,
      title: category.name,
      description: category.shortDescription || category.description,
      jobs: category._count.jobs,
      icon: category.icon,
      slug: category.slug,
      isRemote: category.isRemote,
    }));

  const unskilledJobs = categories
    .filter((category) => category.categoryType === "UNSKILLED")
    .map((category) => ({
      id: category.id,
      title: category.name,
      description: category.shortDescription || category.description,
      jobs: category._count.jobs,
      icon: category.icon,
      slug: category.slug,
      isRemote: category.isRemote,
    }));

  return (
    <JobTypeCategoriesClient
      skilledJobs={skilledJobs}
      unskilledJobs={unskilledJobs}
    />
  );
}
