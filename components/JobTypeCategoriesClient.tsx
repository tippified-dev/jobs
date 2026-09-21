"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import {
  FiArrowUpRight,
  FiBarChart2,
  FiBox,
  FiBriefcase,
  FiCheckCircle,
  FiChevronDown,
  FiClipboard,
  FiCloud,
  FiCode,
  FiCpu,
  FiEdit3,
  FiEye,
  FiFileText,
  FiHeadphones,
  FiHeart,
  FiImage,
  FiLayout,
  FiMail,
  FiMessageCircle,
  FiMic,
  FiMonitor,
  FiPackage,
  FiPenTool,
  FiPieChart,
  FiSearch,
  FiServer,
  FiSettings,
  FiShare2,
  FiShield,
  FiShoppingBag,
  FiSmartphone,
  FiTrendingUp,
  FiType,
  FiUser,
  FiUsers,
} from "react-icons/fi";

type JobCategory = {
  id: string;
  title: string;
  description: string;
  jobs: number;
  slug: string;
  isRemote: boolean;
};

type Props = {
  skilledJobs: JobCategory[];
  unskilledJobs: JobCategory[];
};

/*
 * Icons are controlled entirely by the frontend.
 * The database only provides the category slug.
 */
const categoryIcons: Record<string, ReactNode> = {
  // Skilled
  "full-stack-developer": <FiCode />,
  "frontend-developer": <FiMonitor />,
  "backend-developer": <FiServer />,
  "ui-ux-designer": <FiPenTool />,
  "graphic-designer": <FiImage />,
  "digital-marketer": <FiTrendingUp />,
  "seo-specialist": <FiSearch />,
  "content-writer": <FiEdit3 />,
  "software-engineer": <FiCpu />,
  "data-analyst": <FiBarChart2 />,
  "project-manager": <FiClipboard />,
  "social-media-manager": <FiShare2 />,
  "product-manager": <FiBox />,
  "devops-engineer": <FiSettings />,
  "customer-success-manager": <FiHeart />,
  "business-analyst": <FiPieChart />,
  "virtual-assistant": <FiUser />,
  "web-designer": <FiLayout />,
  "cybersecurity-specialist": <FiShield />,
  "cloud-engineer": <FiCloud />,

  // Entry-level / Other
  "data-entry": <FiFileText />,
  "online-surveys": <FiCheckCircle />,
  transcription: <FiMic />,
  "chat-support": <FiMessageCircle />,
  "customer-support": <FiHeadphones />,
  "content-moderation": <FiEye />,
  "product-listing": <FiShoppingBag />,
  "online-research": <FiSearch />,
  "email-support": <FiMail />,
  "social-media-assistant": <FiShare2 />,
  "website-testing": <FiMonitor />,
  "app-testing": <FiSmartphone />,
  captioning: <FiType />,
  "online-chat-agent": <FiMessageCircle />,
  "web-research": <FiSearch />,
  "order-processing": <FiPackage />,
  "community-assistant": <FiUsers />,
  "document-formatting": <FiFileText />,
  "image-tagging": <FiImage />,
};

function getCategoryIcon(slug: string) {
  return categoryIcons[slug] ?? <FiBriefcase />;
}

export default function JobTypeCategoriesClient({
  skilledJobs,
  unskilledJobs,
}: Props) {
  const [activeType, setActiveType] = useState<"skilled" | "unskilled">(
    "skilled",
  );

  const [showAll, setShowAll] = useState(false);

  const jobs = activeType === "skilled" ? skilledJobs : unskilledJobs;

  const initialCount = 6;

  const visibleJobs = showAll ? jobs : jobs.slice(0, initialCount);

  const remainingCount = Math.max(jobs.length - initialCount, 0);

  const handleTypeChange = (type: "skilled" | "unskilled") => {
    setActiveType(type);
    setShowAll(false);
  };

  return (
    <section
      id="job-categories"
      className="border-y border-slate-100 bg-white py-8 sm:py-10 lg:py-12"
      aria-labelledby="job-categories-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-600">
            <FiBriefcase size={13} />
            Explore job opportunities
          </span>

          <h2
            id="job-categories-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Find the right job for your skills
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Explore remote and online jobs across different industries. Whether
            you have professional skills or are looking for flexible work you
            can start with, find opportunities that match what you can do.
          </p>
        </div>

        {/* Job Type Switcher */}
        <div className="mx-auto mt-6 flex w-full max-w-md rounded-2xl border border-slate-200 bg-slate-50 p-1.5">
          <button
            type="button"
            onClick={() => handleTypeChange("skilled")}
            className={`relative flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition ${
              activeType === "skilled"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {activeType === "skilled" && (
              <motion.span
                layoutId="job-type-active"
                className="absolute inset-0 z-0 rounded-xl bg-blue-600"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            <span className="relative z-10">Skilled Jobs</span>
          </button>

          <button
            type="button"
            onClick={() => handleTypeChange("unskilled")}
            className={`relative flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition ${
              activeType === "unskilled"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {activeType === "unskilled" && (
              <motion.span
                layoutId="job-type-active"
                className="absolute inset-0 z-0 rounded-xl bg-blue-600"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            <span className="relative z-10">Entry-Level & Other Jobs</span>
          </button>
        </div>

        {/* Categories */}
        <div className="mt-7">
          <div className="mb-4 flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
                {activeType === "skilled"
                  ? "Skilled remote jobs"
                  : "Unskilled & entry-level jobs"}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {activeType === "skilled"
                  ? "Professional opportunities for people with specialized skills and experience."
                  : "Flexible online opportunities that can be started with little or no specialized experience."}
              </p>
            </div>

            <span className="text-xs font-medium text-slate-400">
              {jobs.length} job categories
            </span>
          </div>

          {/* Category Grid */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeType}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {visibleJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: Math.min(index * 0.035, 0.3),
                  }}
                  className="h-full"
                >
                  <Link
                    href={`/category/${job.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        {getCategoryIcon(job.slug)}
                      </div>

                      <FiArrowUpRight
                        size={18}
                        className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600"
                      />
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600">
                        {job.title}
                      </h4>

                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
                        {job.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-4">
                      <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                        <span className="text-xs font-semibold text-blue-600">
                          {job.jobs.toLocaleString()}{" "}
                          {job.jobs === 1 ? "job" : "jobs"}
                        </span>

                        <span className="text-[11px] font-medium text-slate-400">
                          {job.isRemote ? "Remote" : "All locations"}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* View More / Show Fewer */}
          {remainingCount > 0 && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                aria-expanded={showAll}
                className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span>
                  {showAll ? "Show fewer" : `View ${remainingCount} more`}
                </span>

                <motion.span
                  animate={{
                    rotate: showAll ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-blue-100"
                >
                  <FiChevronDown className="text-base" />
                </motion.span>
              </button>
            </div>
          )}

          {/* Empty State */}
          {jobs.length === 0 && (
            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
              <FiBriefcase className="mx-auto text-3xl text-slate-400" />

              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                No categories available
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                New job categories will appear here as they are added.
              </p>
            </div>
          )}
        </div>

        {/* Browse All Jobs */}
        <div className="mt-7 flex justify-center">
          <Link
            href="/jobs"
            className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Browse all jobs
            <FiArrowUpRight
              size={16}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
