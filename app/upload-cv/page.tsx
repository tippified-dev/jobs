"use client";

import Banner320x50 from "@/components/ads/Banner320x50";
import NativeBannerAd from "@/components/ads/NativeBannerAd";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiDownload,
  FiFileText,
  FiRefreshCw,
  FiShield,
  FiTrash2,
  FiUpload,
  FiUploadCloud,
} from "react-icons/fi";

export default function UploadCVPage() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    setError("");

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Please upload your CV as a PDF, DOC, or DOCX file.");
      return;
    }

    const maxSize = 10 * 1024 * 1024;

    if (selectedFile.size > maxSize) {
      setError("Your CV must be smaller than 10 MB.");
      return;
    }

    setFile(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
    setError("");
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }

    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const isPdf = file?.type === "application/pdf";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
          >
            <FiArrowLeft size={17} />
            Back to Global Jobs Live
          </Link>

          <Link
            href="/location"
            className="hidden rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:block"
          >
            Find Jobs
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-sky-50 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 pb-12 pt-12 text-center sm:px-6 sm:pb-16 sm:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm"
          >
            <FiFileText size={29} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mx-auto mt-6 max-w-3xl text-3xl font-black tracking-tight text-slate-950 sm:text-5xl"
          >
            Keep Your CV Ready for Your Next Opportunity
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Upload your CV and keep it ready while you explore remote jobs,
            online jobs, side jobs, data entry opportunities, skilled work and
            other opportunities on Global Jobs Live.
          </motion.p>
        </div>
      </section>
      <NativeBannerAd />

      {/* Upload area */}
      <section className="px-4 pb-14 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50"
          >
            <div className="p-5 sm:p-8">
              {!file ? (
                <>
                  <label
                    htmlFor="cv-upload"
                    className="group block cursor-pointer rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center transition-all duration-300 hover:border-blue-400 hover:bg-blue-50/40 sm:p-14"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200 transition-transform duration-300 group-hover:scale-105">
                      <FiUploadCloud size={28} />
                    </div>

                    <h2 className="mt-5 text-xl font-bold text-slate-900">
                      Upload your CV
                    </h2>

                    <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                      Choose your CV from your phone, tablet or computer. PDF,
                      DOC and DOCX files are supported.
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-blue-200 transition group-hover:bg-blue-700">
                      <FiUpload size={17} />
                      Choose CV
                    </span>

                    <p className="mt-4 text-xs text-slate-400">
                      Maximum file size: 10 MB
                    </p>

                    <input
                      id="cv-upload"
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>

                  {error && (
                    <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-600">
                      {error}
                    </div>
                  )}
                </>
              ) : (
                <div>
                  <div className="flex flex-col gap-4 rounded-2xl border border-blue-100 bg-blue-50/50 p-5 sm:flex-row sm:items-center">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                      <FiFileText size={24} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="truncate font-bold text-slate-900">
                        {file.name}
                      </h2>

                      <p className="mt-1 text-sm text-slate-500">
                        {file.type === "application/pdf"
                          ? "PDF document"
                          : "Word document"}{" "}
                        • {formatFileSize(file.size)}
                      </p>

                      <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-green-600">
                        <FiCheckCircle />
                        CV selected successfully
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <label
                        htmlFor="replace-cv"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                      >
                        <FiRefreshCw size={15} />
                        Replace
                      </label>

                      <input
                        id="replace-cv"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />

                      <button
                        type="button"
                        onClick={removeFile}
                        className="flex items-center justify-center rounded-xl border border-red-100 bg-white px-3 text-red-500 transition hover:bg-red-50"
                        aria-label="Remove CV"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </div>

                  {isPdf && (
                    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                      <div className="border-b border-slate-200 bg-white px-4 py-3">
                        <h3 className="text-sm font-bold text-slate-800">
                          CV Preview
                        </h3>
                      </div>

                      <iframe
                        src={URL.createObjectURL(file)}
                        title="CV preview"
                        className="h-162.5 w-full"
                      />
                    </div>
                  )}

                  {!isPdf && (
                    <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                      <FiFileText size={32} className="mx-auto text-blue-600" />

                      <p className="mt-3 text-sm font-semibold text-slate-800">
                        Your Word CV is ready
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        DOC and DOCX files cannot be previewed directly in the
                        browser, but your document has been selected
                        successfully.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
            <Banner320x50 />

            <div className="border-t border-slate-100 bg-slate-50 px-5 py-5 sm:px-8">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: FiShield,
                    title: "Ready when needed",
                    text: "Keep your CV available when an opportunity appears.",
                  },
                  {
                    icon: FiCheckCircle,
                    title: "Easy to update",
                    text: "Replace your CV whenever your experience changes.",
                  },
                  {
                    icon: FiDownload,
                    title: "Job application ready",
                    text: "Have your professional document prepared before applying.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                        <Icon size={17} />
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO content */}
      <section className="border-t border-slate-200 bg-white px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Why You Should Keep Your CV Ready
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              A well-prepared CV is one of the most important tools for anyone
              searching for remote jobs, online jobs, flexible work or new
              career opportunities. Job openings can appear quickly, and having
              an updated CV ready can make it easier to apply without starting
              the application process from scratch.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Global Jobs Live connects job seekers with opportunities across
              different industries, experience levels and locations. Whether you
              are an experienced professional looking for remote work, a
              graduate searching for your first opportunity, or someone
              interested in side jobs and flexible online work, keeping your CV
              prepared can help you respond quickly when you find an opportunity
              that matches your skills.
            </p>

            <h2 className="mt-10 text-2xl font-black tracking-tight text-slate-950">
              Prepare for Remote and Online Job Opportunities
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Remote employment continues to create opportunities for people who
              want greater flexibility in where they work. Depending on the
              employer and position, remote jobs can include software
              development, customer service, administration, writing, design,
              sales, marketing, data entry, virtual assistance and many other
              forms of online work.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Your CV should clearly communicate your skills, previous
              experience, education, achievements and the type of work you are
              prepared to perform. Before applying for a position, always make
              sure the information on your CV accurately represents your
              experience and qualifications.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
