"use client";

import React from 'react';
import Facilities from '@/components/Facilities';
import { 
  BookOpen, 
  Users, 
  Award, 
  Globe, 
  Lightbulb, 
  Heart,
  Target,
  Star,
  Shield,
  Zap
} from 'lucide-react';

const additionalFeatures = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "Comprehensive curriculum designed to foster critical thinking and academic achievement across all grade levels.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Our dedicated team of qualified educators brings years of experience and passion to every classroom.",
    color: "from-purple-500 to-pink-400"
  },
  {
    icon: Award,
    title: "International Recognition",
    description: "Accredited programs and certifications that are recognized globally, opening doors to worldwide opportunities.",
    color: "from-amber-500 to-orange-400"
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Multicultural learning environment that prepares students for success in an interconnected world.",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: Lightbulb,
    title: "Innovation & Technology",
    description: "State-of-the-art technology integration and innovative teaching methods to enhance the learning experience.",
    color: "from-indigo-500 to-purple-400"
  },
  {
    icon: Heart,
    title: "Holistic Development",
    description: "Focus on developing not just academic skills but also emotional intelligence, creativity, and leadership qualities.",
    color: "from-rose-500 to-pink-400"
  },
  {
    icon: Target,
    title: "Personalized Learning",
    description: "Tailored educational approaches that cater to individual learning styles and pace for optimal student growth.",
    color: "from-teal-500 to-cyan-400"
  },
  {
    icon: Star,
    title: "Excellence in Arts",
    description: "Comprehensive arts programs including music, drama, visual arts, and creative writing to nurture artistic talents.",
    color: "from-yellow-500 to-amber-400"
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Secure and nurturing campus environment with comprehensive safety measures and student welfare programs.",
    color: "from-slate-500 to-gray-400"
  },
  {
    icon: Zap,
    title: "Leadership Development",
    description: "Student leadership programs and opportunities that build confidence, responsibility, and future leaders.",
    color: "from-violet-500 to-purple-400"
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Key Features Grid
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-gray-600 text-sm font-medium mb-4 uppercase tracking-wider">
              Why Choose Our School
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Excellence in Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are committed to providing a comprehensive educational experience that goes beyond 
              traditional learning, fostering growth in every aspect of a student's development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className={`h-2 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Facilities Section */}
      <Facilities />

      {/* Statistics Section */}
      <section className="py-40 bg-white text-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-black font-bold mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl opacity-90 max-w-2xl text-black/50 mx-auto">
              These numbers reflect our commitment to educational excellence and student success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4 transition-transform duration-300">
                25,000+
              </div>
              <h3 className="text-xl text-black font-semibold mb-2">Students</h3>
              <p className="text-black/50">Across our network of schools</p>
            </div>

            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4 transition-transform duration-300">
                3,300+
              </div>
              <h3 className="text-xl text-black font-semibold mb-2">Teachers</h3>
              <p className="text-black/50">Qualified and experienced educators</p>
            </div>

            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-4 transition-transform duration-300">
                98%
              </div>
              <h3 className="text-xl text-black font-semibold mb-2">Success Rate</h3>
              <p className="text-black/50">Student achievement and progression</p>
            </div>

            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-4 transition-transform duration-300">
                50+
              </div>
              <h3 className="text-xl text-black font-semibold mb-2">Countries</h3>
              <p className="text-black/50">Global alumni network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-black rounded-3xl p-12 md:p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards an exceptional educational journey. 
              Discover how our features and facilities can help your child thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-300 shadow-lg">
                Schedule a Visit
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
