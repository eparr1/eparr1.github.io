"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/Components/UI/hookforOutsideClick";

export function BlogExpands() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-1/2 z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex text-[#131316] absolute top-2 right-2 lg:hidden items-center justify-center rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            {/*This Changes the expanded card */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className=" w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white  sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
            
            {/*This bit is when the card expands the text for that */}
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-[#131316] "
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-[#131316] text-left"
                    >
                      {active.description}
                    </motion.p>
                  </div>
{/*This changes the button when it expands*/}
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                  >
                   
                  </motion.a>
                </div>

                {/*This changes the text in the description when expanded */}
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="overflow-auto scroll-smooth text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 text-[#131316] [mask:linear-gradient(to_bottom,white,white,transparent)] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="lg:w-2/3 lg:h-52 mx-auto gap-4 ">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 text-[#131316]  hover:bg-neutral-800 flex flex-col md:flex-row justify-between items-center rounded-xl cursor-pointer"
          >

            {/*This changes the unopened part of the expandable cards*/}

            <div className="flex gap-4 flex-col p-4   md:flex-row  ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-bold text-neutral-200   text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-400 text-left "
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:text-white text-black mt-4 md:mt-0"
              onClick={() => setActive(card)}
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "1/09/24",
    title: "Front-end QR Code Challenge",
    src: "/QRcode.png",
    ctaText: "Read More",
    ctaLink: "/blog",
    content: () => {
      return (
        <p>
          So, this is my first challenge using front-end mentor and I used Tailwind CSS again. The main aim was to recreate the QR code image with the one provided and I have to say actually 
          setting up both the Tailwind CSS and uploading it onto my GitHub was actually frustrating at times. It&apos;s amazing how quickly you forget the simple set-up instructions for a new project.
          I don&apos;t know if this was just me but for some reason my Tailwind CSS was not computing with Git, as I set up and linked my project to GitHub first. It didn&apos;t like that. 
          I ended up starting again, linking my Tailwind CSS first before connecting to GitHub and it did work. But still so annoying!!
          Don&apos;t get me started on merging existing changes because there seemed to be some unsolved change stuck in the Git universe. I did work it out though ... eventually.
          Just learning to take my time with it. But overall really glad I did this  challenge, which taught me a lot about setting up GitHub and setting up a project on 
          Visual Studio Code.
        </p>
      );
    },
  },
  {
    description: "20/08/24",
    title: "How I started the portfolio website",
    src: "/gradphoto.jpg",
    ctaText: "Read more",
    ctaLink: "/blog",
    content: () => {
      return (
        <p>
          Love doing and making this project 
        </p>
      );
    },
  },
];


