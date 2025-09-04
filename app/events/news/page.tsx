"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  readTime: string;
  category: string[];
  author: string;
  image: string;
  excerpt: string;
  content: string;
  imageGallery?: string[];
}

export default function NewsPage() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/jsons/news.json")
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data);
        setFilteredNews(data);
        
        // Extract unique categories
        const categories = new Set<string>();
        data.forEach((item: NewsItem) => {
          item.category.forEach((cat: string) => categories.add(cat));
        });
        setAllCategories(["All", ...Array.from(categories)]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredNews(newsData);
    } else {
      setFilteredNews(
        newsData.filter((item) => item.category.includes(selectedCategory))
      );
    }
  }, [selectedCategory, newsData]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading news...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            News & Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings, achievements, and events at Lyceum International School
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 bg-white md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <Link key={item.id} href={`/events/news/${item.id}`}>
              <article className="group bg-white rounded-xl overflow-hidden transition-all duration-300 cursor-pointer">
                {/* Image */}
                <div
                  className="relative h-80 bg-cover bg-center duration-300 grayscale-100 hover:grayscale-0 transition-all"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
                  
                  {/* Author Info */}
                  <div className="absolute top-4 left-4 items-center gap-2 hidden group-hover:flex">
                    <div className="text-white text-sm">
                      <p className="text-md opacity-80">Posted by</p>
                      <p className="font-medium">{item.author}</p>
                    </div>
                  </div>

                  {/* Date and Read Time */}
                  <div className="absolute bottom-4 text-white text-sm flex flex-col">
                    <p className="text-xs px-6 opacity-80">
                      {item.date} • {item.readTime}
                    </p>
                    <div className="px-6">
                      <h3
                        className="text-xl font-bold mb-3 duration-300 overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {item.title}
                      </h3>

                      {/* Categories */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.category.slice(0, 3).map((cat, catIndex) => (
                          <span
                            key={catIndex}
                            className="px-3 py-1 bg-[#ffffff45] text-white text-xs font-medium rounded-md"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Tag className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                No news found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category or check back later for updates.
              </p>
            </div>
          </div>
        )}

        {/* Footer CTA */}
        {filteredNews.length > 0 && (
          <div className="text-center mt-16 pt-16 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Don't miss out on the latest updates from Lyceum International School
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about/overview"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-full transition-colors duration-300"
              >
                About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-black font-semibold rounded-full hover:border-gray-400 transition-colors duration-300"
              >
                All Events
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
