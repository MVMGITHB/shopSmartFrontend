import AboutUsMain from '@/components/aboutus/AboutUsMain'
import React from 'react'


export const metadata = {
  title:
    "About Us | Shopsmart – fashion, coupon & Discount",
  description:
    "Discover Shopsmart,",
  metadataBase: new URL("https://shopsmaart.com/"),
  alternates: {
    canonical: "./",
  },
  // robots: {
  //   index: false,
  //   follow: false,
  // },
};

const page = () => {
  return (
    <div>
       <AboutUsMain/>
      
    </div>
  )
}

export default page
