// src/Components/Homepage.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MealService from '../services/mealService';
import Banner from "./Banner.jsx";
import Carousel from "./Carousel.jsx";
import Subscriptions from "./Subscriptions.jsx";

const Homepage = () => {
    // Your existing code for random meal
    const [randomMeal, setRandomMeal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchRandomMeal = async () => {
            try {
                const meal = await MealService.getRandomMeal();
                if (isMounted) {
                    setRandomMeal(meal);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching random meal:', error);
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchRandomMeal();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className="pt-20">
            <div className="container mx-auto px-4 py-8">
                <Banner />
                <Subscriptions />

                {loading ? (
                    <div className="text-center">Loading...</div>
                ) : randomMeal && (
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-purple-800 mb-4">Recipe of the Day</h2>
                        <div className="neumorphic-card">
                            <div className="md:flex">
                                <div className="md:w-1/2">
                                    <img
                                        src={randomMeal.strMealThumb}
                                        alt={randomMeal.strMeal}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                                <div className="md:w-1/2 p-6">
                                    <h3 className="text-xl font-bold text-purple-900 mb-2">{randomMeal.strMeal}</h3>
                                    <p className="text-gray-600 mb-2">Category: {randomMeal.strCategory}</p>
                                    <p className="text-gray-600 mb-4">Origin: {randomMeal.strArea}</p>
                                    <p className="text-gray-700 mb-4">
                                        {randomMeal.strInstructions.substring(0, 150)}...
                                    </p>
                                    <Link
                                        to={`/recipe/${randomMeal.idMeal}`}
                                        className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 inline-block font-medium"
                                    >
                                        View Recipe
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Just call the Carousel component without props */}
                <Carousel />
            </div>
        </div>
    );
};

export default Homepage;