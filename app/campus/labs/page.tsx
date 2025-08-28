import React from 'react';
import Image from 'next/image';
import { Microscope, Atom, Dna, Computer, ChevronRight, Users, Award, BookOpen } from 'lucide-react';

function Page() {
  const labs = [
    {
      id: 'physics',
      name: 'Physics Lab',
      icon: <Atom className="w-8 h-8" />,
      description: 'State-of-the-art physics laboratory equipped with modern instruments for experimental learning and scientific discovery.',
      features: [
        'Advanced measurement instruments',
        'Mechanics and optics equipment',
        'Electronics and circuit boards',
        'Safety protocols and guidelines'
      ],
      images: [
        '/jsons/carousel/h1.jpg', // Placeholder - replace with actual physics lab images
        '/jsons/carousel/h2.jpg',
        '/jsons/carousel/h3.jpg',
        '/jsons/carousel/h4.jpg'
      ]
    },
    {
      id: 'chemistry',
      name: 'Chemistry Lab',
      icon: <Microscope className="w-8 h-8" />,
      description: 'Well-equipped chemistry laboratory with modern apparatus for hands-on chemical experiments and analysis.',
      features: [
        'Fume hoods and ventilation systems',
        'Chemical storage and handling',
        'Analytical instruments',
        'Safety equipment and protocols'
      ],
      images: [
        '/jsons/carousel/h2.jpg', // Placeholder - replace with actual chemistry lab images
        '/jsons/carousel/h3.jpg',
        '/jsons/carousel/h4.jpg',
        '/jsons/carousel/h5.jpg'
      ]
    },
    {
      id: 'biology',
      name: 'Biology Lab',
      icon: <Dna className="w-8 h-8" />,
      description: 'Modern biology laboratory featuring microscopes and specimens for comprehensive life sciences education.',
      features: [
        'High-quality microscopes',
        'Specimen collection and models',
        'Dissection equipment',
        'Digital imaging systems'
      ],
      images: [
        '/jsons/carousel/h3.jpg', // Placeholder - replace with actual biology lab images
        '/jsons/carousel/h4.jpg',
        '/jsons/carousel/h5.jpg',
        '/jsons/carousel/h1.jpg'
      ]
    },
    {
      id: 'computer',
      name: 'Computer Lab',
      icon: <Computer className="w-8 h-8" />,
      description: 'Cutting-edge computer laboratory with latest technology for digital literacy and programming education.',
      features: [
        'Latest generation computers',
        'High-speed internet connectivity',
        'Programming software and tools',
        'Interactive learning platforms'
      ],
      images: [
        '/jsons/carousel/h4.jpg', // Placeholder - replace with actual computer lab images
        '/jsons/carousel/h5.jpg',
        '/jsons/carousel/h1.jpg',
        '/jsons/carousel/h2.jpg'
      ]
    }
  ];

  const stats = [
    { icon: <BookOpen className="w-6 h-6" />, value: '4', label: 'Modern Labs' },
    { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Students Served' },
    { icon: <Award className="w-6 h-6" />, value: '100%', label: 'Safety Standards' },
  ];

  return (
    <>
      {/* Hero Section */}
      {/* <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              School Labs @ <span className="text-blue-200">JKPPS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              We at JKPPS believe in the holistic approach towards education
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                  <div className="text-blue-200">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Mission Statement */}
      {/* <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Educational Philosophy
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We constantly endeavour to create and sustain an educational environment that offers 
              the learner the full range of opportunities to perceive, crystallize, sharpen and utilize 
              her/his manifest and latent intelligences, which, according to Professor Howard Gardner, 
              form the foundation for a successful and fulfilling career of an individual, especially 
              in the global community of today.
            </p>
            <div className="bg-blue-600 text-white px-8 py-4 rounded-lg inline-block">
              <p className="text-xl font-semibold">
                Jammu & Kashmir Police Public School aspires to provide Well Furnished Labs
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Labs Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Laboratory Facilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our state-of-the-art laboratories designed to foster scientific inquiry and hands-on learning
            </p>
          </div>

          <div className="space-y-20">
            {labs.map((lab, index) => (
              <div key={lab.id} className={`flex bg-secondary py-10 px-8 rounded-2xl flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                      {lab.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{lab.name}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {lab.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {lab.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <ChevronRight className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Images Grid */}
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-4">
                    {lab.images.map((image, imageIndex) => (
                      <div key={imageIndex} className="relative group overflow-hidden rounded-lg transition-shadow duration-300">
                        <Image
                          src={image}
                          alt={`${lab.name} facility ${imageIndex + 1}`}
                          width={300}
                          height={250}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 text-white">
                            <p className="text-sm font-medium">{lab.name}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Learning Like Never Before
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our laboratories provide students with hands-on experience that bridges 
            theoretical knowledge with practical application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Schedule a Visit
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div> */}

      {/* Additional Information */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Commitment to Excellence
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At JKPPS, we understand that practical learning through well-equipped laboratories 
              is essential for developing critical thinking, problem-solving skills, and scientific 
              temperament. Our laboratories are designed to meet international standards and 
              provide students with the best possible learning environment to excel in their 
              scientific pursuits.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;