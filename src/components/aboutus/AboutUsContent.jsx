import React from 'react'
import Nav from '../header/Nav'
import Footer from '../footer/Footer'

const AboutUsContent = () => {
  return (
  <div className="px-4 md:px-16 lg:px-32 py-12 bg-gray-50 text-gray-800 mt-[80]">
  
  <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
   About Us | Shopsmart 
  </h1>

 

  {/* Welcome Section */}
  <section className="mb-10">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
      Shop Smart. Save More. Every Time You Shop.
    </h2>
    <p className="text-gray-700 leading-relaxed mb-4">
      ShopSmaart is your savvy companion in the world of smart shopping. We believe that great deals shouldn’t be hard to find—and that saving money should feel just as good as spending it.

    </p>
    <p className="text-gray-700 leading-relaxed">
     Our mission is simple: to help you shop smarter, not harder. Whether you're hunting for fashion finds, tech upgrades, travel discounts, or everyday essentials, we bring you the latest and most reliable promotional coupons from top brands and trusted retailers.
    </p>
     <p className="text-gray-700 leading-relaxed">
    We curate offers that matter—no expired codes, no gimmicks, just real savings. Our team constantly scans the web to ensure you get fresh deals, exclusive discounts, and seasonal steals right when you need them.
    </p>
     <p className="text-gray-700 leading-relaxed">
     At ShopSmaart, we don’t just deliver coupons—we deliver confidence. Because when you shop smart, you live smart.
    </p>
  </section>

  <section>

    <p className="text-gray-700 font-semibold">
      Visit <a href="https://shopsmaart.com" className="text-blue-600 underline">ShopSmaart.com</a> — 
      your one-stop destination for the best online deals.
    </p>
  </section>
</div>


  )
}

export default AboutUsContent
