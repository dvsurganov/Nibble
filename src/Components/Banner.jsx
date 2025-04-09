// src/Components/Banner.jsx
import React from 'react';

const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0 md:mr-8 max-w-2xl">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Cook Smarter with AI Chef</h1>
                        <p className="text-lg mb-6">
                            Let our AI create personalized recipes based on your dietary preferences,
                            ingredients you have on hand, and cooking time available. Save your favorites
                            to your account and build your own custom cookbook.
                        </p>
                        <div className="flex space-x-4">
                            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-50">
                                Try AI Chef Now
                            </button>
                            <button className="bg-purple-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-800 border border-purple-400">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3">
                        <div className="relative bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                            <div className="absolute -top-4 -right-4 bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-bold">
                                NEW
                            </div>

                            <div className="mb-4 flex items-center">
                                <div className="h-10 w-10 bg-purple-700 rounded-full flex items-center justify-center mr-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 3V4M12 20V21M21 12H20M4 12H3M18.364 5.636L17.657 6.343M6.343 17.657L5.636 18.364M18.364 18.364L17.657 17.657M6.343 6.343L5.636 5.636M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="text-xl font-bold">AI Recipe Creator</div>
                            </div>

                            <div className="p-4 bg-white/10 rounded-lg mb-4">
                                <div className="text-sm mb-2">I want to cook:</div>
                                <div className="bg-white/20 p-2 rounded-md text-sm mb-3">A quick dinner with chicken and vegetables</div>

                                <div className="text-sm mb-2">Dietary restrictions:</div>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span className="bg-purple-500 px-2 py-1 rounded-full text-xs">Gluten-free</span>
                                    <span className="bg-purple-500 px-2 py-1 rounded-full text-xs">Low-carb</span>
                                </div>

                                <div className="text-sm mb-2">Time available:</div>
                                <div className="bg-white/20 p-2 rounded-md text-sm">30 minutes</div>
                            </div>

                            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150">
                                Generate Recipe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;