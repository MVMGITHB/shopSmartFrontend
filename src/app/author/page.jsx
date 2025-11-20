"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { base_url } from "@/components/helper/Helper";


const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get(`${base_url}/getAdmin`);
        const users = Array.isArray(response.data) ? response.data : [];

        if (users.length > 0) {
          const filtered = users.filter(
            (u) => Array.isArray(u.blog) && u.blog.length > 0
          );
          setAuthors(filtered);
        }
      } catch (error) {
        console.error("Error fetching authors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAuthors();
  }, []);

  if (loading) {
    return <p className="p-6 text-gray-600">Loading authors...</p>;
  }

  if (!Array.isArray(authors) || authors.length === 0) {
    return <p className="p-6 text-gray-600">No authors found.</p>;
  }

  const capitalize = (str) => {
    if (!str || typeof str !== "string") return "-";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">✨ Our Authors</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {authors.map((author, index) => (
          <div
            key={author._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100"
          >
            {/* Author Image */}
            <div className="relative">
              <Link
                href={`/author/${author.slug}`}
                className="block text-xl font-semibold text-gray-900 hover:text-blue-600 transition"
              >
                <img
                  src={
                    author.image?.startsWith("http")
                      ? author.image
                      : `${base_url}${author.image}`
                  }
                  loading="lazy"
                  alt={`${author.firstName} ${author.lastName}`}
                  className="w-full h-56 object-cover"
                  onError={(e) => (e.target.src = "/default-avatar.png")}
                />
              </Link>
              <span className="absolute bottom-2 right-2 bg-blue-600 text-white px-3 py-1 text-xs rounded-full shadow-md">
                {author.blog?.length || 0} Blogs
              </span>
            </div>

            {/* Author Content */}
            <div className="p-5">
              <Link
                href={`/author/${author.slug}`}
                className="block text-xl font-semibold text-gray-900 hover:text-blue-600 transition"
              >
                {author.firstName} {author.lastName}
              </Link>
              <p className="text-gray-500 text-sm">{author.email}</p>

              {author.shortBio && (
                <p
                  className="text-gray-700 text-sm mt-3 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: author.shortBio }}
                />
              )}

              {/* Extra Info */}
              <div className="mt-4 text-sm text-gray-600 space-y-1">
                <p>
                  <strong>Role:</strong> {capitalize(author.role)}
                </p>
                <p>
                  <strong>Status:</strong> {capitalize(author.status)}
                </p>
                {author.tag && (
                  <p>
                    <strong>Tag:</strong> {author.tag}
                  </p>
                )}
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-4">
                {author.socialMedia?.linkedin?.trim() && (
                  <a
                    href={author.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:scale-110 transition"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
                {author.socialMedia?.facebook?.trim() && (
                  <a
                    href={author.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:scale-110 transition"
                  >
                    <FaFacebook size={20} />
                  </a>
                )}
                {author.socialMedia?.twitter?.trim() && (
                  <a
                    href={author.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-500 hover:scale-110 transition"
                  >
                    <FaTwitter size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuthorList;
