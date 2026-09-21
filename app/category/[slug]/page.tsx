import Banner320x50 from "@/components/ads/Banner320x50";
import NativeBannerAd from "@/components/ads/NativeBannerAd";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FiArrowRight,
  FiBriefcase,
  FiClock,
  FiGlobe,
  FiMapPin,
  FiMonitor,
  FiUsers,
} from "react-icons/fi";

import {
  getOpportunitiesByCategory,
  getOpportunityCategory,
  opportunityCategories,
  type CategoryOpportunity,
} from "@/lib/category-opportunity-data";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return opportunityCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;

  const category = getOpportunityCategory(slug);

  if (!category) {
    return {
      title: "Opportunity Category | Global Jobs Live",
      description:
        "Explore global job and work opportunities on Global Jobs Live.",
    };
  }

  return {
    title: `${category.name} Opportunities | Global Jobs Live`,
    description: `Explore ${category.name.toLowerCase()} opportunities from companies and organisations across the USA, UK, Canada, Australia, Germany, France, Nigeria, South Africa, China, India, Japan, Indonesia, New Zealand and Singapore.`,
    alternates: {
      canonical: `/category/${category.slug}`,
    },
    openGraph: {
      title: `${category.name} Opportunities | Global Jobs Live`,
      description: category.description,
      type: "website",
    },
  };
}

function formatSalary(opportunity: CategoryOpportunity): string {
  const min = opportunity.salaryMin.toLocaleString();
  const max = opportunity.salaryMax.toLocaleString();

  if (opportunity.salaryPeriod === "HOUR") {
    return `${opportunity.salaryCurrency} ${min}–${opportunity.salaryCurrency} ${max}/hr`;
  }

  if (opportunity.salaryPeriod === "MONTH") {
    return `${opportunity.salaryCurrency} ${min}–${opportunity.salaryCurrency} ${max}/mo`;
  }

  return `${opportunity.salaryCurrency} ${min}–${opportunity.salaryCurrency} ${max}/yr`;
}

function getPublishedText(daysAgo: number): string {
  if (daysAgo === 1) {
    return "1 day ago";
  }

  return `${daysAgo} days ago`;
}

function formatEnum(value: string): string {
  return value
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function OpportunityCard({
  opportunity,
}: {
  opportunity: CategoryOpportunity;
}) {
  return (
    <>
      <Banner320x50 />

      <Link
        href={`/opportunities/${opportunity.slug}`}
        className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                {opportunity.workMode === "REMOTE" && (
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                    Remote
                  </span>
                )}

                {opportunity.workMode !== "REMOTE" && (
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                    {opportunity.workMode === "HYBRID" ? "Hybrid" : "On-site"}
                  </span>
                )}

                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                  {formatEnum(opportunity.jobType)}
                </span>
              </div>

              <h2 className="text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600">
                {opportunity.title}
              </h2>

              <p className="mt-1 text-sm font-medium text-slate-600">
                {opportunity.company.name}
              </p>
            </div>

            <div className="hidden shrink-0 rounded-xl bg-slate-50 p-3 text-slate-400 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600 sm:block">
              <FiArrowRight size={18} />
            </div>
          </div>
          <NativeBannerAd />

          <div className="grid grid-cols-1 gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <FiMapPin className="shrink-0 text-slate-400" />
              <span>{opportunity.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <FiGlobe className="shrink-0 text-slate-400" />
              <span>{opportunity.country}</span>
            </div>

            <div className="flex items-center gap-2">
              <FiBriefcase className="shrink-0 text-slate-400" />
              <span>{formatEnum(opportunity.experienceLevel)}</span>
            </div>

            <div className="flex items-center gap-2">
              <FiClock className="shrink-0 text-slate-400" />
              <span>{getPublishedText(opportunity.publishedDaysAgo)}</span>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {formatSalary(opportunity)}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {opportunity.company.industry}
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                View opportunity
                <FiArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const category = getOpportunityCategory(slug);

  if (!category) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900">
              Opportunity category not found
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              The opportunity category you are looking for does not exist or may
              have moved.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Return to Global Jobs Live
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const opportunities = getOpportunitiesByCategory(slug);

  const countryCount = new Set(
    opportunities.map(
      (opportunity: CategoryOpportunity) => opportunity.countrySlug,
    ),
  ).size;

  const remoteCount = opportunities.filter(
    (opportunity: CategoryOpportunity) => opportunity.workMode === "REMOTE",
  ).length;

  const countries = Array.from(
    new Map<
      string,
      {
        slug: string;
        name: string;
        count: number;
      }
    >(
      opportunities.map((opportunity: CategoryOpportunity) => [
        opportunity.countrySlug,
        {
          slug: opportunity.countrySlug,
          name: opportunity.country,
          count: 0,
        },
      ]),
    ).values(),
  ).map((country) => ({
    ...country,
    count: opportunities.filter(
      (opportunity: CategoryOpportunity) =>
        opportunity.countrySlug === country.slug,
    ).length,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} Opportunities`,
    description: category.description,
    url: `https://globaljobslive.com/category/${category.slug}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: opportunities.length,
      itemListElement: opportunities.map(
        (opportunity: CategoryOpportunity, index: number) => ({
          "@type": "ListItem",
          position: index + 1,
          name: opportunity.title,
          url: `https://globaljobslive.com/opportunities/${opportunity.slug}`,
        }),
      ),
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

      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="transition hover:text-blue-600">
                Home
              </Link>

              <span>/</span>

              <span>Opportunities</span>

              <span>/</span>

              <span className="text-slate-700">{category.name}</span>
            </div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">
              <FiBriefcase size={15} />
              Global opportunity category
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              {category.name} Opportunities
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              {category.description}
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">
              Explore opportunities across multiple countries, locations and
              work arrangements. Global Jobs Live brings together opportunities
              across technology, business services, professional roles, skilled
              work and other career categories.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-blue-600">
                <FiBriefcase size={18} />

                <span className="text-xs font-semibold uppercase tracking-wide">
                  Opportunities
                </span>
              </div>

              <p className="mt-3 text-2xl font-bold text-slate-950">
                {opportunities.length.toLocaleString()}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-blue-600">
                <FiGlobe size={18} />

                <span className="text-xs font-semibold uppercase tracking-wide">
                  Countries
                </span>
              </div>

              <p className="mt-3 text-2xl font-bold text-slate-950">
                {countryCount}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-blue-600">
                <FiMonitor size={18} />

                <span className="text-xs font-semibold uppercase tracking-wide">
                  Remote
                </span>
              </div>

              <p className="mt-3 text-2xl font-bold text-slate-950">
                {remoteCount.toLocaleString()}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-blue-600">
                <FiUsers size={18} />

                <span className="text-xs font-semibold uppercase tracking-wide">
                  Work types
                </span>
              </div>

              <p className="mt-3 text-2xl font-bold text-slate-950">Global</p>
            </div>
          </div>
        </div>
      </section>

      {/* Country links */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                {category.name} opportunities by country
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Browse opportunities available across individual global markets.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {countries.map((country) => (
                <Link
                  key={country.slug}
                  href={`/category/${category.slug}/${country.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {country.name}

                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                    {country.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              {category.name} opportunities
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Browse available listings across our global opportunity directory.
            </p>
          </div>

          <span className="text-sm font-medium text-slate-500">
            {opportunities.length.toLocaleString()} opportunities
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {opportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      </section>

      {/* SEO content */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Find {category.name.toLowerCase()} opportunities worldwide
          </h2>

          <div className="mt-5 space-y-5 text-[15px] leading-7 text-slate-600">
            <p>
              Global Jobs Live provides a dedicated directory for people
              searching for {category.name.toLowerCase()} opportunities across
              international markets. Whether you are looking for remote work,
              hybrid positions or opportunities connected to a particular
              location, this category brings related listings together in one
              place.
            </p>

            <p>
              The directory covers opportunities across the United States,
              United Kingdom, Canada, Australia, Germany, France, Nigeria, South
              Africa, China, India, Japan, Indonesia, New Zealand and Singapore.
              Availability, work arrangements, compensation and eligibility can
              vary between individual opportunities.
            </p>

            <p>
              Use the individual opportunity pages to review the available role
              information, including the opportunity description, company
              information, location, work arrangement, experience level, salary
              information and relevant skills.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
