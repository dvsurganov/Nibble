// src/Components/RecipeDetail.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MealService from '../services/mealService';

const RecipeDetail = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [checkedIngredients, setCheckedIngredients] = useState({});

    useEffect(() => {
        const fetchMealDetails = async () => {
            try {
                setLoading(true);
                const data = await MealService.getMealById(id);
                setMeal(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load recipe details. Please try again later.');
                setLoading(false);
            }
        };

        fetchMealDetails();
    }, [id]);

    const toggleIngredient = (index) => {
        setCheckedIngredients(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    if (loading) return <div className="text-center py-8">Loading recipe details...</div>;
    if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
    if (!meal) return <div className="text-center py-8">Recipe not found.</div>;

    // Extract ingredients and measurements
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== '') {
            ingredients.push({ ingredient, measure });
        }
    }

    // Split instructions into paragraphs
    const instructionParagraphs = meal.strInstructions
        .split(/\r\n|\n|\r/)
        .filter(step => step.trim() !== '');

    return (
        <div className="container mx-auto px-4 py-8 pt-20">
            {/* Recipe Header */}
            <div className="neumorphic-card mb-8">
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="md:w-1/2 p-6">
                        <h1 className="text-3xl font-bold text-purple-900 mb-3">{meal.strMeal}</h1>
                        <div className="mb-3">
                            <span className="text-gray-700">Category: </span>
                            <span className="font-medium">{meal.strCategory}</span>
                        </div>
                        <div className="mb-3">
                            <span className="text-gray-700">Origin: </span>
                            <span className="font-medium">{meal.strArea}</span>
                        </div>

                        {meal.strTags && (
                            <div className="mb-4">
                                <div className="text-gray-700 mb-2">Tags:</div>
                                <div className="flex flex-wrap">
                                    {meal.strTags.split(',').map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full mr-2 mb-2"
                                        >
                                            {tag.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Placeholder for Nutrition Info */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <h3 className="text-xl font-bold text-purple-900 mb-4">Nutrition</h3>
                            <div className="grid grid-cols-2 gap-y-2">
                                <div className="flex items-center">
                                    <div className="h-3 w-3 bg-red-400 rounded-full mr-2"></div>
                                    <span>Calories</span>
                                </div>
                                <div className="text-right font-medium">Coming soon</div>

                                <div className="flex items-center">
                                    <div className="h-3 w-3 bg-yellow-400 rounded-full mr-2"></div>
                                    <span>Carbs</span>
                                </div>
                                <div className="text-right font-medium">Coming soon</div>

                                <div className="flex items-center">
                                    <div className="h-3 w-3 bg-green-400 rounded-full mr-2"></div>
                                    <span>Protein</span>
                                </div>
                                <div className="text-right font-medium">Coming soon</div>

                                <div className="flex items-center">
                                    <div className="h-3 w-3 bg-purple-400 rounded-full mr-2"></div>
                                    <span>Fat</span>
                                </div>
                                <div className="text-right font-medium">Coming soon</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:flex gap-8">
                {/* Left Column - Ingredients */}
                <div className="md:w-1/3 mb-8">
                    <div className="neumorphic-card-sm p-6">
                        <h2 className="text-2xl font-bold text-purple-900 mb-6">Ingredients</h2>
                        <div className="space-y-3">
                            {ingredients.map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="relative mr-3 mt-1 flex-shrink-0">
                                        <input
                                            type="checkbox"
                                            id={`ingredient-${index}`}
                                            checked={checkedIngredients[index] || false}
                                            onChange={() => toggleIngredient(index)}
                                            className="opacity-0 absolute h-5 w-5 cursor-pointer"
                                        />
                                        <div className={`border-2 rounded-md border-purple-400 w-5 h-5 flex flex-shrink-0 justify-center items-center
                            ${checkedIngredients[index] ? 'bg-purple-100' : 'bg-white'}
                            shadow-[2px_2px_3px_rgba(147,51,234,0.2),-2px_-2px_3px_rgba(255,255,255,0.7)]`}>
                                            {checkedIngredients[index] && (
                                                <svg
                                                    className="fill-current w-3 h-3 text-purple-600 pointer-events-none"
                                                    viewBox="0 0 20 20">
                                                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                    <label
                                        htmlFor={`ingredient-${index}`}
                                        className={`cursor-pointer flex-1 ${checkedIngredients[index] ? 'line-through text-gray-400' : ''}`}
                                    >
                                        <span className="font-medium">{item.ingredient}</span>
                                        <span className="ml-2 text-gray-600">- {item.measure}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Instructions */}
                <div className="md:w-2/3">
                    <div className="neumorphic-card-sm p-6">
                        <h2 className="text-2xl font-bold text-purple-900 mb-6">Instructions</h2>
                        <div className="space-y-4">
                            {instructionParagraphs.map((paragraph, index) => (
                                <p key={index} className="text-gray-700 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Video Tutorial */}
                        {meal.strYoutube && (
                            <div className="mt-8">
                                <h2 className="text-2xl font-bold text-purple-900 mb-4">Video Tutorial</h2>
                                <div className="aspect-w-16 aspect-h-9">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}`}
                                        title="Recipe Video"
                                        className="w-full h-96 rounded-lg"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;