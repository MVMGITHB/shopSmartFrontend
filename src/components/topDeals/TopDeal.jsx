import React from "react";
import Image from "next/image";

const TopDeal = () => {
  const deals = [
    {
      img: "/topdeal/Frame64.png",
      title: "SUPERDRY",
      desc: "MIN. 50% OFF*",
    },
    {
      img: "/topdeal/Frame67.png",
      title: "PUMA",
      desc: "MIN. 50% OFF*",
    },
    {
      img: "/topdeal/Frame68.png",
      title: "LOUIS PHILIPPE",
      desc: "MIN. 40% OFF*",
    },
    {
      img: "/topdeal/Frame69.png",
      title: "US POLO",
      desc: "MIN. 45% OFF*",
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
       
        <h2 className="px-10 text-2xl font-semibold mb-8">Top Deals</h2>

       
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible pb-3 px-10 scrollbar-hide">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-0  rounded-xl  transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="relative">
                <Image
                  src={deal.img}
                  alt={deal.title}
                  width={400}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>

             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDeal;
