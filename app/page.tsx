import Carousel from '@/components/Carousel';
import carouselData from '@/public/jsons/carousel/carousels.json';
import News from '@/components/News';
import MidBanner from '@/components/MidBanner';
import Facilities from '@/components/Facilities';
import { User } from 'lucide-react';
import PrincipalHome from '@/components/PrincipalHome';

export default function Home() {
  return (
    <div className="w-full relative">
      <Carousel items={carouselData} autoplayInterval={2000} />
      
      {/* Lyceum Network Section */}
      <section className="w-full bg-[#E9F0FA] ">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Main Text */}
            <div className="space-y-6 px-4">
              <h2 className="text-4xl font-bold text-[#0C1C28] leading-tight mt-10">
                Lyceum is the largest network of International Schools in Sri Lanka with over 25,000+ students and over 3,300+ teachers in total and growing!
              </h2>
            </div>
            
            {/* Right Column - Benefits */}
            <div className="bg-[#112331] text-white p-8 md:p-10 lg:p-12">
              <h3 className="text-xl font-semibold mb-8 text-center lg:text-left">
                At Lyceum International School you can:
              </h3>
              
              <ul className="space-y-0 px-2">
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs md:text-xl leading-relaxed">
                    Learn from skilled and talented teachers.
                  </span>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs md:text-xl leading-relaxed">
                    Receive International Educational Certificates.
                  </span>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs md:text-xl leading-relaxed">
                    Achieve your utmost potential.
                  </span>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs md:text-xl leading-relaxed">
                    Be a part of a community of inspired, intellectual and talented individuals.
                  </span>
                </li>
              </ul>
              
              <div className="mt-8 md:mt-10">
                <p className="text-base md:text-lg leading-relaxed opacity-90">
                  We utilize the best practices available in teaching to develop the skills required for success in higher education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Lyceum Section */}
      <section className="w-full relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/jsons/carousel/h5.jpg')",
          }}
        >
          {/* Dark overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-black/50"></div> */}
        </div>
        
        {/* Floating Content Card */}
        <div className="relative z-10 h-full flex items-end px-4 md:px-8 lg:px-12 pb-8 md:pb-12">
          <div className="bg-black/90 backdrop-blur-sm text-white p-6 md:p-8 rounded-xl shadow-2xl w-full border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                About Lyceum
              </h2>
              <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 whitespace-nowrap text-sm">
                Read Full Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                At Lyceum, our students are nurtured within the socio-cultural environment of{' '}
                <span className="font-semibold text-blue-300">Sri Lanka</span>, whilst encouraging a balance between academics and 
                co-curricular activities. We offer both the curricula of{' '}
                <span className="font-semibold text-blue-300">National and International Streams</span>, which open doors to many opportunities for our 
                Lyceumers.
              </p>
              
              <p>
                Today, the Lyceum International School prospers under the care of{' '}
                <span className="font-semibold text-blue-300">Dr. (Mrs) Kumari Green</span>, the Consultant Coordinating Principal. 
                The school is co-educational and committed to the pursuit of excellence in teaching and learning, starting from Pre-Primary to Secondary 
                school.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PrincipalHome/>

      {/* What Do We Offer Section */}
      <section className="w-full bg-black py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Main Content */}
            <div className="space-y-8 flex flex-col items-start">
              <div className="space-y-4">
                <p className="text-gray-400 text-sm md:text-base font-medium tracking-wider uppercase">
                  WHAT DO WE OFFER
                </p>
                <h2 className="text-white text-2xl md:text-5xl lg:text-5xl font-bold leading-tight">
                  A multiethnic and
                  multicultural
                  schooling environment that creates global citizens.
                </h2>
              </div>
              
              <button className="bg-transparent border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 text-lg">
                View All Curriculum
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            
            {/* Right Column - Description and Features */}
            <div className="space-y-12">
              <p className="text-gray-300 text-md md:text-md leading-relaxed">
                At Lyceum students will gain all the tools necessary to live up to their aspirations. 
                Every mind is carefully nurtured at our comprehensive school.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Primary Education */}
                <div className="space-y-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <User color='white'/>
                  </div>
                  <h3 className="text-white text-xl font-bold">Primary Education</h3>
                  <p className="text-gray-400 text-md leading-relaxed">
                    We provide a comprehensive Primary School experience for our students.
                  </p>
                </div>
                
                {/* National Curriculum */}
                <div className="space-y-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-bold">National Curriculum</h3>
                  <p className="text-gray-400 text-md leading-relaxed">
                    We offer the state-approved government OLs and ALs curriculum taught in English Medium.
                  </p>
                </div>
                
                {/* Secondary Education */}
                <div className="space-y-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-bold">Secondary Education</h3>
                  <p className="text-gray-400 text-md leading-relaxed">
                    We offer a well-rounded Secondary School experience for our students.
                  </p>
                </div>
                
                {/* International Curriculum */}
                <div className="space-y-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,10.9C14.39,10.9 16.5,11.37 18.15,12.24C17.45,12.44 16.13,12.6 14.5,12.6C12.87,12.6 11.55,12.44 10.85,12.24C11.5,11.37 12.61,10.9 12,10.9M12,9.5C10.34,9.5 9,10.84 9,12.5C9,14.16 10.34,15.5 12,15.5C13.66,15.5 15,14.16 15,12.5C15,10.84 13.66,9.5 12,9.5M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"/>
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-bold">International Curriculum</h3>
                  <p className="text-gray-400 text-md leading-relaxed">
                    We offer the International Curriculum for OLs and ALs taught in English Medium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <News limit={6} />

      {/* Mid Banner Section */}
      <MidBanner />

      {/* Facilities Section */}
      <Facilities />

      {/* Enrol Your Child Section */}
      <section className="w-full bg-black py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
            {/* Left Column - Content */}
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <p className="text-gray-400 text-sm md:text-base font-medium tracking-wider uppercase">
                  BRANCH ADMISSIONS
                </p>
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-robuck leading-tight">
                  Enroll your child
                </h2>
              </div>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
                Are you searching for the best education Sri Lanka has to offer for your child? Look no further than Lyceum International School. Contact us today to submit your admission request, and our student service agents will guide you through the enrolment process.
              </p>
            </div>
            
            {/* Right Column - CTA Button */}
            <div className="flex-shrink-0">
              <button className="bg-[#2d2d2d] text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-3 text-md whitespace-nowrap">
                Apply Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}