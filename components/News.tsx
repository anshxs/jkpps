"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
}

interface NewsProps {
  limit?: number;
}

export default function News({ limit }: NewsProps) {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    fetch("/jsons/news.json")
      .then((response) => response.json())
      .then((data) => {
        const displayData = limit ? data.slice(0, limit) : data;
        setNewsData(displayData);
      })
      .catch((error) => console.error("Error fetching news data:", error));
  }, [limit]);

  if (newsData.length === 0) {
    return (
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading news...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-gray-600 text-sm font-medium mb-2 uppercase tracking-wider">
              WHAT'S NEW WITH LYCEUM
            </p>
            <h2 className="text-4xl font-bold text-gray-900">News & Updates</h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-300"
          >
            View All News
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 bg-white md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item, index) => (
            <article
              key={item.id}
              className={`group bg-white rounded-xl overflow-hidden transition-all duration-300`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image */}
              <div
                className="relative h-80 bg-cover bg-center duration-300 grayscale-100 hover:grayscale-0 transition-all"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
                {/* Author Info */}
                <div className="absolute top-4 left-4 items-center gap-2 hidden group-hover:flex">
                  {/* <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  </div> */}
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

                    {/* <p className="text-sm mb-4 overflow-hidden" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {item.excerpt}
                </p> */}

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

                    {/* Read More Link */}
                    {/* <Link 
                  href={`/news/${item.id}`}
                  className="inline-flex items-center gap-2 text-blue-500 font-medium text-sm hover:text-blue-700 transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link> */}
                  </div>
                </div>
              </div>

              {/* Content */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
