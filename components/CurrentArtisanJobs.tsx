"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiChevronDown,
  FiClock,
  FiMapPin,
  FiRefreshCw,
} from "react-icons/fi";

type Job = {
  id: number;
  title: string;
  slug: string;
  count: number;
  step: number;
};

const initialJobs: Job[] = [
  {
    id: 1,
    title: "Solar Panel Installation",
    slug: "solar-panel-installation",
    count: 1842,
    step: 7,
  },
  {
    id: 2,
    title: "POP Installation",
    slug: "pop-installation",
    count: 963,
    step: 4,
  },
  {
    id: 3,
    title: "Social Media Manager",
    slug: "social-media-manager",
    count: 1276,
    step: 6,
  },
  {
    id: 4,
    title: "Makeup Artist",
    slug: "makeup-artist",
    count: 1200,
    step: 5,
  },
  {
    id: 5,
    title: "Hair Stylist",
    slug: "hair-stylist",
    count: 1487,
    step: 8,
  },
  {
    id: 6,
    title: "Designer",
    slug: "designer",
    count: 892,
    step: 4,
  },
  {
    id: 7,
    title: "Plumber",
    slug: "plumber",
    count: 731,
    step: 3,
  },
  {
    id: 8,
    title: "Painter",
    slug: "painter",
    count: 618,
    step: 5,
  },
  {
    id: 9,
    title: "Electrician",
    slug: "electrician",
    count: 1048,
    step: 6,
  },
  {
    id: 10,
    title: "Tiler",
    slug: "tiler",
    count: 574,
    step: 3,
  },
  {
    id: 11,
    title: "Cobbler",
    slug: "cobbler",
    count: 341,
    step: 2,
  },
  {
    id: 12,
    title: "Barber",
    slug: "barber",
    count: 1109,
    step: 7,
  },
  {
    id: 13,
    title: "CCTV Installation",
    slug: "cctv-installation",
    count: 684,
    step: 4,
  },
  {
    id: 14,
    title: "DSTV Installation",
    slug: "dstv-installation",
    count: 529,
    step: 3,
  },
  {
    id: 15,
    title: "Welder",
    slug: "welder",
    count: 463,
    step: 4,
  },
  {
    id: 16,
    title: "Mechanic",
    slug: "mechanic",
    count: 836,
    step: 6,
  },
  {
    id: 17,
    title: "Vulcaniser",
    slug: "vulcaniser",
    count: 397,
    step: 3,
  },
  {
    id: 18,
    title: "Bricklayer",
    slug: "bricklayer",
    count: 285,
    step: 2,
  },
  {
    id: 19,
    title: "Carpenter",
    slug: "carpenter",
    count: 512,
    step: 4,
  },
  {
    id: 20,
    title: "Sales Representative",
    slug: "sales-representative",
    count: 1456,
    step: 8,
  },
  {
    id: 21,
    title: "Cashier",
    slug: "cashier",
    count: 932,
    step: 5,
  },
  {
    id: 22,
    title: "Nail Technician",
    slug: "nail-technician",
    count: 617,
    step: 4,
  },
  {
    id: 23,
    title: "Eye Lash Specialist",
    slug: "eye-lash-specialist",
    count: 438,
    step: 3,
  },
  {
    id: 24,
    title: "Phone Repairer",
    slug: "phone-repairer",
    count: 789,
    step: 6,
  },
  {
    id: 25,
    title: "Washerman",
    slug: "washerman",
    count: 356,
    step: 2,
  },
  {
    id: 26,
    title: "Babysitter",
    slug: "babysitter",
    count: 574,
    step: 4,
  },
  {
    id: 27,
    title: "Nanny",
    slug: "nanny",
    count: 689,
    step: 5,
  },
  {
    id: 28,
    title: "Chef",
    slug: "chef",
    count: 813,
    step: 6,
  },
  {
    id: 29,
    title: "Waiter",
    slug: "waiter",
    count: 1042,
    step: 7,
  },
  {
    id: 30,
    title: "Gym Instructor",
    slug: "gym-instructor",
    count: 463,
    step: 3,
  },
];

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-NG").format(value);
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-NG", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("en-NG", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(date);
}

export default function CurrentArtisanJobs() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [expanded, setExpanded] = useState(false);

  // Nigeria is the initial target market.
  // We will connect this to the real location system later.
  const location = "Nigeria";

  /*
   * Live clock
   */
  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(new Date());
    };

    updateClock();

    const clock = window.setInterval(updateClock, 1000);

    return () => window.clearInterval(clock);
  }, []);

  /*
   * Simulated job activity.
   *
   * Every job has its own increment value, making the counters
   * behave differently rather than all increasing by the same amount.
   *
   * This can later be replaced by a real API request.
   */
  useEffect(() => {
    const interval = window.setInterval(() => {
      setJobs((currentJobs) =>
        currentJobs.map((job) => ({
          ...job,
          count: job.count + job.step,
        })),
      );
    }, 20_000);

    return () => window.clearInterval(interval);
  }, []);

  const visibleJobs = useMemo(
    () => (expanded ? jobs : jobs.slice(0, 4)),
    [expanded, jobs],
  );

  return (
    <section className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-50/70 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Date / Time */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
            <div className="flex items-center gap-1.5">
              <FiClock className="text-blue-600" size={14} />

              <span>
                {currentTime
                  ? `${formatDate(currentTime)} · ${formatTime(currentTime)}`
                  : "Loading current time..."}
              </span>
            </div>

            <span className="hidden text-slate-300 sm:block">•</span>

            <div className="flex items-center gap-1.5">
              <FiMapPin className="text-blue-600" size={14} />
              <span>{location}</span>
            </div>
          </div>

          {/* Heading */}
          <div className="mt-5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Local opportunities
              </span>
            </div>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Current artisan jobs based on your location
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Explore work opportunities across skilled trades, services,
              hospitality, creative work and everyday jobs.
            </p>
          </div>
        </motion.div>

        {/* Jobs panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)]"
        >
          {/* Panel header */}
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-4 py-4 sm:px-6">
            <div>
              <p className="text-sm font-bold text-slate-900">
                Opportunities near you
              </p>

              <p className="mt-0.5 text-xs text-slate-500">
                Updated automatically
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-blue-600"
              >
                <FiRefreshCw size={12} />
              </motion.span>

              <span className="text-[11px] font-semibold text-slate-500">
                Live activity
              </span>
            </div>
          </div>

          {/* Jobs */}
          <div className="divide-y divide-slate-100">
            <AnimatePresence initial={false} mode="popLayout">
              {visibleJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{
                    opacity: 0,
                    height: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: expanded && index > 3 ? 0.025 * (index - 3) : 0,
                  }}
                >
                  <Link
                    href={`/jobs/${job.slug}`}
                    className="group flex items-center gap-3 px-4 py-4 transition-colors hover:bg-blue-50/40 sm:px-6"
                  >
                    {/* Number */}
                    <span className="hidden w-6 shrink-0 text-xs font-semibold text-slate-300 sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Job icon */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <FiBriefcase size={16} />
                    </div>

                    {/* Job title */}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-slate-800 transition-colors group-hover:text-blue-700 sm:text-[15px]">
                        {job.title}
                      </p>

                      <div className="mt-1 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                        <span className="text-[10px] font-medium text-slate-400">
                          Opportunities available
                        </span>
                      </div>
                    </div>

                    {/* Counter */}
                    <div className="shrink-0 text-right">
                      <motion.p
                        key={job.count}
                        initial={{
                          opacity: 0.45,
                          y: -2,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{ duration: 0.25 }}
                        className="text-sm font-black tabular-nums text-slate-950 sm:text-[15px]"
                      >
                        {formatNumber(job.count)}
                      </motion.p>

                      <p className="text-[10px] font-medium text-slate-400">
                        jobs
                      </p>
                    </div>

                    {/* Arrow */}
                    <motion.span
                      whileHover={{
                        x: 3,
                        y: -2,
                      }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600"
                    >
                      <FiArrowUpRight size={14} />
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Expand / collapse */}
          <div className="border-t border-slate-100 bg-slate-50/50 p-3 sm:p-4">
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              className="group flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              <span>
                {expanded ? "Show fewer jobs" : "Explore all job types"}
              </span>

              <motion.span
                animate={{
                  rotate: expanded ? 180 : 0,
                }}
                transition={{ duration: 0.25 }}
                className="text-blue-600"
              >
                <FiChevronDown size={17} />
              </motion.span>
            </button>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="mt-4 flex items-center justify-center gap-1.5 text-center text-[10px] text-slate-400 sm:text-xs"
        >
          <FiMapPin size={12} />

          <span>Showing opportunities relevant to your selected region.</span>
        </motion.div>
      </div>
    </section>
  );
}
