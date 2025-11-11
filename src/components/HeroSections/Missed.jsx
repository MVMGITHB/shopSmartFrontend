import Crousel from "./Crousel";

const Missed = () => {
  return (
    <section className="relative w-full px-4 md:px-8 py-10 mb-8">
      {/* ✨ Fancy Heading */}
      <div className="relative flex items-center justify-center text-center mb-2">
        {/* Left Line */}
        <div className="flex-1 border-t border-gray-300 relative">
          <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full"></span>
        </div>

        {/* Title */}
        <h2 className="mx-6 text-2xl md:text-3xl font-extrabold text-indigo-600 relative">
          Our Recent Favorites
          {/* Decorative underline */}
          <span className="block mt-2 h-1 w-16 mx-auto bg-gradient-to-r from-purple-700 to-indigo-500 rounded-full"></span>
        </h2>

        {/* Right Line */}
        <div className="flex-1 border-t border-gray-300 relative">
          <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full"></span>
        </div>
      </div>

      {/* 🖼️ Carousel Section */}
      <div className="w-full mx-auto max-w-7xl">
        <Crousel />
      </div>
    </section>
  );
};

export default Missed;
