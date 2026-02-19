import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "./query-provider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Suhani Pandey | Software Engineer & AI Enthusiast",
  description: "Portfolio showcasing software engineering projects, AI experiments, and creative work.",
  authors: [{ name: "Suhani Pandey" }],
  keywords: ["software engineer", "AI", "machine learning", "React", "TypeScript", "portfolio"],
  openGraph: {
    title: "Suhani Pandey | Portfolio",
    description: "Software Engineer & AI Enthusiast based in Copenhagen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <QueryProvider>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}