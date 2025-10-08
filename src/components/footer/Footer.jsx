"use client";
import { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {


  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  const footerNavs = [
    // {
    //   label: "Quick Links",
    //   items: [
    //     { href: "#", name: "Home" },
    //     { href: "#", name: "News" },
    //     { href: "#", name: "Viral Stories" },
    //     { href: "#", name: "Match Score" },
    //   ],
    // },
    {
      label: "Company",
      items: [
        { href: "/fashion-coupon", name: "Fashion Coupon" },
         { href: "/electronic-coupon", name: "Electronic Coupon" },
        { href: "/food-coupon", name: "Food Coupon" },
        { href: "/travel-coupon", name: "Travel Coupon" },
      ],
    },


    {
      label: "Resources",
      items: [
         { href: "/about-us", name: "About Us" },
         { href: "/terms-conditions", name: "Terms And Codition" },
        { href: "/privacy-policy", name: "Privacy Policy" },
      ],
    },

   
  ];

  return (
    <footer className="bg-[#ffffff] border-t text-gray-300 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Top: Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-[#333] pb-6 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-gray-900 text-xl font-semibold">
              Stay Updated with{" "}
              <span className="text-yellow-400">Coupons Culture</span>
            </h2>
            <p className="text-xs text-gray-900 mt-1">
              Get the latest trending coupons and updates in your inbox.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-md flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 px-3 py-2 text-sm rounded-md text-gray-900 bg-white border border-gray-900 focus:border-yellow-400 outline-none"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 text-sm font-medium rounded-md hover:bg-yellow-500 transition shadow">
              Subscribe
            </button>
          </form>
        </div>

       
        <div className=" hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 text-center sm:text-left">
          {footerNavs.map((nav, idx) => (
            <div key={idx}>
              <h4 className="text-gray-800 text-base font-semibold mb-3">
                {nav.label}
              </h4>
              <ul className="space-y-1 text-sm">
                {nav.items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-yellow-400 transition-colors text-black"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        
        
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mt-3 sm:text-left md:hidden">
      {footerNavs.map((nav, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div key={idx}>
            <div
              className="flex items-center justify-between sm:block cursor-pointer"
              onClick={() => toggleSection(idx)}
            >
              <h4 className="font-semibold mb-3 text-black">
                {nav.label}
              </h4>
             

             
              <span
                className={`sm:hidden text-gray-800 text-lg transform transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </div>
           
            <ul
              className={`space-y-1 text-sm transition-all duration-300 ${
                isOpen ? "block" : "hidden"
              } sm:block`}
            >
              {nav.items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-yellow-400 transition-colors text-black"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>

        {/* Bottom: Social & Legal */}
        <div className="mt-10 pt-4 border-t border-[#333] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-800">
          <p>© 2025 Coupons Culture. All rights reserved.</p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            <Link
              href="#"
              className="flex items-center gap-1 hover:text-yellow-400 transition"
            >
              <FaFacebook size={16} /> Facebook
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 hover:text-yellow-400 transition"
            >
              <FaTwitter size={16} /> Twitter
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 hover:text-yellow-400 transition"
            >
              <FaGithub size={16} /> GitHub
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 hover:text-yellow-400 transition"
            >
              <FaInstagram size={16} /> Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
