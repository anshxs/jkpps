"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Download, 
  FileText, 
  Calendar, 
  HardDrive, 
  Users, 
  AlertTriangle,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdmissionForm {
  id: number;
  title: string;
  description: string;
  fileName: string;
  filePath: string;
  fileSize: string;
  category: string;
  lastUpdated: string;
  isRequired: boolean;
  applicableFor: string[];
}

interface Category {
  name: string;
  description: string;
  color: string;
  icon: string;
}

interface FormsData {
  admissionForms: AdmissionForm[];
  categories: Category[];
  instructions: string[];
}

function Page() {
  const [formsData, setFormsData] = useState<FormsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFormsData = async () => {
      try {
        const response = await fetch('/jsons/admission-forms.json');
        const data = await response.json();
        setFormsData(data);
      } catch (error) {
        console.error('Error fetching forms data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFormsData();
  }, []);

  const handleDownload = (form: AdmissionForm) => {
    // In a real implementation, this would trigger the actual download
    console.log(`Downloading: ${form.fileName}`);
    // For demo purposes, we'll show an alert
    alert(`Downloading ${form.title}\nFile: ${form.fileName}\nSize: ${form.fileSize}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admission forms...</p>
        </div>
      </div>
    );
  }

  if (!formsData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600">Error loading forms data</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <Image
          width={1200}
          height={400}
          src="/jsons/carousel/h3.jpg"
          alt="Download Admission Forms"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Download Admission Forms</h1>
            <p className="text-xl font-light">Get all required forms for school admission</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Forms Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Available Forms ({formsData.admissionForms.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {formsData.admissionForms.map((form) => (
              <div key={form.id} className="bg-white rounded-xl border overflow-hidden duration-300">
                <div className="bg-secondary p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">{form.title}</h3>
                        <p className="text-xs text-gray-600">{form.category}</p>
                      </div>
                    </div>
                    {form.isRequired && (
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                        Required
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {form.description}
                  </p>
                  
                  <div className="space-y-2 mb-4 text-xs text-gray-500">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <HardDrive className="h-3 w-3 mr-1" />
                        <span>{form.fileSize}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{form.lastUpdated}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      <span>For: {form.applicableFor.join(', ')}</span>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => handleDownload(form)}
                    className="w-full bg-black/50 text-white"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download {form.fileName}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download All Section */}
        

        {/* Important Instructions - Moved to Bottom */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl py-8 px-4">
          <div className="flex items-center mb-6">
            <Info className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-blue-900">Important Instructions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formsData.instructions.map((instruction, index) => (
              <div key={index} className="flex items-start bg-blue-100 p-2 rounded-lg border border-gray-100">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700">{instruction}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="bg-black text-white p-8 rounded-2xl text-center my-12">
          <h3 className="text-2xl font-bold mb-4">Download All Forms</h3>
          <p className="mb-6 text-green-100">
            Get all admission forms in a single ZIP file for your convenience.
          </p>
          <Button
            onClick={() => alert("Downloading all forms as ZIP file...")}
            className="bg-white text-green-900 hover:bg-gray-100 font-semibold px-8 py-3"
          >
            <Download className="h-5 w-5 mr-2" />
            Download All Forms (ZIP)
          </Button>
        </div> */}
      </div>
    </>
  );
}

export default Page;


  