"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PersonStanding } from "lucide-react";

interface TeachingStaffMember {
  name: string;
  designation: string;
  subject?: string;
  qualification?: string;
  dateOfAppointment?: string;
}

interface TeachingStaffData {
  title: string;
  members: TeachingStaffMember[];
}

function page() {
  const [staffData, setStaffData] = useState<TeachingStaffData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/jsons/teaching-staff.json");
        const data = await response.json();
        setStaffData(data);
      } catch (error) {
        console.error("Error fetching teaching staff data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center min-h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Breadcrumb */}
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                href="/about"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 transition-colors"
              >
                About
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-700 md:ml-2">
                Teaching Staff
              </span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Teaching Staff
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Meet our dedicated and qualified teaching professionals who are committed to providing excellent education and nurturing young minds.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-secondary rounded-xl p-6 border">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 bg-opacity-20">
              <PersonStanding color="#0800ff"/>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{staffData?.members.length || 0}</h3>
              <p className="text-gray-600">Total Faculty</p>
            </div>
          </div>
        </div>

        <div className="bg-secondary rounded-xl p-6 border">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 bg-opacity-20">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
        
        <div className="bg-secondary rounded-xl p-6 border">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 bg-opacity-20">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">12+</h3>
              <p className="text-gray-600">Subjects Covered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Staff Table */}
      <div className="bg-white rounded-2xl border overflow-hidden">
        {/* <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700">
          <h2 className="text-xl font-semibold text-white">Faculty Members</h2>
        </div> */}
        
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold text-gray-900 py-4 px-6">
                Name
              </TableHead>
              <TableHead className="font-semibold text-gray-900 py-4 px-6">
                Designation
              </TableHead>
              <TableHead className="font-semibold text-gray-900 py-4 px-6">
                Subject
              </TableHead>
              <TableHead className="font-semibold text-gray-900 py-4 px-6">
                Qualification
              </TableHead>
              <TableHead className="font-semibold text-gray-900 py-4 px-6">
                Date of Appointment
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staffData?.members.map((member, index) => (
              <TableRow 
                key={index} 
                className="hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                <TableCell className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-secondary text-black rounded-full flex items-center justify-center font-semibold text-sm mr-3">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{member.name}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-4 px-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600">
                    {member.designation}
                  </span>
                </TableCell>
                <TableCell className="py-4 px-6 text-gray-600">
                  {member.subject || "N/A"}
                </TableCell>
                <TableCell className="py-4 px-6 text-gray-600">
                  {member.qualification || "N/A"}
                </TableCell>
                <TableCell className="py-4 px-6 text-gray-600">
                  {member.dateOfAppointment || "N/A"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default page;
