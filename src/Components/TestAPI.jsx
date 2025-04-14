// src/Components/TestAPI.jsx
import { useState, useEffect } from 'react';

const TestAPI = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make a simple request to the API
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');

                if (!response.ok) {
                    throw new Error(`API responded with status: ${response.status}`);
                }

                const result = await response.json();
                console.log("API Response:", result);
                setData(result);
            } catch (err) {
                console.error("Error fetching from API:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="p-8 text-center">Loading...</div>;
    if (error) return <div className="p-8 text-center text-red-500">Error: {error}</div>;

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">API Test</h1>
            {data && data.meals && data.meals[0] ? (
                <div>
                    <h2 className="text-xl">{data.meals[0].strMeal}</h2>
                    <img
                        src={data.meals[0].strMealThumb}
                        alt={data.meals[0].strMeal}
                        className="w-64 mt-4 rounded-lg"
                    />
                    <pre className="mt-4 p-4 bg-gray-100 rounded overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
                </div>
            ) : (
                <p>No data received from API</p>
            )}
        </div>
    );
};

export default TestAPI;