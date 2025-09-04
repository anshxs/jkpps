"use client";

import { Phone, CreditCard } from "lucide-react";

export function FloatingButtons() {
  return (
    <>
      {/* Mobile Design - Bottom center, compact circular buttons */}
      {/* <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-3"> */}
        {/* Contact Number Button */}
        {/* <a
          href="tel:+94112822387"
          className="flex flex-col items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-red-600 hover:bg-red-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          <span className="text-xs font-medium text-white mt-0.5">Call</span>
        </a> */}

        {/* Pay Fees Button */}
        {/* <a
          href="https://anshsx.me"
          className="flex flex-col items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          <span className="text-xs font-medium text-white mt-0.5">Fee</span>
        </a> */}
      {/* </div> */}

      {/* Desktop Design - Right side, expandable buttons with elegant styling */}
      <div className="flex fixed left-1/2 bottom-4 transform -translate-x-1/2 z-50 gap-4">
        {/* Contact Number Button */}
        <div className="group">
          <a
            href="tel:+94112822387"
            className="flex items-center rounded-2xl border bg-white overflow-hidden transition-all duration-300 pr-4"
          >
            {/* Always visible icon */}
            {/* <div className="bg-red-600 hover:bg-red-700 p-4 rounded-full transition-colors duration-300"> */}
              <Phone className="w-5 h-5 ml-4 my-2 text-black" />
            {/* </div> */}
            {/* Expandable text content */}
            <div className="max-w-48 transition-all duration-300 ease-out overflow-hidden">
              <div className="pl-4 pr-2 py-1 whitespace-nowrap">
                <p className="text-sm font-semibold text-gray-800">Call Us</p>
                <p className="text-xs text-gray-500">+94 11 282 2387</p>
              </div>
            </div>
          </a>
        </div>

        {/* Pay Fees Button */}
        <div className="group">
          <a
            href="tel:+94112822387"
            className="flex items-center rounded-2xl border border-black/50 bg-black overflow-hidden transition-all duration-300 pr-4"
          >
            {/* Always visible icon */}
            {/* <div className="bg-red-600 hover:bg-red-700 p-4 rounded-full transition-colors duration-300"> */}
              <CreditCard className="w-5 h-5 ml-4 my-2 text-white" />
            {/* </div> */}
            {/* Expandable text content */}
            <div className="max-w-48 transition-all duration-300 ease-out overflow-hidden">
              <div className="pl-4 pr-2 py-1 whitespace-nowrap">
                <p className="text-sm font-semibold text-white">Pay Fees</p>
                <p className="text-xs text-white/50">Quick Payment</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}