"use client";
import React from 'react';
import { BookOpen } from 'lucide-react';
import ComingSoon from '@/components/ComingSoon';

export default function SyllabusPage() {
  return (
    <ComingSoon
      title="Coming Soon"
      subtitle="Syllabus & Curriculum"
      description="We're preparing comprehensive syllabi for all classes and subjects. Stay tuned for detailed curriculum information and learning objectives!"
      icon={BookOpen}
    />
  );
}
