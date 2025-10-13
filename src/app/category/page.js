import Category from '@/components/category/Category'
import React from 'react'



export const metadata = {
  title:
    "Category| shopsmart – All Category , fashion , electronics , flightandhotels",
  description:
    "Discover Supernpro, your reliable platform for daily news, stock market trends, PF updates, and tax tips. Stay informed with expert-driven, verified, and easy-to-understand insights every day.",
  metadataBase: new URL("https://shopsmaart.com/"),
  alternates: {
    canonical: "./",
  },
  // robots: {
  //   index: false,
  //   follow: false,
  // },
};

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
    desc: "Delicious <br/> Deals <br/> in Every Bite",
    banner: "/category/Frame74.png",
  },
  beauty: {
    title: "Beauty & Grooming",
    desc: "Discover <br/> Top Beauty <br/> Brands <br/> and  Products.",
    banner: "/fashion/Frame72.png",
  },
  flightshotels: {
    title: "Flights & Hotels",
    desc: "Save <br/> on your <br/> next travel <br/> booking.",
    banner: "/fashion/Frame72.png",
  },
};

const page = () => {
  
  return (
    <div>
      <Category/>
      
    </div>
  )
}

export default page
