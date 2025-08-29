"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Camera, 
  Tag,
  ZoomIn,
  Filter,
  Heart,
  Download,
  Share2,
  AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Photo {
  id: number;
  title: string;
  description: string;
  src: string;
  category: string;
  date: string;
  photographer: string;
}

interface Category {
  id: number;
  name: string;
  description: string;
  color: string;
}

interface GalleryData {
  galleryCategories: Category[];
  photos: Photo[];
}

function Page() {
  const [galleryData, setGalleryData] = useState<GalleryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch('/jsons/photo-gallery.json');
        const data = await response.json();
        setGalleryData(data);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; badge: string; border: string; hover: string } } = {
      blue: { bg: "bg-blue-50", text: "text-blue-800", badge: "bg-blue-100", border: "border-blue-200", hover: "hover:bg-blue-100" },
      green: { bg: "bg-green-50", text: "text-green-800", badge: "bg-green-100", border: "border-green-200", hover: "hover:bg-green-100" },
      purple: { bg: "bg-purple-50", text: "text-purple-800", badge: "bg-purple-100", border: "border-purple-200", hover: "hover:bg-purple-100" },
      orange: { bg: "bg-orange-50", text: "text-orange-800", badge: "bg-orange-100", border: "border-orange-200", hover: "hover:bg-orange-100" },
      red: { bg: "bg-red-50", text: "text-red-800", badge: "bg-red-100", border: "border-red-200", hover: "hover:bg-red-100" }
    };
    return colorMap[color] || colorMap.blue;
  };

  const filteredPhotos = galleryData?.photos.filter(photo => 
    selectedCategory === "All" || photo.category === selectedCategory
  ) || [];

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(filteredPhotos.findIndex(p => p.id === photo.id));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      const newIndex = currentPhotoIndex > 0 ? currentPhotoIndex - 1 : filteredPhotos.length - 1;
      setCurrentPhotoIndex(newIndex);
      setSelectedPhoto(filteredPhotos[newIndex]);
    } else {
      const newIndex = currentPhotoIndex < filteredPhotos.length - 1 ? currentPhotoIndex + 1 : 0;
      setCurrentPhotoIndex(newIndex);
      setSelectedPhoto(filteredPhotos[newIndex]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      navigatePhoto('prev');
    } else if (e.key === 'ArrowRight') {
      navigatePhoto('next');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading photo gallery...</p>
        </div>
      </div>
    );
  }

  if (!galleryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600">Error loading gallery</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <Image
          width={1200}
          height={400}
          src="/jsons/carousel/h1.jpg"
          alt="Photo Gallery"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-xl hidden md:block font-light">Capturing memories and moments at JKPPS</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-0 rounded-xl font-medium transition-all ${
                selectedCategory === "All"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Photos ({galleryData.photos.length})
            </button>
            {galleryData.galleryCategories.map((category) => {
              const categoryCount = galleryData.photos.filter(photo => photo.category === category.name).length;
              const colors = getColorClasses(category.color);
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-1 rounded-xl font-medium transition-all ${
                    selectedCategory === category.name
                      ? `${colors.badge} ${colors.text} border-2 ${colors.border}`
                      : `bg-gray-100 text-gray-700 ${colors.hover} hover:border ${colors.border}`
                  }`}
                >
                  {category.name} ({categoryCount})
                </button>
              );
            })}
          </div>
          
          {/* Category Description */}
          {selectedCategory !== "All" && (
            <div className="mt-12 hidden md:block text-center">
              {galleryData.galleryCategories.map((category) => {
                if (category.name === selectedCategory) {
                  const colors = getColorClasses(category.color);
                  return (
                    <div key={category.id} className={`inline-block ${colors.bg} ${colors.border} border rounded-full px-6 py-3`}>
                      <p className={`${colors.text} font-medium`}>{category.description}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(photo)}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <ZoomIn className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">Click to expand</p>
                  </div>
                </div>
              </div>
              
              {/* Photo Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm leading-tight">
                  {photo.title}
                </h3>
                <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                  {photo.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{photo.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Tag className="h-3 w-3 mr-1" />
                    <span>{photo.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-12">
            <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No photos found in this category.</p>
          </div>
        )}
      </div>

      {/* Modal for Expanded Photo */}
      {isModalOpen && selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyPress}
          tabIndex={0}
        >
          <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto('prev');
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto('next');
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Main Image */}
            <div
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
            
            {/* Photo Info Panel */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h2>
                <p className="text-gray-200 mb-4">{selectedPhoto.description}</p>
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{selectedPhoto.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Camera className="h-4 w-4 mr-2" />
                    <span>{selectedPhoto.photographer}</span>
                  </div>
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-2" />
                    <span>{selectedPhoto.category}</span>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <span className="text-xs text-gray-300">
                      {currentPhotoIndex + 1} of {filteredPhotos.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Statistics Section */}
      {/* <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Gallery Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{galleryData.photos.length}</div>
              <div className="text-purple-200">Total Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{galleryData.galleryCategories.length}</div>
              <div className="text-purple-200">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2024</div>
              <div className="text-purple-200">Academic Year</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">∞</div>
              <div className="text-purple-200">Memories</div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Page;
