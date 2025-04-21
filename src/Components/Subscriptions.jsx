import React from "react";

const plans = [
    {
        name: "Basic",
        price: "$5.99/mo",
        features: ["3 AI recipe suggestions from simple prompts", "Basic calorie calculator", "Access to community recipes"],
    },
    {
        name: "Pro",
        price: "$12.99/mo",
        features: ["All Basic features", "Advanced AI recipe customization", "Calorie adjustment tool", "Save unlimited personal recipes"],
    },
    {
        name: "Elite",
        price: "$29.99/mo",
        features: ["All Pro features", "Personalized nutrition coaching", "Premium AI chef with dietary specializations", "Custom meal planning tools", "Shopping Cart"],
    },
];

const Subscriptions = () => {
    return (
        <div className="min-h-screen-900  flex flex-col items-center justify-center px-4 py-24">
            <h2 className="text-4xl font-bold text-purple-700 mb-10">Choose Your Plan</h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-[#f2efff] rounded-3xl p-6 shadow-lg transition-transform transform hover:scale-105 flex flex-col h-full"
                        style={{
                            boxShadow:
                                "8px 8px 16px #d1cbe7, -8px -8px 16px #ffffff",
                        }}
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-purple-800 mb-4">{plan.name}</h3>
                            <p className="text-purple-600 text-xl font-bold mb-6">{plan.price}</p>
                        </div>
                        <div className="flex-grow">
                            <ul className="text-purple-700 space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>✓ {feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-6">
                            <button className="w-full py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition">
                                Subscribe
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Subscriptions;
