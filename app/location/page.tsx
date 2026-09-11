"use client";
import Banner320x50 from "@/components/ads/Banner320x50";
import NativeBannerAd from "@/components/ads/NativeBannerAd";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { useRouter } from "next/navigation";
import {
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiMapPin,
} from "react-icons/fi";

type LocationData = {
  country_name?: string;
  country_code?: string;
};
type Country = {
  name: string;
  code: string;
  flag: string;
  description: string;
  initialJobs: number;
};
const countries: Country[] = [
  {
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    description: "Remote opportunities",
    initialJobs: 5000,
  },
  {
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    description: "Remote opportunities",
    initialJobs: 3200,
  },
  {
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    description: "Remote opportunities",
    initialJobs: 2800,
  },
  {
    name: "Australia",
    code: "AU",
    flag: "🇦🇺",
    description: "Remote opportunities",
    initialJobs: 1900,
  },
  {
    name: "New Zealand",
    code: "NZ",
    flag: "🇳🇿",
    description: "Remote opportunities",
    initialJobs: 1100,
  },
  {
    name: "China",
    code: "CN",
    flag: "🇨🇳",
    description: "Remote opportunities",
    initialJobs: 2400,
  },
  {
    name: "Nigeria",
    code: "NG",
    flag: "🇳🇬",
    description: "Remote opportunities",
    initialJobs: 1700,
  },
];
export default function LocationPage() {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(
    null,
  );
  const [jobCounts, setJobCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(
      countries.map((country) => [country.code, country.initialJobs]),
    ),
  );
  /*
   * Detect visitor country.
   */
  useEffect(() => {
    let cancelled = false;
    async function detectLocation() {
      try {
        const response = await fetch("https://ipapi.co/json/", {
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error("Unable to detect location");
        }
        const data: LocationData = await response.json();
        if (!cancelled) {
          setLocation(data);
        }
      } catch (error) {
        console.error("Location detection failed:", error);
      } finally {
        if (!cancelled) {
          setIsLoadingLocation(false);
        }
      }
    }
    detectLocation();
    return () => {
      cancelled = true;
    };
  }, []);
  /*
   * Simulated job activity.
   *
   * This will later be replaced with actual Jobs4all job data.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setJobCounts((currentCounts) => {
        const nextCounts = {
          ...currentCounts,
        };
        const randomCountry =
          countries[Math.floor(Math.random() * countries.length)];
        const randomIncrease = Math.floor(Math.random() * 4) + 1;
        nextCounts[randomCountry.code] += randomIncrease;
        return nextCounts;
      });
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  /*
   * Find detected country.
   */

  const router = useRouter();
  const handleMaybeLater = () => {
    // Remember that the visitor has already seen the location page.
    localStorage.setItem("jobs4all_location_redirected", "true");
    router.push("/");
  };

  const detectedCountry = useMemo(() => {
    if (!location?.country_code) {
      return null;
    }
    return (
      countries.find(
        (country) =>
          country.code.toUpperCase() === location.country_code?.toUpperCase(),
      ) ?? null
    );
  }, [location]);
  /*
   * Determine selected country.
   *
   * If the visitor has not selected another country,
   * the detected country remains selected.
   */
  const selectedCountry = useMemo(() => {
    const countryCode = selectedCountryCode || location?.country_code;
    if (!countryCode) {
      return null;
    }
    return (
      countries.find(
        (country) => country.code.toUpperCase() === countryCode.toUpperCase(),
      ) ?? null
    );
  }, [selectedCountryCode, location]);
  const locationName = location?.country_name || "your current location";
  const handleCountrySelect = (country: Country) => {
    setSelectedCountryCode(country.code);
  };
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Sticky advertising notice */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-center">
          <motion.p
            animate={{
              opacity: [0.82, 1, 0.82],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-center text-xs leading-5 text-slate-500 sm:text-sm"
          >
            <span className="font-semibold text-slate-900">
              Keeping Jobs4all free.
            </span>{" "}
            We display some adverts which help to fund the platform. Please bear
            with us.
          </motion.p>
        </div>
        <Banner320x50 />
      </motion.div>
      {/* Page content */}
      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.15,
              duration: 0.45,
            }}
            className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"
          >
            <FiMapPin size={25} />
          </motion.div>
          <div className="flex items-center justify-center gap-2">
            <p className="text-sm font-semibold text-blue-600">Your location</p>
            {isLoadingLocation && (
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            )}
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {isLoadingLocation
              ? "Detecting your location..."
              : `You are currently in ${locationName}`}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Explore remote opportunities from different countries and find jobs
            that match your skills, experience, and goals.
          </p>
          {!isLoadingLocation && location && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-medium text-emerald-700"
            >
              <FiCheckCircle size={15} />
              <span>Country detected automatically</span>
            </motion.div>
          )}
        </motion.div>
        <NativeBannerAd />
        {/* Countries */}
        <section className="mt-12">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Explore jobs from
              </p>
              <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                Choose a country
              </h2>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
              <FiActivity size={13} />
              <span>Activity</span>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((country, index) => {
              const isDetected = detectedCountry?.code === country.code;
              const isSelected = selectedCountry?.code === country.code;
              return (
                <motion.button
                  key={country.code}
                  type="button"
                  onClick={() => handleCountrySelect(country)}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.1 + index * 0.06,
                    duration: 0.4,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className={`group flex w-full items-center justify-between rounded-2xl border bg-white p-4 text-left shadow-sm transition ${
                    isSelected
                      ? "border-blue-300 bg-blue-50/60 shadow-blue-100"
                      : "border-slate-200 hover:border-blue-200 hover:shadow-md"
                  }`}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    {/* Flag */}
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${
                        isSelected ? "bg-white" : "bg-slate-100"
                      }`}
                    >
                      {country.flag}
                    </span>
                    {/* Details */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="truncate font-semibold text-slate-900">
                          {country.name}
                        </p>
                        {isDetected && (
                          <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-blue-600">
                            You
                          </span>
                        )}
                        {isSelected && !isDetected && (
                          <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-blue-600">
                            Selected
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <p className="text-xs text-slate-500">
                          {country.description}
                        </p>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <AnimatePresence mode="popLayout">
                          <motion.span
                            key={jobCounts[country.code]}
                            initial={{
                              opacity: 0,
                              y: 5,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              y: -5,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                            className="whitespace-nowrap font-medium text-emerald-600"
                          >
                            {jobCounts[country.code].toLocaleString()} jobs
                          </motion.span>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                  <FiArrowRight
                    size={19}
                    className={`ml-3 shrink-0 transition ${
                      isSelected
                        ? "translate-x-1 text-blue-600"
                        : "text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600"
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>
        </section>
        {/* Selected country */}
        <AnimatePresence>
          {selectedCountry && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: 8,
              }}
              className="mx-auto mt-8 max-w-2xl overflow-hidden"
            >
              <div className="rounded-2xl bg-blue-600 p-5 text-white shadow-lg shadow-blue-100">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs text-blue-100">Selected location</p>
                    <p className="mt-1 text-lg font-semibold">
                      {selectedCountry.flag} {selectedCountry.name}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                  >
                    Explore jobs
                    <FiArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.45 }}
            className="mt-8 flex justify-center"
          >
            <motion.button
              type="button"
              onClick={handleMaybeLater}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
            >
              Maybe later
            </motion.button>
          </motion.div>
        </AnimatePresence>
        {/* Disclaimer */}
      </div>
    </main>
  );
}
