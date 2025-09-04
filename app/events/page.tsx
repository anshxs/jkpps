"use client";

import React from "react";
import Link from "next/link";
import {
  Bell,
  Newspaper,
  Camera,
  Video,
  ArrowRight,
  Calendar,
  Megaphone,
  Users,
} from "lucide-react";

interface EventSection {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const eventSections: EventSection[] = [
  {
    title: "News & Updates",
    description:
      "Stay updated with the latest news, achievements, and announcements from Lyceum International School.",
    href: "/events/news",
    icon: <Newspaper className="w-8 h-8" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50 hover:bg-blue-100",
  },
  {
    title: "Notifications",
    description:
      "Important notices, documents, and announcements for students, parents, and staff members.",
    href: "/events/notifications",
    icon: <Bell className="w-8 h-8" />,
    color: "text-red-600",
    bgColor: "bg-red-50 hover:bg-red-100",
  },
  {
    title: "Photo Gallery",
    description:
      "Browse through our collection of memorable moments, events, and celebrations captured in photos.",
    href: "/events/photo-gallery",
    icon: <Camera className="w-8 h-8" />,
    color: "text-green-600",
    bgColor: "bg-green-50 hover:bg-green-100",
  },
  {
    title: "Video Gallery",
    description:
      "Watch videos of our events, performances, and special occasions that showcase our school spirit.",
    href: "/events/video-gallery",
    icon: <Video className="w-8 h-8" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50 hover:bg-purple-100",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Calendar className="w-10 h-10 text-gray-900" />
            <h1 className="text-5xl font-bold text-gray-900">
              Events & Updates
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what's happening at Lyceum International School. From the
            latest news and important notifications to memorable photos and
            videos of our events and celebrations.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Megaphone className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
            <p className="text-gray-600">Active Notifications</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">1000+</h3>
            <p className="text-gray-600">Photos Captured</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">25+</h3>
            <p className="text-gray-600">Events This Year</p>
          </div>
        </div>

        {/* Event Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventSections.map((section, index) => (
            <Link key={index} href={section.href}>
              <div
                className={`${section.bgColor} rounded-xl p-8 transition-all duration-300 hover:shadow-xl group cursor-pointer border border-gray-200`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${section.color} flex-shrink-0`}>
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {section.description}
                    </p>
                    <div className="flex items-center gap-2 text-gray-800 font-medium group-hover:gap-3 transition-all">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/about/overview" className="text-center group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-200 transition-colors">
                <Users className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                About Us
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Learn more about our school
              </p>
            </Link>

            <Link href="/academics" className="text-center group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-200 transition-colors">
                <Calendar className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                Academics
              </h3>
              <p className="text-sm text-gray-500 mt-1">Explore our programs</p>
            </Link>

            <Link href="/admissions" className="text-center group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-200 transition-colors">
                <Megaphone className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                Admissions
              </h3>
              <p className="text-sm text-gray-500 mt-1">Join our community</p>
            </Link>

            <Link href="/campus" className="text-center group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-200 transition-colors">
                <Camera className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                Campus
              </h3>
              <p className="text-sm text-gray-500 mt-1">Tour our facilities</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
