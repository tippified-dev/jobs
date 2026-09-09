"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiMapPin,
  FiStar,
} from "react-icons/fi";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  salary: string;
  country: string;
  initials: string;
  comment: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Daniel Brooks",
    role: "Frontend Developer",
    company: "Digital agency",
    salary: "$82,000/year",
    country: "United States",
    initials: "DB",
    comment:
      "I had been applying for remote developer roles for months without much progress. The job search experience here made it much easier to discover opportunities that actually matched my skills. I eventually landed a frontend development role with a US-based team.",
  },
  {
    name: "Amelia Carter",
    role: "Customer Support Specialist",
    company: "E-commerce company",
    salary: "£32,000/year",
    country: "United Kingdom",
    initials: "AC",
    comment:
      "What I liked most was how easy it was to find remote positions without spending hours going through unrelated listings. I applied for a customer support position and was eventually offered the role. It has been a great opportunity for me.",
  },
  {
    name: "Sophie Tremblay",
    role: "Data Analyst",
    company: "Technology company",
    salary: "C$74,000/year",
    country: "Canada",
    initials: "ST",
    comment:
      "I was looking for a remote role that would allow me to work with international teams. Finding relevant data roles became much easier once I knew where to look. I am now working remotely with a Canadian technology company.",
  },
  {
    name: "Michael Okafor",
    role: "Virtual Assistant",
    company: "Business services company",
    salary: "₦4.8M/year",
    country: "Nigeria",
    initials: "MO",
    comment:
      "As someone looking for an online job from Nigeria, I wanted something legitimate and flexible. I found a virtual assistant opportunity that matched my experience and eventually got the position. The flexibility has made a huge difference for me.",
  },
  {
    name: "Thandi Mokoena",
    role: "Digital Marketing Specialist",
    company: "Marketing company",
    salary: "R420,000/year",
    country: "South Africa",
    initials: "TM",
    comment:
      "I was specifically looking for a remote marketing position where I could work with international clients. The process helped me discover opportunities I would not have found through my usual job searches. I am now working remotely with a growing marketing team.",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.98,
  }),
};

export default function Testimonial() {
  const [[currentIndex, direction], setSlide] = useState([0, 0]);

  const goToSlide = (newIndex: number, newDirection: number) => {
    const nextIndex = (newIndex + testimonials.length) % testimonials.length;

    setSlide([nextIndex, newDirection]);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1, 1);
  };

  const previousSlide = () => {
    goToSlide(currentIndex - 1, -1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(([index]) => [(index + 1) % testimonials.length, 1]);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <section
      className="overflow-hidden border-y border-slate-100 bg-slate-50 py-5 sm:py-16 lg:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-600">
            <FiCheckCircle size={13} />
            Candidate stories
          </span>

          <h2
            id="testimonials-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            People finding their next opportunity
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Explore Live testimonials of satisfied candidates who have gotten
            several employment opportunities.
          </p>
        </div>

        {/* Testimonial */}

        <div className="mx-auto mt-8 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.article
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  opacity: {
                    duration: 0.35,
                  },
                  scale: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className="p-6 sm:p-8 lg:p-10"
              >
                {/* Top */}

                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                      {testimonial.initials}
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-950">
                        {testimonial.name}
                      </h3>

                      <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                        <FiMapPin size={13} className="text-blue-600" />
                        {testimonial.country}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}

                  <div className="flex gap-1 text-blue-600">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FiStar key={index} size={15} className="fill-current" />
                    ))}
                  </div>
                </div>

                {/* Comment */}

                <blockquote className="mt-7 text-lg font-medium leading-8 text-slate-800 sm:text-xl sm:leading-9">
                  “{testimonial.comment}”
                </blockquote>

                {/* Job information */}

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                      <FiBriefcase size={14} />
                      Role
                    </div>

                    <p className="mt-2 text-sm font-bold text-slate-900">
                      {testimonial.role}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                      <FiBriefcase size={14} />
                      Company
                    </div>

                    <p className="mt-2 text-sm font-bold text-slate-900">
                      {testimonial.company}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-blue-50 p-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-blue-500">
                      <FiCheckCircle size={14} />
                      Salary
                    </div>

                    <p className="mt-2 text-sm font-bold text-blue-700">
                      {testimonial.salary}
                    </p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            {/* Navigation */}

            <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4 sm:px-8">
              {/* Dots */}

              <div className="flex items-center gap-1.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() =>
                      goToSlide(index, index > currentIndex ? 1 : -1)
                    }
                    aria-label={`Show testimonial ${index + 1}`}
                    className="flex h-6 items-center justify-center"
                  >
                    <motion.span
                      animate={{
                        width: index === currentIndex ? 22 : 6,
                        opacity: index === currentIndex ? 1 : 0.35,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className="block h-1.5 rounded-full bg-blue-600"
                    />
                  </button>
                ))}
              </div>

              {/* Arrows */}

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  <FiArrowLeft size={17} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white transition duration-200 hover:bg-blue-700"
                >
                  <FiArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
