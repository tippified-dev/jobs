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
    value: "2M+",
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
              About Globaljobslive
            </motion.div>

            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
            >
              Connecting people with
              <span className="text-blue-600"> better opportunities.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 text-lg leading-8 text-slate-600"
            >
              Globaljobslive is a job discovery platform built to make finding
              genuine online, remote and flexible work opportunities easier. We
              bring opportunities from across Africa and around the world into
              one simple place where job seekers can discover their next
              opportunity.
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

                <h3 className="mt-5 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                  Finding a job should not feel like searching for a needle in a
                  haystack.
                </h3>

                <div className="mt-6 space-y-5 text-base leading-7 text-slate-300">
                  <p>
                    Every day, thousands of people search for ways to earn,
                    build their careers and find better employment
                    opportunities. Yet the online job market can be
                    overwhelming, with opportunities scattered across different
                    websites and platforms.
                  </p>

                  <p>
                    Globaljobslive was created to make that search easier. We
                    bring online jobs, remote jobs, side jobs, freelance
                    opportunities and other flexible work opportunities together
                    so job seekers can spend less time searching and more time
                    applying for opportunities that match their skills.
                  </p>

                  <p>
                    Our goal is simple:{" "}
                    <strong className="text-white">
                      connect people with legitimate opportunities that can help
                      them move forward.
                    </strong>
                  </p>
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white"
                >
                  Find your next opportunity
                  <FiArrowUpRight className="text-blue-400" />
                </motion.div>
              </div>
            </motion.div>

            {/* Stats */}
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

          {/* Why Job4all */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Why Globaljobslive?
              </span>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A simpler way to discover work.
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                We believe job seekers deserve a better way to discover
                opportunities online. That is why Globaljobslive is built around
                authenticity, accessibility and a wide variety of opportunities.
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

                    <h4 className="mt-5 text-lg font-bold text-slate-950">
                      {point.title}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {point.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-16 overflow-hidden rounded-3xl border border-blue-100 bg-blue-50 px-6 py-10 text-center sm:px-10"
          >
            <h3 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Your next opportunity could be closer than you think.
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Explore online, remote, flexible and side job opportunities
              available through Globaljobslive.
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
