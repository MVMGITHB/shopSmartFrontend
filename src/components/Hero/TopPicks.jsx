"use client";

import Link from "next/link";
import Image from "next/image";
import { base_url } from "../helper/Helper";

// ⏱ Reading time helper
const getReadTime = (content = "") => {
  const wordsPerMinute = 200;
  const wordCount = (content || "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
};

const TopPicks = ({ news = [] }) => {
  const featured = news?.[0];
  const list = news?.slice(1, 6) || [];

  return (
    <aside
      className="p-5 bg-white rounded-2xl shadow-md border border-gray-100"
      aria-label="Top Picks"
    >
      {/* Section Label */}

      <div className="flex items-center gap-2 mb-4">
        <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-indigo-600 to-blue-500"></span>
        <p className="text-xl md:text-2xl font-bold text-gray-800 tracking-wide">
          Top Picks
        </p>
      </div>
      {/* Featured Card */}
      {featured && (
        <Link
          href={`/${featured?.category?.slug}/${featured?.slug}`}
          className="group block mb-7 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden">
            <Image
              src={
                featured?.image?.startsWith("http")
                  ? featured.image
                  : `${base_url}${featured?.image}`
              }
              alt={featured?.title || "Featured image"}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 640px"
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Overlay Text */}
            <div className="absolute bottom-3 left-3 right-3">
              <div className="flex items-center gap-2 mb-2">
                {featured?.category?.name && (
                  <span className="text-[11px] uppercase font-semibold text-white bg-indigo-600/90 px-2 py-0.5 rounded-full">
                    {featured.category.name}
                  </span>
                )}
                <time
                  dateTime={featured?.createdAt}
                  className="text-[11px] text-gray-200"
                >
                  {new Date(featured?.createdAt).toLocaleDateString()}
                </time>
                <span className="text-[11px] text-gray-200">
                  • {getReadTime(featured?.content)} min read
                </span>
              </div>

              <p className="text-lg md:text-xl font-semibold text-white leading-snug line-clamp-2 group-hover:text-indigo-200 transition-colors">
                {featured?.title}
              </p>
            </div>
          </div>
        </Link>
      )}

      {/* Compact list */}
      <ul className="grid gap-4">
        {list.map((item, i) => (
          <li key={item?._id || i}>
            <Link
              href={`/${item?.category?.slug}/${item?.slug}`}
              className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 p-3"
            >
              {/* Thumbnail */}
              <div className="w-24 h-16 relative rounded-md overflow-hidden flex-shrink-0">
                {item.image ? (
                  <Image
                    src={
                      item.image.startsWith("http")
                        ? item.image
                        : `${base_url}${item.image}`
                    }
                    alt={item.title || "thumb"}
                    fill
                    sizes="96px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center text-xs text-gray-400">
                    No image
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {item?.category?.name && (
                    <span className="text-[11px] uppercase font-semibold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">
                      {item.category.name}
                    </span>
                  )}
                  {i < 2 && (
                    <span className="text-[11px] font-semibold bg-gradient-to-r from-yellow-300 to-amber-400 text-amber-900 px-2 py-0.5 rounded-full">
                      Hot
                    </span>
                  )}
                </div>

                <p className="text-sm md:text-base font-medium text-gray-900 group-hover:text-indigo-700 transition-colors line-clamp-2">
                  {item.subtitle || item.title}
                </p>

                <div className="mt-1 text-xs text-gray-500 flex items-center gap-2">
                  <time dateTime={item?.createdAt}>
                    {new Date(item?.createdAt).toLocaleDateString()}
                  </time>
                  <span>•</span>
                  <span>{getReadTime(item?.content)} min read</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TopPicks;
