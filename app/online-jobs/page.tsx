import OnlineJobsLanding from "@/components/OnlineJobsLanding";
import { getOnlineSimpleJobCount } from "@/lib/online-simple-job-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Simple Jobs | No CV Remote Jobs | Global Jobs Live",
  description:
    "Find simple online jobs that can be done remotely with a smartphone, internet connection and basic skills. Explore micro tasks, surveys, content tasks, testing and online assistance jobs.",
  keywords: [
    "online simple jobs",
    "no CV jobs",
    "online jobs without experience",
    "simple remote jobs",
    "work from home jobs",
    "online jobs worldwide",
    "micro tasks",
    "online surveys",
    "data checking jobs",
    "remote simple jobs",
  ],
  alternates: {
    canonical: "https://globaljobslive.com/online-jobs",
  },
  openGraph: {
    title: "Online Simple Jobs | Global Jobs Live",
    description:
      "Explore simple online jobs available across countries. No CV required for these opportunities.",
    url: "https://globaljobslive.com/online-jobs",
    siteName: "Global Jobs Live",
    type: "website",
  },
};

export default function OnlineJobsPage() {
  const totalJobs = getOnlineSimpleJobCount();

  return <OnlineJobsLanding totalJobs={totalJobs} />;
}
