"use client"
import React , {useEffect, useState} from 'react'
import CategoryHero from './CategoryHero'
import Nav from '../header/Nav'
import Footer from '../footer/Footer'
import CategoryOffer from './CategoryOffer'
import axios from "axios";
import { BASE_URL } from '../helper/Helper'

const CategoryMain =  ( {data , slug} ) => {
  
  const [couponData , setCouponData] = useState([])

  const fetchData = async () =>{
     try {

    const res = await axios.get(
      `${BASE_URL}/api/coupon/getCouponByCategorySlug/${slug}`
    );

    // console.log("Responseis " , res.data)
    setCouponData(res.data.data)

    
  } catch (error) {
    
  }

  }

  useEffect(()=>{
    fetchData()
  }, [])

 


  return (
    <div>
      <Nav/>
      <CategoryHero data={data}/>
      <CategoryOffer couponData={couponData}/>
      <Footer/>
    </div>
  )
}

export default CategoryMain
