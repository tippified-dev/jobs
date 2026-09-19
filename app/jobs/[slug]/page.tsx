import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getJobBySlug, jobs, type Job } from "@/lib/job-data";

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
  if (min === null && max === null) {
    return "Salary not specified";
  }

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
                : currency === "SGD"
                  ? "S$"
                  : currency
                    ? `${currency} `
                    : "";

  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  });

  if (min !== null && max !== null) {
    return `${symbol}${formatter.format(min)} – ${symbol}${formatter.format(max)}`;
  }

  if (min !== null) {
    return `From ${symbol}${formatter.format(min)}`;
  }

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

function getRelatedJobs(job: Job) {
  return jobs
    .filter(
      (relatedJob) =>
        relatedJob.isActive &&
        relatedJob.id !== job.id &&
        (relatedJob.categorySlug === job.categorySlug ||
          relatedJob.countrySlug === job.countrySlug),
    )
    .sort((a, b) => {
      const aCategory = a.categorySlug === job.categorySlug ? 2 : 0;

      const bCategory = b.categorySlug === job.categorySlug ? 2 : 0;

      const aCountry = a.countrySlug === job.countrySlug ? 1 : 0;

      const bCountry = b.countrySlug === job.countrySlug ? 1 : 0;

      return bCategory + bCountry - (aCategory + aCountry);
    })
    .slice(0, 6);
}

function getEmploymentType(jobType: Job["jobType"]) {
  switch (jobType) {
    case "FULL_TIME":
      return "FULL_TIME";

    case "PART_TIME":
      return "PART_TIME";

    case "CONTRACT":
      return "CONTRACTOR";

    case "TEMPORARY":
      return "TEMPORARY";

    case "INTERNSHIP":
      return "INTERN";

    case "FREELANCE":
      return "OTHER";

    default:
      return undefined;
  }
}

function getSalaryUnit(period: Job["salaryPeriod"]) {
  switch (period) {
    case "YEAR":
      return "YEAR";

    case "MONTH":
      return "MONTH";

    case "HOUR":
      return "HOUR";

    default:
      return undefined;
  }
}

export async function generateStaticParams() {
  return jobs
    .filter((job) => job.isActive)
    .map((job) => ({
      slug: job.slug,
    }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const job = getJobBySlug(slug);

  if (!job || !job.isActive) {
    return {
      title: "Job Not Found | Global Jobs Live",
    };
  }

  const location =
    job.workMode === "REMOTE"
      ? `Remote - ${job.country}`
      : `${job.location}, ${job.country}`;

  const salary = formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency);

  const title =
    `${job.title} at ${job.company.name} | ` + `${location} | Global Jobs Live`;

  const description =
    `${job.title} at ${job.company.name} in ${location}. ` +
    `${formatLabel(job.jobType)} ${formatLabel(job.workMode)} opportunity. ` +
    `${salary}. View job details and application information on Global Jobs Live.`;

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
      url: `/jobs/${job.slug}`,
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

  const job = getJobBySlug(slug);

  if (!job || !job.isActive) {
    notFound();
  }

  const relatedJobs = getRelatedJobs(job);

  const salary = formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency);

  const countrySlug = getCountrySlug(job.country);

  /*
   * Production-ready JobPosting structured data.
   *
   * IMPORTANT:
   * Only genuine, active opportunities should have
   * isVerified=true and a real applicationUrl.
   *
   * When real jobs are imported later, this page does
   * not need to change.
   */

  const jobPosting =
    job.isVerified && job.applicationUrl
      ? {
          "@context": "https://schema.org",
          "@type": "JobPosting",

          title: job.title,

          description: job.description,

          datePosted: job.publishedAt,

          ...(job.expiresAt
            ? {
                validThrough: job.expiresAt,
              }
            : {}),

          employmentType: getEmploymentType(job.jobType),

          hiringOrganization: {
            "@type": "Organization",
            name: job.company.name,
          },

          ...(job.workMode === "REMOTE"
            ? {
                jobLocationType: "TELECOMMUTE",

                applicantLocationRequirements: {
                  "@type": "Country",
                  name: job.country,
                },
              }
            : {
                jobLocation: {
                  "@type": "Place",

                  address: {
                    "@type": "PostalAddress",

                    ...(job.location
                      ? {
                          addressLocality: job.location,
                        }
                      : {}),

                    addressCountry: job.countryCode || job.country,
                  },
                },
              }),

          ...(job.salaryMin !== null || job.salaryMax !== null
            ? {
                baseSalary: {
                  "@type": "MonetaryAmount",

                  currency: job.salaryCurrency || "USD",

                  value: {
                    "@type": "QuantitativeValue",

                    ...(job.salaryMin !== null
                      ? {
                          minValue: job.salaryMin,
                        }
                      : {}),

                    ...(job.salaryMax !== null
                      ? {
                          maxValue: job.salaryMax,
                        }
                      : {}),

                    ...(getSalaryUnit(job.salaryPeriod)
                      ? {
                          unitText: getSalaryUnit(job.salaryPeriod),
                        }
                      : {}),
                  },
                },
              }
            : {}),

          directApply: true,

          url: `https://globaljobslive.com/jobs/${job.slug}`,
        }
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://globaljobslive.com/",
      },

      {
        "@type": "ListItem",
        position: 2,
        name: "Jobs",
        item: "https://globaljobslive.com/jobs",
      },

      {
        "@type": "ListItem",
        position: 3,
        name: job.category,
        item: `https://globaljobslive.com/category/` + `${job.categorySlug}`,
      },

      {
        "@type": "ListItem",
        position: 4,
        name: job.country,
        item: `https://globaljobslive.com/country/` + `${countrySlug}`,
      },

      {
        "@type": "ListItem",
        position: 5,
        name: job.title,
        item: `https://globaljobslive.com/jobs/` + `${job.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* JobPosting structured data */}
      {jobPosting && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jobPosting),
          }}
        />
      )}

      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Header */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/jobs" className="hover:text-blue-600">
              Jobs
            </Link>

            <span>/</span>

            <Link
              href={`/category/${job.categorySlug}`}
              className="hover:text-blue-600"
            >
              {job.category}
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

              {job.applicationUrl ? (
                <a
                  href={job.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Apply for this job
                </a>
              ) : (
                <span className="mt-6 flex w-full cursor-not-allowed items-center justify-center rounded-xl bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-500">
                  Application unavailable
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Job Description
            </h2>

            <div className="mt-6 whitespace-pre-line text-[15px] leading-8 text-slate-600">
              {job.description}
            </div>

            {job.skills.length > 0 && (
              <div className="mt-10 border-t border-slate-100 pt-8">
                <h2 className="text-xl font-bold text-slate-900">
                  Skills and Qualifications
                </h2>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 border-t border-slate-100 pt-8">
              <h2 className="text-xl font-bold text-slate-900">Job Details</h2>

              <dl className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-slate-500">Category</dt>

                  <dd className="mt-1 font-medium text-slate-900">
                    <Link
                      href={`/category/${job.categorySlug}`}
                      className="hover:text-blue-600"
                    >
                      {job.category}
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
                    }).format(new Date(job.publishedAt))}
                  </dd>
                </div>
              </dl>
            </div>

            {job.keywords.length > 0 && (
              <div className="mt-10 border-t border-slate-100 pt-8">
                <h2 className="text-xl font-bold text-slate-900">
                  Related Job Keywords
                </h2>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Company Sidebar */}
          <aside>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-bold text-slate-900">
                About {job.company.name}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {job.company.name} is listed on Global Jobs Live with
                opportunities in {job.country}.
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

      {/* Related Jobs */}
      {relatedJobs.length > 0 && (
        <section className="border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              More opportunities
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Related Jobs
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {relatedJobs.map((relatedJob) => (
                <Link
                  key={relatedJob.id}
                  href={`/jobs/${relatedJob.slug}`}
                  className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
                >
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                      {relatedJob.country}
                    </span>

                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs text-blue-700">
                      {formatLabel(relatedJob.workMode)}
                    </span>
                  </div>

                  <h3 className="mt-4 font-semibold text-slate-900 hover:text-blue-600">
                    {relatedJob.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-600">
                    {relatedJob.company.name}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    {relatedJob.location}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
