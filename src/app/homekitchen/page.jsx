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
    slug:"fashion",
    title:"Fashion Coupons & Promo Codes | ShopSmaart Deals on Clothing & Accessories",
    description:"Save big on the latest fashion trends with ShopSmaart. Find verified coupons and promo codes for clothing, shoes, accessories, and more—shop stylishly and smartly."
  },

  {
    slug:"electronics",
    title:"Electronics Deals & Discount Coupons | ShopSmaart Deals on Electronics",
    description:"Get the best prices on electronics with ShopSmaart. Discover promo codes for smartphones, laptops, gadgets, and more—upgrade your tech without overspending."

  },
  {
    slug:"homekitchen",
    title:"Home & Kitchen Coupons | ShopSmaart Deals for Smart Living",
    description:"Transform your space with savings on home and kitchen essentials. ShopSmaart offers top coupons for appliances, cookware, décor, and more—comfort meets value."
  },
   {
    slug:"beauty",
    title:"Beauty & Grooming Promo Codes | ShopSmaart Discounts on Skincare & More",
    description:"Glow for less with ShopSmaart’s beauty and grooming deals. Find coupons for skincare, haircare, makeup, and personal care products—look good, save better"
  },
   {
    slug:"flightshotels",
    title:"Travel Deals on Flights & Hotels | ShopSmaart Promo Codes for Getaways",
    description:"Plan your next trip with ShopSmaart. Unlock exclusive coupons for flights, hotels, and vacation packages—travel smart and save more on every journey."
  }
]


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