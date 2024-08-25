
import Image from 'next/image';
import {Meteors} from './meteors'
import { HeroHighlight } from './animated';


const Hero = () => {
    return (
<div className='relative min-h-screen w-full overflow-hidden'>
    <HeroHighlight>
        <h1>hi</h1>

    </HeroHighlight>
    
  
    <div className='h-2/3 lg:h-5/6 lg:flex lg:justify-center max-w-full absolute bottom-0 right-0 object-cover lg:left-0  mx-auto'>
        <Image
      src="/avater.png"
      alt="Description of the image"
      width={400}
      height={300}
    />



    </div>;

    <div className="hidden  absolute -bottom-1/4 w-big h-big right-0 left-0 mx-auto lg: bg-indigo-900 rounded-full -z-10">
    
    </div>
    
    <div className='lg:block'>

        <div className="hidden lg:flex flex-col items-start gap-1 absolute right-10 lg:right-5 top-1/2 transform -translate-y-1/2 bg-white p-6 h-fit w-11/12 lg:w-1/3 shadow-lg rounded-lg lg:rounded-xl">
                <h1 className="text-2xl font-bold mb-4 text-indigo-600">Hi, I'm Emma</h1>
                <p className="text-lg mb-4">I currently have a whole 6 months experience in tech, where I have taught myself how to code. I love it, but it's also absolutely terrifying. All part of the charm. I am actually working in psychology right now and I am currently blogging my journey, what I'm making, and how I am paving my own way into the tech world. Or well, trying to.</p>
                <a href="#contact" className="bg-indigo-600 px-3 py-1 rounded-full text-white font-semibold mb-2 text-xl">Hire Me</a>
                <a href="#blog" className="bg-indigo-600 px-3 py-1 rounded-full font-semibold text-white text-xl">Follow Along</a>
            </div>
            
            </div>
    
        </div>

    
    )
}

export default Hero 