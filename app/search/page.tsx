import { getActiveJobCount, searchJobs, type Job } from "@/lib/job-data";
import Link from "next/link";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
    location?: string;
  }>;
};

function formatSalary(job: Job) {
  if (job.salaryMin === null || job.salaryMax === null || !job.salaryCurrency) {
    return null;
  }

  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  });

  const min = formatter.format(job.salaryMin);
  const max = formatter.format(job.salaryMax);

  return `${job.salaryCurrency} ${min} - ${max}`;
}

function getJobTypeLabel(type: Job["jobType"]) {
  return type
    .replace("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getWorkModeLabel(mode: Job["workMode"]) {
  if (mode === "REMOTE") return "Remote";
  if (mode === "HYBRID") return "Hybrid";
  return "On-site";
}

export async function generateMetadata({ searchParams }: SearchPageProps) {
  const params = await searchParams;

  const query = params.q?.trim();
  const location = params.location?.trim();

  const titleParts = [];

  if (query) {
    titleParts.push(query);
  }

  if (location) {
    titleParts.push(`in ${location}`);
  }

  const title =
    titleParts.length > 0
      ? `${titleParts.join(" ")} Jobs`
      : "Search Jobs Worldwide";

  return {
    title: `${title} | Global Jobs Live`,
    description:
      "Search remote jobs, online jobs, work-from-home opportunities, skilled jobs, data entry jobs and career opportunities worldwide.",
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;

  const query = params.q?.trim() || "";
  const location = params.location?.trim() || "";

  const results = searchJobs(query, location);
  const activeJobCount = getActiveJobCount();

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Search Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Global Jobs Live
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {query ? `Jobs matching "${query}"` : "Search jobs worldwide"}
            </h1>

            {location && (
              <p className="mt-3 text-slate-600">
                Showing opportunities related to{" "}
                <span className="font-semibold text-slate-900">{location}</span>
              </p>
            )}

            {!query && !location && (
              <p className="mt-3 text-slate-600">
                Search for jobs by title, skill, keyword, category, company,
                country or location.
              </p>
            )}
          </div>

          {/* Search Form */}
          <form
            action="/search"
            method="GET"
            className="mt-8 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
          >
            <div className="flex flex-col gap-3 md:flex-row">
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Job title, keyword or skill"
                aria-label="Job title, keyword or skill"
                className="h-12 flex-1 rounded-xl bg-slate-50 px-4 text-base text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100"
              />

              <input
                type="text"
                name="location"
                defaultValue={location}
                placeholder="Location or Remote"
                aria-label="Location or Remote"
                className="h-12 flex-1 rounded-xl bg-slate-50 px-4 text-base text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100"
              />

              <button
                type="submit"
                className="h-12 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Search Jobs
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {results.length} {results.length === 1 ? "job" : "jobs"} found
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Search results from Global Jobs Live
            </p>
          </div>

          <p className="text-sm text-slate-500">
            {activeJobCount.toLocaleString()} opportunities available
          </p>
        </div>

        {results.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">
            <h2 className="text-xl font-bold text-slate-900">No jobs found</h2>

            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              We could not find jobs matching your search. Try a broader job
              title, skill, country or location.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/search"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                View all jobs
              </Link>

              <Link
                href="/"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Back to home
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-5">
            {results.map((job) => {
              const salary = formatSalary(job);

              return (
                <article
                  key={job.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        {job.isVerified && (
                          <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                            Verified
                          </span>
                        )}

                        {job.isFeatured && (
                          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                            Featured
                          </span>
                        )}

                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                          {getWorkModeLabel(job.workMode)}
                        </span>
                      </div>

                      <h3 className="mt-3 text-xl font-bold text-slate-900">
                        <Link
                          href={`/jobs/${job.slug}`}
                          className="transition hover:text-blue-600"
                        >
                          {job.title}
                        </Link>
                      </h3>

                      <p className="mt-2 font-medium text-slate-700">
                        {job.company.name}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                        <span>{job.location}</span>
                        <span>{job.country}</span>
                        <span>{getJobTypeLabel(job.jobType)}</span>
                        <span>{job.experienceLevel.replace("_", " ")}</span>
                      </div>

                      {salary && (
                        <p className="mt-4 text-sm font-semibold text-slate-900">
                          {salary}
                          {job.salaryPeriod && (
                            <span className="ml-1 font-normal text-slate-500">
                              / {job.salaryPeriod.toLowerCase()}
                            </span>
                          )}
                        </p>
                      )}

                      <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
                        {job.description}
                      </p>

                      {job.skills.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {job.skills.slice(0, 6).map((skill) => (
                            <span
                              key={skill}
                              className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="shrink-0">
                      <Link
                        href={`/jobs/${job.slug}`}
                        className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 lg:w-auto"
                      >
                        View Job
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
