"use client";
import About from "@/components/About";
import AdNotice from "@/components/AdNotice";
import NativeBannerAd from "@/components/ads/NativeBannerAd";
import Popunder from "@/components/ads/Popunder";
import CurrentArtisanJobs from "@/components/CurrentArtisanJobs";
import Footer from "@/components/Footer";
import JobAlert from "@/components/JobAlert";
import JobTypeCategories from "@/components/JobTypeCategories";
import LiveJobsCounter from "@/components/LiveJobsCounter";
import Navbar from "@/components/Navbar";
import QuickActions from "@/components/QuickActions";
import Testimonial from "@/components/Testimonial";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const hasVisitedLocation = localStorage.getItem(
      "jobs4all_location_redirected",
    );
    if (hasVisitedLocation) {
      return;
    }
    const timer = setTimeout(() => {
      localStorage.setItem("jobs4all_location_redirected", "true");
      router.push("/location");
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AdNotice />
      {/* Sticky job activity bar */}
      <LiveJobsCounter />
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-5 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Find work. Build your future.
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl">
            Find jobs that fit
            <span className="text-blue-600"> your life.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Discover online jobs, remote opportunities, data entry positions,
            side jobs and flexible work opportunities.
          </p>
          {/* Search */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
            <div className="flex flex-col gap-3 md:flex-row">
              <input
                type="text"
                placeholder="Job title, keyword or skill"
                className="h-12 flex-1 rounded-xl bg-slate-50 px-4 text-base outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100"
              />
              <input
                type="text"
                placeholder="Location or Remote"
                className="h-12 flex-1 rounded-xl bg-slate-50 px-4 text-base outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100"
              />
              <button className="h-12 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white transition hover:bg-blue-700">
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </section>
      <CurrentArtisanJobs />
      <NativeBannerAd />
      <QuickActions />
      <JobTypeCategories />
      <Testimonial />
      <About />
      <Popunder />
      <JobAlert />
      <Footer />
    </main>
  );
}
