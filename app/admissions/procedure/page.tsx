import React from "react";
import Image from "next/image";
import { 
  Shield, 
  FileText, 
  Camera, 
  CreditCard, 
  GraduationCap, 
  CheckCircle, 
  Users, 
  Award,
  BookOpen,
  Heart,
  Star,
  Check
} from "lucide-react";

function Page() {
  const documentRequirements = [
    {
      level: "Nursery to 8th Standard",
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      color: "blue",
      documents: [
        { name: "Two Photographs", icon: <Camera className="h-5 w-5" /> },
        { name: "Aadhar Card", icon: <CreditCard className="h-5 w-5" /> },
        { name: "Previous School Marklist", icon: <FileText className="h-5 w-5" /> }
      ]
    },
    {
      level: "9th & 10th Standard",
      icon: <GraduationCap className="h-8 w-8 text-green-500" />,
      color: "green",
      documents: [
        { name: "Two Photographs", icon: <Camera className="h-5 w-5" /> },
        { name: "Aadhar Card", icon: <CreditCard className="h-5 w-5" /> },
        { name: "TC (Transfer Certificate) from Previous school", icon: <FileText className="h-5 w-5" /> },
        { name: "Previous School Marklist", icon: <FileText className="h-5 w-5" /> }
      ]
    },
    {
      level: "11th & 12th Standard",
      icon: <Award className="h-8 w-8 text-purple-500" />,
      color: "purple",
      documents: [
        { name: "Two Photographs", icon: <Camera className="h-5 w-5" /> },
        { name: "Aadhar Card", icon: <CreditCard className="h-5 w-5" /> },
        { name: "TC (Transfer Certificate) from Previous school", icon: <FileText className="h-5 w-5" /> },
        { name: "Previous School Marklist", icon: <FileText className="h-5 w-5" /> }
      ]
    }
  ];

  const freeshipBenefits = [
    {
      title: "Free Tuition",
      description: "Complete waiver of tuition fees",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Free Uniform",
      description: "School uniform provided at no cost",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Free Books & Stationery",
      description: "All required books and stationery items",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "Educational Support",
      description: "Additional academic assistance when needed",
      icon: <Star className="h-6 w-6" />
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-50",
          border: "border-blue-200",
          text: "text-blue-800",
          accent: "bg-blue-500"
        };
      case "green":
        return {
          bg: "bg-green-50",
          border: "border-green-200",
          text: "text-green-800",
          accent: "bg-green-500"
        };
      case "purple":
        return {
          bg: "bg-purple-50",
          border: "border-purple-200",
          text: "text-purple-800",
          accent: "bg-purple-500"
        };
      default:
        return {
          bg: "bg-gray-50",
          border: "border-gray-200",
          text: "text-gray-800",
          accent: "bg-gray-500"
        };
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <Image
          width={1200}
          height={400}
          src="/jsons/carousel/h2.jpg"
          alt="Admission Procedure"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Admission Guidelines</h1>
            <p className="text-xl font-light">Your pathway to quality education at JKPPS</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Freeship Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
              <FileText className="h-8 w-8 text-black" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Document Requirements for Admission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Please ensure you have all the required documents ready before applying for admission
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {documentRequirements.map((requirement, index) => {
              const colors = getColorClasses(requirement.color);
              
              return (
                <div
                  key={index}
                  className={`bg-secondary border-2 rounded-2xl p-8 duration-300 transform`}
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-16 h-16 bg-${requirement.color}-100 rounded-full flex items-center justify-center`}>
                      {requirement.icon}
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-bold text-black text-center mb-6`}>
                    {requirement.level}
                  </h3>
                  
                  <div className="space-y-4">
                    {requirement.documents.map((doc, docIndex) => (
                      <div key={docIndex} className={`flex items-center bg-black/5 p-2 rounded-xl transition-shadow`}>
                        <div className={`w-10 h-10 ${colors.accent} rounded-lg flex items-center justify-center mr-4`}>
                          <div className="text-white">
                            {doc.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-800">{doc.name}</p>
                        </div>
                        <Check className="h-5 w-5 text-black" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <div className={`inline-flex items-center px-4 py-2 bg-black/10 text-black rounded-full text-sm font-medium`}>
                      {requirement.documents.length} Documents Required
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Freeship for Wards of Martyrs Police Personnel
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The freeship will be provided only to such wards of Police Personnel who have laid down 
              their lives while fighting militancy, provided he/she is not getting any scholarship from 
              Police Department/State Government.
            </p>
          </div>

          {/* Freeship Benefits */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-red-800">Benefits Included</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {freeshipBenefits.map((benefit, index) => (
                <div key={index} className="bg-red-100 rounded-lg p-6 transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                      {benefit.icon}
                    </div>
                    <h4 className="font-semibold text-gray-800">{benefit.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-red-100 rounded-lg border-l-4 border-red-500">
              <p className="text-sm text-gray-700">
                <strong>Funding Source:</strong> The expenditure on this account will be made from the 
                <span className="font-semibold text-red-700"> Central Police Education Fund</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-secondary border-2 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Important Notes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Document Verification</h4>
              </div>
              <p className="text-gray-600 text-sm">
                All documents must be original for verification. Photocopies will be retained by the school.
              </p>
            </div>
            
            <div className="bg-white/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Application Process</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Submit all documents along with the completed admission form at the school office.
              </p>
            </div>
            
            <div className="bg-white/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Age Criteria</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Students must meet the age criteria as per the education board guidelines for their respective classes.
              </p>
            </div>
            
            <div className="bg-white/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                  <Star className="h-5 w-5 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Merit-Based Selection</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Admission is subject to availability of seats and may be based on academic merit and interview.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-black text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Need Assistance?</h3>
          <p className="mb-6 text-gray-100">
            For any queries regarding the admission process, please visit our school office or contact us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/20 p-4 rounded-lg">
              <strong className="block text-gray-200">School Office</strong>
              J&K Police Public School<br/>
              Miran Sahib, Jammu
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <strong className="block text-gray-200">Office Hours</strong>
              Monday - Saturday<br/>
              9:00 AM - 4:00 PM
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <strong className="block text-gray-200">Academic Year</strong>
              Admissions open for<br/>
              2024-25 Session
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
