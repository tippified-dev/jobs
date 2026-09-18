"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiEdit3,
  FiGlobe,
  FiHeadphones,
  FiLayers,
  FiMonitor,
  FiPenTool,
  FiSearch,
  FiSettings,
  FiShoppingBag,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

type JobCategory = {
  id: string;
  title: string;
  description: string;
  jobs: number;
  icon: string | null;
  slug: string;
  isRemote: boolean;
};

type JobTypeCategoriesClientProps = {
  skilledJobs: JobCategory[];
  unskilledJobs: JobCategory[];
};

function getCategoryIcon(icon: string | null): ReactNode {
  switch (icon) {
    case "layers":
      return <FiLayers />;
    case "monitor":
      return <FiMonitor />;
    case "settings":
      return <FiSettings />;
    case "pen-tool":
      return <FiPenTool />;
    case "edit":
      return <FiEdit3 />;
    case "trending-up":
      return <FiTrendingUp />;
    case "search":
      return <FiSearch />;
    case "code":
      return <FiCode />;
    case "database":
      return <FiDatabase />;
    case "briefcase":
      return <FiBriefcase />;
    case "globe":
      return <FiGlobe />;
    case "users":
      return <FiUsers />;
    case "headphones":
      return <FiHeadphones />;
    case "shopping-bag":
      return <FiShoppingBag />;
    case "check-circle":
      return <FiCheckCircle />;
    default:
      return <FiBriefcase />;
  }
}

export default function JobTypeCategoriesClient({
  skilledJobs,
  unskilledJobs,
}: JobTypeCategoriesClientProps) {
  const [activeType, setActiveType] = useState<"skilled" | "unskilled">(
    "skilled",
  );

  const jobs = activeType === "skilled" ? skilledJobs : unskilledJobs;

  return (
    <section className="w-full py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Explore Opportunities
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find Jobs That Match Your Skills
          </h2>

          <p className="mt-3 text-base leading-7 text-gray-600">
            Explore skilled and entry-level opportunities from companies hiring
            across different countries and industries.
          </p>
        </div>

        {/* Skilled / Unskilled switch */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-gray-200 bg-gray-100 p-1">
            <button
              type="button"
              onClick={() => setActiveType("skilled")}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeType === "skilled"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Skilled Jobs
            </button>

            <button
              type="button"
              onClick={() => setActiveType("unskilled")}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeType === "unskilled"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Entry-Level &amp; Other Jobs
            </button>
          </div>
        </div>

        {/* Categories */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeType}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {jobs.map((job) => (
              <Link
                key={job.id}
                href={`/category/${job.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                    {getCategoryIcon(job.icon)}
                  </div>

                  <FiArrowUpRight className="text-lg text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {job.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                  {job.description}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-sm font-medium text-gray-900">
                    {job.jobs.toLocaleString()}{" "}
                    {job.jobs === 1 ? "job" : "jobs"}
                  </span>

                  <span className="text-xs font-medium text-gray-500">
                    {job.isRemote ? "Remote" : "All locations"}
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {jobs.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center">
            <FiBriefcase className="mx-auto text-3xl text-gray-400" />

            <h3 className="mt-3 text-lg font-semibold text-gray-900">
              No jobs available yet
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              New opportunities will appear here as they are added.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
