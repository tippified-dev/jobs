"use client";

import Banner468x60 from "@/components/ads/Banner468X60";
import NativeBannerAd from "@/components/ads/NativeBannerAd";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowLeft,
  FiBriefcase,
  FiCheckCircle,
  FiGlobe,
  FiUsers,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiUsers,
    title: "Reach qualified candidates",
    description:
      "Put your opportunity in front of people actively looking for their next job.",
  },
  {
    icon: FiGlobe,
    title: "Reach talent worldwide",
    description:
      "Find candidates from Nigeria and across the global remote workforce.",
  },
  {
    icon: FiCheckCircle,
    title: "Simple job posting",
    description:
      "Create a clear job listing and make it easier for the right candidates to discover it.",
  },
];

export default function PostAJobPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-slate-900"
          >
            Jobs<span className="text-blue-600">4all</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
          >
            <FiArrowLeft size={16} />
            Back to Jobs
          </Link>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              <FiBriefcase size={14} />
              For Employers
            </div>

            <h1 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Find the right person for your
              <span className="text-blue-600"> next opportunity.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Post your job on Jobs4all and connect with candidates looking for
              online, remote, part-time, freelance and other employment
              opportunities.
            </p>

            <Banner468x60 />

            {/* Benefits */}
            <div className="mt-10 space-y-5">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.15 + index * 0.1,
                    }}
                    className="flex gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-slate-200">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h2 className="text-base font-bold text-slate-950">
                        {benefit.title}
                      </h2>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Job Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
          >
            <NativeBannerAd />
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Post a job
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Tell candidates about the opportunity you are hiring for.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              {/* Job title */}
              <div>
                <label
                  htmlFor="job-title"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Job title
                </label>

                <input
                  id="job-title"
                  type="text"
                  placeholder="e.g. Customer Support Specialist"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Company name
                </label>

                <input
                  id="company"
                  type="text"
                  placeholder="Your company name"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Location
                </label>

                <input
                  id="location"
                  type="text"
                  placeholder="e.g. Remote, Lagos, Nigeria"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Job type */}
              <div>
                <label
                  htmlFor="job-type"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Job type
                </label>

                <select
                  id="job-type"
                  defaultValue=""
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                >
                  <option value="" disabled>
                    Select job type
                  </option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                  <option value="internship">Internship</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Job description
                </label>

                <textarea
                  id="description"
                  rows={6}
                  placeholder="Describe the role, responsibilities and requirements..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Submit */}
              <a
                href="https://www.profitableratecpmnetwork.com/csdx6m0rsd?key=ebbcdcae066780c6b5d53d9f113bb483"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                <FiBriefcase size={17} />
                Continue to Post Job
              </a>

              <p className="text-center text-xs leading-5 text-slate-400">
                Job posting functionality will be connected to the Jobs4all
                employer system.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
