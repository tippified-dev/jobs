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
import Banner320x50 from "./ads/Banner320x50";
import NativeBannerAd from "./ads/NativeBannerAd";

type Props = {
  totalJobs: number;
};

const categoryIcons = [FiTarget, FiSearch, FiUsers, FiCheckCircle, FiWifi];

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
    <main className="min-h-screen bg-white text-slate-900">
      {/* Back button */}
      <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
        >
          <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Simple online work opportunities
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Find Online Simple Jobs You Can Do{" "}
              <span className="text-blue-600">From Anywhere.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Discover simple online jobs that can be completed with an internet
              connection, smartphone or computer and basic digital skills.
              Explore opportunities across countries without the traditional
              barriers of formal education or a CV.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#categories"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Explore Jobs
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/live-jobs"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                Browse Professional Jobs
              </Link>
            </div>
            <Banner320x50 />

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-blue-600" />
                No CV required
              </div>

              <div className="flex items-center gap-2">
                <FiGlobe className="text-blue-600" />
                Global opportunities
              </div>

              <div className="flex items-center gap-2">
                <FiSmartphone className="text-blue-600" />
                Mobile friendly
              </div>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-xl sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Available online jobs
                  </p>

                  <p className="mt-1 text-3xl font-bold text-slate-900">
                    {totalJobs.toLocaleString()}
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
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
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.25 + index * 0.08,
                      }}
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon size={19} />
                      </div>

                      <div className="min-w-0">
                        <p className="font-semibold text-slate-900">
                          {item.title}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {item.text}
                        </p>
                      </div>

                      <FiArrowRight className="ml-auto shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-blue-600" />

                  <div>
                    <p className="text-sm font-semibold text-blue-700">
                      Designed for accessibility
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-600">
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
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 sm:grid-cols-4">
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
              transition={{
                duration: 0.45,
                delay: index * 0.07,
              }}
              className="px-4 py-7 text-center sm:px-6 sm:py-9"
            >
              <p className="text-2xl font-bold text-slate-900 sm:text-3xl">
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
        className="mx-auto max-w-7xl scroll-mt-8 px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
            <FiTarget className="text-blue-600" />
            Explore by category
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Choose the kind of online work you want
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Browse simple online jobs grouped into practical categories so you
            can quickly find tasks that match your interests and available
            skills.
          </p>
        </motion.div>
        <NativeBannerAd />

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

            const count = getOnlineSimpleJobsByCategory(category.slug).length;

            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
              >
                <Link
                  href={`/online-jobs/${category.slug}`}
                  className="group block h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
                    <Icon size={23} />
                  </div>

                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {category.name}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {category.description}
                      </p>
                    </div>

                    <FiArrowRight className="mt-1 shrink-0 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600" />
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
                    <span className="text-sm font-semibold text-slate-700">
                      {count} jobs
                    </span>

                    <span className="text-xs text-slate-500">
                      Explore category
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why this section */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                <FiStar />
                Built for accessibility
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Start with simple online work
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Not every online opportunity requires years of experience or a
                traditional application. This section of Global Jobs Live
                focuses on straightforward digital tasks that can be completed
                remotely.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Requirements vary by employer and task, so always read the
                individual job details before applying.
              </p>

              <Link
                href="#categories"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-blue-600"
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
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-5 font-semibold text-slate-900">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
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
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
            <FiGlobe className="text-blue-600" />
            Global coverage
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Explore opportunities across countries
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
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
                duration: 0.3,
                delay: index * 0.025,
              }}
              className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
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
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-blue-100 bg-blue-50 px-6 py-12 text-center sm:px-10 sm:py-16"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <FiSearch size={24} />
          </div>

          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ready to find an online job?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Browse the available categories and discover simple online
            opportunities that match the kind of work you want to do.
          </p>

          <Link
            href="#categories"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Find Online Jobs
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
