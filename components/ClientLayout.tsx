"use client"

import { AppSidebar, SidebarLayout } from "@/components/AppSidebar"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

interface ClientLayoutProps {
  children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const [useSidebarLayout, setUseSidebarLayout] = useState(false)

  if (useSidebarLayout) {
    return (
      <SidebarLayout>
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Button 
              variant="outline" 
              onClick={() => setUseSidebarLayout(false)}
              size="sm"
            >
              Switch to Header Navigation
            </Button>
          </div>
          <div className="min-h-screen">
            {children}
          </div>
        </div>
      </SidebarLayout>
    )
  }

  return (
    <>
      <div className="flex items-center justify-center p-4 bg-gray-50 border-b">
        <Button 
          onClick={() => setUseSidebarLayout(true)}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Menu className="h-4 w-4" />
          Switch to Sidebar Navigation
        </Button>
      </div>
      <Header />
      <main>{children}</main>
    </>
  )
}
