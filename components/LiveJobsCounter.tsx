"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiActivity,
  FiArrowUpRight,
  FiBriefcase,
  FiRefreshCw,
} from "react-icons/fi";

import { getLiveJobCount } from "@/lib/live-job-data";

export default function LiveJobsCounter() {
  const jobCount = getLiveJobCount();

  return (
    <section
      className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 px-3 py-2 backdrop-blur-md sm:px-5 sm:py-2.5"
      aria-label="Live jobs"
    >
      <div className="mx-auto max-w-7xl">
        <Link
          href="/live-jobs"
          className="group block"
          aria-label={`View ${jobCount.toLocaleString()} live jobs`}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -1,
            }}
            whileTap={{
              scale: 0.995,
            }}
            className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 shadow-sm transition-shadow duration-300 group-hover:border-blue-200 group-hover:shadow-md sm:px-5"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                <motion.span
                  animate={{
                    scale: [1, 1.7, 1],
                    opacity: [0.35, 0, 0.35],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 rounded-xl bg-blue-500"
                />

                <FiBriefcase size={18} className="relative z-10" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                    Live jobs
                  </span>

                  <span className="relative flex h-2 w-2">
                    <motion.span
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [1, 0.4, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                      className="absolute inline-flex h-full w-full rounded-full bg-blue-600"
                    />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                  </span>
                </div>

                <div className="mt-0.5 flex items-baseline gap-1.5">
                  <span className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                    {jobCount.toLocaleString()}
                  </span>

                  <span className="text-xs font-medium text-slate-500 sm:text-sm">
                    jobs available
                  </span>
                </div>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="hidden text-slate-400 sm:block"
              >
                <FiRefreshCw size={16} />
              </motion.div>

              <div className="hidden h-8 w-px bg-slate-200 sm:block" />

              <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                <FiActivity size={14} />

                <span className="hidden sm:inline">Explore</span>

                <FiArrowUpRight
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </motion.div>
        </Link>

        <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
          <FiArrowUpRight size={11} />

          <span>Fresh jobs are continuously being added</span>
        </div>
      </div>
    </section>
  );
}
