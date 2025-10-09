import React from 'react'
import Link  from 'next/link';
import Image from 'next/image';

const CategoryAll = () => {

     const categories = [
    { name: "Fashion", img: "/Ellipse9.png", url: "/fashion" , },
    { name: "Electronics", img: "/Ellipse10.png", url: "/electronics" },
    { name: "Home & Kitchen", img: "/Ellipse11.png", url: "/homekitchen" },
    { name: "Beauty & Grooming", img: "/Ellipse12.png", url: "/beauty" },
    { name: "Flights & Hotels", img: "/Ellipse13.png", url: "/flightshotels" },
  ];

  return (
    <div>

         <section className="bg-gray-100 py-10 mt-[100px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

       
        <div className="text-center">
          <h2 className="text-2xl font-semibold  mb-8">Top Categories</h2>

          <div className="flex flex-wrap justify-center gap-10">
            {categories.map((cat, index) => (
              <div key={index} className="flex flex-col  items-center ">
                <Link href={`/category/${cat.url}`} rel="noopener noreferrer"  className="block">
                  <div className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <Image
                      src={cat.img}
                      alt={cat.name}
                      width={160}
                      height={160}
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-3 font-medium text-[12px] sm:text-[16px]">
                    {cat.name}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default CategoryAll
