"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
type UserData = {
  name: string;
  email: string;
};
export default function UserRecognition() {
  const router = useRouter();
  const [user] = useState<UserData | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }
    const storedName = localStorage.getItem("jobs4all_user_name");
    const storedEmail = localStorage.getItem("jobs4all_user_email");
    if (!storedName || !storedEmail) {
      return null;
    }
    return {
      name: storedName,
      email: storedEmail,
    };
  });
  if (user) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-20 left-5 z-40 sm:bottom-6 sm:left-6"
      >
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg">
          <p className="text-sm font-semibold text-slate-900">
            Welcome back, {user.name}
          </p>
          <p className="mt-0.5 text-xs text-slate-500">
            Good to see you again.
          </p>
        </div>
      </motion.div>
    );
  }
  return (
    <motion.button
      type="button"
      onClick={() => router.push("/welcome")}
      initial={{ opacity: 0, x: -20, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-20 left-5 z-40 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left shadow-lg transition hover:border-blue-200 hover:shadow-xl sm:bottom-6 sm:left-6"
    >
      <p className="text-sm font-semibold text-slate-900">
        We do not recognize you
      </p>
      <p className="mt-0.5 text-xs font-semibold text-blue-600">
        Enter your email →
      </p>
    </motion.button>
  );
}
