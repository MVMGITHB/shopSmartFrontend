"use client";

import Link from "next/link";
// import Image from "next/image";
// import Missed from "../HeroSection/Missed";
import axios from "axios";
import { base_url } from "../helper/Helper";
import { useEffect, useState } from "react";
import AdBanner from "../AdBanner/AdBanner";
import Missed from "../HeroSections/Missed";
// import Missed from "../Missed/Missed";

function NewsUi({ url }) {
  const [heading, setHeading] = useState("");
  const [card, setCards] = useState([]);

  const fetchdata = async () => {
    try {
      const res = await axios.get(
        `${base_url}/api/blog/getOneBlogCategoryslug/${url}`
      );
      setHeading(res?.data[0]?.category?.name);
      setCards(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 border-b pb-4">
          {heading ? `${heading} News` : "Latest Business News"}
        </h1>
      </div>

      {/* Featured + List Layout */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Featured Article */}
        {card[0] && (
          <Link
            href={`/${card[0]?.category?.slug}/${card[0]?.slug}`}
            className="md:col-span-2 group"
          >
            <div className="flex flex-col">
              <img
                src={`${base_url}${card[0]?.image}`}
                alt={card[0]?.title}
                className="w-full h-96 object-cover rounded-lg"
              />
              <span className="mt-4 text-xs uppercase tracking-wide text-red-700 font-semibold">
                {card[0]?.category?.name}
              </span>
              <h2 className="mt-2 text-2xl md:text-3xl font-serif font-bold group-hover:underline">
                {card[0]?.title}
              </h2>
              <p className="mt-2 text-gray-600 text-base leading-relaxed line-clamp-3">
                {card[0]?.subtitle}
              </p>
            </div>
          </Link>
        )}

        {/* Right Column (stacked smaller articles) */}
        <div className="flex flex-col gap-6">
          {card.slice(1, 5).map((blog, index) => (
            <Link
              key={blog._id || index}
              href={`/${blog?.category?.slug}/${blog?.slug}`}
              className="group flex gap-4"
            >
              <img
                src={`${base_url}${blog?.image}`}
                alt={blog?.title}
                className="w-28 h-28 object-cover rounded-md flex-shrink-0"
              />
              <div>
                <span className="text-xs uppercase text-red-700 font-medium">
                  {blog?.category?.name}
                </span>
                <h3 className="mt-1 text-lg font-serif font-semibold group-hover:underline line-clamp-2">
                  {blog?.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {blog?.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Missed Section */}
      <Missed />

      {/* ✅ Mobile Ad (only shows on mobile) */}
      <div className="max-w-7xl mx-auto px-4 py-6 block md:hidden">
        <AdBanner />
      </div>

      {/* Grid for rest of the articles */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-t mt-8 pt-8">
        {card.slice(5).map((blog, index) => (
          <Link
            key={blog._id || index}
            href={`/${blog?.category?.slug}/${blog?.slug}`}
            className="group"
          >
            <div className="flex flex-col h-full">
              <img
                src={`${base_url}${blog?.image}`}
                alt={blog?.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <span className="mt-3 text-xs uppercase text-red-700 font-medium">
                {blog?.category?.name}
              </span>
              <h3 className="mt-1 text-lg font-serif font-semibold group-hover:underline line-clamp-2">
                {blog?.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {blog?.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6 block md:hidden">
        <AdBanner />
      </div>
    </>
  );
}

export default NewsUi;
