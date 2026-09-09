"use client";

import { useEffect, useRef } from "react";

export default function Banner468x60() {
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
        'key' : '39e4f7e1d4c2dcbd7f665b7d72b428d8',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
      };
    `;

    containerRef.current.appendChild(configScript);

    // Ad invoke script
    const invokeScript = document.createElement("script");

    invokeScript.type = "text/javascript";
    invokeScript.src =
      "https://www.highrevenueformat.com/39e4f7e1d4c2dcbd7f665b7d72b428d8/invoke.js";
    invokeScript.async = true;

    containerRef.current.appendChild(invokeScript);
  }, []);

  return (
    <div className="my-6 flex w-full justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="flex h-15 w-full max-w-117 justify-center overflow-hidden"
      />
    </div>
  );
}
