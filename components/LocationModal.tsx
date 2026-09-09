"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiMapPin, FiX } from "react-icons/fi";

export default function LocationModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/40 backdrop-blur-[2px]">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 30,
        }}
        className="relative w-full max-w-xl overflow-hidden rounded-t-3xl bg-white shadow-2xl"
      >
        {/* Close button */}
        <button
          type="button"
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
        >
          <FiX size={18} />
        </button>

        <div className="px-6 pb-8 pt-8 sm:px-8">
          {/* Location icon */}
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <FiMapPin size={25} />
          </div>

          {/* Heading */}
          <div className="pr-10">
            <p className="text-sm font-semibold text-blue-600">Your location</p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              You are currently in Nigeria
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              We found some hot remote jobs from around the world that may be
              available to you.
            </p>
          </div>

          {/* Country selection */}
          <div className="mt-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Explore jobs from
            </p>

            <div className="space-y-3">
              {/* United States */}
              <button
                type="button"
                className="group flex w-full items-center justify-between rounded-2xl border border-slate-200 p-4 text-left transition hover:border-blue-200 hover:bg-blue-50/50"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-2xl">
                    🇺🇸
                  </span>

                  <div>
                    <p className="font-semibold text-slate-900">
                      United States
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Remote opportunities
                    </p>
                  </div>
                </div>

                <FiArrowRight
                  size={19}
                  className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                />
              </button>

              {/* Canada */}
              <button
                type="button"
                className="group flex w-full items-center justify-between rounded-2xl border border-slate-200 p-4 text-left transition hover:border-blue-200 hover:bg-blue-50/50"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-2xl">
                    🇨🇦
                  </span>

                  <div>
                    <p className="font-semibold text-slate-900">Canada</p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Remote opportunities
                    </p>
                  </div>
                </div>

                <FiArrowRight
                  size={19}
                  className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                />
              </button>

              {/* United Kingdom */}
              <button
                type="button"
                className="group flex w-full items-center justify-between rounded-2xl border border-slate-200 p-4 text-left transition hover:border-blue-200 hover:bg-blue-50/50"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-2xl">
                    🇬🇧
                  </span>

                  <div>
                    <p className="font-semibold text-slate-900">
                      United Kingdom
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Remote opportunities
                    </p>
                  </div>
                </div>

                <FiArrowRight
                  size={19}
                  className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                />
              </button>
            </div>
          </div>

          {/* Bottom action */}
          <button
            type="button"
            className="mt-6 w-full py-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            Maybe later
          </button>
        </div>
      </motion.div>
    </div>
  );
}
