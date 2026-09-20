import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiChevronRight,
  FiClock,
  FiDollarSign,
  FiGlobe,
  FiMapPin,
  FiShield,
  FiUsers,
  FiWifi,
} from "react-icons/fi";

import Banner320x50 from "@/components/ads/Banner320x50";
import NativeBannerAd from "@/components/ads/NativeBannerAd";
import JobApplication from "@/components/JobApplication";
import { getLiveJobBySlug, liveJobs } from "@/lib/live-job-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = true;

function formatLabel(value: string) {
  return value
    .replaceAll("_", " ")
    .replaceAll("-", " ")
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function formatSalary(job: (typeof liveJobs)[number]) {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  });

  return `${job.salaryCurrency} ${formatter.format(
    job.salaryMin,
  )} – ${formatter.format(job.salaryMax)}`;
}

function getRelativeTime(date: string) {
  const published = new Date(date).getTime();
  const now = Date.now();

  const difference = Math.max(0, now - published);
  const minutes = Math.floor(difference / (1000 * 60));

  if (minutes < 1) {
    return "Just now";
  }

  if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }

  const days = Math.floor(hours / 24);

  return `${days} ${days === 1 ? "day" : "days"} ago`;
}

function getRelatedJobs(currentJob: (typeof liveJobs)[number]) {
  return liveJobs
    .filter(
      (job) =>
        job.id !== currentJob.id &&
        job.isActive &&
        job.categorySlug === currentJob.categorySlug,
    )
    .sort((a, b) => {
      const sameCountryA = a.countrySlug === currentJob.countrySlug ? 1 : 0;

      const sameCountryB = b.countrySlug === currentJob.countrySlug ? 1 : 0;

      return sameCountryB - sameCountryA;
    })
    .slice(0, 4);
}

export async function generateStaticParams() {
  return liveJobs.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getLiveJobBySlug(slug);

  if (!job) {
    return {
      title: "Job Not Found | Global Jobs Live",
    };
  }

  const title = `${job.title} at ${job.company.name} | Global Jobs Live`;

  const description =
    job.description.length > 155
      ? `${job.description.slice(0, 152)}...`
      : job.description;

  return {
    title,
    description,
    alternates: {
      canonical: `https://globaljobslive.com/live-jobs/${job.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://globaljobslive.com/live-jobs/${job.slug}`,
      type: "article",
      siteName: "Global Jobs Live",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function LiveJobPage({ params }: PageProps) {
  const { slug } = await params;

  const job = getLiveJobBySlug(slug);

  if (!job || !job.isActive) {
    notFound();
  }

  const relatedJobs = getRelatedJobs(job);

  /*
   * Google JobPosting structured data must only be published
   * for genuine, active and verified jobs.
   *
   * Our current dataset is demo data, so these pages will not
   * publish JobPosting schema until a real job is supplied.
   */
  const shouldPublishJobPosting = !job.isDemo && job.isActive && job.isVerified;

  const jobPostingSchema = shouldPublishJobPosting
    ? {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: job.title,
        description: job.description,
        datePosted: job.publishedAt,
        validThrough: job.validThrough,
        employmentType: job.employmentType,
        identifier: {
          "@type": "PropertyValue",
          name: "Global Jobs Live",
          value: job.id,
        },
        hiringOrganization: {
          "@type": "Organization",
          name: job.company.name,
          description: job.company.description,
        },
        baseSalary: {
          "@type": "MonetaryAmount",
          currency: job.salaryCurrency,
          value: {
            "@type": "QuantitativeValue",
            minValue: job.salaryMin,
            maxValue: job.salaryMax,
            unitText: job.salaryPeriod,
          },
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
                  addressLocality: job.location,
                  addressCountry: job.countryCode,
                },
              },
            }),
        directApply: Boolean(job.applicationUrl),
      }
    : null;

  return (
    <>
      {jobPostingSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jobPostingSchema),
          }}
        />
      )}

      <main className="min-h-screen bg-slate-50">
        {/* Breadcrumb / back navigation */}
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <Link
                href="/live-jobs"
                className="flex items-center gap-1.5 font-semibold text-blue-600 transition hover:text-blue-700"
              >
                <FiArrowLeft size={13} />
                Live jobs
              </Link>

              <FiChevronRight size={13} />

              <Link
                href={`/category/${job.categorySlug}`}
                className="transition hover:text-blue-600"
              >
                {formatLabel(job.category)}
              </Link>

              <FiChevronRight size={13} />

              <span className="max-w-600 truncate text-slate-400">
                {job.title}
              </span>
            </div>
          </div>
        </div>

        {/* Job hero */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-blue-700">
                    {formatLabel(job.category)}
                  </span>

                  {job.isFeatured && (
                    <span className="rounded-full bg-slate-950 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white">
                      Featured
                    </span>
                  )}

                  {job.isVerified && (
                    <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-bold text-emerald-700">
                      <FiCheckCircle size={13} />
                      Verified job
                    </span>
                  )}
                </div>

                <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  {job.title}
                </h1>

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-600">
                  <span className="flex items-center gap-2 font-semibold text-slate-900">
                    <FiBriefcase size={16} className="text-blue-600" />
                    {job.company.name}
                  </span>

                  <span className="flex items-center gap-2">
                    <FiMapPin size={16} className="text-slate-400" />
                    {job.location}
                  </span>

                  <span className="flex items-center gap-2">
                    <FiGlobe size={16} className="text-slate-400" />
                    {job.country}
                  </span>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
                    {formatLabel(job.employmentType)}
                  </span>

                  <span className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
                    {formatLabel(job.experienceLevel)}
                  </span>

                  <span className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
                    {formatLabel(job.workMode)}
                  </span>

                  <span className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
                    {formatSalary(job)} / {job.salaryPeriod.toLowerCase()}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <FiClock size={14} />
                    Posted {getRelativeTime(job.publishedAt)}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={14} />
                    Posted {formatDate(job.publishedAt)}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={14} />
                    Closes {formatDate(job.validThrough)}
                  </span>
                </div>
              </div>
              <Banner320x50 />

              {/* Application card */}
              <aside className="lg:pt-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                    Compensation
                  </p>

                  <p className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                    {formatSalary(job)}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Compensation range per {job.salaryPeriod.toLowerCase()}.
                  </p>

                  <div className="mt-5 border-t border-slate-200 pt-5">
                    {job.applicationUrl ? (
                      <a
                        href={job.applicationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
                      >
                        Apply for this job
                        <FiArrowUpRight size={16} />
                      </a>
                    ) : (
                      <a
                        href="#application"
                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
                      >
                        Apply with your CV
                        <FiArrowUpRight size={16} />
                      </a>
                    )}

                    <p className="mt-3 text-center text-[11px] leading-5 text-slate-400">
                      Review the job requirements carefully before applying.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            {/* Left column */}
            <div className="space-y-8">
              {/* Demo notice */}
              {job.isDemo && (
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <div className="flex gap-3">
                    <FiShield
                      size={19}
                      className="mt-0.5 shrink-0 text-amber-600"
                    />

                    <div>
                      <p className="text-sm font-bold text-amber-900">
                        Demonstration job listing
                      </p>

                      <p className="mt-1 text-xs leading-5 text-amber-800">
                        This listing is part of the Global Jobs Live
                        demonstration dataset. It is not currently a verified
                        live vacancy.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Description */}
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-bold tracking-tight text-slate-950">
                  About the position
                </h2>

                <div className="mt-5 text-sm leading-7 text-slate-600">
                  <p>{job.description}</p>
                </div>
              </section>

              {/* Responsibilities */}
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-bold tracking-tight text-slate-950">
                  Responsibilities
                </h2>

                <ul className="mt-5 space-y-3">
                  {job.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <NativeBannerAd />

              {/* Qualifications */}
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-bold tracking-tight text-slate-950">
                  Qualifications
                </h2>

                <ul className="mt-5 space-y-3">
                  {job.qualifications.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Requirements */}
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-bold tracking-tight text-slate-950">
                  Requirements
                </h2>

                <ul className="mt-5 space-y-3">
                  {job.requirements.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Benefits */}
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-bold tracking-tight text-slate-950">
                  Benefits
                </h2>

                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {job.benefits.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600"
                    >
                      <FiCheckCircle
                        size={17}
                        className="mt-1 shrink-0 text-blue-600"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Skills */}
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-bold tracking-tight text-slate-950">
                  Skills
                </h2>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* CV application */}
              <section
                id="application"
                className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                    Application
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                    Apply for this position
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Submit your CV and application details for this position.
                  </p>
                </div>

                <div className="mt-6">
                  <JobApplication />
                </div>
              </section>
            </div>

            {/* Right sidebar */}
            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              {/* Company */}
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <FiBriefcase size={19} />
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-bold text-slate-950">
                      {job.company.name}
                    </h2>

                    <p className="mt-0.5 text-xs text-slate-500">
                      {job.company.industry}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-600">
                  {job.company.description}
                </p>
              </section>

              {/* Job overview */}
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="font-bold text-slate-950">Job overview</h2>

                <div className="mt-5 space-y-4">
                  <div className="flex gap-3">
                    <FiBriefcase
                      size={17}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <div>
                      <p className="text-[11px] text-slate-400">
                        Employment type
                      </p>

                      <p className="mt-0.5 text-sm font-semibold text-slate-800">
                        {formatLabel(job.employmentType)}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <FiUsers
                      size={17}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <div>
                      <p className="text-[11px] text-slate-400">Experience</p>

                      <p className="mt-0.5 text-sm font-semibold text-slate-800">
                        {formatLabel(job.experienceLevel)}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <FiWifi
                      size={17}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <div>
                      <p className="text-[11px] text-slate-400">
                        Work arrangement
                      </p>

                      <p className="mt-0.5 text-sm font-semibold text-slate-800">
                        {formatLabel(job.workMode)}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <FiDollarSign
                      size={17}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <div>
                      <p className="text-[11px] text-slate-400">Salary</p>

                      <p className="mt-0.5 text-sm font-semibold text-slate-800">
                        {formatSalary(job)}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <FiMapPin
                      size={17}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <div>
                      <p className="text-[11px] text-slate-400">Location</p>

                      <p className="mt-0.5 text-sm font-semibold text-slate-800">
                        {job.location}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related jobs */}
              {relatedJobs.length > 0 && (
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="font-bold text-slate-950">Related jobs</h2>

                  <div className="mt-4 divide-y divide-slate-100">
                    {relatedJobs.map((relatedJob) => (
                      <Link
                        key={relatedJob.id}
                        href={`/live-jobs/${relatedJob.slug}`}
                        className="group block py-4 first:pt-0 last:pb-0"
                      >
                        <p className="text-sm font-bold leading-5 text-slate-800 transition group-hover:text-blue-600">
                          {relatedJob.title}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {relatedJob.company.name}
                        </p>

                        <div className="mt-2 flex items-center justify-between gap-3">
                          <span className="text-[11px] text-slate-400">
                            {relatedJob.location}
                          </span>

                          <FiArrowUpRight
                            size={13}
                            className="text-slate-400 transition group-hover:text-blue-600"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
