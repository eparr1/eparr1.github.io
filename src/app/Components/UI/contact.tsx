'use client'
import React from "react";
import Image from "next/image";

const Contact = () => {
    // Function to handle opening mailto link in a new tab
    const openEmailClient = () => {
        window.open('mailto:emmaparr12345@gmail.com', '_blank');
    };

    // Function to handle opening phone dialer
    const openPhoneDialer = () => {
        window.open('tel:07463268450', '_blank');
    };

    // Function to handle opening Google Maps
    const openGoogleMaps = () => {
        window.open('https://www.google.com/maps?q=Edinburgh,+Scotland', '_blank');
    };

    return (
        <div className="flex flex-col items-center justify-center gap-[50px] m-auto text-white">
            <div className="relative text-4xl font-semibold">
                <h1>Get in Touch</h1>
            </div>

            {/* Content and Contact Form Sections Side by Side */}
            <div className="flex flex-row items-start gap-[50px]">
                {/* Content Section */}
                <div className="flex flex-col items-start gap-[30px]">
                    {/* Text Section */}
                    <div className="flex flex-col gap-[30px]">
                        <h1 className="text-4xl font-semibold bg-gradient-to-l from-[#DF8908] via-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">Let's Talk</h1>
                        <p className="text-[#D8D8D8] w-[500px] text-base leading-5">
                            Please feel free to send me a message about anything you would possibly like to work on. You can contact me at any time on:
                        </p>
                    </div>

                    {/* Icons Section */}
                    <div className="flex flex-col gap-[20px]">
                        {/* Email Link */}
                        <div className="flex items-center gap-5">
                            <a onClick={openEmailClient} className="flex items-center gap-5 cursor-pointer">
                                <Image
                                    src='/mail.svg'
                                    alt='email address'
                                    width={50}
                                    height={50}
                                    className="bg-gradient-to-b from-purple-400 to-pink-700 p-3 rounded-xl"
                                />
                                <p>emmaparr12345@gmail.com</p>
                            </a>
                        </div>

                        {/* Phone Link */}
                        <div className="flex items-center gap-5">
                            <a onClick={openPhoneDialer} className="flex items-center gap-5 cursor-pointer">
                                <Image
                                    src='/phoneIcon.svg'
                                    alt='phone number'
                                    width={50}
                                    height={50}
                                    className="bg-gradient-to-b from-purple-400 to-pink-700 p-3 rounded-xl"
                                />
                                <p>07463268450</p>
                            </a>
                        </div>

                        {/* Location Link to Google Maps */}
                        <div className="flex items-center gap-5">
                            <a onClick={openGoogleMaps} className="flex items-center gap-5 cursor-pointer">
                                <Image
                                    src='/locationIcon.svg'
                                    alt='location'
                                    width={50}
                                    height={50}
                                    className="bg-gradient-to-b from-purple-400 to-pink-700 p-3 rounded-xl"
                                />
                                <p>Edinburgh, Scotland</p>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="flex flex-col items-start gap-3 text-[#D8D8D8]">
                    <form className="flex flex-col gap-4">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type='text'
                            id='name'
                            placeholder="Enter your name"
                            name='name'
                            className="p-4 bg-[#32323c] rounded"
                        />
                        
                        <label htmlFor='email'>Your Email</label>
                        <input
                            type='email'
                            id='email'
                            placeholder="Enter your email"
                            name='email'
                            className="p-4 bg-[#32323c] rounded"
                        />
                        
                        <label htmlFor="message">Write your message here</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={8}
                            placeholder="Enter your message"
                            className="p-4 bg-[#32323c] text-[#A0A0A0] rounded w-[650px]"
                        />
                        
                        <button
                            type="submit"
                            className="text-white cursor-pointer rounded-lg transition duration-300 w-1/3 mt-4  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-4 py-2"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

