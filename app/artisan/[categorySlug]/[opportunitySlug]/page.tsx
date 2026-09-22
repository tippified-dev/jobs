import { artisanCategories, getArtisanOpportunity } from "@/lib/artisan-data";

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiMapPin,
} from "react-icons/fi";

type Props = {
  params: Promise<{
    categorySlug: string;
    opportunitySlug: string;
  }>;
};

export function generateStaticParams() {
  return artisanCategories.flatMap((category) =>
    category.opportunities.map((opportunity) => ({
      categorySlug: category.slug,
      opportunitySlug: opportunity.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { categorySlug, opportunitySlug } = await params;

  const category = artisanCategories.find((item) => item.slug === categorySlug);

  const opportunity = getArtisanOpportunity(categorySlug, opportunitySlug);

  if (!category || !opportunity) {
    return {
      title: "Artisan Opportunity | Global Jobs Live",
    };
  }

  const title = `${opportunity.title} in ${opportunity.location} | Global Jobs Live`;

  const description = `${opportunity.title} opportunity at ${opportunity.companyName} in ${opportunity.location}, Nigeria. View salary, job type and application information on Global Jobs Live.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://globaljobslive.com/artisan/${category.slug}/${opportunity.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://globaljobslive.com/artisan/${category.slug}/${opportunity.slug}`,
      siteName: "Global Jobs Live",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ArtisanOpportunityPage({ params }: Props) {
  const { categorySlug, opportunitySlug } = await params;

  const category = artisanCategories.find((item) => item.slug === categorySlug);

  const opportunity = getArtisanOpportunity(categorySlug, opportunitySlug);

  if (!category || !opportunity) {
    notFound();
  }

  const opportunityUrl =
    `https://globaljobslive.com/artisan/` +
    `${category.slug}/${opportunity.slug}`;

  const relatedOpportunities = category.opportunities
    .filter((item) => item.id !== opportunity.id)
    .slice(0, 6);

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: opportunity.title,
    description: opportunity.description,
    datePosted: new Date().toISOString(),
    employmentType: opportunity.jobType,
    hiringOrganization: {
      "@type": "Organization",
      name: opportunity.companyName,
      sameAs: opportunity.applicationUrl,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: opportunity.location,
        addressCountry: "NG",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      value: {
        "@type": "QuantitativeValue",
        value: opportunity.salary,
        unitText: "MONTH",
      },
    },
    url: opportunityUrl,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://globaljobslive.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Artisan Opportunities",
        item: "https://globaljobslive.com/artisan",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: `https://globaljobslive.com/artisan/${category.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: opportunity.title,
        item: opportunityUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href={`/artisan/${category.slug}`}
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-blue-600"
        >
          <FiArrowLeft />
          Back to {category.name} opportunities
        </Link>

        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-blue-600">
              <FiBriefcase />
              {category.name}
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              {opportunity.title}
            </h1>

            <p className="mt-3 text-lg font-medium text-gray-700">
              {opportunity.companyName}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
                <FiMapPin />
                {opportunity.location}, Nigeria
              </span>

              <span className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
                {opportunity.jobType.replace(/_/g, " ")}
              </span>

              <span className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
                {opportunity.salary}
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <section>
              <h2 className="text-xl font-bold text-gray-900">
                Opportunity description
              </h2>

              <p className="mt-4 text-base leading-8 text-gray-600">
                {opportunity.description}
              </p>
            </section>

            <section className="mt-8 rounded-2xl bg-gray-50 p-5 sm:p-6">
              <h2 className="text-lg font-bold text-gray-900">
                Opportunity details
              </h2>

              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-gray-500">Opportunity</dt>
                  <dd className="mt-1 font-medium text-gray-900">
                    {opportunity.title}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-gray-500">Company</dt>
                  <dd className="mt-1 font-medium text-gray-900">
                    {opportunity.companyName}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-gray-500">Location</dt>
                  <dd className="mt-1 font-medium text-gray-900">
                    {opportunity.location}, Nigeria
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-gray-500">Job type</dt>
                  <dd className="mt-1 font-medium text-gray-900">
                    {opportunity.jobType.replace(/_/g, " ")}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-gray-500">Salary</dt>
                  <dd className="mt-1 font-medium text-gray-900">
                    {opportunity.salary}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-gray-500">Country</dt>
                  <dd className="mt-1 font-medium text-gray-900">Nigeria</dd>
                </div>
              </dl>
            </section>

            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <FiCheckCircle className="mt-0.5 shrink-0 text-xl text-blue-600" />

                <div>
                  <h2 className="font-semibold text-gray-900">
                    Application information
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Review the opportunity details before proceeding with an
                    application.
                  </p>
                </div>
              </div>

              <a
                href={opportunity.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Apply for this opportunity
                <FiArrowRight />
              </a>
            </div>
          </div>
        </article>

        <section className="mt-10">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              More {category.name} opportunities
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Explore more opportunities in this category.
            </p>
          </div>

          <div className="grid gap-4">
            {relatedOpportunities.map((related) => (
              <Link
                key={related.id}
                href={`/artisan/${category.slug}/${related.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                      {related.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-gray-600">
                      {related.companyName}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {related.location}, Nigeria · {related.salary}
                    </p>
                  </div>

                  <FiArrowRight className="shrink-0 text-blue-600 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
