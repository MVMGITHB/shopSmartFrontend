import Footer from '@/components/footer/Footer'
import Nav from '@/components/header/Nav'
import PopularBrand from '@/components/popularBrand/PopularBrand'
import React from 'react'


export const metadata = {
  title:
    "Popular Brand| shopsmart – All Popular Brand , flipkart , ajio , levis ,myntra , marks and spencer ",
  description:
    "Discover shopsmart, your reliable platform for daily shopping, stock market trends, PF updates, and tax tips. Stay informed with expert-driven, verified, and easy-to-understand insights every day.",
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
        <div className='mt-25'>
            <PopularBrand/>
        </div>
        <Footer/>
      
    </div>
  )
}

export default page
