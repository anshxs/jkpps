"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Plus, ChevronDown, ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface NavigationItem {
  title: string;
  href?: string;
  children?: NavigationItem[];
}

const navigationData: NavigationItem[] = [
  {
    title: "About",
    children: [
      { title: "Overview", href: "/about/overview" },
      { title: "Salient Features", href: "/about/features" },
      { title: "Vision & Mission", href: "/about/vision-mission" },
      {
        title: "Messages",
        children: [
          { title: "Principal Message", href: "/about/messages/principal" },
        ],
      },
      {
        title: "Management",
        children: [
          { title: "JKPWWA Management", href: "/about/management/jkpwwa" },
          { title: "School Management", href: "/about/management/school" },
        ],
      },
      { title: "Teaching Staff", href: "/about/teaching-staff" },
      { title: "Non Teaching Staff", href: "/about/non-teaching-staff" },
      // { title: "Annual Report", href: "/about/annual-report" },
    ],
  },
  {
    title: "Campus",
    children: [
      { title: "School Labs", href: "/campus/labs" },
      { title: "Library", href: "/campus/library" },
      { title: "Infrastructure", href: "/campus/infrastructure" },
      { title: "Hostel", href: "/campus/hostel" },
      { title: "Security", href: "/campus/security" },
    ],
  },
  {
    title: "Academics",
    children: [
      { title: "Enrollment", href: "/academics/enrollment" },
      { title: "Datesheets", href: "/academics/datesheets" },
      { title: "Syllabus", href: "/academics/syllabus" },
      { title: "Holiday Homework", href: "/academics/holiday-homework" },
      { title: "Worksheets", href: "/academics/worksheets" },
      { title: "TC Details", href: "/academics/tc-details" },
    ],
  }
];

const rightNavigationData: NavigationItem[] = [
  {
    title: "Admissions",
    children: [
      { title: "Fee Structure", href: "/admissions/fee-structure" },
      { title: "Admission Procedure", href: "/admissions/procedure" },
      { title: "Download Form", href: "/admissions/download-form" },
    ],
  },
  {
    title: "Events",
    children: [
      { title: "Photo Gallery", href: "/events/photo-gallery" },
      { title: "Video Gallery", href: "/events/video-gallery" },
      { title: "News and Events", href: "/events/news" },
      { title: "Notifications", href: "/events/notifications" },
    ],
  },
  { title: "Awards", href: "/awards" },
//   { title: "Pay Fees", href: "/pay-fees" },
//   { title: "Contact Us", href: "/contact" },
];

const MobileNavItem: React.FC<{ item: NavigationItem; level?: number }> = ({
  item,
  level = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${level > 0 ? "ml-4" : ""}`}>
      <div className="flex items-center justify-between py-2">
        {item.href ? (
          <Link
            href={item.href}
            className="flex-1 text-left text-gray-700 hover:text-blue-600 transition-colors"
          >
            {item.title}
          </Link>
        ) : (
          <span className="flex-1 text-gray-700">{item.title}</span>
        )}
        {item.children && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="h-6 w-6 p-0"
          >
            <Plus
              className={`h-4 w-4 transition-transform ${
                isOpen ? "rotate-45" : ""
              }`}
            />
          </Button>
        )}
      </div>
      {item.children && isOpen && (
        <div className="pl-2 border-l border-gray-200">
          {item.children.map((child, index) => (
            <MobileNavItem key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
      {level === 0 && <Separator className="my-2" />}
    </div>
  );
};

const DesktopNavItem: React.FC<{ item: NavigationItem }> = ({ item }) => {
  if (!item.children) {
    return (
      <NavigationMenuItem>
        <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
          <Link href={item.href || "#"}>
            {item.title}
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-md hover:bg-transparent">{item.title}</NavigationMenuTrigger>
      <NavigationMenuContent className="rounded bg-white">
        <div className="grid w-[200px] gap-2 py-2">
          {item.children.map((child, index) => (
            <div key={index}>
              {child.children ? (
                <Popover>
                  <PopoverTrigger asChild>
                    <Link
                      href={child.href || "#"}
                      className="flex w-full justify-between hover:bg-secondary p-2 hover:text-blue-900 bg-transparent font-semibold text-sm rounded text-left"
                    >
                      <span>{child.title}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </PopoverTrigger>
                  <PopoverContent side="right" className="w-56 bg-secondary">
                    <div className="space-y-2">
                      {child.children.map((grandchild, gIndex) => (
                        <Link
                          key={gIndex}
                          href={grandchild.href || "#"}
                          className="block hover:bg-secondary hover:text-blue-900 font-semibold rounded text-sm"
                        >
                          {grandchild.title}
                        </Link>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              ) : (
                <Link
                  href={child.href || "#"}
                  className="block px-2 py-2 hover:bg-secondary hover:text-blue-900 font-semibold rounded text-sm"
                >
                  {child.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky h-30 top-0 z-50 w-full border-b bg-white flex items-center justify-center" style={{ marginTop: '4px' }}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <Image
                    src="/logo.svg"
                    alt="School Logo"
                    width={120}
                    height={48}
                    className="h-12 w-auto"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="h-9 w-9 p-0"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="space-y-2">
                  {[...navigationData, ...rightNavigationData].map(
                    (item, index) => (
                      <MobileNavItem key={index} item={item} />
                    )
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Logo (Center) and Mobile Logo (After menu button) */}

          {/* Desktop Navigation - Left Side */}
          <div className="hidden md:flex md:flex-1 md:justify-center md:items-center">
            <div className="md:flex bg-transparent">
              <NavigationMenu>
                <NavigationMenuList className="space-x-0">
                  {navigationData.map((item, index) => (
                    <DesktopNavItem key={index} item={item} />
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex">
              <Link href="/" className="flex items-center">
                <Image
                  src="/xlog.png"
                  alt="School Logo"
                  width={666}
                  height={375}
                  className="h-auto w-auto min-h-70"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Right Side */}
            <div className="md:flex">
              <NavigationMenu>
                <NavigationMenuList className="space-x-0">
                  {rightNavigationData.map((item, index) => (
                    <DesktopNavItem key={index} item={item} />
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Mobile Spacer */}
          <div className="md:hidden w-9"></div>
        </div>
      </div>
    </header>
  );
}
