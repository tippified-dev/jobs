"use client";

import { getOnlineSimpleJobsByCategory } from "@/lib/online-simple-job-data";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiSearch,
  FiSmartphone,
  FiStar,
  FiTarget,
  FiUsers,
  FiWifi,
} from "react-icons/fi";

type Props = {
  totalJobs: number;
};

const categoryIcons = [FiTarget, FiSearch, FiUsers, FiCheckCircle, FiWifi];

const categoryAccents = [
  {
    gradient: "from-blue-500 to-cyan-400",
    glow: "bg-blue-500/20",
  },
  {
    gradient: "from-violet-500 to-purple-400",
    glow: "bg-violet-500/20",
  },
  {
    gradient: "from-pink-500 to-rose-400",
    glow: "bg-pink-500/20",
  },
  {
    gradient: "from-emerald-500 to-teal-400",
    glow: "bg-emerald-500/20",
  },
  {
    gradient: "from-orange-500 to-amber-400",
    glow: "bg-orange-500/20",
  },
];

const countries = [
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

const benefits = [
  {
    icon: FiSmartphone,
    title: "Work From Your Phone",
    description:
      "Many simple online tasks can be completed using a smartphone, tablet or computer.",
  },
  {
    icon: FiWifi,
    title: "Internet-Based Work",
    description:
      "Find flexible online tasks that can be performed remotely from wherever you are.",
  },
  {
    icon: FiCheckCircle,
    title: "No CV Required",
    description:
      "These jobs are designed around practical tasks rather than traditional CV requirements.",
  },
  {
    icon: FiGlobe,
    title: "Global Opportunities",
    description:
      "Explore simple online work from companies and platforms across multiple countries.",
  },
];

export default function OnlineJobsLanding({ totalJobs }: Props) {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-125 w-125 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute right-[-10%] top-[20%] h-125 w-125 rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[30%] h-125 w-125 rounded-full bg-cyan-600/10 blur-[140px]" />
      </div>

      {/* Back button */}
      <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-4 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-white/16 hover:bg-white/8 hover:text-white"
        >
          <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/8 px-4 py-2 text-sm font-medium text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Simple online work opportunities
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Find{" "}
              <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Online Simple Jobs
              </span>{" "}
              You Can Do From Anywhere
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Discover simple online jobs that can be completed with an internet
              connection, smartphone or computer and basic digital skills.
              Explore opportunities across countries without the traditional
              barriers of formal education or a CV.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#categories"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Explore Jobs
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/live-jobs"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/4 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/18 hover:bg-white/8"
              >
                Browse Professional Jobs
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-emerald-400" />
                No CV required
              </div>

              <div className="flex items-center gap-2">
                <FiGlobe className="text-blue-400" />
                Global opportunities
              </div>

              <div className="flex items-center gap-2">
                <FiSmartphone className="text-violet-400" />
                Mobile friendly
              </div>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[3rem] bg-linear-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-4xl border border-white/8 bg-white/4 p-5 shadow-2xl backdrop-blur-2xl sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-400">
                    Available online jobs
                  </p>
                  <p className="mt-1 text-3xl font-bold text-white">
                    {totalJobs.toLocaleString()}
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <FiGlobe size={24} />
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: "Micro Tasks",
                    text: "Complete short digital tasks",
                    icon: FiTarget,
                  },
                  {
                    title: "Surveys & Research",
                    text: "Share opinions and feedback",
                    icon: FiSearch,
                  },
                  {
                    title: "Content & Social Tasks",
                    text: "Help with simple digital content",
                    icon: FiUsers,
                  },
                  {
                    title: "Testing & Feedback",
                    text: "Test products and experiences",
                    icon: FiCheckCircle,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.35 + index * 0.1,
                      }}
                      className="flex items-center gap-4 rounded-2xl border border-white/6 bg-white/[0.035] p-4 transition-colors hover:bg-white/6"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/6 text-blue-400">
                        <Icon size={19} />
                      </div>

                      <div className="min-w-0">
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-xs text-slate-500">
                          {item.text}
                        </p>
                      </div>

                      <FiArrowRight className="ml-auto shrink-0 text-slate-600" />
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-4">
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-emerald-400" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-300">
                      Designed for accessibility
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Explore simple tasks without the traditional CV-first
                      application process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/6 bg-white/15">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/6 sm:grid-cols-4">
          {[
            {
              value: totalJobs.toLocaleString(),
              label: "Online Jobs",
            },
            {
              value: "5",
              label: "Job Categories",
            },
            {
              value: "13",
              label: "Countries",
            },
            {
              value: "24h",
              label: "Fresh Job Window",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="px-4 py-7 text-center sm:px-6 sm:py-9"
            >
              <p className="text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section
        id="categories"
        className="mx-auto max-w-7xl scroll-mt-8 px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <FiTarget />
            Explore by category
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Choose the kind of online work you want
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400">
            Browse simple online jobs grouped into practical categories so you
            can quickly find tasks that match your interests and available
            skills.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Micro Tasks",
              slug: "micro-tasks",
              description:
                "Complete short, straightforward digital tasks such as data checking, categorisation and basic online activities.",
            },
            {
              name: "Surveys & Research",
              slug: "surveys-research",
              description:
                "Share opinions, answer questions and participate in online research activities.",
            },
            {
              name: "Content & Social Tasks",
              slug: "content-social-tasks",
              description:
                "Help with simple content, social media and digital engagement activities.",
            },
            {
              name: "Testing & Feedback",
              slug: "testing-feedback",
              description:
                "Test websites, apps, digital experiences and products and provide useful feedback.",
            },
            {
              name: "Simple Online Assistance",
              slug: "simple-online-assistance",
              description:
                "Take on straightforward online support, checking, organisation and assistance tasks.",
            },
          ].map((category, index) => {
            const Icon = categoryIcons[index];
            const accent = categoryAccents[index];
            const count = getOnlineSimpleJobsByCategory(category.slug).length;

            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <Link
                  href={`/online-jobs/${category.slug}`}
                  className="group relative block h-full overflow-hidden rounded-3xl border border-white/8 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/6"
                >
                  <div
                    className={`absolute -right-16 -top-16 h-40 w-40 rounded-full ${accent.glow} opacity-60 blur-3xl transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="relative">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${accent.gradient} text-white shadow-lg`}
                    >
                      <Icon size={23} />
                    </div>

                    <div className="mt-6 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {category.name}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                          {category.description}
                        </p>
                      </div>

                      <FiArrowRight className="mt-1 shrink-0 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/6 pt-5">
                      <span className="text-sm font-semibold text-slate-300">
                        {count} jobs
                      </span>

                      <span className="text-xs text-slate-500">
                        Explore category
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why this section */}
      <section className="border-y border-white/6 bg-white/15">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-violet-300">
                <FiStar />
                Built for accessibility
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start with simple online work
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                Not every online opportunity requires years of experience or a
                traditional application. This section of Global Jobs Live
                focuses on straightforward digital tasks that can be completed
                remotely.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-400">
                Requirements vary by employer and task, so always read the
                individual job details before applying.
              </p>

              <Link
                href="#categories"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                Explore available categories
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="rounded-3xl border border-white/[0.07] bg-white/[0.035] p-6 backdrop-blur-xl"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/6 text-blue-400">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-5 font-semibold text-white">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <FiGlobe />
            Global coverage
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Explore opportunities across countries
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Our online simple jobs collection covers opportunities connected to
            multiple markets around the world.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
          {countries.map((country, index) => (
            <motion.div
              key={country}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.03,
              }}
              className="rounded-full border border-white/[0.07] bg-white/[0.035] px-4 py-2.5 text-sm text-slate-300 transition-colors hover:border-white/[0.14] hover:bg-white/[0.07] hover:text-white"
            >
              {country}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-4xl border border-white/8 bg-linear-to-br from-blue-600/15 via-violet-600/10 to-cyan-500/10 px-6 py-12 text-center sm:px-10 sm:py-16"
        >
          <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/8 bg-white/6 text-blue-300">
              <FiSearch size={24} />
            </div>

            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to find an online job?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Browse the available categories and discover simple online
              opportunities that match the kind of work you want to do.
            </p>

            <Link
              href="#categories"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Find Online Jobs
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
