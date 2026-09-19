"use client";

import { useRouter } from "next/navigation";

export default function BackToJobs() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
    >
      <span aria-hidden="true">←</span>
      Back to Jobs
    </button>
  );
}
