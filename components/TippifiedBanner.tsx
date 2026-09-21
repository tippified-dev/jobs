"use client";

import { useCallback, useEffect, useRef } from "react";
import { FiArrowUpRight, FiHeart } from "react-icons/fi";

const TIPPIFIED_URL = "https://tippified.com";
const SIGNUP_URL = "https://app.tippified.com/creator/signup";

export default function TippifiedBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  const openTippified = useCallback(() => {
    window.open(TIPPIFIED_URL, "_blank", "noopener,noreferrer");
  }, []);

  const handleBannerKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openTippified();
    }
  };

  useEffect(() => {
    const banner = bannerRef.current;

    if (!banner) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = banner.getBoundingClientRect();

      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      banner.style.setProperty("--mx", `${x}%`);
      banner.style.setProperty("--my", `${y}%`);
    };

    banner.addEventListener("pointermove", handlePointerMove);

    return () => {
      banner.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      role="link"
      tabIndex={0}
      aria-label="Visit Tippified - creator monetization platform"
      onClick={openTippified}
      onKeyDown={handleBannerKeyDown}
      className="group relative mx-auto flex h-12.5 w-[320px] cursor-pointer select-none items-center overflow-hidden rounded-xl border border-purple-400/20 bg-[#130d24] px-2.5 shadow-[0_8px_30px_rgba(88,28,135,0.20)] outline-none transition-all duration-300 hover:border-purple-400/40 hover:shadow-[0_10px_35px_rgba(88,28,135,0.30)] focus-visible:ring-2 focus-visible:ring-purple-400/70"
      style={
        {
          "--mx": "50%",
          "--my": "50%",
        } as React.CSSProperties
      }
    >
      {/* Premium cursor-following glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--mx) var(--my), rgba(168,85,247,0.20), transparent 45%)",
        }}
      />

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -right-8 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-purple-500/15 blur-2xl" />

      {/* Brand */}
      <div className="relative z-10 flex shrink-0 items-center gap-1.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br from-purple-500 to-fuchsia-500 shadow-[0_4px_15px_rgba(168,85,247,0.35)]">
          <FiHeart size={13} strokeWidth={2.5} className="text-white" />
        </div>

        <div className="leading-none">
          <div className="font-[Pacifico] text-[14px] tracking-tight text-white">
            tippified.
          </div>
          <div className="mt-0.5 text-[7px] font-medium uppercase tracking-[0.13em] text-purple-300">
            For creators
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 mx-2.5 h-7 w-px bg-white/10" />

      {/* Message */}
      <div className="relative z-10 min-w-0 flex-1 leading-none">
        <div className="truncate text-[11px] font-bold tracking-tight text-white">
          Turn your audience into support.
        </div>

        <div className="mt-1 truncate text-[8px] font-medium text-purple-200/70">
          Tips • Gifts • Goals • More
        </div>
      </div>

      {/* CTA */}
      <a
        href={SIGNUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Sign up as a Tippified creator"
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="relative z-20 ml-1.5 inline-flex h-7 shrink-0 items-center gap-1 rounded-lg bg-white px-2.5 text-[9px] font-extrabold uppercase tracking-wide text-purple-700 shadow-[0_4px_14px_rgba(255,255,255,0.12)] transition-all duration-200 hover:scale-[1.03] hover:bg-purple-50 active:scale-[0.97]"
      >
        Sign Up
        <FiArrowUpRight size={10} strokeWidth={2.5} />
      </a>
    </div>
  );
}
