"use client";

import React from "react";
import Image from "next/image";
import {
  Download,
  AlertTriangle,
  CreditCard,
  Calendar,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Page() {
  // Fee structure data based on the image provided
  const feeStructure = [
    {
      category: "Annual Charges (Per Annum)",
      class: "Nursery to 12th",
      amount: 5000,
      policeMartyrs: 0,
      policePersonnel: 2500,
      otherRanks: 4000,
      sposClass4: 2000,
      gosNgos: "No Concession",
      siblings: "No Concession",
    },
    {
      category: "Tuition Fee (Per Month)",
      class: "Nursery to UKG",
      amount: 1200,
      policeMartyrs: 0,
      policePersonnel: 600,
      otherRanks: 960,
      sposClass4: 480,
      gosNgos: 1200,
      siblings: 900,
    },
    {
      category: "Tuition Fee (Per Month)",
      class: "1st to 5th",
      amount: 1300,
      policeMartyrs: 0,
      policePersonnel: 650,
      otherRanks: 1040,
      sposClass4: 520,
      gosNgos: 1300,
      siblings: 975,
    },
    {
      category: "Tuition Fee (Per Month)",
      class: "6th to 8th",
      amount: 1400,
      policeMartyrs: 0,
      policePersonnel: 700,
      otherRanks: 1120,
      sposClass4: 560,
      gosNgos: 1400,
      siblings: 1050,
    },
    {
      category: "Tuition Fee (Per Month)",
      class: "9th to 12th",
      amount: 1600,
      policeMartyrs: 0,
      policePersonnel: 800,
      otherRanks: 1280,
      sposClass4: 640,
      gosNgos: 1600,
      siblings: 1200,
    },
  ];

  const handleDownloadPDF = () => {
    // This would typically generate or download a PDF
    // For now, we'll simulate the action
    alert("Fee Structure PDF download will be available soon!");
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <Image
          width={1200}
          height={400}
          src="/jsons/carousel/h1.jpg"
          alt="Fee Structure"
          className="w-full h-30 md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Fee Structure</h1>
            {/* <p className="text-lg md:text-xl">
              J&K Police Public School, Miran Sahib, Jammu
            </p> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Revised Fee Structure (Academic Session 2021-22)
          </h2>
          <p className="text-center text-gray-600 mb-8">
            In pursuance to the Fee Fixation and Regulation Committee Order No. 326-FFRC(FF) of 2021 dated 12.07.2021
          </p>
          
          <div className="overflow-x-auto rounded-2xl border border-black">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="font-bold text-center border">Category & Class</TableHead>
                  <TableHead className="font-bold text-center border">Fee/Charges (Rs.)</TableHead>
                  <TableHead className="font-bold text-center border">Police Martyrs<br/>(100%)</TableHead>
                  <TableHead className="font-bold text-center border">Police Personnel<br/>died in harness<br/>(50%)</TableHead>
                  <TableHead className="font-bold text-center border">Other Ranks<br/>(HC to Foll.) and<br/>Teaching/Non-Teaching<br/>Staff of School<br/>(20%)</TableHead>
                  <TableHead className="font-bold text-center border">SPOs/Class IV<br/>Employees of<br/>School<br/>(60%)</TableHead>
                  <TableHead className="font-bold text-center border">GOs/NGOs/<br/>Civilians<br/>(0%)</TableHead>
                  <TableHead className="font-bold text-center border">GOs/NGOs and Civilians,<br/>if 2nd or 3rd ward<br/>twins) ward(s) are<br/>sibling(s) of already<br/>enrolled student<br/>(In Tuition Fee only)<br/>(25%)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feeStructure.map((row, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <TableCell className="font-medium border">
                      <div>
                        <div className="font-semibold">{row.category}</div>
                        <div className="text-sm text-gray-600">{row.class}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center border font-semibold">{row.amount}</TableCell>
                    <TableCell className="text-center border">{row.policeMartyrs}</TableCell>
                    <TableCell className="text-center border">{row.policePersonnel}</TableCell>
                    <TableCell className="text-center border">{row.otherRanks}</TableCell>
                    <TableCell className="text-center border">{row.sposClass4}</TableCell>
                    <TableCell className="text-center border">{row.gosNgos}</TableCell>
                    <TableCell className="text-center border">{row.siblings}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        {/* Important Notice */}
        <div className="bg-red-100 border-l-4 border-red-500 p-6 mb-8 rounded-r-2xl">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-red-500 mt-1 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Important Notice - Deposition of School Fees
              </h3>
              <p className="text-red-700">
                The parents will deposit fee within a week of declaration of
                admission list of their children, failing which the name of the
                child will be struck off from the admission list.
              </p>
            </div>
          </div>
        </div>

        {/* Admission Guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-4xl border-blue-200 border-4">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Admission Policy
            </h3>
            <ul className="text-blue-700 space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                Children of serving police Personnel will, as a rule, not be
                refused admission
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                Other may be refused admission if section does not permit
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                Admission may be refused to Children suffering from Mental or
                incurable infectious diseases
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-4xl border-green-200 border-4">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Payment Benefits
            </h3>
            <ul className="text-green-700 space-y-2">
              <li className="flex items-start">
                <Calendar className="h-5 w-5 text-green-600 mt-1 mr-3" />
                Parents have the option to deposit fee for the whole academic
                year together in advance
              </li>
              <li className="flex items-start">
                <CreditCard className="h-5 w-5 text-green-600 mt-1 mr-3" />
                Annual payment provides convenience and peace of mind
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-green-600 mt-1 mr-3" />
                Detailed payment receipts provided for all transactions
              </li>
            </ul>
          </div>
        </div>

        {/* Fee Structure Table */}

        {/* Rules and Mode of Payment */}
        <div className="bg-secondary border-4 p-8 rounded-4xl mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Rules and Mode of Payment & School Fees
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Payment Rules
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  The Parents will pay the School fees only through the J&K Bank Miran Sahib Jammu
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  Fee is to be paid on Monthly basis
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  Details of the payment are to be filled by the Parents neatly
                  (without over writing) on all the three slips
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  Three copies: <em>Parents copy, School copy and Bank copy</em>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Additional Information
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mt-2 mr-3"></span>
                  In case, fee book is lost, duplicate fee book can be provided
                  from the school on payment of Rs. 50 only
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mt-2 mr-3"></span>
                  Annual charges are to be paid in the month of April every year
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mt-2 mr-3"></span>
                  Parents have the option to deposit fee for the whole academic
                  year together in advance, if they feel comfortable
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center">
          <div className="bg-blue-50 border-2 border-dashed border-gray-300 rounded-4xl p-8">
            <Download className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Download Fee Structure PDF
            </h3>
            <p className="text-gray-600 mb-6">
              Get a detailed PDF copy of the complete fee structure for your
              records
            </p>
            <Button
              onClick={handleDownloadPDF}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Fee Structure PDF
            </Button>
          </div>
        </div>

        {/* Contact Information */}
      </div>
    </>
  );
}

export default Page;
