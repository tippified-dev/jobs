"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiCheck, FiFileText, FiLoader, FiUploadCloud } from "react-icons/fi";
type Job = {
  company: string;
  location: string;
  position: string;
  status: "active";
};
type JobsResponse = {
  country: string;
  total: number;
  jobs: Job[];
};
export default function CountryJobsPage() {
  const params = useParams();
  const country = params.country as string;
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [data, setData] = useState<JobsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [sending, setSending] = useState(false);
  const [completedJobs, setCompletedJobs] = useState<number[]>([]);
  const [sendComplete, setSendComplete] = useState(false);
  useEffect(() => {
    if (!country) return;
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(`/api/jobs/${country}`);
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const result: JobsResponse = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
        setError("Unable to load jobs right now.");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [country]);
  const countryName = country
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    setCompletedJobs([]);
    setSendComplete(false);
  };
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  const handleSendCV = async () => {
    if (!selectedFile || !data?.jobs.length || sending) {
      return;
    }
    setSending(true);
    setSendComplete(false);
    setCompletedJobs([]);
    for (let index = 0; index < data.jobs.length; index++) {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setCompletedJobs((previous) => [...previous, index]);
    }
    setSending(false);
    setSendComplete(true);
  };
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Sticky CV action bar */}
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="min-w-0">
            <p className="text-sm font-bold text-slate-900">
              Apply to these jobs
            </p>
            <p className="truncate text-xs text-slate-500">
              {selectedFile ? selectedFile.name : "Upload your CV to apply"}
            </p>
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
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4"
            >
              <FiUploadCloud size={17} />
              <span className="hidden sm:inline">Upload CV</span>
            </button>
            <button
              type="button"
              onClick={handleSendCV}
              disabled={!selectedFile || sending}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:px-4"
            >
              {sending ? (
                <FiLoader className="animate-spin" size={17} />
              ) : (
                <FiFileText size={17} />
              )}
              <span className="hidden sm:inline">
                {sending ? "Sending..." : "Send CV"}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Jobs4all
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Jobs in {countryName}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Explore available job opportunities from companies hiring in{" "}
            {countryName}.
          </p>
        </div>
        {/* Uploaded CV preview */}
        <AnimatePresence>
          {selectedFile && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
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
                  Ready
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Completed message */}
        <AnimatePresence>
          {sendComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
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
                CV sent to all companies
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Your CV has been processed for all displayed job listings.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Loading skeleton */}
        {loading && (
          <div className="mt-10">
            <div className="mb-5 flex items-center justify-between">
              <div className="h-6 w-32 animate-pulse rounded-lg bg-slate-200" />
              <div className="h-4 w-20 animate-pulse rounded-lg bg-slate-200" />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200" />
                      <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-slate-200" />
                    </div>
                    <div className="h-6 w-14 animate-pulse rounded-full bg-slate-200" />
                  </div>
                  <div className="mt-5 h-4 w-1/3 animate-pulse rounded bg-slate-200" />
                  <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-1/2 animate-pulse rounded-full bg-slate-200" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Error */}
        {!loading && error && (
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-sm font-medium text-slate-600">{error}</p>
          </div>
        )}
        {/* Jobs */}
        {!loading && !error && data && (
          <div className="mt-10">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">
                Available Jobs
              </h2>
              <span className="text-sm text-slate-500">
                {data.total} jobs found
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.jobs.map((job, index) => {
                const isCompleted = completedJobs.includes(index);
                return (
                  <motion.div
                    key={`${job.company}-${job.position}-${index}`}
                    layout
                    className={`relative overflow-hidden rounded-2xl border bg-white p-5 shadow-sm transition ${
                      isCompleted ? "border-blue-300" : "border-slate-200"
                    }`}
                  >
                    {/* Sending overlay */}
                    <AnimatePresence>
                      {isCompleted && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-[2px]"
                        >
                          <motion.div
                            initial={{ scale: 0, rotate: -20 }}
                            animate={{ scale: 1, rotate: 0 }}
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
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-slate-900">
                          {job.position}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-blue-600">
                          {job.company}
                        </p>
                      </div>
                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                        {job.status}
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-slate-500">
                      {job.location}
                    </p>
                    <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{
                          width: isCompleted ? "100%" : "0%",
                        }}
                        transition={{ duration: 0.5 }}
                        className="h-full rounded-full bg-blue-600"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
