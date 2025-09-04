"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight, Home } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
  },
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

const MobileNavItem: React.FC<{
  item: NavigationItem;
  level?: number;
  onNavigate?: () => void;
}> = ({ item, level = 0, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    if (onNavigate) onNavigate();
  };

  return (
    <div className={cn("w-full", level > 0 && "ml-2")}>
      {item.children ? (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-between min-h-[48px] p-4 font-medium text-left bg-secondary rounded-xl transition-all duration-200 touch-manipulation",
                level === 0 && "text-base",
                level > 0 && "text-sm pl-8"
              )}
            >
              <span className="text-slate-700">{item.title}</span>
              <ChevronRight
                className={cn(
                  "h-4 w-4 shrink-0 text-slate-500 transition-transform duration-300 ease-out",
                  isOpen && "rotate-90"
                )}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
            <div
              className={cn(
                "pb-2",
                level === 0 && "pl-3 border-l-2 border-slate-200 ml-4"
              )}
            >
              <div>
                {item.children.map((child, index) => (
                  <div className="mt-2">
                    <MobileNavItem
                      key={index}
                      item={child}
                      level={level + 1}
                      onNavigate={onNavigate}
                    />
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ) : (
        <Link href={item.href || "#"} onClick={handleLinkClick}>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start min-h-[48px] py-4 px-8 font-medium text-left bg-secondary rounded-xl transition-all duration-200 touch-manipulation",
              level === 0 && "text-base px-4",
              level > 0 && "text-sm px-3"
            )}
          >
            <span className="text-slate-700">{item.title}</span>
          </Button>
        </Link>
      )}
      {level === 0 && <Separator className="my-2 bg-transparent" />}
    </div>
  );
};

const DesktopNavItem: React.FC<{ item: NavigationItem }> = ({ item }) => {
  if (!item.children) {
    return (
      <NavigationMenuItem>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "hover:bg-slate-100 hover:text-blue-600"
          )}
          asChild
        >
          <Link href={item.href || "#"}>{item.title}</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-md hover:bg-slate-100 hover:text-blue-600 transition-colors duration-200">
        {item.title}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="rounded-lg bg-white shadow-lg border border-slate-200">
        <div className="grid w-[220px] gap-1 p-3">
          {item.children.map((child, index) => (
            <div key={index}>
              {child.children ? (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-between p-3 h-auto font-medium text-left hover:bg-slate-100 hover:text-blue-600 rounded-lg transition-all duration-200"
                    >
                      <span className="text-slate-700">{child.title}</span>
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    side="right"
                    className="w-56 bg-white border border-slate-200 rounded-lg"
                  >
                    <div className="p-2 space-y-1">
                      {child.children.map((grandchild, gIndex) => (
                        <Link
                          key={gIndex}
                          href={grandchild.href || "#"}
                          className="block p-2 hover:bg-slate-100 hover:text-blue-600 font-medium rounded-lg text-sm transition-all duration-200"
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
                  className="block p-3 hover:bg-slate-100 hover:text-blue-600 font-medium rounded-lg text-sm transition-all duration-200"
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

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className="sticky h-20 lg:h-30 top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm shadow-sm flex items-center justify-center"
      style={{ marginTop: "4px" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 p-0 rounded-full hover:bg-slate-100 transition-colors duration-200"
                >
                  <Menu className="h-5 w-5 text-slate-700" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-80 p-0 bg-white/98 backdrop-blur-sm border-r border-slate-200 shadow-xl"
              >
                <SheetHeader className="p-6 pb-4 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-slate-50">
                  <SheetTitle className="text-left">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-200">
                        <Image
                          src="/xlog.png"
                          alt="School Logo"
                          width={4000}
                          height={4000}
                          className="h-10 w-auto"
                        />
                      </div>
                      {/* <div>
                        <h2 className="text-lg font-semibold text-slate-800">Navigation</h2>
                        <p className="text-sm text-slate-500">Explore our school</p>
                      </div> */}
                    </div>
                  </SheetTitle>
                </SheetHeader>

                {/* Home Button */}
                <div className="px-2 bg-slate-50/50">
                  <Link href="/" onClick={closeMobileMenu}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start font-medium text-left hover:bg-blue-50 active:bg-blue-100 hover:text-blue-600 rounded-xl transition-all duration-200 touch-manipulation"
                    >
                      <div className="p-1.5 bg-blue-100 rounded-lg mr-3">
                        <Home className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-slate-700 font-semibold">Home</span>
                    </Button>
                  </Link>
                </div>

                <div className="flex-1 overflow-y-auto px-4">
                  {[...navigationData, ...rightNavigationData].map(
                    (item, index) => (
                      <MobileNavItem
                        key={index}
                        item={item}
                        onNavigate={closeMobileMenu}
                      />
                    )
                  )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50">
                  <div className="text-center space-y-2">
                    <p className="text-xs text-slate-600 font-medium">
                      Jammu Kashmir Police Public School
                    </p>
                    <p className="text-xs text-slate-500">
                      © 2024 All rights reserved
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile Logo (visible on mobile) */}
          <div className="lg:hidden flex-1 flex justify-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/xlog.png"
                alt="School Logo"
                width={12000}
                height={6000}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Logo (Center) and Navigation */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center">
            <div className="lg:flex bg-transparent">
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
                  width={12000}
                  height={6000}
                  className="h-auto w-auto min-h-20"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Right Side */}
            <div className="lg:flex">
              <NavigationMenu>
                <NavigationMenuList className="space-x-0">
                  {rightNavigationData.map((item, index) => (
                    <DesktopNavItem key={index} item={item} />
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Mobile Right Space (for visual balance) */}
          <div className="lg:hidden w-10 flex justify-end">
            {/* You can add additional mobile actions here like search, profile, etc. */}
          </div>
        </div>
      </div>
    </header>
  );
}
