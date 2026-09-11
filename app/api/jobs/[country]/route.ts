import { NextResponse } from "next/server";
type Job = {
  company: string;
  location: string;
  position: string;
  status: "active";
};
const jobs: Job[] = [
  {
    company: "Northstar Digital",
    location: "United States",
    position: "Frontend Engineer",
    status: "active",
  },
  {
    company: "BluePeak Systems",
    location: "United States",
    position: "Product Designer",
    status: "active",
  },
  {
    company: "Vertex Cloud",
    location: "United States",
    position: "Backend Engineer",
    status: "active",
  },
  {
    company: "MapleCore Technologies",
    location: "Canada",
    position: "Software Engineer",
    status: "active",
  },
  {
    company: "Northern Edge Labs",
    location: "Canada",
    position: "UX Researcher",
    status: "active",
  },
  {
    company: "Pinebridge Digital",
    location: "Canada",
    position: "Data Analyst",
    status: "active",
  },
  {
    company: "Lagos Horizon",
    location: "Nigeria",
    position: "Frontend Developer",
    status: "active",
  },
  {
    company: "NaijaTech Works",
    location: "Nigeria",
    position: "Customer Success Specialist",
    status: "active",
  },
  {
    company: "GreenCity Digital",
    location: "Nigeria",
    position: "Digital Marketing Specialist",
    status: "active",
  },
];
export async function GET(
  request: Request,
  { params }: { params: Promise<{ country: string }> },
) {
  const { country } = await params;
  const decodedCountry = decodeURIComponent(country);
  const countryName = decodedCountry
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const countryJobs = jobs.filter(
    (job) => job.location.toLowerCase() === countryName.toLowerCase(),
  );
  return NextResponse.json({
    country: countryName,
    total: countryJobs.length,
    jobs: countryJobs,
  });
}