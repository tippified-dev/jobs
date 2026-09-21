"use client";

import Banner320x50 from "@/components/ads/Banner320x50";
import NativeBannerAd from "@/components/ads/NativeBannerAd";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBriefcase,
  FiClock,
  FiDollarSign,
  FiGlobe,
  FiHome,
  FiLayers,
  FiSearch,
  FiTrendingUp,
  FiUsers,
  FiWifi,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiHome,
    title: "Work From Anywhere",
    description:
      "Remote jobs can allow eligible workers to perform their responsibilities from home or another suitable location without commuting to a traditional office every day.",
  },
  {
    icon: FiClock,
    title: "Greater Flexibility",
    description:
      "Some remote and online jobs offer flexible schedules, making them useful for people balancing work with education, family responsibilities or another source of income.",
  },
  {
    icon: FiDollarSign,
    title: "Additional Income",
    description:
      "A side job can provide another potential source of income alongside your main employment, business or other professional activities.",
  },
  {
    icon: FiGlobe,
    title: "Access Global Opportunities",
    description:
      "Online work can connect qualified workers with employers and opportunities beyond the local job market, depending on location and employer requirements.",
  },
  {
    icon: FiTrendingUp,
    title: "Build Your Experience",
    description:
      "Taking on suitable work can help you develop practical experience, strengthen your CV and build skills that may support future career opportunities.",
  },
  {
    icon: FiLayers,
    title: "Explore Different Careers",
    description:
      "Job seekers can explore opportunities across multiple categories and discover roles that match their existing skills or areas they want to develop.",
  },
];

const platformBenefits = [
  "Explore remote and online job opportunities from different categories.",
  "Find opportunities for skilled and entry-level workers.",
  "Discover side jobs that can complement your existing work.",
  "Explore data entry, customer service, technology, writing, administrative and other online roles.",
  "Search opportunities by location and job category.",
  "Keep your CV ready so you can respond quickly to suitable opportunities.",
  "Discover opportunities without limiting your search to one type of employment.",
  "Build awareness of different ways to earn through legitimate work opportunities.",
];

export default function WorkBenefitsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
          >
            <FiArrowLeft size={17} />
            Back to Global Jobs Live
          </Link>

          <Link
            href="/location"
            className="hidden items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 sm:flex"
          >
            Find Jobs
            <FiArrowRight size={15} />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -right-40 -top-40 h-105 w-105 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-80 w-[320px] rounded-full bg-sky-50 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 pb-14 pt-14 text-center sm:px-6 sm:pb-20 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-200"
          >
            <FiBriefcase size={29} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mx-auto mt-6 max-w-4xl text-3xl font-black tracking-tight text-slate-950 sm:text-5xl"
          >
            The Benefits of Remote Work, Side Jobs and Online Opportunities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Learn how remote employment, flexible online work and side jobs can
            create opportunities for professional growth, additional income,
            flexibility and access to a wider job market.
          </motion.p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/location"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
            >
              <FiSearch size={17} />
              Explore Jobs
            </Link>

            <Link
              href="/upload-cv"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600"
            >
              <FiBriefcase size={17} />
              Upload Your CV
            </Link>
          </div>
        </div>
      </section>
      <NativeBannerAd />

      {/* Main benefits */}
      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Why work remotely?
            </p>

            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              More ways to work, earn and grow
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              The right job depends on your skills, goals, availability and
              circumstances. Remote and online work can provide additional
              options for people who want to explore different ways of working.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  key={benefit.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-blue-100/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {benefit.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
      <Banner320x50 />

      {/* Side jobs */}
      <section className="border-y border-slate-200 bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FiWifi size={23} />
            </div>

            <h2 className="mt-5 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Why consider a side job?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              A side job can give you another way to use your skills outside
              your primary occupation. Depending on the role, it may be possible
              to work part-time, remotely or according to a flexible schedule.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Side jobs can also help workers gain practical experience, develop
              new skills and explore an industry before deciding whether they
              want to pursue it more seriously.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-6 sm:p-8">
            <h3 className="text-xl font-black text-slate-950">
              Potential advantages of side work
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Create another potential source of income.",
                "Develop practical skills through additional work.",
                "Gain experience that can strengthen your professional profile.",
                "Explore industries outside your primary occupation.",
                "Use spare time productively when a suitable opportunity is available.",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <span className="text-[11px]">✓</span>
                  </div>

                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Jobs Live */}
      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white shadow-2xl sm:px-10 sm:py-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                  <FiGlobe size={23} />
                </div>

                <h2 className="mt-5 text-2xl font-black tracking-tight sm:text-3xl">
                  What Global Jobs Live can help you discover
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  Global Jobs Live is designed to help people discover job
                  opportunities across different categories, experience levels
                  and locations. Instead of limiting your search to one type of
                  work, you can explore different opportunities and decide which
                  ones match your skills, goals and availability.
                </p>

                <Link
                  href="/location"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500"
                >
                  Start Exploring
                  <FiArrowRight size={16} />
                </Link>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="space-y-4">
                  {platformBenefits.map((benefit) => (
                    <div key={benefit} className="flex gap-3">
                      <FiCheckIcon />

                      <p className="text-sm leading-6 text-slate-300">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-slate-200 bg-white px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FiUsers size={22} />
          </div>

          <h2 className="mt-5 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            Opportunities for different types of job seekers
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            Not every worker has the same experience, qualifications or career
            goals. Global Jobs Live is designed around a broad range of job
            categories, including professional roles, entry-level opportunities,
            online work, data entry, customer service, administrative work,
            technology roles and other opportunities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              "Remote Jobs",
              "Online Jobs",
              "Side Jobs",
              "Data Entry",
              "Technology",
              "Customer Service",
              "Administrative",
              "Entry Level",
              "Freelance Work",
              "Skilled Jobs",
            ].map((category) => (
              <span
                key={category}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 px-4 py-14 text-center text-white sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
            Your next opportunity could start with a search
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
            Explore available opportunities, learn about different types of work
            and keep your CV ready for positions that match your skills and
            goals.
          </p>

          <Link
            href="/location"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition hover:bg-slate-50"
          >
            Find Jobs
            <FiArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function FiCheckIcon() {
  return (
    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white">
      ✓
    </span>
  );
}
