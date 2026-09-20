import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiMapPin,
  FiShield,
  FiSmartphone,
  FiWifi,
} from "react-icons/fi";

import {
  getOnlineSimpleJobBySlug,
  getOnlineSimpleJobsByCategory,
} from "@/lib/online-simple-job-data";

import OnlineSimpleJobApplication from "@/app/OnlineSimpleJobApplication";

type PageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

function getTimeAgo(publishedAt: string) {
  const published = new Date(publishedAt).getTime();
  const now = Date.now();

  const difference = Math.max(0, now - published);
  const minutes = Math.floor(difference / 60000);

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

  return "23 hours ago";
}

function formatPay(job: {
  estimatedPayMin: number;
  estimatedPayMax: number;
  payCurrency: string;
  payPeriod: "TASK" | "HOUR" | "WEEK";
}) {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  });

  const min = formatter.format(job.estimatedPayMin);
  const max = formatter.format(job.estimatedPayMax);

  if (job.payPeriod === "TASK") {
    return `${job.payCurrency} ${min}–${max} / task`;
  }

  if (job.payPeriod === "HOUR") {
    return `${job.payCurrency} ${min}–${max} / hour`;
  }

  return `${job.payCurrency} ${min}–${max} / week`;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, slug } = await params;

  const job = getOnlineSimpleJobBySlug(slug);

  if (!job || job.categorySlug !== category) {
    return {
      title: "Online Job | Global Jobs Live",
    };
  }

  const title = `${job.title} at ${job.company.name} | Global Jobs Live`;

  const description = `${job.title} at ${job.company.name} in ${job.country}.  +
    Remote online job with no CV required. View job details, estimated pay and apply online.`;

  const url = `https://globaljobslive.com/online-jobs/${job.categorySlug}/${job.slug}`;

  return {
    title,
    description,
    keywords: [
      job.title,
      job.company.name,
      job.country,
      "online jobs",
      "simple online jobs",
      "remote jobs",
      "no CV jobs",
      "work from home",
      "online jobs without experience",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Global Jobs Live",
      type: "website",
    },
  };
}

export default async function OnlineSimpleJobPage({ params }: PageProps) {
  const { category, slug } = await params;

  const job = getOnlineSimpleJobBySlug(slug);

  if (!job || job.categorySlug !== category) {
    notFound();
  }

  const relatedJobs = getOnlineSimpleJobsByCategory(job.categorySlug)
    .filter((item) => item.id !== job.id)
    .slice(0, 3);

  const pay = formatPay(job);
  const timeAgo = getTimeAgo(job.publishedAt);

  const jobPostingStructuredData =
    !job.isDemo && job.isVerified
      ? {
          "@context": "https://schema.org",
          "@type": "JobPosting",
          title: job.title,
          description: job.description,
          datePosted: job.publishedAt,
          validThrough: job.validThrough,
          employmentType: "OTHER",
          hiringOrganization: {
            "@type": "Organization",
            name: job.company.name,
            description: job.company.description,
          },
          jobLocationType: "TELECOMMUTE",
          applicantLocationRequirements: {
            "@type": "Country",
            name: job.country,
          },
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: job.payCurrency,
            value: {
              "@type": "QuantitativeValue",
              minValue: job.estimatedPayMin,
              maxValue: job.estimatedPayMax,
              unitText: job.payPeriod,
            },
          },
        }
      : null;

  return (
    <main className="min-h-screen bg-white text-black">
      {jobPostingStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jobPostingStructuredData),
          }}
        />
      )}

      {/* Hero */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute left-48 top-48 h-120 w-120 rounded-full bg-blue-600/15 blur-3xl" />
          <div className="absolute right-40 top-20 h-104 w-104 rounded-full bg-blue-700/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
          <Link
            href={`/online-jobs/${job.categorySlug}`}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition-all hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-white"
          >
            <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to {job.category}
          </Link>

          <div className="max-w-4xl pb-14 pt-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-400">
              <FiBriefcase />
              Online Simple Job
            </div>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              {job.title}
            </h1>

            <p className="mt-4 text-lg font-semibold text-blue-400">
              {job.company.name}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <InfoBadge icon={FiMapPin} text={job.country} />
              <InfoBadge icon={FiWifi} text="Remote" />
              <InfoBadge icon={FiCheckCircle} text="No CV required" />
              <InfoBadge icon={FiClock} text={timeAgo} />
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Job details */}
          <div className="space-y-8">
            <section className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-black">About this job</h2>

              <p className="mt-5 whitespace-pre-line text-sm leading-7 text-black/65 sm:text-base">
                {job.description}
              </p>
            </section>

            <JobListSection
              title="What you will do"
              items={job.responsibilities}
            />

            <JobListSection title="Requirements" items={job.requirements} />

            <JobListSection title="What you get" items={job.benefits} />

            <section className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-black">Skills</h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Company */}
            <section className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-black text-xl font-bold text-white">
                  {job.company.name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    Company
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-black">
                    {job.company.name}
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-black/65">
                {job.company.description}
              </p>
            </section>

            {/* Related jobs */}
            {relatedJobs.length > 0 && (
              <section>
                <div className="mb-5">
                  <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    More opportunities
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-black">
                    Similar online jobs
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {relatedJobs.map((relatedJob) => (
                    <Link
                      key={relatedJob.id}
                      href={`/online-jobs/${relatedJob.categorySlug}/${relatedJob.slug}`}
                      className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                        {relatedJob.company.name.charAt(0).toUpperCase()}
                      </div>

                      <h3 className="mt-4 line-clamp-2 font-bold text-black transition-colors group-hover:text-blue-600">
                        {relatedJob.title}
                      </h3>

                      <p className="mt-1 truncate text-sm text-black/50">
                        {relatedJob.company.name}
                      </p>

                      <p className="mt-4 text-xs font-medium text-blue-600">
                        {relatedJob.country}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Application sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl sm:p-7">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Apply for this job
                </p>

                <h2 className="mt-2 text-2xl font-bold text-black">
                  Start your application
                </h2>

                <p className="mt-2 text-sm leading-6 text-black/55">
                  No CV is required. Fill in your basic details to continue.
                </p>
              </div>

              <div className="mb-6 rounded-2xl bg-blue-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                  Estimated pay
                </p>

                <p className="mt-1 text-lg font-bold text-black">{pay}</p>
              </div>

              <OnlineSimpleJobApplication
                jobId={job.id}
                jobTitle={job.title}
                companyName={job.company.name}
                jobCountry={job.country}
              />
            </div>

            <div className="mt-5 rounded-3xl border border-blue-100 bg-blue-50/50 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <FiShield size={20} />
              </div>

              <h3 className="mt-4 font-bold text-black">Simple application</h3>

              <p className="mt-2 text-sm leading-6 text-black/60">
                This listing does not require a CV upload. Only your name,
                country and email address are requested.
              </p>
            </div>

            <div className="mt-5 rounded-3xl border border-blue-100 bg-white p-6">
              <div className="flex items-center gap-3">
                <FiSmartphone className="text-blue-600" size={20} />

                <span className="font-semibold text-black">
                  Apply from your phone
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-black/55">
                These simple online jobs are designed to be accessible from a
                smartphone or computer with an internet connection.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Info Badge                                                                  */
/* -------------------------------------------------------------------------- */

function InfoBadge({
  icon: Icon,
  text,
}: {
  icon: typeof FiMapPin;
  text: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
      <Icon className="text-blue-400" size={15} />
      {text}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Job List Section                                                            */
/* -------------------------------------------------------------------------- */

function JobListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-bold text-black">{title}</h2>

      <ul className="mt-5 space-y-4">
        {items.map((item, index) => (
          <li key={`${item}-${index}`} className="flex gap-3">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
              <FiCheckCircle size={12} />
            </span>

            <span className="text-sm leading-6 text-black/65">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
