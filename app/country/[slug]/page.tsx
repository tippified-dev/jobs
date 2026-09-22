import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiMapPin,
} from "react-icons/fi";

import {
  getCountryBySlug,
  getJobsByCountry,
  jobCountries,
} from "@/lib/job-data";

type CountryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return jobCountries.map((country) => ({
    slug: country.slug,
  }));
}

export async function generateMetadata({ params }: CountryPageProps) {
  const { slug } = await params;

  const country = getCountryBySlug(slug);

  if (!country) {
    return {
      title: "Country Jobs | Global Jobs Live",
    };
  }

  return {
    title: `${country.name} Jobs | Remote & Online Jobs | Global Jobs Live`,
    description: `Explore job opportunities in ${country.name}, including remote, online, skilled and entry-level jobs on Global Jobs Live.`,
    alternates: {
      canonical: `https://globaljobslive.com/country/${country.slug}`,
    },
    openGraph: {
      title: `${country.name} Jobs | Global Jobs Live`,
      description: `Explore job opportunities in ${country.name}, including remote and online jobs.`,
      url: `https://globaljobslive.com/country/${country.slug}`,
      type: "website",
    },
  };
}

function formatJobType(jobType: string) {
  return jobType
    .replaceAll("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatExperience(level: string) {
  return level
    .replaceAll("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatSalary(
  min: number | null,
  max: number | null,
  currency: string | null,
) {
  if (min === null && max === null) {
    return "Salary not specified";
  }

  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  });

  if (min !== null && max !== null) {
    return `${currency ?? ""} ${formatter.format(min)} – ${formatter.format(max)}`;
  }

  if (min !== null) {
    return `${currency ?? ""} ${formatter.format(min)}+`;
  }

  return `Up to ${currency ?? ""} ${formatter.format(max!)}`;
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { slug } = await params;

  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  const countryJobs = getJobsByCountry(slug).filter((job) => job.isActive);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-blue-600">
                <FiMapPin size={16} />
                <span>{country.name}</span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Jobs in {country.name}
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Explore available job opportunities in {country.name}, including
                remote, online, skilled and entry-level roles.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <FiBriefcase size={18} className="text-blue-600" />

              <div>
                <p className="text-lg font-bold text-slate-900">
                  {countryJobs.length.toLocaleString()}
                </p>
                <p className="text-xs text-slate-500">Active opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {countryJobs.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <FiBriefcase size={30} className="mx-auto text-slate-400" />

            <h2 className="mt-4 text-lg font-bold text-slate-900">
              No active jobs found
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Check back soon for new opportunities in {country.name}.
            </p>

            <Link
              href="/location"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Explore other countries
              <FiArrowRight size={15} />
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {countryJobs.map((job) => (
              <Link
                key={job.id}
                href={`/jobs/${job.slug}`}
                className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:p-6"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {job.isFeatured && (
                        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-700">
                          Featured
                        </span>
                      )}

                      {job.isVerified && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                          <FiCheckCircle size={11} />
                          Verified
                        </span>
                      )}

                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-700">
                        {job.workMode}
                      </span>
                    </div>

                    <h2 className="mt-3 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600 sm:text-xl">
                      {job.title}
                    </h2>

                    <p className="mt-1 text-sm font-medium text-slate-600">
                      {job.company.name}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <FiMapPin size={13} />
                        {job.location}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <FiBriefcase size={13} />
                        {formatJobType(job.jobType)}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <FiClock size={13} />
                        {formatExperience(job.experienceLevel)}
                      </span>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
                    <p className="text-sm font-bold text-slate-900">
                      {formatSalary(
                        job.salaryMin,
                        job.salaryMax,
                        job.salaryCurrency,
                      )}
                    </p>

                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:gap-3">
                      View job
                      <FiArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
