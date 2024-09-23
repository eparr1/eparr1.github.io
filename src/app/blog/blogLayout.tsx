'use client';

import { ReactNode } from "react";
import { Header } from "../Components/Header";
import { SparklesCore } from "../Components/UI/sparkles";

interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-black">
      {/* Header */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Sparkles Background */}
      <div className="absolute inset-0 -z-5">
        <SparklesCore
          id="sparkles-blog-section"
          background="transparent"
          minSize={0.2}
          maxSize={0.9}
          particleDensity={10}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Centered Content */}
      <div className="relative flex flex-col items-center text-center pt-5 h-full z-10">
        <h1 className="text-4xl">
          <span className=" bg-gradient-to-l from-[#DF8908] via-[#ee6afa] to-[#B415FF] bg-clip-text text-transparent font-semibold">The Blog</span>
        </h1>
        <p className="text-lg mt-6 pb-3 text-white">
          Taking you through my coding journey from start to finish!
        </p>

        {/* Blog Pages */}
        <main className="flex-grow container mx-auto w-2/3 h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="text-white py-4">
          <div className="container mx-auto text-center">
            &copy; 2024 My Blog. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default RootLayout;
