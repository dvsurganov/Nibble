import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import {Link} from "react-router-dom";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="neumorphic-nav">
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/" className="flex items-center">
                        <div
                            className="h-12 w-12 bg-purple-700 rounded-full flex items-center justify-center mr-3 relative">

                            <div className="absolute left-2 top-2 h-5 w-5 bg-purple-400 rounded-full opacity-80"></div>
                            <div className="absolute right-2 top-3 h-6 w-6 bg-purple-500 rounded-full opacity-80"></div>
                            <div
                                className="absolute left-4 bottom-2 h-4 w-4 bg-purple-300 rounded-full opacity-80"></div>

                            <div className="relative flex">
                                <div className="w-1.5 h-7 bg-white rounded-sm mr-0.5"></div>
                                <div className="w-2 h-7 flex flex-col items-center">
                                    <div className="w-full h-3 bg-white rounded-t-sm"></div>
                                    <div className="w-1 h-4 bg-white rounded-b-sm"></div>
                                </div>
                            </div>
                        </div>
                        <span className="text-xl font-bold text-purple-900">Nibble Nook</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="block md:hidden lg:hidden xl:hidden 2xl:hidden  p-2"
                    onClick={toggleMobileMenu}
                >
                    {mobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>

                {/* Navigation Links - Desktop (Centered) */}
                <div className="hidden md:flex items-center space-x-8">
                    {/* Recipes Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            className="nav-links"
                            onClick={toggleDropdown}
                        >
                            Recipes
                            <ChevronDown className="ml-1 h-4 w-4"/>
                        </button>

                        {dropdownOpen && (
                            <div className="absolute left-0 mt-2 w-48 nav-dropdown">
                                <Link to="/recipes/Breakfast" className="dropdown-links">Breakfast</Link>
                                <Link to="/recipes/Lunch" className="dropdown-links">Lunch</Link>
                                <Link to="/recipes/Dinner" className="dropdown-links">Dinner</Link>
                                <Link to="/recipes/Dessert" className="dropdown-links">Desserts</Link>
                                <Link to="/recipes/Snack" className="dropdown-links">Snacks</Link>
                            </div>
                        )}
                    </div>

                    <button className="nav-links">
                        Calculator
                    </button>

                    {/* AI Chef with info span */}
                    <div className="relative">
                        <Link
                            to="/aichef"
                            className="nav-links"
                            onMouseEnter={() => setTooltipVisible(true)}
                            onMouseLeave={() => setTooltipVisible(false)}
                        >
                            AI Chef
                            <span
                                className="ml-1 h-5 w-5 inline-flex items-center justify-center rounded-full bg-purple-300 text-purple-800 text-xs font-bold">i</span>
                        </Link>

                        {tooltipVisible && (
                            <div
                                className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 px-4 py-2 bg-purple-700 text-white text-sm rounded shadow-lg z-10">
                                Use AI Chef to help you create recipes tailored just for you
                                <div
                                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-purple-700"></div>
                            </div>
                        )}
                    </div>


                    {/*Subscriptions*/}
                    <div className="relative">
                        <Link to="/subscriptions" className="nav-links">Subscriptions</Link>

                    </div>
                </div>

                {/* Auth Buttons - Desktop */}
                <div className="hidden md:flex items-center space-x-2">
                    <button className="nav-links">
                        Log In
                    </button>
                    <button
                        className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 font-medium shadow-md">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu - Full Width Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-50 p-4 shadow-md rounded-b-xl">
                        {/* Recipes */}
                        <div className="my-3" ref={dropdownRef}>
                            <button
                                className="nav-links w-full justify-center"
                                onClick={toggleDropdown}
                            >
                                Recipes
                                {dropdownOpen ? (
                                    <X className="ml-1 h-4 w-4"/> // X icon when open
                                ) : (
                                    <ChevronDown className="ml-1 h-4 w-4"/> // Down arrow when closed
                                )}
                            </button>

                            {dropdownOpen && (
                                <div className="mt-2 nav-dropdown">
                                    <a href="#" className="dropdown-links">Breakfast</a>
                                    <a href="#" className="dropdown-links">Lunch</a>
                                    <a href="#" className="dropdown-links">Dinner</a>
                                    <a href="#" className="dropdown-links">Desserts</a>
                                    <a href="#" className="dropdown-links">Snacks</a>
                                </div>
                            )}
                        </div>

                        {/* Calculator */}
                        <div className="my-3">
                            <button className="nav-links w-full justify-center">
                                Calculator
                            </button>
                        </div>

                        {/* AI Chef */}
                        <div className="my-3">
                            <button
                                className="nav-links w-full justify-center"
                                onClick={() => setTooltipVisible(!tooltipVisible)}
                            >
                                AI Chef
                            </button>

                            {tooltipVisible && (
                                <div className="mt-2 px-4 py-2 bg-purple-700 text-white text-sm rounded shadow-lg">
                                    Use AI Chef to help you create recipes tailored just for you
                                </div>
                            )}
                        </div>

                        {/* Auth Buttons */}
                        <div className="flex flex-col space-y-2 mt-4">
                            <button className="nav-links w-full justify-center">
                                Log In
                            </button>
                            <button
                                className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 font-medium shadow-md w-full">
                                Sign Up
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;