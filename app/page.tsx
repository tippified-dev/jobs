"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiActivity,
  FiArrowUpRight,
  FiBriefcase,
  FiRefreshCw,
} from "react-icons/fi";

export default function LiveJobsCounter() {
  const [jobCount, setJobCount] = useState(50000);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);

      setJobCount((current) => {
        const increase = Math.floor(Math.random() * 8) + 3;
        return current + increase;
      });

      setTimeout(() => {
        setIsUpdating(false);
      }, 700);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="sticky top-20 z-40 border-b border-slate-200/80 bg-white/95 px-3 py-2 backdrop-blur-md sm:px-5 sm:py-2.5"
      aria-label="Job activity"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto flex w-full max-w-3xl items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 shadow-sm sm:px-4"
        >
          {/* Left side */}

          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            {/* Live indicator */}

            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white sm:h-10 sm:w-10 sm:rounded-xl">
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
                className="absolute inset-0 rounded-lg bg-blue-500 sm:rounded-xl"
              />

              <FiBriefcase
                size={16}
                className="relative z-10 sm:h-4.5 sm:w-4.5"
              />
            </div>

            {/* Text */}

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[9px] font-bold uppercase tracking-wider text-blue-600 sm:text-[11px]">
                  Live job activity
                </span>

                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
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

                  <span className="relative inline-flex h-full w-full rounded-full bg-blue-600" />
                </span>
              </div>

              <div className="mt-0.5 flex items-baseline gap-1 sm:gap-1.5">
                <motion.span
                  key={jobCount}
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="text-lg font-bold tracking-tight text-slate-950 sm:text-2xl"
                >
                  {jobCount.toLocaleString()}
                </motion.span>

                <span className="truncate text-[10px] font-medium text-slate-500 sm:text-sm">
                  remote jobs added
                </span>
              </div>
            </div>
          </div>

          {/* Right side */}

          <div className="flex shrink-0 items-center gap-2">
            <motion.div
              animate={{
                rotate: isUpdating ? 360 : 0,
              }}
              transition={{
                duration: 0.55,
                ease: "easeInOut",
              }}
              className="hidden text-slate-400 sm:block"
            >
              <FiRefreshCw size={15} />
            </motion.div>

            <div className="hidden h-7 w-px bg-slate-200 sm:block" />

            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-blue-600 sm:text-xs">
              <FiActivity size={13} />

              <span className="hidden sm:inline">Updating</span>
            </div>
          </div>
        </motion.div>

        {/* Supporting text */}

        <div className="hidden items-center justify-center gap-1.5 pt-1 text-[9px] text-slate-400 sm:flex">
          <FiArrowUpRight size={10} />

          <span>New opportunities are continuously being added</span>
        </div>
      </div>
    </section>
  );
}
