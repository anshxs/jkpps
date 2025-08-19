"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Quote, Users, GraduationCap, ChartBar, Star, Link, ArrowRight } from 'lucide-react';

interface Achievement {
  number: string;
  label: string;
  icon: string;
}

interface Principal {
  name: string;
  position: string;
  image: string;
  qualifications: string;
  experience: string;
  message: string;
  vision: string;
  achievements: string[];
}

interface PrincipalData {
  title: string;
  subtitle: string;
  principal: Principal;
  statistics: Achievement[];
}

function PrincipalHome() {
  const [principalData, setPrincipalData] = useState<PrincipalData | null>(null);

  useEffect(() => {
    fetch("/jsons/principal.json")
      .then((response) => response.json())
      .then((data) => {
        setPrincipalData(data);
      })
      .catch((error) => console.error("Error fetching principal data:", error));
  }, []);

  if (!principalData) {
    return (
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'users':
        return <Users className="w-8 h-8" />;
      case 'academic-cap':
        return <GraduationCap className="w-8 h-8" />;
      case 'chart-bar':
        return <ChartBar className="w-8 h-8" />;
      case 'star':
        return <Star className="w-8 h-8" />;
      default:
        return <Users className="w-8 h-8" />;
    }
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-gray-600 text-sm font-medium mb-2 uppercase tracking-wider">
              {principalData.subtitle}
            </p>
            <h2 className="text-4xl font-bold text-gray-900">{principalData.title}</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Principal Image and Info */}
          <div className="space-y-6">
            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                <Image
                  src={principalData.principal.image}
                  alt={principalData.principal.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Principal Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">
                    {principalData.principal.name}
                  </h3>
                  <p className="text-lg text-gray-200 mb-2">
                    {principalData.principal.position}
                  </p>
                  <p className="text-sm text-gray-300">
                    {principalData.principal.qualifications}
                  </p>
                  <p className="text-sm text-gray-300">
                    {principalData.principal.experience}
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {principalData.statistics.map((stat, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-xl p-6 border transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-black">
                      {getIcon(stat.icon)}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Message and Vision */}
          <div className="space-y-8">
            {/* Principal Message */}
            <div className="bg-secondary rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Quote className="w-8 h-8 text-black" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Principal's Message
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-md">
                {principalData.principal.message}
              </p>
            </div>

            {/* Vision Statement */}
            <div className="bg-secondary text-black rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">Our Vision</h3>
              <p className="leading-relaxed text-md text-black">
                {principalData.principal.vision}
              </p>
            </div>

            {/* Achievements */}
            <div className="bg-secondary text-black rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Key Achievements
              </h3>
              <ul className="space-y-1">
                {principalData.principal.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-md">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrincipalHome;