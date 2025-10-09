"use client"
import React , { useLayoutEffect, useRef } from 'react'
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";

gsap.registerPlugin(TextPlugin);

const PopularHero = ({data}) => {

 console.log("Banner data is " , data)
  const imageRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    console.log("GSAP Animation triggered");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(imageRef.current, {
        x: -150,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
      });

      tl.from(image1Ref.current, {
        y: -100,
        opacity: 0,
        scale: 0.95,
        duration: 1.0,
      });
      tl.from(image2Ref.current, {
        y: -100,
        opacity: 0,
        scale: 0.95,
        duration: 1.0,
      });

    //   gsap.to(imageRef.current, {
    //     y: 20,
    //     duration: 2,
    //     repeat: -1,
    //     yoyo: true,
    //     ease: "sine.inOut",
    //   });

    
      
    });

   
    return () => ctx.revert();
  }, []);

  return (
   <section className="bg-gray-100 pt-[110px] px-5  pb-[10px] overflow-hidden">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-8">
           <div className="w-full lg:w-[950]" ref={imageRef}>
             <div className="rounded-2xl overflow-hidden  ">
              <Image
                 src={data?.banner}
                 alt={data?.title || "Category Banner"}
                 width={700}
                 height={500}
                 className="object-cover w-full h-auto"
                 priority
               />
             </div>
           </div>
   
           <div className="abril-fatface-regular  lg:w-1/2 flex flex-col items-start justify-center gap-10 ">
            <div className=" overflow-hidden  " ref={image1Ref} >
              <Image
                 src={data?.image1}
                 alt={data?.title || "Category Banner"}
                 width={457}
                 height={210}
                 className="object-cover  h-auto"
                 priority
               />
             </div>
             <div className=" overflow-hidden " ref={image2Ref}>
              <Image
                 src={data?.image2}
                 alt={data?.title || "Category Banner"}
                 width={457}
                 height={210}
                 className="object-cover h-auto"
                 priority
               />
             </div>
           </div>
         </div>
       </section>
  )
}

export default PopularHero
