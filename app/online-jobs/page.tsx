import {
  getOnlineSimpleJobCount,
  getOnlineSimpleJobsByCategory,
} from "@/lib/online-simple-job-data";
import { motion } from "framer-motion";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Online Simple Jobs | No CV Remote Jobs | Global Jobs Live",
  description:
    "Find simple online jobs that can be done remotely with a smartphone, internet connection and basic skills. Explore micro tasks, surveys, content tasks, testing and online assistance jobs.",
  keywords: [
    "online simple jobs",
    "no CV jobs",
    "online jobs without experience",
    "simple remote jobs",
    "work from home jobs",
    "online jobs worldwide",
    "micro tasks",
    "online surveys",
    "data checking jobs",
    "remote simple jobs",
  ],
  alternates: {
    canonical: "https://globaljobslive.com/online-jobs",
  },
  openGraph: {
    title: "Online Simple Jobs | Global Jobs Live",
    description:
      "Explore simple online jobs available across countries. No CV required for these opportunities.",
    url: "https://globaljobslive.com/online-jobs",
    siteName: "Global Jobs Live",
    type: "website",
  },
};

const categoryIcons = [FiTarget, FiSearch, FiUsers, FiCheckCircle, FiWifi];

const categoryAccents = [
  {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    border: "border-blue-100",
    hover: "group-hover:bg-blue-600",
  },
  {
    bg: "bg-violet-50",
    icon: "text-violet-600",
    border: "border-violet-100",
    hover: "group-hover:bg-violet-600",
  },
  {
    bg: "bg-cyan-50",
    icon: "text-cyan-600",
    border: "border-cyan-100",
    hover: "group-hover:bg-cyan-600",
  },
  {
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    border: "border-emerald-100",
    hover: "group-hover:bg-emerald-600",
  },
  {
    bg: "bg-orange-50",
    icon: "text-orange-600",
    border: "border-orange-100",
    hover: "group-hover:bg-orange-600",
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
    title: "No CV required",
    description:
      "These simple online roles are designed around tasks and basic abilities rather than formal CVs.",
  },
  {
    icon: FiWifi,
    title: "Work online",
    description:
      "Many tasks can be completed remotely with a smartphone or computer and a reliable internet connection.",
  },
  {
    icon: FiGlobe,
    title: "Global opportunities",
    description:
      "Browse simple online work from companies and platforms across multiple countries.",
  },
  {
    icon: FiStar,
    title: "Beginner friendly",
    description:
      "Many listings focus on straightforward tasks that can be learned by following clear instructions.",
  },
];

export default function OnlineJobsPage() {
  const totalJobs = getOnlineSimpleJobCount();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-24">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </motion.div>

          <div className="mx-auto mt-16 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300"
            >
              <FiGlobe />
              Simple online work from around the world
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Online Simple Jobs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg"
            >
              Find straightforward online tasks you can do remotely. Discover
              opportunities that focus on basic skills, clear instructions and
              getting the task done.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-3"
            >
              <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-5 backdrop-blur-md">
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  {totalJobs}+
                </div>
                <div className="mt-1 text-xs text-slate-400 sm:text-sm">
                  Online jobs
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-5 backdrop-blur-md">
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  5
                </div>
                <div className="mt-1 text-xs text-slate-400 sm:text-sm">
                  Job categories
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-5 backdrop-blur-md">
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  13
                </div>
                <div className="mt-1 text-xs text-slate-400 sm:text-sm">
                  Countries
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Explore opportunities
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Choose a job category
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Browse simple online work based on the type of tasks you want to
              complete.
            </p>
          </div>

          <div className="hidden items-center gap-2 text-sm text-slate-500 sm:flex">
            <FiCheckCircle className="text-emerald-500" />
            No CV required for these listings
          </div>
        </div>

        <CategoryGrid />
      </section>

      {/* How it works */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Simple process
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Find a task and get started
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Global Jobs Live makes it easy to explore simple online work
              without making the process unnecessarily complicated.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Choose a category",
                text: "Start with the type of online task that matches what you can comfortably do.",
              },
              {
                number: "02",
                title: "Explore a job",
                text: "Read the task description, requirements, estimated pay and company information.",
              },
              {
                number: "03",
                title: "Apply",
                text: "Submit the simple application details requested by the listing. No CV upload is required.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="relative rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <span className="text-sm font-bold text-blue-600">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Countries */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-blue-400">
                <FiGlobe size={24} />
              </div>

              <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                Simple online work across the globe
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                Explore listings from multiple markets and discover online tasks
                available to people in different parts of the world.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {countries.map((country, index) => (
                <motion.div
                  key={country}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.03,
                  }}
                  className="rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-slate-300 transition-colors hover:border-white/20 hover:bg-white/8 hover:text-white"
                >
                  {country}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-20">
          <FiSearch className="mx-auto text-blue-600" size={30} />

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Ready to explore?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Browse simple online jobs and find tasks that fit your available
            skills, time and location.
          </p>

          <Link
            href="#categories"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Explore categories
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Category Grid                                                              */
/* -------------------------------------------------------------------------- */

function CategoryGrid() {
  const categories = [
    {
      name: "Micro Tasks",
      slug: "micro-tasks",
      description:
        "Complete straightforward digital tasks such as categorizing information, checking details and handling small online assignments.",
    },
    {
      name: "Surveys & Research",
      slug: "surveys-research",
      description:
        "Share opinions, answer research questions and participate in consumer studies conducted online.",
    },
    {
      name: "Content & Social Tasks",
      slug: "content-social-tasks",
      description:
        "Help with simple content and social media activities such as reviewing, organizing and engaging with online content.",
    },
    {
      name: "Testing & Feedback",
      slug: "testing-feedback",
      description:
        "Try websites, apps and digital experiences and provide useful feedback about your experience.",
    },
    {
      name: "Simple Online Assistance",
      slug: "simple-online-assistance",
      description:
        "Handle straightforward online support, information checking, listing and administrative tasks.",
    },
  ];

  return (
    <>
      <div id="categories" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => {
          const Icon = categoryIcons[index];
          const accent = categoryAccents[index];

          // Keep the count tied to the actual dataset.
          const count = getOnlineSimpleJobsByCategory(category.slug).length;

          return (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
              }}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-3xl border ${accent.border} bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl`}
            >
              <Link
                href={`/online-jobs/${category.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`Explore ${category.name}`}
              />

              <div className="flex items-start justify-between gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent.bg} ${accent.icon} transition-all duration-300 ${accent.hover} group-hover:text-white`}
                >
                  <Icon size={25} />
                </div>

                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {Math.round(count / 5)} jobs
                </div>
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {category.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {category.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                Explore jobs
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-slate-50 transition-transform duration-500 group-hover:scale-150" />
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
