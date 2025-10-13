import PrivacyMain from '@/components/privacy/PrivacyMain'
import React from 'react'


export const metadata = {
  title:
    "Privacy Page | Shopsmart – fashion, coupon & Discount",
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
      <PrivacyMain/>
    </div>
  )
}

export default page
