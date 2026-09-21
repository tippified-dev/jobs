"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function BackToJobs() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="group mb-4 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md active:translate-y-0"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-100 transition-colors duration-200 group-hover:bg-blue-100">
        <FiArrowLeft size={14} strokeWidth={2.5} />
      </span>

      <span>Back to Jobs</span>
    </button>
  );
}
