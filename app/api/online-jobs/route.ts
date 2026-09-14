import { NextResponse } from "next/server";
type OnlineJob = {
  id: string;
  slug: string;
  company: string;
  location: string;
  title: string;
  description: string;
  type: "on-site" | "remote" | "hybrid";
  salaryRange: string;
  status: "active";
  companyDescription: string;
  category:
    | "skilled"
    | "unskilled"
    | "data entry"
    | "online side hustle"
    | "chat with people for pay";
  datePosted: string;
};
const today = new Date().toISOString().split("T")[0];
const onlineJobs: OnlineJob[] = [
  {
    id: "online-001",
    slug: "remote-customer-support-specialist-united-states",
    company: "Northstar Digital Works",
    location: "United States",
    title: "Remote Customer Support Specialist",
    description:
      "Provide online customer assistance, respond to enquiries, resolve routine issues, and maintain clear communication with customers through digital support channels.",
    type: "remote",
    salaryRange: "$22–$32/hour",
    status: "active",
    companyDescription:
      "Northstar Digital Works is a fictional technology services company created for the Globaljobslive promotional dataset.",
    category: "skilled",
    datePosted: today,
  },
  {
    id: "online-002",
    slug: "online-chat-support-associate-united-kingdom",
    company: "Thames Remote Services",
    location: "United Kingdom",
    title: "Online Chat Support Associate",
    description:
      "Communicate with customers through live chat, answer common questions, provide helpful information, and escalate complex enquiries to the appropriate support team.",
    type: "remote",
    salaryRange: "£14–£20/hour",
    status: "active",
    companyDescription:
      "Thames Remote Services is a fictional digital support company created for the Globaljobslive promotional dataset.",
    category: "chat with people for pay",
    datePosted: today,
  },
  {
    id: "online-003",
    slug: "remote-data-entry-specialist-canada",
    company: "Mapleline Online Services",
    location: "Canada",
    title: "Remote Data Entry Specialist",
    description:
      "Enter, update, organise, and verify digital records while maintaining accuracy and following standard data management procedures.",
    type: "remote",
    salaryRange: "C$22–C$30/hour",
    status: "active",
    companyDescription:
      "Mapleline Online Services is a fictional business services company created for the Globaljobslive promotional dataset.",
    category: "data entry",
    datePosted: today,
  },
  {
    id: "online-004",
    slug: "online-content-assistant-australia",
    company: "Southern Cross Digital",
    location: "Australia",
    title: "Online Content Assistant",
    description:
      "Assist with digital content preparation, basic research, content organisation, and routine online publishing tasks across business platforms.",
    type: "hybrid",
    salaryRange: "A$28–A$38/hour",
    status: "active",
    companyDescription:
      "Southern Cross Digital is a fictional digital media company created for the Globaljobslive promotional dataset.",
    category: "skilled",
    datePosted: today,
  },
  {
    id: "online-005",
    slug: "remote-virtual-assistant-germany",
    company: "RhineBridge Services",
    location: "Germany",
    title: "Remote Virtual Assistant",
    description:
      "Support daily online administration by organising information, managing routine digital tasks, preparing documents, and assisting with scheduling.",
    type: "remote",
    salaryRange: "€16–€24/hour",
    status: "active",
    companyDescription:
      "RhineBridge Services is a fictional remote business support company created for the Globaljobslive promotional dataset.",
    category: "online side hustle",
    datePosted: today,
  },
  {
    id: "online-006",
    slug: "online-community-chat-assistant-new-zealand",
    company: "KiwiCloud Support",
    location: "New Zealand",
    title: "Online Community Chat Assistant",
    description:
      "Engage with community members through online chat, answer general questions, direct users to useful resources, and maintain a welcoming digital environment.",
    type: "remote",
    salaryRange: "NZ$25–NZ$34/hour",
    status: "active",
    companyDescription:
      "KiwiCloud Support is a fictional online community services company created for the Globaljobslive promotional dataset.",
    category: "chat with people for pay",
    datePosted: today,
  },
  {
    id: "online-007",
    slug: "remote-online-research-assistant-netherlands",
    company: "Orange Harbor Online",
    location: "Netherlands",
    title: "Remote Online Research Assistant",
    description:
      "Conduct basic online research, collect publicly available information, organise findings, and prepare concise digital research notes.",
    type: "remote",
    salaryRange: "€15–€23/hour",
    status: "active",
    companyDescription:
      "Orange Harbor Online is a fictional online research company created for the Globaljobslive promotional dataset.",
    category: "online side hustle",
    datePosted: today,
  },
  {
    id: "online-008",
    slug: "online-data-entry-assistant-nigeria",
    company: "LagosLink Services",
    location: "Nigeria",
    title: "Online Data Entry Assistant",
    description:
      "Complete routine online data entry tasks, update digital records, check submitted information, and maintain accurate electronic files.",
    type: "remote",
    salaryRange: "₦250,000–₦450,000/month",
    status: "active",
    companyDescription:
      "Lagos Link Services is a fictional digital operations company created for the Globaljobslive promotional dataset.",
    category: "data entry",
    datePosted: today,
  },
];
export async function GET() {
  return NextResponse.json({
    total: onlineJobs.length,
    returned: onlineJobs.length,
    jobs: onlineJobs,
  });
}