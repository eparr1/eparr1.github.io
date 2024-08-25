
import Image from 'next/image';
import { WobbleCard } from "./wobble-card"
import { BlueWobbleCard } from "./blueWobbleCard"

const About = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center h-1/2 p-4 lg:p-8 gap-8">
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                <BlueWobbleCard>
                    <div className="p-4 flex justify-center items-center h-full">
                        <Image
                            src="/IMG_3766.PNG" // Replace with your photo path
                            alt="Your Name"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover"
                        />
                    </div>
                </BlueWobbleCard>
            </div>
            
            <div className="w-full lg:w-2/3">
                <WobbleCard>
                    <div className="p-6 space-y-4 text-white">
                        <h1 className="text-white font-bold text-3xl">ABOUT ME</h1>
                        <p className="text-xl text-white">
                            I am passionate about technology and psychology. Over the past 6 months, 
                            I've been diving deep into coding, teaching myself new skills and navigating 
                            the exciting yet challenging tech world.
                        </p>
                        
                        <div className="space-y-3 text-white">
                            <SkillBar skill="HTML/CSS" percentage={66} />
                            <SkillBar skill="Javascript" percentage={33} />
                            <SkillBar skill="Typescript" percentage={10} />
                            <SkillBar skill="Tailwind CSS" percentage={33} />
                            <SkillBar skill="React" percentage={5} />
                        </div>

                        <a href="#contact" className="bg-white px-6 py-2 rounded-full text-indigo-600 font-semibold text-xl mt-4 inline-block hover:bg-indigo-700 hover:text-white transition-colors">
                            Get in Touch
                        </a>
                    </div>
                </WobbleCard>
            </div>
        </div>
    )
}

// Helper component for skill bars
interface SkillBarProps {
    skill: string;
    percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => (
    <div>
        <h2 className="text-white font-medium">{skill}</h2>
        <div className="w-full bg-gray-400 h-1.5 rounded-md">
            <div 
                className="bg-blue-900 h-1.5 rounded-md" 
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    </div>
);

export default About