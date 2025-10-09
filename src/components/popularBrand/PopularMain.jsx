import React from 'react'
import Nav from '../header/Nav'
import PopularHero from './PopularHero'
import Footer from '../footer/Footer'
import CategoryOffer from '../category/CategoryOffer'

const PopularMain = (data) => {
  return (
    <div>
        <Nav/>
        <PopularHero data={data} />
        <CategoryOffer/>
        <Footer/>
      
    </div>
  )
}

export default PopularMain
