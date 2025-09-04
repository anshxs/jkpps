"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Award,
  Trophy,
  Medal,
  Calendar,
  X
} from "lucide-react";

interface AwardItem {
  id: number;
  title: string;
  image: string;
  medalType: "gold" | "silver" | "bronze";
  category: string;
  date: string;
  content: string;
}

export default function AwardsPage() {
  const [awards, setAwards] = useState<AwardItem[]>([]);
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/jsons/awards.json")
      .then((response) => response.json())
      .then((data) => {
        setAwards(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching awards data:", error);
        setLoading(false);
      });
  }, []);

  const getMedalIcon = (medalType: string) => {
    switch (medalType) {
      case "gold":
        return <Trophy className="w-4 h-4 text-white" />;
      case "silver":
        return <Medal className="w-4 h-4 text-white" />;
      case "bronze":
        return <Award className="w-4 h-4 text-white" />;
      default:
        return <Award className="w-4 h-4 text-white" />;
    }
  };

  const getMedalBadge = (medalType: string) => {
    switch (medalType) {
      case "gold":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "silver":
        return "bg-slate-100 text-slate-800 border-slate-200";
      case "bronze":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getMedalIconOverlay = (medalType: string) => {
    switch (medalType) {
      case "gold":
        return <Trophy className="w-3 h-3 text-yellow-400" />;
      case "silver":
        return <Medal className="w-3 h-3 text-slate-300" />;
      case "bronze":
        return <Award className="w-3 h-3 text-amber-400" />;
      default:
        return <Award className="w-3 h-3 text-white" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        {/* Simple Header Skeleton */}
        <div className="border-b bg-card">
          <div className="container mx-auto px-4 py-12">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-64"></div>
              <div className="h-4 bg-muted rounded w-96"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border rounded-lg p-6 bg-card animate-pulse">
                <div className="aspect-video bg-muted rounded mb-4"></div>
                <div className="space-y-3">
                  <div className="h-5 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Clean Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight mb-2">
              Awards & Recognition
            </h1>
            <p className="text-muted-foreground">
              Celebrating our achievements in education, innovation, and community service.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Awards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <article
              key={award.id}
              className="group bg-white rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg"
              onClick={() => setSelectedAward(award)}
            >
              {/* Award Image with overlay content */}
              <div
                className="relative h-80 bg-cover bg-center duration-300 transition-all"
                style={{ backgroundImage: `url(${award.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
                
                {/* Medal Badge - Top Right */}
                {/* <div className="absolute top-4 right-4 items-center gap-2 hidden group-hover:flex">
                  <div className={`px-3 py-2 rounded-full text-sm font-medium border bg-white/90 ${getMedalBadge(award.medalType)}`}>
                    <div className="flex items-center gap-1">
                      {getMedalIcon(award.medalType)}
                      <span className="capitalize">{award.medalType}</span>
                    </div>
                  </div>
                </div> */}

                {/* Award Content - Bottom Overlay */}
                <div className="absolute bottom-4 text-white text-sm flex flex-col">
                  <p className="text-xs px-6 opacity-80">
                    {formatDate(award.date)} • {award.category}
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
                      {award.title}
                    </h3>

                    {/* Medal Badge - Always visible */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 rounded-md text-xs font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30">
                        <div className="flex items-center gap-1">
                          {getMedalIconOverlay(award.medalType)}
                          <span className="capitalize">{award.medalType} Award</span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {awards.length === 0 && !loading && (
          <div className="text-center py-12">
            <Trophy className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No awards yet</h3>
            <p className="text-muted-foreground">
              Awards and recognitions will appear here when available.
            </p>
          </div>
        )}
      </div>

      {/* Clean Modal */}
      {selectedAward && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedAward(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-card rounded-lg shadow-lg border overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <div className="aspect-[2/1] relative">
                <Image
                  src={selectedAward.image}
                  alt={selectedAward.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedAward(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-md flex items-center justify-center text-white hover:bg-black/30 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-16">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium border bg-white/90 ${getMedalBadge(selectedAward.medalType).replace('bg-', 'text-')}`}>
                      {getMedalIcon(selectedAward.medalType)}
                      {selectedAward.medalType}
                    </div>
                    <span className="text-sm text-white/80">
                      {formatDate(selectedAward.date)}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-white mb-1">
                    {selectedAward.title}
                  </h2>
                  <p className="text-white/80">
                    {selectedAward.category}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="max-h-96 overflow-y-auto p-6">
              <div className="prose prose-sm max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({children}) => <h1 className="text-xl font-semibold text-foreground mb-4">{children}</h1>,
                    h2: ({children}) => <h2 className="text-lg font-semibold text-foreground mb-3 mt-6">{children}</h2>,
                    h3: ({children}) => <h3 className="text-base font-medium text-foreground mb-2 mt-4">{children}</h3>,
                    p: ({children}) => <p className="text-muted-foreground mb-3 leading-relaxed">{children}</p>,
                    ul: ({children}) => <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>,
                    li: ({children}) => <li className="text-muted-foreground">{children}</li>,
                    blockquote: ({children}) => (
                      <blockquote className="border-l-2 border-border pl-4 text-muted-foreground bg-muted/30 p-3 rounded-r my-4">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {selectedAward.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
