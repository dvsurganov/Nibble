import React from "react";

const plans = [
    {
        name: "Basic",
        price: "$9.99/mo",
        features: ["Access to basic features", "Email support", "Limited access"],
    },
    {
        name: "Pro",
        price: "$19.99/mo",
        features: ["All Basic features", "Priority support", "Unlimited access"],
    },
    {
        name: "Elite",
        price: "$29.99/mo",
        features: ["All Pro features", "1-on-1 coaching", "Exclusive content"],
    },
];

const Subscriptions = () => {
    return (
        <div className="min-h-screen bg-[#eeeafd] flex flex-col items-center justify-center px-4 py-16">
            <h2 className="text-4xl font-bold text-purple-700 mb-10">Choose Your Plan</h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-[#f2efff] rounded-3xl p-6 shadow-lg transition-transform transform hover:scale-105"
                        style={{
                            boxShadow:
                                "8px 8px 16px #d1cbe7, -8px -8px 16px #ffffff",
                        }}
                    >
                        <h3 className="text-2xl font-semibold text-purple-800 mb-4">{plan.name}</h3>
                        <p className="text-purple-600 text-xl font-bold mb-6">{plan.price}</p>
                        <ul className="text-purple-700 mb-6 space-y-2">
                            {plan.features.map((feature, i) => (
                                <li key={i}>✓ {feature}</li>
                            ))}
                        </ul>
                        <button className="w-full py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition">
                            Subscribe
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Subscriptions;
