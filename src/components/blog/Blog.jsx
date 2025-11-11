"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Blog = () => {
  const pathname = usePathname();

  const categories = [
    { name: "Flightshotels", color: "from-pink-400 to-red-400" },
    { name: "Beauty", color: "from-blue-400 to-indigo-500" },
    { name: "Homekitchen", color: "from-yellow-400 to-orange-500" },
    { name: "Electronics", color: "from-green-400 to-emerald-500" },
    // { name: "Sports", color: "from-cyan-400 to-teal-500" },
    { name: "Fashions", color: "from-purple-400 to-pink-500" },
    // { name: "Food", color: "from-orange-400 to-amber-500" },
  ];

  const isActive = (path) => pathname === `/${path.toLowerCase()}`;

  return (
    <section className="py-16 mt-8 px-6 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-wide">
        Explore Our Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {categories.map((item) => (
          <Link
            key={item.name}
            href={`/${item.name.toLowerCase()}`}
            className={`group relative block rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90 group-hover:opacity-100 transition-all duration-300`}
            ></div>

            <div className="relative flex flex-col items-center justify-center text-center p-10 h-60">
              <h2
                className={`text-2xl font-bold text-white drop-shadow-lg mb-3 transition-transform duration-300 group-hover:scale-110`}
              >
                {item.name}
              </h2>
              <p className="text-white text-sm opacity-90">
                Discover articles and insights about {item.name.toLowerCase()}.
              </p>
            </div>

            {isActive(item.name) && (
              <div className="absolute inset-0 border-4 border-white rounded-3xl animate-pulse"></div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
