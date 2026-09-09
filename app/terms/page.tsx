"use client";

import Banner320x50 from "@/components/ads/Banner320x50";
import NativeBannerAd from "@/components/ads/NativeBannerAd";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiBriefcase,
  FiCheckCircle,
  FiChevronRight,
  FiFileText,
  FiGlobe,
  FiLock,
  FiShield,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "eligibility", title: "Eligibility" },
  { id: "job-listings", title: "Job Listings" },
  { id: "job-seekers", title: "For Job Seekers" },
  { id: "employers", title: "For Employers" },
  { id: "external-websites", title: "External Websites" },
  { id: "prohibited-use", title: "Prohibited Use" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "advertising", title: "Advertising" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "limitation", title: "Limitation of Liability" },
  { id: "changes", title: "Changes to These Terms" },
  { id: "contact", title: "Contact Us" },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label="Jobs4all home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm transition group-hover:scale-105">
              <FiBriefcase size={19} />
            </div>

            <div>
              <span className="block text-lg font-black tracking-tight text-slate-950">
                Jobs4all
              </span>
              <span className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:block">
                Find. Apply. Grow.
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            <FiArrowLeft size={15} />
            <span>Back to Jobs</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
              <FiFileText size={14} />
              Terms & Conditions
            </div>

            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Clear terms for a better job search experience.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              These Terms & Conditions explain the rules that apply when you
              access or use Jobs4all, browse job opportunities, interact with
              listings, or use services made available through our platform.
            </p>
            <Banner320x50 />

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="rounded-full bg-slate-100 px-3 py-1.5 font-medium">
                Last updated: September 2026
              </span>
              <span className="flex items-center gap-1.5">
                <FiGlobe size={14} />
                Remote opportunities worldwide
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                On this page
              </p>

              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    <span>{section.title}</span>
                    <FiChevronRight
                      size={14}
                      className="opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Article */}
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="p-6 sm:p-8 lg:p-12">
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-28">
                <SectionHeading
                  number="01"
                  icon={<FiFileText size={18} />}
                  title="Introduction"
                />

                <p>
                  Welcome to Jobs4all. These Terms & Conditions govern your
                  access to and use of the Jobs4all website and related
                  services.
                </p>

                <p>
                  By accessing or using Jobs4all, you acknowledge that you have
                  read, understood, and agreed to be bound by these Terms. If
                  you do not agree with any part of these Terms, you should not
                  use the platform.
                </p>

                <p>
                  Jobs4all is a remote job search and employment opportunity
                  discovery platform. We provide a place where job seekers can
                  discover opportunities and where employers or other
                  third-party sources may make employment opportunities
                  available.
                </p>
              </section>

              <Divider />
              <NativeBannerAd />

              {/* Eligibility */}
              <section id="eligibility" className="scroll-mt-28">
                <SectionHeading
                  number="02"
                  icon={<FiUserCheck size={18} />}
                  title="Eligibility"
                />

                <p>
                  You must be legally capable of entering into a binding
                  agreement in your country or jurisdiction to use Jobs4all.
                </p>

                <p>
                  If you use Jobs4all on behalf of an organisation, company, or
                  other entity, you confirm that you have the authority to
                  represent that entity and agree to these Terms on its behalf.
                </p>

                <InfoList
                  items={[
                    "You are responsible for providing accurate information when information is requested.",
                    "You must use the platform only for lawful purposes.",
                    "You must not use Jobs4all to impersonate another person or organisation.",
                    "You must not attempt to interfere with the security or normal operation of the platform.",
                  ]}
                />
              </section>

              <Divider />

              {/* Job Listings */}
              <section id="job-listings" className="scroll-mt-28">
                <SectionHeading
                  number="03"
                  icon={<FiBriefcase size={18} />}
                  title="Job Listings"
                />

                <p>
                  Jobs4all may display job opportunities submitted by employers,
                  recruiters, partners, third-party providers, or other sources.
                </p>

                <p>
                  Job information may include titles, descriptions,
                  qualifications, compensation information, locations,
                  application instructions, company information, and external
                  application links.
                </p>

                <p>
                  While we may take reasonable steps to maintain the quality of
                  information displayed on the platform, Jobs4all does not
                  guarantee that every listing is current, complete, accurate,
                  available, or suitable for a particular applicant.
                </p>

                <div className="my-6 rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
                  <div className="flex gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                      <FiShield size={17} />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Always verify an opportunity
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Before sharing sensitive information, paying a fee, or
                        accepting an offer, independently verify the employer,
                        role, compensation, and application process.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <Divider />

              {/* Job Seekers */}
              <section id="job-seekers" className="scroll-mt-28">
                <SectionHeading
                  number="04"
                  icon={<FiUserCheck size={18} />}
                  title="For Job Seekers"
                />

                <p>
                  Jobs4all is designed to help job seekers discover employment
                  opportunities. However, using the platform does not guarantee
                  that you will receive an interview, job offer, employment,
                  income, or any particular result.
                </p>

                <p>
                  You are responsible for reviewing each opportunity carefully
                  and determining whether it is appropriate for your skills,
                  experience, location, and circumstances.
                </p>

                <InfoList
                  items={[
                    "Provide truthful and accurate information in applications and communications.",
                    "Review job descriptions and employer requirements before applying.",
                    "Perform your own due diligence on employers and opportunities.",
                    "Protect your passwords, personal information, and other sensitive credentials.",
                    "Never send money solely because a person or organisation claims to represent Jobs4all.",
                  ]}
                />
              </section>

              <Divider />

              {/* Employers */}
              <section id="employers" className="scroll-mt-28">
                <SectionHeading
                  number="05"
                  icon={<FiUsers size={18} />}
                  title="For Employers"
                />

                <p>
                  Employers and recruiters who submit or provide job
                  opportunities through Jobs4all are responsible for ensuring
                  that their listings and communications are lawful, accurate,
                  and not misleading.
                </p>

                <p>Employers must not use Jobs4all to:</p>

                <InfoList
                  items={[
                    "Publish fraudulent, deceptive, or misleading employment opportunities.",
                    "Request unlawful payments or fees from applicants.",
                    "Collect personal information for purposes unrelated to legitimate recruitment.",
                    "Discriminate unlawfully against applicants.",
                    "Publish opportunities that violate applicable laws or regulations.",
                    "Misrepresent an organisation, position, salary, benefits, or employment conditions.",
                  ]}
                />

                <p>
                  Jobs4all may remove, restrict, or refuse listings that we
                  believe violate these Terms, applicable laws, or the integrity
                  of the platform.
                </p>
              </section>

              <Divider />

              {/* External Websites */}
              <section id="external-websites" className="scroll-mt-28">
                <SectionHeading
                  number="06"
                  icon={<FiArrowUpRight size={18} />}
                  title="External Websites and Applications"
                />

                <p>
                  Some job listings may direct you to an external website,
                  employer website, recruitment platform, application form, or
                  other third-party service.
                </p>

                <p>
                  Once you leave Jobs4all and visit a third-party website, that
                  website&pos;s own terms, privacy policy, security practices,
                  and other rules may apply.
                </p>

                <p>
                  Jobs4all does not control third-party websites and is not
                  responsible for their content, availability, security, privacy
                  practices, employment decisions, or transactions.
                </p>
              </section>

              <Divider />

              {/* Prohibited Use */}
              <section id="prohibited-use" className="scroll-mt-28">
                <SectionHeading
                  number="07"
                  icon={<FiLock size={18} />}
                  title="Prohibited Use"
                />

                <p>
                  You agree not to misuse Jobs4all or attempt to access the
                  platform in a manner that could harm the service, its users,
                  employers, or third parties.
                </p>

                <InfoList
                  items={[
                    "Use automated systems, bots, crawlers, or scraping tools in a way that violates our policies or interferes with the platform.",
                    "Attempt to gain unauthorised access to accounts, systems, data, or infrastructure.",
                    "Upload or distribute malicious code, viruses, or harmful software.",
                    "Use the platform to commit fraud, scams, identity theft, or other unlawful activity.",
                    "Copy, reproduce, sell, or commercially exploit platform content without permission.",
                    "Attempt to manipulate job listings, applications, rankings, traffic, or other platform functionality.",
                    "Harass, threaten, or abuse other users.",
                  ]}
                />
              </section>

              <Divider />

              {/* Intellectual Property */}
              <section id="intellectual-property" className="scroll-mt-28">
                <SectionHeading
                  number="08"
                  icon={<FiCheckCircle size={18} />}
                  title="Intellectual Property"
                />

                <p>
                  Unless otherwise stated, the Jobs4all name, branding,
                  interface, design, software, graphics, logos, text, and
                  original platform content are owned by or licensed to Jobs4all
                  and are protected by applicable intellectual property laws.
                </p>

                <p>
                  You may access and use the platform for its intended purpose,
                  including searching for and applying to employment
                  opportunities. You may not reproduce, modify, distribute,
                  sell, or create derivative works from Jobs4all content without
                  appropriate permission.
                </p>

                <p>
                  Job descriptions, company names, logos, and other third-party
                  materials may belong to their respective owners.
                </p>
              </section>

              <Divider />

              {/* Advertising */}
              <section id="advertising" className="scroll-mt-28">
                <SectionHeading
                  number="09"
                  icon={<FiGlobe size={18} />}
                  title="Advertising"
                />

                <p>
                  Jobs4all may display advertisements, sponsored content,
                  promotional links, or other commercial material from
                  third-party advertising providers.
                </p>

                <p>
                  The appearance of an advertisement on Jobs4all does not mean
                  that Jobs4all endorses, guarantees, or recommends the
                  advertised product, service, company, or offer.
                </p>

                <p>
                  If you interact with an advertisement or visit an
                  advertiser&apos;s website, you do so at your own discretion
                  and subject to the advertiser&apos;s terms and policies.
                </p>
              </section>

              <Divider />

              {/* Disclaimers */}
              <section id="disclaimers" className="scroll-mt-28">
                <SectionHeading
                  number="10"
                  icon={<FiShield size={18} />}
                  title="Disclaimers"
                />

                <p>
                  Jobs4all is provided on an as available and as is basis to the
                  extent permitted by applicable law.
                </p>

                <p>
                  We do not guarantee that the platform will always be
                  available, uninterrupted, error-free, secure, or free from
                  harmful components.
                </p>

                <p>
                  We do not guarantee the accuracy, authenticity, legality,
                  completeness, availability, or suitability of any job listing,
                  employer, recruiter, applicant, third-party website, or other
                  information made available through the platform.
                </p>

                <p>
                  Jobs4all does not act as an employer, recruitment agency,
                  employment guarantor, or representative of any employer unless
                  expressly stated otherwise.
                </p>

                <div className="my-6 grid gap-4 sm:grid-cols-3">
                  <TrustCard
                    icon={<FiBriefcase size={18} />}
                    title="No job guarantee"
                    text="Using Jobs4all does not guarantee employment."
                  />

                  <TrustCard
                    icon={<FiUserCheck size={18} />}
                    title="Your decision"
                    text="You are responsible for evaluating opportunities."
                  />

                  <TrustCard
                    icon={<FiGlobe size={18} />}
                    title="Third parties"
                    text="External services operate independently."
                  />
                </div>
              </section>

              <Divider />

              {/* Limitation */}
              <section id="limitation" className="scroll-mt-28">
                <SectionHeading
                  number="11"
                  icon={<FiShield size={18} />}
                  title="Limitation of Liability"
                />

                <p>
                  To the maximum extent permitted by applicable law, Jobs4all
                  and its owners, operators, affiliates, partners, employees,
                  contractors, and service providers will not be liable for
                  indirect, incidental, special, consequential, or punitive
                  losses arising from or related to your use of the platform.
                </p>

                <p>
                  This includes, where legally permitted, losses arising from
                  unsuccessful applications, missed employment opportunities,
                  inaccurate job information, employer conduct, recruitment
                  decisions, third-party websites, scams, transactions, or
                  reliance on information displayed through Jobs4all.
                </p>

                <p>
                  Nothing in these Terms is intended to exclude or limit
                  liability that cannot lawfully be excluded or limited under
                  applicable law.
                </p>
              </section>

              <Divider />

              {/* Changes */}
              <section id="changes" className="scroll-mt-28">
                <SectionHeading
                  number="12"
                  icon={<FiFileText size={18} />}
                  title="Changes to These Terms"
                />

                <p>
                  We may update these Terms from time to time to reflect changes
                  to Jobs4all, our services, applicable requirements, or our
                  operating practices.
                </p>

                <p>
                  When changes are made, the updated version will be published
                  on this page with a revised Last updated date.
                </p>

                <p>
                  Your continued use of Jobs4all after updated Terms become
                  available constitutes acceptance of the revised Terms to the
                  extent permitted by applicable law.
                </p>
              </section>

              <Divider />

              {/* Contact */}
              <section id="contact" className="scroll-mt-28">
                <SectionHeading
                  number="13"
                  icon={<FiArrowUpRight size={18} />}
                  title="Contact Us"
                />

                <p>
                  If you have questions, concerns, or feedback about these Terms
                  & Conditions, you can contact the Jobs4all support team.
                </p>

                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                        Email support
                      </p>

                      <a
                        href="mailto:support@job4all.com"
                        className="mt-1 block text-lg font-bold text-slate-950 transition hover:text-blue-600"
                      >
                        support@job4all.com
                      </a>
                    </div>

                    <a
                      href="mailto:support@job4all.com"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
                    >
                      Contact Support
                      <FiArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </section>
            </div>

            {/* Bottom Note */}
            <div className="border-t border-slate-200 bg-slate-50 px-6 py-6 sm:px-8 lg:px-12">
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                  <FiShield size={17} />
                </div>

                <p className="text-xs leading-5 text-slate-500">
                  These Terms & Conditions are intended as general website terms
                  for Jobs4all. They should be reviewed and adapted to reflect
                  the platform&apos;s actual services, business structure,
                  jurisdictions, legal obligations, and operational practices
                  before public launch.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-14 text-center sm:px-6 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
              Ready for your next opportunity?
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Find your next job on Jobs4all.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Explore remote, online, skilled, and entry-level opportunities
              from wherever you are.
            </p>

            <Link
              href="/jobs"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
            >
              Explore Jobs
              <FiArrowUpRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* ----------------------------- */
/* Reusable UI Components         */
/* ----------------------------- */

function SectionHeading({
  number,
  icon,
  title,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <div>
        <p className="text-[10px] font-black tracking-[0.2em] text-blue-600">
          {number}
        </p>

        <h2 className="mt-0.5 text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="my-10 h-px bg-slate-100 sm:my-12" />;
}

function InfoList({ items }: { items: string[] }) {
  return (
    <ul className="my-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
          <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <FiCheckCircle size={12} />
          </span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TrustCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
        {icon}
      </div>

      <h3 className="mt-4 text-sm font-bold text-slate-950">{title}</h3>

      <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
    </div>
  );
}
