// src/pages/HomePage.jsx
import { Search, Clock, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const Homepage = () => {
    const categories = [
        { id: 1, name: 'Breakfast', image: '/api/placeholder/150/150' },
        { id: 2, name: 'Lunch', image: '/api/placeholder/150/150' },
        { id: 3, name: 'Dinner', image: '/api/placeholder/150/150' },
        { id: 4, name: 'Desserts', image: '/api/placeholder/150/150' },
        { id: 5, name: 'Vegan', image: '/api/placeholder/150/150' },
        { id: 6, name: 'Quick Meals', image: '/api/placeholder/150/150' },
    ];

    const featuredRecipes = [
        {
            id: 1,
            title: 'Purple Berry Smoothie Bowl',
            image: '/api/placeholder/300/200',
            time: 15,
            difficulty: 'Easy',
            dietaryRestrictions: ['Vegan', 'Gluten-Free']
        },
        {
            id: 2,
            title: 'Lavender Lemon Pancakes',
            image: '/api/placeholder/300/200',
            time: 25,
            difficulty: 'Medium',
            dietaryRestrictions: ['Vegetarian']
        },
        {
            id: 3,
            title: 'Blueberry Chia Pudding',
            image: '/api/placeholder/300/200',
            time: 10,
            difficulty: 'Easy',
            dietaryRestrictions: ['Vegan', 'Gluten-Free']
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="text-4xl font-bold mb-4">Discover Delicious Recipes for Every Diet</h1>
                            <p className="text-lg mb-8 text-purple-100">
                                Find the perfect recipe based on ingredients you have, dietary restrictions,
                                and time available to cook.
                            </p>

                            {/* Search Box */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for recipes..."
                                    className="w-full py-3 px-4 pl-12 bg-white rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
                                />
                                <Search className="absolute left-4 top-3.5 text-purple-400" size={20} />
                                <button className="absolute right-2 top-2 bg-purple-600 text-white px-4 py-1 rounded-lg hover:bg-purple-700">
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Logo/Image */}
                        <div className="flex justify-center">
                            <div className="relative h-64 w-64">
                                {/* Bubble Logo - Inspired by Concept 6 */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative h-56 w-56">
                                        {/* Main Bubbles */}
                                        <div className="absolute left-4 top-4 h-24 w-24 bg-purple-300 rounded-full opacity-80"></div>
                                        <div className="absolute right-4 top-8 h-32 w-32 bg-purple-400 rounded-full opacity-80"></div>
                                        <div className="absolute left-12 bottom-4 h-16 w-16 bg-purple-200 rounded-full opacity-80"></div>

                                        {/* Small Decorative Bubbles */}
                                        <div className="absolute left-0 top-0 h-6 w-6 bg-white rounded-full opacity-60"></div>
                                        <div className="absolute right-2 bottom-2 h-4 w-4 bg-white rounded-full opacity-60"></div>

                                        {/* Utensils */}
                                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex">
                                            {/* Fork */}
                                            <div className="w-6 h-32 bg-white rounded-md mr-3 transform -rotate-6"></div>

                                            {/* Knife */}
                                            <div className="w-8 h-32 flex flex-col items-center">
                                                <div className="w-full h-16 bg-white rounded-t-md"></div>
                                                <div className="w-3 h-16 bg-white rounded-b-md"></div>
                                            </div>
                                        </div>

                                        {/* Face elements */}
                                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <div className="flex">
                                                <div className="w-4 h-4 bg-purple-700 rounded-full mr-8"></div>
                                                <div className="w-4 h-4 bg-purple-700 rounded-full"></div>
                                            </div>
                                            <div className="w-12 h-3 mt-6 ml-3 border-b-2 border-white"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Browse by Category */}
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">Browse by Category</h2>
                        <a href="#" className="text-purple-600 flex items-center hover:text-purple-800">
                            View All <ChevronRight size={16} className="ml-1" />
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((category) => (
                            <a
                                key={category.id}
                                href="#"
                                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >
                                <img src={category.image} alt={category.name} className="w-full h-32 object-cover" />
                                <div className="p-4 text-center">
                                    <h3 className="font-medium text-gray-800">{category.name}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Recipes */}
            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">Featured Recipes</h2>
                        <a href="#" className="text-purple-600 flex items-center hover:text-purple-800">
                            View All <ChevronRight size={16} className="ml-1" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredRecipes.map((recipe) => (
                            <div
                                key={recipe.id}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="relative">
                                    <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-24"></div>
                                    <div className="absolute bottom-3 left-3 flex items-center text-white">
                                        <Clock size={16} className="mr-1" />
                                        <span className="text-sm">{recipe.time} mins</span>
                                    </div>
                                    <div className="absolute bottom-3 right-3 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">
                                        {recipe.difficulty}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-lg mb-2 text-gray-800">{recipe.title}</h3>
                                    <div className="flex flex-wrap gap-1">
                                        {recipe.dietaryRestrictions.map((diet, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-0.5 bg-purple-100 text-purple-800 text-xs rounded-full"
                                            >
                        {diet}
                      </span>
                                        ))}
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="flex -space-x-2">
                                            <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                                            <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                                            <div className="h-6 w-6 rounded-full bg-gray-400"></div>
                                        </div>
                                        <button className="text-purple-600 font-medium hover:text-purple-800">
                                            View Recipe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* AI Chef Section */}
            <div className="py-12 bg-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <h2 className="text-3xl font-bold text-white mb-4">Meet Your AI Chef</h2>
                                <p className="text-purple-100 mb-6">
                                    Let our AI create personalized recipes based on your preferences,
                                    dietary restrictions, and available ingredients.
                                </p>
                                <button className="bg-white text-purple-600 py-3 px-6 rounded-lg font-medium hover:bg-purple-50 w-fit">
                                    Try AI Chef Now
                                </button>
                            </div>
                            <div className="hidden md:flex items-center justify-center p-8">
                                <div className="bg-white/20 p-8 rounded-full">
                                    <div className="bg-white/30 p-6 rounded-full">
                                        <div className="bg-white h-32 w-32 rounded-full flex items-center justify-center">
                                            <svg className="h-20 w-20 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white pt-12 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Nibble Nook</h3>
                            <p className="text-gray-400 text-sm">
                                Your personalized recipe platform for delicious meals tailored to your preferences.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Explore</h3>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-purple-300">Recipes</a></li>
                                <li><a href="#" className="hover:text-purple-300">Categories</a></li>
                                <li><a href="#" className="hover:text-purple-300">Popular</a></li>
                                <li><a href="#" className="hover:text-purple-300">AI Chef</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-purple-300">About Us</a></li>
                                <li><a href="#" className="hover:text-purple-300">Contact</a></li>
                                <li><a href="#" className="hover:text-purple-300">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-purple-300">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-purple-300">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-purple-300">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 Nibble Nook. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-purple-300">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-purple-300">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-purple-300">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Homepage;