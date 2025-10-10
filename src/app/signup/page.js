import SignupPage from '@/components/auth/SignupPage'
import Footer from '@/components/footer/Footer'
import Nav from '@/components/header/Nav'
import React from 'react'

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
