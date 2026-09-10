"use client";

import { motion } from "framer-motion";
import { FiInfo } from "react-icons/fi";

export default function AdNotice() {
  return (
    <section className="px-4 py-2 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mx-auto flex max-w-3xl items-center justify-center gap-2.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-center shadow-sm"
      >
        <motion.span
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex shrink-0 text-blue-600"
        >
          <FiInfo size={15} />
        </motion.span>

        <p className="text-xs leading-5 text-slate-500 sm:text-sm">
          <span className="font-semibold text-slate-800">
            Keeping Jobs4all free.
          </span>{" "}
          We display a small number of adverts to support the platform.
        </p>
      </motion.div>
    </section>
  );
}
