"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";

gsap.registerPlugin(TextPlugin);

const CategoryHero = ({data}) => {

  console.log("Banner data is " , data?.banner)
  const imageRef = useRef(null);
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

      gsap.to(imageRef.current, {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(headingRef.current, {
        x: 25,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // const fullText =
      //   "High Style,<br/>High Saving<br/>Your Fashion<br/>Sale Starts Here!";

      const fullText = `${data?.desc}`
      gsap.to(headingRef.current, {
        duration: 2,
        text: fullText,
        ease: "none",
        delay: 1,
      });
    });

   
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-gray-100 pt-[110px] px-5  pb-[10px] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
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

        <div className="abril-fatface-regular w-full lg:w-1/2 flex flex-row items-end">
          <h1
            ref={headingRef}
            className="text-3xl md:text-6xl font-extrabold leading-tight text-gray-900"
            dangerouslySetInnerHTML={{ __html: "" }}
          ></h1>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
