"use client";

import type {
  OnlineSimpleJob,
  OnlineSimpleJobCategory,
} from "@/lib/online-simple-job-data";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiChevronDown,
  FiClock,
  FiGlobe,
  FiMapPin,
  FiSearch,
  FiShield,
  FiSmartphone,
  FiWifi,
  FiX,
} from "react-icons/fi";
import Banner320x50 from "./ads/Banner320x50";
import NativeBannerAd from "./ads/NativeBannerAd";

type Props = {
  category: OnlineSimpleJobCategory;
  jobs: OnlineSimpleJob[];
};

const PAGE_SIZE = 12;

const countries = [
  "All Countries",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Nigeria",
  "South Africa",
  "China",
  "India",
  "Japan",
  "Indonesia",
  "New Zealand",
];

function formatPay(job: OnlineSimpleJob) {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  });

  const min = formatter.format(job.estimatedPayMin);
  const max = formatter.format(job.estimatedPayMax);

  if (job.payPeriod === "TASK") {
    return `${job.payCurrency} ${min}–${max} / task`;
  }

  if (job.payPeriod === "HOUR") {
    return `${job.payCurrency} ${min}–${max} / hour`;
  }

  return `${job.payCurrency} ${min}–${max} / week`;
}

function getTimeAgo(publishedAt: string) {
  const published = new Date(publishedAt).getTime();
  const now = Date.now();

  const difference = Math.max(0, now - published);
  const minutes = Math.floor(difference / 60000);

  if (minutes < 1) {
    return "Just now";
  }

  if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }

  return "23 hours ago";
}

export default function OnlineSimpleJobsCategory({ category, jobs }: Props) {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [showCountryFilter, setShowCountryFilter] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesCountry =
        selectedCountry === "All Countries" || job.country === selectedCountry;

      if (!matchesCountry) {
        return false;
      }

      if (!query) {
        return true;
      }

      const searchableText = [
        job.title,
        job.company.name,
        job.company.description,
        job.country,
        job.description,
        ...job.skills,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [jobs, search, selectedCountry]);

  const visibleJobs = filteredJobs.slice(0, visibleCount);
  const hasMore = visibleCount < filteredJobs.length;

  function clearFilters() {
    setSearch("");
    setSelectedCountry("All Countries");
    setVisibleCount(PAGE_SIZE);
  }

  function handleCountryChange(country: string) {
    setSelectedCountry(country);
    setVisibleCount(PAGE_SIZE);
    setShowCountryFilter(false);
  }

  function handleSearch(value: string) {
    setSearch(value);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                               */}
      {/* ------------------------------------------------------------------ */}

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-7 sm:px-6 lg:px-8 lg:pb-18">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Link
              href="/online-jobs"
              className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Online Jobs
            </Link>
          </motion.div>

          <div className="mt-12 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600"
            >
              <FiBriefcase />
              Online Simple Jobs
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
            >
              {category.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg"
            >
              {category.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                <FiCheckCircle className="text-blue-600" />
                No CV required
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                <FiGlobe className="text-blue-600" />
                13 countries
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                <FiWifi className="text-blue-600" />
                Remote work
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <NativeBannerAd />

      {/* ------------------------------------------------------------------ */}
      {/* Search / Filters                                                   */}
      {/* ------------------------------------------------------------------ */}

      <section className="sticky top-0 z-30 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 lg:flex-row">
            {/* Search */}
            <div className="relative flex-1">
              <FiSearch
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600"
              />

              <input
                type="text"
                value={search}
                onChange={(event) => handleSearch(event.target.value)}
                placeholder={`Search ${category.name.toLowerCase()}...`}
                className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-11 text-base text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => handleSearch("")}
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
                  aria-label="Clear search"
                >
                  <FiX />
                </button>
              )}
            </div>

            {/* Country filter */}
            <div className="relative lg:w-64">
              <button
                type="button"
                onClick={() => setShowCountryFilter((value) => !value)}
                className="flex h-12 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50"
              >
                <span className="flex items-center gap-2 truncate">
                  <FiMapPin className="shrink-0 text-blue-600" />

                  <span className="truncate">{selectedCountry}</span>
                </span>

                <FiChevronDown
                  className={`shrink-0 text-blue-600 transition-transform duration-200 ${
                    showCountryFilter ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {showCountryFilter && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -5,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -5,
                      scale: 0.98,
                    }}
                    transition={{ duration: 0.16 }}
                    className="absolute left-0 right-0 top-14 z-40 max-h-80 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-xl"
                  >
                    {countries.map((country) => (
                      <button
                        key={country}
                        type="button"
                        onClick={() => handleCountryChange(country)}
                        className={`flex w-full items-center rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                          selectedCountry === country
                            ? "bg-blue-600 font-semibold text-white"
                            : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                        }`}
                      >
                        {country}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      <Banner320x50 />

      {/* ------------------------------------------------------------------ */}
      {/* Results                                                             */}
      {/* ------------------------------------------------------------------ */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Available jobs
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"}{" "}
              found
            </h2>
          </div>

          {(search || selectedCountry !== "All Countries") && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-2 self-start rounded-lg px-3 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 sm:self-auto"
            >
              <FiX />
              Clear filters
            </button>
          )}
        </div>

        {visibleJobs.length > 0 ? (
          <>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {visibleJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      duration: 0.35,
                      delay: Math.min(index * 0.035, 0.3),
                    }}
                  >
                    <JobCard job={job} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {hasMore && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                  className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Load more jobs
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <FiSearch size={27} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              No jobs found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
              Try another search term or choose a different country to see more{" "}
              {category.name.toLowerCase()} opportunities.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Trust section                                                       */}
      {/* ------------------------------------------------------------------ */}

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <TrustCard
              icon={FiShield}
              title="Job information"
              text="Review the company, task description, requirements and estimated pay before applying."
            />

            <TrustCard
              icon={FiSmartphone}
              title="Simple applications"
              text="These listings are designed around straightforward applications without a CV upload."
            />

            <TrustCard
              icon={FiClock}
              title="Recently posted"
              text="Listings display their recent posting time so you can quickly identify newer opportunities."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Job Card                                                                    */
/* -------------------------------------------------------------------------- */

function JobCard({ job }: { job: OnlineSimpleJob }) {
  return (
    <Link
      href={`/online-jobs/${job.categorySlug}/${job.slug}`}
      className="group block h-full"
    >
      <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
        {job.isFeatured && (
          <div className="absolute right-5 top-5 rounded-full bg-blue-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            Featured
          </div>
        )}

        <div className="flex items-start gap-4 pr-16">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white transition-colors duration-300 group-hover:bg-blue-600">
            {job.company.name.charAt(0).toUpperCase()}
          </div>

          <div className="min-w-0">
            <h3 className="line-clamp-2 text-lg font-bold leading-6 text-slate-900 transition-colors group-hover:text-blue-600">
              {job.title}
            </h3>

            <p className="mt-1 truncate text-sm font-medium text-slate-500">
              {job.company.name}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
            <FiMapPin size={12} />
            {job.country}
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-2.5 py-1 text-xs font-medium text-white">
            <FiWifi size={12} />
            Remote
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-2.5 py-1 text-xs font-medium text-white">
            <FiCheckCircle size={12} />
            No CV
          </span>
        </div>

        <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">
          {job.description}
        </p>

        <div className="mt-5 rounded-2xl bg-blue-50 p-4">
          <div className="text-xs font-medium uppercase tracking-wide text-blue-600">
            Estimated pay
          </div>

          <div className="mt-1 text-sm font-bold text-slate-900">
            {formatPay(job)}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-5">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
            <FiClock size={13} />
            {getTimeAgo(job.publishedAt)}
          </span>

          <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
            View job
            <FiArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </article>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* Trust Card                                                                  */
/* -------------------------------------------------------------------------- */

function TrustCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof FiShield;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
        <Icon size={20} />
      </div>

      <h3 className="mt-5 font-bold text-slate-900">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}
