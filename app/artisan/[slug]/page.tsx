import Banner320x50 from "@/components/ads/Banner320x50";
import NativeBannerAd from "@/components/ads/NativeBannerAd";
import { artisanCategories, getArtisanCategory } from "@/lib/artisan-data";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBriefcase,
  FiMapPin,
} from "react-icons/fi";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return artisanCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const category = getArtisanCategory(slug);

  if (!category) {
    return {
      title: "Artisan Jobs & Opportunities | Global Jobs Live",
      description:
        "Find artisan jobs and local opportunities on Global Jobs Live.",
    };
  }

  const title = `${category.name} Jobs & Opportunities in Nigeria | Global Jobs Live`;

  const description = category.description;

  return {
    title,
    description,
    alternates: {
      canonical: `https://globaljobslive.com/artisan/${category.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://globaljobslive.com/artisan/${category.slug}`,
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

export default async function ArtisanCategoryPage({ params }: Props) {
  const { slug } = await params;

  const category = getArtisanCategory(slug);

  if (!category) {
    notFound();
  }

  const opportunities = category.opportunities;

  const pageTitle = `${category.name} Jobs & Opportunities in Nigeria`;

  const canonicalUrl = `https://globaljobslive.com/artisan/${category.slug}`;

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
        item: canonicalUrl,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    description: category.description,
    url: canonicalUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Global Jobs Live",
      url: "https://globaljobslive.com",
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: opportunities.length,
      itemListElement: opportunities.map((opportunity, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: opportunity.title,
        url: `https://globaljobslive.com/artisan/${category.slug}/${opportunity.slug}`,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-blue-600"
        >
          <FiArrowLeft />
          Back to Global Jobs Live
        </Link>

        <header className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-4xl">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-blue-600">
                <FiBriefcase />
                Artisan Jobs & Opportunities
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                {pageTitle}
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
                {category.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {["Lagos", "Abuja", "Port Harcourt"].map((location) => (
                  <span
                    key={location}
                    className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
                  >
                    <FiMapPin />
                    {location}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 rounded-2xl bg-blue-50 px-6 py-4 text-center">
              <div className="text-3xl font-bold text-blue-600">
                {opportunities.length}
              </div>

              <div className="mt-1 text-xs font-medium text-gray-600">
                Available Opportunities
              </div>
            </div>
          </div>
        </header>
        <Banner320x50 />

        <section aria-labelledby="available-opportunities">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2
                id="available-opportunities"
                className="text-xl font-bold text-gray-900 sm:text-2xl"
              >
                {category.name} Opportunities
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Explore available opportunities in Lagos, Abuja and Port
                Harcourt.
              </p>
            </div>

            <span className="text-sm font-medium text-gray-500">
              {opportunities.length} opportunities
            </span>
          </div>

          <div className="grid gap-4">
            {opportunities.map((opportunity) => {
              const opportunityUrl = `/artisan/${category.slug}/${opportunity.slug}`;

              return (
                <Link
                  key={opportunity.id}
                  href={opportunityUrl}
                  className="group block"
                >
                  <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:p-6">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                            {opportunity.title}
                          </h3>

                          <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                            {opportunity.jobType.replace(/_/g, " ")}
                          </span>
                        </div>

                        <p className="mt-2 font-medium text-gray-700">
                          {opportunity.companyName}
                        </p>

                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                          {opportunity.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
                          <span className="inline-flex items-center gap-1.5">
                            <FiMapPin />
                            {opportunity.location}, Nigeria
                          </span>

                          <span className="font-medium text-gray-700">
                            {opportunity.salary}
                          </span>
                        </div>
                      </div>
                      <NativeBannerAd />

                      <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-600">
                        View opportunity
                        <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
