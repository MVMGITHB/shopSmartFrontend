"use client";
import React , { useLayoutEffect, useRef }  from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const PopularBrand = () => {

    const cardsRef = useRef([]);

  useLayoutEffect(() => {
     const ctx = gsap.context(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%", 
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
      });
    });
     });

   
    return () => ctx.revert();
  }, []);

  const brands = [
    { name: "Flipkart", img: "/brand/flipkart-logo-png-transparent.png" , url:"/flipkart" },
    { name: "AJIO", img: "/brand/AL.png" ,  url:"/ajio" },
    { name: "Levis", img: "/brand/levis.png" , url:"/levis" },
    { name: "Myntra", img: "/brand/ml.png" , url:"/myntra"  },
    { name: "Marks & Spencer", img: "/brand/Marks_&_Spencer_new_logo.svg.png" , url:"/markspencer" },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-2xl font-semibold mb-8 text-center">Most Popular Brands</h2>

       
        <div className="flex md:grid md:grid-cols-5 gap-4 overflow-x-auto md:overflow-visible scrollbar-hide pb-3">
          {brands.map((brand, index) => (
            <div
              key={index} ref={(el) => (cardsRef.current[index] = el)}
              className="min-w-[200px] md:min-w-0 flex-shrink-0 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/popularbrand/${brand.url}`} rel="noopener noreferrer"  className="block">
              <div className="bg-pink-50 text-red-600 text-center py-2 text-sm font-semibold rounded-t-lg">
                Sale Live Now
              </div>

              <div className="flex items-center justify-center h-[70px] py-6">
                <Image
                  src={brand.img}
                  alt={brand.name}
                  width={100}
                  height={50}
                  className="object-contain"
                />
              </div>

              <div className="bg-orange-500 text-white text-center py-2 rounded-b-lg font-medium cursor-pointer hover:bg-orange-600">
                Get Coupon
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBrand;
