import Link from "next/link";
import React from "react";

function LatestNews({ news }) {
  function formatRelativeTime(date) {
    const diff = (new Date() - new Date(date)) / 1000; // seconds
    if (diff < 60) return "just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`;
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <aside className="p-3" aria-label="Latest News">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-indigo-600 to-blue-500"></span>
        <p className="text-xl md:text-2xl font-bold text-gray-800 tracking-wide">
          Latest News
        </p>
      </div>

      {/* News List */}
      <ul className="grid gap-4">
        {news
          ?.slice(0)
          ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // newest first
          ?.slice(0, 7) // show 7 latest items
          ?.map((item, index) => (
            <li key={index}>
              <Link
                href={`/${item?.category?.slug}/${item?.slug}`}
                className="group block rounded-xl border border-gray-200 bg-white hover:border-indigo-200 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 shadow-sm hover:shadow-md transition-all duration-300 p-4"
              >
                {/* Title */}
                <p className="text-[15px] font-semibold text-gray-900 group-hover:text-indigo-700 leading-snug line-clamp-2 group-hover:underline underline-offset-2">
                  {item?.title}
                </p>

                {/* Meta info */}
                <div className="flex justify-between items-center mt-3 text-xs">
                  <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium tracking-wide">
                    {item.source}
                  </span>
                  <time
                    dateTime={item.createdAt}
                    className="text-gray-400 italic"
                  >
                    {formatRelativeTime(item.createdAt)}
                  </time>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  );
}

export default LatestNews;
