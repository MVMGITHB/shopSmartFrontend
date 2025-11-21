"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainPopup() {
  const [popup, setPopup] = useState(null);
  const [open, setOpen] = useState(false);

  const pathname = usePathname(); // <-- Detect route change

  useEffect(() => {
    async function getPopup() {
      try {
        const res = await axios.get(
          "https://api.shopsmaart.com/api/popup/getByWebsite/shopSmart"
        );
        setPopup(res.data);

        console.log("response is", res);
      } catch (err) {
        console.log("Popup error:", err);
      }
    }

    getPopup();

    // show popup after 5 seconds
    const timer = setTimeout(() => {

        if(pathname =="/"){
            setOpen(false)
        }else{

         setOpen(true)
        }
     
    }, 5000);

    return () => clearTimeout(timer);
  }, [pathname]); // <-- Runs again if URL changes

  console.log("open", open);
  console.log("popup data", popup);

  if (!popup || !open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl relative overflow-hidden">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 bg-black/70 text-white rounded-full px-2 py-1 text-sm hover:bg-black"
        >
          ✕
        </button>

        <Link href={popup.linkArray?.[0]} target="_blank">
          <Image
            src={"https://api.shopsmaart.com" + popup.images?.[0]}
            alt="Popup"
            width={900}
            height={900}
            className="w-full h-auto rounded-xl"
          />
        </Link>
      </div>

      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}
