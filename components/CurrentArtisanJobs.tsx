"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  FiArrowRight,
  FiBriefcase,
  FiChevronDown,
  FiMapPin,
  FiUsers,
} from "react-icons/fi";

type ArtisanCategory = {
  id: string;
  name: string;
  slug: string;
  country: string;
  description: string | null;
  opportunityCount: number;
};

interface CurrentArtisanJobsProps {
  categories: ArtisanCategory[];
  location?: string;
}

export default function CurrentArtisanJobs({
  categories,
  location = "Nigeria",
}: CurrentArtisanJobsProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = categories.slice(0, 10);
  const remainingCategories = categories.slice(10);
  const remainingCount = remainingCategories.length;

  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-blue-600">
            <FiMapPin className="text-base" />
            <span>{location}</span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Current artisan opportunities
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Explore local opportunities and service-based work available in your
            location.
          </p>
        </div>

        {/* Empty state */}
        {categories.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
            <FiBriefcase className="mx-auto mb-3 text-3xl text-gray-400" />

            <h3 className="text-lg font-semibold text-gray-900">
              No artisan opportunities available
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              We are currently adding opportunities for this location.
            </p>
          </div>
        ) : (
          <>
            {/* First 10 categories */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleCategories.map((category, index) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  location={location}
                  index={index}
                />
              ))}
            </div>

            {/* Remaining categories */}
            <AnimatePresence initial={false}>
              {showAll && remainingCount > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-3">
                    {remainingCategories.map((category, index) => (
                      <CategoryCard
                        key={category.id}
                        category={category}
                        location={location}
                        index={index + 10}
                        expanded
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expand / Collapse */}
            {remainingCount > 0 && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAll((prev) => !prev)}
                  aria-expanded={showAll}
                  className="group inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span>
                    {showAll ? "Show fewer" : `View ${remainingCount} more`}
                  </span>

                  <motion.span
                    animate={{
                      rotate: showAll ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-blue-100"
                  >
                    <FiChevronDown className="text-base" />
                  </motion.span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

/* ----------------------------------------
   Category Card
----------------------------------------- */

function CategoryCard({
  category,
  location,
  index,
  expanded = false,
}: {
  category: ArtisanCategory;
  location: string;
  index: number;
  expanded?: boolean;
}) {
  return (
    <motion.div
      initial={
        expanded
          ? {
              opacity: 0,
              y: 15,
            }
          : {
              opacity: 0,
              y: 15,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
        delay: expanded
          ? Math.min((index - 10) * 0.035, 0.25)
          : Math.min(index * 0.03, 0.3),
      }}
    >
      <Link href={`/artisan/${category.slug}`} className="group block h-full">
        <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
          {/* Icon */}
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white">
            <FiBriefcase className="text-xl" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-base font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
              {category.name}
            </h3>

            <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-500">
              {category.description ||
                `Find ${category.name.toLowerCase()} opportunities in ${location}.`}
            </p>
          </div>

          {/* Bottom */}
          <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
            <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
              <FiUsers className="text-sm" />

              <span>{category.opportunityCount} opportunities</span>
            </div>

            <span className="flex items-center gap-1 text-sm font-semibold text-blue-600">
              Explore
              <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
