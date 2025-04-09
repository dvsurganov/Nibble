// src/pages/HomePage.jsx
import React from 'react';
import Navbar from './Navbar.jsx';
import Banner from './Banner.jsx';
import Carousel from './Carousel.jsx';
import Footer from './Footer.jsx';

const Homepage = () => {
    // Diet categories data for first carousel
    const dietCategories = [
        { id: 1, title: 'Vegan', image: '/api/placeholder/150/150' },
        { id: 2, title: 'Vegetarian', image: '/api/placeholder/150/150' },
        { id: 3, title: 'Keto', image: '/api/placeholder/150/150' },
        { id: 4, title: 'Gluten-Free', image: '/api/placeholder/150/150' },
        { id: 5, title: 'Dairy-Free', image: '/api/placeholder/150/150' },
        { id: 6, title: 'Low-Carb', image: '/api/placeholder/150/150' },
        { id: 7, title: 'Paleo', image: '/api/placeholder/150/150' },
        { id: 8, title: 'High-Protein', image: '/api/placeholder/150/150' }
    ];

    // Meal type categories data for second carousel
    const mealCategories = [
        { id: 1, title: 'Breakfast', image: '/api/placeholder/150/150' },
        { id: 2, title: 'Lunch', image: '/api/placeholder/150/150' },
        { id: 3, title: 'Dinner', image: '/api/placeholder/150/150' },
        { id: 4, title: 'Desserts', image: '/api/placeholder/150/150' },
        { id: 5, title: 'Snacks', image: '/api/placeholder/150/150' },
        { id: 6, title: 'Appetizers', image: '/api/placeholder/150/150' },
        { id: 7, title: 'Soups', image: '/api/placeholder/150/150' },
        { id: 8, title: 'Salads', image: '/api/placeholder/150/150' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar Component */}
            {/*<Navbar />*/}

            {/* Banner Component */}
            <Banner />

            {/* Carousel Components */}
            <div className="py-4 bg-white">
                {/* Diet Categories Carousel */}
                <Carousel title="Browse by Diet" items={dietCategories} />

                {/* Meal Type Categories Carousel */}
                <Carousel title="Browse by Meal Type" items={mealCategories} />
            </div>

            {/* Footer Component */}
            <Footer />
        </div>
    );
};

export default Homepage;