'use client'
import { ExpandableCardDemo } from "./UI/expandableCard";


export default function BlogPage() {
  return (
    <div className=" bg-black">
        <div className=""> 
          <h1 className="text-4xl">
          <span className="text-indigo-600 font-semibold flex justify-center ">The Blog</span></h1>
          <p className="text-lg mt-6 text-white flex justify-center">
          Taking you through my coding journey from start to finish!
        </p>
      </div>
      <div>
        <ExpandableCardDemo />
      </div>
      
    

        
    </div>
      
    
  );
}
