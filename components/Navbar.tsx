import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-slate-900"
        >
          Job<span className="text-blue-600">Placement</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/jobs"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Find Jobs
          </Link>

          <Link
            href="/online-jobs"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Online Jobs
          </Link>

          <Link
            href="/data-entry"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Data Entry
          </Link>

          <Link
            href="/side-jobs"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Side Jobs
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            Sign In
          </button>

          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
            Post a Job
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 md:hidden"
          aria-label="Open menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
