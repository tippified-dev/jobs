"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMapPin,
  FiTwitter,
} from "react-icons/fi";

const jobLinks = [
  { label: "Find Jobs", href: "/jobs" },
  { label: "Online Jobs", href: "/online-jobs" },
  { label: "Data Entry Jobs", href: "/data-entry" },
  { label: "Side Jobs", href: "/side-jobs" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Post a Job", href: "/post-a-job" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: FiFacebook,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FiInstagram,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FiLinkedin,
  },
  {
    label: "Twitter",
    href: "#",
    icon: FiTwitter,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center text-2xl font-bold tracking-tight text-slate-950"
            >
              Jobs<span className="text-blue-600">4all</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              Discover better opportunities, build your career and find work
              that fits your life. Explore online, remote, part-time, freelance
              and flexible jobs.
            </p>

            {/* Location */}
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <FiMapPin className="text-blue-600" size={16} />
              <span>Connecting talent worldwide</span>
            </div>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Icon size={17} />
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Jobs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-950">
              Find Jobs
            </h3>

            <ul className="mt-5 space-y-3.5">
              {jobLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-blue-600"
                  >
                    {link.label}

                    <FiArrowUpRight
                      size={13}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-950">
              Jobs4all
            </h3>

            <ul className="mt-5 space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-blue-600"
                  >
                    {link.label}

                    <FiArrowUpRight
                      size={13}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Employer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <FiBriefcase size={18} />
              </div>

              <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-950">
                Hiring talent?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Connect with people looking for their next opportunity.
              </p>

              <Link
                href="/post-a-job"
                className="mt-5 flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
              >
                Post a Job
                <FiArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Jobs4all. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <Link
              href="/privacy"
              className="transition-colors hover:text-slate-700"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-slate-700"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-slate-700"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
