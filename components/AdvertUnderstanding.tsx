"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowRight, FiInfo, FiShield } from "react-icons/fi";

const STORAGE_KEY = "globaljobslive_ads_awareness";

export default function AdvertUnderstanding() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const understood = window.localStorage.getItem(STORAGE_KEY);

      if (!understood) {
        setVisible(true);
        document.body.style.overflow = "hidden";
      }
    }, 700);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleUnderstand = () => {
    window.localStorage.setItem(STORAGE_KEY, "true");
    document.body.style.overflow = "";
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <>
      {/* Blocking backdrop */}
      <div
        className="fixed inset-0 z-9998 bg-slate-950/70 backdrop-blur-[3px]"
        aria-hidden="true"
      />

      {/* Awareness modal */}
      <div
        className="fixed inset-0 z-9999 flex items-end justify-center px-3 pb-4 sm:items-center sm:px-5"
        role="dialog"
        aria-modal="true"
        aria-labelledby="advertisement-awareness-title"
      >
        <div
          className="
            w-full max-w-2xl
            animate-[slideUp_.4s_ease-out]
            rounded-2xl
            border border-white/60
            bg-white
            p-5
            shadow-[0_25px_80px_rgba(0,0,0,0.35)]
            sm:p-6
          "
        >
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FiInfo size={20} />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <h3
                id="advertisement-awareness-title"
                className="text-base font-bold text-slate-900 sm:text-lg"
              >
                A quick note about ads
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Global Jobs Live is free to use, and third-party advertising
                helps us keep the platform running. Some ads may open in a
                separate tab when you interact with certain elements. If an ad
                interests you, you can continue; otherwise, simply return to
                your Global Jobs Live tab and continue your job search.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
              <FiShield size={14} />
              <span>Advertisement awareness</span>
            </div>

            <div className="flex w-full items-center justify-end gap-2 sm:ml-auto sm:w-auto">
              <Link
                href="/ad-awareness"
                className="
                  inline-flex items-center gap-1.5
                  rounded-xl px-3 py-2.5
                  text-xs font-semibold text-slate-600
                  transition
                  hover:bg-slate-100
                  hover:text-blue-600
                  sm:text-sm
                "
              >
                Learn more
                <FiArrowRight size={14} />
              </Link>

              <button
                type="button"
                onClick={handleUnderstand}
                autoFocus
                className="
                  inline-flex items-center justify-center
                  rounded-xl
                  bg-slate-900
                  px-5 py-2.5
                  text-xs font-semibold text-white
                  shadow-sm
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:bg-blue-600
                  hover:shadow-md
                  active:translate-y-0
                  sm:text-sm
                "
              >
                I understand
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
