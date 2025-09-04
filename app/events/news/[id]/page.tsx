"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react";

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

export default function NewsDetailPage() {
  const params = useParams();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const id = parseInt(params.id as string);
    
    fetch("/jsons/news.json")
      .then((response) => response.json())
      .then((data) => {
        const item = data.find((news: NewsItem) => news.id === id);
        setNewsItem(item || null);
        
        // Get related news (same category, excluding current)
        if (item) {
          const related = data
            .filter((news: NewsItem) => 
              news.id !== id && 
              news.category.some(cat => item.category.includes(cat))
            )
            .slice(0, 3);
          setRelatedNews(related);
        }
        
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
        setLoading(false);
      });
  }, [params.id]);

  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (showGallery) {
        switch (e.key) {
          case 'Escape':
            closeGallery();
            break;
          case 'ArrowLeft':
            prevImage();
            break;
          case 'ArrowRight':
            nextImage();
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [showGallery, newsItem]);

  // Cleanup body overflow on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = newsItem?.title || '';
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
    }
    setShowShareMenu(false);
  };

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setShowGallery(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setShowGallery(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (newsItem?.imageGallery) {
      setCurrentImageIndex((prev) => 
        prev === newsItem.imageGallery!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (newsItem?.imageGallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? newsItem.imageGallery!.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading article...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The news article you're looking for doesn't exist.</p>
          <Link
            href="/events/news"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${newsItem.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/events/news"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {newsItem.category.map((cat, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
            {newsItem.title}
          </h1>
          
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{newsItem.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{newsItem.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{newsItem.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Share Button */}
          <div className="flex justify-end mb-8">
            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-700"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
              
              {showShareMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                  >
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                  >
                    <Copy className="w-4 h-4" />
                    Copy Link
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Image Gallery */}
          {newsItem.imageGallery && newsItem.imageGallery.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {newsItem.imageGallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-40 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
                    onClick={() => openGallery(index)}
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                      {index + 1}/{newsItem.imageGallery?.length || 0}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Article Excerpt */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {newsItem.excerpt}
            </p>
          </div>

          {/* Article Content - Markdown */}
          <div className="prose prose-lg prose-gray max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8 first:mt-0" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6" {...props} />
                ),
                h4: ({ node, ...props }) => (
                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-gray-700 leading-relaxed mb-4" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc pl-6 mb-4 text-gray-700" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal pl-6 mb-4 text-gray-700" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="mb-1" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-4 border-gray-300 pl-6 my-6 italic text-gray-600" {...props} />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold text-gray-900" {...props} />
                ),
                em: ({ node, ...props }) => (
                  <em className="italic" {...props} />
                ),
                code: ({ node, ...props }) => (
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono" {...props} />
                ),
                pre: ({ node, ...props }) => (
                  <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4" {...props} />
                ),
              }}
            >
              {newsItem.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {showGallery && newsItem?.imageGallery && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            // Close gallery when clicking on backdrop
            if (e.target === e.currentTarget) {
              closeGallery();
            }
          }}
        >
          <div className="relative w-full h-full max-w-6xl max-h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            {newsItem.imageGallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Main Image */}
            <div className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center">
              <Image
                src={newsItem.imageGallery[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </div>

            {/* Image Counter and Title */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-lg px-6 py-3 text-center max-w-sm">
              <div className="text-white text-sm mb-1">
                {currentImageIndex + 1} / {newsItem.imageGallery.length}
              </div>
              <div className="text-white/80 text-xs truncate">
                {newsItem.title}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {newsItem.imageGallery.length > 1 && (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-xs md:max-w-md overflow-x-auto p-2 bg-black/50 rounded-lg scrollbar-hide">
                {newsItem.imageGallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 rounded overflow-hidden transition-all ${
                      index === currentImageIndex ? 'ring-2 ring-white scale-110' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Related News */}
      {relatedNews.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedNews.map((item) => (
                  <Link key={item.id} href={`/events/news/${item.id}`}>
                    <article className="group bg-white rounded-xl overflow-hidden transition-all duration-300 cursor-pointer">
                      {/* Image */}
                      <div
                        className="relative h-64 bg-cover bg-center duration-300 grayscale-100 hover:grayscale-0 transition-all"
                        style={{ backgroundImage: `url(${item.image})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
                        
                        {/* Author Info */}
                        <div className="absolute top-4 left-4 items-center gap-2 hidden group-hover:flex">
                          <div className="text-white text-sm">
                            <p className="text-sm opacity-80">Posted by</p>
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
                              className="text-lg font-bold mb-3 duration-300 overflow-hidden"
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
                              {item.category.slice(0, 2).map((cat, catIndex) => (
                                <span
                                  key={catIndex}
                                  className="px-2 py-1 bg-[#ffffff45] text-white text-xs font-medium rounded-md"
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
            </div>
          </div>
        </div>
      )}

      {/* Back to Top */}
      <div className="text-center py-8">
        <Link
          href="/events/news"
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-full transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All News
        </Link>
      </div>
    </div>
  );
}
