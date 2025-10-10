'use client';

import { useState, useCallback, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import _ from 'lodash';
import Link from 'next/link';

const SearchMobile = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setQuery('');
    setResults([]);
    setLoading(false);
  }, [pathname]);

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
    debouncedSearch(value);
  };

  return (
    <div className="md:hidden relative w-[200px] mt-2">
      {/* Search Bar */}
     <div className="flex items-center justify-center">
  <Input
    type="text"
    placeholder="Search Products"
    value={query}
    onChange={handleInputChange}
 className="w-full px-4 py-2 rounded-md bg-white/10 text-gray-600 placeholder:text-gray-700 border border-gray-700 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-200"
  />
  <Button
    size="icon"
          className=" bg-orange-500 hover:bg-[#4e5ac2] text-white"
  >
    <MdSearch className="text-xl" />
  </Button>
</div>


      {/* Results Section */}
      <div className="absolute top-full left-0 w-full z-50">
        {loading && (
          <div className="mt-2 bg-[#2e323d] text-white p-2 rounded-md">Loading...</div>
        )}

        {!loading && results.length > 0 && (
          <div className="mt-2 bg-white shadow-lg rounded-md text-gray-800 p-2 space-y-1 max-h-60 overflow-y-auto border border-gray-200">
            {results.map((coupon) => (
              <Link key={coupon._id} href={`/category/${coupon?.category?.slug}`}>
                <div className="text-sm cursor-pointer border-b border-[#444] pb-1 hover:text-blue-400">
                  {coupon.title}
                </div>
              </Link>
            ))}
          </div>
        )}

        {!loading && query.trim() !== '' && results.length === 0 && (
          <div className="mt-2 bg-[#2e323d] text-white p-2 rounded-md">
            No results found
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchMobile;
