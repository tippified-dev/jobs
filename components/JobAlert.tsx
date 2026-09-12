"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FiBell } from "react-icons/fi";
export default function JobAlert() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/job-alerts");
  };
  return (
    <motion.button
      type="button"
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.85, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 sm:bottom-6 sm:right-6"
      aria-label="Open Job Alerts"
    >
      <FiBell size={18} />
      <span>Job Alerts</span>
    </motion.button>
  );
}
