import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "School Website",
  description: "Official school website with comprehensive information about academics, admissions, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Top colorful border */}
        <div 
          className="fixed top-0 left-0 right-0 z-[60] h-1"
          style={{
            backgroundImage: 'linear-gradient(to right, #0400ff 0%, #0400ff 12.5%, #ef4444 12.5%, #ef4444 25%, #0400ff 25%, #0400ff 37.5%, #ef4444 37.5%, #ef4444 50%, #0400ff 50%, #0400ff 62.5%, #ef4444 62.5%, #ef4444 75%, #0400ff 75%, #0400ff 87.5%, #ef4444 87.5%, #ef4444 100%)',
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
