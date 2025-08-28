import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <>
      <div className="relative">
        <Image
          width={600}
          height={100}
          src="/jsons/carousel/h1.jpg"
          alt="Description of image"
          className="w-full h-50 object-cover"
        />
        <div className="absolute bottom-5 left-22 p-4 text-white text-[70px] font-bold">
          About JKPPS
        </div>
      </div>
      
      
      {/* Content below the image */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 bg-white lg:grid-cols-2 py-12 gap-12">
          {/* Left Column - School Introduction */}
          <div>
            <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">
              SCHOOL INTRODUCTION
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Lyceum
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                At Lyceum, our students are nurtured within the socio-cultural environment of 
                Sri Lanka, encouraging camaraderie within academics and co-curricular 
                activities. We offer both the curriculums of National and International 
                Streams, which opens doors to many opportunities for our Lyceumers.
              </p>
              <p>
                Today, the Lyceum International School prospers under the care of Dr. (Mrs) 
                Kumari Grero, the Coordinating Principal. The school is co-educational and 
                committed to the pursuit of excellence in teaching and learning, starting from 
                Pre-Primary to Secondary school.
              </p>
              <p>
                The motto of Lyceum International School is "Know Thyself".
              </p>
            </div>
          </div>
          
          {/* Right Column - School History */}
          <div>
            <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">
              SCHOOL HISTORY
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-700 mb-8">
              <p>
                Lyceum International School was founded in 1993 with only 
                seven students and four teachers by visionary educator, 
                Honourable Dr. Mohan Lal Grero to provide English medium 
                education from Pre-school to Grade 12. Since then, Lyceum 
                International School has come a long way with multiple 
                branches spread out across the island – a testament to our high-quality education and passion for teaching.
              </p>
            </div>
            <button className="inline-flex items-center px-6 py-3 border border-gray-900 text-gray-900 font-medium rounded-none hover:bg-gray-900 hover:text-white transition-colors">
              Read Full Story
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Mission - Teal Background */}
        <div className="bg-[#4CB1C5] text-white p-12 lg:p-16 flex flex-col justify-center">
          <h3 className="text-sm uppercase tracking-wide mb-6 text-right">
            OUR MISSION
          </h3>
          <h2 className="text-4xl lg:text-5xl font-robuck leading-wide text-right">
            To enhance the potential of every young soul that passes through our halls, 
            empowering them to be the best they can be.
          </h2>
        </div>
        
        {/* Vision - Gray Background */}
        <div className="bg-[#6C6E7A] text-white mt-20 p-12 lg:p-16 flex flex-col justify-center">
          <h3 className="text-sm uppercase tracking-wide mb-6 text-left">
            OUR VISION
          </h3>
          <h2 className="text-4xl lg:text-5xl font-robuck leading-wide text-left">
            To produce global citizens, who will reshape the future of their motherland.
          </h2>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">
              SCHOOL VALUES
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Our Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <Image
                width={600}
                height={400}
                src="/jsons/carousel/h1.jpg"
                alt="Students in library"
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Right Column - Values List */}
            <div className="space-y-6">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>To provide excellence in education and also to provide teaching of the highest quality.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>To introduce pupils to a variety of recreational and co-curricular activities to develop physical fitness combined with health-consciousness and to foster team spirit and magnanimity.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>To prepare pupils to study at Colleges and Universities that accept internationally recognized entrance qualifications.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>To promote community services, reaching out into society and to create a better understanding of social problems.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>To develop in every pupil; self-discipline, responsibility, spiritual and moral values, consideration for others, and pride in one's self and one's achievements, leading to the highest possible standards of behavior.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>To foster national unity by encouraging pupils to understand and tolerate the diverse cultures, religions and national values of our society through their own culture, language and religion.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* The Lyceumer Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">
                CONCEPT INTRODUCTION
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                The Lyceumer
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Like the iceberg Lyceumers have depth but are also humble and 
                  simple as they are not boastful of their achievements only letting 
                  their actions reveal their strength and skills. They can withstand 
                  any shock or negative impact and work their way around 
                  problems with quiet strength and wisdom. They face both 
                  victories and defeats, which are a part of life and learning, with 
                  grace and dignity.
                </p>
                
                <p>
                  On the other hand, Lyceumers are also like Oxy-Acetylene 
                  flames. Fierce, powerful and able to cut through any obstacle 
                  they face. They reach for their dreams and achieve success with 
                  strength and will.
                </p>
                
                <p className="italic text-gray-600">
                  Conceptualized by Dr. Mohan Lal Grero.
                </p>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative">
              <Image
                width={600}
                height={400}
                src="/jsons/carousel/h3.jpg"
                alt="Lyceum students in school uniform"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
