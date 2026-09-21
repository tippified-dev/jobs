import Banner320x50 from "@/components/ads/Banner320x50";
import NativeBannerAd from "@/components/ads/NativeBannerAd";
import Link from "next/link";
import {
  FiActivity,
  FiArrowLeft,
  FiArrowUpRight,
  FiCheckCircle,
  FiExternalLink,
  FiGlobe,
  FiInfo,
  FiMonitor,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const BASE_URL = "https://globaljobslive.com";

export const metadata = {
  title: "Ad Awareness & How Advertising Supports Global Jobs Live",
  description:
    "Learn why Global Jobs Live displays advertisements, what you may experience when interacting with ads, and how advertising helps us keep the platform free.",
  alternates: {
    canonical: `${BASE_URL}/ad-awareness`,
  },
  openGraph: {
    title: "Ad Awareness | Global Jobs Live",
    description:
      "Learn how advertising helps Global Jobs Live remain a free job resource platform and what to expect when interacting with advertisements.",
    url: `${BASE_URL}/ad-awareness`,
    siteName: "Global Jobs Live",
    type: "website",
  },
};

export default function AdAwarenessPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_35%)]" />

        <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            <FiArrowLeft size={16} />
            Back to Global Jobs Live
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700">
              <FiInfo size={14} />
              Advertising awareness
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              How advertising helps keep Global Jobs Live free
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Global Jobs Live is designed to provide free access to job
              resources, online opportunities, career information, and other
              employment-related content. Advertising helps us generate the
              revenue needed to operate, maintain, improve, and grow the
              platform without charging users for basic access.
            </p>
          </div>
        </div>
      </section>
      <Banner320x50 />

      {/* Main content */}
      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Free platform */}
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <FiGlobe size={22} />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-slate-950">
              The platform is free
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Our goal is to make useful employment resources accessible to as
              many people as possible. You can browse Global Jobs Live without
              paying a subscription fee for basic access to the platform.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Operating a global website involves costs such as hosting,
              infrastructure, security, software services, development,
              maintenance, content management, and ongoing improvements.
              Advertising is one of the ways we help cover those costs.
            </p>
          </article>

          {/* Why ads */}
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <FiMonitor size={22} />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-slate-950">
              Why you may see advertisements
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              You may encounter advertisements while browsing Global Jobs Live.
              Depending on the advertising format and your device, an
              advertisement may appear within a page, after interacting with an
              element, or through another browser tab or window.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              These advertising experiences help generate revenue that supports
              the continued availability and maintenance of the platform.
            </p>
          </article>
        </div>
        <NativeBannerAd />

        {/* What users might notice */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8 lg:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
              <FiInfo size={20} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                What you might notice while browsing
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Advertising behaviour can vary depending on the advertising
                partner, browser, device, location, and the type of
                advertisement being displayed. For example, you may notice one
                of the following:
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              "An advertisement appearing within or around the page.",
              "A new browser tab or window opening after an interaction.",
              "An external website opening when an advertising element is selected.",
              "An advertisement asking you to view information, download something, register, or complete another action.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-5"
              >
                <FiCheckCircle
                  className="mt-0.5 shrink-0 text-blue-600"
                  size={18}
                />

                <p className="text-sm leading-6 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Don't panic */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-blue-100 bg-blue-50">
          <div className="p-7 sm:p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                <FiShield size={21} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-950">
                  If another tab opens, there is no need to panic
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  If interacting with an advertisement causes another website or
                  browser tab to open, you have simply been taken to an external
                  advertising destination. This does not mean that your Global
                  Jobs Live session has disappeared.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-700">
                  If you are not interested in the advertisement, simply return
                  to the browser tab containing Global Jobs Live and continue
                  browsing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to return */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8 lg:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
              <FiUsers size={21} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                How to return to Global Jobs Live
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                If an advertisement opens in a separate browser tab or window
                and you do not want to continue with it, simply switch back to
                the tab where Global Jobs Live is open.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                1
              </span>

              <h3 className="mt-4 font-bold text-slate-900">
                Open your browser tabs
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Open the tab or window switcher on your device.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                2
              </span>

              <h3 className="mt-4 font-bold text-slate-900">
                Select Global Jobs Live
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Select the existing Global Jobs Live tab to return to your
                previous page.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                3
              </span>

              <h3 className="mt-4 font-bold text-slate-900">
                Continue browsing
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Continue searching for jobs and exploring opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* If interested */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8 lg:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <FiExternalLink size={20} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                If an advertisement interests you
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                If an advertisement is relevant to you, you can choose to
                continue with the advertised website or offer. Depending on the
                advertisement, you may be asked to learn more, register,
                download an application, purchase a product or service, or
                complete another action.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Any action you take on an external advertising website is
                governed by that website own terms, privacy policy, and security
                practices.
              </p>
            </div>
          </div>
        </section>

        {/* Contribution */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8 lg:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <FiActivity size={24} />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-slate-950 sm:text-3xl">
              Advertising helps support the platform
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              When you voluntarily interact with an advertisement, any resulting
              advertising revenue can contribute to the costs of operating and
              maintaining Global Jobs Live. This helps us work toward keeping
              the platform accessible without requiring users to pay a
              subscription for basic access.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              You are never required to interact with an advertisement in order
              to browse the platform or look for opportunities.
            </p>
          </div>
        </section>

        {/* Important information */}
        <section className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-7 sm:p-8">
          <h2 className="text-xl font-bold text-slate-950">
            A note about external websites
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            Advertisements may direct you to websites operated by third parties.
            Global Jobs Live does not control the content, privacy practices,
            terms, or security of those external websites. Always review the
            destination before providing personal information, downloading
            files, installing software, making payments, or completing other
            actions.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            If an advertisement appears misleading, inappropriate, or
            suspicious, you can simply close it and return to Global Jobs Live.
          </p>
        </section>

        {/* Return CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
          >
            Return to Global Jobs Live
            <FiArrowUpRight
              size={17}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </section>

      {/* Footer note */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-8 text-center sm:px-6 lg:px-8">
          <p className="text-xs leading-5 text-slate-500">
            <Link
              href="/"
              className="font-semibold text-slate-700 hover:text-blue-600"
            >
              Global Jobs Live
            </Link>{" "}
            is a free job resource platform supported in part by advertising.
          </p>
        </div>
      </footer>
    </main>
  );
}
