'use client'
import { SetStateAction, startTransition, useState } from "react";
import TabButton from "./UI/tabButton"

export const Skills = () => {
    interface TabData {
        title: string;
        id: string;
        content: JSX.Element;
      }
      
      const TAB_DATA: TabData[] = [
          { title: "Skills", id: "skills", content: (
              <ul className="list-disc pl-2 text-white text-xl selection:text-2xl ">
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>HTML & CSSL</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            ), },
          { title: "Education", id: "education", content: (
              <ul className="list-disc pl-2 text-white text-xl ">
                <li>Masters in Child Clinicl Psychology - Distinction </li>
                <li>Undergradaution (Hons) degree in Psychology - HIGH 2:1</li>
              </ul>
            ),},
          { title: "Certifications", id: "certifications", content: (
              <ul className="list-disc pl-2 text-white text-xl">
                <li>CodeCademy foundations in web development</li>
                <li>CodeCademy Responsive Design</li>
                <li>CodeCademy TypeScript Foundations</li>
                <li>CodeCademy Front-End Development</li>
                <li>Getting Python & apps at girlscode</li>
              </ul>
            ), },
      ];
    const [tab, setTab] = useState<string>("skills");

    const handleTabChange = (id: SetStateAction<string>) => {
        console.log(`Changing tab to: ${id}`); // Debugging statement
        startTransition(() => {
          setTab(id);
        });
      };

    return (
    <div className=" h-[300px]">
        <div className="flex text-2xl flex-row mt-3 text-white hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
                
            >
                Skills
            </TabButton>
            <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
            >
                Education
            </TabButton>
            <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
            >
                Certifications
            </TabButton>
        </div>
        
        <div className="mt-4">
                {TAB_DATA.find((t: { id: any} ) => t.id === tab)?.content}
        </div>

</div>
        
    )
}