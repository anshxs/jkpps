"use client";
import React from 'react';
import { Calendar } from 'lucide-react';
import ComingSoon from '@/components/ComingSoon';

export default function DatesheetsPage() {
  return (
    <ComingSoon
      title="Coming Soon"
      subtitle="Datesheets & Academic Calendar"
      description="We're working hard to bring you the most up-to-date exam schedules and academic calendar. Stay tuned for important dates and deadlines!"
      icon={Calendar}
    />
  );
}