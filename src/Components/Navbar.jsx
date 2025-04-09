import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

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
        <nav className="bg-purple-100 shadow-md py-4">
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="h-12 w-12 bg-purple-700 rounded-full flex items-center justify-center mr-3 relative">
                        {/* Main bubbles for logo */}
                        <div className="absolute left-2 top-2 h-5 w-5 bg-purple-400 rounded-full opacity-80"></div>
                        <div className="absolute right-2 top-3 h-6 w-6 bg-purple-500 rounded-full opacity-80"></div>
                        <div className="absolute left-4 bottom-2 h-4 w-4 bg-purple-300 rounded-full opacity-80"></div>

                        {/* Utensils */}
                        <div className="relative flex">
                            {/* Fork */}
                            <div className="w-1.5 h-7 bg-white rounded-sm mr-0.5"></div>

                            {/* Knife */}
                            <div className="w-2 h-7 flex flex-col items-center">
                                <div className="w-full h-3 bg-white rounded-t-sm"></div>
                                <div className="w-1 h-4 bg-white rounded-b-sm"></div>
                            </div>
                        </div>
                    </div>
                    <span className="text-xl font-bold text-purple-900">Nibble Nook</span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {/* Recipes Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            className="text-purple-800 hover:text-purple-900 font-medium flex items-center"
                            onClick={toggleDropdown}
                        >
                            Recipes
                            <ChevronDown className="ml-1 h-4 w-4" />
                        </button>

                        {dropdownOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                <a href="#" className="block px-4 py-2 text-sm text-purple-700 hover:bg-purple-100">Breakfast</a>
                                <a href="#" className="block px-4 py-2 text-sm text-purple-700 hover:bg-purple-100">Lunch</a>
                                <a href="#" className="block px-4 py-2 text-sm text-purple-700 hover:bg-purple-100">Dinner</a>
                                <a href="#" className="block px-4 py-2 text-sm text-purple-700 hover:bg-purple-100">Desserts</a>
                                <a href="#" className="block px-4 py-2 text-sm text-purple-700 hover:bg-purple-100">Snacks</a>
                                <a href="#" className="block px-4 py-2 text-sm text-purple-700 hover:bg-purple-100">Vegan</a>
                                <a href="#" className="block px-4 py-2 text-sm text-purple-700 hover:bg-purple-100">Vegetarian</a>
                                <a href="#" className="block px-4 py-2 text-sm text-purple-700 hover:bg-purple-100">Keto</a>
                            </div>
                        )}
                    </div>

                    {/* AI Chef with info span */}
                    <div className="relative">
                        <button
                            className="text-purple-800 hover:text-purple-900 font-medium flex items-center"
                            onMouseEnter={() => setTooltipVisible(true)}
                            onMouseLeave={() => setTooltipVisible(false)}
                        >
                            AI Chef
                            <span className="ml-1 h-5 w-5 inline-flex items-center justify-center rounded-full bg-purple-300 text-purple-800 text-xs font-bold">i</span>
                        </button>

                        {tooltipVisible && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 px-4 py-2 bg-purple-700 text-white text-sm rounded shadow-lg z-10">
                                Use AI Chef to help you create recipes tailored just for you
                                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-purple-700"></div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center space-x-4">
                    <button className="text-purple-700 hover:text-purple-900 font-medium">
                        Log In
                    </button>
                    <button className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 font-medium shadow-md">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;