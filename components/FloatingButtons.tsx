'use client';

import { Phone, CreditCard } from 'lucide-react';

export function FloatingButtons() {
  return (
    <div className="hidden md:block fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4">
        {/* Contact Number Button */}
        <a
          href="tel:+94112822387"
          className="group flex items-center bg-white shadow-lg rounded-full hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
        >
          {/* Always visible icon */}
          <div className="bg-blue-600 p-3 rounded-full">
            <Phone className="w-5 h-5 text-white" />
          </div>
          {/* Expandable text content */}
          <div className="max-w-0 group-hover:max-w-xs transition-all duration-300 overflow-hidden">
            <div className="pl-3 pr-4 py-1 whitespace-nowrap">
              <p className="text-xs text-gray-500 font-medium">Call Us</p>
              <p className="text-sm font-semibold text-gray-800">+94 11 282 2387</p>
            </div>
          </div>
        </a>

        {/* Pay Fees Button */}
        <a
          href="#pay-fees" // Replace with actual payment link
          className="group flex items-center bg-white shadow-lg rounded-full hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-green-50 overflow-hidden"
        >
          {/* Always visible icon */}
          <div className="bg-green-600 p-3 rounded-full">
            <CreditCard className="w-5 h-5 text-white" />
          </div>
          {/* Expandable text content */}
          <div className="max-w-0 group-hover:max-w-xs transition-all duration-300 overflow-hidden">
            <div className="pl-3 pr-4 py-1 whitespace-nowrap">
              <p className="text-xs text-gray-500 font-medium">Quick Payment</p>
              <p className="text-sm font-semibold text-gray-800">Pay Fees</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
