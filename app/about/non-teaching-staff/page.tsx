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

interface NonTeachingStaffMember {
  name: string;
  designation: string;
  qualification?: string;
  dateOfAppointment?: string;
}

interface NonTeachingStaffData {
  title: string;
  members: NonTeachingStaffMember[];
}

function page() {
  const [staffData, setStaffData] = useState<NonTeachingStaffData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/jsons/non-teaching-staff.json");
        const data = await response.json();
        setStaffData(data);
      } catch (error) {
        console.error("Error fetching non-teaching staff data:", error);
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        </div>
      </div>
    );
  }

  // Group staff by categories
  const administrativeStaff = staffData?.members.filter(member => 
    member.designation.includes('I/C') || 
    member.designation.includes('Accountant') || 
    member.designation.includes('LDC') || 
    member.designation.includes('Clerk')
  ) || [];

  const supportStaff = staffData?.members.filter(member => 
    member.designation.includes('Counseller') || 
    member.designation.includes('Librarian') || 
    member.designation.includes('Nurse') || 
    member.designation.includes('Lab Asstt')
  ) || [];

  const maintenanceStaff = staffData?.members.filter(member => 
    member.designation.includes('Helper') || 
    member.designation.includes('Gardener') || 
    member.designation.includes('Safai') || 
    member.designation.includes('Washerman')
  ) || [];

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Breadcrumb */}
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
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
                className="ml-1 text-sm font-medium text-gray-700 hover:text-green-600 md:ml-2 transition-colors"
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
                Non-Teaching Staff
              </span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Non-Teaching Staff
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Meet our dedicated support staff who work behind the scenes to ensure smooth operations and a conducive learning environment for our students.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-secondary rounded-xl p-6 border">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 bg-opacity-20">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{staffData?.members.length || 0}</h3>
              <p className="text-gray-600">Total Staff</p>
            </div>
          </div>
        </div>

        <div className="bg-secondary rounded-xl p-6 border">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 bg-opacity-20">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{administrativeStaff.length}</h3>
              <p className="text-gray-600">Administrative</p>
            </div>
          </div>
        </div>

        <div className="bg-secondary rounded-xl p-6 border">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 bg-opacity-20">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{supportStaff.length}</h3>
              <p className="text-gray-600">Support Services</p>
            </div>
          </div>
        </div>
        
        <div className="bg-secondary rounded-xl p-6 border">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-orange-100 bg-opacity-20">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{maintenanceStaff.length}</h3>
              <p className="text-gray-600">Maintenance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Staff Table */}
      <div className="bg-white rounded-2xl border overflow-hidden">
        {/* <div className="px-6 py-4 bg-gradient-to-r from-green-600 to-green-700">
          <h2 className="text-xl font-semibold text-white">Non-Teaching Staff Members</h2>
        </div>
         */}
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
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-black font-semibold text-sm mr-3">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{member.name}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-4 px-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    member.designation.includes('I/C') || member.designation.includes('Accountant') || member.designation.includes('LDC') || member.designation.includes('Clerk')
                      ? 'bg-blue-100 text-blue-800'
                      : member.designation.includes('Counseller') || member.designation.includes('Librarian') || member.designation.includes('Nurse') || member.designation.includes('Lab Asstt')
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {member.designation}
                  </span>
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
