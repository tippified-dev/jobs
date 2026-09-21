import Banner320x50 from "@/components/ads/Banner320x50";
import NativeBannerAd from "@/components/ads/NativeBannerAd";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiGlobe,
  FiMapPin,
  FiMonitor,
} from "react-icons/fi";

import {
  categoryOpportunities,
  getOpportunitiesByCategory,
  getOpportunityBySlug,
  type CategoryOpportunity,
} from "@/lib/category-opportunity-data";

import JobApplication from "@/components/JobApplication";

type OpportunityPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return categoryOpportunities.map((opportunity) => ({
    slug: opportunity.slug,
  }));
}

function formatEnum(value: string): string {
  return value
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatSalary(opportunity: CategoryOpportunity): string {
  const min = opportunity.salaryMin.toLocaleString();
  const max = opportunity.salaryMax.toLocaleString();

  if (opportunity.salaryPeriod === "HOUR") {
    return `${opportunity.salaryCurrency} ${min}–${opportunity.salaryCurrency} ${max}/hr`;
  }

  if (opportunity.salaryPeriod === "MONTH") {
    return `${opportunity.salaryCurrency} ${min}–${opportunity.salaryCurrency} ${max}/month`;
  }

  return `${opportunity.salaryCurrency} ${min}–${opportunity.salaryCurrency} ${max}/year`;
}

function getPublishedText(daysAgo: number): string {
  if (daysAgo === 0) {
    return "Published today";
  }

  if (daysAgo === 1) {
    return "Published 1 day ago";
  }

  return `Published ${daysAgo} days ago`;
}

export async function generateMetadata({
  params,
}: OpportunityPageProps): Promise<Metadata> {
  const { slug } = await params;

  const opportunity = getOpportunityBySlug(slug);

  if (!opportunity) {
    return {
      title: "Opportunity Not Found | Global Jobs Live",
      description:
        "The opportunity you are looking for could not be found on Global Jobs Live.",
    };
  }

  const title = `${opportunity.title} | ${opportunity.company.name} | Global Jobs Live`;

  const description =
    `${opportunity.title} at ${opportunity.company.name} in ${opportunity.country}. ` +
    `${formatEnum(opportunity.workMode)} ${formatEnum(opportunity.jobType)} opportunity ` +
    `for ${formatEnum(opportunity.experienceLevel)} professionals. ` +
    `Explore the role, salary, skills, company information and application details.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/opportunities/${opportunity.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://globaljobslive.com/opportunities/${opportunity.slug}`,
    },
  };
}

function DetailItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-sm font-medium text-slate-700">{value}</p>
      </div>
    </div>
  );
}

function OpportunityCard({
  opportunity,
}: {
  opportunity: CategoryOpportunity;
}) {
  return (
    <Link
      href={`/opportunities/${opportunity.slug}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
              {opportunity.workMode === "REMOTE"
                ? "Remote"
                : formatEnum(opportunity.workMode)}
            </span>

            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
              {formatEnum(opportunity.jobType)}
            </span>
          </div>

          <h3 className="text-base font-bold leading-snug text-slate-900 group-hover:text-blue-600">
            {opportunity.title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {opportunity.company.name}
          </p>
        </div>

        <FiArrowRight className="mt-1 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
      </div>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <FiMapPin />
          {opportunity.location}
        </span>

        <span className="inline-flex items-center gap-1.5">
          <FiGlobe />
          {opportunity.country}
        </span>
      </div>
    </Link>
  );
}

export default async function OpportunityPage({
  params,
}: OpportunityPageProps) {
  const { slug } = await params;

  const opportunity = getOpportunityBySlug(slug);

  if (!opportunity) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900">
              Opportunity not found
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              The opportunity you are looking for does not exist or may have
              moved.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <FiArrowLeft />
              Return to Global Jobs Live
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const relatedOpportunities = getOpportunitiesByCategory(
    opportunity.categorySlug,
  )
    .filter(
      (item) =>
        item.slug !== opportunity.slug &&
        item.countrySlug === opportunity.countrySlug,
    )
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opportunity.title,
    description: opportunity.description,
    url: `https://globaljobslive.com/opportunities/${opportunity.slug}`,
    mainEntity: {
      "@type": "Thing",
      name: opportunity.title,
      description: opportunity.description,
    },
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* Breadcrumb */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition hover:text-blue-600">
              Home
            </Link>

            <span>/</span>

            <Link
              href={`/category/${opportunity.categorySlug}`}
              className="transition hover:text-blue-600"
            >
              {opportunity.category}
            </Link>

            <span>/</span>

            <span className="max-w-65 truncate text-slate-700">
              {opportunity.title}
            </span>
          </nav>
        </div>
      </section>
      <Banner320x50 />

      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                {opportunity.workMode === "REMOTE" ? (
                  <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                    Remote
                  </span>
                ) : (
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                    {formatEnum(opportunity.workMode)}
                  </span>
                )}

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                  {formatEnum(opportunity.jobType)}
                </span>

                {opportunity.isVerified && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                    <FiCheckCircle />
                    Verified
                  </span>
                )}
              </div>

              <h1 className="mt-5 max-w-4xl text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {opportunity.title}
              </h1>

              <p className="mt-4 text-lg font-semibold text-slate-700">
                {opportunity.company.name}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <FiMapPin className="text-slate-400" />
                  {opportunity.location}
                </span>

                <span className="inline-flex items-center gap-2">
                  <FiGlobe className="text-slate-400" />
                  {opportunity.country}
                </span>

                <span className="inline-flex items-center gap-2">
                  <FiClock className="text-slate-400" />
                  {getPublishedText(opportunity.publishedDaysAgo)}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <span className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                  {formatEnum(opportunity.experienceLevel)}
                </span>

                <span className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                  {formatSalary(opportunity)}
                </span>
              </div>
            </div>

            {/* Quick information */}
            <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-base font-bold text-slate-900">
                Opportunity details
              </h2>

              <div className="mt-6 space-y-5">
                <DetailItem
                  icon={<FiBriefcase />}
                  label="Job type"
                  value={formatEnum(opportunity.jobType)}
                />

                <DetailItem
                  icon={<FiMonitor />}
                  label="Work arrangement"
                  value={
                    opportunity.workMode === "REMOTE"
                      ? "Remote"
                      : formatEnum(opportunity.workMode)
                  }
                />

                <DetailItem
                  icon={<FiMapPin />}
                  label="Location"
                  value={opportunity.location}
                />

                <DetailItem
                  icon={<FiGlobe />}
                  label="Country"
                  value={opportunity.country}
                />

                <DetailItem
                  icon={<FiBriefcase />}
                  label="Experience"
                  value={formatEnum(opportunity.experienceLevel)}
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-8">
            {/* Description */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-slate-950">
                About this opportunity
              </h2>

              <div className="mt-5 whitespace-pre-line text-[15px] leading-8 text-slate-600">
                {opportunity.description}
              </div>
            </section>

            {/* Skills */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-slate-950">
                Skills and qualifications
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {opportunity.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Company */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                    Company
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-slate-950">
                    {opportunity.company.name}
                  </h2>
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                  {opportunity.company.industry}
                </span>
              </div>

              <p className="mt-5 text-[15px] leading-8 text-slate-600">
                {opportunity.company.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
                <span className="rounded-xl border border-slate-200 px-3 py-2">
                  {opportunity.company.country}
                </span>

                <span className="rounded-xl border border-slate-200 px-3 py-2">
                  {opportunity.company.industry}
                </span>
              </div>
            </section>

            {/* Application */}
            <section
              id="apply"
              className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                  Apply
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-950">
                  Submit your application
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Submit your CV and application for this opportunity through
                  Global Jobs Live.
                </p>
              </div>

              <JobApplication />
            </section>
          </div>
          <NativeBannerAd />

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Compensation
              </p>

              <p className="mt-2 text-2xl font-extrabold text-slate-950">
                {formatSalary(opportunity)}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Compensation information may vary depending on location,
                experience and the final terms of the opportunity.
              </p>

              <a
                href="#apply"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Apply for this opportunity
                <FiArrowRight />
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="font-bold text-slate-900">
                Opportunity information
              </h2>

              <div className="mt-5 space-y-4 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-slate-500">Category</span>

                  <Link
                    href={`/category/${opportunity.categorySlug}`}
                    className="text-right font-medium text-blue-600 hover:text-blue-700"
                  >
                    {opportunity.category}
                  </Link>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-slate-500">Country</span>

                  <span className="text-right font-medium text-slate-700">
                    {opportunity.country}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-slate-500">Experience</span>

                  <span className="text-right font-medium text-slate-700">
                    {formatEnum(opportunity.experienceLevel)}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-slate-500">Work mode</span>

                  <span className="text-right font-medium text-slate-700">
                    {formatEnum(opportunity.workMode)}
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related opportunities */}
      {relatedOpportunities.length > 0 && (
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                Continue exploring
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Related opportunities in {opportunity.country}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Explore other opportunities in the same category and country.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {relatedOpportunities.map((item) => (
                <OpportunityCard key={item.id} opportunity={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
