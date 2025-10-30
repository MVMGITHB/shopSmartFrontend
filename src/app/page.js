
import Image from "next/image";
import Main from "@/components/homepage/Main"


export const metadata = {
  title: "Shop Smaart | Best Promo Codes & Coupons for Smarter Shopping",
  description:
    "Discover the latest promo codes, discount coupons, and exclusive deals at ShopSmaart. Save big on fashion, electronics, travel, and more—shop smarter every time you buy",
  metadataBase: new URL("https://shopsmaart.com/"),
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: "/logo2.png", // Path from /public
    shortcut: "/logo2.png",
    apple: "/logo2.png",
  },
  // robots: {
  //   index: false,
  //   follow: false,
  // },
};


export default function Home() {
  
  // JSON-LD for Corporation
  const corporationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ShopSmaart",
    url: "https://shopsmaart.com/",
    logo: "https://shopsmaart.com/ShopSmaart.webp",
    sameAs: [
        "https://www.facebook.com/shopsmaart/",
        "https://www.instagram.com/shopsmaart/",
    ],
  };

  return (
   <div>
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(corporationSchema),
        }}
      />
      <Main/>
   </div>
  );
}
