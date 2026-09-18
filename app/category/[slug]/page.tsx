import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

function formatCategoryName(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  console.log("CATEGORY SLUG:", slug);

  const category = await prisma.jobCategory.findUnique({
    where: { slug },
  });

  if (!category) {
    return {
      title: "Job Category | Global Jobs Live",
    };
  }

  return {
    title: `${category.name} Jobs | Global Jobs Live`,
    description:
      category.seoDescription ||
      `Find ${category.name} jobs, remote opportunities and career opportunities on Global Jobs Live.`,
    alternates: {
      canonical: `/category/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const category = await prisma.jobCategory.findUnique({
    where: { slug },
    include: {
      jobs: {
        where: {
          isActive: true,
        },
        include: {
          company: true,
        },
        orderBy: {
          publishedAt: "desc",
        },
      },
    },
  });

  if (!category) {
    notFound();
  }

  const categoryName = category.name || formatCategoryName(slug);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            {category.categoryType === "SKILLED"
              ? "Skilled Jobs"
              : "Unskilled & Entry-Level Jobs"}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            {categoryName} Jobs
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            {category.description ||
              category.shortDescription ||
              `Explore ${categoryName} opportunities on Global Jobs Live.`}
          </p>

          <p className="mt-4 text-sm font-medium text-slate-500">
            {category.jobs.length} available job
            {category.jobs.length === 1 ? "" : "s"}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        {category.jobs.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <h2 className="text-xl font-bold text-slate-900">
              No jobs available yet
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              We are adding new {categoryName} opportunities regularly.
            </p>

            <Link
              href="/jobs"
              className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Browse all jobs
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {category.jobs.map((job) => (
              <Link
                key={job.id}
                href={`/jobs/${job.slug}`}
                className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">
                      {job.title}
                    </h2>

                    <p className="mt-1 text-sm font-medium text-blue-600">
                      {job.company.name}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                      <span>{job.country}</span>

                      {job.location && <span>{job.location}</span>}

                      <span>
                        {job.workMode === "REMOTE" ? "Remote" : job.workMode}
                      </span>
                    </div>
                  </div>

                  <span className="shrink-0 text-sm font-semibold text-blue-600">
                    View job →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
