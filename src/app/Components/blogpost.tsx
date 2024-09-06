'use client'
import { Header } from "./Header";
import { ExpandableCardDemo } from "./UI/expandableCard";
import { SparklesCore } from "./UI/sparkles";

export default function BlogPage() {
  return (
    <div className="relative bg-black h-screen">
  
      <div className="relative z-20">
        <Header />
      </div>

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
          <span className="text-indigo-600 font-semibold">
            The Blog
          </span>
        </h1>
        <p className="text-lg mt-6 text-white">
          Taking you through my coding journey from start to finish!
        </p>

      </div>
    </div>
  );
}
