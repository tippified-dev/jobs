"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiGlobe,
  FiMapPin,
  FiSearch,
  FiSliders,
  FiWifi,
  FiX,
} from "react-icons/fi";

import type { LiveJob } from "@/lib/live-job-data";

type Props = {
  jobs: LiveJob[];
};

function getRelativeTime(date: string) {
  const published = new Date(date).getTime();
  const now = Date.now();

  const diff = Math.max(0, now - published);
  const minutes = Math.floor(diff / (1000 * 60));

  if (minutes < 1) return "Just now";

  if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? "min" : "mins"} ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }

  const days = Math.floor(hours / 24);

  return `${days} ${days === 1 ? "day" : "days"} ago`;
}

function formatSalary(job: LiveJob) {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  });

  return `${job.salaryCurrency} ${formatter.format(
    job.salaryMin,
  )} – ${formatter.format(job.salaryMax)}`;
}

function formatEmploymentType(employmentType: LiveJob["employmentType"]) {
  return employmentType
    .replaceAll("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatWorkMode(workMode: LiveJob["workMode"]) {
  return workMode
    .replaceAll("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatCategory(category: string) {
  return category
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default function LiveJobsDashboard({ jobs }: Props) {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("ALL");
  const [category, setCategory] = useState("ALL");
  const [workMode, setWorkMode] = useState("ALL");
  const [showFilters, setShowFilters] = useState(false);

  const countries = useMemo(() => {
    return Array.from(
      new Map(
        jobs.map((job) => [
          job.countrySlug,
          {
            slug: job.countrySlug,
            name: job.country,
          },
        ]),
      ).values(),
    ).sort((a, b) => a.name.localeCompare(b.name));
  }, [jobs]);

  const categories = useMemo(() => {
    return Array.from(new Set(jobs.map((job) => job.category))).sort();
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return jobs.filter((job) => {
      const searchableText = [
        job.title,
        job.company.name,
        job.company.industry,
        job.country,
        job.location,
        job.category,
        job.description,
        ...job.skills,
        ...job.requirements,
        ...job.qualifications,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = !query || searchableText.includes(query);

      const matchesCountry = country === "ALL" || job.countrySlug === country;

      const matchesCategory = category === "ALL" || job.category === category;

      const matchesWorkMode = workMode === "ALL" || job.workMode === workMode;

      return (
        matchesSearch && matchesCountry && matchesCategory && matchesWorkMode
      );
    });
  }, [jobs, search, country, category, workMode]);

  const clearFilters = () => {
    setSearch("");
    setCountry("ALL");
    setCategory("ALL");
    setWorkMode("ALL");
  };

  const hasFilters =
    search.trim() !== "" ||
    country !== "ALL" ||
    category !== "ALL" ||
    workMode !== "ALL";

  return (
    <div className="space-y-6">
      {/* Search and filters */}
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="relative flex-1">
            <FiSearch
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search jobs, skills, companies or keywords..."
              aria-label="Search live jobs"
              className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
            />
          </div>

          <button
            type="button"
            onClick={() => setShowFilters((current) => !current)}
            className="flex h-13 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600 lg:hidden"
          >
            <FiSliders size={17} />
            Filters
          </button>
        </div>

        <div
          className={`mt-4 grid gap-3 ${
            showFilters ? "grid" : "hidden lg:grid"
          } md:grid-cols-3`}
        >
          {/* Country */}
          <select
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
            aria-label="Filter by country"
          >
            <option value="ALL">All countries</option>

            {countries.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>

          {/* Category */}
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
            aria-label="Filter by category"
          >
            <option value="ALL">All categories</option>

            {categories.map((item) => (
              <option key={item} value={item}>
                {formatCategory(item)}
              </option>
            ))}
          </select>

          {/* Work mode */}
          <select
            value={workMode}
            onChange={(event) => setWorkMode(event.target.value)}
            className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
            aria-label="Filter by work mode"
          >
            <option value="ALL">All work modes</option>

            <option value="REMOTE">Remote</option>

            <option value="HYBRID">Hybrid</option>

            <option value="ONSITE">On-site</option>
          </select>
        </div>

        {hasFilters && (
          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
            <p className="text-xs text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-800">
                {filteredJobs.length.toLocaleString()}
              </span>{" "}
              matching jobs
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
            >
              <FiX size={13} />
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Results heading */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-600" />

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
              Fresh jobs
            </span>
          </div>

          <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
            Latest jobs
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Recently added positions from employers across our global job
            network.
          </p>
        </div>

        <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500 sm:flex">
          <FiBriefcase size={13} />
          {filteredJobs.length.toLocaleString()} jobs
        </div>
      </div>

      {/* Job feed */}
      {filteredJobs.length > 0 ? (
        <div className="grid gap-4">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                layout
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.025, 0.25),
                }}
              >
                <Link
                  href={`/live-jobs/${job.slug}`}
                  className="group block rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg sm:p-6"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    {/* Main information */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
                          <FiBriefcase size={20} />
                        </div>

                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-700">
                              {formatCategory(job.category)}
                            </span>

                            {job.isVerified && (
                              <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                                <FiCheckCircle size={12} />
                                Verified
                              </span>
                            )}
                          </div>

                          <h3 className="mt-2 text-lg font-bold tracking-tight text-slate-950 transition group-hover:text-blue-600 sm:text-xl">
                            {job.title}
                          </h3>

                          <p className="mt-1 text-sm font-semibold text-slate-600">
                            {job.company.name}
                          </p>
                        </div>
                      </div>

                      {/* Job metadata */}
                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <FiMapPin size={14} />
                          {job.location}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <FiGlobe size={14} />
                          {job.country}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <FiWifi size={14} />
                          {formatWorkMode(job.workMode)}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <FiClock size={14} />
                          {getRelativeTime(job.publishedAt)}
                        </span>
                      </div>
                    </div>

                    {/* Salary / action */}
                    <div className="flex shrink-0 flex-row items-center justify-between gap-5 border-t border-slate-100 pt-4 lg:min-w-50 lg:flex-col lg:items-end lg:border-t-0 lg:pt-0">
                      <div className="text-left lg:text-right">
                        <p className="text-sm font-bold text-slate-900">
                          {formatSalary(job)}
                        </p>

                        <p className="mt-1 text-[11px] text-slate-400">
                          per {job.salaryPeriod.toLowerCase()}
                        </p>
                      </div>

                      <span className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition group-hover:gap-2.5">
                        View job
                        <FiArrowRight size={15} />
                      </span>
                    </div>
                  </div>

                  {/* Job tags */}
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                    <span className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium text-slate-600">
                      {formatEmploymentType(job.employmentType)}
                    </span>

                    {job.experienceLevel && (
                      <span className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium text-slate-600">
                        {formatCategory(job.experienceLevel)}
                      </span>
                    )}

                    {job.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium text-slate-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        /* Empty state */
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
            <FiSearch size={22} />
          </div>

          <h3 className="mt-5 text-lg font-bold text-slate-950">
            No matching jobs found
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
            Try changing your search or removing one or more filters to see more
            available jobs.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
