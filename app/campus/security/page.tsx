'use client';

import Image from 'next/image';
import { 
  ShieldCheckIcon, 
  CameraIcon, 
  UserGroupIcon,
  HeartIcon,
  EyeIcon,
  ClockIcon,
  PhoneIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: CameraIcon,
      title: "CCTV Surveillance",
      description: "51 high-technology cameras monitoring all areas",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: UserGroupIcon,
      title: "Security Guards",
      description: "Trained security personnel on campus",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: HeartIcon,
      title: "Medical Dispensary",
      description: "On-campus first-aid and medical facility",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: ShieldCheckIcon,
      title: "24/7 Protection",
      description: "Round-the-clock security monitoring",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const securityMeasures = [
    {
      title: "Advanced CCTV Network",
      description: "Our campus is equipped with 51 state-of-the-art surveillance cameras strategically positioned to monitor all areas including classrooms, corridors, playgrounds, and entry/exit points.",
      icon: CameraIcon,
      image: "/jsons/carousel/h1.jpg",
      features: [
        "High-definition video recording",
        "Night vision capabilities", 
        "Real-time monitoring",
        "Digital storage system"
      ]
    },
    {
      title: "Medical Dispensary",
      description: "Our on-campus dispensary is fully equipped to handle first-aid situations and medical emergencies, ensuring immediate care for students and staff.",
      icon: HeartIcon,
      image: "/jsons/carousel/h2.jpg",
      features: [
        "First-aid medical supplies",
        "Trained medical staff",
        "Emergency response protocols",
        "Parent notification system"
      ]
    },
    {
      title: "Security Personnel",
      description: "Professional security guards are stationed across the campus to ensure a safe and secure learning environment for all students and staff members.",
      icon: UserGroupIcon,
      image: "/jsons/carousel/h3.jpg",
      features: [
        "Trained security guards",
        "Regular patrol schedules",
        "Access control monitoring",
        "Visitor management system"
      ]
    }
  ];

  const emergencyProtocols = [
    {
      title: "Emergency Response",
      description: "Immediate response protocols for any security incidents",
      icon: ExclamationTriangleIcon
    },
    {
      title: "Parent Communication",
      description: "Instant notification system for parents during emergencies",
      icon: PhoneIcon
    },
    {
      title: "Regular Drills",
      description: "Safety drills conducted regularly to prepare students",
      icon: ClockIcon
    },
    {
      title: "Monitoring Center",
      description: "Central security monitoring station with trained operators",
      icon: EyeIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShieldCheckIcon className="h-20 w-20 mx-auto mb-6 text-red-200" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Security @ JKPPS
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Your child's safety is our top priority. Experience complete peace of mind with our comprehensive security infrastructure.
            </p>
            
            {/* Security Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white">51</div>
                <div className="text-red-200 text-sm">CCTV Cameras</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-red-200 text-sm">Monitoring</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-red-200 text-sm">Campus Coverage</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-white">1</div>
                <div className="text-red-200 text-sm">Medical Dispensary</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Security Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our multi-layered security approach ensures a safe and secure environment for learning and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-secondary rounded-2xl p-8 h-full transition-all duration-300 border border-gray-100">
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

      {/* Detailed Security Measures */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Security Infrastructure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed overview of our comprehensive security measures and facilities.
            </p>
          </div>

          <div className="space-y-16">
            {securityMeasures.map((measure, index) => {
              const Icon = measure.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-8">
                      <div className="flex items-center mb-6">
                        <div className="bg-red-100 text-red-600 p-3 rounded-xl mr-4">
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {measure.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {measure.description}
                      </p>
                      <ul className="space-y-3">
                        {measure.features.map((feature, idx) => (
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
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl transform rotate-3"></div>
                      <div className="relative bg-white p-1 rounded-2xl">
                        <Image
                          src={measure.image}
                          alt={measure.title}
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

      {/* Emergency Protocols */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Emergency Protocols
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Well-defined emergency procedures to ensure rapid response and effective communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyProtocols.map((protocol, index) => {
              const Icon = protocol.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 h-full transition-all duration-300 border border-red-200">
                    <div className="bg-red-600 text-white inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {protocol.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {protocol.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Notice
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <ExclamationTriangleIcon className="h-16 w-16 text-amber-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Important Security Notice
            </h2>
            <div className="text-left text-gray-600 space-y-4">
              <p>• All visitors must register at the main gate and obtain proper authorization</p>
              <p>• Students are not permitted to leave the campus during school hours without proper approval</p>
              <p>• Any suspicious activity should be immediately reported to security personnel</p>
              <p>• Emergency contact numbers are displayed prominently throughout the campus</p>
              <p>• Regular security briefings are conducted for all staff and students</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Security */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Security Concerns or Emergency?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Our security team is available 24/7 to address any concerns or emergencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 font-semibold px-8 py-4 rounded-full hover:bg-red-50 transition duration-300 shadow-lg">
              Contact Security Team
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-red-600 transition duration-300">
              Emergency Procedures
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}