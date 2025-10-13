import PopularMain from '@/components/popularBrand/PopularMain';
import React from 'react';


const seoBrand = [
  {
  slug:"flipkart",
  title:"Flipkart | shopsmart",
  description:"High Style , High Saving Your Fashion Sale Starts Here!"
  },
  {
  slug:"ajio",
  title:"ajio | shopsmart | Gadgets You’ll Love, Prices You’ll Love More",
  description:"High Style , High Saving Your Fashion Sale Starts Here!"
  },
  {
  slug:"levis",
  title:"levis |shopsmart ",
  description:"High Style , High Saving Your Fashion Sale Starts Here!"
  },
  {
  slug:"myntra",
  title:"myntra | shopsmart",
  description:"High Style , High Saving Your Fashion Sale Starts Here!"
  },
  {
  slug:"markspencer",
  title:"markspencer| shopsmart",
  description:"High Style , High Saving Your Fashion Sale Starts Here!"
  }

]



export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    
    const post = seoBrand.filter((item) => {
  return item.slug === slug;
});


    if (!post) {
      return {
        title: "Post not found",
        description: "This blog post could not be found.",
        // robots: {
        //   index: false,
        //   follow: false,
        // },
      };
    }

   return {
      title: `${post[0].title}`,
      description: `${post[0].description}`,
      metadataBase: new URL('https://shopsmaart.com/'),
    alternates: {
      canonical: './',

    },
    
    };
  } catch (error) {
    return {
      title: "Error loading post",
      description: "An error occurred while fetching post data.",
    };
  }
}



const PopularBrand = {
  flipkart: {
    title: "Flipkart",
    desc: "High Style,<br/>High Saving<br/>Your Fashion<br/>Sale Starts Here!",
    banner: "/popularbrand/Frame72.png",
    image1 :"/popularbrand/Frame84.png" , 
    image2 : "/popularbrand/Frame86.png"
  },
  ajio: {
    title: "Ajio",
    desc: "Gadgets<br/> You’ll Love,<br/> Prices <br/> You’ll Love More.",
    banner: "/popularbrand/ajio1.png",
    image1 :"/popularbrand/ajio2.png" , 
    image2 : "/popularbrand/ajio3.png"
  },
  levis: {
    title: "Levis's",
    desc: "Delicious <br/> Deals <br/> in Every Bite",
    banner: "/popularbrand/levis1.png",
     image1 :"/popularbrand/levis2.png" , 
    image2 : "/popularbrand/levis3.png"
  },
  myntra: {
    title: "Myntra",
    desc: "Discover <br/> Top Beauty <br/> Brands <br/> and  Products.",
    banner: "/popularbrand/myntra1.png",
     image1 :"/popularbrand/myntra2.png" , 
    image2 : "/popularbrand/myntra3.png"
  },
  markspencer: {
    title: "Mark Spencer",
    desc: "Save <br/> on your <br/> next travel <br/> booking.",
    banner: "/popularbrand/Frame72.png",
    image1 :"/popularbrand/Frame84.png" , 
    image2 : "/popularbrand/Frame86.png"
  },
};

const page = ({ params }) => {
//   console.log("params =>", params);
  const {slug} =  params;

  const data = PopularBrand[slug];

  if (!data) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-semibold">Brand not found</h1>
      </div>
    );
  }

  return (
    <div>
      <PopularMain data={data} slug={slug} />
    </div>
  );
};

export default page;
