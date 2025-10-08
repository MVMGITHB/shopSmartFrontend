"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 box-shdow-class w-full  bg-white z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
       
        <div className="flex items-center gap-2">
             <Link
  href="/"
 
>
          <Image
            src="/Couponsculturelogo-01.png" 
            alt="Coupons Culture"
            width={155}
            height={74}
          />
         </Link>
        </div>

        
        <div className="hidden md:flex items-center flex-1 max-w-md mx-6 bg-blue-50 rounded-full px-3 py-2">
          <Search size={18} className="text-gray-900" />
          <input
            type="text"
            placeholder="Search for any brand or product"
            className="w-full bg-transparent outline-none ml-2 placeholder-black"
          />
        </div>

      
        <div className="hidden md:flex items-center text-[16px] gap-4 text-gray-900">
         <div> <a href="#" className="hover:text-orange-600">
            Help
          </a>
         </div>
          <span className="text-gray-900 ">|</span>
         
          <div>
             
             <a href="#" className="hover:text-orange-600">
            Login 
          </a>
           <span className="text-gray-900">/</span>
          <a href="#" className="hover:text-orange-600">
            Signup
          </a>
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
          <div className="flex items-center bg-blue-50 rounded-full px-3 py-2 w-[90%]">
            <Search size={18} className="text-gray-900" />
            <input
              type="text"
              placeholder="Search for any brand or product"
              className="w-full bg-transparent outline-none ml-2 text-sm"
            />
          </div>
         <div className="flex  gap-2"> 
            <a href="#" className="hover:text-orange-600">
            Help
          </a>
          <a href="#" className="hover:text-orange-600">
            Login 
          </a>
          <a href="#" className="hover:text-orange-600">
            Signup
          </a></div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
