'use client';

import { useState, useCallback,useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { usePathname } from "next/navigation";
import axios from 'axios';
import _ from 'lodash';
import Link from 'next/link';

const CouponSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);


  const pathname = usePathname();
  
  useEffect(() => {
    setQuery("");
    setLoading(false)
    setResults([])
  }, [pathname]);

  // Debounced API call (only called after 300ms of no typing)
  const debouncedSearch = useCallback(
    _.debounce(async (value) => {
      if (!value.trim()) {
        setResults([]);
        return;
      }

      try {
        setLoading(true);
        const res = await axios.get(
          `https://api.shopsmaart.com/api/coupon/search?q=${encodeURIComponent(value)}`
        );
        setResults(res.data || []);
      } catch (err) {
        console.error('Search error:', err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value); // Debounced call
  };

  return (
    <div className=" hidden md:block relative w-[300px] ">
     
<div className="hidden md:flex items-center w-full  bg-white px-4 py-2 gap-[5px] ">
        <Input
          type="text"
          placeholder="Search Products"
          value={query}
          onChange={handleInputChange}
 className="w-full px-4 py-2 rounded-md bg-white/10 text-gray-600 placeholder:text-gray-700 border border-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-200"
        />
        <Button
          size="icon"
          className=" bg-orange-500 hover:bg-orange-300 text-white"
        >
          <MdSearch className="text-2xl" />
        </Button>
      </div>


      <div className='absolute top-12'>
        {loading && <div className="text-white mt-3">Loading...</div>}

      {!loading && results.length > 0 && (
   <div className="mt-3 bg-white shadow-lg rounded-md text-gray-800 p-2 space-y-1 max-h-60 overflow-y-auto border border-gray-200">
  {results.map((coupon) => (
    <Link href={`/category/${coupon?.category?.slug}`} key={coupon._id}>
      <div className="group cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 transition-all">
        <p className="text-sm font-medium text-gray-700 group-hover:text-amber-600">
          {coupon.title}
        </p>
      </div>
    </Link>
  ))}
</div>


      )}

{!loading && query.trim() !== '' && results.length === 0 && (
  <div className="mt-3  bg-white shadow-lg rounded-md text-gray-800 p-2 space-y-1 max-h-60 overflow-y-auto border border-gray-200">
    No results found
  </div>
)}

      </div>
      {/* Results Section */}
     
    </div>
  );
};

export default CouponSearch;
