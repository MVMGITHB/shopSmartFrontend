"use client"
import React, { useEffect, useState } from 'react'
import Nav from '../header/Nav'
import PopularHero from './PopularHero'
import Footer from '../footer/Footer'
import CategoryOffer from '../category/CategoryOffer'
import { BASE_URL } from '../helper/Helper'
import axios from 'axios'

const PopularMain = ({ data, slug }) => {

 
  const [couponData, setCouponData] = useState([])

  const fetchData = async () => {

    try {

      const res = await axios.get(
        `${BASE_URL}/api/coupon/getCouponByBrandSlug/${slug}`
      );

      
      setCouponData(res.data.coupons)


    } catch (error) {
      console.log("error", error)

    }

  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <Nav />
      <PopularHero data={data} />
      <CategoryOffer couponData={couponData} />
      <Footer />

    </div>
  )
}

export default PopularMain
