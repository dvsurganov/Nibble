// src/services/mealService.js
const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const MealService = {
    getRandomMeal: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/random.php`);
            const data = await response.json();
            return data.meals[0];
        } catch (error) {
            console.error('Error fetching random meal:', error);
            throw error;
        }
    },

    getMealsByCategory: async (category) => {
        try {
            const response = await fetch(`${API_BASE_URL}/filter.php?c=${category}`);
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.error('Error fetching meals by category:', error);
            throw error;
        }
    },

    getMealById: async (id) => {
        try {
            const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
            const data = await response.json();
            return data.meals ? data.meals[0] : null;
        } catch (error) {
            console.error('Error fetching meal details:', error);
            throw error;
        }
    },
};

export default MealService;