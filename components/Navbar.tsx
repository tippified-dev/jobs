"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const navigationLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Find Jobs",
    href: "/jobs",
  },
  {
    label: "Online Jobs",
    href: "/online-jobs",
  },
  {
    label: "Data Entry",
    href: "/data-entry",
  },
  {
    label: "Side Jobs",
    href: "/side-jobs",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default function Navbar() {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handlePostJob = () => {
    setIsMenuOpen(false);

    // Give the Adsterra popunder script a moment
    // to respond to the user's click.
    setTimeout(() => {
      router.push("/post-a-job");
    }, 150);
  };

  return (
    <header className="relative z-50 border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="relative z-50 text-2xl font-bold tracking-tight text-slate-900"
        >
          Jobs<span className="text-blue-600">4all</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50"
          >
            Sign In
          </button>

          <button
            type="button"
            onClick={handlePostJob}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Post a Job
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition-colors duration-200 hover:bg-slate-50 hover:text-slate-950 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <div className="relative flex h-5 w-5 items-center justify-center">
            {/* Top line */}
            <motion.span
              animate={
                isMenuOpen
                  ? {
                      rotate: 45,
                      y: 0,
                    }
                  : {
                      rotate: 0,
                      y: -6,
                    }
              }
              transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute h-0.5 w-5 rounded-full bg-current"
            />

            {/* Middle line */}
            <motion.span
              animate={{
                opacity: isMenuOpen ? 0 : 1,
                scaleX: isMenuOpen ? 0.5 : 1,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="absolute h-0.5 w-5 rounded-full bg-current"
            />

            {/* Bottom line */}
            <motion.span
              animate={
                isMenuOpen
                  ? {
                      rotate: -45,
                      y: 0,
                    }
                  : {
                      rotate: 0,
                      y: 6,
                    }
              }
              transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute h-0.5 w-5 rounded-full bg-current"
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              height: {
                duration: 0.35,
                ease: [0.4, 0, 0.2, 1],
              },
              opacity: {
                duration: 0.2,
                ease: "easeOut",
              },
            }}
            className="overflow-hidden border-t border-slate-100 bg-white md:hidden"
          >
            <div className="px-6 pb-6 pt-3">
              {/* Mobile Links */}
              <nav className="flex flex-col">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{
                      opacity: 0,
                      x: -12,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -8,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.045,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between border-b border-slate-100 py-4 text-base font-semibold text-slate-800 transition-colors duration-200 hover:text-blue-600"
                    >
                      <span>{link.label}</span>

                      <FiArrowUpRight size={17} className="text-slate-300" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Actions */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 8,
                }}
                transition={{
                  duration: 0.25,
                  delay: navigationLinks.length * 0.045 + 0.05,
                }}
                className="mt-5 grid grid-cols-2 gap-3"
              >
                <a
                  href="https://www.profitableratecpmnetwork.com/csdx6m0rsd?key=ebbcdcae066780c6b5d53d9f113bb483"
                  rel="noopener noreferrer"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Signin
                </a>

                <button
                  type="button"
                  onClick={handlePostJob}
                  className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Post a Job
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
