"use client";
import Banner320x50 from "@/components/ads/Banner320x50";
import NativeBannerAd from "@/components/ads/NativeBannerAd";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiArrowLeft, FiCheck, FiMail, FiUser } from "react-icons/fi";
export default function WelcomePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });
  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
    };
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName) {
      newErrors.name = "Please enter your name.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Your name must be at least 2 characters.";
    } else if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(trimmedName)) {
      newErrors.name = "Please enter a valid name.";
    }
    if (!trimmedEmail) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedEmail)) {
      newErrors.email = "Please enter a valid email address.";
    }
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email;
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    localStorage.setItem("jobs4all_user_name", name.trim());
    localStorage.setItem("jobs4all_user_email", email.trim().toLowerCase());
    router.push("/");
  };
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg">
          <button
            type="button"
            onClick={() => router.back()}
            className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
          >
            <FiArrowLeft size={17} />
            Go Back
          </button>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="border-b border-slate-100 px-6 py-7 sm:px-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <FiUser size={22} />
              </div>
              <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Welcome to Jobs4all
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                Tell us a little about yourself so we can make your Jobs4all
                experience more personal.
              </p>
            </div>
            <NativeBannerAd />
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5 px-6 py-7 sm:px-8"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Your name
                </label>
                <div className="relative">
                  <FiUser
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                      if (errors.name) {
                        setErrors((current) => ({
                          ...current,
                          name: "",
                        }));
                      }
                    }}
                    placeholder="Enter your name"
                    className={`h-12 w-full rounded-xl border bg-white pl-10 pr-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
                      errors.name
                        ? "border-red-300 focus:border-red-500 focus:ring-red-50"
                        : "border-slate-200 focus:border-blue-500 focus:ring-blue-50"
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-2 text-xs font-medium text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>
              <Banner320x50 />
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email address
                </label>
                <div className="relative">
                  <FiMail
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (errors.email) {
                        setErrors((current) => ({
                          ...current,
                          email: "",
                        }));
                      }
                    }}
                    placeholder="you@example.com"
                    className={`h-12 w-full rounded-xl border bg-white pl-10 pr-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
                      errors.email
                        ? "border-red-300 focus:border-red-500 focus:ring-red-50"
                        : "border-slate-200 focus:border-blue-500 focus:ring-blue-50"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-xs font-medium text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>
              {/* Privacy note */}
              <div className="rounded-2xl bg-blue-50 px-4 py-3">
                <p className="text-xs leading-5 text-slate-600">
                  Your name and email are saved on this device to recognize you
                  when you return to Jobs4all.
                </p>
              </div>
              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
              >
                <FiCheck size={17} />
                Continue to Jobs4all
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
