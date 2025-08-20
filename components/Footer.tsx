'use client';

import Image from 'next/image';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer className="bg-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Lyceum Careers Section */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/header-logo2.png"
                alt="Lyceum International School"
                width={60}
                height={60}
                className="mr-3"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">LYCEUM</h3>
                <p className="text-sm text-gray-600">INTERNATIONAL SCHOOL</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Lyceum Careers</h4>
              <p className="text-sm text-gray-600 mb-2">Looking to start your career?</p>
              <p className="text-sm text-gray-600">
                Browse through <span className="font-semibold">Lyceum Careers</span>
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Lyceum Sitemap</h4>
              <p className="text-sm text-gray-600 mb-2">Can't find what you looking for?</p>
              <p className="text-sm text-gray-600">
                Explore entire <span className="font-semibold">Lyceum Sitemap</span>
              </p>
            </div>
          </div>

          {/* Education Group & Legal Statements */}
          <div>
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">Lyceum Education Group</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Lyceum Campus</a></li>
                <li><a href="#" className="hover:text-blue-600">Lyceum Placements</a></li>
                <li><a href="#" className="hover:text-blue-600">Lyceum Assessments</a></li>
                <li><a href="#" className="hover:text-blue-600">Lyceum Collection</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Legal Statements</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-blue-600">Privacy Policy / Cookie Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Linking Policy / Disclosure</a></li>
              </ul>
            </div>
          </div>

          {/* Main School Location & Hotlines */}
          <div>
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">Main School Location</h4>
              <div className="text-sm text-gray-600">
                <p className="font-medium">Lyceum International School</p>
                <p>No. 3/1, Raymond Road,</p>
                <p>Nugegoda, 10250,</p>
                <p>Sri Lanka.</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Main School Hotlines</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><a href="tel:+94112822387" className="hover:text-blue-600">+94 11 282 2387</a></li>
                <li><a href="tel:+94112829744" className="hover:text-blue-600">+94 11 282 9744</a></li>
                <li><a href="tel:+94112829745" className="hover:text-blue-600">+94 11 282 9745</a></li>
              </ul>
            </div>
          </div>

          {/* Stay In Touch */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Stay In Touch</h4>
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-500 mb-4">
              This site is protected by Turnstile & the Cloudflare Privacy Policy and Terms of Service apply.
            </p>

            {/* Awards/Certifications */}
            <div className="flex space-x-3 mb-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-center">GOLD<br/>AWARD</span>
              </div>
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-center">GOLD<br/>AWARD</span>
              </div>
            </div>

            {/* Green Energy Badge */}
            <div className="text-right">
              <div className="inline-block bg-green-600 text-white px-3 py-2 rounded text-xs font-bold">
                WEBSITE<br/>POWERED BY<br/>100%<br/>RENEWABLE<br/>ENERGY
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <p>Copyright © 2025 Lyceum International School (Pvt) Ltd. All Rights Reserved.</p>
            <p className="flex items-center mt-2 sm:mt-0">
              Carefully Handcrafted With 
              <span className="mx-1 text-red-500">♥</span> 
              By Zuse Technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
