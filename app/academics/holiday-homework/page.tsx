"use client"
import ComingSoon from '@/components/ComingSoon'
import { Calendar } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <ComingSoon
      title="Coming Soon"
      subtitle="Holiday Homework"
      description="We're working hard to bring you the most up-to-date holiday homework assignments and resources. Stay tuned for important updates!"
      icon={Calendar}
    />
  )
}

