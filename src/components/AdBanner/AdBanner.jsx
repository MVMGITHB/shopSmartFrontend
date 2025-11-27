"use client";

import Image from "next/image";
import Link from "next/link";

export default function AdBanner() {
  return (
    <Link
      href="http://www.intellectmedia.net/trk/click.asp?cid=3203&pid=661&did=23840&code=326"
      target="_blank" // opens in new tab
      rel="noopener noreferrer" // security best practice
    >
      <Image
        src="/images/aditybirla.png"
        alt="Advertisement Left"
        width={300}
        height={250}
        className="rounded w-full object-contain cursor-pointer"
      />
    </Link>
  );
}
