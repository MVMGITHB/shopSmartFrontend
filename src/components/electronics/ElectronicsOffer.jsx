// "use client";

// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import Image from "next/image";
// import axios from "axios";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ElectronicsOffer = () => {
//   const [offers, setOffers] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const cardsRef = useRef<HTMLDivElement[]>([]);

//   // ✅ Fetch offers using Axios from your API
//   useEffect(() => {
//     const fetchOffers = async () => {
//       try {
//         const { data } = await axios.get("https://api.shopsmaart.com/api/offers"); 
//         // 👆 replace `/api/offers` with your actual endpoint
//         setOffers(data);
//       } catch (error) {
//         console.error("Error fetching offers:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOffers();
//   }, []);
// // 
//   // ✅ GSAP animation setup
//   useLayoutEffect(() => {
//     if (!offers.length) return;

//     const ctx = gsap.context(() => {
//       cardsRef.current.forEach((card, index) => {
//         gsap.from(card, {
//           scrollTrigger: {
//             trigger: card,
//             start: "top 85%",
//             toggleActions: "play none none reverse",
//           },
//           opacity: 0,
//           y: 50,
//           duration: 0.8,
//           delay: index * 0.1,
//           ease: "power3.out",
//         });
//       });
//     });

//     return () => ctx.revert();
//   }, [offers]);

//   return (
//     <section className="bg-gray-100 py-14">
//       <div className="max-w-7xl mx-auto px-4">
//         {loading ? (
//           <div className="text-center text-gray-600 py-20 text-lg">
//             Loading offers...
//           </div>
//         ) : offers.length === 0 ? (
//           <div className="text-center text-gray-600 py-20 text-lg">
//             No offers available.
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16">
//             {offers.map((offer, index) => {
//               // ✅ Construct full logo URL dynamically
//               const logoUrl = offer?.brand?.logo
//                 ? `https://api.shopsmaart.com${offer.brand.logo}`
//                 : "/placeholder.png"; // fallback image

//               return (
//                 <div key={offer.id} ref={(el) => (cardsRef.current[index] = el!)}>
//                   {/* Card Body */}
//                   <div className="bg-gray-100 box-shadow-all rounded-tl-xl rounded-tr-xl flex flex-col items-center justify-between p-5 sm:p-6 h-[220px] sm:h-[260px] hover:shadow-xl transition-all duration-300">
//                     <div className="h-12 w-auto mb-3 flex items-center justify-center">
//                       <Image
//                         src={logoUrl}
//                         alt={offer?.brand?.name || "Brand"}
//                         width={120}
//                         height={60}
//                         className="object-contain"
//                       />
//                     </div>

//                     <h3 className="text-base sm:text-lg font-semibold text-gray-800 text-center mb-2">
//                       {offer?.title || "Special Offer"}
//                     </h3>

//                     <p className="text-xs sm:text-sm text-gray-600 text-center mb-4">
//                       {offer?.description || "No description available"}
//                     </p>
//                   </div>

//                   {/* Bottom Button */}
//                   <div className="bg-orange-500 h-[55px] sm:h-[70px] box-shadow-all w-full rounded-bl-xl rounded-br-xl text-white font-medium px-6 transition-all flex items-center justify-center text-center hover:bg-orange-600 cursor-pointer">
//                     Get Offer
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ElectronicsOffer;