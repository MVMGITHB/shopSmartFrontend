"use client";

import Image from "next/image";
import Link from "next/link";

export default function AdBanner() {
  return (
    <Link
      href="https://tracking.ajio.business/click?pid=87&offer_id=2&sub1=pass_your_subid%20&redirect=https://www.ajio.com/s/50to90percentoff-140961"
      target="_blank" // opens in new tab
      rel="noopener noreferrer" // security best practice
    >
      <Image
        src="/images/ajionew.jpeg"
        alt="Advertisement Left"
        width={300}
        height={250}
        className="rounded w-full object-contain cursor-pointer"
      />
    </Link>
  );
}
