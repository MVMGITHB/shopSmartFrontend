"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../helper/Helper";
import Link from "next/link";

const AllBlogs = () => {
  const [card, setCards] = useState([]);

  const fetchdata = async () => {
    try {
      const res = await axios.get(`${base_url}/api/blog/getAllBlog`);
      setCards(res.data || []);
    } catch (error) {
      console.log("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 mb-7 mt-25">
        {/* Section Heading */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
          Latest Blogs
        </h1>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {card.map((item, index) => (
            <Link
              key={index}
              href={`/${item?.category?.slug}/${item?.slug}`}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <img
                src={`${base_url}${item?.image}`}
                alt={item?.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <span className="text-xs uppercase tracking-wide text-red-700 font-semibold">
                  {item?.category?.name}
                </span>
                <h2 className="mt-2 text-lg font-serif font-bold hover:text-blue-600">
                  {item?.title}
                </h2>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {item?.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
