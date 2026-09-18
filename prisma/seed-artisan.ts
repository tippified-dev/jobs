import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";

const prisma = new PrismaClient();

const categories = [
  "Solar Panel Installation",
  "POP Installation",
  "Social Media Manager",
  "Makeup Artist",
  "Hair Stylist",
  "Designer",
  "Plumber",
  "Painter",
  "Electrician",
  "Tiler",
  "Cobbler",
  "Barber",
  "CCTV Installation",
  "DSTV Installation",
  "Welder",
  "Mechanic",
  "Vulcaniser",
  "Bricklayer",
  "Carpenter",
  "Sales Representative",
  "Cashier",
  "Nail Technician",
  "Eye Lash Specialist",
  "Phone Repairer",
  "Washerman",
  "Babysitter",
  "Nanny",
  "Chef",
  "Waiter",
  "Gym Instructor",
];

const locations = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  
];

const companyPrefixes = [
  "Prime",
  "Royal",
  "Bright",
  "Golden",
  "Elite",
  "Trusted",
  "First",
  "Pro",
  "Smart",
  "Urban",
  "Metro",
  "Capital",
  "Lagos",
  "Global",
  "Modern",
  "Perfect",
  "Dynamic",
  "Reliable",
  "Express",
  "Top",
];

const companySuffixes = [
  "Services",
  "Solutions",
  "Enterprise",
  "Works",
  "Group",
];

const jobTitles: Record<string, string[]> = {
  "Solar Panel Installation": [
    "Solar Panel Installer",
    "Solar Installation Technician",
    "Solar Energy Technician",
    "Solar PV Installer",
  ],

  "POP Installation": [
    "POP Installer",
    "POP Ceiling Installer",
    "Interior POP Technician",
    "POP Finishing Specialist",
  ],

  "Social Media Manager": [
    "Social Media Manager",
    "Social Media Specialist",
    "Social Media Coordinator",
    "Digital Community Manager",
  ],

  "Makeup Artist": [
    "Professional Makeup Artist",
    "Makeup Artist",
    "Bridal Makeup Artist",
    "Beauty Makeup Specialist",
  ],

  "Hair Stylist": [
    "Hair Stylist",
    "Professional Hair Stylist",
    "Salon Hair Stylist",
    "Hair Care Specialist",
  ],

  "Designer": [
    "Graphic Designer",
    "Creative Designer",
    "Visual Designer",
    "Brand Designer",
  ],

  "Plumber": [
    "Plumber",
    "Residential Plumber",
    "Maintenance Plumber",
    "Plumbing Technician",
  ],

  "Painter": [
    "Painter",
    "Residential Painter",
    "Building Painter",
    "Interior Painter",
  ],

  "Electrician": [
    "Electrician",
    "Residential Electrician",
    "Electrical Technician",
    "Maintenance Electrician",
  ],

  "Tiler": [
    "Tiler",
    "Floor Tiler",
    "Wall Tiler",
    "Tile Installation Specialist",
  ],

  "Cobbler": [
    "Cobbler",
    "Shoe Repair Specialist",
    "Footwear Repair Technician",
    "Shoe Maker",
  ],

  "Barber": [
    "Barber",
    "Professional Barber",
    "Senior Barber",
    "Men's Grooming Specialist",
  ],

  "CCTV Installation": [
    "CCTV Installer",
    "CCTV Technician",
    "Security Camera Installer",
    "Surveillance Technician",
  ],

  "DSTV Installation": [
    "DSTV Installer",
    "Satellite TV Installer",
    "Satellite Technician",
    "DSTV Technician",
  ],

  "Welder": [
    "Welder",
    "Metal Fabricator",
    "Arc Welder",
    "Welding Technician",
  ],

  "Mechanic": [
    "Auto Mechanic",
    "Automobile Technician",
    "Vehicle Maintenance Technician",
    "Motor Mechanic",
  ],

  "Vulcaniser": [
    "Vulcaniser",
    "Tyre Technician",
    "Auto Tyre Technician",
    "Tyre Repair Specialist",
  ],

  "Bricklayer": [
    "Bricklayer",
    "Masonry Worker",
    "Construction Mason",
    "Building Mason",
  ],

  "Carpenter": [
    "Carpenter",
    "Furniture Carpenter",
    "Woodwork Specialist",
    "Construction Carpenter",
  ],

  "Sales Representative": [
    "Sales Representative",
    "Sales Associate",
    "Field Sales Representative",
    "Sales Executive",
  ],

  "Cashier": [
    "Cashier",
    "Retail Cashier",
    "Store Cashier",
    "Point of Sale Operator",
  ],

  "Nail Technician": [
    "Nail Technician",
    "Nail Artist",
    "Manicure Specialist",
    "Nail Care Specialist",
  ],

  "Eye Lash Specialist": [
    "Eyelash Specialist",
    "Lash Technician",
    "Lash Extension Specialist",
    "Beauty Lash Technician",
  ],

  "Phone Repairer": [
    "Phone Repair Technician",
    "Mobile Phone Technician",
    "Smartphone Repair Specialist",
    "Phone Repairer",
  ],

  "Washerman": [
    "Laundry Assistant",
    "Laundry Attendant",
    "Professional Washer",
    "Laundry Specialist",
  ],

  "Babysitter": [
    "Babysitter",
    "Childcare Assistant",
    "Home Childcare Assistant",
    "Childcare Worker",
  ],

  "Nanny": [
    "Nanny",
    "Live-Out Nanny",
    "Childcare Nanny",
    "Family Nanny",
  ],

  "Chef": [
    "Chef",
    "Cook",
    "Kitchen Chef",
    "Restaurant Chef",
  ],

  "Waiter": [
    "Waiter",
    "Restaurant Waiter",
    "Food Service Attendant",
    "Hospitality Server",
  ],

  "Gym Instructor": [
    "Gym Instructor",
    "Fitness Instructor",
    "Personal Trainer",
    "Fitness Coach",
  ],
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getSalary(category: string, index: number) {
  const salaryRanges: Record<string, [number, number]> = {
    "Solar Panel Installation": [120000, 350000],
    "POP Installation": [100000, 300000],
    "Social Media Manager": [100000, 350000],
    "Makeup Artist": [80000, 300000],
    "Hair Stylist": [70000, 250000],
    "Designer": [100000, 350000],
    Plumber: [80000, 250000],
    Painter: [70000, 220000],
    Electrician: [90000, 280000],
    Tiler: [80000, 250000],
    Cobbler: [60000, 200000],
    Barber: [70000, 250000],
    "CCTV Installation": [100000, 300000],
    "DSTV Installation": [80000, 250000],
    Welder: [100000, 300000],
    Mechanic: [100000, 350000],
    Vulcaniser: [70000, 220000],
    Bricklayer: [80000, 250000],
    Carpenter: [90000, 280000],
    "Sales Representative": [80000, 300000],
    Cashier: [60000, 180000],
    "Nail Technician": [70000, 220000],
    "Eye Lash Specialist": [70000, 250000],
    "Phone Repairer": [80000, 300000],
    Washerman: [60000, 180000],
    Babysitter: [60000, 180000],
    Nanny: [70000, 220000],
    Chef: [90000, 300000],
    Waiter: [60000, 180000],
    "Gym Instructor": [80000, 250000],
  };

  const [min, max] = salaryRanges[category] ?? [70000, 200000];

  const variation = (index % 10) * 5000;

  return `₦${(min + variation).toLocaleString("en-NG")} - ₦${(
    max + variation
  ).toLocaleString("en-NG")} per month`;
}

function getDescription(
  category: string,
  title: string,
  location: string,
) {
  return `${title} opportunity for an experienced professional in ${location}, Nigeria. The successful candidate will provide quality ${category.toLowerCase()} services, maintain professional standards, work effectively with clients or customers, and complete assigned tasks reliably.`;
}

async function main() {
  console.log("Starting artisan opportunity generation...");

  /*
   * We only clear the separate artisan opportunities.
   * Your existing Job records are NOT touched.
   */
  await prisma.artisanOpportunity.deleteMany({});

  let totalCreated = 0;

  for (const categoryName of categories) {
    const category = await prisma.artisanCategory.upsert({
      where: {
        slug: slugify(categoryName),
      },
      update: {
        name: categoryName,
        country: "Nigeria",
        isActive: true,
      },
      create: {
        name: categoryName,
        slug: slugify(categoryName),
        country: "Nigeria",
        description: `Find ${categoryName.toLowerCase()} opportunities across Nigeria.`,
        isActive: true,
      },
    });

    const titles = jobTitles[categoryName] ?? [categoryName];
    const opportunities = [];

    for (let i = 0; i < 100; i++) {
      const prefix = companyPrefixes[i % companyPrefixes.length];
      const suffix = companySuffixes[
        Math.floor(i / companyPrefixes.length)
      ];

      const companyName = `${prefix} ${categoryName} ${suffix} ${i + 1}`;

      const location = locations[i % locations.length];

      const title = titles[i % titles.length];

      const slug = `${slugify(title)}-${slugify(location)}-${i + 1}`;

      opportunities.push({
        title,
        slug,
        companyName,
        description: getDescription(
          categoryName,
          title,
          location,
        ),
        country: "Nigeria",
        location,
        jobType: i % 3 === 0 ? "FULL_TIME" : "CONTRACT",
        salary: getSalary(categoryName, i),
        applicationUrl: "https://globaljobslive.com",
        categoryId: category.id,
        isActive: true,
      });
    }

    await prisma.artisanOpportunity.createMany({
      data: opportunities,
    });

    totalCreated += opportunities.length;

    console.log(
      `${categoryName}: 100 opportunities created`,
    );
  }

  console.log("");
  console.log(
    `Finished. ${totalCreated} artisan opportunities created.`,
  );
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });