import { NextRequest, NextResponse } from "next/server";
type IpApiResponse = {
  country_name?: string;
  country_code?: string;
  error?: boolean;
  reason?: string;
  message?: string;
};
function getClientIp(request: NextRequest): string | null {
  const vercelIp = request.headers.get("x-vercel-forwarded-for");
  if (vercelIp) {
    return vercelIp.split(",")[0].trim();
  }
  const forwardedIp = request.headers.get("x-forwarded-for");
  if (forwardedIp) {
    return forwardedIp.split(",")[0].trim();
  }
  const cloudflareIp = request.headers.get("cf-connecting-ip");
  if (cloudflareIp) {
    return cloudflareIp.trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return null;
}
function isPrivateIp(ip: string | null): boolean {
  if (!ip) return true;
  return (
    ip === "127.0.0.1" ||
    ip === "::1" ||
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(ip)
  );
}
export async function GET(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);
    const url = isPrivateIp(clientIp)
  ? "https://ipapi.co/json/"
  : `https://ipapi.co/${encodeURIComponent(clientIp!)}/json/`;
    const response = await fetch(url, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Location service returned ${response.status}`);
    }
    const data: IpApiResponse = await response.json();
    if (data.error) {
      throw new Error(
        data.message || data.reason || "Unable to determine country",
      );
    }
    return NextResponse.json({
      country_name: data.country_name || null,
      country_code: data.country_code || null,
    });
  } catch (error) {
    console.error("Country detection failed:", error);
    return NextResponse.json(
      {
        country_name: null,
        country_code: null,
      },
      { status: 500 },
    );
  }
}