import BlogMain from '@/components/blogs/BlogMain';
import React from 'react';

export const metadata = {
  title: "Shopping Tips, Deals & Saving Guides | ShopSmaart Blog",
  description:
    "Explore the ShopSmaart blog for the latest shopping tips, buying guides, deal updates, and smart ways to save money online.",
  metadataBase: new URL("https://shopsmaart.com"),
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Shopping Tips, Deals & Saving Guides | ShopSmaart Blog",
    description:
      "Read expert shopping tips, deal guides, and saving strategies on the ShopSmaart blog. Stay updated with the latest offers and trends.",
    url: "https://shopsmaart.com/blogs",
    siteName: "ShopSmaart",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div>
      <BlogMain />
    </div>
  );
};

export default Page;
