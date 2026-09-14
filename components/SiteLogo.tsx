import Image from "next/image";
import Link from "next/link";

export default function SiteLogo() {
  return (
    <Link
      href="/"
      aria-label="Global Jobs Live home"
      className="inline-flex items-center"
    >
      <Image
        src="/job_log.PNG"
        alt="Global Jobs Live"
        width={190}
        height={48}
        priority
        className="h-10 w-auto object-contain"
      />
    </Link>
  );
}
