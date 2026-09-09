"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiEdit3,
  FiGlobe,
  FiHeadphones,
  FiLayers,
  FiMonitor,
  FiPenTool,
  FiSearch,
  FiSettings,
  FiShoppingBag,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

type JobCategory = {
  title: string;
  description: string;
  jobs: string;
  icon: ReactNode;
  slug: string;
};

const skilledJobs: JobCategory[] = [
  {
    title: "Full Stack Developer",
    description: "Build complete web applications and digital products.",
    jobs: "1,240+",
    icon: <FiLayers />,
    slug: "full-stack-developer",
  },
  {
    title: "Frontend Developer",
    description: "Create modern websites and interactive user experiences.",
    jobs: "980+",
    icon: <FiMonitor />,
    slug: "frontend-developer",
  },
  {
    title: "Backend Developer",
    description: "Build APIs, databases and powerful server-side systems.",
    jobs: "860+",
    icon: <FiSettings />,
    slug: "backend-developer",
  },
  {
    title: "UI/UX Designer",
    description: "Design intuitive digital products and user experiences.",
    jobs: "740+",
    icon: <FiPenTool />,
    slug: "ui-ux-designer",
  },
  {
    title: "Graphic Designer",
    description: "Create visual content, branding and marketing designs.",
    jobs: "1,120+",
    icon: <FiEdit3 />,
    slug: "graphic-designer",
  },
  {
    title: "Digital Marketer",
    description: "Help businesses grow through digital marketing campaigns.",
    jobs: "920+",
    icon: <FiTrendingUp />,
    slug: "digital-marketer",
  },
  {
    title: "SEO Specialist",
    description: "Improve search visibility and organic website traffic.",
    jobs: "610+",
    icon: <FiSearch />,
    slug: "seo-specialist",
  },
  {
    title: "Content Writer",
    description: "Create articles, website copy and engaging content.",
    jobs: "1,430+",
    icon: <FiEdit3 />,
    slug: "content-writer",
  },
  {
    title: "Software Engineer",
    description: "Develop reliable software and scalable technology solutions.",
    jobs: "1,050+",
    icon: <FiCode />,
    slug: "software-engineer",
  },
  {
    title: "Data Analyst",
    description: "Turn business data into useful insights and decisions.",
    jobs: "680+",
    icon: <FiDatabase />,
    slug: "data-analyst",
  },
  {
    title: "Project Manager",
    description: "Coordinate teams, projects and business operations remotely.",
    jobs: "570+",
    icon: <FiBriefcase />,
    slug: "project-manager",
  },
  {
    title: "Social Media Manager",
    description: "Manage social platforms and build online communities.",
    jobs: "890+",
    icon: <FiGlobe />,
    slug: "social-media-manager",
  },
  {
    title: "Product Manager",
    description: "Guide digital products from ideas to successful launches.",
    jobs: "430+",
    icon: <FiBriefcase />,
    slug: "product-manager",
  },
  {
    title: "DevOps Engineer",
    description: "Automate deployments and maintain modern cloud systems.",
    jobs: "390+",
    icon: <FiSettings />,
    slug: "devops-engineer",
  },
  {
    title: "Customer Success Manager",
    description:
      "Help customers get the most value from products and services.",
    jobs: "520+",
    icon: <FiUsers />,
    slug: "customer-success-manager",
  },
  {
    title: "Business Analyst",
    description:
      "Analyze business needs and improve processes and performance.",
    jobs: "460+",
    icon: <FiTrendingUp />,
    slug: "business-analyst",
  },
  {
    title: "Virtual Assistant",
    description:
      "Support businesses and professionals with remote administration.",
    jobs: "1,670+",
    icon: <FiUsers />,
    slug: "virtual-assistant",
  },
  {
    title: "Web Designer",
    description: "Design professional websites for businesses and brands.",
    jobs: "810+",
    icon: <FiMonitor />,
    slug: "web-designer",
  },
  {
    title: "Cybersecurity Specialist",
    description: "Protect systems, applications and digital infrastructure.",
    jobs: "310+",
    icon: <FiCheckCircle />,
    slug: "cybersecurity-specialist",
  },
  {
    title: "Cloud Engineer",
    description: "Build and manage scalable cloud infrastructure.",
    jobs: "350+",
    icon: <FiGlobe />,
    slug: "cloud-engineer",
  },
];

const unskilledJobs: JobCategory[] = [
  {
    title: "Data Entry",
    description: "Enter, organize and update information from anywhere.",
    jobs: "2,480+",
    icon: <FiDatabase />,
    slug: "data-entry",
  },
  {
    title: "Online Surveys",
    description: "Share your opinions and complete paid online surveys.",
    jobs: "1,920+",
    icon: <FiEdit3 />,
    slug: "online-surveys",
  },
  {
    title: "Transcription",
    description: "Convert audio and video recordings into written text.",
    jobs: "1,140+",
    icon: <FiHeadphones />,
    slug: "transcription",
  },
  {
    title: "Chat Support",
    description: "Help customers through online chat and messaging.",
    jobs: "1,360+",
    icon: <FiHeadphones />,
    slug: "chat-support",
  },
  {
    title: "Customer Support",
    description: "Assist customers with questions and everyday requests.",
    jobs: "1,580+",
    icon: <FiUsers />,
    slug: "customer-support",
  },
  {
    title: "Virtual Assistant",
    description: "Handle simple administrative tasks for online businesses.",
    jobs: "1,870+",
    icon: <FiUsers />,
    slug: "virtual-assistant",
  },
  {
    title: "Content Moderation",
    description: "Review online content and help maintain community standards.",
    jobs: "940+",
    icon: <FiCheckCircle />,
    slug: "content-moderation",
  },
  {
    title: "Product Listing",
    description: "Add products, descriptions and information to online stores.",
    jobs: "760+",
    icon: <FiShoppingBag />,
    slug: "product-listing",
  },
  {
    title: "Online Research",
    description: "Find and organize information for businesses and projects.",
    jobs: "1,020+",
    icon: <FiSearch />,
    slug: "online-research",
  },
  {
    title: "Email Support",
    description: "Respond to customer questions through email.",
    jobs: "880+",
    icon: <FiGlobe />,
    slug: "email-support",
  },
  {
    title: "Social Media Assistant",
    description: "Help manage posts, comments and basic social media tasks.",
    jobs: "1,230+",
    icon: <FiGlobe />,
    slug: "social-media-assistant",
  },
  {
    title: "Website Testing",
    description: "Test websites and report usability issues and problems.",
    jobs: "640+",
    icon: <FiMonitor />,
    slug: "website-testing",
  },
  {
    title: "App Testing",
    description: "Test mobile applications and provide useful feedback.",
    jobs: "510+",
    icon: <FiMonitor />,
    slug: "app-testing",
  },
  {
    title: "Captioning",
    description: "Create captions and subtitles for online videos.",
    jobs: "720+",
    icon: <FiEdit3 />,
    slug: "captioning",
  },
  {
    title: "Online Chat Agent",
    description: "Communicate with customers through live chat platforms.",
    jobs: "1,110+",
    icon: <FiHeadphones />,
    slug: "online-chat-agent",
  },
  {
    title: "Simple Web Research",
    description: "Collect basic information from websites and online sources.",
    jobs: "830+",
    icon: <FiSearch />,
    slug: "web-research",
  },
  {
    title: "Order Processing",
    description: "Process customer orders and update basic order information.",
    jobs: "690+",
    icon: <FiShoppingBag />,
    slug: "order-processing",
  },
  {
    title: "Community Assistant",
    description: "Help manage online communities and member requests.",
    jobs: "570+",
    icon: <FiUsers />,
    slug: "community-assistant",
  },
  {
    title: "Document Formatting",
    description: "Format documents, spreadsheets and basic business files.",
    jobs: "620+",
    icon: <FiEdit3 />,
    slug: "document-formatting",
  },
  {
    title: "Image Tagging",
    description: "Label and categorize images for digital projects.",
    jobs: "450+",
    icon: <FiLayers />,
    slug: "image-tagging",
  },
];

export default function JobTypeCategories() {
  const [activeType, setActiveType] = useState<"skilled" | "unskilled">(
    "skilled",
  );

  const jobs = activeType === "skilled" ? skilledJobs : unskilledJobs;

  return (
    <section
      id="job-categories"
      className="border-y border-slate-100 bg-white py-8 sm:py-10 lg:py-12"
      aria-labelledby="job-categories-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-600">
            <FiBriefcase size={13} />
            Explore job opportunities
          </span>

          <h2
            id="job-categories-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Find the right job for your skills
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Explore remote and online jobs across different industries. Whether
            you have professional skills or are looking for flexible work you
            can start with, find opportunities that match what you can do.
          </p>
        </div>

        {/* Job type switcher */}

        <div className="mx-auto mt-6 flex w-full max-w-md rounded-2xl border border-slate-200 bg-slate-50 p-1.5">
          <button
            type="button"
            onClick={() => setActiveType("skilled")}
            className={`relative flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition ${
              activeType === "skilled"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Skilled Jobs
          </button>

          <button
            type="button"
            onClick={() => setActiveType("unskilled")}
            className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition ${
              activeType === "unskilled"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Unskilled Jobs
          </button>
        </div>

        {/* Current category description */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeType}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-7"
          >
            <div className="mb-4 flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
                  {activeType === "skilled"
                    ? "Skilled remote jobs"
                    : "Unskilled & entry-level jobs"}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {activeType === "skilled"
                    ? "Professional opportunities for people with specialized skills and experience."
                    : "Flexible online opportunities that can be started with little or no specialized experience."}
                </p>
              </div>

              <span className="text-xs font-medium text-slate-400">
                {jobs.length} job categories
              </span>
            </div>

            {/* Job cards */}

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.slug}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: Math.min(index * 0.025, 0.35),
                  }}
                >
                  <Link
                    href={`/jobs/${job.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        {job.icon}
                      </div>

                      <FiArrowUpRight
                        size={18}
                        className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600"
                      />
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600">
                        {job.title}
                      </h4>

                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
                        {job.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-4">
                      <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                        <span className="text-xs font-semibold text-blue-600">
                          {job.jobs} jobs
                        </span>

                        <span className="text-[11px] font-medium text-slate-400">
                          Remote
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}

        <div className="mt-7 flex justify-center">
          <Link
            href="/jobs"
            className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Browse all jobs
            <FiArrowUpRight
              size={16}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
