"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowRight, FiInfo, FiShield, FiX } from "react-icons/fi";

const STORAGE_KEY = "globaljobslive_ads_awareness";

export default function AdvertUnderstanding() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const understood = window.localStorage.getItem(STORAGE_KEY);

      if (!understood) {
        setVisible(true);
      }
    }, 700);

    return () => window.clearTimeout(timer);
  }, []);

  const handleUnderstand = () => {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-9999 flex justify-center px-3 pb-3 sm:px-5 sm:pb-5"
      role="dialog"
      aria-label="Advertisement awareness"
    >
      <div className="w-full max-w-2xl rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.18)] sm:p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FiInfo size={19} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900 sm:text-[15px]">
                  A quick note about ads
                </h3>

                <p className="mt-1.5 text-[13px] leading-5 text-slate-600 sm:text-sm">
                  Global Jobs Live is free to use, and third-party advertising
                  helps us keep the platform running. Some ads may open in a
                  separate tab when you interact with certain elements. If an ad
                  interests you, you can continue; otherwise, simply return to
                  your Global Jobs Live tab and continue your job search.
                </p>
              </div>

              <button
                type="button"
                onClick={handleUnderstand}
                aria-label="Close advertisement notice"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <FiX size={17} />
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="hidden items-center gap-1.5 text-[11px] font-medium text-slate-400 sm:flex">
                <FiShield size={13} />
                <span>Advertisement awareness</span>
              </div>

              <div className="ml-auto flex items-center gap-2">
                <Link
                  href="/ad-awareness"
                  className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-blue-600 sm:text-sm"
                >
                  See awareness
                  <FiArrowRight size={14} />
                </Link>

                <button
                  type="button"
                  onClick={handleUnderstand}
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-md active:translate-y-0 sm:px-5 sm:text-sm"
                >
                  I understand
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
