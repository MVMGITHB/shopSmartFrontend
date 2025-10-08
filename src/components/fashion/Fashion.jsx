import React from 'react'
import Nav from '../header/Nav'
import Footer from '../footer/Footer'
import FashionHero from './FashionHero'
import FashionOffer from './FashionOffer'

const Fashion = () => {
  return (
    <div>
        <Nav/>
        <FashionHero/>
        <FashionOffer/>
        <Footer/>
       
    </div>
  )
}

export default Fashion
