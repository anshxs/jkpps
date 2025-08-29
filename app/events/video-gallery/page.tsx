"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  X, 
  Play, 
  Calendar, 
  Clock, 
  Eye, 
  User,
  Tag,
  ExternalLink,
  Filter,
  AlertTriangle,
  Youtube,
  Video,
  Share2,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Video {
  id: number;
  title: string;
  description: string;
  type: "youtube" | "vimeo" | "direct";
  videoId?: string;
  url: string;
  thumbnail: string;
  category: string;
  duration: string;
  date: string;
  views: string;
  uploader: string;
}

interface VideoCategory {
  id: number;
  name: string;
  description: string;
  color: string;
}

interface VideoGalleryData {
  videoCategories: VideoCategory[];
  videos: Video[];
}

function Page() {
  const [galleryData, setGalleryData] = useState<VideoGalleryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch('/jsons/video-gallery.json');
        const data = await response.json();
        setGalleryData(data);
      } catch (error) {
        console.error('Error fetching video gallery data:', error);
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
      red: { bg: "bg-red-50", text: "text-red-800", badge: "bg-red-100", border: "border-red-200", hover: "hover:bg-red-100" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-800", badge: "bg-indigo-100", border: "border-indigo-200", hover: "hover:bg-indigo-100" }
    };
    return colorMap[color] || colorMap.blue;
  };

  const getVideoIcon = (type: string) => {
    switch (type) {
      case "youtube":
        return <Youtube className="h-5 w-5 text-red-500" />;
      case "vimeo":
        return <Video className="h-5 w-5 text-blue-500" />;
      default:
        return <Video className="h-5 w-5 text-gray-500" />;
    }
  };

  const getEmbedUrl = (video: Video) => {
    if (video.type === "youtube" && video.videoId) {
      return `https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`;
    }
    // Add more video types as needed
    return video.url;
  };

  const filteredVideos = galleryData?.videos.filter(video => 
    selectedCategory === "All" || video.category === selectedCategory
  ) || [];

  const openModal = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading video gallery...</p>
        </div>
      </div>
    );
  }

  if (!galleryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600">Error loading video gallery</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="hidden md:block relative">
        <Image
          width={1200}
          height={400}
          src="/jsons/carousel/h2.jpg"
          alt="Video Gallery"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-4">
              <Youtube className="h-12 w-12 mr-4" />
              <h1 className="text-5xl font-bold">Video Gallery</h1>
            </div>
            <p className="text-xl font-light">Watch our school moments and memories</p>
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
              className={`px-4 py-1 rounded-full font-medium text-md transition-all ${
                selectedCategory === "All"
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Videos ({galleryData.videos.length})
            </button>
            {galleryData.videoCategories.map((category) => {
              const categoryCount = galleryData.videos.filter(video => video.category === category.name).length;
              const colors = getColorClasses(category.color);
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-1 rounded-full font-medium text-md transition-all ${
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
            <div className="mt-6 text-center">
              {galleryData.videoCategories.map((category) => {
                if (category.name === selectedCategory) {
                  const colors = getColorClasses(category.color);
                  return (
                    <div key={category.id} className={`inline-block ${colors.bg} ${colors.border} border rounded-lg px-6 py-3`}>
                      <p className={`${colors.text} font-medium`}>{category.description}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-xl border border-gray-200 transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => openModal(video)}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-100 overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-4 w-4 text-black ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                
                {/* Video Type Badge */}
                {/* <div className="absolute top-2 left-2 bg-white/90 rounded-full p-1.5">
                  {getVideoIcon(video.type)}
                </div> */}
              </div>
              
              {/* Video Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                  {video.description}
                </p>
                
                <div className="space-y-2">
                  {/* Video Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{video.date}</span>
                    </div>
                  </div>
                  
                  {/* Uploader and Category */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      <span className="truncate">{video.uploader}</span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-3 w-3 mr-1" />
                      <span className="truncate">{video.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No videos found in this category.</p>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyPress}
          tabIndex={0}
        >
          <div className="relative w-full max-w-6xl max-h-full">
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Video Container */}
            <div
              className="relative bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Player */}
              <div className="aspect-video">
                {selectedVideo.type === "youtube" ? (
                  <iframe
                    src={getEmbedUrl(selectedVideo)}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={selectedVideo.url}
                    controls
                    autoPlay
                    className="w-full h-full"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              
              {/* Video Info Panel */}
              <div className="bg-gray-900 text-white p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold mb-2">{selectedVideo.title}</h2>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedVideo.description}</p>
                  </div>
                  <div className="ml-4 flex items-center gap-2">
                    <a
                      href={selectedVideo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{selectedVideo.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{selectedVideo.views} views</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{selectedVideo.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{selectedVideo.uploader}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-red-900 to-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Video Gallery Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{galleryData.videos.length}</div>
              <div className="text-red-200">Total Videos</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{galleryData.videoCategories.length}</div>
              <div className="text-red-200">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {galleryData.videos.reduce((total, video) => {
                  const views = parseFloat(video.views.replace('K', '')) * 1000;
                  return total + views;
                }, 0) > 1000 ? `${Math.round(galleryData.videos.reduce((total, video) => {
                  const views = parseFloat(video.views.replace('K', '')) * 1000;
                  return total + views;
                }, 0) / 1000)}K` : galleryData.videos.reduce((total, video) => {
                  const views = parseFloat(video.views.replace('K', '')) * 1000;
                  return total + views;
                }, 0)}
              </div>
              <div className="text-red-200">Total Views</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2024</div>
              <div className="text-red-200">Academic Year</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
