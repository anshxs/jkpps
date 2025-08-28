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
import { Users, GraduationCap, BookOpen } from "lucide-react";

interface EnrollmentClass {
  sNo: number;
  className: string;
  numberOfStudents: number;
  classTeacher: string;
}

interface EnrollmentData {
  title: string;
  classes: EnrollmentClass[];
}

function page() {
  const [enrollmentData, setEnrollmentData] = useState<EnrollmentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/jsons/enrollment-list.json");
        const data = await response.json();
        setEnrollmentData(data);
      } catch (error) {
        console.error("Error fetching enrollment data:", error);
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

  // Calculate total students
  const totalStudents = enrollmentData?.classes.reduce((sum, cls) => sum + cls.numberOfStudents, 0) || 0;
  const totalClasses = enrollmentData?.classes.length || 0;

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
                href="/academics"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 transition-colors"
              >
                Academics
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
                Enrollment
              </span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Student Enrollment
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Overview of our student enrollment across all classes with dedicated class teachers for comprehensive academic guidance.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-secondary rounded-xl p-6 border">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 bg-opacity-20">
              <Users color="#0800ff" size={32}/>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{totalStudents}</h3>
              <p className="text-gray-600">Total Students</p>
            </div>
          </div>
        </div>

        <div className="bg-secondary rounded-xl p-6 border">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 bg-opacity-20">
              <BookOpen color="#16a34a" size={32}/>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{totalClasses}</h3>
              <p className="text-gray-600">Total Classes</p>
            </div>
          </div>
        </div>
        
        <div className="bg-secondary rounded-xl p-6 border">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 bg-opacity-20">
              <GraduationCap color="#9333ea" size={32}/>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{Math.round(totalStudents / totalClasses)}</h3>
              <p className="text-gray-600">Avg. Class Size</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enrollment Table */}
      <div className="bg-white rounded-2xl border overflow-hidden">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold text-gray-900 py-4 px-6">
                S.No.
              </TableHead>
              <TableHead className="font-semibold text-gray-900 py-4 px-6">
                Class
              </TableHead>
              <TableHead className="font-semibold text-gray-900 py-4 px-6">
                No. of Students
              </TableHead>
              <TableHead className="font-semibold text-gray-900 py-4 px-6">
                Class Teacher
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {enrollmentData?.classes.map((classData, index) => (
              <TableRow 
                key={index} 
                className="hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                <TableCell className="py-4 px-6 text-gray-600">
                  {classData.sNo}
                </TableCell>
                <TableCell className="py-4 px-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600">
                    {classData.className}
                  </span>
                </TableCell>
                <TableCell className="py-4 px-6">
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-gray-900 mr-2">
                      {classData.numberOfStudents}
                    </span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </TableCell>
                <TableCell className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-secondary text-black rounded-full flex items-center justify-center font-semibold text-xs mr-3">
                      {classData.classTeacher.split(' ')[1]?.charAt(0) || classData.classTeacher.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{classData.classTeacher}</div>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className="bg-gray-50">
              <TableCell className="py-4 px-6 font-semibold text-gray-900">
                Total
              </TableCell>
              <TableCell className="py-4 px-6 font-semibold text-gray-900">
                {totalClasses} Classes
              </TableCell>
              <TableCell className="py-4 px-6 font-semibold text-gray-900">
                {totalStudents} Students
              </TableCell>
              <TableCell className="py-4 px-6"></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}

export default page;