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

interface ManagementMember {
  name: string;
  designation: string;
}

interface ManagementData {
  title: string;
  members: ManagementMember[];
}

function page() {
  const [managementData, setManagementData] = useState<ManagementData | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/jsons/jkpwa-management.json");
        const data = await response.json();
        setManagementData(data);
      } catch (error) {
        console.error("Error fetching management data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-black hover:text-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-black mx-1"
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
                className="ml-1 text-sm font-medium text-black hover:text-blue-600 md:ml-2"
              >
                About
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-black mx-1"
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
                href="/about/management"
                className="ml-1 text-sm font-medium text-black hover:text-blue-600 md:ml-2"
              >
                Management
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-black mx-1"
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
              <span className="ml-1 text-sm font-medium text-black md:ml-2">
                JKPWA
              </span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        JKPWA Management
      </h1>

      {/* Table */}
      <div className="border-2 bg-secondary rounded-xl">
        <Table className="p-5">
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium">
                Name
              </TableHead>
              <TableHead className="p-4 font-medium">Designation</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {managementData?.members.map((member, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium bg-white break-words p-3">
                  {member.name}
                </TableCell>
                <TableCell className="font-medium bg-white break-words p-3">
                  {member.designation}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter> */}
        </Table>
      </div>
    </div>
  );
}

export default page;
