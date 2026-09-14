import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import CountryJobsClient from "./CountryJobsClient";

type CountryPageProps = {
  params: Promise<{
    country: string;
  }>;
};

function formatCountryName(country: string) {
  return country
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({
  params,
}: CountryPageProps): Promise<Metadata> {
  const { country } = await params;
  const countryName = formatCountryName(country);

  return {
    title: `Jobs in ${countryName}`,
    description: `Find remote jobs, online jobs, freelance jobs, side jobs and career opportunities in ${countryName} on Global Jobs Live.`,
    alternates: {
      canonical: `/country/${country}`,
    },
    openGraph: {
      title: `Jobs in ${countryName} | Global Jobs Live`,
      description: `Explore job opportunities and career listings in ${countryName}.`,
      url: `/country/${country}`,
      type: "website",
    },
  };
}

export default async function CountryJobsPage({ params }: CountryPageProps) {
  const { country } = await params;

  const countryName = formatCountryName(country);

  const jobs = await prisma.job.findMany({
    where: {
      isActive: true,

      // TEMPORARY:
      // This allows us to see the seeded test jobs.
      // Change this back to true when real verified jobs are ready.
      isVerified: false,

      country: {
        equals: countryName,
        mode: "insensitive",
      },
    },

    include: {
      company: true,
      category: true,
    },

    orderBy: {
      publishedAt: "desc",
    },
  });

  return (
    <CountryJobsClient
      country={country}
      jobs={jobs.map((job) => ({
        id: job.id,
        slug: job.slug,
        company: job.company.name,
        location: job.location || job.country,
        position: job.title,
        status: "active",
      }))}
    />
  );
}
