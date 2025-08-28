"use client";
import React from 'react';
import Link from 'next/link';
import { Clock, Bell, ArrowLeft, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ComingSoonProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  backUrl?: string;
  backText?: string;
}

export default function ComingSoon({
  title,
  subtitle,
  description,
  icon: Icon,
  backUrl = "/",
  backText = "Back to Home"
}: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 p-6">
      {/* Main Icon */}
      <div className="relative">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
          <Icon className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute top-0 right-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
          <Clock className="w-3 h-3 text-white" />
        </div>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground">
          {subtitle}
        </p>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Action Button */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild variant="outline">
          <Link href={backUrl}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            {backText}
          </Link>
        </Button>
        <Button disabled className="opacity-50 cursor-not-allowed">
          <Bell className="w-4 h-4 mr-2" />
          Notify Me When Ready
        </Button>
      </div>

      {/* Footer Message */}
      <div className="text-center space-y-2">
        <div className="animate-pulse">
          <div className="w-2 h-2 bg-primary rounded-full inline-block mx-1"></div>
          <div className="w-2 h-2 bg-primary rounded-full inline-block mx-1 animation-delay-200"></div>
          <div className="w-2 h-2 bg-primary rounded-full inline-block mx-1 animation-delay-400"></div>
        </div>
        <p className="text-sm text-muted-foreground">
          Check back soon for updates!
        </p>
      </div>
    </div>
  );
}
