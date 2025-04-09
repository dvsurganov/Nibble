// src/components/Navbar.jsx
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Info } from 'lucide-react';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo and Brand */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <div className="h-10 w-10 bg-purple-600 rounded-full flex items-center justify-center">
                                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
                                    <path d="M8 9h2v2H8zm6 0h2v2h-2zm-3 6.5c2.03 0 3.8-1.11 4.75-2.75l-1.5-1.25C13.5 12.79 12.5 13.5 11.5 13.5s-2-0.71-2.75-2L7.25 12.75C8.2 15.39 9.97 16.5 12 16.5z" fill="currentColor"/>
                                </svg>
                            </div>
                            <span className="ml-3 text-xl font-bold text-purple-800">Nibble Nook</span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#" className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>

                            {/* Recipes Dropdown */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                                    onClick={toggleDropdown}
                                >
                                    Recipes
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>

                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100">Vegan</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100">Vegetarian</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100">Gluten-Free</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100">Dairy-Free</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100">Quick Meals</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100">Desserts</a>
                                    </div>
                                )}
                            </div>

                            {/* AI Chef with tooltip */}
                            <div className="relative">
                                <button
                                    className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                                    onMouseEnter={() => setTooltipVisible(true)}
                                    onMouseLeave={() => setTooltipVisible(false)}
                                >
                                    AI Chef
                                    <Info className="ml-1 h-4 w-4 text-purple-400" />
                                </button>

                                {tooltipVisible && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 px-4 py-2 bg-purple-600 text-white text-xs rounded shadow-lg z-10">
                                        Use AI Chef to help you create recipes tailored just for you
                                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-purple-600"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sign Up / Login Buttons */}
                    <div className="flex items-center">
                        <button className="ml-4 px-4 py-2 text-sm font-medium text-purple-600 hover:text-purple-800">
                            Log In
                        </button>
                        <button className="ml-4 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;