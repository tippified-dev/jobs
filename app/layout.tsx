import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Remote Job Guru | Find Your Next Opportunity | Africa's No 1 remote job finder",
  description:
    "Discover online jobs, remote jobs, data entry jobs, side jobs and flexible work opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen bg-white font-sans">
        {children}
        <Script
          src="https://pl31257988.profitableratecpmnetwork.com/5c/62/2c/5c622cb8483fed2af9a1f48dd97164a9.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
