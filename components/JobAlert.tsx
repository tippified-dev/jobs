"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FiArrowLeft,
  FiBell,
  FiCheck,
  FiChevronDown,
  FiMail,
  FiX,
} from "react-icons/fi";
const categories = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
  "Graphic Designer",
  "Digital Marketer",
  "SEO Specialist",
  "Content Writer",
  "Data Analyst",
  "Project Manager",
  "Virtual Assistant",
  "Data Entry",
  "Customer Support",
  "Transcription",
  "Social Media Manager",
  "Sales Representative",
  "Cashier",
  "Electrician",
  "Plumber",
  "Mechanic",
  "Carpenter",
  "Makeup Artist",
  "Hair Stylist",
  "Chef",
  "Waiter",
  "Gym Instructor",
];
export default function JobAlert() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const toggleCategory = (category: string) => {
    setSelectedCategories((current) => {
      if (current.includes(category)) {
        return current.filter((item) => item !== category);
      }
      if (current.length >= 4) {
        return current;
      }
      return [...current, category];
    });
    setSubmitted(false);
  };
  const removeCategory = (category: string) => {
    setSelectedCategories((current) =>
      current.filter((item) => item !== category),
    );
    setSubmitted(false);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || selectedCategories.length < 2) {
      return;
    }
    if (selectedCategories.length > 4) {
      return;
    }
    setSubmitted(true);
  };
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Page header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => router.back()}
            className="mb-7 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
          >
            <FiArrowLeft size={17} />
            Go Back
          </button>
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FiBell size={21} />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Job Alerts
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Stay informed when new opportunities matching your interests
              become available. Choose the job categories you want to follow and
              we will notify you by email.
            </p>
          </div>
        </div>
      </section>
      {/* Main content */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_520px] lg:items-start">
          {/* Information */}
          <div className="max-w-2xl">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">
                Never miss a relevant opportunity
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                Jobs4all covers opportunities across different industries,
                including skilled jobs, online jobs, data entry, customer
                support, creative roles, and more.
              </p>
              <div className="mt-7 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                    1
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Enter your email
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Tell us where you want to receive your job alerts.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                    2
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Choose your categories
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Select between two and four job categories that interest
                      you.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                    3
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Receive new opportunities
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Get notified when matching jobs become available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Alert form */}
          <div className="overflow-visible rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-5 sm:px-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FiBell size={18} />
                </div>
                <div>
                  <h2 className="text-base font-black text-slate-950">
                    Create a job alert
                  </h2>
                  <p className="text-xs text-slate-400">
                    Choose the opportunities you want to follow
                  </p>
                </div>
              </div>
            </div>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 sm:p-7"
                >
                  {/* Intro */}
                  <div className="mb-6 rounded-2xl bg-blue-50 p-4">
                    <div className="flex gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                        <FiBell size={17} />
                      </div>
                      <p className="text-xs leading-5 text-slate-600">
                        Enter your email and we will notify you when new jobs
                        matching your selected categories are available.
                      </p>
                    </div>
                  </div>
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="job-alert-email"
                      className="mb-2 block text-xs font-bold text-slate-700"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <FiMail
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <input
                        id="job-alert-email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                          setSubmitted(false);
                        }}
                        placeholder="you@example.com"
                        className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  </div>
                  {/* Category */}
                  <div className="mt-5">
                    <div className="mb-2 flex items-center justify-between">
                      <label className="block text-xs font-bold text-slate-700">
                        Job categories
                      </label>
                      <span
                        className={`text-[10px] font-semibold ${
                          selectedCategories.length >= 2
                            ? "text-blue-600"
                            : "text-slate-400"
                        }`}
                      >
                        {selectedCategories.length}/4 selected
                      </span>
                    </div>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setCategoryOpen((value) => !value)}
                        className="flex min-h-11 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-left transition hover:border-slate-300 focus:border-blue-500"
                        aria-expanded={categoryOpen}
                      >
                        <span
                          className={
                            selectedCategories.length
                              ? "text-sm font-medium text-slate-800"
                              : "text-sm text-slate-400"
                          }
                        >
                          {selectedCategories.length
                            ? `${selectedCategories.length} categories selected`
                            : "Select at least 2 categories"}
                        </span>
                        <motion.span
                          animate={{
                            rotate: categoryOpen ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          className="text-slate-400"
                        >
                          <FiChevronDown size={17} />
                        </motion.span>
                      </button>
                      {/* Dropdown */}
                      <AnimatePresence>
                        {categoryOpen && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: -5,
                              scale: 0.98,
                            }}
                            animate={{
                              opacity: 1,
                              y: 4,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              y: -5,
                              scale: 0.98,
                            }}
                            transition={{ duration: 0.18 }}
                            className="absolute left-0 right-0 top-full z-50 max-h-56 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_20px_45px_-15px_rgba(15,23,42,0.25)]"
                          >
                            {categories.map((category) => {
                              const selected =
                                selectedCategories.includes(category);
                              const disabled =
                                !selected && selectedCategories.length >= 4;
                              return (
                                <button
                                  key={category}
                                  type="button"
                                  disabled={disabled}
                                  onClick={() => toggleCategory(category)}
                                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs font-medium transition ${
                                    selected
                                      ? "bg-blue-50 text-blue-700"
                                      : disabled
                                        ? "cursor-not-allowed text-slate-300"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                  }`}
                                >
                                  <span>{category}</span>
                                  <AnimatePresence>
                                    {selected && (
                                      <motion.span
                                        initial={{
                                          opacity: 0,
                                          scale: 0.6,
                                        }}
                                        animate={{
                                          opacity: 1,
                                          scale: 1,
                                        }}
                                        exit={{
                                          opacity: 0,
                                          scale: 0.6,
                                        }}
                                        className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white"
                                      >
                                        <FiCheck size={12} />
                                      </motion.span>
                                    )}
                                  </AnimatePresence>
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {/* Selected categories */}
                    <AnimatePresence>
                      {selectedCategories.length > 0 && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          className="mt-2 flex flex-wrap gap-1.5 overflow-hidden"
                        >
                          {selectedCategories.map((category) => (
                            <motion.button
                              key={category}
                              type="button"
                              initial={{
                                opacity: 0,
                                scale: 0.9,
                              }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                              }}
                              whileTap={{
                                scale: 0.95,
                              }}
                              onClick={() => removeCategory(category)}
                              className="flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-700 transition hover:bg-blue-100"
                            >
                              {category}
                              <FiX size={11} />
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <p className="mt-2 text-[10px] leading-4 text-slate-400">
                      Select between 2 and 4 categories.
                    </p>
                  </div>
                  {/* Validation */}
                  {email.trim() && selectedCategories.length === 1 && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 text-xs font-medium text-amber-600"
                    >
                      Please select at least one more category.
                    </motion.p>
                  )}
                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{
                      y: -1,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    disabled={
                      !email.trim() ||
                      selectedCategories.length < 2 ||
                      selectedCategories.length > 4
                    }
                    className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
                  >
                    <FiBell size={16} />
                    Activate Job Alerts
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{
                    opacity: 0,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.97,
                  }}
                  className="px-6 py-14 text-center sm:px-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 15,
                    }}
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600"
                  >
                    <FiCheck size={27} />
                  </motion.div>
                  <h3 className="mt-5 text-xl font-black text-slate-950">
                    You are all set
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
                    We will send new job alerts to{" "}
                    <span className="font-semibold text-slate-700">
                      {email}
                    </span>{" "}
                    based on your selected categories.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setEmail("");
                      setSelectedCategories([]);
                      setCategoryOpen(false);
                    }}
                    className="mt-7 text-sm font-bold text-blue-600 transition hover:text-blue-700"
                  >
                    Create another alert
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}
