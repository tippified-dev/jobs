"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  FiArrowLeft,
  FiCheck,
  FiFileText,
  FiLoader,
  FiUploadCloud,
  FiX,
} from "react-icons/fi";
type DataEntryJob = {
  company: string;
  location: string;
  position: string;
  status: "active";
};
type DataEntryResponse = {
  total: number;
  returned: number;
  jobs: DataEntryJob[];
};
export default function DataEntryPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const jobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [data, setData] = useState<DataEntryResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [sending, setSending] = useState(false);
  const [completedJobs, setCompletedJobs] = useState<number[]>([]);
  const [sendComplete, setSendComplete] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [cvAlreadySent, setCvAlreadySent] = useState(false);
  /*
   * Fetch the randomized 30 data-entry jobs.
   */
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch("/api/data-entry", {
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data entry jobs");
        }
        const result: DataEntryResponse = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
        setError("Unable to load data entry jobs right now.");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  /*
   * Automatically close the success modal.
   */
  useEffect(() => {
    if (!showSuccessModal) return;
    const timer = setTimeout(() => {
      setShowSuccessModal(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, [showSuccessModal]);
  /*
   * Scroll to the company currently being processed.
   */
  const scrollToJob = (index: number) => {
    const jobElement = jobRefs.current[index];
    if (!jobElement) return;
    const stickyOffset = 115;
    const elementTop = jobElement.getBoundingClientRect().top + window.scrollY;
    const targetPosition = Math.max(elementTop - stickyOffset, 0);
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };
  /*
   * Select CV.
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
   * Open the file picker.
   */
  const handleUploadClick = () => {
    if (cvAlreadySent || sending) return;
    fileInputRef.current?.click();
  };
  /*
   * Simulate sending the CV to each company.
   *
   * The CV is not actually uploaded to a backend yet.
   * This is the same frontend flow used while the backend
   * application system is still being built.
   */
  const handleSendCV = async () => {
    if (!selectedFile || !data?.jobs.length || sending || cvAlreadySent) {
      return;
    }
    setSending(true);
    setSendComplete(false);
    setCompletedJobs([]);
    for (let index = 0; index < data.jobs.length; index++) {
      /*
       * Move the user's view to the company currently
       * being processed.
       */
      scrollToJob(index);
      /*
       * Give the animation enough time for the user
       * to see the current company.
       */
      await new Promise((resolve) => setTimeout(resolve, 900));
      setCompletedJobs((previous) => [...previous, index]);
      /*
       * Small pause before moving to the next company.
       */
      await new Promise((resolve) => setTimeout(resolve, 350));
    }
    setSending(false);
    setSendComplete(true);
    setCvAlreadySent(true);
    setShowSuccessModal(true);
  };
  /*
   * Loading skeleton.
   */
  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <section className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />
            <div className="mt-4 h-10 w-72 animate-pulse rounded-lg bg-slate-200" />
            <div className="mt-4 h-5 w-full max-w-2xl animate-pulse rounded bg-slate-200" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-56 animate-pulse rounded-2xl border border-slate-200 bg-white"
              />
            ))}
          </div>
        </section>
      </main>
    );
  }
  /*
   * Error state.
   */
  if (error) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 pb-16 pt-28 text-slate-900">
        <div className="mx-auto max-w-3xl rounded-2xl border border-red-100 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-medium text-red-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-5 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-28 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
        >
          <FiArrowLeft size={17} />
          Go Back
        </button>
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Data Entry Jobs
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Find Data Entry Jobs
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore data entry opportunities from companies across different
            countries and send your CV to multiple openings from one place.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 font-medium text-slate-700 shadow-sm">
              {data?.total ?? 500} listings available
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 font-medium text-slate-700 shadow-sm">
              {data?.returned ?? 30} shown
            </div>
            <div className="rounded-xl border border-green-100 bg-green-50 px-4 py-2.5 font-medium text-green-700">
              Remote-friendly opportunities
            </div>
          </div>
        </div>
      </section>
      {/* Sticky CV action bar */}
      <section className="sticky top-20 z-40 border-y border-slate-200/80 bg-white/95 px-4 py-3 shadow-sm backdrop-blur sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FiFileText size={19} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {selectedFile ? selectedFile.name : "Upload your CV"}
              </p>
              <p className="text-xs text-slate-500">
                {cvAlreadySent
                  ? "CV submitted"
                  : selectedFile
                    ? "Ready to send"
                    : "Send your CV to the displayed companies"}
              </p>
            </div>
          </div>
          <div className="flex w-full gap-2 sm:w-auto">
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />

            <button
              onClick={handleUploadClick}
              disabled={sending || sendComplete}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none"
            >
              <FiUploadCloud size={17} />
              {sendComplete ? "CV Submitted" : "Upload CV"}
            </button>

            <button
              onClick={handleSendCV}
              disabled={!selectedFile || sending || sendComplete}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none"
            >
              {sending ? (
                <>
                  <FiLoader size={17} className="animate-spin" />
                  Sending...
                </>
              ) : sendComplete ? (
                <>
                  <FiCheck size={17} />
                  CV Sent
                </>
              ) : (
                <>
                  <FiUploadCloud size={17} />
                  Send CV
                </>
              )}
            </button>
          </div>
        </div>
      </section>
      {/* Selected CV */}
      <AnimatePresence>
        {selectedFile && (
          <motion.section
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8"
          >
            <div className="flex items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                  <FiFileText size={18} />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {selectedFile.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {cvAlreadySent
                      ? "CV successfully submitted"
                      : "Your CV is ready"}
                  </p>
                </div>
              </div>
              <div
                className={`shrink-0 text-xs font-semibold ${
                  cvAlreadySent ? "text-green-600" : "text-blue-600"
                }`}
              >
                {cvAlreadySent ? "Submitted" : "Ready"}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
      {/* Jobs */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">
              Available Data Entry Openings
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Showing a fresh selection of data entry opportunities.
            </p>
          </div>
          <div className="hidden text-sm font-medium text-slate-500 sm:block">
            {completedJobs.length}/{data?.jobs.length ?? 0} processed
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data?.jobs.map((job, index) => {
            const completed = completedJobs.includes(index);
            return (
              <motion.div
                key={`${job.company}-${index}`}
                ref={(element) => {
                  jobRefs.current[index] = element;
                }}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: Math.min(index * 0.025, 0.5),
                }}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                {/* Completed overlay */}
                <AnimatePresence>
                  {completed && (
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 backdrop-blur-[2px]"
                    >
                      <motion.div
                        initial={{
                          scale: 0.5,
                          opacity: 0,
                        }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                        }}
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg"
                      >
                        <FiCheck size={30} />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                      {job.company
                        .split(" ")
                        .slice(0, 2)
                        .map((word) => word[0])
                        .join("")}
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      Active
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-6 text-slate-950">
                    {job.position}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-slate-700">
                    {job.company}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    {job.location}
                  </div>
                </div>
                {/* Progress bar */}
                <div className="h-1 bg-slate-100">
                  <motion.div
                    initial={{
                      width: "0%",
                    }}
                    animate={{
                      width: completed ? "100%" : "0%",
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="h-full bg-blue-600"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      {/* Bottom information */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-bold text-slate-950">
            How the CV submission works
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div>
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                1
              </div>
              <p className="text-sm font-semibold text-slate-900">
                Upload your CV
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Select your CV in PDF, DOC, or DOCX format.
              </p>
            </div>
            <div>
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                2
              </div>
              <p className="text-sm font-semibold text-slate-900">
                Send your CV
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Start the submission process for the displayed openings.
              </p>
            </div>
            <div>
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                3
              </div>
              <p className="text-sm font-semibold text-slate-900">
                Track progress
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Watch the submission progress move through each listing.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Success modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
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
              className="relative w-full max-w-md rounded-3xl bg-white p-7 text-center shadow-2xl"
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close"
              >
                <FiX size={19} />
              </button>
              <motion.div
                initial={{
                  scale: 0.5,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 15,
                }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg"
              >
                <FiCheck size={30} />
              </motion.div>
              <h2 className="mt-5 text-2xl font-bold text-slate-950">
                CV sent
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Your CV has been submitted across the displayed data entry
                opportunities. Companies can contact you using the information
                provided on your CV.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="mt-6 w-full rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Continue
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
