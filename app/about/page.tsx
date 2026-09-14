"use client";

import Banner468x60 from "@/components/ads/Banner320x50";
import NativeBannerAd from "@/components/ads/NativeBannerAd";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCheckCircle,
  FiGlobe,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const trustPoints = [
  {
    icon: FiShield,
    title: "Verified Job Listings",
    description:
      "We focus on authentic opportunities from legitimate employers, companies and hiring platforms so job seekers can search with greater confidence.",
  },
  {
    icon: FiGlobe,
    title: "Jobs From Around The World",
    description:
      "Discover remote and online opportunities from Nigeria and across the global job market, giving you access to work beyond geographical boundaries.",
  },
  {
    icon: FiBriefcase,
    title: "Thousands Of Opportunities",
    description:
      "From remote careers and online jobs to side jobs and flexible opportunities, Globaljobslive brings different types of work opportunities together in one place.",
  },
  {
    icon: FiUsers,
    title: "Built For Job Seekers",
    description:
      "Globaljobslive is designed to make discovering opportunities easier, faster and more accessible for people looking to build better careers and earn online.",
  },
];

const stats = [
  {
    value: "200,000+",
    label: "People helped find jobs",
  },
  {
    value: "1000s",
    label: "Opportunities published",
  },
  {
    value: "Global",
    label: "Job opportunities",
  },
];

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <section
        id="about"
        className="relative overflow-hidden border-t border-slate-100 bg-white py-20 sm:py-24 lg:py-28"
        aria-labelledby="about-heading"
      >
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-slate-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Intro */}
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600"
            >
              <FiCheckCircle size={14} />
              About Global Jobs Live
            </motion.div>

            <motion.h1
              id="about-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
            >
              Connecting people with
              <span className="text-blue-600"> opportunities worldwide.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 text-lg leading-8 text-slate-600"
            >
              Global Jobs Live is a global job discovery platform built to make
              finding legitimate remote jobs, online jobs, flexible work,
              freelance opportunities and other employment opportunities easier.
              We bring opportunities from different countries, industries and
              work categories together in one place so job seekers can spend
              less time searching and more time discovering work that fits their
              goals.
            </motion.p>
          </div>

          <Banner468x60 />

          {/* Main story */}
          <div className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            {/* Story card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white sm:p-10 lg:p-12"
            >
              <div className="absolute right-20 top-20 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl" />

              <div className="relative">
                <span className="text-sm font-bold uppercase tracking-widest text-blue-400">
                  Our mission
                </span>

                <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                  Finding the right job should not feel like searching through
                  thousands of websites.
                </h2>

                <div className="mt-6 space-y-5 text-base leading-7 text-slate-300">
                  <p>
                    Finding work online can be difficult. Job opportunities are
                    spread across company career pages, recruitment websites,
                    freelance platforms, job boards and other sources. For job
                    seekers, keeping track of all these opportunities can take
                    time and make the search more complicated than it needs to
                    be.
                  </p>

                  <p>
                    Global Jobs Live was created to make that search simpler. We
                    bring different types of employment and income opportunities
                    together in one place, including remote jobs, online jobs,
                    work-from-home opportunities, freelance work, side jobs and
                    flexible work.
                  </p>

                  <p>
                    Whether you are looking for your first job, changing
                    careers, searching for remote work, developing a new skill
                    or looking for an additional source of income, Global Jobs
                    Live helps you discover opportunities that may match your
                    skills, experience and preferences.
                  </p>

                  <p>
                    Our mission is simple:{" "}
                    <strong className="text-white">
                      make job discovery more accessible to people everywhere.
                    </strong>
                  </p>
                </div>

                <motion.a
                  href="#job-categories"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white"
                >
                  Find your next opportunity
                  <FiArrowUpRight className="text-blue-400" />
                </motion.a>
              </div>
            </motion.div>

            {/* Stats / Platform highlights */}
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col justify-center rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-shadow duration-300 hover:shadow-lg sm:p-8"
                >
                  <span className="text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl">
                    {stat.value}
                  </span>

                  <span className="mt-2 text-sm font-semibold text-slate-600">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What We Offer */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                What we offer
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A simpler way to discover work.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                We believe job seekers should have an easier way to discover
                opportunities without having to search through countless
                websites. Global Jobs Live brings different job categories,
                industries and work arrangements together in one accessible
                platform.
              </p>
            </motion.div>

            <NativeBannerAd />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {trustPoints.map((point, index) => {
                const Icon = point.icon;

                return (
                  <motion.article
                    key={point.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{ y: -6 }}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-950">
                      {point.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {point.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* Global Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-20 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Work without borders
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Discover opportunities wherever you are.
                </h2>
              </div>

              <div className="space-y-4 text-base leading-7 text-slate-600">
                <p>
                  The modern job market is increasingly connected. Companies can
                  hire talent across borders, professionals can work remotely,
                  and people can build careers without being limited to
                  opportunities in their immediate location.
                </p>

                <p>
                  Global Jobs Live makes it easier to explore this changing job
                  market by bringing together opportunities across different
                  locations, industries and work arrangements.
                </p>

                <p>
                  From technology and customer service to administration,
                  creative work, data entry, marketing, finance and other
                  fields, our goal is to help job seekers discover more ways to
                  find meaningful work.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Who We Serve */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Who we serve
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Built for different career goals.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Whether you are starting out, building experience, changing
                careers or looking for more flexibility, Global Jobs Live is
                designed to help you discover opportunities that fit your
                situation.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Job Seekers",
                  description:
                    "Find employment opportunities across different industries, locations and job types.",
                },
                {
                  title: "Remote Workers",
                  description:
                    "Explore remote and work-from-home opportunities that allow you to work from different locations.",
                },
                {
                  title: "Flexible Workers",
                  description:
                    "Discover freelance work, side jobs, online opportunities and other flexible ways to earn.",
                },
              ].map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-shadow duration-300 hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Job Search Disclaimer */}
          <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-slate-950">
              Search responsibly
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Global Jobs Live carefully reviews and verifies employers before
              publishing their job opportunities on our platform. We are
              committed to helping job seekers discover legitimate opportunities
              from credible employers. While we take verification seriously, we
              still encourage applicants to review job details carefully and use
              good judgment when sharing personal information or accepting an
              offer.
            </p>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-16 overflow-hidden rounded-3xl border border-blue-100 bg-blue-50 px-6 py-10 text-center sm:px-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Your next opportunity could be anywhere in the world.
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Explore remote jobs, online jobs, freelance opportunities,
              flexible work, side jobs and other employment opportunities from
              around the world.
            </p>

            <motion.a
              href="#job-categories"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              Explore Jobs
              <FiArrowUpRight size={17} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
