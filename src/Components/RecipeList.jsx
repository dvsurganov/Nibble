// src/Components/RecipeList.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MealService from '../services/mealService';

const RecipeList = () => {
    const { category } = useParams();
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                setLoading(true);
                const data = await MealService.getMealsByCategory(category);
                setMeals(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load recipes. Please try again later.');
                setLoading(false);
            }
        };

        fetchMeals();
    }, [category]);

    if (loading) return <div className="text-center py-8">Loading recipes...</div>;
    if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
    if (meals.length === 0) return <div className="text-center py-8">No recipes found for this category.</div>;

    return (
        <div className="container mx-auto px-4 py-8 pt-20">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">{category} Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {meals.map((meal) => (
                    <Link
                        to={`/recipe/${meal.idMeal}`}
                        key={meal.idMeal}
                        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-purple-800">{meal.strMeal}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RecipeList;