import Head from "next/head";
import Image from "next/image";
import { Header } from '@/app/Components/Header';
import Hero from "./Components/Hero";
import About from "./Components/about";
import { Skills } from "./Components/Skills";
import { Container } from "postcss";
import { TracingBeam } from "./Components/UI/tracing-beam";
import Blog from "./blog/page";

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
              <Header/>

        <TracingBeam className="w-full">
              

{/*Hero Section*/}
<div className="py-4 mx-auto container"><Hero /></div>


  


{/*About me*/}
<About />

{/*Skills*/}

<Skills />


        </TracingBeam>
        </div>
       
      </main>
    </>
  );
}