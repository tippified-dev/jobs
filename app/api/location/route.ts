import { NextRequest, NextResponse } from "next/server";
type IpApiResponse = {
  ip?: string;
  city?: string;
  region?: string;
  region_code?: string;
  country_name?: string;
  country_code?: string;
  postal?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
  org?: string;
  error?: boolean;
  reason?: string;
  message?: string;
};
function getClientIp(request: NextRequest): string | null {
  const headers = [
    "x-vercel-forwarded-for",
    "x-forwarded-for",
    "cf-connecting-ip",
    "x-real-ip",
  ];
  for (const header of headers) {
    const value = request.headers.get(header);
    if (value) {
      return value.split(",")[0].trim();
    }
  }
  return null;
}
function isPrivateIp(ip: string | null) {
  if (!ip) return true;
  return (
    ip === "127.0.0.1" ||
    ip === "::1" ||
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    ip.startsWith("172.16.") ||
    ip.startsWith("172.17.") ||
    ip.startsWith("172.18.") ||
    ip.startsWith("172.19.") ||
    ip.startsWith("172.20.") ||
    ip.startsWith("172.21.") ||
    ip.startsWith("172.22.") ||
    ip.startsWith("172.23.") ||
    ip.startsWith("172.24.") ||
    ip.startsWith("172.25.") ||
    ip.startsWith("172.26.") ||
    ip.startsWith("172.27.") ||
    ip.startsWith("172.28.") ||
    ip.startsWith("172.29.") ||
    ip.startsWith("172.30.") ||
    ip.startsWith("172.31.")
  );
}
export async function GET(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);
    /*
     * Local development cannot provide a real public visitor IP.
     *
     * Therefore, when running localhost, we use the public
     * ipapi.co endpoint so you can see YOUR current public
     * internet location while testing.
     */
    const url = isPrivateIp(clientIp)
      ? "https://ipapi.co/json/"
      : `https://ipapi.co/${encodeURIComponent(clientIp)}/json/`;
    const response = await fetch(url, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "User-Agent": "Jobs4all/1.0",
      },
    });
    if (!response.ok) {
      throw new Error(`Location service returned ${response.status}`);
    }
    const data: IpApiResponse = await response.json();
    if (data.error) {
      throw new Error(
        data.message || data.reason || "Unable to determine location",
      );
    }
    return NextResponse.json({
      ip: data.ip || null,
      city: data.city || null,
      region: data.region || null,
      region_code: data.region_code || null,
      country_name: data.country_name || null,
      country_code: data.country_code || null,
      postal: data.postal || null,
      latitude: data.latitude ?? null,
      longitude: data.longitude ?? null,
      timezone: data.timezone || null,
      org: data.org || null,
    });
  } catch (error) {
    console.error("Jobs4all location detection failed:", error);
    return NextResponse.json(
      {
        error: true,
        message: "Unable to determine visitor location.",
      },
      { status: 500 },
    );
  }
}