"use client";

import { FormEvent, useState } from "react";
import { FiArrowRight, FiCheckCircle, FiLoader } from "react-icons/fi";

type Props = {
  jobId: string;
  jobTitle: string;
  companyName: string;
  jobCountry: string;
};

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
];

export default function OnlineSimpleJobApplication({
  jobId,
  jobTitle,
  companyName,
  jobCountry,
}: Props) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState(jobCountry);
  const [email, setEmail] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!country) {
      setError("Please select your country.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    setSubmitting(true);

    try {
      /*
       * For now, the application is captured locally in the interface.
       *
       * Later we can replace this section with:
       *
       * POST /api/online-jobs/applications
       *
       * and save:
       * - jobId
       * - jobTitle
       * - companyName
       * - name
       * - country
       * - email
       */

      await new Promise((resolve) => setTimeout(resolve, 700));

      console.log("Online Simple Job Application", {
        jobId,
        jobTitle,
        companyName,
        name,
        country,
        email,
      });

      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong while submitting your application. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white">
          <FiCheckCircle size={28} />
        </div>

        <h3 className="mt-5 text-xl font-bold text-black">
          Application submitted
        </h3>

        <p className="mt-2 text-sm leading-6 text-black/60">
          Your details have been submitted for this job. Keep an eye on your
          email for any follow-up.
        </p>

        <div className="mt-5 rounded-xl bg-white p-4 text-left">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            Applied for
          </p>

          <p className="mt-1 text-sm font-bold text-black">{jobTitle}</p>

          <p className="mt-1 text-sm text-black/50">{companyName}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="application-name"
          className="mb-2 block text-sm font-semibold text-black"
        >
          Full name
        </label>

        <input
          id="application-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your full name"
          autoComplete="name"
          className="h-12 w-full rounded-xl border border-blue-100 bg-white px-4 text-sm text-black outline-none transition-all placeholder:text-black/35 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
        />
      </div>

      {/* Country */}
      <div>
        <label
          htmlFor="application-country"
          className="mb-2 block text-sm font-semibold text-black"
        >
          Country
        </label>

        <select
          id="application-country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          className="h-12 w-full rounded-xl border border-blue-100 bg-white px-4 text-sm text-black outline-none transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
        >
          <option value="">Select your country</option>

          {countries.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="application-email"
          className="mb-2 block text-sm font-semibold text-black"
        >
          Email address
        </label>

        <input
          id="application-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          className="h-12 w-full rounded-xl border border-blue-100 bg-white px-4 text-sm text-black outline-none transition-all placeholder:text-black/35 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
        />
      </div>

      {error && (
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? (
          <>
            <FiLoader className="animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Apply for this job
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-center text-xs leading-5 text-black/40">
        No CV upload is required. Your information is used to process your
        application for this listing.
      </p>
    </form>
  );
}
