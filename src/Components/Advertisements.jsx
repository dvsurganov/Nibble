// src/Components/Banner.jsx
import React from 'react';
import advPic from "../assets/advPic.png";

const Advertisement = () => {
    return (
        <div className="relative bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-26">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left side - Just the slogan */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Subscribe today - <br className="hidden md:block" />
                            be healthy tomorrow!
                        </h1>
                    </div>

                    {/* Right side - Space for PNG image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        {/* Replace the src with your actual PNG image path */}
                        <img
                            src={advPic}
                            alt="Healthy food illustration"
                            className="max-w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Pulsating Arrow */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="animate-pulse">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white animate-bounce"
                    >
                        <path
                            d="M12 5V19M12 19L19 12M12 19L5 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;