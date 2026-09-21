import Banner320x50 from "@/components/ads/Banner320x50";
import NativeBannerAd from "@/components/ads/NativeBannerAd";
import Link from "next/link";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiGlobe,
  FiMapPin,
  FiSearch,
  FiSend,
  FiShield,
  FiTrendingUp,
  FiUser,
  FiUsers,
} from "react-icons/fi";

const BASE_URL = "https://globaljobslive.com";

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Nigeria",
  "South Africa",
  "China",
  "India",
  "Japan",
  "Indonesia",
  "New Zealand",
  "Singapore",
];

const jobTypes = [
  {
    title: "Remote Jobs",
    description:
      "Find opportunities that allow you to work remotely and connect with employers beyond your local area.",
    icon: <FiGlobe />,
  },
  {
    title: "Online Jobs",
    description:
      "Explore internet-based opportunities that can be performed online from different locations.",
    icon: <FiMonitorIcon />,
  },
  {
    title: "Skilled Jobs",
    description:
      "Discover opportunities for software engineers, designers, analysts, marketers, writers, managers, and other skilled professionals.",
    icon: <FiTrendingUp />,
  },
  {
    title: "Entry-Level Jobs",
    description:
      "Explore opportunities that may be suitable for people starting their careers or building practical experience.",
    icon: <FiUser />,
  },
  {
    title: "Data Entry",
    description:
      "Find data-entry and information-processing opportunities involving digital records and administrative tasks.",
    icon: <FiFileText />,
  },
  {
    title: "No-Specialized-Qualification Jobs",
    description:
      "Explore flexible opportunities where the requirements may focus more on basic skills, reliability, and the ability to complete assigned tasks.",
    icon: <FiCheckCircle />,
  },
  {
    title: "Artisan Opportunities",
    description:
      "Discover opportunities for practical and trade-based skills, services, and local work.",
    icon: <FiBriefcase />,
  },
];

function FiMonitorIcon() {
  return <FiSearch />;
}

const steps = [
  {
    number: "01",
    title: "Explore available opportunities",
    description:
      "Start by browsing Global Jobs Live and explore remote jobs, online jobs, skilled opportunities, entry-level work, data-entry opportunities, and artisan jobs.",
    icon: <FiSearch />,
  },
  {
    number: "02",
    title: "Choose an opportunity",
    description:
      "Open a job or opportunity that matches your skills, interests, experience, preferred location, or work arrangement. Review the available information before deciding whether to apply.",
    icon: <FiBriefcase />,
  },
  {
    number: "03",
    title: "Review the job details",
    description:
      "Check the job title, company information, location, work arrangement, experience requirements, skills, salary information where available, and application instructions.",
    icon: <FiFileText />,
  },
  {
    number: "04",
    title: "Submit your CV",
    description:
      "When a CV submission is requested, provide your current CV and any other information required by the employer or application process.",
    icon: <FiSend />,
  },
  {
    number: "05",
    title: "Employer review",
    description:
      "After your application is submitted, the employer or hiring organization can review your CV and application information according to its own recruitment process.",
    icon: <FiUsers />,
  },
  {
    number: "06",
    title: "Follow the employer's process",
    description:
      "If an employer is interested in your application, they may contact you or provide further instructions such as an interview, assessment, or additional application steps.",
    icon: <FiArrowRight />,
  },
];

export const metadata = {
  title: "How Global Jobs Live Works | Find Remote & Online Jobs",
  description:
    "Learn how Global Jobs Live works. Discover remote jobs, online jobs, skilled and entry-level opportunities, data entry, artisan jobs and opportunities across 14 countries.",
  alternates: {
    canonical: `${BASE_URL}/how-it-works`,
  },
  openGraph: {
    title: "How Global Jobs Live Works",
    description:
      "Discover how to find and apply for remote, online, skilled, entry-level, data-entry and artisan opportunities on Global Jobs Live.",
    url: `${BASE_URL}/how-it-works`,
    siteName: "Global Jobs Live",
    type: "website",
  },
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.09),transparent_35%)]" />
        <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            <FiArrowRight className="rotate-180" size={16} />
            Back to Global Jobs Live
          </Link>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700">
              <FiBriefcase size={14} />
              How Global Jobs Live works
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Find opportunities. Apply with confidence. Discover what comes
              next.
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Global Jobs Live is a global job resource platform designed to
              make it easier to discover remote jobs, online jobs, skilled
              opportunities, entry-level work, data-entry opportunities, and
              artisan jobs from employers and opportunities across multiple
              countries.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/online-jobs"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
              >
                Find jobs
                <FiArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/location"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                Explore by location
                <FiMapPin size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Banner320x50 />

      {/* Simple explanation */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <FiSearch />,
              title: "Discover",
              text: "Search and explore opportunities that match your skills, interests, experience, and preferred work arrangement.",
            },
            {
              icon: <FiFileText />,
              title: "Review",
              text: "Read the available job information and understand the requirements and application process before applying.",
            },
            {
              icon: <FiSend />,
              title: "Apply",
              text: "Submit your CV or follow the employer's application instructions and allow the hiring organization to review your application.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                {item.icon}
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-950">
                {item.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Step-by-step */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
              The process
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              How to find and apply for a job
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Finding an opportunity on Global Jobs Live is designed to be
              straightforward. Start with a search, review the opportunity, and
              follow the employer application process.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-200 hover:bg-white hover:shadow-md sm:p-7"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
                    {step.icon}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-blue-600">
                        {step.number}
                      </span>

                      <span className="h-px flex-1 bg-slate-200" />
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <NativeBannerAd />

      {/* Job types */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700">
            <FiBriefcase size={13} />
            Explore different types of work
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Opportunities for different skills and experience levels
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Whether you are an experienced professional, starting your career,
            looking for flexible online work, or offering practical skills,
            Global Jobs Live brings different types of opportunities together in
            one place.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jobTypes.map((jobType) => (
            <article
              key={jobType.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                {jobType.icon}
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-950">
                {jobType.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {jobType.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Fresh opportunities */}
      <section className="border-y border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-blue-300">
                <FiClock size={13} />
                Fresh opportunities
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Keep checking for newly posted opportunities
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Job opportunities can change quickly. New listings may become
                available while existing opportunities can close as employers
                progress through their recruitment process. Global Jobs Live is
                designed to help job seekers discover available opportunities
                and return regularly to look for newly posted jobs.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                When you find a fresh opportunity that matches your profile,
                review the details and apply as soon as reasonably possible if
                the position is suitable for you.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                  <FiTrendingUp size={19} />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    A better job-search routine
                  </p>

                  <p className="text-xs text-slate-400">
                    Search. Review. Apply. Repeat.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  "Check for newly posted opportunities.",
                  "Filter opportunities by your preferred category or location.",
                  "Read the requirements before applying.",
                  "Keep your CV updated and ready.",
                  "Apply promptly when you find a suitable opportunity.",
                ].map((item, index) => (
                  <div key={item} className="flex gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-xs font-bold text-blue-300">
                      {index + 1}
                    </div>

                    <p className="text-sm leading-6 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700">
            <FiGlobe size={13} />
            Global coverage
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Explore opportunities across 14 countries
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Global Jobs Live brings together job resources and opportunities
            covering multiple regions around the world. Explore opportunities
            based on your preferred country or look beyond your local market for
            remote and online work.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {countries.map((country) => (
            <div
              key={country}
              className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-700 shadow-sm"
            >
              <FiMapPin className="shrink-0 text-blue-600" size={15} />
              {country}
            </div>
          ))}
        </div>
      </section>

      {/* CV section */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <FiFileText size={22} />
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950">
                Keep your CV ready
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                A strong and up-to-date CV can make the application process
                easier. Before applying, make sure your contact information,
                skills, work experience, education, certifications, and other
                relevant details are current.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Depending on the opportunity, you may submit your CV directly
                through the available application process or be directed to an
                employer application page.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-8">
              <h3 className="text-lg font-bold text-slate-950">
                Before you apply
              </h3>

              <div className="mt-5 space-y-4">
                {[
                  "Make sure your CV is current.",
                  "Highlight skills relevant to the opportunity.",
                  "Read the job requirements carefully.",
                  "Check the employer and application information.",
                  "Never provide sensitive information unless you understand why it is required.",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <FiCheckCircle
                      className="mt-0.5 shrink-0 text-blue-600"
                      size={18}
                    />

                    <p className="text-sm leading-6 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reliability / trust */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7 sm:p-9 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                <FiShield size={21} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-950 sm:text-3xl">
                A straightforward place to discover opportunities
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
                Global Jobs Live is built around a simple purpose: making it
                easier for people to discover employment opportunities from
                different industries and locations. We organize opportunities
                into categories and locations so that job seekers can spend less
                time searching and more time reviewing positions that may be
                relevant to them.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
                We encourage every job seeker to review job details carefully
                and verify the employer and application destination before
                sharing personal information or accepting an offer. A listing
                appearing on Global Jobs Live should not by itself be treated as
                a guarantee of employment or an endorsement of an employer.
              </p>
            </div>

            <Link
              href="/online-jobs"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Browse jobs
              <FiArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <FiBriefcase size={25} />
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Ready to explore your next opportunity?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Browse available jobs, explore different categories, discover
            opportunities across multiple countries, and apply to positions that
            match your goals.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/online-jobs"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Find jobs
              <FiArrowUpRight size={17} />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              Visit Global Jobs Live
              <FiGlobe size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-8 text-center sm:px-6 lg:px-8">
          <p className="text-xs leading-5 text-slate-500">
            <Link
              href="/"
              className="font-semibold text-slate-700 hover:text-blue-600"
            >
              Global Jobs Live
            </Link>{" "}
            is a global job resource platform for discovering employment and
            online work opportunities.
          </p>
        </div>
      </footer>
    </main>
  );
}
