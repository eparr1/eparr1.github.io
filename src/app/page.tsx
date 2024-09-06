import Head from "next/head";
import Image from "next/image";
import { Header } from '@/app/Components/Header';
import Hero from "./Components/Hero";
import About from "./Components/about";
import { Skills } from "./Components/Skills";
import { Container } from "postcss";
import { TracingBeam } from "./Components/UI/tracing-beam";
import Blog from "./blog/page";
import Contact from "./Components/UI/contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to the homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="font-nunito">
        <div className="min-h-screen bg-[#121212] relative  overflow-hidden">
          {/*Nav Bar*/}
          <TracingBeam className="w-full">  
              <Header/>

        
              

{/*Hero Section*/}
<div className=" "><Hero /></div>


  


{/*About me*/}
<About />


<Contact />

        </TracingBeam>
        </div>
       
      </main>
    </>
  );
}