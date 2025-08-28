'use client';

import Image from 'next/image';
import { 
  HomeIcon,
  UserGroupIcon,
  BookOpenIcon,
  HeartIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export default function HostelPage() {
  const hostelFeatures = [
    {
      icon: HomeIcon,
      title: "Separate Hostels",
      description: "Dedicated facilities for boys and girls with modern amenities",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: SparklesIcon,
      title: "Spacious Rooms",
      description: "Well-furnished and airy dormitories for comfortable living",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: BookOpenIcon,
      title: "Reading Rooms",
      description: "Well-furnished study areas available in both hostels",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: HeartIcon,
      title: "Balanced Diet",
      description: "Nutritious meals provided under hygienic conditions",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: UserGroupIcon,
      title: "Indoor/Outdoor Games",
      description: "Various recreational facilities for holistic development",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: ClockIcon,
      title: "24/7 Guidance",
      description: "Round-the-clock support by dedicated wardens",
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  const hostelBlocks = [
    {
      title: "Girls Hostel",
      description: "A safe and nurturing environment designed specifically for our female students, with modern amenities and dedicated supervision by a lady warden.",
      image: "/jsons/carousel/h1.jpg",
      features: [
        "Spacious and well-furnished rooms",
        "24/7 supervision by lady warden",
        "Secure and safe environment",
        "Modern amenities and facilities",
        "Dedicated reading room",
        "Recreational facilities"
      ],
      icon: HomeIcon
    },
    {
      title: "Boys Hostel",
      description: "A comfortable and disciplined living space for our male students, equipped with all necessary facilities and supervised by a gentleman warden.",
      image: "/jsons/carousel/h2.jpg",
      features: [
        "Well-designed dormitories",
        "24/7 guidance by gentleman warden",
        "Indoor and outdoor games",
        "Study-friendly environment",
        "Hygienic dining facilities",
        "Modern infrastructure"
      ],
      icon: AcademicCapIcon
    }
  ];

  const hostelRules = [
    {
      title: "Discipline & Conduct",
      rules: [
        "Maintain discipline and respect towards wardens and fellow students",
        "Follow the prescribed time table for various activities",
        "Keep rooms and common areas clean and tidy"
      ],
      color: "bg-gray-50 border"
    },
    {
      title: "Study Hours",
      rules: [
        "Compulsory study hours must be observed in reading rooms",
        "Silence must be maintained during study periods",
        "Use of electronic devices restricted during study time"
      ],
      color: "bg-gray-50 border"
    },
    {
      title: "Safety & Security",
      rules: [
        "Students must inform wardens before leaving hostel premises",
        "Visitors allowed only during specified hours with permission",
        "Emergency contact numbers must be readily available"
      ],
      color: "bg-gray-50 border"
    },
    {
      title: "General Guidelines",
      rules: [
        "Balanced diet provided - outside food not recommended",
        "Participate actively in recreational activities",
        "Report any issues or concerns immediately to wardens"
      ],
      color: "bg-gray-50 border"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HomeIcon className="h-20 w-20 mx-auto mb-6 text-indigo-200" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              JKPPS Hostel
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              A home away from home - providing comfortable accommodation with modern facilities and dedicated care for our students.
            </p>
            
            {/* Hostel Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white">2</div>
                <div className="text-indigo-200 text-sm">Separate Hostels</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-indigo-200 text-sm">Warden Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-indigo-200 text-sm">Modern Facilities</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white">2</div>
                <div className="text-indigo-200 text-sm">Reading Rooms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modern Architecture & Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Institute has very well designed architecture with all modern facilities. 
              Separate hostels for girls and boys provide comfortable boarding and lodging 
              with comprehensive amenities for holistic development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostelFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-secondary rounded-2xl p-8 h-full transition-all duration-300 ">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.color} mb-6`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hostel Blocks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hostel Blocks
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Well-designed separate accommodation facilities for boys and girls with dedicated supervision and modern amenities.
            </p>
          </div>

          <div className="space-y-16">
            {hostelBlocks.map((block, index) => {
              const Icon = block.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  <div className=" flex-1">
                    <div className="rounded-2xl bg-secondary p-8">
                      <div className="flex items-center mb-6">
                        <div className="bg-indigo-100 text-indigo-600 p-3 rounded-xl mr-4">
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {block.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {block.description}
                      </p>
                      <ul className="space-y-3">
                        {block.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <ShieldCheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl transform rotate-3"></div>
                      <div className="relative bg-white p-1 rounded-2xl">
                        <Image
                          src={block.image}
                          alt={block.title}
                          width={600}
                          height={400}
                          className="w-full h-80 object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hostel Rules */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hostel Rules & Guidelines
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Clear guidelines to ensure a harmonious, safe, and conducive living environment for all hostel residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hostelRules.map((category, index) => (
              <div key={index} className={`rounded-2xl ${category.color} p-6`}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpenIcon className="h-6 w-6 mr-2 text-black" />
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warden Support */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-secondary rounded-2xl p-8">
            <UserGroupIcon className="h-16 w-16 text-black mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              24/7 Warden Support
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our dedicated wardens provide round-the-clock guidance and support to ensure 
              the safety, well-being, and academic progress of all hostel residents.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-pink-100 rounded-xl p-4">
                <h4 className="font-semibold text-pink-600 mb-2">Girls Hostel</h4>
                <p className="text-pink-500">Supervised by experienced lady warden providing maternal care and guidance</p>
              </div>
              <div className="bg-blue-100 rounded-xl p-4">
                <h4 className="font-semibold text-blue-600 mb-2">Boys Hostel</h4>
                <p className="text-blue-500">Managed by dedicated gentleman warden ensuring discipline and mentorship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Hostel */}
      {/* <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Interested in Hostel Admission?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Contact our hostel administration for admission procedures and facility tours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-full hover:bg-indigo-50 transition duration-300 shadow-lg">
              Hostel Admission Enquiry
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-indigo-600 transition duration-300">
              Schedule Hostel Tour
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}