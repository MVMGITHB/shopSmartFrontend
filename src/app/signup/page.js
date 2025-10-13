import SignupPage from '@/components/auth/SignupPage'
import Footer from '@/components/footer/Footer'
import Nav from '@/components/header/Nav'
import React from 'react'

export const metadata = {
  title:
    "Shopsmart Sign Up Page | Shopsmart – fashion, coupon & Discount",
  description:
    "Shopsmart Sign Up Page",
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
        <Nav/>
      <SignupPage/>
      <Footer/>
    </div>
  )
}

export default page
