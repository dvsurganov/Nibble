import React, { useState } from "react";

const AIChefPage = () => {
    // State for active tab
    const [activeTab, setActiveTab] = useState("prompt"); // "prompt" or "available"

    // Form states
    const [protein, setProtein] = useState("");
    const [calories, setCalories] = useState("");
    const [cookingTime, setCookingTime] = useState(30); // Default to 30 minutes
    const [availableIngredients, setAvailableIngredients] = useState("");
    const [promptText, setPromptText] = useState("");

    // Common allergies as checkboxes
    const [allergies, setAllergies] = useState({
        dairy: false,
        eggs: false,
        peanuts: false,
        treeNuts: false,
        fish: false,
        shellfish: false,
        soy: false,
        wheat: false,
        sesame: false
    });

    // Dietary restrictions checkboxes
    const [dietaryRestrictions, setDietaryRestrictions] = useState({
        glutenFree: false,
        dairyFree: false,
        vegan: false,
        vegetarian: false,
        keto: false,
        lowCarb: false,
        paleo: false,
    });

    // Toggle allergy
    const toggleAllergy = (allergy) => {
        setAllergies({
            ...allergies,
            [allergy]: !allergies[allergy]
        });
    };

    // Toggle dietary restriction
    const toggleRestriction = (restriction) => {
        setDietaryRestrictions({
            ...dietaryRestrictions,
            [restriction]: !dietaryRestrictions[restriction]
        });
    };

    // Handle cooking time change with 5-minute increments
    const handleTimeChange = (e) => {
        const value = parseInt(e.target.value, 10) || 0;
        setCookingTime(value);
    };

    // Increment/decrement time by 5 minutes
    const adjustTime = (amount) => {
        setCookingTime(prev => Math.max(5, prev + amount));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data here
        console.log({
            activeTab,
            protein,
            calories,
            cookingTime,
            allergies,
            dietaryRestrictions,
            availableIngredients,
            promptText
        });

        // Here you would typically call your API or service to generate the recipe
        alert("Recipe request submitted! Your AI chef is cooking up something delicious.");
    };

    return (
        <div className="min-h-screen bg-purple-50 py-48 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-purple-800 text-center mb-8">
                    Your Personal AI Chef
                </h1>

                {/* Tab Navigation */}
                <div className="flex mb-6 bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                        className={`flex-1 py-4 px-6 text-lg font-medium transition-colors ${
                            activeTab === "prompt"
                                ? "bg-purple-600 text-white"
                                : "bg-white text-purple-700 hover:bg-purple-100"
                        }`}
                        onClick={() => setActiveTab("prompt")}
                    >
                        Create Custom Recipe
                    </button>
                    <button
                        className={`flex-1 py-4 px-6 text-lg font-medium transition-colors ${
                            activeTab === "available"
                                ? "bg-purple-600 text-white"
                                : "bg-white text-purple-700 hover:bg-purple-100"
                        }`}
                        onClick={() => setActiveTab("available")}
                    >
                        Cook with Available Ingredients
                    </button>
                </div>

                {/* Chef Form */}
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                    {/* Conditional Fields for Tabs */}
                    {activeTab === "prompt" ? (
                        <div className="mb-6">
                            <label className="block text-purple-800 font-medium mb-2">
                                Describe what you'd like to cook:
                            </label>
                            <textarea
                                className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                rows="4"
                                placeholder="E.g., I want a spicy chicken dish that's quick to prepare and healthy"
                                value={promptText}
                                onChange={(e) => setPromptText(e.target.value)}
                            ></textarea>
                        </div>
                    ) : (
                        <div className="mb-6">
                            <label className="block text-purple-800 font-medium mb-2">
                                Ingredients you have available:
                            </label>
                            <textarea
                                className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                rows="4"
                                placeholder="E.g., chicken breast, bell peppers, onions, rice, olive oil, garlic"
                                value={availableIngredients}
                                onChange={(e) => setAvailableIngredients(e.target.value)}
                            ></textarea>
                        </div>
                    )}

                    {/* Common Fields for Both Tabs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-purple-800 font-medium mb-2">
                                Main Protein (Optional):
                            </label>
                            <input
                                type="text"
                                className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="E.g., chicken, beef, tofu"
                                value={protein}
                                onChange={(e) => setProtein(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-purple-800 font-medium mb-2">
                                Target Calories (Optional):
                            </label>
                            <input
                                type="text"
                                className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="E.g., 500 per serving"
                                value={calories}
                                onChange={(e) => setCalories(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-purple-800 font-medium mb-2">
                                Cooking Time (minutes):
                            </label>
                            <div className="flex items-center">
                                <button
                                    type="button"
                                    className="bg-purple-200 hover:bg-purple-300 text-purple-800 font-medium p-3 rounded-l-lg"
                                    onClick={() => adjustTime(-5)}
                                >
                                    −
                                </button>
                                <input
                                    type="number"
                                    min="5"
                                    step="5"
                                    className="w-full p-3 border-y border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
                                    value={cookingTime}
                                    onChange={handleTimeChange}
                                />
                                <button
                                    type="button"
                                    className="bg-purple-200 hover:bg-purple-300 text-purple-800 font-medium p-3 rounded-r-lg"
                                    onClick={() => adjustTime(5)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-purple-800 font-medium mb-2">
                                Select a Cooking Method (Optional):
                            </label>
                            <select
                                className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                <option value="">Any cooking method</option>
                                <option value="bake">Baking</option>
                                <option value="grill">Grilling</option>
                                <option value="saute">Sautéing</option>
                                <option value="slow-cook">Slow cooking</option>
                                <option value="air-fry">Air frying</option>
                                <option value="pressure-cook">Pressure cooking</option>
                                <option value="stir-fry">Stir frying</option>
                            </select>
                        </div>
                    </div>

                    {/* Allergies as Checkboxes */}
                    <div className="mb-6">
                        <label className="block text-purple-800 font-medium mb-3">
                            Allergies (Select all that apply):
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {Object.entries({
                                dairy: "Dairy",
                                eggs: "Eggs",
                                peanuts: "Peanuts",
                                treeNuts: "Tree Nuts",
                                fish: "Fish",
                                shellfish: "Shellfish",
                                soy: "Soy",
                                wheat: "Wheat",
                                sesame: "Sesame"
                            }).map(([key, label]) => (
                                <div key={key} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`allergy-${key}`}
                                        checked={allergies[key]}
                                        onChange={() => toggleAllergy(key)}
                                        className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-purple-300 rounded"
                                    />
                                    <label htmlFor={`allergy-${key}`} className="ml-2 text-purple-700">
                                        {label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dietary Restrictions */}
                    <div className="mb-8">
                        <label className="block text-purple-800 font-medium mb-3">
                            Dietary Restrictions (Optional):
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {Object.entries({
                                glutenFree: "Gluten-Free",
                                dairyFree: "Dairy-Free",
                                vegan: "Vegan",
                                vegetarian: "Vegetarian",
                                keto: "Keto",
                                lowCarb: "Low-Carb",
                                paleo: "Paleo"
                            }).map(([key, label]) => (
                                <div key={key} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={key}
                                        checked={dietaryRestrictions[key]}
                                        onChange={() => toggleRestriction(key)}
                                        className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-purple-300 rounded"
                                    />
                                    <label htmlFor={key} className="ml-2 text-purple-700">
                                        {label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-150 text-lg"
                    >
                        Generate Recipe
                    </button>
                </form>

                {/* Recipe Result Area - This would be populated after form submission */}
                <div className="mt-8 bg-white rounded-xl shadow-lg p-8 hidden">
                    <h2 className="text-2xl font-bold text-purple-800 mb-4">Your Recipe</h2>
                    {/* Recipe content would go here */}
                </div>
            </div>
        </div>
    );
};

export default AIChefPage;