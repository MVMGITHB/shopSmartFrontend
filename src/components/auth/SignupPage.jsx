"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import axios from "axios";
import { toast } from "react-hot-toast";

const SignupPage = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".form-card", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".form-input", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.5,
        ease: "power2.out",
      });

      gsap.from(".form-button", {
        opacity: 1,
        scale: 0.8,
        duration: 0.8,
        delay: 1.2,
        ease: "back.out(1.7)",
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    console.log("Data is ", data)

    try {
      const res = await axios.post("https://api.example.com/register", data);
      toast.success("Registration successful!");
      console.log(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <section
      ref={formRef}
      className="min-h-screen mt-10 flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4 py-10"
    >
      <div className="form-card w-full max-w-md bg-white/40 backdrop-blur-lg border border-white/30 shadow-2xl rounded-2xl p-8 sm:p-10 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-orange-300/20 to-transparent animate-pulse blur-3xl"></div>

        <h1 className="relative text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="relative space-y-6">

          <div className="form-input relative">
            <input
              type="text"
              name="firstName"
              required
              className="peer w-full border border-gray-900 bg-transparent rounded-xl px-4 pt-5 pb-2 text-gray-800 focus:border-orange-500 focus:outline-none transition-all duration-300"
            />
            <label className="absolute left-4 top-2.5 text-gray-900 text-sm transition-all duration-300 peer-focus:text-orange-500 peer-focus:-translate-y-3 peer-focus:text-xs peer-valid:-translate-y-3 peer-valid:text-xs">
              First Name
            </label>
          </div>


          <div className="form-input relative">
            <input
              type="text"
              name="lastName"
              required
              className="peer w-full border border-gray-900 bg-transparent rounded-xl px-4 pt-5 pb-2 text-gray-800 focus:border-orange-500 focus:outline-none transition-all duration-300"
            />
            <label className="absolute left-4 top-2.5 text-gray-900 text-sm transition-all duration-300 peer-focus:text-orange-500 peer-focus:-translate-y-3 peer-focus:text-xs peer-valid:-translate-y-3 peer-valid:text-xs">
              Last Name
            </label>
          </div>


          <div className="form-input relative">
            <input
              type="email"
              name="email"
              required
              className="peer w-full border border-gray-900 bg-transparent rounded-xl px-4 pt-5 pb-2 text-gray-800 focus:border-orange-500 focus:outline-none transition-all duration-300"
            />
            <label className="absolute left-4 top-2.5 text-gray-900 text-sm transition-all duration-300 peer-focus:text-orange-500 peer-focus:-translate-y-3 peer-focus:text-xs peer-valid:-translate-y-3 peer-valid:text-xs">
              Email Address
            </label>
          </div>


          <div className="form-input relative">
            <input
              type="password"
              name="password"
              required
              className="peer w-full border border-gray-900 bg-transparent rounded-xl px-4 pt-5 pb-2 text-gray-800 focus:border-orange-500 focus:outline-none transition-all duration-300"
            />
            <label className="absolute left-4 top-2.5 text-gray-900 text-sm transition-all duration-300 peer-focus:text-orange-500 peer-focus:-translate-y-3 peer-focus:text-xs peer-valid:-translate-y-3 peer-valid:text-xs">
              Password
            </label>
          </div>


          <button
            type="submit"
            className="form-button w-full bg-orange-500 text-white border border-gray-900 rounded-xl py-3 text-lg font-semibold shadow-md hover:shadow-lg hover:bg-orange-600 transition-all duration-300 opacity-25"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupPage;
