import Banner320x50 from "@/components/ads/Banner320x50";
import NativeBannerAd from "@/components/ads/NativeBannerAd";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiMail,
  FiMessageCircle,
  FiShield,
} from "react-icons/fi";

const supportAreas = [
  {
    icon: FiBriefcase,
    title: "Job Listings",
    description:
      "Questions about a job listing, application or an opportunity you found on Jobs4all.",
  },
  {
    icon: FiUsersIcon,
    title: "Employers",
    description:
      "Need help with posting a job or reaching candidates? Our team can point you in the right direction.",
  },
  {
    icon: FiShield,
    title: "Safety & Privacy",
    description:
      "Report suspicious listings, privacy concerns or anything that doesn't look right.",
  },
];

function FiUsersIcon(props: React.ComponentProps<typeof FiMessageCircle>) {
  return <FiMessageCircle {...props} />;
}

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-slate-950"
          >
            Jobs<span className="text-blue-600">4all</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
          >
            <FiArrowLeft size={16} />
            Back to Jobs
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center lg:px-8 lg:py-24">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-100">
            <FiMessageCircle size={28} />
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
            We&apos;re here to help
          </p>

          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Let&apos;s talk about
            <span className="text-blue-600"> your next opportunity.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Have a question, need help with something, or want to report an
            issue? Reach out to the Jobs4all support team and we&apos;ll be
            happy to help.
          </p>
        </div>
      </section>
      <Banner320x50 />

      {/* Main */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact card */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-slate-950 p-7 text-white shadow-xl sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">
                <FiMail size={21} />
              </div>

              <p className="mt-7 text-sm font-semibold text-blue-400">
                Email support
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                We&apos;re one email away.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Send us your question or describe the issue you&apos;re
                experiencing. Include as much relevant information as possible
                so our team can assist you efficiently.
              </p>

              <a
                href="mailto:support@job4all.com"
                className="group mt-7 flex items-center justify-between rounded-2xl bg-white p-4 text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
              >
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-400">
                    Contact address
                  </p>

                  <p className="mt-1 truncate text-sm font-bold sm:text-base">
                    support@job4all.com
                  </p>
                </div>

                <div className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <FiArrowUpRight size={18} />
                </div>
              </a>
            </div>

            {/* Response info */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FiClock size={19} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">Support by email</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Email is currently the best way to reach the Jobs4all
                    support team. Response times may vary depending on the
                    nature and volume of requests.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <NativeBannerAd />

          {/* Right content */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              How we can help
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Tell us what you need.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
              Whether you&apos;re searching for work, posting an opportunity or
              simply have a question about Jobs4all, our support team is here to
              help.
            </p>

            <div className="mt-9 space-y-4">
              {supportAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    className="group rounded-2xl border border-slate-100 bg-slate-50/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-100 hover:bg-blue-50/50"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-slate-100 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <Icon size={19} />
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-950">
                          {area.title}
                        </h3>

                        <p className="mt-1.5 text-sm leading-6 text-slate-500">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Email CTA */}
            <div className="mt-9 border-t border-slate-100 pt-8">
              <a
                href="mailto:support@job4all.com"
                className="group flex w-full items-center justify-between rounded-2xl bg-blue-600 px-5 py-4 text-white shadow-lg shadow-blue-600/15 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20"
              >
                <div className="flex items-center gap-3">
                  <FiMail size={19} />

                  <span className="text-sm font-bold">
                    Email Jobs4all Support
                  </span>
                </div>

                <FiArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center lg:px-8 lg:py-16">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FiCheckCircle size={21} />
          </div>

          <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Looking for your next job?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
            You don&apos;t need to contact us to start searching. Explore
            available opportunities and find work that fits your goals.
          </p>

          <Link
            href="/jobs"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-blue-600 hover:shadow-lg"
          >
            Explore Jobs
            <FiArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
