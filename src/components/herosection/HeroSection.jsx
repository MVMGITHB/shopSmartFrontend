"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const HeroSection = () => {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const banners = [
    { img: "/Frame53.png", alt: "Buy any 3 products @999" },
    { img: "/Frame54.png", alt: "IndiGo Offer" },
    { img: "/Frame55.png", alt: "Buy 2 Get 1 Free" },
  ];

  const categories = [
    { name: "Fashion", img: "/Ellipse9.png", url: "/fashion" , },
    { name: "Electronics", img: "/Ellipse10.png", url: "/electronics" },
    { name: "Home & Kitchen", img: "/Ellipse11.png", url: "/homekitchen" },
    { name: "Beauty & Grooming", img: "/Ellipse12.png", url: "/beauty" },
    { name: "Flights & Hotels", img: "/Ellipse13.png", url: "/flightshotels" },
  ];

  useEffect(() => {
   
    if (window.innerWidth < 768) {
      const total = banners.length;
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % total);
      }, 3000); // 3 sec per slide
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      const slider = sliderRef.current;
      if (!slider) return;

      gsap.to(slider, {
        x: `-${current * 100}%`,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [current]);

  return (
    <section className="bg-gray-100 py-10 mt-[100px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
       
        <div className="mb-10 relative overflow-hidden">
        
          <div
            ref={sliderRef}
            className="flex md:hidden transition-transform duration-500"
            
          >
            {banners.map((banner, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 rounded-xl overflow-hidden"
              >
                <Image
                  src={banner.img}
                  alt={banner.alt}
                  width={300}
                  height={200}
                  className="w-full h-[166px] sm:h-[400px] object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

         
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            {banners.map((banner, index) => (
              <div key={index} className="rounded-xl overflow-hidden">
                <Image
                  src={banner.img}
                  alt={banner.alt}
                  width={600}
                  height={255}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 gap-2 md:hidden">
            {banners.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === current ? "bg-gray-800" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>

       
        <div className="text-center">
          <h2 className="text-2xl font-semibold  mb-8">Top Categories</h2>

          <div className="flex flex-wrap justify-center gap-10">
            {categories.map((cat, index) => (
              <div key={index} className="flex flex-col  items-center ">
                <Link href={`/category/${cat.url}`} rel="noopener noreferrer"  className="block">
                  <div className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <Image
                      src={cat.img}
                      alt={cat.name}
                      width={160}
                      height={160}
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-3 font-medium text-[13px] sm:text-[10px]">
                    {cat.name}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
