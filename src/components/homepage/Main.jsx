import React from 'react'
import Nav from '../header/Nav'
import HeroSection from '../herosection/HeroSection'
import PopularBrand from '../popularBrand/PopularBrand'
import TopDeal from '../topDeals/TopDeal'
import BestOffer from '../bestOffer/BestOffer'
import Footer from '../footer/Footer'

const Main = () => {
  return (
    <div>
        <Nav/>
        <HeroSection/>
        <PopularBrand/>
        <TopDeal/>
        <BestOffer/>
        <Footer/>
      
    </div>
  )
}

export default Main
