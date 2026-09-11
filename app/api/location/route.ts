import { NextRequest, NextResponse } from "next/server";
type IpLocationResponse = {
  ip?: string;
  country_name?: string;
  country_code?: string;
  error?: boolean;
  reason?: string;
  message?: string;
};
function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return null;
}
export async function GET(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);
    /*
     * During local development, localhost usually gives us
     * 127.0.0.1 or ::1 instead of the visitor's public IP.
     *
     * In that situation, ask ipapi.co to determine the public
     * IP of the server-side request itself.
     */
    const isLocalIp =
      !clientIp ||
      clientIp === "127.0.0.1" ||
      clientIp === "::1" ||
      clientIp.startsWith("192.168.") ||
      clientIp.startsWith("10.");
    const locationUrl = isLocalIp
      ? "https://ipapi.co/json/"
      : `https://ipapi.co/${clientIp}/json/`;
    const response = await fetch(locationUrl, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(
        `Location service returned status ${response.status}`,
      );
    }
    const data: IpLocationResponse = await response.json();
    if (data.error) {
      throw new Error(
        data.message || data.reason || "Location lookup failed",
      );
    }
    return NextResponse.json({
      country_name: data.country_name || "Unknown",
      country_code: data.country_code || null,
    });
  } catch (error) {
    console.error("Server location detection failed:", error);
    return NextResponse.json(
      {
        country_name: null,
        country_code: null,
      },
      {
        status: 200,
      },
    );
  }
}