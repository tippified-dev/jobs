"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
type Job = {
  company: string;
  location: string;
  position: string;
  status: "active";
};
type JobsResponse = {
  country: string;
  total: number;
  jobs: Job[];
};
export default function CountryJobsPage() {
  const params = useParams();
  const country = params.country as string;
  const [data, setData] = useState<JobsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!country) return;
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(`/api/jobs/${country}`);
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const result: JobsResponse = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
        setError("Unable to load jobs right now.");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [country]);
  const countryName = country
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Jobs4all
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Jobs in {countryName}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Explore available job opportunities from companies hiring in{" "}
            {countryName}.
          </p>
        </div>
        {/* Loading */}
        {loading && (
          <div className="mt-10 text-center">
            <p className="text-sm text-slate-500">Loading available jobs...</p>
          </div>
        )}
        {/* Error */}
        {!loading && error && (
          <div className="mt-10 rounded-xl border border-red-200 bg-red-50 p-5 text-center">
            <p className="text-sm font-medium text-red-600">{error}</p>
          </div>
        )}
        {/* Jobs */}
        {!loading && !error && data && (
          <div className="mt-10">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">
                Available Jobs
              </h2>
              <span className="text-sm text-slate-500">
                {data.total} jobs found
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.jobs.map((job, index) => (
                <div
                  key={`${job.company}-${job.position}-${index}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-slate-900">
                        {job.position}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-blue-600">
                        {job.company}
                      </p>
                    </div>
                    <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-600">
                      {job.status}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-slate-500">{job.location}</p>
                  <button
                    type="button"
                    className="mt-5 w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                  >
                    View Job
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
