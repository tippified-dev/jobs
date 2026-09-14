"use client";

import Banner320x50 from "@/components/ads/Banner320x50";
import NativeBannerAd from "@/components/ads/NativeBannerAd";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  FiArrowLeft,
  FiBriefcase,
  FiCheck,
  FiChevronRight,
  FiFileText,
  FiLoader,
  FiMapPin,
  FiUploadCloud,
  FiX,
} from "react-icons/fi";

export type CountryJob = {
  id: string;
  slug: string;
  company: string;
  location: string;
  position: string;
  status: "active";
};

type CountryJobsClientProps = {
  country: string;
  jobs: CountryJob[];
};

export default function CountryJobsClient({
  country,
  jobs,
}: CountryJobsClientProps) {
  const router = useRouter();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Stores a DOM reference for every job card.
  const jobRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [sending, setSending] = useState(false);
  const [completedJobs, setCompletedJobs] = useState<number[]>([]);
  const [sendComplete, setSendComplete] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [cvAlreadySent, setCvAlreadySent] = useState(false);

  const countryName = country
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  /*
   * Automatically close the success modal after 4.5 seconds.
   */
  useEffect(() => {
    if (!showSuccessModal) return;

    const timer = setTimeout(() => {
      setShowSuccessModal(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, [showSuccessModal]);

  /*
   * Handle CV selection.
   */
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (cvAlreadySent || sending) return;

    const file = event.target.files?.[0];

    if (!file) return;

    setSelectedFile(file);
    setCompletedJobs([]);
    setSendComplete(false);
  };

  /*
   * Open the hidden file input.
   */
  const handleUploadClick = () => {
    if (cvAlreadySent || sending) return;

    fileInputRef.current?.click();
  };

  /*
   * Scroll to a particular job card.
   */
  const scrollToJob = (index: number) => {
    const jobElement = jobRefs.current[index];

    if (!jobElement) return;

    const stickyOffset = 110;

    const elementTop = jobElement.getBoundingClientRect().top + window.scrollY;

    const targetPosition = Math.max(elementTop - stickyOffset, 0);

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  /*
   * Current CV workflow.
   *
   * NOTE:
   * This currently provides the visual application flow only.
   * Actual CV uploading/submission will be connected to the
   * backend later.
   */
  const handleSendCV = async () => {
    if (!selectedFile || !jobs.length || sending || cvAlreadySent) {
      return;
    }

    setSending(true);
    setSendComplete(false);
    setCompletedJobs([]);

    for (let index = 0; index < jobs.length; index++) {
      scrollToJob(index);

      // Allow the user to see the current job.
      await new Promise((resolve) => setTimeout(resolve, 900));

      setCompletedJobs((previous) => [...previous, index]);

      // Allow the check animation to be visible.
      await new Promise((resolve) => setTimeout(resolve, 350));
    }

    setSending(false);
    setSendComplete(true);
    setCvAlreadySent(true);
    setShowSuccessModal(true);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* =====================================================
          SUCCESS MODAL
      ====================================================== */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/30 px-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 10,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="relative w-full max-w-sm rounded-3xl border border-blue-100 bg-white p-7 text-center shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close"
              >
                <FiX size={17} />
              </button>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.1,
                  type: "spring",
                  stiffness: 280,
                  damping: 15,
                }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20"
              >
                <FiCheck size={30} />
              </motion.div>

              <h2 className="mt-5 text-xl font-bold text-slate-900">CV sent</h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Your CV has been processed for the displayed opportunities.
              </p>

              <div className="mt-5 h-1 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{
                    duration: 4.5,
                    ease: "linear",
                  }}
                  className="h-full rounded-full bg-blue-600"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          STICKY CV ACTION BAR
      ====================================================== */}
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
              aria-label="Go back"
            >
              <FiArrowLeft size={18} />
            </button>

            <div className="min-w-0">
              <p className="text-sm font-bold text-slate-900">
                Apply to these jobs
              </p>

              <p className="truncate text-xs text-slate-500">
                {selectedFile ? selectedFile.name : "Upload your CV to apply"}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />

            <button
              type="button"
              onClick={handleUploadClick}
              disabled={sending || cvAlreadySent}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4"
            >
              <FiUploadCloud size={17} />

              <span className="hidden sm:inline">
                {cvAlreadySent ? "CV Submitted" : "Upload CV"}
              </span>
            </button>

            <button
              type="button"
              onClick={handleSendCV}
              disabled={
                !selectedFile || !jobs.length || sending || cvAlreadySent
              }
              className={`inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition sm:px-4 ${
                cvAlreadySent
                  ? "cursor-not-allowed bg-slate-400"
                  : "bg-blue-600 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              }`}
            >
              {cvAlreadySent ? (
                <FiCheck size={17} />
              ) : sending ? (
                <FiLoader className="animate-spin" size={17} />
              ) : (
                <FiFileText size={17} />
              )}

              <span className="hidden sm:inline">
                {cvAlreadySent ? "CV Sent" : sending ? "Sending..." : "Send CV"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          PAGE CONTENT
      ====================================================== */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Global Jobs Live
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Jobs in {countryName}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Explore available job opportunities from companies hiring in{" "}
            {countryName}.
          </p>
        </div>

        {/* Ads */}
        <div className="mt-8">
          <Banner320x50 />
        </div>

        <div className="mt-5">
          <NativeBannerAd />
        </div>

        {/* ===================================================
            SELECTED CV
        ==================================================== */}
        <AnimatePresence>
          {selectedFile && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              className="mx-auto mt-8 max-w-2xl"
            >
              <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FiFileText size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-900">
                    CV selected
                  </p>

                  <p className="mt-0.5 truncate text-xs text-slate-500">
                    {selectedFile.name}
                  </p>
                </div>

                <span className="shrink-0 text-xs font-semibold text-blue-600">
                  {cvAlreadySent ? "Submitted" : "Ready"}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===================================================
            COMPLETED MESSAGE
        ==================================================== */}
        <AnimatePresence>
          {sendComplete && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              className="mx-auto mt-8 max-w-2xl rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-sm"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 15,
                }}
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white"
              >
                <FiCheck size={28} />
              </motion.div>

              <h2 className="mt-4 text-lg font-bold text-slate-900">
                CV processed
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Your CV has been processed for all displayed job listings.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===================================================
            JOBS
        ==================================================== */}
        <section className="mt-10">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Available Jobs
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Browse verified opportunities in {countryName}.
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-600">
              <FiBriefcase size={14} />
              {jobs.length} {jobs.length === 1 ? "job" : "jobs"}
            </span>
          </div>

          {jobs.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <FiBriefcase size={25} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                No jobs available yet
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                We are currently adding verified opportunities in {countryName}.
                Please check back soon for new listings.
              </p>

              <Link
                href="/"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Global Jobs
                <FiChevronRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job, index) => {
                const isCompleted = completedJobs.includes(index);

                return (
                  <motion.div
                    key={job.id}
                    ref={(element) => {
                      jobRefs.current[index] = element;
                    }}
                    layout
                    whileHover={{
                      y: -3,
                    }}
                    className={`relative overflow-hidden rounded-2xl border bg-white p-5 shadow-sm transition ${
                      isCompleted
                        ? "border-blue-300"
                        : "border-slate-200 hover:border-blue-200 hover:shadow-md"
                    }`}
                  >
                    {/* Completed overlay */}
                    <AnimatePresence>
                      {isCompleted && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 z-10 flex items-center justify-center bg-white/90 backdrop-blur-[2px]"
                        >
                          <motion.div
                            initial={{
                              scale: 0,
                              rotate: -20,
                            }}
                            animate={{
                              scale: 1,
                              rotate: 0,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 15,
                            }}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg"
                          >
                            <FiCheck size={25} />
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Job header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <Link
                          href={`/jobs/${job.slug}`}
                          className="font-bold leading-6 text-slate-900 transition hover:text-blue-600"
                        >
                          {job.position}
                        </Link>

                        <p className="mt-1 text-sm font-medium text-blue-600">
                          {job.company}
                        </p>
                      </div>

                      <span className="shrink-0 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold capitalize text-green-600">
                        {job.status}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                      <FiMapPin size={15} className="shrink-0" />

                      <span className="truncate">{job.location}</span>
                    </div>

                    {/* Work mode */}
                    <div className="mt-4">
                      <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                        Remote
                      </span>
                    </div>

                    {/* View job */}
                    <Link
                      href={`/jobs/${job.slug}`}
                      className="mt-5 flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <span>View job details</span>

                      <FiChevronRight size={17} />
                    </Link>

                    {/* Application progress */}
                    <div className="mt-5">
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          initial={{
                            width: "0%",
                          }}
                          animate={{
                            width: isCompleted ? "100%" : "0%",
                          }}
                          transition={{
                            duration: 0.5,
                          }}
                          className="h-full rounded-full bg-blue-600"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
