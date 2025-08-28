import { Eye, Target, Heart, Star, Users, BookOpen } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function VisionMissionPage() {
  return (
    <>
      {/* Hero Section
      <div className="relative">
        <Image
          width={600}
          height={100}
          src="/jsons/carousel/h2.jpg"
          alt="Vision and Mission"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0"></div>
        <div className="absolute md:px-20 bottom-8 left-8 text-white">
          <h1 className="text-5xl font-bold mb-2">Vision & Mission</h1>
          <p className="text-xl opacity-90">Guiding our path to educational excellence</p>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Vision Section */}
        <div className="mb-20 bg-secondary p-10 rounded-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-2xl p-8 mb-8">
              <p className="text-xl leading-relaxed text-gray-800 text-center">
                "To be a premier educational institution that nurtures innovative minds, 
                fosters global citizenship, and empowers students to become ethical leaders 
                who contribute meaningfully to society while maintaining strong cultural roots 
                and values."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">Striving for the highest standards in education and character development</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Global Citizenship</h3>
                <p className="text-gray-600 text-sm">Preparing students to thrive in an interconnected world</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Values</h3>
                <p className="text-gray-600 text-sm">Instilling strong moral values and cultural appreciation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-20 bg-secondary p-10 rounded-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8">
              <p className="text-xl leading-relaxed text-gray-800 text-center">
                "We are committed to providing a holistic education that develops critical thinking, 
                creativity, and character. Through innovative teaching methods, comprehensive curricula, 
                and a supportive environment, we prepare students for success in higher education 
                and life while fostering respect, responsibility, and resilience."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 ">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <BookOpen className="w-5 h-5 text-green-600 mr-2" />
                  Academic Excellence
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Innovative and engaging curriculum delivery</li>
                  <li>• Integration of technology in learning</li>
                  <li>• Focus on critical thinking and problem-solving</li>
                  <li>• Preparation for both national and international standards</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 ">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Heart className="w-5 h-5 text-green-600 mr-2" />
                  Character Development
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Building strong moral and ethical foundations</li>
                  <li>• Developing leadership and teamwork skills</li>
                  <li>• Fostering empathy and social responsibility</li>
                  <li>• Encouraging cultural appreciation and diversity</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 ">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Users className="w-5 h-5 text-green-600 mr-2" />
                  Holistic Growth
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Comprehensive co-curricular programs</li>
                  <li>• Sports and physical development</li>
                  <li>• Arts and creative expression</li>
                  <li>• Community service and outreach</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 ">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Star className="w-5 h-5 text-green-600 mr-2" />
                  Future Readiness
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• 21st-century skills development</li>
                  <li>• Digital literacy and technological competence</li>
                  <li>• Environmental consciousness</li>
                  <li>• Global perspectives and cultural sensitivity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20 bg-secondary p-10 rounded-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide everything we do at our institution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <span className="text-2xl font-bold text-purple-600">R</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Respect</h3>
              <p className="text-gray-600 text-sm">For ourselves, others, and our environment</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <span className="text-2xl font-bold text-purple-600">I</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">Honesty and ethical behavior in all actions</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <span className="text-2xl font-bold text-purple-600">E</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">Striving for the best in everything we do</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <span className="text-2xl font-bold text-purple-600">C</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Compassion</h3>
              <p className="text-gray-600 text-sm">Empathy and care for our community</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        {/* <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Educational Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our vision and mission can shape your child's future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More About Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Admissions
            </button>
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
