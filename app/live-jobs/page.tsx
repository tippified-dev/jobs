import type { Metadata } from "next";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiGlobe,
  FiTrendingUp,
} from "react-icons/fi";

import LiveJobsDashboard from "@/components/LiveJobsDashboard";
import { getFreshLiveJobs, getLiveJobCount } from "@/lib/live-job-data";

export const metadata: Metadata = {
  title: "Live Jobs | Global Jobs Live",
  description:
    "Explore fresh jobs from companies and employers across the world. Find remote, hybrid and on-site opportunities across multiple countries and industries.",
  alternates: {
    canonical: "https://globaljobslive.com/live-jobs",
  },
  openGraph: {
    title: "Live Jobs | Global Jobs Live",
    description:
      "Explore fresh jobs from companies and employers around the world.",
    url: "https://globaljobslive.com/live-jobs",
    type: "website",
  },
};

export default function LiveJobsPage() {
  const jobs = getFreshLiveJobs();
  const jobCount = getLiveJobCount();

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.09),transparent_38%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              Live job board
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Find your next job.
              <span className="block text-blue-600">Wherever you are.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Explore recently added jobs across countries, industries and
              experience levels. Search by role, skill, company or location and
              find positions that match what you can do.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <FiBriefcase className="text-blue-600" size={18} />
                <div>
                  <p className="text-lg font-bold text-slate-950">
                    {jobCount.toLocaleString()}
                  </p>
                  <p className="text-[11px] text-slate-500">jobs available</p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <FiGlobe className="text-blue-600" size={18} />
                <div>
                  <p className="text-lg font-bold text-slate-950">14</p>
                  <p className="text-[11px] text-slate-500">
                    countries represented
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <FiTrendingUp className="text-blue-600" size={18} />
                <div>
                  <p className="text-lg font-bold text-slate-950">Fresh</p>
                  <p className="text-[11px] text-slate-500">recently added</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <LiveJobsDashboard jobs={jobs} />
      </section>

      {/* Trust section */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <FiCheckCircle className="text-blue-600" size={22} />

              <h2 className="mt-4 font-bold text-slate-950">
                Built for job seekers
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Search by the things that matter: your skills, preferred
                location, job type and work arrangement.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <FiGlobe className="text-blue-600" size={22} />

              <h2 className="mt-4 font-bold text-slate-950">
                Global by design
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Discover opportunities across international markets instead of
                being limited to one region.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <FiArrowRight className="text-blue-600" size={22} />

              <h2 className="mt-4 font-bold text-slate-950">
                Go straight to the job
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Open a job to see the full position details, requirements,
                salary information and application options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
