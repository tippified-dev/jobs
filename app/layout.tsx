// import Popunder from "@/components/ads/Popunder";
import type { Metadata, Viewport } from "next";

import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://globaljobslive.com"),

  title: {
    default:
      "Global Jobs Live | Remote Jobs, Online Jobs & Career Opportunities",
    template: "%s | Global Jobs Live",
  },

  description:
    "Discover remote jobs, online jobs, work-from-home opportunities, freelance jobs, side jobs, data entry jobs and career opportunities from around the world.",

  applicationName: "Global Jobs Live",

  keywords: [
    "remote jobs",
    "online jobs",
    "work from home jobs",
    "global jobs",
    "remote work",
    "freelance jobs",
    "side jobs",
    "data entry jobs",
    "online work",
    "international jobs",
    "career opportunities",
  ],

  authors: [
    {
      name: "Global Jobs Live",
      url: "https://globaljobslive.com",
    },
  ],

  creator: "Global Jobs Live",
  publisher: "Global Jobs Live",

  alternates: {
    canonical: "https://globaljobslive.com",
  },

  openGraph: {
    type: "website",
    url: "https://globaljobslive.com",
    siteName: "Global Jobs Live",
    title: "Global Jobs Live | Find Your Next Job Opportunity",
    description:
      "Discover remote jobs, online jobs, work-from-home opportunities, freelance jobs, side jobs and career opportunities from around the world.",
    locale: "en_US",
    images: [
      {
        url: "/job_logo.PNG",
        width: 1200,
        height: 630,
        alt: "Global Jobs Live - Global Job Opportunities",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Global Jobs Live | Find Your Next Job Opportunity",
    description:
      "Discover remote jobs, online jobs, work-from-home opportunities, freelance jobs, side jobs and career opportunities from around the world.",
    images: ["/og-image.PNG"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/job_logo.PNG",
    apple: "/job_logo.PNG",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" antialiased">
      <body className="min-h-screen bg-white font-sans">
        {/* <Popunder /> */}

        {children}

        <Script
          src="https://pl31257988.profitableratecpmnetwork.com/5c/62/2c/5c622cb8483fed2af9a1f48dd97164a9.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
