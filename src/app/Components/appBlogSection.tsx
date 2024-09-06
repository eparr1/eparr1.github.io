import { div } from "framer-motion/client"
import { ExpandableCardDemo } from "./UI/expandableCard"
import { Meteors } from "./UI/meteors"
import { SparklesCore } from "./UI/sparkles"


export const BlogSection = () => {
    return (
        <div className="relative w-full h-[500px] text-[#D8D8D8]">
            {/* Background Sparkles */}
            <div className="absolute inset-0 -z-5">
                <SparklesCore
                    id="sparkles-blog-section"
                    background="transparent"
                    minSize={0.2}
                    maxSize={0.9}
                    particleDensity={20}
                    className="h-full w-full"
                    particleColor="#FFFFFF"
                />
            </div>

            {/* Centered Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl font-bold text-white mb-4">The Blog</h1>
                <p className="text-base lg:text-lg pb-3 text-[#D8D8D8]">
                    Follow the journey from what projects I am doing and what I have learnt so far
                </p>

                <div className="mt-4">
                    <ExpandableCardDemo />
                </div>
            </div>
        </div>
    );
};

