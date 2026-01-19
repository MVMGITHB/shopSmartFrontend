import CategoryMain from '@/components/category/CategoryMain'
import React from 'react'

const categoryData = {
  fashion: {
    title: "Fashion",
    desc: "High Style,<br/>High Saving<br/>Your Fashion<br/>Sale Starts Here!",
    banner: "/category/Frame72.png",
  },
  electronics: {
    title: "Electronics",
    desc: "Gadgets<br/> You’ll Love,<br/> Prices <br/> You’ll Love More.",
    banner: "/category/Frame73.png",
  },
  homekitchen: {
    title: "Home & Kitchen",
    desc: "Home & <br/> Kitchen <br/> Deals That <br/> Spark Joy",
    banner: "/category/Frame74.png",
  },
  beauty: {
    title: "Beauty & Grooming",
    desc: "Beauty & <br/> Grooming <br/> Deals That <br/> Make You Glow",
    banner: "/fashion/Frame72.png",
  },
  flightshotels: {
    title: "Flights & Hotels",
    desc: "Flights <br/> & Hotels <br/> Deals for <br/> Smart Gateways.",
    banner: "/fashion/Frame72.png",
  },
};



const seodata = [
  {
    slug: "fashion",
    title: "Fashion Coupons & Promo Codes | ShopSmaart",
    description:
      "Discover the latest fashion coupons and promo codes on ShopSmaart. Save on clothing, footwear, and accessories with verified deals from top brands."
  },
  {
    slug: "electronics",
    title: "Electronics Deals & Discount Coupons | ShopSmaart",
    description:
      "Find the best electronics deals with ShopSmaart. Get verified discount coupons for mobiles, laptops, gadgets, and accessories at unbeatable prices."
  },
  {
    slug: "homekitchen",
    title: "Home & Kitchen Coupons and Deals | ShopSmaart",
    description:
      "Save more on home and kitchen essentials with ShopSmaart coupons. Explore deals on appliances, cookware, décor, and daily home needs."
  },
  {
    slug: "beauty",
    title: "Beauty & Grooming Deals and Promo Codes | ShopSmaart",
    description:
      "Shop beauty and grooming products for less using ShopSmaart promo codes. Save on skincare, haircare, makeup, and personal care essentials."
  },
  {
    slug: "flightshotels",
    title: "Flight & Hotel Deals with Promo Codes | ShopSmaart",
    description:
      "Book flights and hotels at lower prices with ShopSmaart promo codes. Unlock exclusive travel deals and save on your next trip."
  }
];




export async function generateMetadata({ params }) {
  const { slug } = params;

  // console.log("slug" , slug)

  const seo = seodata.find((item) => item.slug === "homekitchen");
  // console.log("seo " , seo)

  if (!seo) {
    return {
      title: "Page Not Found | ShopSmaart",
      description: "This category does not exist.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: seo.title,
    description: seo.description,
    metadataBase: new URL("https://shopsmaart.com"),
    alternates: {
      canonical: "/electronics",
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://shopsmaart.com/electronics`,
      siteName: "ShopSmaart",
      type: "website",
    },
  };
}



const page = ({params}) => {

    const slug = "homekitchen"

    const data = categoryData[slug];

  return (
    <div>
        <CategoryMain data={data}  slug={slug}/>
         {/* <Fashion/> */}
        {/* <NewsUi url="fashion" /> */}
      
    </div>
  )
}

export default page