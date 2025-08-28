import React from 'react';
import Image from 'next/image';
import { Building2, TreePine, Wifi, Users, GraduationCap, Utensils, BookOpen, Theater, Home, Car, FlaskConical, Microscope, Computer, Dna, MapPin, Star } from 'lucide-react';

function Page() {
  const infrastructureFeatures = [
    {
      id: 'building',
      name: 'School Building',
      icon: <Building2 className="w-8 h-8" />,
      description: 'State-of-the-art infrastructure with ultra modern facilities in a sprawling campus setting.',
      image: '/jsons/carousel/h1.jpg'
    },
    {
      id: 'nursery',
      name: 'Nursery Wing',
      icon: <GraduationCap className="w-8 h-8" />,
      description: 'Dedicated separate wing designed specifically for our youngest learners with age-appropriate facilities.',
      image: '/jsons/carousel/h2.jpg'
    },
    {
      id: 'boys-hostel',
      name: 'Hostel For Boys',
      icon: <Home className="w-8 h-8" />,
      description: 'Comfortable and secure residential facility providing a home away from home for male students.',
      image: '/jsons/carousel/h3.jpg'
    },
    {
      id: 'girls-hostel',
      name: 'Hostel For Girls',
      icon: <Home className="w-8 h-8" />,
      description: 'Safe and well-maintained residential accommodation designed for female students.',
      image: '/jsons/carousel/h4.jpg'
    },
    {
      id: 'chemistry-lab',
      name: 'Chemistry Lab',
      icon: <FlaskConical className="w-8 h-8" />,
      description: 'Well-equipped chemistry laboratory with modern apparatus for hands-on learning and experiments.',
      image: '/jsons/carousel/h5.jpg'
    },
    {
      id: 'physics-lab',
      name: 'Physics Lab',
      icon: <Microscope className="w-8 h-8" />,
      description: 'Advanced physics laboratory featuring state-of-the-art instruments for scientific exploration.',
      image: '/jsons/carousel/h1.jpg'
    },
    {
      id: 'computer-lab',
      name: 'Computer Lab',
      icon: <Computer className="w-8 h-8" />,
      description: 'Modern computer laboratory equipped with broadband connections and latest technology.',
      image: '/jsons/carousel/h2.jpg'
    },
    {
      id: 'biology-lab',
      name: 'Biology Lab',
      icon: <Dna className="w-8 h-8" />,
      description: 'Comprehensive biology laboratory with specimens and equipment for life sciences education.',
      image: '/jsons/carousel/h3.jpg'
    },
    {
      id: 'playground',
      name: 'School Playground',
      icon: <Users className="w-8 h-8" />,
      description: 'Huge playground providing opportunities for physical and aesthetic growth and development.',
      image: '/jsons/carousel/h4.jpg'
    },
    {
      id: 'library',
      name: 'Library',
      icon: <BookOpen className="w-8 h-8" />,
      description: 'Well-equipped library with extensive collection of books and digital resources.',
      image: '/jsons/carousel/h5.jpg'
    },
    {
      id: 'transportation',
      name: 'Transportation',
      icon: <Car className="w-8 h-8" />,
      description: 'Reliable and safe transportation services connecting various parts of the region.',
      image: '/jsons/carousel/h1.jpg'
    }
  ];

  const keyHighlights = [
    {
      icon: <TreePine className="w-6 h-6" />,
      title: 'Green Campus',
      description: 'Lush green well-manicured lawns and grounds away from city hustle bustle'
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Wi-Fi Enabled',
      description: 'Complete wi-fi campus with Smart Classes for digital learning'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Smart Classes',
      description: 'Modern technological facilities for 21st century digital learners'
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Well Ventilated',
      description: 'Well ventilated and lighted rooms for effective teaching and learning'
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: 'Canteen Facility',
      description: 'On-campus canteen providing nutritious meals and refreshments'
    },
    {
      icon: <Theater className="w-6 h-6" />,
      title: 'Auditorium',
      description: 'Spacious auditorium for cultural events and academic programs'
    }
  ];

  const stats = [
    { value: '50+', label: 'Acres Campus' },
    { value: '4', label: 'Modern Labs' },
    { value: '100%', label: 'Wi-Fi Coverage' },
    { value: '24/7', label: 'Security' },
  ];

  return (
    <>
      {/* Hero Section */}

      {/* Campus Overview */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Campus Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The school has lush green well-manicured lawns and grounds and away from city's hustle bustle. 
              The school has got sprawling campus with well equipped laboratories, technology aided learning, 
              huge playground for providing opportunities for physical and well aesthetic growth and development. 
              JKPPS has Canteen facility, well equipped library, Auditorium, separate Nursery Wing and separate 
              Hostels for Boys and Girls.
            </p>
            <div className="grid grid-cols-2 py-10 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-secondary backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-bold text-black">{stat.value}</div>
                  <div className="text-sm text-black/70">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-black text-white px-8 py-4 rounded-lg inline-block">
              <p className="text-xl font-semibold flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                Located at Miran Sahib, Away from City Hustle
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Highlights</h2>
            <p className="text-xl text-gray-600">
              Discover what makes our infrastructure exceptional for 21st century learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyHighlights.map((highlight, index) => (
              <div key={index} className="bg-secondary rounded-lg p-6 duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-100 text-red-600 rounded-lg">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{highlight.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infrastructure Facilities */}
      <div className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Infrastructure Facilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive infrastructure designed to provide the best learning environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureFeatures.map((facility, index) => (
              <div key={facility.id} className="bg-white rounded-lg duration-300 overflow-hidden group">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="text-white">
                          {facility.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold">{facility.name}</h3>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                {/* <div className="absolute inset-0 p-6">
                  <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology & Modern Facilities */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">21st Century Learning Environment</h2>
            </div>
            
            <div className="bg-secondary rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Technological Integration</h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start gap-3">
                      <Wifi className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                      <p>Complete wi-fi campus enabling seamless digital connectivity throughout the premises</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                      <p>Smart Classes with modern technological facilities catering to 21st century digital learners</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                      <p>Well ventilated and lighted rooms making teaching learning effective</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <TreePine className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                      <p>Well built roads with saplings planted on both sides adding beauty to the magnanimous structure</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <Image
                    src="/jsons/carousel/h5.jpg"
                    alt="Modern Campus Technology"
                    width={500}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent rounded-lg">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-lg font-semibold">Technology Enhanced Learning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Our World-Class Infrastructure
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Visit our campus to see how our state-of-the-art facilities create an ideal environment for holistic education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Schedule Campus Tour
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300">
              Virtual Tour
            </button>
          </div>
        </div>
      </div> */}

      {/* Additional Information
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Infrastructure Excellence
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At JKPPS Miran Sahib, we believe that a conducive learning environment is fundamental to 
              academic excellence. Our infrastructure is thoughtfully designed to provide students with 
              all the necessary facilities while maintaining the highest standards of safety, comfort, 
              and technological advancement. From our sprawling green campus to our modern laboratories 
              and residential facilities, every aspect is crafted to support holistic development.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Page;
