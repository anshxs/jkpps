"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface MidBannerData {
  image: string;
  alt: string;
  title: string;
}

export default function MidBanner() {
  const [bannerData, setBannerData] = useState<MidBannerData | null>(null);

  useEffect(() => {
    fetch("/jsons/midbanner.json")
      .then((response) => response.json())
      .then((data) => {
        setBannerData(data);
      })
      .catch((error) => console.error("Error fetching midbanner data:", error));
  }, []);

  if (!bannerData) {
    return null; // Don't render anything if no data
  }

  return (
    <section className="hidden md:block w-full mt-16 mb-24">
      <div className="relative w-full h-auto">
        <Image
          src={bannerData.image}
          alt={bannerData.alt}
          width={1920}
          height={400}
          className="w-full h-auto object-cover"
          style={{ height: 'auto' }}
        />
      </div>
    </section>
  );
}
