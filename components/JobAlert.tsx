"use client";

import { AnimatePresence, motion } from "framer-motion";
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
  const [isOpen, setIsOpen] = useState(false);
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

  const handleClose = () => {
    setIsOpen(false);
    setCategoryOpen(false);
  };

  return (
    <>
      {/* Floating launcher */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            type="button"
            onClick={() => setIsOpen(true)}
            initial={{ opacity: 0, scale: 0.85, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, x: 20 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="fixed bottom-5 right-4 z-80 flex items-center gap-2.5 rounded-full border border-blue-500/20 bg-blue-600 px-4 py-3 text-white shadow-[0_12px_35px_-10px_rgba(37,99,235,0.55)] sm:bottom-6 sm:right-6"
            aria-label="Set up job alerts"
          >
            <motion.span
              animate={{
                rotate: [0, -8, 8, -5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="flex"
            >
              <FiBell size={17} />
            </motion.span>

            <span className="text-xs font-bold sm:text-sm">Job Alerts</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Alert panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 24,
              scale: 0.96,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="fixed bottom-4 right-4 z-80 w-[calc(100vw-2rem)] max-w-97.5 overflow-visible rounded-3xl border border-slate-200 bg-white shadow-[0_25px_80px_-25px_rgba(15,23,42,0.35)] sm:bottom-6 sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  aria-label="Go back"
                >
                  <FiArrowLeft size={16} />
                </button>

                <div>
                  <p className="text-sm font-black text-slate-950">
                    Job Alerts
                  </p>

                  <p className="text-[11px] text-slate-400">
                    Never miss a new opportunity
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close job alerts"
              >
                <FiX size={17} />
              </button>
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
                  className="p-5"
                >
                  {/* Intro */}
                  <div className="mb-5 rounded-2xl bg-blue-50 p-4">
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
                        type="text"
                        inputMode="email"
                        autoComplete="email"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                          setSubmitted(false);
                        }}
                        placeholder="you@example.com"
                        className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div className="mt-4">
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

                    {/* Custom select */}
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
                            className="absolute left-0 right-0 top-full z-100 max-h-56 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_20px_45px_-15px_rgba(15,23,42,0.25)]"
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
                    className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
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
                  className="px-5 py-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 15,
                    }}
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600"
                  >
                    <FiCheck size={25} />
                  </motion.div>

                  <h3 className="mt-5 text-lg font-black text-slate-950">
                    You are all set
                  </h3>

                  <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-slate-500">
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
                    }}
                    className="mt-6 text-xs font-bold text-blue-600 transition hover:text-blue-700"
                  >
                    Create another alert
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
