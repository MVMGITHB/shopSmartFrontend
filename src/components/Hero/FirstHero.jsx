import Link from "next/link";
import { base_url } from "../Helper/helper";

const FirstHero = ({ news }) => {
  if (!news || !Array.isArray(news) || news.length === 0) {
    return <div>Loading...</div>;
  }

  const firstArticle = news[0];
  const secondArticle = news[1];
  const thirdArticle = news[2];
  const fourthArticle = news[3];

  return (
    <div className="max-w-4xl mx-auto px-2 py-6">
      <div className="border-l border-r border-gray-300 p-4">
        {/* Live Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
          </span>
          <span className="text-sm font-semibold text-red-600">Live</span>
        </div>

        {/* Main Headline */}
        <div className="mb-4">
          <Link href={`/${firstArticle?.category?.slug}/${firstArticle?.slug}`}>
            <h1 className="text-4xl font-bold hover:underline cursor-pointer mb-2">
              {firstArticle?.title}
            </h1>
            <div className="text-md hover:underline cursor-pointer mb-2">
              {firstArticle?.subtitle}
            </div>
          </Link>
          <p className="text-xs underline uppercase font-bold text-gray-600">
            THE HINDU BUREAU
          </p>
        </div>

        {/* Image */}
        <Link
          href={`${firstArticle?.category?.slug}/${firstArticle?.slug}`}
          className="w-full mb-4"
        >
          <img
            src={`${base_url}${firstArticle?.image}`}
            alt={firstArticle?.title}
            className="w-full h-auto object-cover object-center rounded-md shadow"
          />
          <hr className="h-px my-4 bg-gray-200 border-0" />
        </Link>

        {/* Second Live Badge */}
        <div className="flex items-center gap-2 ml-2 mb-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
          </span>
          <span className="text-md font-semibold text-red-600">Live</span>
        </div>

        {/* Two Column Section */}
        <div className="flex flex-col md:flex-row gap-2">
          {/* Left Section */}
          <div className="md:w-1/2 p-2">
            <Link
              href={`${secondArticle?.category?.slug}/${secondArticle?.slug}`}
            >
              <div className="text-xl md:text-2xl font-bold hover:underline cursor-pointer mb-3">
                {secondArticle?.title}
              </div>
              <img
                src={`${base_url}${secondArticle?.image}`}
                alt={secondArticle?.alt}
                className="w-full h-auto rounded-md object-cover shadow-md mt-6"
              />
            </Link>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:flex justify-center">
            <div className="w-px bg-gray-300 mx-2 h-full"></div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 p-2 flex flex-col justify-between">
            <div>
              <Link
                href={`${thirdArticle?.category?.slug}/${thirdArticle?.slug}`}
              >
                <div className="text-xl md:text-2xl font-bold hover:underline cursor-pointer mb-4">
                  {thirdArticle?.title}
                </div>
              </Link>
              <hr className="h-px my-2 bg-gray-200 border-0" />
              <Link
                href={`${fourthArticle?.category?.slug}/${fourthArticle?.slug}`}
              >
                <div className="text-xl md:text-2xl font-bold hover:underline cursor-pointer mt-4">
                  {fourthArticle?.title}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstHero;
