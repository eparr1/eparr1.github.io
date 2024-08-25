import Head from "next/head";
import Image from "next/image";
import { Header } from '@/app/Components/Header';
import Hero from "./Components/Hero";
import About from "./Components/about";

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
        <div className="min-h-screen bg-gradient-to-t from-indigo-200 relative overflow-hidden">
       {/*Nav Bar*/}
        <Header />

        {/*Hero Section*/}
          <Hero />

        
        {/*About me*/}
        <About />
        
        </div>
      </main>
    </>
  );
}