'use client';

import { useEffect, useState, useRef } from 'react';
import { Plus } from 'lucide-react';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoplayInterval?: number;
}

export default function Carousel({ items, autoplayInterval = 4000 }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % items.length);
      }
    }, autoplayInterval);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [items.length, autoplayInterval, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    stopAutoplay();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diffX = startX - currentX;
    setTranslateX(-diffX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 50;
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        // Dragged left, go to next slide
        setCurrentSlide((prev) => (prev + 1) % items.length);
      } else {
        // Dragged right, go to previous slide
        setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
      }
    }
    
    setTranslateX(0);
    setTimeout(startAutoplay, 100);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    stopAutoplay();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;
    setTranslateX(-diffX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 50;
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        setCurrentSlide((prev) => (prev + 1) % items.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
      }
    }
    
    setTranslateX(0);
    setTimeout(startAutoplay, 100);
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[85vh] md:h-[85vh] overflow-hidden cursor-grab active:cursor-grabbing">
      {/* Carousel Images */}
      <div
        ref={carouselRef}
        className={`flex h-full ${isDragging ? '' : 'transition-transform duration-700 ease-in-out'}`}
        style={{ 
          transform: `translateX(${-currentSlide * 100 + (translateX / (carouselRef.current?.offsetWidth || 1)) * 100}%)` 
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item) => (
          <div key={item.id} className="relative min-w-full h-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover select-none"
              draggable={false}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/40 via-transparent to-transparent" />
            
            {/* Content */}
            <div className="absolute top-20 left-0 right-0 p-8 md:p-16 text-white">
              <div className="max-w-4xl mx-auto flex flex-col items-center">
                <p className="text-xl md:text-2xl mb-8 max-w-3xl text-center opacity-90">
                  {item.description}
                </p>
                <h1 className="text-[40px] md:text-[100px] mb-4 font-robuck tracking-wide">
                  {item.title}
                </h1>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Apply for Admissions Button - Floating at center bottom within carousel */}
      <button className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 bg-white hover:bg-white text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
        <Plus strokeWidth={2.5}/>
        Apply for Admissions
      </button>
    </div>
  );
}
