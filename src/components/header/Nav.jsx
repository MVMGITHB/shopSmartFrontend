"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { BASE_URL } from "../helper/Helper";
import CouponSearch from "./CouponSearch";
import SearchMobile from "./SearchMobile ";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

 
  const fetchSearchResults = useCallback(
    async (searchTerm) => {
      if (!searchTerm.trim()) {
        setResults([]);
        return;
      }

      console.log("Search Term" , searchTerm)
      try {
        const response = await axios.get(
          `${BASE_URL}/api/coupon/search?q=${encodeURIComponent(searchTerm)}`
        );

        console.log("Response is " , response.data)
        setResults(response.data || []);
      } catch (error) {
        console.error("Error fetching search data:", error);
      }
    },
    []
  );

  // --- Debounce Effect ---
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length > 1) {
        fetchSearchResults(query);
        setShowResults(true);
      } else {
        setShowResults(false);
        setResults([]);
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [query, fetchSearchResults]);

  
  const handleSelectCategory = (slug) => {
    setShowResults(false);
    setQuery("");
    router.push(`/category/${slug}`);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-20 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 relative">
       
        <div className="flex items-center gap-2">
          <Link href="/">
            {/* <Image
              src="/Couponsculturelogo-01.png"
              alt="Coupons Culture"
              width={155}
              height={74}
            /> */}
            <h1 className="abril-fatface-regular text-orange-500 text-[30px]">Shopsmart</h1>
          </Link>
        </div>

       
        <div className="hidden md:flex items-center flex-1 max-w-md mx-6 relative">
          {/* <div className="flex items-center bg-blue-50 rounded-full px-3 py-2 w-full">
            <Search size={18} className="text-gray-700" />
            <input
              type="text"
              placeholder="Search for any brand or product..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent outline-none ml-2 text-gray-800 placeholder-gray-500"
            />
          </div> */}
          <CouponSearch/>

        
          {showResults && results.length > 0 && (
            <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-30 max-h-80 overflow-y-auto animate-fadeIn">
              {results.map((item, i) => (
                <div
                  key={i}
                  onClick={() => handleSelectCategory(item.brand.slug)}
                  className="px-4 py-3 text-gray-700 hover:bg-orange-100 cursor-pointer transition-all"
                >
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-gray-500 truncate">
                    {item.desc || ""}
                  </div>
                </div>
              ))}
            </div>
          )}

          
          {showResults && results.length === 0 && (
            <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-30 py-3 text-center text-gray-500 text-sm">
              No results found
            </div>
          )}
        </div>

       
        <div className="hidden md:flex items-center text-[16px] gap-4 text-gray-900">
          <a href="#" className="hover:text-orange-600">
            Help
          </a>
          <span className="text-gray-400">|</span>
          <div>
            <Link href="/login" className="hover:text-orange-600">
              Login
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/signup" className="hover:text-orange-600">
              Signup
            </Link>
          </div>
        </div>

        {/* --- Mobile Menu Button --- */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* --- Mobile Menu --- */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-3 py-3 bg-white border-t">
          <div className="flex items-center bg-blue-50 rounded-full px-3 py-2 w-[90%] relative">
            {/* <Search size={18} className="text-gray-900" />
            <input
              type="text"
              placeholder="Search for any brand or product"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent outline-none ml-2 text-sm"
            /> */}

           
            {/* {showResults && (
              <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-30 max-h-80 overflow-y-auto">
                {results.length > 0 ? (
                  results.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => handleSelectCategory(item.slug)}
                      className="px-4 py-3 text-gray-700 hover:bg-orange-100 cursor-pointer transition-all"
                    >
                      {item.title}
                    </div>
                  ))
                ) : (
                  <div className="py-3 text-center text-gray-500 text-sm">
                    No results found
                  </div>
                )}
              </div>
            )} */}
            <SearchMobile/>
          </div>

          <div className="flex gap-3 text-gray-900">
            <a href="#" className="hover:text-orange-600">
              Help
            </a>
            <Link href="/login" className="hover:text-orange-600">
              Login
            </Link>
            <Link href="/signup" className="hover:text-orange-600">
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
