"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Eye, EyeOff, Link } from "lucide-react"; 


const LoginForm = () => {
  const formRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".login-card", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.from(".login-input", {
        opacity: 0,
        y: 40,
        duration: 0.4,
        delay: 0.4,
        stagger: 0.15,
        ease: "power2.out",
      });
      gsap.from(".login-button", {
        opacity: 3,
        scale: 0.8,
        duration: 0.8,
        delay: 1,
        ease: "back.out(1.7)",
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    console.log("Data is " , data)

    try {
      const res = await axios.post("", data);
      toast.success("Login successful!");
      console.log(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Invalid email or password!");
    }
  };

  return (
    <section
      ref={formRef}
      className=" mt-10 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4 py-10"
    >
      <div className="login-card w-full max-w-md bg-white/40 backdrop-blur-lg border border-white/30 shadow-2xl rounded-2xl p-8 sm:p-10 relative overflow-hidden">
       
        <div className="absolute inset-0 bg-gradient-to-br from-orange-300/20 to-transparent animate-pulse blur-3xl"></div>

        <h1 className="relative text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit} className="relative space-y-6">
          
          <div className="login-input relative">
            <input
              type="email"
              name="email"
              required
              className="peer w-full border border-gray-700  bg-transparent rounded-xl px-4 pt-5 pb-2 text-gray-800 focus:border-orange-500 focus:outline-none transition-all duration-300"
            />
            <label className="absolute left-4 top-2.5 text-gray-700 text-sm transition-all duration-300 peer-focus:text-orange-500 peer-focus:-translate-y-3 peer-focus:text-xs peer-valid:-translate-y-3 peer-valid:text-xs">
              Email Address
            </label>
          </div>

         
          <div className="login-input relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="peer w-full border border-gray-700 bg-transparent rounded-xl px-4 pt-5 pb-2 text-gray-800 focus:border-orange-500 focus:outline-none transition-all duration-300"
            />
            <label className="absolute left-4 top-2.5 text-gray-700 text-sm transition-all duration-300 peer-focus:text-orange-500 peer-focus:-translate-y-3 peer-focus:text-xs peer-valid:-translate-y-3 peer-valid:text-xs">
              Password
            </label>
            <div
              className="absolute right-4 top-4 cursor-pointer text-gray-700 hover:text-orange-500 transition-all"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          
          {/* <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-orange-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div> */}

        
          <button
            type="submit"
            className=" login-button  w-full bg-orange-500 text-white border border-gray-900 rounded-xl py-3 text-lg font-semibold shadow-md hover:shadow-lg hover:bg-orange-600 transition-all duration-300  "
          >
            Login
          </button>
        </form>

        
        {/* <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-orange-600 font-medium hover:underline cursor-pointer"
          >
            Register
          </Link>
        </p> */}
      </div>
    </section>
  );
};

export default LoginForm;
