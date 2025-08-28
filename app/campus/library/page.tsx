import React from 'react';
import Image from 'next/image';
import { BookOpen, Users, Clock, Shield, AlertTriangle, CreditCard, Search, Heart } from 'lucide-react';

function Page() {
  const libraryRules = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Dedicated Library Period",
      description: "Every student will have one period exclusively for library.",
      type: "info"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Reference Books Policy",
      description: "Reference books are not for issue. These books can be read only in the library.",
      type: "info"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Return Policy & Fine",
      description: "A delay fine of Rs.1/- per day for book will be charged from a student who does not return the books after 7 days.",
      type: "warning"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Book Care Guidelines",
      description: "Books should be handled with great care. Tearing of pages from books, underlining the text and causing damage to books are bad habits.",
      type: "important"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fresh Issue Policy",
      description: "Until the previously issued book is returned, students will not be eligible for a fresh issue.",
      type: "warning"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Lost Book Reporting",
      description: "In case of a book being lost, it should be reported immediately to the librarian. Borrower is required to purchase and deposit a replacement (same book) within two weeks of reporting a lost/damaged book.",
      type: "important"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Membership Card Policy",
      description: "If the membership cards are lost, the Librarian should be informed immediately.",
      type: "info"
    }
  ];

  const libraryFeatures = [
    {
      title: "Extensive Collection",
      description: "Thousands of books across various subjects and genres",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: "Reading Zones",
      description: "Quiet study areas and collaborative learning spaces",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Digital Resources",
      description: "Access to online databases and digital publications",
      icon: <Search className="w-8 h-8" />
    },
    {
      title: "Research Support",
      description: "Dedicated staff to help with research and reference queries",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Books Available' },
    { value: '500+', label: 'Reference Books' },
    { value: '100+', label: 'Daily Visitors' },
    { value: '8', label: 'Hours Daily' },
  ];

  const getCardStyle = (type: string) => {
    switch (type) {
      case 'warning':
        return 'border-l-4 border-amber-500 bg-amber-50 hover:bg-amber-100';
      case 'important':
        return 'border-l-4 border-red-500 bg-red-50 hover:bg-red-100';
      default:
        return 'border-l-4 border-blue-500 bg-blue-50 hover:bg-blue-100';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'warning':
        return 'text-amber-600 bg-amber-100';
      case 'important':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-blue-600 bg-blue-100';
    }
  };

  return (
    <>
      {/* Hero Section */}
      {/* <div className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
                <BookOpen className="w-16 h-16" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Library @ <span className="text-emerald-200">JKPPS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Your Gateway to Knowledge and Learning Excellence
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-bold text-emerald-200">{stat.value}</div>
                  <div className="text-sm text-emerald-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      

      {/* Library Images Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Library Spaces</h2>
            <p className="text-xl text-gray-600">
              Explore the various sections and facilities available in our library
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: '/jsons/carousel/h1.jpg', title: 'Reading Hall', description: 'Spacious reading areas for focused study' },
              { src: '/jsons/carousel/h2.jpg', title: 'Reference Section', description: 'Comprehensive reference materials' },
              { src: '/jsons/carousel/h3.jpg', title: 'Digital Zone', description: 'Computer access and online resources' },
              { src: '/jsons/carousel/h4.jpg', title: 'Study Rooms', description: 'Private spaces for group discussions' }
            ].map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg transition-all duration-300">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Library Features Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Library Facilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive library facilities designed to support your academic journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {libraryFeatures.map((feature, index) => (
              <div key={index} className=" rounded-xl bg-secondary p-8 duration-300 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Library Rules Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Library Rules & Guidelines</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please familiarize yourself with our library policies to ensure a pleasant experience for all users
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {libraryRules.map((rule, index) => (
              <div
                key={index}
                className={`bg-secondary rounded-xl p-6`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 p-2 rounded-lg ${getIconColor(rule.type)}`}>
                    {rule.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{rule.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{rule.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Important Notice Section */}
      {/* <div className="py-16 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-100 text-amber-600 rounded-lg">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Important Reminders</h2>
            </div>
            
            <div className="space-y-4 text-lg text-gray-700">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                <p>Always handle library materials with care and respect</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                <p>Report any issues or lost items to the librarian immediately</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                <p>Maintain silence in reading areas to ensure a conducive learning environment</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                <p>Make full use of your dedicated library period for academic growth</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Contact Information */}
      {/* <div className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Assistance?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Our librarian and staff are always ready to help you find the resources you need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Visit Library
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-300">
              Contact Librarian
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Page;
