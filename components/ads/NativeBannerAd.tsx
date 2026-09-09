"use client";

import Script from "next/script";

export default function NativeBannerAd() {
  return (
    <div className="w-full">
      <Script
        async
        data-cfasync="false"
        src="https://pl31257987.profitableratecpmnetwork.com/c08b27f15ab5ced7eb1d92b725d1851e/invoke.js"
        strategy="afterInteractive"
      />

      <div id="container-c08b27f15ab5ced7eb1d92b725d1851e" />
    </div>
  );
}
