import OnlineSimpleJobsCategory from "@/components/OnlineSimpleJobsCategory";
import {
  getOnlineSimpleJobCategory,
  getOnlineSimpleJobsByCategory,
} from "@/lib/online-simple-job-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    category: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;

  const categoryData = getOnlineSimpleJobCategory(category);

  if (!categoryData) {
    return {
      title: "Online Jobs | Global Jobs Live",
    };
  }

  const title = `${categoryData.name} | Online Simple Jobs | Global Jobs Live`;

  const description = `${categoryData.description} Explore simple online jobs from companies across multiple countries on Global Jobs Live.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://globaljobslive.com/online-jobs/${category}`,
    },
    openGraph: {
      title,
      description,
      url: `https://globaljobslive.com/online-jobs/${category}`,
      siteName: "Global Jobs Live",
      type: "website",
    },
  };
}

export default async function OnlineSimpleJobsCategoryPage({
  params,
}: PageProps) {
  const { category } = await params;

  const categoryData = getOnlineSimpleJobCategory(category);

  if (!categoryData) {
    notFound();
  }

  const jobs = getOnlineSimpleJobsByCategory(category);

  return <OnlineSimpleJobsCategory category={categoryData} jobs={jobs} />;
}
