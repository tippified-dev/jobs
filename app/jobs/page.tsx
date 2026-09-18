import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

function formatSalary(
  min: number | null,
  max: number | null,
  currency: string | null,
) {
  if (!min && !max) return "Salary not specified";

  const symbol =
    currency === "USD"
      ? "$"
      : currency === "GBP"
        ? "£"
        : currency === "EUR"
          ? "€"
          : currency === "CAD"
            ? "C$"
            : currency === "AUD"
              ? "A$"
              : currency === "NZD"
                ? "NZ$"
                : currency
                  ? `${currency} `
                  : "";

  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  });

  if (min && max) {
    return `${symbol}${formatter.format(min)} – ${symbol}${formatter.format(max)}`;
  }

  if (min) return `From ${symbol}${formatter.format(min)}`;
  return `Up to ${symbol}${formatter.format(max!)}`;
}

function formatJobType(value: string) {
  return value
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default async function JobsPage() {
  const jobs = await prisma.job.findMany({
    where: {
      isActive: true,
    },
    include: {
      company: true,
      category: true,
    },
    orderBy: {
      publishedAt: "desc",
    },
    take: 50,
  });

  const totalJobs = await prisma.job.count({
    where: {
      isActive: true,
    },
  });

  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
              Global Jobs Live
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Find Remote and Online Jobs
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Explore remote, hybrid, onsite, skilled, entry-level and online
              opportunities from companies and locations around the world.
            </p>

            <div className="mt-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
              {totalJobs.toLocaleString()} active jobs
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-slate-900">
                Browse jobs
              </h2>

              <div className="mt-5 space-y-3 text-sm">
                <Link href="/jobs" className="block font-medium text-blue-600">
                  All Jobs
                </Link>

                <Link
                  href="/category/full-stack-developer"
                  className="block text-slate-600 transition hover:text-blue-600"
                >
                  Full Stack Developer
                </Link>

                <Link
                  href="/category/frontend-developer"
                  className="block text-slate-600 transition hover:text-blue-600"
                >
                  Frontend Developer
                </Link>

                <Link
                  href="/category/data-entry"
                  className="block text-slate-600 transition hover:text-blue-600"
                >
                  Data Entry
                </Link>

                <Link
                  href="/category/customer-support"
                  className="block text-slate-600 transition hover:text-blue-600"
                >
                  Customer Support
                </Link>

                <Link
                  href="/category/virtual-assistant"
                  className="block text-slate-600 transition hover:text-blue-600"
                >
                  Virtual Assistant
                </Link>
              </div>

              <div className="my-6 border-t border-slate-100" />

              <h2 className="text-base font-semibold text-slate-900">
                Countries
              </h2>

              <div className="mt-4 space-y-3 text-sm">
                <Link
                  href="/country/nigeria"
                  className="block text-slate-600 hover:text-blue-600"
                >
                  Jobs in Nigeria
                </Link>

                <Link
                  href="/country/united-states"
                  className="block text-slate-600 hover:text-blue-600"
                >
                  Jobs in the United States
                </Link>

                <Link
                  href="/country/canada"
                  className="block text-slate-600 hover:text-blue-600"
                >
                  Jobs in Canada
                </Link>

                <Link
                  href="/country/united-kingdom"
                  className="block text-slate-600 hover:text-blue-600"
                >
                  Jobs in the United Kingdom
                </Link>

                <Link
                  href="/country/germany"
                  className="block text-slate-600 hover:text-blue-600"
                >
                  Jobs in Germany
                </Link>
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Latest job opportunities
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Recently added opportunities
                </p>
              </div>
            </div>

            {jobs.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center">
                <h2 className="text-lg font-semibold text-slate-900">
                  No jobs available
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Check back soon for new opportunities.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {jobs.map((job) => (
                  <article
                    key={job.id}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-sm sm:p-6"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <Link
                          href={`/jobs/${job.slug}`}
                          className="text-lg font-bold text-slate-900 hover:text-blue-600"
                        >
                          {job.title}
                        </Link>

                        <p className="mt-2 font-medium text-slate-700">
                          {job.company.name}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                            {job.country}
                          </span>

                          {job.location && (
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                              {job.location}
                            </span>
                          )}

                          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                            {formatJobType(job.workMode)}
                          </span>

                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                            {formatJobType(job.jobType)}
                          </span>

                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                            {formatJobType(job.experienceLevel)}
                          </span>
                        </div>
                      </div>

                      <div className="shrink-0 sm:text-right">
                        <p className="font-semibold text-slate-900">
                          {formatSalary(
                            job.salaryMin ? Number(job.salaryMin) : null,
                            job.salaryMax ? Number(job.salaryMax) : null,
                            job.salaryCurrency,
                          )}
                        </p>

                        <p className="mt-2 text-sm text-slate-500">
                          {job.category.name}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                      <p className="text-xs text-slate-500">
                        Published{" "}
                        {new Intl.DateTimeFormat("en", {
                          dateStyle: "medium",
                        }).format(job.publishedAt)}
                      </p>

                      <Link
                        href={`/jobs/${job.slug}`}
                        className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
                      >
                        View Job
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {totalJobs > 50 && (
              <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4 text-center text-sm text-slate-600">
                Showing the latest 50 jobs. Pagination will be added next.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
