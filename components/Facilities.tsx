"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Facility {
  id: number;
  name: string;
  image: string;
  description: string;
  size: "small" | "medium" | "large";
}

interface FacilitiesData {
  title: string;
  subtitle: string;
  description: string;
  facilities: Facility[];
}

export default function Facilities() {
  const [facilitiesData, setFacilitiesData] = useState<FacilitiesData | null>(null);

  useEffect(() => {
    fetch("/jsons/facilities.json")
      .then((response) => response.json())
      .then((data) => {
        setFacilitiesData(data);
      })
      .catch((error) => console.error("Error fetching facilities data:", error));
  }, []);

  if (!facilitiesData) {
    return (
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading facilities...</div>
        </div>
      </section>
    );
  }

  const getSizeClass = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
      case "medium":
        return "col-span-1 row-span-2";
      case "small":
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 mx-2 md:mx-12">
          <div>
            <p className="text-gray-600 text-sm font-medium mb-2 uppercase tracking-wider">
              {facilitiesData.subtitle}
            </p>
            <h2 className="text-4xl font-bold text-gray-900">{facilitiesData.title}</h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-300"
          >
            View All News
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] max-w-6xl mx-auto">
          {facilitiesData.facilities.map((facility) => (
            <div
              key={facility.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02] ${getSizeClass(
                facility.size
              )}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={facility.image}
                  alt={facility.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  {facility.name}
                </h3>
                <p className="text-white/90 text-sm line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {facility.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
