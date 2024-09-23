import React from "react";
import { Header } from "../Components/Header";
import RootLayout from "./blogLayout";
import { BlogExpands } from "./Components/blogExpandableCards";




const Home = () => {
    return (
      <RootLayout>
        <main>
         <div className="space-y-4 ">
            <BlogExpands />
           
            
            
        </div>
        </main>
        
      </RootLayout>
    );
  };

  export default Home