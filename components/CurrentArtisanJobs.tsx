"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiBriefcase, FiMapPin, FiUsers } from "react-icons/fi";

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

        {/* Categories */}
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.03, 0.3),
                }}
              >
                <Link
                  href={`/artisan/${category.slug}`}
                  className="group block h-full"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
                    {/* Icon */}
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
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
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
