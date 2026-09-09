import Banner320x50 from "@/components/ads/Banner320x50";
import NativeBannerAd from "@/components/ads/NativeBannerAd";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiChevronRight,
  FiDatabase,
  FiGlobe,
  FiLock,
  FiMail,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
  },
  {
    id: "how-we-use-information",
    title: "3. How We Use Your Information",
  },
  {
    id: "cookies",
    title: "4. Cookies and Similar Technologies",
  },
  {
    id: "advertising",
    title: "5. Advertising and Third-Party Services",
  },
  {
    id: "job-listings",
    title: "6. Job Listings and External Websites",
  },
  {
    id: "information-sharing",
    title: "7. Information Sharing",
  },
  {
    id: "data-security",
    title: "8. Data Security",
  },
  {
    id: "data-retention",
    title: "9. Data Retention",
  },
  {
    id: "your-rights",
    title: "10. Your Rights and Choices",
  },
  {
    id: "children",
    title: "11. Children's Privacy",
  },
  {
    id: "third-party-links",
    title: "12. Third-Party Links",
  },
  {
    id: "policy-changes",
    title: "13. Changes to This Privacy Policy",
  },
  {
    id: "contact",
    title: "14. Contact Us",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
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
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center lg:px-8 lg:py-20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <FiShield size={27} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            Privacy & Security
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            We value your privacy and want you to understand how Jobs4all
            collects, uses and protects information when you use our website and
            services.
          </p>

          <div className="mt-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-500">
            Last updated: September 2026
          </div>
        </div>
      </section>
      <Banner320x50 />

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* Contents */}
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                On this page
              </p>

              <nav className="mt-4 space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm leading-5 text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
                  >
                    <span>{section.title}</span>

                    <FiChevronRight
                      size={14}
                      className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Policy */}
          <article className="min-w-0 rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10 lg:px-14 lg:py-14">
            {/* Introduction */}
            <section id="introduction" className="scroll-mt-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FiGlobe size={19} />
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  1. Introduction
                </h2>
              </div>

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                <p>
                  Welcome to Jobs4all. This Privacy Policy explains how we
                  collect, use, disclose and protect information when you visit
                  or use the Jobs4all website and related services.
                </p>

                <p>
                  Jobs4all is an online job discovery and placement platform
                  designed to help people discover employment opportunities,
                  including online, remote, part-time, freelance, data entry and
                  other flexible work opportunities.
                </p>

                <p>
                  By accessing or using Jobs4all, you acknowledge that you have
                  read and understood this Privacy Policy. If you do not agree
                  with this policy, please discontinue use of the website.
                </p>
              </div>
            </section>

            <div className="my-10 border-t border-slate-100" />

            {/* Information we collect */}
            <section id="information-we-collect" className="scroll-mt-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FiDatabase size={19} />
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  2. Information We Collect
                </h2>
              </div>

              <div className="mt-5 space-y-5 text-sm leading-7 text-slate-600">
                <p>
                  The information we collect depends on how you interact with
                  Jobs4all.
                </p>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Information you provide
                  </h3>

                  <p className="mt-2">
                    You may voluntarily provide information when interacting
                    with features such as job searches, job postings, contact
                    forms or other areas of the website. This information may
                    include your name, email address, company information, job
                    details and other information you choose to provide.
                  </p>
                </div>
                <NativeBannerAd />

                <div>
                  <h3 className="font-bold text-slate-900">
                    Information collected automatically
                  </h3>

                  <p className="mt-2">
                    When you visit the website, certain technical information
                    may be collected automatically. This can include your IP
                    address, browser type, device information, operating system,
                    approximate location, pages visited, referring website and
                    general usage information.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Job search information
                  </h3>

                  <p className="mt-2">
                    Searches and interactions with job categories or listings
                    may be used to improve the relevance, performance and
                    functionality of the Jobs4all platform.
                  </p>
                </div>
              </div>
            </section>

            <div className="my-10 border-t border-slate-100" />

            {/* How we use */}
            <section id="how-we-use-information" className="scroll-mt-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FiUsers size={19} />
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  3. How We Use Your Information
                </h2>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                We may use information collected through the website for
                purposes including:
              </p>

              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                {[
                  "Providing, operating and maintaining the Jobs4all website.",
                  "Helping users discover and interact with relevant job opportunities.",
                  "Processing and displaying job postings submitted by employers.",
                  "Improving website functionality, performance and user experience.",
                  "Understanding website traffic and usage patterns.",
                  "Detecting, preventing and addressing fraud, abuse and security issues.",
                  "Communicating with users about services, inquiries or important updates.",
                  "Complying with applicable legal and regulatory obligations.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="my-10 border-t border-slate-100" />

            {/* Cookies */}
            <section id="cookies" className="scroll-mt-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                4. Cookies and Similar Technologies
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                <p>
                  Jobs4all and certain third-party services may use cookies,
                  local storage, pixels, scripts and similar technologies to
                  provide functionality, understand website usage and improve
                  the user experience.
                </p>

                <p>
                  Cookies may also be used for advertising and measurement
                  purposes. You can manage or restrict cookies through your
                  browser settings. Disabling certain cookies may affect some
                  website functionality.
                </p>
              </div>
            </section>

            <div className="my-10 border-t border-slate-100" />

            {/* Advertising */}
            <section id="advertising" className="scroll-mt-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                5. Advertising and Third-Party Services
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                <p>
                  Jobs4all may display advertisements provided by third-party
                  advertising networks. These providers may use cookies, device
                  identifiers or similar technologies to deliver, measure or
                  personalize advertisements.
                </p>

                <p>
                  Third-party advertising providers operate independently from
                  Jobs4all and may have their own privacy policies governing
                  their collection and use of information.
                </p>

                <p>
                  We recommend reviewing the privacy policies of any third-party
                  advertising services displayed on the website if you want to
                  understand how they process information.
                </p>
              </div>
            </section>

            <div className="my-10 border-t border-slate-100" />

            {/* Job listings */}
            <section id="job-listings" className="scroll-mt-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                6. Job Listings and External Websites
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                <p>
                  Jobs4all may display job opportunities from employers,
                  recruitment sources or other third parties. Some listings may
                  direct you to external websites to complete an application.
                </p>

                <p>
                  Once you leave Jobs4all and visit an external website, that
                  website&apos;s privacy policy and terms will apply. We are not
                  responsible for the privacy practices, security or content of
                  external websites.
                </p>
              </div>
            </section>

            <div className="my-10 border-t border-slate-100" />

            {/* Information sharing */}
            <section id="information-sharing" className="scroll-mt-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                7. Information Sharing
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                <p>
                  We do not sell personal information simply because you visit
                  or use Jobs4all. Information may, however, be shared when
                  reasonably necessary to operate the platform or comply with
                  legal obligations.
                </p>

                <p>This may include sharing information with:</p>

                <ul className="space-y-3">
                  {[
                    "Service providers that help us operate, secure or maintain the website.",
                    "Employers or recruitment partners where necessary to provide a job-related service or where you voluntarily submit information.",
                    "Advertising and analytics providers operating independently under their own policies.",
                    "Government authorities or other parties where disclosure is required by law or necessary to protect rights, safety or security.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <div className="my-10 border-t border-slate-100" />

            {/* Security */}
            <section id="data-security" className="scroll-mt-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FiLock size={19} />
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  8. Data Security
                </h2>
              </div>

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                <p>
                  We take reasonable administrative, technical and
                  organizational measures designed to protect information
                  against unauthorized access, alteration, disclosure or
                  destruction.
                </p>

                <p>
                  However, no website, online service or method of electronic
                  transmission can be guaranteed to be completely secure. You
                  should use appropriate caution when sharing information
                  online.
                </p>
              </div>
            </section>

            <div className="my-10 border-t border-slate-100" />

            {/* Retention */}
            <section id="data-retention" className="scroll-mt-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                9. Data Retention
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                We retain information only for as long as reasonably necessary
                for the purposes described in this Privacy Policy, including
                providing services, maintaining records, resolving disputes,
                preventing abuse and complying with legal obligations.
              </p>
            </section>

            <div className="my-10 border-t border-slate-100" />

            {/* Rights */}
            <section id="your-rights" className="scroll-mt-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                10. Your Rights and Choices
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                <p>
                  Depending on your location and applicable law, you may have
                  rights relating to your personal information. These may
                  include the right to request access to, correction of or
                  deletion of certain personal information.
                </p>

                <p>
                  You may also have choices regarding cookies, advertising
                  technologies and certain communications.
                </p>

                <p>
                  To make a privacy-related request, please contact us using the
                  information provided below. We may need to verify your
                  identity before processing certain requests.
                </p>
              </div>
            </section>

            <div className="my-10 border-t border-slate-100" />

            {/* Children */}
            <section id="children" className="scroll-mt-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                11. Children&apos;s Privacy
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Jobs4all is intended for people who are legally able to use
                employment and job-search services. We do not knowingly collect
                personal information from children where such collection is
                prohibited by applicable law.
              </p>
            </section>

            <div className="my-10 border-t border-slate-100" />

            {/* Third party links */}
            <section id="third-party-links" className="scroll-mt-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                12. Third-Party Links
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Our website may contain links to third-party websites,
                applications or services. We do not control those third parties
                and are not responsible for their privacy practices. We
                encourage you to review their privacy policies before providing
                personal information.
              </p>
            </section>

            <div className="my-10 border-t border-slate-100" />

            {/* Changes */}
            <section id="policy-changes" className="scroll-mt-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                13. Changes to This Privacy Policy
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                We may update this Privacy Policy from time to time to reflect
                changes to our services, technology, legal requirements or
                business practices. When we make changes, we will update the
                date displayed at the top of this page.
              </p>
            </section>

            <div className="my-10 border-t border-slate-100" />

            {/* Contact */}
            <section id="contact" className="scroll-mt-8">
              <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-6 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <FiMail size={19} />
                </div>

                <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
                  14. Contact Us
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  If you have questions, concerns or requests regarding this
                  Privacy Policy or the way Jobs4all handles information, please
                  contact us.
                </p>

                <a
                  href="mailto:privacy@jobs4all.com"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-blue-100 transition hover:bg-blue-600 hover:text-white"
                >
                  <FiMail size={16} />
                  privacy@jobs4all.com
                  <FiArrowUpRight size={15} />
                </a>
              </div>
            </section>

            {/* Footer note */}
            <div className="mt-12 border-t border-slate-100 pt-8">
              <p className="text-xs leading-6 text-slate-400">
                This Privacy Policy is provided as general website privacy
                information and should be reviewed and adapted to reflect
                Jobs4all&apos;s actual data practices, third-party services,
                legal obligations and operating jurisdictions.
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
