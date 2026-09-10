"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight, FiBriefcase, FiFileText } from "react-icons/fi";

export default function QuickActions() {
  const actions = [
    {
      title: "Upload CV",
      description: "Keep your CV ready for opportunities",
      href: "/upload-cv",
      icon: FiFileText,
    },
    {
      title: "Work Benefits",
      description: "Explore benefits available to workers",
      href: "/work-benefits",
      icon: FiBriefcase,
    },
  ];

  return (
    <section className="px-4 py-5 sm:px-6">
      <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={action.href}
                className="group relative flex min-h-21.5 items-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40"
              >
                {/* Animated background glow */}
                <motion.div
                  className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-50"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.45, 0.7, 0.45],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: -5, scale: 1.08 }}
                  className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white"
                >
                  <Icon size={21} />
                </motion.div>

                {/* Text */}
                <div className="relative ml-3.5 min-w-0">
                  <h3 className="text-sm font-bold text-slate-900 sm:text-[15px]">
                    {action.title}
                  </h3>

                  <p className="mt-0.5 text-xs leading-5 text-slate-500">
                    {action.description}
                  </p>
                </div>

                {/* Arrow */}
                <motion.div
                  whileHover={{ x: 3, y: -3 }}
                  className="relative ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600"
                >
                  <FiArrowUpRight size={16} />
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
