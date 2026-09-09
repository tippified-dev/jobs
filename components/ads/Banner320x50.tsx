"use client";

import { useEffect, useRef } from "react";

export default function Banner320x50() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    if (!containerRef.current) return;

    loaded.current = true;

    // Ad configuration
    const configScript = document.createElement("script");

    configScript.type = "text/javascript";

    configScript.innerHTML = `
      atOptions = {
        'key' : 'c1697ecb3ca8208913632a2427d1b46f',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
      };
    `;

    containerRef.current.appendChild(configScript);

    // Ad invoke script
    const invokeScript = document.createElement("script");

    invokeScript.type = "text/javascript";
    invokeScript.src =
      "https://www.highrevenueformat.com/c1697ecb3ca8208913632a2427d1b46f/invoke.js";
    invokeScript.async = true;

    containerRef.current.appendChild(invokeScript);
  }, []);

  return (
    <div className="my-6 flex w-full justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="flex h-12.5 w-full max-w-[320px] justify-center overflow-hidden"
      />
    </div>
  );
}
