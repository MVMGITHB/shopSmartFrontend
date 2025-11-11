import React from 'react'
import AllBlogs from './AllBlogs'
import Footer from '../footer/Footer'
import Nav from '../header/Nav'

const BlogMain = () => {
  return (
    <div>
          <Nav/>
        <AllBlogs/>
        <Footer/>
    </div>
  )
}

export default BlogMain