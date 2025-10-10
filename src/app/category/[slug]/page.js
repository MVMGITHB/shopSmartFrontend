import React from 'react'
import Fashion from '@/components/fashion/Fashion';
import CategoryMain from '@/components/category/CategoryMain';

const categoryData = {
  fashion: {
    title: "Fashion",
    desc: "High Style,<br/>High Saving<br/>Your Fashion<br/>Sale Starts Here!",
    banner: "/category/Frame72.png",
  },
  electronics: {
    title: "Electronics",
    desc: "Gadgets<br/> You’ll Love,<br/> Prices <br/> You’ll Love More.",
    banner: "/category/Frame73.png",
  },
  homekitchen: {
    title: "Home & Kitchen",
    desc: "Home & <br/> Kitchen <br/> Deals That <br/> Spark Joy",
    banner: "/category/Frame74.png",
  },
  beauty: {
    title: "Beauty & Grooming",
    desc: "Beauty & <br/> Grooming <br/> Deals That <br/> Make You Glow",
    banner: "/fashion/Frame72.png",
  },
  flightshotels: {
    title: "Flights & Hotels",
    desc: "Flights <br/> & Hotels <br/> Deals for <br/> Smart Getaways.",
    banner: "/fashion/Frame72.png",
  },
};

const page = ({ params }) => {


  const {slug} =  params;

  
   const data = categoryData[slug];
   console.log("data " , data)
   
//     const data = categoryData[slug] || {
//     title: "Category Not Found",
//     desc: "The page you're looking for doesn't exist.",
//     banner: "/default-banner.png",
//   };

  return (
    <div>
        <CategoryMain data={data}  slug={slug}/>
      
    </div>
  )
}

export default page
