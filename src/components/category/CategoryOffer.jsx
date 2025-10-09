"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const offers = [
  {
    id: 1,
    logo: "/brand/flipkart-logo-png-transparent.png",
    brand: "Flipkart",
    title: "Flipkart GOAT Sale",
    desc: "10% discount on Axis, HDFC & IDFC Bank",
  },
  {
    id: 2,
    logo: "/brand/levis.png",
    brand: "Levi’s",
    title: "Buy 1 Jeans + 1 T-shirt = Get Extra 10% Off",
    desc: "Buy 1 jeans and 1 T-shirt at 10% off.",
  },
  {
    id: 3,
    logo: "/brand/AL.png",
    brand: "AJIO",
    title: "AJIO FashioNation SALE. 50%-90% OFF*",
    desc: "50%-90% OFF* on 23 lakh+ Styles | 6K+ Brands",
  },
  {
    id: 4,
    logo: "/brand/Marks_&_Spencer_new_logo.svg.png",
    brand: "Marks & Spencer",
    title: "Flat 20% Off",
    desc: "Shop Men, Women, Lingerie at 20% off",
  },
  {
    id: 5,
    logo: "/brand/ml.png",
    brand: "Myntra",
    title: "Flat ₹500 Off on Your First Purchase",
    desc: "Flat 7.5% cashback on Flipkart Axis Bank Credit Card",
  },
  {
    id: 6,
    logo: "/brand/flowerAurs.png",
    brand: "Flower Aura",
    title: "Exclusive Offer",
    desc: "Min. Order Value: ₹199 | Max. Discount: ₹500",
  },
];

const CategoryOffer = () => {
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

  return (
    <section className="bg-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title (optional) */}
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          🔥 Top Fashion Deals
        </h2> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16">
          {offers.map((offer, index) => (
            <div key={offer.id} ref={(el) => (cardsRef.current[index] = el)}>
              {/* Card Body */}
              <div className="bg-gray-100 box-shadow-all rounded-tl-xl rounded-tr-xl flex flex-col items-center justify-between p-5 sm:p-6 h-[220px] sm:h-[260px] hover:shadow-xl transition-all duration-300">
                <div className="h-12 w-auto mb-3 flex items-center justify-center">
                  <Image
                    src={offer.logo}
                    alt={offer.brand}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-gray-800 text-center mb-2">
                  {offer.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 text-center mb-4">
                  {offer.desc}
                </p>
              </div>

              {/* Bottom Button */}
              <div className="bg-orange-500 h-[55px] sm:h-[70px] box-shadow-all w-full rounded-bl-xl rounded-br-xl text-white font-medium px-6 transition-all flex items-center justify-center text-center hover:bg-orange-600">
                Get Offer
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryOffer;
