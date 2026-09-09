"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiMapPin,
  FiX,
} from "react-icons/fi";
import Banner468x60 from "./ads/Banner468X60";

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

export default function LocationModal() {
  const [location, setLocation] = useState<LocationData | null>(null);

  const [isVisible, setIsVisible] = useState(true);

  const [isLoadingLocation, setIsLoadingLocation] = useState(true);

  /*
   * We store only the selected country code.
   * The actual country object is derived below.
   */
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(
    null,
  );

  /*
   * Job counters
   */
  const [jobCounts, setJobCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(
      countries.map((country) => [country.code, country.initialJobs]),
    ),
  );

  /*
   * Detect visitor location
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
   * Simulated job activity
   *
   * This is currently demo activity.
   * Later we can replace it with real job data.
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
   * Find detected country
   */
  const detectedCountry = useMemo(() => {
    if (!location?.country_code) {
      return null;
    }

    return (
      countries.find((country) => country.code === location.country_code) ??
      null
    );
  }, [location]);

  /*
   * Determine selected country.
   *
   * If the user has not manually selected a
   * country, use the detected country.
   */
  const selectedCountry = useMemo(() => {
    const countryCode = selectedCountryCode || location?.country_code;

    if (!countryCode) {
      return null;
    }

    return countries.find((country) => country.code === countryCode) ?? null;
  }, [selectedCountryCode, location]);

  /*
   * Displayed location name
   */
  const locationName = location?.country_name || "your current location";

  /*
   * Handle country selection
   */
  const handleCountrySelect = (country: Country) => {
    setSelectedCountryCode(country.code);
  };

  /*
   * Close modal
   */
  const closeModal = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/40 p-0 backdrop-blur-[2px] sm:items-center sm:p-4"
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 30,
            }}
            className="relative max-h-[92vh] w-full max-w-xl overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
          >
            {/* Close button */}

            <button
              type="button"
              aria-label="Close location modal"
              onClick={closeModal}
              className="absolute right-5 top-7 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
            >
              <FiX size={18} />
            </button>

            <div className="max-h-[92vh] overflow-y-auto px-5 pb-7 pt-7 sm:px-8 sm:pt-8">
              {/* Location icon */}

              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.15,
                }}
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"
              >
                <FiMapPin size={25} />
              </motion.div>

              {/* Heading */}

              <div className="pr-10">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-blue-600">
                    Your location
                  </p>

                  {isLoadingLocation && (
                    <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                  )}
                </div>
                <Banner468x60 />

                <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {isLoadingLocation
                    ? "Detecting your location..."
                    : `You are currently in ${locationName}`}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  We have found remote opportunities from different countries
                  that you can explore.
                </p>
              </div>

              {/* Location detection status */}

              {!isLoadingLocation && location && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2.5 text-xs font-medium text-emerald-700"
                >
                  <FiCheckCircle size={15} />

                  <span>
                    Location detected automatically from your connection
                  </span>
                </motion.div>
              )}

              {/* Countries */}

              <div className="mt-7">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Explore jobs from
                  </p>

                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
                    <FiActivity size={13} />

                    <span>Live activity</span>
                  </div>
                </div>

                <div className="space-y-3">
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
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.12 + index * 0.05,
                        }}
                        className={`group flex w-full items-center justify-between rounded-2xl border p-3.5 text-left transition sm:p-4 ${
                          isSelected
                            ? "border-blue-300 bg-blue-50"
                            : "border-slate-200 hover:border-blue-200 hover:bg-blue-50/40"
                        }`}
                      >
                        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                          {/* Flag */}

                          <span
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-2xl ${
                              isSelected ? "bg-white" : "bg-slate-100"
                            }`}
                          >
                            {country.flag}
                          </span>

                          {/* Country details */}

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

                            <div className="mt-0.5 flex flex-wrap items-center gap-2">
                              <p className="text-xs text-slate-500">
                                {country.description}
                              </p>

                              <span className="h-1 w-1 rounded-full bg-slate-300" />

                              {/* Animated job counter */}

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
                                  {jobCounts[country.code].toLocaleString()}{" "}
                                  jobs added
                                </motion.span>
                              </AnimatePresence>
                            </div>
                          </div>
                        </div>

                        {/* Arrow */}

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
              </div>

              {/* Selected country */}

              <AnimatePresence>
                {selectedCountry && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      y: 5,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 rounded-2xl bg-blue-600 p-4 text-white">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs text-slate-400">
                            Selected location
                          </p>

                          <p className="mt-1 font-semibold">
                            {selectedCountry.flag} {selectedCountry.name}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={closeModal}
                          className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                        >
                          Explore jobs
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom */}

              <div className="mt-6 border-t border-slate-100 pt-5">
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full py-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
                >
                  Maybe later
                </button>

                <p className="mt-2 text-center text-[11px] leading-5 text-slate-400">
                  Live job updates are confirmed and verified by the American
                  USJOBS in partnership with Department of Labor
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
