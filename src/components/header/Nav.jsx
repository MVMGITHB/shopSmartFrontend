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

  const fetchSearchResults = useCallback(async (searchTerm) => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    console.log("Search Term", searchTerm);
    try {
      const response = await axios.get(
        `${BASE_URL}/api/coupon/search?q=${encodeURIComponent(searchTerm)}`
      );

      console.log("Response is ", response.data);
      setResults(response.data || []);
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  }, []);

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
      <div className="max-w-7xl mx-auto flex items-center justify-between p-1 relative">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="abril-fatface-regular text-orange-500 text-[30px]">
              <img src="/logo2.png" alt="Logo" className="w-40 h-auto" />
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-md mx-6 relative">
          <CouponSearch />

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
          <div>
            <Link href="/login" className="hover:text-orange-600">
              Login
            </Link>
            <span className="text-gray-700">/</span>
            <Link href="/signup" className="hover:text-orange-600">
              Signup
            </Link>
          </div>
        </div>

        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-3 py-3 bg-white border-t">
          <div className="flex items-center bg-blue-50 rounded-full px-3 py-2 w-[90%] relative">
            <SearchMobile />
          </div>

          <div className="flex gap-3 text-gray-900">
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
