import Link from "next/link";
import { base_url } from "../Helper/helper";

function Trending({ news }) {
  if (!news || news.length === 0) return null;

  const featured = news[0];
  const rest = news.slice(1, 4);

  return (
    <div className="relative w-full px-4 md:px-8 py-10 mb-8 bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-sm">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <p className="text-2xl font-bold text-[#B00023] tracking-wide relative">
          Trending
          <span className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-[#B00023] to-transparent rounded-full"></span>
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Featured Story */}
        <Link
          href={`/${featured?.category?.slug}/${featured?.slug}`}
          className="lg:col-span-5 group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        >
          <img
            src={`${base_url}${featured?.image}`}
            alt={featured?.alt || featured?.title}
            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-xs uppercase font-bold bg-[#B00023] px-2 py-1 rounded">
              {featured?.category?.name}
            </span>
            <p className="mt-2 text-xl font-bold leading-snug group-hover:underline">
              {featured?.title}
            </p>
            <p className="hidden sm:block text-sm mt-1 text-gray-200 line-clamp-2">
              {featured?.subtitle || "Catch up on the latest trending update."}
            </p>
          </div>
        </Link>

        {/* Other Trending Stories */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((story, i) => (
            <Link
              key={i}
              href={`/${story?.category?.slug}/${story?.slug}`}
              className="group"
            >
              <div className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                <img
                  src={`${base_url}${story?.image}`}
                  alt={story?.alt || story?.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="mt-2 text-base font-semibold text-gray-900 group-hover:text-[#B00023] leading-snug line-clamp-2">
                {story?.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending;
