import AboutUsMain from '@/components/aboutus/AboutUsMain'
import TermMain from '@/components/termAndCondition/TermMain'
import React from 'react'


export const metadata = {
  title:
    "Term And Conditon | Shopsmart – fashion, coupon & Discount",
  description:
    "Discover Shopsmart, provide coupons and discount ",
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
      <TermMain/>
    </div>
  )
}

export default page
