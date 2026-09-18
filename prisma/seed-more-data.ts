import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";

const prisma = new PrismaClient();

type CompanySeed = {
  name: string;
  slug: string;
  website: string;
  country: string;
  countryCode: string;
};

const companies: CompanySeed[] = [
  // =========================
  // UNITED STATES
  // =========================
  {
    name: "Lake Port Digital",
    slug: "lake-port-digital",
    website: "https://globaljobslive.com",
    country: "United States",
    countryCode: "US",
  },
  {
    name: "Horizon Peak Systems",
    slug: "horizon-peak-systems",
    website: "https://globaljobslive.com",
    country: "United States",
    countryCode: "US",
  },
  {
    name: "Blue Haven Technologies",
    slug: "blue-haven-technologies",
    website: "https://globaljobslive.com",
    country: "United States",
    countryCode: "US",
  },
  {
    name: "North Star Solutions",
    slug: "north-star-solutions",
    website: "https://globaljobslive.com",
    country: "United States",
    countryCode: "US",
  },
  {
    name: "Cedar Point Digital",
    slug: "cedar-point-digital",
    website: "https://globaljobslive.com",
    country: "United States",
    countryCode: "US",
  },
  {
    name: "Silver Oak Technologies",
    slug: "silver-oak-technologies",
    website: "https://globaljobslive.com",
    country: "United States",
    countryCode: "US",
  },
  {
    name: "Clear Path Analytics",
    slug: "clear-path-analytics",
    website: "https://globaljobslive.com",
    country: "United States",
    countryCode: "US",
  },
  {
    name: "Redwood Business Group",
    slug: "redwood-business-group",
    website: "https://globaljobslive.com",
    country: "United States",
    countryCode: "US",
  },
  {
    name: "Bright Stone Digital",
    slug: "bright-stone-digital",
    website: "https://globaljobslive.com",
    country: "United States",
    countryCode: "US",
  },
  {
    name: "West Bridge Technologies",
    slug: "west-bridge-technologies",
    website: "https://globaljobslive.com",
    country: "United States",
    countryCode: "US",
  },

  // =========================
  // UNITED KINGDOM
  // =========================
  {
    name: "North Bridge Solutions",
    slug: "north-bridge-solutions",
    website: "https://globaljobslive.com",
    country: "United Kingdom",
    countryCode: "GB",
  },
  {
    name: "Crown Field Digital",
    slug: "crown-field-digital",
    website: "https://globaljobslive.com",
    country: "United Kingdom",
    countryCode: "GB",
  },
  {
    name: "West Moor Technologies",
    slug: "west-moor-technologies",
    website: "https://globaljobslive.com",
    country: "United Kingdom",
    countryCode: "GB",
  },
  {
    name: "Sterling Edge Solutions",
    slug: "sterling-edge-solutions",
    website: "https://globaljobslive.com",
    country: "United Kingdom",
    countryCode: "GB",
  },
  {
    name: "Oak Well Systems",
    slug: "oak-well-systems",
    website: "https://globaljobslive.com",
    country: "United Kingdom",
    countryCode: "GB",
  },
  {
    name: "River Stone Digital",
    slug: "river-stone-digital",
    website: "https://globaljobslive.com",
    country: "United Kingdom",
    countryCode: "GB",
  },
  {
    name: "Blue Harbor Consulting",
    slug: "blue-harbor-consulting",
    website: "https://globaljobslive.com",
    country: "United Kingdom",
    countryCode: "GB",
  },
  {
    name: "Kings Way Technology",
    slug: "kings-way-technology",
    website: "https://globaljobslive.com",
    country: "United Kingdom",
    countryCode: "GB",
  },
  {
    name: "Green Field Digital",
    slug: "green-field-digital",
    website: "https://globaljobslive.com",
    country: "United Kingdom",
    countryCode: "GB",
  },
  {
    name: "Albion Business Solutions",
    slug: "albion-business-solutions",
    website: "https://globaljobslive.com",
    country: "United Kingdom",
    countryCode: "GB",
  },

  // =========================
  // CANADA
  // =========================
  {
    name: "Maple Crest Technologies",
    slug: "maple-crest-technologies",
    website: "https://globaljobslive.com",
    country: "Canada",
    countryCode: "CA",
  },
  {
    name: "Northern Lake Digital",
    slug: "northern-lake-digital",
    website: "https://globaljobslive.com",
    country: "Canada",
    countryCode: "CA",
  },
  {
    name: "Pine Ridge Solutions",
    slug: "pine-ridge-solutions",
    website: "https://globaljobslive.com",
    country: "Canada",
    countryCode: "CA",
  },
  {
    name: "Evergreen Peak Systems",
    slug: "evergreen-peak-systems",
    website: "https://globaljobslive.com",
    country: "Canada",
    countryCode: "CA",
  },
  {
    name: "Cedar Lake Technologies",
    slug: "cedar-lake-technologies",
    website: "https://globaljobslive.com",
    country: "Canada",
    countryCode: "CA",
  },
  {
    name: "Great North Digital",
    slug: "great-north-digital",
    website: "https://globaljobslive.com",
    country: "Canada",
    countryCode: "CA",
  },
  {
    name: "Blue Maple Solutions",
    slug: "blue-maple-solutions",
    website: "https://globaljobslive.com",
    country: "Canada",
    countryCode: "CA",
  },
  {
    name: "Rocky Point Systems",
    slug: "rocky-point-systems",
    website: "https://globaljobslive.com",
    country: "Canada",
    countryCode: "CA",
  },
  {
    name: "Prairie Stone Digital",
    slug: "prairie-stone-digital",
    website: "https://globaljobslive.com",
    country: "Canada",
    countryCode: "CA",
  },
  {
    name: "Silver Maple Group",
    slug: "silver-maple-group",
    website: "https://globaljobslive.com",
    country: "Canada",
    countryCode: "CA",
  },

  // =========================
  // AUSTRALIA
  // =========================
  {
    name: "Southern Coast Digital",
    slug: "southern-coast-digital",
    website: "https://globaljobslive.com",
    country: "Australia",
    countryCode: "AU",
  },
  {
    name: "Coral Bay Technologies",
    slug: "coral-bay-technologies",
    website: "https://globaljobslive.com",
    country: "Australia",
    countryCode: "AU",
  },
  {
    name: "Golden Coast Solutions",
    slug: "golden-coast-solutions",
    website: "https://globaljobslive.com",
    country: "Australia",
    countryCode: "AU",
  },
  {
    name: "Blue Ocean Systems",
    slug: "blue-ocean-systems",
    website: "https://globaljobslive.com",
    country: "Australia",
    countryCode: "AU",
  },
  {
    name: "Southern Cross Digital",
    slug: "southern-cross-digital",
    website: "https://globaljobslive.com",
    country: "Australia",
    countryCode: "AU",
  },
  {
    name: "Harbor View Technologies",
    slug: "harbor-view-technologies",
    website: "https://globaljobslive.com",
    country: "Australia",
    countryCode: "AU",
  },
  {
    name: "Sun Coast Solutions",
    slug: "sun-coast-solutions",
    website: "https://globaljobslive.com",
    country: "Australia",
    countryCode: "AU",
  },
  {
    name: "Pacific Edge Systems",
    slug: "pacific-edge-systems",
    website: "https://globaljobslive.com",
    country: "Australia",
    countryCode: "AU",
  },
  {
    name: "Red Earth Digital",
    slug: "red-earth-digital",
    website: "https://globaljobslive.com",
    country: "Australia",
    countryCode: "AU",
  },
  {
    name: "Harbor Stone Group",
    slug: "harbor-stone-group",
    website: "https://globaljobslive.com",
    country: "Australia",
    countryCode: "AU",
  },

  // =========================
  // GERMANY
  // =========================
  {
    name: "Rhein Tech Solutions",
    slug: "rhein-tech-solutions",
    website: "https://globaljobslive.com",
    country: "Germany",
    countryCode: "DE",
  },
  {
    name: "Berlin Digital Works",
    slug: "berlin-digital-works",
    website: "https://globaljobslive.com",
    country: "Germany",
    countryCode: "DE",
  },
  {
    name: "Bavaria Systems Group",
    slug: "bavaria-systems-group",
    website: "https://globaljobslive.com",
    country: "Germany",
    countryCode: "DE",
  },
  {
    name: "Black Forest Technologies",
    slug: "black-forest-technologies",
    website: "https://globaljobslive.com",
    country: "Germany",
    countryCode: "DE",
  },
  {
    name: "Munich Digital Solutions",
    slug: "munich-digital-solutions",
    website: "https://globaljobslive.com",
    country: "Germany",
    countryCode: "DE",
  },
  {
    name: "North Rhine Systems",
    slug: "north-rhine-systems",
    website: "https://globaljobslive.com",
    country: "Germany",
    countryCode: "DE",
  },
  {
    name: "Iron Gate Digital",
    slug: "iron-gate-digital",
    website: "https://globaljobslive.com",
    country: "Germany",
    countryCode: "DE",
  },
  {
    name: "Green Valley Technologies",
    slug: "green-valley-technologies",
    website: "https://globaljobslive.com",
    country: "Germany",
    countryCode: "DE",
  },
  {
    name: "Rhine Valley Solutions",
    slug: "rhine-valley-solutions",
    website: "https://globaljobslive.com",
    country: "Germany",
    countryCode: "DE",
  },
  {
    name: "Central Europe Digital",
    slug: "central-europe-digital",
    website: "https://globaljobslive.com",
    country: "Germany",
    countryCode: "DE",
  },

  // =========================
  // FRANCE
  // =========================
  {
    name: "Lumiere Digital Solutions",
    slug: "lumiere-digital-solutions",
    website: "https://globaljobslive.com",
    country: "France",
    countryCode: "FR",
  },
  {
    name: "Paris Digital Works",
    slug: "paris-digital-works",
    website: "https://globaljobslive.com",
    country: "France",
    countryCode: "FR",
  },
  {
    name: "Blue River Technologies",
    slug: "blue-river-technologies",
    website: "https://globaljobslive.com",
    country: "France",
    countryCode: "FR",
  },
  {
    name: "French Valley Systems",
    slug: "french-valley-systems",
    website: "https://globaljobslive.com",
    country: "France",
    countryCode: "FR",
  },
  {
    name: "Riviera Digital Group",
    slug: "riviera-digital-group",
    website: "https://globaljobslive.com",
    country: "France",
    countryCode: "FR",
  },
  {
    name: "Mont Blanc Technologies",
    slug: "mont-blanc-technologies",
    website: "https://globaljobslive.com",
    country: "France",
    countryCode: "FR",
  },
  {
    name: "Atlantic Coast Solutions",
    slug: "atlantic-coast-solutions",
    website: "https://globaljobslive.com",
    country: "France",
    countryCode: "FR",
  },
  {
    name: "Central France Digital",
    slug: "central-france-digital",
    website: "https://globaljobslive.com",
    country: "France",
    countryCode: "FR",
  },
  {
    name: "Lyon Peak Systems",
    slug: "lyon-peak-systems",
    website: "https://globaljobslive.com",
    country: "France",
    countryCode: "FR",
  },
  {
    name: "Golden Field Technologies",
    slug: "golden-field-technologies",
    website: "https://globaljobslive.com",
    country: "France",
    countryCode: "FR",
  },

  // =========================
  // CHINA
  // =========================
  {
    name: "Shanghai Horizon Systems",
    slug: "shanghai-horizon-systems",
    website: "https://globaljobslive.com",
    country: "China",
    countryCode: "CN",
  },
  {
    name: "Beijing Digital Works",
    slug: "beijing-digital-works",
    website: "https://globaljobslive.com",
    country: "China",
    countryCode: "CN",
  },
  {
    name: "Shenzhen Peak Technologies",
    slug: "shenzhen-peak-technologies",
    website: "https://globaljobslive.com",
    country: "China",
    countryCode: "CN",
  },
  {
    name: "Eastern Gate Solutions",
    slug: "eastern-gate-solutions",
    website: "https://globaljobslive.com",
    country: "China",
    countryCode: "CN",
  },
  {
    name: "Dragon River Digital",
    slug: "dragon-river-digital",
    website: "https://globaljobslive.com",
    country: "China",
    countryCode: "CN",
  },
  {
    name: "Golden Harbor Technologies",
    slug: "golden-harbor-technologies",
    website: "https://globaljobslive.com",
    country: "China",
    countryCode: "CN",
  },
  {
    name: "Pacific Bridge Systems",
    slug: "pacific-bridge-systems",
    website: "https://globaljobslive.com",
    country: "China",
    countryCode: "CN",
  },
  {
    name: "Jade Mountain Digital",
    slug: "jade-mountain-digital",
    website: "https://globaljobslive.com",
    country: "China",
    countryCode: "CN",
  },
  {
    name: "Eastern Valley Group",
    slug: "eastern-valley-group",
    website: "https://globaljobslive.com",
    country: "China",
    countryCode: "CN",
  },
  {
    name: "Silver Dragon Solutions",
    slug: "silver-dragon-solutions",
    website: "https://globaljobslive.com",
    country: "China",
    countryCode: "CN",
  },

  // =========================
  // INDIA
  // =========================
  {
    name: "Blue River Technologies",
    slug: "blue-river-technologies-india",
    website: "https://globaljobslive.com",
    country: "India",
    countryCode: "IN",
  },
  {
    name: "Bharat Digital Solutions",
    slug: "bharat-digital-solutions",
    website: "https://globaljobslive.com",
    country: "India",
    countryCode: "IN",
  },
  {
    name: "Mumbai Tech Works",
    slug: "mumbai-tech-works",
    website: "https://globaljobslive.com",
    country: "India",
    countryCode: "IN",
  },
  {
    name: "Bangalore Systems Group",
    slug: "bangalore-systems-group",
    website: "https://globaljobslive.com",
    country: "India",
    countryCode: "IN",
  },
  {
    name: "Golden Lotus Technologies",
    slug: "golden-lotus-technologies",
    website: "https://globaljobslive.com",
    country: "India",
    countryCode: "IN",
  },
  {
    name: "Eastern Star Digital",
    slug: "eastern-star-digital",
    website: "https://globaljobslive.com",
    country: "India",
    countryCode: "IN",
  },
  {
    name: "New Delhi Solutions",
    slug: "new-delhi-solutions",
    website: "https://globaljobslive.com",
    country: "India",
    countryCode: "IN",
  },
  {
    name: "Indian Ocean Technologies",
    slug: "indian-ocean-technologies",
    website: "https://globaljobslive.com",
    country: "India",
    countryCode: "IN",
  },
  {
    name: "Silver Palm Systems",
    slug: "silver-palm-systems",
    website: "https://globaljobslive.com",
    country: "India",
    countryCode: "IN",
  },
  {
    name: "Next Path Digital",
    slug: "next-path-digital",
    website: "https://globaljobslive.com",
    country: "India",
    countryCode: "IN",
  },

  // =========================
  // JAPAN
  // =========================
  {
    name: "Sakura Digital Works",
    slug: "sakura-digital-works",
    website: "https://globaljobslive.com",
    country: "Japan",
    countryCode: "JP",
  },
  {
    name: "Tokyo Peak Systems",
    slug: "tokyo-peak-systems",
    website: "https://globaljobslive.com",
    country: "Japan",
    countryCode: "JP",
  },
  {
    name: "Osaka Technology Group",
    slug: "osaka-technology-group",
    website: "https://globaljobslive.com",
    country: "Japan",
    countryCode: "JP",
  },
  {
    name: "Rising Sun Technologies",
    slug: "rising-sun-technologies",
    website: "https://globaljobslive.com",
    country: "Japan",
    countryCode: "JP",
  },
  {
    name: "Fuji Digital Solutions",
    slug: "fuji-digital-solutions",
    website: "https://globaljobslive.com",
    country: "Japan",
    countryCode: "JP",
  },
  {
    name: "Pacific Sakura Systems",
    slug: "pacific-sakura-systems",
    website: "https://globaljobslive.com",
    country: "Japan",
    countryCode: "JP",
  },
  {
    name: "Golden Crane Digital",
    slug: "golden-crane-digital",
    website: "https://globaljobslive.com",
    country: "Japan",
    countryCode: "JP",
  },
  {
    name: "Kyoto Digital Works",
    slug: "kyoto-digital-works",
    website: "https://globaljobslive.com",
    country: "Japan",
    countryCode: "JP",
  },
  {
    name: "Eastern Light Technologies",
    slug: "eastern-light-technologies",
    website: "https://globaljobslive.com",
    country: "Japan",
    countryCode: "JP",
  },
  {
    name: "Nippon Business Systems",
    slug: "nippon-business-systems",
    website: "https://globaljobslive.com",
    country: "Japan",
    countryCode: "JP",
  },

  // =========================
  // INDONESIA
  // =========================
  {
    name: "Nusantara Digital Solutions",
    slug: "nusantara-digital-solutions",
    website: "https://globaljobslive.com",
    country: "Indonesia",
    countryCode: "ID",
  },
  {
    name: "Jakarta Digital Works",
    slug: "jakarta-digital-works",
    website: "https://globaljobslive.com",
    country: "Indonesia",
    countryCode: "ID",
  },
  {
    name: "Island Peak Technologies",
    slug: "island-peak-technologies",
    website: "https://globaljobslive.com",
    country: "Indonesia",
    countryCode: "ID",
  },
  {
    name: "Bali Technology Group",
    slug: "bali-technology-group",
    website: "https://globaljobslive.com",
    country: "Indonesia",
    countryCode: "ID",
  },
  {
    name: "Java Digital Systems",
    slug: "java-digital-systems",
    website: "https://globaljobslive.com",
    country: "Indonesia",
    countryCode: "ID",
  },
  {
    name: "Blue Island Solutions",
    slug: "blue-island-solutions",
    website: "https://globaljobslive.com",
    country: "Indonesia",
    countryCode: "ID",
  },
  {
    name: "Golden Archipelago Digital",
    slug: "golden-archipelago-digital",
    website: "https://globaljobslive.com",
    country: "Indonesia",
    countryCode: "ID",
  },
  {
    name: "Surabaya Systems",
    slug: "surabaya-systems",
    website: "https://globaljobslive.com",
    country: "Indonesia",
    countryCode: "ID",
  },
  {
    name: "Emerald Coast Technologies",
    slug: "emerald-coast-technologies",
    website: "https://globaljobslive.com",
    country: "Indonesia",
    countryCode: "ID",
  },
  {
    name: "Pacific Island Digital",
    slug: "pacific-island-digital",
    website: "https://globaljobslive.com",
    country: "Indonesia",
    countryCode: "ID",
  },

  // =========================
  // SOUTH AFRICA
  // =========================
  {
    name: "Cape Horizon Technologies",
    slug: "cape-horizon-technologies",
    website: "https://globaljobslive.com",
    country: "South Africa",
    countryCode: "ZA",
  },
  {
    name: "Johannesburg Digital Works",
    slug: "johannesburg-digital-works",
    website: "https://globaljobslive.com",
    country: "South Africa",
    countryCode: "ZA",
  },
  {
    name: "Savanna Peak Systems",
    slug: "savanna-peak-systems",
    website: "https://globaljobslive.com",
    country: "South Africa",
    countryCode: "ZA",
  },
  {
    name: "Golden Cape Solutions",
    slug: "golden-cape-solutions",
    website: "https://globaljobslive.com",
    country: "South Africa",
    countryCode: "ZA",
  },
  {
    name: "Ubuntu Digital Group",
    slug: "ubuntu-digital-group",
    website: "https://globaljobslive.com",
    country: "South Africa",
    countryCode: "ZA",
  },
  {
    name: "Southern Star Technologies",
    slug: "southern-star-technologies",
    website: "https://globaljobslive.com",
    country: "South Africa",
    countryCode: "ZA",
  },
  {
    name: "Cape Stone Digital",
    slug: "cape-stone-digital",
    website: "https://globaljobslive.com",
    country: "South Africa",
    countryCode: "ZA",
  },
  {
    name: "African Horizon Systems",
    slug: "african-horizon-systems",
    website: "https://globaljobslive.com",
    country: "South Africa",
    countryCode: "ZA",
  },
  {
    name: "Green Valley Technologies",
    slug: "green-valley-technologies-za",
    website: "https://globaljobslive.com",
    country: "South Africa",
    countryCode: "ZA",
  },
  {
    name: "Lion Rock Solutions",
    slug: "lion-rock-solutions",
    website: "https://globaljobslive.com",
    country: "South Africa",
    countryCode: "ZA",
  },

  // =========================
  // NIGERIA
  // =========================
  {
    name: "Lake Port Technologies",
    slug: "lake-port-technologies",
    website: "https://globaljobslive.com",
    country: "Nigeria",
    countryCode: "NG",
  },
  {
    name: "Green Field Digital Services",
    slug: "green-field-digital-services",
    website: "https://globaljobslive.com",
    country: "Nigeria",
    countryCode: "NG",
  },
  {
    name: "West Bridge Solutions",
    slug: "west-bridge-solutions",
    website: "https://globaljobslive.com",
    country: "Nigeria",
    countryCode: "NG",
  },
  {
    name: "Crest Line Innovations",
    slug: "crest-line-innovations",
    website: "https://globaljobslive.com",
    country: "Nigeria",
    countryCode: "NG",
  },
  {
    name: "Blue Peak Systems",
    slug: "blue-peak-systems",
    website: "https://globaljobslive.com",
    country: "Nigeria",
    countryCode: "NG",
  },
  {
    name: "Lagos Horizon Group",
    slug: "lagos-horizon-group",
    website: "https://globaljobslive.com",
    country: "Nigeria",
    countryCode: "NG",
  },
  {
    name: "Savannah Digital Works",
    slug: "savannah-digital-works",
    website: "https://globaljobslive.com",
    country: "Nigeria",
    countryCode: "NG",
  },
  {
    name: "River Stone Business Solutions",
    slug: "river-stone-business-solutions",
    website: "https://globaljobslive.com",
    country: "Nigeria",
    countryCode: "NG",
  },
  {
    name: "Next Wave Nigeria",
    slug: "next-wave-nigeria",
    website: "https://globaljobslive.com",
    country: "Nigeria",
    countryCode: "NG",
  },
  {
    name: "Prime Axis Technologies",
    slug: "prime-axis-technologies",
    website: "https://globaljobslive.com",
    country: "Nigeria",
    countryCode: "NG",
  },

  // =========================
  // NEW ZEALAND
  // =========================
  {
    name: "Pacific Edge Digital",
    slug: "pacific-edge-digital",
    website: "https://globaljobslive.com",
    country: "New Zealand",
    countryCode: "NZ",
  },
  {
    name: "Southern Cross Technologies",
    slug: "southern-cross-technologies",
    website: "https://globaljobslive.com",
    country: "New Zealand",
    countryCode: "NZ",
  },
  {
    name: "Auckland Digital Works",
    slug: "auckland-digital-works",
    website: "https://globaljobslive.com",
    country: "New Zealand",
    countryCode: "NZ",
  },
  {
    name: "Kiwi Peak Systems",
    slug: "kiwi-peak-systems",
    website: "https://globaljobslive.com",
    country: "New Zealand",
    countryCode: "NZ",
  },
  {
    name: "Harbor View Solutions",
    slug: "harbor-view-solutions",
    website: "https://globaljobslive.com",
    country: "New Zealand",
    countryCode: "NZ",
  },
  {
    name: "Green Valley Digital",
    slug: "green-valley-digital-nz",
    website: "https://globaljobslive.com",
    country: "New Zealand",
    countryCode: "NZ",
  },
  {
    name: "Pacific Ridge Technologies",
    slug: "pacific-ridge-technologies",
    website: "https://globaljobslive.com",
    country: "New Zealand",
    countryCode: "NZ",
  },
  {
    name: "Silver Fern Systems",
    slug: "silver-fern-systems",
    website: "https://globaljobslive.com",
    country: "New Zealand",
    countryCode: "NZ",
  },
  {
    name: "Island Bridge Digital",
    slug: "island-bridge-digital",
    website: "https://globaljobslive.com",
    country: "New Zealand",
    countryCode: "NZ",
  },
  {
    name: "Southern Lake Solutions",
    slug: "southern-lake-solutions",
    website: "https://globaljobslive.com",
    country: "New Zealand",
    countryCode: "NZ",
  },
];

const salaryConfig: Record<
  string,
  {
    currency: string;
    skilled: [number, number];
    entry: [number, number];
  }
> = {
  US: {
    currency: "USD",
    skilled: [65000, 160000],
    entry: [18, 35],
  },
  GB: {
    currency: "GBP",
    skilled: [40000, 110000],
    entry: [12, 25],
  },
  CA: {
    currency: "CAD",
    skilled: [60000, 140000],
    entry: [17, 32],
  },
  AU: {
    currency: "AUD",
    skilled: [70000, 160000],
    entry: [25, 40],
  },
  NZ: {
    currency: "NZD",
    skilled: [60000, 135000],
    entry: [22, 35],
  },
  DE: {
    currency: "EUR",
    skilled: [50000, 120000],
    entry: [14, 25],
  },
  FR: {
    currency: "EUR",
    skilled: [40000, 100000],
    entry: [12, 23],
  },
  CN: {
    currency: "CNY",
    skilled: [120000, 400000],
    entry: [25, 60],
  },
  IN: {
    currency: "INR",
    skilled: [600000, 3000000],
    entry: [15000, 45000],
  },
  JP: {
    currency: "JPY",
    skilled: [5000000, 12000000],
    entry: [1200, 2500],
  },
  ID: {
    currency: "IDR",
    skilled: [90000000, 300000000],
    entry: [3000000, 8000000],
  },
  ZA: {
    currency: "ZAR",
    skilled: [300000, 1000000],
    entry: [7000, 18000],
  },
  NG: {
    currency: "NGN",
    skilled: [3000000, 18000000],
    entry: [100000, 500000],
  },
};

const skilledJobs = [
  {
    title: "Full Stack Developer",
    category: "full-stack-developer",
  },
  {
    title: "Frontend Developer",
    category: "frontend-developer",
  },
  {
    title: "Backend Developer",
    category: "backend-developer",
  },
  {
    title: "UI/UX Designer",
    category: "ui-ux-designer",
  },
  {
    title: "Graphic Designer",
    category: "graphic-designer",
  },
  {
    title: "Digital Marketer",
    category: "digital-marketer",
  },
  {
    title: "SEO Specialist",
    category: "seo-specialist",
  },
  {
    title: "Content Writer",
    category: "content-writer",
  },
  {
    title: "Software Engineer",
    category: "software-engineer",
  },
  {
    title: "Data Analyst",
    category: "data-analyst",
  },
  {
    title: "Project Manager",
    category: "project-manager",
  },
  {
    title: "Social Media Manager",
    category: "social-media-manager",
  },
  {
    title: "Product Manager",
    category: "product-manager",
  },
  {
    title: "DevOps Engineer",
    category: "devops-engineer",
  },
  {
    title: "Customer Success Manager",
    category: "customer-success-manager",
  },
  {
    title: "Business Analyst",
    category: "business-analyst",
  },
  {
    title: "Web Designer",
    category: "web-designer",
  },
  {
    title: "Cybersecurity Specialist",
    category: "cybersecurity-specialist",
  },
  {
    title: "Cloud Engineer",
    category: "cloud-engineer",
  },
];

const entryLevelJobs = [
  {
    title: "Data Entry Specialist",
    category: "data-entry",
  },
  {
    title: "Online Survey Assistant",
    category: "online-surveys",
  },
  {
    title: "Transcriptionist",
    category: "transcription",
  },
  {
    title: "Chat Support Agent",
    category: "chat-support",
  },
  {
    title: "Customer Support Representative",
    category: "customer-support",
  },
  {
    title: "Content Moderator",
    category: "content-moderation",
  },
  {
    title: "Product Listing Assistant",
    category: "product-listing",
  },
  {
    title: "Online Research Assistant",
    category: "online-research",
  },
  {
    title: "Email Support Agent",
    category: "email-support",
  },
  {
    title: "Social Media Assistant",
    category: "social-media-assistant",
  },
  {
    title: "Website Tester",
    category: "website-testing",
  },
  {
    title: "App Tester",
    category: "app-testing",
  },
  {
    title: "Captioning Assistant",
    category: "captioning",
  },
  {
    title: "Online Chat Agent",
    category: "online-chat-agent",
  },
  {
    title: "Web Research Assistant",
    category: "web-research",
  },
  {
    title: "Order Processing Assistant",
    category: "order-processing",
  },
  {
    title: "Community Assistant",
    category: "community-assistant",
  },
  {
    title: "Document Formatting Assistant",
    category: "document-formatting",
  },
  {
    title: "Image Tagging Specialist",
    category: "image-tagging",
  },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function getLocation(country: string) {
  const locations: Record<string, string[]> = {
    "United States": [
      "New York, NY",
      "San Francisco, CA",
      "Seattle, WA",
      "Austin, TX",
      "Boston, MA",
    ],
    "United Kingdom": [
      "London, England",
      "Manchester, England",
      "Birmingham, England",
      "Edinburgh, Scotland",
    ],
    Canada: [
      "Toronto, Ontario",
      "Vancouver, British Columbia",
      "Montreal, Quebec",
      "Calgary, Alberta",
    ],
    Australia: [
      "Sydney, NSW",
      "Melbourne, VIC",
      "Brisbane, QLD",
      "Perth, WA",
    ],
    "New Zealand": [
      "Auckland",
      "Wellington",
      "Christchurch",
    ],
    Germany: [
      "Berlin",
      "Munich",
      "Hamburg",
      "Frankfurt",
    ],
    France: [
      "Paris",
      "Lyon",
      "Toulouse",
      "Bordeaux",
    ],
    China: [
      "Beijing",
      "Shanghai",
      "Shenzhen",
      "Guangzhou",
    ],
    India: [
      "Bangalore",
      "Mumbai",
      "Delhi",
      "Hyderabad",
      "Pune",
    ],
    Japan: [
      "Tokyo",
      "Osaka",
      "Yokohama",
      "Nagoya",
    ],
    Indonesia: [
      "Jakarta",
      "Bandung",
      "Surabaya",
    ],
    "South Africa": [
      "Johannesburg",
      "Cape Town",
      "Durban",
      "Pretoria",
    ],
    Nigeria: [
      "Lagos",
      "Abuja",
      "Port Harcourt",
      "Ibadan",
    ],
  };

  const options = locations[country] ?? [country];

  return options[Math.floor(Math.random() * options.length)];
}

function getWorkMode(index: number) {
  if (index % 3 === 0) return "REMOTE" as const;
  if (index % 3 === 1) return "HYBRID" as const;
  return "ONSITE" as const;
}

function getJobType(index: number) {
  if (index % 4 === 0) return "FULL_TIME" as const;
  if (index % 4 === 1) return "PART_TIME" as const;
  if (index % 4 === 2) return "CONTRACT" as const;
  return "FREELANCE" as const;
}

function getExperience(index: number) {
  if (index % 3 === 0) return "ENTRY_LEVEL" as const;
  if (index % 3 === 1) return "MID_LEVEL" as const;
  return "SENIOR_LEVEL" as const;
}

function buildDescription(
  title: string,
  company: CompanySeed,
  location: string,
  workMode: string,
) {
  return `
${title} opportunity at ${company.name}.

${company.name} is a company operating in ${company.country}, with activities spanning digital services, technology, business operations and professional services.

The company is currently seeking a ${title} to join its team. The successful candidate will contribute to relevant projects, collaborate with colleagues, complete assigned responsibilities and support ongoing business activities.

This opportunity is based in ${location} and is offered under a ${workMode.toLowerCase()} work arrangement.

Candidates should review the job requirements carefully and use the application information provided on Global Jobs Live to learn more about this opportunity.

This listing is part of the Global Jobs Live employment resource database.
`.trim();
}

async function seedCompanies() {
  console.log(`\nSeeding ${companies.length} additional companies...\n`);

  for (const company of companies) {
    await prisma.company.upsert({
      where: {
        slug: company.slug,
      },
      update: {
        name: company.name,
        website: company.website,
        country: company.country,
        countryCode: company.countryCode,
        isVerified: false,
        isActive: true,
      },
      create: {
        name: company.name,
        slug: company.slug,
        description: `${company.name} is a company operating in ${company.country}.`,
        website: company.website,
        country: company.country,
        countryCode: company.countryCode,
        isVerified: false,
        isActive: true,
      },
    });

    console.log(`✓ Company: ${company.name}`);
  }
}

async function seedJobs() {
  console.log("\nCreating jobs...\n");

  let jobNumber = 0;

  for (const company of companies) {
    const salary = salaryConfig[company.countryCode];

    if (!salary) {
      console.log(
        `Skipping ${company.name}: salary configuration missing for ${company.countryCode}`,
      );
      continue;
    }

    const selectedSkilled =
      skilledJobs[jobNumber % skilledJobs.length];

    const jobsForCompany = [
      {
        ...selectedSkilled,
        isSkilled: true,
      },
      {
        ...entryLevelJobs[(jobNumber + 5) % entryLevelJobs.length],
        isSkilled: false,
      },
      {
        ...skilledJobs[(jobNumber + 7) % skilledJobs.length],
        isSkilled: true,
      },
    ];

    for (let i = 0; i < jobsForCompany.length; i++) {
      const job = jobsForCompany[i];

      const location = getLocation(company.country);
      const workMode = getWorkMode(jobNumber + i);
      const jobType = getJobType(jobNumber + i);

      const experienceLevel = job.isSkilled
        ? getExperience(jobNumber + i)
        : "ENTRY_LEVEL";

      const [minSalary, maxSalary] = job.isSkilled
        ? salary.skilled
        : salary.entry;

      const title = job.title;

      const slug = `${slugify(title)}-${slugify(
        company.country,
      )}-${company.slug}`;

      const description = buildDescription(
        title,
        company,
        location,
        workMode,
      );

      const companyRecord =
        await prisma.company.findUniqueOrThrow({
          where: {
            slug: company.slug,
          },
          select: {
            id: true,
          },
        });

      const categoryRecord =
        await prisma.jobCategory.findUniqueOrThrow({
          where: {
            slug: job.category,
          },
          select: {
            id: true,
          },
        });

      await prisma.job.upsert({
        where: {
          slug,
        },
        update: {
          title,
          description,
          companyId: companyRecord.id,
          country: company.country,
          countryCode: company.countryCode,
          location,
          categoryId: categoryRecord.id,
          jobType,
          workMode,
          experienceLevel,
          salaryMin: minSalary,
          salaryMax: maxSalary,
          salaryCurrency: salary.currency,
          applicationUrl: "https://globaljobslive.com",
          isVerified: false,
          isFeatured: i === 0,
          isActive: true,
        },
        create: {
          title,
          slug,
          description,
          companyId: companyRecord.id,
          country: company.country,
          countryCode: company.countryCode,
          location,
          categoryId: categoryRecord.id,
          jobType,
          workMode,
          experienceLevel,
          salaryMin: minSalary,
          salaryMax: maxSalary,
          salaryCurrency: salary.currency,
          applicationUrl: "https://globaljobslive.com",
          isVerified: true,
          isFeatured: i === 0,
          isActive: true,
        },
      });

      console.log(
        `✓ Job: ${title} → ${company.name} (${company.country})`,
      );
    }

    jobNumber++;
  }
}

async function main() {
  console.log("======================================");
  console.log("GLOBAL JOBS LIVE - BULK DATA SEED");
  console.log("======================================");

  await seedCompanies();
  await seedJobs();

  const companyCount = await prisma.company.count();
  const jobCount = await prisma.job.count();
  const categoryCount = await prisma.jobCategory.count();

  console.log("\n======================================");
  console.log("SEED COMPLETED");
  console.log("======================================");
  console.log(`Categories: ${categoryCount}`);
  console.log(`Companies:  ${companyCount}`);
  console.log(`Jobs:       ${jobCount}`);
  console.log("======================================");
}

main()
  .catch((error) => {
    console.error("\nSeed failed:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });