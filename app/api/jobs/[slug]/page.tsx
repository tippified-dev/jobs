import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type JobPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const { slug } = await params;

  const job = await prisma.job.findUnique({
    where: { slug },
    include: {
      company: true,
      category: true,
    },
  });

  if (!job) {
    return {
      title: "Job Not Found",
      description: "The job you are looking for could not be found.",
    };
  }

  const description =
    job.description.length > 155
      ? `${job.description.slice(0, 152)}...`
      : job.description;

  return {
    title: `${job.title} in ${job.country}`,
    description,
    alternates: {
      canonical: `/jobs/${job.slug}`,
    },
    openGraph: {
      type: "website",
      title: `${job.title} in ${job.country}`,
      description,
      url: `/jobs/${job.slug}`,
      siteName: "Global Jobs Live",
    },
    robots: {
      /*
       * Our current seeded jobs are test records and have
       * isVerified = false, so Google should not index them yet.
       *
       * When a genuine verified job is published, it becomes indexable.
       */
      index: job.isActive && job.isVerified,
      follow: true,
    },
  };
}

function formatSalary(
  salaryMin: unknown,
  salaryMax: unknown,
  currency: string | null,
) {
  if (!salaryMin && !salaryMax) {
    return null;
  }

  const min = salaryMin ? Number(salaryMin) : null;
  const max = salaryMax ? Number(salaryMax) : null;

  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  });

  const currencyLabel = currency ? `${currency} ` : "";

  if (min !== null && max !== null) {
    return `${currencyLabel}${formatter.format(min)} - ${formatter.format(max)}`;
  }

  if (min !== null) {
    return `From ${currencyLabel}${formatter.format(min)}`;
  }

  if (max !== null) {
    return `Up to ${currencyLabel}${formatter.format(max)}`;
  }

  return null;
}

function employmentType(jobType: string) {
  switch (jobType) {
    case "FULL_TIME":
      return "FULL_TIME";
    case "PART_TIME":
      return "PART_TIME";
    case "CONTRACT":
      return "CONTRACTOR";
    case "FREELANCE":
      return "CONTRACTOR";
    case "TEMPORARY":
      return "TEMPORARY";
    case "INTERNSHIP":
      return "INTERN";
    default:
      return "OTHER";
  }
}

export default async function JobPage({ params }: JobPageProps) {
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
    notFound();
  }

  const relatedJobs = await prisma.job.findMany({
    where: {
      id: {
        not: job.id,
      },
      categoryId: job.categoryId,
      isActive: true,
      isVerified: true,
    },
    include: {
      company: true,
    },
    orderBy: {
      publishedAt: "desc",
    },
    take: 6,
  });

  const salary = formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency);

  const structuredData = job.isVerified
    ? {
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
        employmentType: employmentType(job.jobType),
        hiringOrganization: {
          "@type": "Organization",
          name: job.company.name,
          ...(job.company.website
            ? {
                sameAs: job.company.website,
              }
            : {}),
          ...(job.company.logoUrl
            ? {
                logo: job.company.logoUrl,
              }
            : {}),
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
                  addressCountry: job.country,
                  ...(job.location
                    ? {
                        addressLocality: job.location,
                      }
                    : {}),
                },
              },
            }),
        ...(salary
          ? {
              baseSalary: {
                "@type": "MonetaryAmount",
                currency: job.salaryCurrency,
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
                  unitText: "YEAR",
                },
              },
            }
          : {}),
      }
    : null;

  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      )}

      <main className="min-h-screen bg-slate-50">
        {/* Header */}
        <section className="border-b bg-white">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <Link
              href="/location"
              className="mb-6 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              ← Browse jobs
            </Link>

            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {job.category.name}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {job.jobType.replaceAll("_", " ")}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {job.workMode}
                  </span>

                  {job.isVerified && (
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                      Verified Job
                    </span>
                  )}
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  {job.title}
                </h1>

                <p className="mt-4 text-lg font-medium text-slate-700">
                  {job.company.name}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                  <span>Location: {job.location || job.country}</span>

                  <span>Country: {job.country}</span>

                  <span>
                    Experience: {job.experienceLevel.replaceAll("_", " ")}
                  </span>
                </div>
              </div>

              {/* Apply card */}
              <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                {salary && (
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Salary
                    </p>

                    <p className="mt-1 text-lg font-bold text-slate-950">
                      {salary}
                    </p>
                  </div>
                )}

                <a
                  href={job.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  Apply for this job
                </a>

                <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                  You will be redirected to the application page.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Job Description
            </h2>

            <div className="mt-6 whitespace-pre-line text-[15px] leading-7 text-slate-700">
              {job.description}
            </div>

            <div className="mt-10 border-t border-slate-200 pt-8">
              <h2 className="text-xl font-bold text-slate-950">Job Details</h2>

              <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-slate-500">
                    Job Type
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    {job.jobType.replaceAll("_", " ")}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-slate-500">
                    Work Mode
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    {job.workMode}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-slate-500">
                    Experience Level
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    {job.experienceLevel.replaceAll("_", " ")}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-slate-500">
                    Country
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    {job.country}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-slate-500">
                    Category
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    {job.category.name}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-slate-500">
                    Published
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    {job.publishedAt.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </dd>
                </div>
              </dl>
            </div>
          </article>

          {/* Company + related jobs */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-950">
                About {job.company.name}
              </h2>

              {job.company.description ? (
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {job.company.description}
                </p>
              ) : (
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Explore career opportunities with {job.company.name}.
                </p>
              )}

              {job.company.website && (
                <a
                  href={job.company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Visit company website →
                </a>
              )}
            </div>

            {relatedJobs.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-950">
                  Related Jobs
                </h2>

                <div className="mt-5 space-y-4">
                  {relatedJobs.map((relatedJob) => (
                    <Link
                      key={relatedJob.id}
                      href={`/jobs/${relatedJob.slug}`}
                      className="block rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/40"
                    >
                      <h3 className="font-semibold text-slate-900">
                        {relatedJob.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {relatedJob.company.name}
                      </p>

                      <p className="mt-2 text-xs text-slate-500">
                        {relatedJob.country} · {relatedJob.workMode}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </section>
      </main>
    </>
  );
}
