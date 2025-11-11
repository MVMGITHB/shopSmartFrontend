"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { base_url } from "../helper/Helper";
import Link from "next/link";

const Crousel = () => {
  const [news, setNews] = useState([]);
  const sliderRef = useRef(null);

  const fetchdata = async () => {
    try {
      const res = await axios.get(`${base_url}/api/blog/getAllBlog`);
      setNews(res?.data || []);
    } catch (error) {}
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "40px" },
      },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "20px" } },
    ],
  };

  return (
    <div className="relative flex justify-center py-10">
      <div className="w-[95%] relative">
        {/* Left Button */}
        <button
          className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 
          bg-gradient-to-r from-black/80 to-black/40 text-white p-3 rounded-full hover:scale-110 transition"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Right Button */}
        <button
          className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 
          bg-gradient-to-l from-black/80 to-black/40 text-white p-3 rounded-full hover:scale-110 transition"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <FaChevronRight size={20} />
        </button>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {news?.map((slide, i) => (
            <Link
              href={`/${slide?.category?.slug}/${slide?.slug}`}
              key={i}
              className="px-3"
            >
              <div
                className="relative h-80 md:h-96 bg-cover bg-center rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] transition duration-500"
                style={{ backgroundImage: `url('${base_url}${slide?.image}')` }}
              >
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:opacity-90 transition duration-500" />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 z-10 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white shadow-md">
                  {slide?.tag?.tagname || slide?.category?.name}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 p-6 z-10 w-full text-white">
                  <h3 className="text-xl font-bold leading-snug group-hover:text-[#FFD700] transition duration-300">
                    {slide?.title}
                  </h3>
                  <p className="text-sm text-gray-200 mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {slide?.subtitle || "Read the full story..."}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Crousel;
