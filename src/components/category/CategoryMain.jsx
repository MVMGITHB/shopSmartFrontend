import React from 'react'
import CategoryHero from './CategoryHero'
import Nav from '../header/Nav'
import Footer from '../footer/Footer'
import CategoryOffer from './CategoryOffer'

const CategoryMain = ( data ) => {
  return (
    <div>
      <Nav/>
      <CategoryHero data={data}/>
      <CategoryOffer/>
      <Footer/>
    </div>
  )
}

export default CategoryMain
