import { ExpandableCardDemo } from "./UI/hook";


export default function BlogPage() {
  return (
    <div className=" ">
        <div className=""> 
          <h1 className="text-4xl">
          <span className="text-indigo-600 font-semibold flex justify-center ">The Blog</span></h1>
          <p className="text-lg mt-6 text-white flex justify-center">
          Taking you through my coding journey from start to finish!
        </p>
      </div>
        
      <ExpandableCardDemo />
       
    

      <main className="max-w-6xl mx-auto mt-6 lg:mt-20 space-y-6 ">

        

        <article className="transition-colors duration-300 hover:bg-white border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
          <div className="py-6 px-5 lg:flex">
            <div className="flex-1 lg:mr-8">
              {/* Add image or content here if needed */}
            </div>

          
          </div>
        </article>
      </main>
    </div>
      
    
  );
}
