import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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

function formatLabel(value: string) {
  return value
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getCountrySlug(country: string) {
  return country
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const job = await prisma.job.findUnique({
    where: {
      slug,
    },
    include: {
      company: true,
      category: true,
    },
  });

  if (!job) {
    return {
      title: "Job Not Found | Global Jobs Live",
    };
  }

  const salary = formatSalary(
    job.salaryMin ? Number(job.salaryMin) : null,
    job.salaryMax ? Number(job.salaryMax) : null,
    job.salaryCurrency,
  );

  const title = `${job.title} at ${job.company.name} | Global Jobs Live`;

  const description =
    `${job.title} at ${job.company.name} in ${job.country}. ` +
    `${formatLabel(job.workMode)} ${formatLabel(job.jobType)} opportunity. ` +
    `${salary}. Find this job and other opportunities on Global Jobs Live.`;

  return {
    title,
    description: description.slice(0, 160),
    alternates: {
      canonical: `/jobs/${job.slug}`,
    },
    openGraph: {
      title,
      description: description.slice(0, 160),
      type: "website",
      siteName: "Global Jobs Live",
    },
    twitter: {
      card: "summary",
      title,
      description: description.slice(0, 160),
    },
  };
}

export default async function JobPage({ params }: PageProps) {
  const { slug } = await params;

  const job = await prisma.job.findUnique({
    where: {
      slug,
    },
    include: {
      company: true,
      category: true,
    },
  });

  if (!job || !job.isActive) {
    notFound();
  }

  const relatedJobs = await prisma.job.findMany({
    where: {
      isActive: true,
      id: {
        not: job.id,
      },
      OR: [
        {
          categoryId: job.categoryId,
        },
        {
          country: job.country,
        },
      ],
    },
    include: {
      company: true,
      category: true,
    },
    orderBy: {
      publishedAt: "desc",
    },
    take: 6,
  });

  const salary = formatSalary(
    job.salaryMin ? Number(job.salaryMin) : null,
    job.salaryMax ? Number(job.salaryMax) : null,
    job.salaryCurrency,
  );

  const countrySlug = getCountrySlug(job.country);

  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.publishedAt.toISOString(),
    ...(job.expiresAt
      ? {
          validThrough: job.expiresAt.toISOString(),
        }
      : {}),
    employmentType: job.jobType,
    hiringOrganization: {
      "@type": "Organization",
      name: job.company.name,
      sameAs: job.company.website || "https://globaljobslive.com",
      ...(job.company.logoUrl
        ? {
            logo: job.company.logoUrl,
          }
        : {}),
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: job.countryCode || job.country,
        ...(job.location
          ? {
              addressLocality: job.location,
            }
          : {}),
      },
    },
    ...(job.workMode === "REMOTE"
      ? {
          jobLocationType: "TELECOMMUTE",
        }
      : {}),
    ...(job.salaryMin || job.salaryMax
      ? {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: job.salaryCurrency || "USD",
            value: {
              "@type": "QuantitativeValue",
              ...(job.salaryMin
                ? {
                    minValue: Number(job.salaryMin),
                  }
                : {}),
              ...(job.salaryMax
                ? {
                    maxValue: Number(job.salaryMax),
                  }
                : {}),
              unitText:
                job.salaryMin && Number(job.salaryMin) >= 1000
                  ? "YEAR"
                  : "HOUR",
            },
          },
        }
      : {}),
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPosting),
        }}
      />

      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/jobs" className="hover:text-blue-600">
              Jobs
            </Link>

            <span>/</span>

            <Link
              href={`/category/${job.category.slug}`}
              className="hover:text-blue-600"
            >
              {job.category.name}
            </Link>

            <span>/</span>

            <Link
              href={`/country/${countrySlug}`}
              className="hover:text-blue-600"
            >
              {job.country}
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <div className="flex flex-wrap gap-2">
                {job.isVerified && (
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                    Verified Job
                  </span>
                )}

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {formatLabel(job.workMode)}
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {formatLabel(job.jobType)}
                </span>
              </div>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {job.title}
              </h1>

              <p className="mt-4 text-lg font-medium text-slate-700">
                {job.company.name}
              </p>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                <span>{job.country}</span>

                {job.location && <span>{job.location}</span>}

                <span>{formatLabel(job.experienceLevel)}</span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-medium text-slate-500">Salary</p>

              <p className="mt-2 text-xl font-bold text-slate-900">{salary}</p>

              <Link
                href={job.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Apply for this job
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Job Description
            </h2>

            <div className="mt-6 whitespace-pre-line text-[15px] leading-8 text-slate-600">
              {job.description}
            </div>

            <div className="mt-10 border-t border-slate-100 pt-8">
              <h2 className="text-xl font-bold text-slate-900">Job Details</h2>

              <dl className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-slate-500">Category</dt>
                  <dd className="mt-1 font-medium text-slate-900">
                    <Link
                      href={`/category/${job.category.slug}`}
                      className="hover:text-blue-600"
                    >
                      {job.category.name}
                    </Link>
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-slate-500">Job Type</dt>
                  <dd className="mt-1 font-medium text-slate-900">
                    {formatLabel(job.jobType)}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-slate-500">Work Mode</dt>
                  <dd className="mt-1 font-medium text-slate-900">
                    {formatLabel(job.workMode)}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-slate-500">Experience Level</dt>
                  <dd className="mt-1 font-medium text-slate-900">
                    {formatLabel(job.experienceLevel)}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-slate-500">Country</dt>
                  <dd className="mt-1 font-medium text-slate-900">
                    <Link
                      href={`/country/${countrySlug}`}
                      className="hover:text-blue-600"
                    >
                      {job.country}
                    </Link>
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-slate-500">Published</dt>
                  <dd className="mt-1 font-medium text-slate-900">
                    {new Intl.DateTimeFormat("en", {
                      dateStyle: "medium",
                    }).format(job.publishedAt)}
                  </dd>
                </div>
              </dl>
            </div>
          </article>

          <aside>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-bold text-slate-900">
                About {job.company.name}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {job.company.description ||
                  `${job.company.name} is listed on Global Jobs Live with opportunities in ${job.country}.`}
              </p>

              <div className="mt-5">
                <span className="text-sm text-slate-500">Location</span>
                <p className="mt-1 font-medium text-slate-900">
                  {job.company.country || job.country}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {relatedJobs.length > 0 && (
        <section className="border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900">Related Jobs</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {relatedJobs.map((relatedJob) => (
                <Link
                  key={relatedJob.id}
                  href={`/jobs/${relatedJob.slug}`}
                  className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
                >
                  <h3 className="font-semibold text-slate-900 hover:text-blue-600">
                    {relatedJob.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-600">
                    {relatedJob.company.name}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                      {relatedJob.country}
                    </span>

                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs text-blue-700">
                      {formatLabel(relatedJob.workMode)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
