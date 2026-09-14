import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";

const prisma = new PrismaClient();

const companies = [
  {
    name: "Microsoft",
    slug: "microsoft",
    description:
      "Microsoft develops software, cloud services, devices and technology solutions used by organizations and individuals around the world.",
    website: "https://www.microsoft.com",
    country: "United States",
    countryCode: "US",
    isVerified: true,
  },
  {
    name: "Amazon",
    slug: "amazon",
    description:
      "Amazon is a global technology and commerce company operating across cloud computing, e-commerce, digital services and related industries.",
    website: "https://www.amazon.com",
    country: "United States",
    countryCode: "US",
    isVerified: true,
  },
  {
    name: "IBM",
    slug: "ibm",
    description:
      "IBM provides technology, consulting, cloud and artificial intelligence solutions to organizations worldwide.",
    website: "https://www.ibm.com",
    country: "United States",
    countryCode: "US",
    isVerified: true,
  },
  {
    name: "Shopify",
    slug: "shopify",
    description:
      "Shopify provides commerce technology that enables businesses to build and operate online stores and digital commerce experiences.",
    website: "https://www.shopify.com",
    country: "Canada",
    countryCode: "CA",
    isVerified: true,
  },
  {
    name: "Canva",
    slug: "canva",
    description:
      "Canva provides an online visual communication and design platform used by individuals, teams and organizations worldwide.",
    website: "https://www.canva.com",
    country: "Australia",
    countryCode: "AU",
    isVerified: true,
  },
];

async function main() {
  console.log(`Seeding ${companies.length} companies...`);

  for (const company of companies) {
    await prisma.company.upsert({
      where: {
        slug: company.slug,
      },
      update: {
        name: company.name,
        description: company.description,
        website: company.website,
        country: company.country,
        countryCode: company.countryCode,
        isVerified: company.isVerified,
        isActive: true,
      },
      create: {
        ...company,
        isActive: true,
      },
    });
  }

  console.log(`Successfully seeded ${companies.length} companies.`);
}

main()
  .catch((error) => {
    console.error("Error while seeding companies:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });